// Copyright 2022 Dave Shanley / Quobix
// SPDX-License-Identifier: MIT

package cmd

import (
	"encoding/json"
	"errors"
	"github.com/daveshanley/vacuum/cui"
	"github.com/daveshanley/vacuum/model"
	"github.com/daveshanley/vacuum/motor"
	"github.com/daveshanley/vacuum/rulesets"
	"github.com/pterm/pterm"
	"github.com/spf13/cobra"
	"io/ioutil"
	"os"
	"time"
)

func GetSpectralReportCommand() *cobra.Command {

	return &cobra.Command{
		Use:   "report",
		Short: "Generate a Spectral compatible JSON report",
		Long: "Generate a JSON report using the same model as Spectral. Default output " +
			"filename is 'vacuum-spectral-report.json' located in the working directory.",
		Example: "vacuum report my-awesome-spec.yaml <vacuum-spectral-report.json>",
		RunE: func(cmd *cobra.Command, args []string) error {

			// check for file args
			if len(args) == 0 {
				errText := "please supply an OpenAPI specification to generate a report"
				pterm.Error.Println(errText)
				pterm.Println()
				return errors.New(errText)
			}

			timeFlag, _ := cmd.Flags().GetBool("time")

			reportOutput := "vacuum-spectral-report.json"

			if len(args) > 1 {
				reportOutput = args[1]
			}

			start := time.Now()

			// read file.
			specBytes, fileError := ioutil.ReadFile(args[0])

			if fileError != nil {
				pterm.Error.Printf("Unable to read file '%s': %s\n", args[0], fileError.Error())
				pterm.Println()
				return fileError
			}

			rulesetFlag, _ := cmd.Flags().GetString("ruleset")

			// read spec and parse to dashboard.
			defaultRuleSets := rulesets.BuildDefaultRuleSets()

			// default is recommended rules, based on spectral (for now anyway)
			selectedRS := defaultRuleSets.GenerateOpenAPIRecommendedRuleSet()

			// if ruleset has been supplied, lets make sure it exists, then load it in
			// and see if it's valid. If so - let's go!
			if rulesetFlag != "" {

				rsBytes, rsErr := ioutil.ReadFile(rulesetFlag)
				if rsErr != nil {
					pterm.Error.Printf("Unable to read ruleset file '%s': %s\n", rulesetFlag, rsErr.Error())
					pterm.Println()
					return rsErr
				}
				selectedRS, rsErr = cui.BuildRuleSetFromUserSuppliedSet(rsBytes, defaultRuleSets)
				if rsErr != nil {
					return rsErr
				}
			}

			pterm.Info.Printf("Running vacuum against spec '%s' against %d rules: %s\n\n%s\n", args[0],
				len(selectedRS.Rules), selectedRS.DocumentationURI, selectedRS.Description)
			pterm.Println()

			ruleset := motor.ApplyRulesToRuleSet(&motor.RuleSetExecution{
				RuleSet: selectedRS,
				Spec:    specBytes,
			})

			resultSet := model.NewRuleResultSet(ruleset.Results)
			resultSet.SortResultsByLineNumber()

			duration := time.Since(start)

			// serialize
			spectralReport := resultSet.GenerateSpectralReport(args[0]) // todo: convert to full path.

			data, err := json.MarshalIndent(spectralReport, "", "    ")

			if err != nil {
				pterm.Error.Printf("Unable to read marshal report into JSON '%s': %s\n", args[0], fileError.Error())
				pterm.Println()
				return err
			}

			err = ioutil.WriteFile(reportOutput, data, 0664)

			if err != nil {
				pterm.Error.Printf("Unable to write report file: '%s': %s\n", reportOutput, fileError.Error())
				pterm.Println()
				return err
			}

			pterm.Info.Printf("Report generated for '%s', written to '%s'\n", args[0], reportOutput)
			pterm.Println()

			fi, _ := os.Stat(args[0])
			cui.RenderTime(timeFlag, duration, fi)

			return nil
		},
	}

}