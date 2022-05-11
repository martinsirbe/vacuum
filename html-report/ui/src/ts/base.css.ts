import { css } from 'lit';

export const BaseCSS = css`
  :root {
    --global-font-size: 15px;
    --global-line-height: 1.4em;
    --global-space: 10px;
    --font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    --mono-font-stack: Menlo, Monaco, Lucida Console, Liberation Mono,
      DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace, serif;
    --background-color: #fff;
    --page-width: 60em;
    --font-color: #151515;
    --invert-font-color: #fff;
    --primary-color: #1a95e0;
    --secondary-color: #727578;
    --error-color: #d20962;
    --progress-bar-background: #727578;
    --progress-bar-fill: #151515;
    --code-bg-color: #e8eff2;
    --input-style: solid;
    --display-h1-decoration: none;
  }
  * {
    box-sizing: border-box;
    text-rendering: geometricPrecision;
  }
  ::-moz-selection {
    background: var(--primary-color);
    color: var(--invert-font-color);
  }
  ::selection {
    background: var(--primary-color);
    color: var(--invert-font-color);
  }
  body {
    font-size: var(--global-font-size);
    color: var(--font-color);
    line-height: var(--global-line-height);
    margin: 0;
    font-family: var(--font-stack);
    word-wrap: break-word;
    background-color: var(--background-color);
  }
  .logo,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: var(--global-line-height);
  }
  a {
    cursor: pointer;
    color: var(--primary-color);
    text-decoration: none;
  }
  a:hover {
    background-color: var(--primary-color);
    color: var(--invert-font-color);
  }
  em {
    font-size: var(--global-font-size);
    font-style: italic;
    font-family: var(--font-stack);
    color: var(--font-color);
  }
  blockquote,
  code,
  em,
  strong {
    line-height: var(--global-line-height);
  }
  .logo,
  blockquote,
  code,
  footer,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  header,
  li,
  ol,
  p,
  section,
  ul {
    float: none;
    margin: 0;
    padding: 0;
  }
  .logo,
  blockquote,
  h1,
  ol,
  p,
  ul {
    margin-top: calc(var(--global-space) * 2);
    margin-bottom: calc(var(--global-space) * 2);
  }
  .logo,
  h1 {
    position: relative;
    display: inline-block;
    display: table-cell;
    padding: calc(var(--global-space) * 2) 0 calc(var(--global-space) * 2);
    margin: 0;
    overflow: hidden;
    font-weight: 600;
  }
  h1::after {
    content: \"====================================================================================================\";
    position: absolute;
    bottom: 5px;
    left: 0;
    display: var(--display-h1-decoration);
  }
  .logo + *,
  h1 + * {
    margin-top: 0;
  }
  h2,
  h3,
  h4,
  h5,
  h6 {
    position: relative;
    margin-bottom: var(--global-line-height);
    font-weight: 600;
  }
  blockquote {
    position: relative;
    padding-left: calc(var(--global-space) * 2);
    padding-left: 2ch;
    overflow: hidden;
  }
  blockquote::after {
    content: \">\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\\A>\";
    white-space: pre;
    position: absolute;
    top: 0;
    left: 0;
    line-height: var(--global-line-height);
    color: #9ca2ab;
  }
  code {
    font-weight: inherit;
    background-color: var(--code-bg-color);
    font-family: var(--mono-font-stack);
  }
  code::after,
  code::before {
    content: \"\`\";
    display: inline;
  }
  pre code::after,
  pre code::before {
    content: \"\";
  }
  pre {
    display: block;
    word-break: break-all;
    word-wrap: break-word;
    color: var(--secondary-color);
    background-color: var(--background-color);
    border: 1px solid var(--secondary-color);
    padding: var(--global-space);
    white-space: pre-wrap;
    white-space: -moz-pre-wrap;
    white-space: -pre-wrap;
    white-space: -o-pre-wrap;
  }
  pre code {
    overflow-x: scroll;
    padding: 0;
    margin: 0;
    display: inline-block;
    min-width: 100%;
    font-family: var(--mono-font-stack);
  }
  .terminal .logo,
  .terminal blockquote,
  .terminal code,
  .terminal h1,
  .terminal h2,
  .terminal h3,
  .terminal h4,
  .terminal h5,
  .terminal h6,
  .terminal strong {
    font-size: var(--global-font-size);
    font-style: normal;
    font-family: var(--font-stack);
    color: var(--font-color);
  }
  .terminal-prompt {
    position: relative;
    white-space: nowrap;
  }
  .terminal-prompt::before {
    content: \"> \";
  }
  .terminal-prompt::after {
    content: \"\";
    -webkit-animation: cursor 0.8s infinite;
    animation: cursor 0.8s infinite;
    background: var(--primary-color);
    border-radius: 0;
    display: inline-block;
    height: 1em;
    margin-left: 0.2em;
    width: 3px;
    bottom: -2px;
    position: relative;
  }
  @-webkit-keyframes cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  @keyframes cursor {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
  li,
  li > ul > li {
    position: relative;
    display: block;
    padding-left: calc(var(--global-space) * 2);
  }
  nav > ul > li {
    padding-left: 0;
  }
  li::after {
    position: absolute;
    top: 0;
    left: 0;
  }
  ul > li::after {
    content: \"-\";
  }
  nav ul > li::after {
    content: \"\";
  }
  ol li::before {
    content: counters(item, \".\") \". \";
    counter-increment: item;
  }
  ol ol li::before {
    content: counters(item, \".\") \" \";
    counter-increment: item;
  }
  .terminal-menu li::after,
  .terminal-menu li::before {
    display: none;
  }
  ol {
    counter-reset: item;
  }
  ol li:nth-child(n + 10)::after {
    left: -7px;
  }
  ol ol {
    margin-top: 0;
    margin-bottom: 0;
  }
  .terminal-menu {
    width: 100%;
  }
  .terminal-nav {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  ul ul {
    margin-top: 0;
    margin-bottom: 0;
  }
  .terminal-menu ul {
    list-style-type: none;
    padding: 0 !important;
    display: flex;
    flex-direction: column;
    width: 100%;
    flex-grow: 1;
    font-size: var(--global-font-size);
    margin-top: 0;
  }
  .terminal-menu li {
    display: flex;
    margin: 0 0 0.5em 0;
    padding: 0;
  }
  ol.terminal-toc li {
    border-bottom: 1px dotted var(--secondary-color);
    padding: 0;
    margin-bottom: 15px;
  }
  .terminal-menu li:last-child {
    margin-bottom: 0;
  }
  ol.terminal-toc li a {
    margin: 4px 4px 4px 0;
    background: var(--background-color);
    position: relative;
    top: 6px;
    text-align: left;
    padding-right: 4px;
  }
  .terminal-menu li a:not(.btn) {
    text-decoration: none;
    display: block;
    width: 100%;
    border: none;
    color: var(--secondary-color);
  }
  .terminal-menu li a.active {
    color: var(--font-color);
  }
  .terminal-menu li a:hover {
    background: 0 0;
    color: inherit;
  }
  ol.terminal-toc li::before {
    content: counters(item, \".\") \". \";
    counter-increment: item;
    position: absolute;
    right: 0;
    background: var(--background-color);
    padding: 4px 0 4px 4px;
    bottom: -8px;
  }
  ol.terminal-toc li a:hover {
    background: var(--primary-color);
    color: var(--invert-font-color);
  }
  hr {
    position: relative;
    overflow: hidden;
    margin: calc(var(--global-space) * 4) 0;
    border: 0;
    border-bottom: 1px dashed var(--secondary-color);
  }
  p {
    margin: 0 0 var(--global-line-height);
    color: var(--global-font-color);
  }
  .container {
    max-width: var(--page-width);
  }
  .container,
  .container-fluid {
    margin: 0 auto;
    padding: 0 calc(var(--global-space) * 2);
  }
  img {
    width: 100%;
  }
  .progress-bar {
    height: 8px;
    background-color: var(--progress-bar-background);
    margin: 12px 0;
  }
  .progress-bar.progress-bar-show-percent {
    margin-top: 38px;
  }
  .progress-bar-filled {
    background-color: var(--progress-bar-fill);
    height: 100%;
    transition: width 0.3s ease;
    position: relative;
    width: 0;
  }
  .progress-bar-filled::before {
    content: \"\";
    border: 6px solid transparent;
    border-top-color: var(--progress-bar-fill);
    position: absolute;
    top: -12px;
    right: -6px;
  }
  .progress-bar-filled::after {
    color: var(--progress-bar-fill);
    content: attr(data-filled);
    display: block;
    font-size: 12px;
    white-space: nowrap;
    position: absolute;
    border: 6px solid transparent;
    top: -38px;
    right: 0;
    transform: translateX(50%);
  }
  .progress-bar-no-arrow > .progress-bar-filled::after,
  .progress-bar-no-arrow > .progress-bar-filled::before {
    content: \"\";
    display: none;
    visibility: hidden;
    opacity: 0;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: var(--global-line-height) 0;
    color: var(--font-color);
    font-size: var(--global-font-size);
  }
  table td,
  table th {
    vertical-align: top;
    border: 1px solid var(--font-color);
    line-height: var(--global-line-height);
    padding: calc(var(--global-space) / 2);
    font-size: 1em;
  }
  table thead th {
    font-size: 1em;
  }
  table tfoot tr th {
    font-weight: 500;
  }
  table caption {
    font-size: 1em;
    margin: 0 0 1em 0;
  }
  table tbody td:first-child {
    font-weight: 700;
    color: var(--secondary-color);
  }
  .form {
    width: 100%;
  }
  fieldset {
    border: 1px solid var(--font-color);
    padding: 1em;
  }
  label {
    font-size: 1em;
    color: var(--font-color);
  }
  input[type='email'],
  input[type='number'],
  input[type='password'],
  input[type='search'],
  input[type='text'] {
    border: 1px var(--input-style) var(--font-color);
    width: 100%;
    padding: 0.7em 0.5em;
    font-size: 1em;
    font-family: var(--font-stack);
    -webkit-appearance: none;
    border-radius: 0;
  }
  input[type='email']:active,
  input[type='email']:focus,
  input[type='number']:active,
  input[type='number']:focus,
  input[type='password']:active,
  input[type='password']:focus,
  input[type='search']:active,
  input[type='search']:focus,
  input[type='text']:active,
  input[type='text']:focus {
    outline: 0;
    -webkit-appearance: none;
    border: 1px solid var(--font-color);
  }
  input[type='email']:not(:placeholder-shown):invalid,
  input[type='number']:not(:placeholder-shown):invalid,
  input[type='password']:not(:placeholder-shown):invalid,
  input[type='search']:not(:placeholder-shown):invalid,
  input[type='text']:not(:placeholder-shown):invalid {
    border-color: var(--error-color);
  }
  input,
  textarea {
    color: var(--font-color);
    background-color: var(--background-color);
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  input::-moz-placeholder,
  textarea::-moz-placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  input:-ms-input-placeholder,
  textarea:-ms-input-placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  input::-ms-input-placeholder,
  textarea::-ms-input-placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  input::placeholder,
  textarea::placeholder {
    color: var(--secondary-color) !important;
    opacity: 1;
  }
  textarea {
    height: auto;
    width: 100%;
    resize: none;
    border: 1px var(--input-style) var(--font-color);
    padding: 0.5em;
    font-size: 1em;
    font-family: var(--font-stack);
    -webkit-appearance: none;
    border-radius: 0;
  }
  textarea:focus {
    outline: 0;
    -webkit-appearance: none;
    border: 1px solid var(--font-color);
  }
  textarea:not(:placeholder-shown):invalid {
    border-color: var(--error-color);
  }
  input:-webkit-autofill,
  input:-webkit-autofill:focus textarea:-webkit-autofill,
  input:-webkit-autofill:hover,
  select:-webkit-autofill,
  select:-webkit-autofill:focus,
  select:-webkit-autofill:hover,
  textarea:-webkit-autofill:hover textarea:-webkit-autofill:focus {
    border: 1px solid var(--font-color);
    -webkit-text-fill-color: var(--font-color);
    box-shadow: 0 0 0 1000px var(--invert-font-color) inset;
    -webkit-box-shadow: 0 0 0 1000px var(--invert-font-color) inset;
    transition: background-color 5000s ease-in-out 0s;
  }
  .form-group {
    margin-bottom: var(--global-line-height);
    overflow: auto;
  }
  .btn {
    border-style: solid;
    border-width: 1px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    outline: 0;
    padding: 0.65em 2em;
    font-size: 1em;
    font-family: inherit;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    position: relative;
    z-index: 1;
  }
  .btn:active {
    box-shadow: none;
  }
  .btn.btn-ghost {
    border-color: var(--font-color);
    color: var(--font-color);
    background-color: transparent;
  }
  .btn.btn-ghost:focus,
  .btn.btn-ghost:hover {
    border-color: var(--tertiary-color);
    color: var(--tertiary-color);
    z-index: 2;
  }
  .btn.btn-ghost:hover {
    background-color: transparent;
  }
  .btn-block {
    width: 100%;
    display: flex;
  }
  .btn-default {
    background-color: var(--font-color);
    border-color: var(--invert-font-color);
    color: var(--invert-font-color);
  }
  .btn-default:focus:not(.btn-ghost),
  .btn-default:hover {
    background-color: var(--secondary-color);
    color: var(--invert-font-color);
  }
  .btn-default.btn-ghost:focus,
  .btn-default.btn-ghost:hover {
    border-color: var(--secondary-color);
    color: var(--secondary-color);
    z-index: 2;
  }
  .btn-error {
    color: var(--invert-font-color);
    background-color: var(--error-color);
    border: 1px solid var(--error-color);
  }
  .btn-error:focus:not(.btn-ghost),
  .btn-error:hover {
    background-color: var(--error-color);
    border-color: var(--error-color);
  }
  .btn-error.btn-ghost {
    border-color: var(--error-color);
    color: var(--error-color);
  }
  .btn-error.btn-ghost:focus,
  .btn-error.btn-ghost:hover {
    border-color: var(--error-color);
    color: var(--error-color);
    z-index: 2;
  }
  .btn-primary {
    color: var(--invert-font-color);
    background-color: var(--primary-color);
    border: 1px solid var(--primary-color);
  }
  .btn-primary:focus:not(.btn-ghost),
  .btn-primary:hover {
    background-color: var(--primary-color);
    border-color: var(--primary-color);
  }
  .btn-primary.btn-ghost {
    border-color: var(--primary-color);
    color: var(--primary-color);
  }
  .btn-primary.btn-ghost:focus,
  .btn-primary.btn-ghost:hover {
    border-color: var(--primary-color);
    color: var(--primary-color);
    z-index: 2;
  }
  .btn-small {
    padding: 0.5em 1.3em !important;
    font-size: 0.9em !important;
  }
  .btn-group {
    overflow: auto;
  }
  .btn-group .btn {
    float: left;
  }
  .btn-group .btn-ghost:not(:first-child) {
    margin-left: -1px;
  }
  .terminal-card {
    border: 1px solid var(--secondary-color);
  }
  .terminal-card > header {
    color: var(--invert-font-color);
    text-align: center;
    background-color: var(--secondary-color);
    padding: 0.5em 0;
  }
  .terminal-card > div:first-of-type {
    padding: var(--global-space);
  }
  .terminal-timeline {
    position: relative;
    padding-left: 70px;
  }
  .terminal-timeline::before {
    content: ' ';
    background: var(--secondary-color);
    display: inline-block;
    position: absolute;
    left: 35px;
    width: 2px;
    height: 100%;
    z-index: 400;
  }
  .terminal-timeline .terminal-card {
    margin-bottom: 25px;
  }
  .terminal-timeline .terminal-card::before {
    content: ' ';
    background: var(--invert-font-color);
    border: 2px solid var(--secondary-color);
    display: inline-block;
    position: absolute;
    margin-top: 25px;
    left: 26px;
    width: 15px;
    height: 15px;
    z-index: 400;
  }
  .terminal-alert {
    color: var(--font-color);
    padding: 1em;
    border: 1px solid var(--font-color);
    margin-bottom: var(--global-space);
  }
  .terminal-alert-error {
    color: var(--error-color);
    border-color: var(--error-color);
  }
  .terminal-alert-primary {
    color: var(--primary-color);
    border-color: var(--primary-color);
  }
  @media screen and (max-width: 960px) {
    label {
      display: block;
      width: 100%;
    }
    pre::-webkit-scrollbar {
      height: 3px;
    }
  }
  @media screen and (max-width: 480px) {
    form {
      width: 100%;
    }
  }
  @media only screen and (min-width: 30em) {
    .terminal-nav {
      flex-direction: row;
      align-items: center;
    }
    .terminal-menu ul {
      flex-direction: row;
      justify-items: flex-end;
      align-items: center;
      justify-content: flex-end;
      margin-top: calc(var(--global-space) * 2);
    }
    .terminal-menu li {
      margin: 0;
      margin-right: 2em;
    }
    .terminal-menu li:last-child {
      margin-right: 0;
    }
  }
  .terminal-media:not(:last-child) {
    margin-bottom: 1.25rem;
  }
  .terminal-media-left {
    padding-right: var(--global-space);
  }
  .terminal-media-left,
  .terminal-media-right {
    display: table-cell;
    vertical-align: top;
  }
  .terminal-media-right {
    padding-left: var(--global-space);
  }
  .terminal-media-body {
    display: table-cell;
    vertical-align: top;
  }
  .terminal-media-heading {
    font-size: 1em;
    font-weight: 700;
  }
  .terminal-media-content {
    margin-top: 0.3rem;
  }
  .terminal-placeholder {
    background-color: var(--secondary-color);
    text-align: center;
    color: var(--font-color);
    font-size: 1rem;
    border: 1px solid var(--secondary-color);
  }
  figure > img {
    padding: 0;
  }
  .terminal-avatarholder {
    width: calc(var(--global-space) * 5);
    height: calc(var(--global-space) * 5);
  }
  .terminal-avatarholder img {
    padding: 0;
  }
  figure {
    margin: 0;
  }
  figure > figcaption {
    color: var(--secondary-color);
    text-align: center;
  }
  .hljs {
    display: block;
    overflow-x: auto;
    padding: 0.5em;
    background: var(--block-background-color);
    color: var(--font-color);
  }
  .hljs-comment,
  .hljs-quote {
    color: var(--secondary-color);
  }
  .hljs-variable {
    color: var(--font-color);
  }
  .hljs-built_in,
  .hljs-keyword,
  .hljs-name,
  .hljs-selector-tag,
  .hljs-tag {
    color: var(--primary-color);
  }
  .hljs-addition,
  .hljs-attribute,
  .hljs-literal,
  .hljs-section,
  .hljs-string,
  .hljs-template-tag,
  .hljs-template-variable,
  .hljs-title,
  .hljs-type {
    color: var(--secondary-color);
  }
  .hljs-string {
    color: var(--secondary-color);
  }
  .hljs-deletion,
  .hljs-meta,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: var(--primary-color);
  }
  .hljs-doctag {
    color: var(--secondary-color);
  }
  .hljs-attr {
    color: var(--primary-color);
  }
  .hljs-bullet,
  .hljs-link,
  .hljs-symbol {
    color: var(--primary-color);
  }
  .hljs-emphasis {
    font-style: italic;
  }
  .hljs-strong {
    font-weight: 700;
  }
`;
