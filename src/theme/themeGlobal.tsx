import React from 'react';
import {createGlobalStyle} from 'styled-components';

export const ThemeGlobal = createGlobalStyle`
  *::before,
  *::after {
    box-sizing: border-box;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #b3b3b3;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #707070;
  }

  ::-webkit-scrollbar-track {
    background: #ffffff;
    border-radius: 10px;
    box-shadow: inset 7px 10px 12px 0px #f0f0f0;
  }

  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }

  body {
    margin: 0;
    font-size: 0.875rem;
    background: ${props => props.theme.mode === 'light' ? props.theme.colors.light.body : props.theme.colors.dark.body};
    font-weight: 400;
    line-height: 1.5;
    color: ${props => props.theme.mode === 'light' ? props.theme.colors.light.tint : props.theme.colors.dark.tint};
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
    opacity: 0.25;
  }

  hr:not([size]) {
    height: 1px;
  }

  h6, h5, h4, h3, h2, h1 {
    margin-top: 0;
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }

  h1 {
    font-size: calc(1.375rem + 1.5vw) !important;
  }

  @media (min-width: 1200px) {
    h1 {
      font-size: 2.5rem !important;
    }
  }

  h2 {
    font-size: calc(1.325rem + 0.9vw) !important;
  }

  @media (min-width: 1200px) {
    h2 {
      font-size: 2rem !important;
    }
  }

  h3 {
    font-size: calc(1.3rem + 0.6vw) !important;
  }

  @media (min-width: 1200px) {
    h3 {
      font-size: 1.75rem !important;
    }
  }

  h4 {
    font-size: calc(1.275rem + 0.3vw) !important;
  }

  @media (min-width: 1200px) {
    h4 {
      font-size: 1.5rem !important;
    }
  }

  h5 {
    font-size: 1.25rem !important;
  }

  h6 {
    font-size: 1rem !important;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  abbr[title],
  abbr[data-bs-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 700;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: bolder;
  }

  small {
    font-size: 0.875em !important;
  }

  mark {
    padding: 0.2em;
    background-color: #fcf8e3;
  }

  sub,
  sup {
    position: relative;
    font-size: 0.75em !important;
    line-height: 0;
    vertical-align: baseline;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  a {
    color: #0d6efd;
    text-decoration: underline;
  }

  a:hover {
    color: #0a58ca;
  }

  a:not([href]):not([class]), a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }

  pre,
  code,
  kbd,
  samp {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 1em !important;
    direction: ltr /* rtl:ignore */;
    unicode-bidi: bidi-override;
  }

  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em !important;
  }

  pre code {
    font-size: inherit !important;
    color: inherit;
    word-break: normal;
  }

  code {
    font-size: 0.875em !important;
    color: #d63384;
    word-wrap: break-word;
  }

  a > code {
    color: inherit;
  }

  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em !important;
    color: #fff;
    background-color: #212529;
    border-radius: 0.2rem;
  }

  kbd kbd {
    padding: 0;
    font-size: 1em !important;
    font-weight: 700;
  }

  figure {
    margin: 0 0 1rem;
  }

  img,
  svg {
    vertical-align: middle;
  }

  table {
    caption-side: bottom;
    border-collapse: collapse;
  }

  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }

  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }

  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }

  label {
    display: inline-block;
  }

  button {
    border-radius: 0;
  }

  button:focus:not(:focus-visible) {
    outline: 0;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  button,
  select {
    text-transform: none;
  }

  [role=button] {
    cursor: pointer;
  }

  select {
    word-wrap: normal;
  }

  select:disabled {
    opacity: 1;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  button,
  [type=button],
  [type=reset],
  [type=submit] {
    -webkit-appearance: button;
  }

  button:not(:disabled),
  [type=button]:not(:disabled),
  [type=reset]:not(:disabled),
  [type=submit]:not(:disabled) {
    cursor: pointer;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  textarea {
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw) !important;
    line-height: inherit;
  }

  @media (min-width: 1200px) {
    legend {
      font-size: 1.5rem !important;
    }
  }

  legend + * {
    clear: left;
  }

  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }

  ::-webkit-inner-spin-button {
    height: auto;
  }

  [type=search] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  /* rtl:raw:
  [type="tel"],
  [type="url"],
  [type="email"],
  [type="number"] {
    direction: ltr;
  }
  */
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  ::file-selector-button {
    font: inherit;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }

  output {
    display: inline-block;
  }

  iframe {
    border: 0;
  }

  summary {
    display: list-item;
    cursor: pointer;
  }

  progress {
    vertical-align: baseline;
  }

  [hidden] {
    display: none !important;
  }
`;