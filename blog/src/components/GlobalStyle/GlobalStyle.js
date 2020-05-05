import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
/********************************************
Tedilize 2.0 - Normalization and Base Styling 
*********************************************/

*,
::before,
::after {
    box-sizing: border-box;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    vertical-align: inherit;
}

::before,
::after {
    text-decoration: inherit;
}

:root {
    -moz-tab-size: 4;
    tab-size: 4;
}

/* Default system sans-serif font */

html {
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
    line-height: 1.15;
    text-rendering: auto;
    font-variant-ligatures: none;
    font-feature-settings: "liga" 0;
    font-family:
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        'Roboto',
        'Oxygen-Sans',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Noto Sans',
        sans-serif,
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji';
}


/*********************
Document
*********************/

body {
    font-weight: 400;
    min-height: 100%;
    margin: 0;
    scroll-behavior: smooth;
}

main {
    display: block;
}

hr {
    height: 0;
    overflow: visible;
    box-sizing: content-box;
    border: 0;
    border-bottom: 2px solid #aaa;
}

blockquote {
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
    hyphens: auto;
}

address {
    font-style: normal;
    line-height: inherit;
}

template,
[hidden],
p:empty,
caption:empty,
figcaption:empty {
    display: none;
}


/*********************
Inline elements
*********************/

b,
strong {
    font-weight: bolder;
}

sub,
sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
}

sub {
    bottom: -0.25em;
}

sup {
    top: -0.5em;
}

mark {
    background-color: #ff3;
    border-radius: 3px;
    padding: 0 0.2em;
}

small {
    font-size: 80%;
}

ins {
    -webkit-text-decoration: underline dashed #aaa;
    text-decoration: underline dashed #aaa;
}

u {
    -webkit-text-decoration: underline solid #ccc;
    text-decoration: underline solid #ccc;
}

abbr[title],
abbr[aria-label] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    border-bottom: none;
}


/*********************
Headings
*********************/

h1 {
    font-size: 2.4rem;
    font-weight: 300;
    margin: 0.67em 0;
}

h2 {
    font-size: 2rem;
    font-weight: 300;
}

h3 {
    font-size: 1.7rem;
    font-weight: 500;
}

h4 {
    font-size: 1.5rem;
    font-weight: 400;
}

h5 {
    font-size: 1.2rem;
    font-weight: 400;
}

h6 {
    font-size: 1rem;
}


/*********************
Tables
*********************/

table {
    border-collapse: collapse;
    border-spacing: 0;
    width: 100%;
}

td,
th {
    padding: 0.125em 0.5em 0.25em 0.5em;
    line-height: 1;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: top;
    font-variant-numeric: tabular-nums;
    font-feature-settings: "tnum";
}

caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    caption-side: top;
}


/*********************
List elements
*********************/

ul, 
ol {
    padding-left: 2em;
}

nav ol,
nav ul {
    list-style: none;
    padding: 0;
}

dt {
    font-weight: bold;
}


/*********************
Monospace elements
*********************/

code,
kbd,
samp,
pre {
    font-size: 90%;
    white-space: pre-wrap;
    font-family:
        SFMono-Regular,
        Menlo,
        Monaco,
        Consolas,
        'Roboto Mono',
        'Noto Mono',
        'Liberation Mono',
        'Courier New',
        monospace;
}

code {
    background: #ddd;
    padding: 1px 4px;
    border-radius: 2px;
}

kbd {
    background: #ddd;
    padding: 1px 0.4rem;
    border-radius: 0.2rem;
    border-bottom: 1px solid #aaa;
    white-space: nowrap;
}

pre {
    overflow: auto;
    display: block;
    word-break: break-all;
    line-height: 140%;
    font-size: 0.9rem;
}

pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
    display: inline-block;
}


/*********************
Images and figures
*********************/

img,
video,
audio,
iframe {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border: none;
    object-fit: cover;
    image-rendering: auto;
}

img[src$='.gif'],
img[src$='.svg'],
canvas,
svg {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
}

a img {
    object-fit: contain;
}

figure {
    margin: 0.4em 0.8em 0.1em;
    display: block;
}

figure img, 
figure video, 
figure iframe {
    width: 100%;
}

figure a img {
    cursor: -webkit-zoom-in;
    cursor: zoom-in;
}

figure > a::after {
    opacity: 0.6;
    pointer-events: none;
    position: absolute;
    transform: translate(-1.5em, 0.5em);
    content: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='17' height='17'%3E%3Cpath d='M15.6 15.6a1.5 1.5 0 01-2.2 0l-2.6-2.7a7 7 0 112.1-2.1l2.7 2.6a1.5 1.5 0 010 2.2zM7 2a5 5 0 100 10A5 5 0 007 2zm1 8H6V8H4V6h2V4h2v2h2v2H8z' fill='white'/%3E%3C/svg%3E");
    filter: drop-shadow(0 0 1px #111);
}

figcaption {
    text-align: center;
    padding: 8px 2px 2px 2px;
    font-size: 0.9em;
    line-height: 1.2em;
}

svg:not(:root) {
    overflow: hidden;
    vertical-align: middle;
}


/*********************
Interactive elements
*********************/

a,
button,
input,
label,
select,
textarea,
summary,
[role='button'],
[role='textbox'],
[contenteditable],
[tabindex] {
    touch-action: manipulation;
}

*:focus {
    outline: none;
    box-shadow: none;    
}

a:focus,
button:focus,
input:focus:not([type='checkbox']):not([type='radio']),
label:focus,
select:focus,
textarea:focus,
summary:focus,
[role='button']:focus,
[role='textbox']:focus,
[tabindex]:focus,
:focus + label[for] {
    box-shadow: 0 0 3px 1px #999;
}

[tabindex='-1']:focus {
    box-shadow: none !important;
}

a[href] {
    /* color: #007bff; */
    color: #111;
    background-color: transparent;
    -webkit-text-decoration-skip: ink;
    text-decoration-skip: ink;
}

a[href]::before, 
a[href]::after {
    display: inline-block;
    text-decoration: none;
}

a:not([href]),
a[href=''],
a[href='#'] {
    pointer-events: none;
    text-decoration: none;
    font-weight: inherit;
    color: inherit;
    touch-action: none;
}

/* Details Element */

summary {
    cursor: pointer;
    display: list-item;
}

details {
    display: block;
}

/* Dialog Element */

dialog {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    /*
    top: 50%;
    transform: translate(0, -50%);
    */
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
    height: -webkit-fit-content;
    height: -moz-fit-content;
    height: fit-content;
    margin: auto;
    display: block;
    z-index: 9999;
    border: solid;
    padding: 1em;
    background: #fff;
    will-change: auto;
}

dialog:not([open]) {
    display: none;
}


/*********************
Form elements
*********************/

input:not(:focus):invalid {
    color: #d00;
}

/*
input:not(:empty):invalid {
    caret-color: red;
}
*/

/* Input Placeholder Color */

:-ms-input-placeholder {
    color: #888;
}

::-webkit-input-placeholder {
    color: #888;
}

::-moz-placeholder {
    color: #888;
    opacity: 1;
}

::placeholder {
    color: #888;
}

[disabled],
[disabled] + label[for],
[aria-disabled] {
    opacity: 0.4;
    pointer-events: none;
    cursor: default;
}

[readonly],
button > *,
[type='button'] > * {
    pointer-events: none;
}

button,
input,
optgroup,
select,
label,
textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
    margin: 0;
    border-radius: 0;
}

[role='button'],
[role='textbox'],
input::-webkit-file-upload-button,
button,
input,
select,
textarea {
    display: inline-block;
    border: 1px solid #999;
    color: inherit;
    letter-spacing: inherit;
    padding: 0.25em 0.375em;
    max-width: 100%;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0;
    text-transform: none;
    text-overflow: ellipsis;
    cursor: pointer;
    overflow: hidden;
    word-wrap: normal;
}

select:not([multiple]):not([size]) {
    padding-right: 1.4em;
    background: no-repeat right center / 1em;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='22' height='22'%3E%3Cpath d='M6.6 18l4.5-4.6 2 2L6.6 22 0 15.4l2-2zm0-14L2 8.6l-2-2L6.6 0 13 6.6l-2 2z' fill='dimgray'/%3E%3C/svg%3E");
}

button,
[role='button'],
[type='button'],
[type='reset'],
[type='submit'],
input::-webkit-file-upload-button {
    background-color: #eee;
    overflow: visible;
    cursor: pointer;
    white-space: nowrap;
    text-transform: none;
    -webkit-appearance: none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
}

[type='checkbox'],
[type='radio'] {
    cursor: pointer;
}

[type='date'],
[type='time'],
[type='datetime-local'],
[type='month'] {
    -webkit-appearance: listbox;
}

textarea {
    overflow: auto;
    resize: vertical;
    max-width: 100%;
    min-height: 1.1em;
}

label {
    display: inline-block;
}

label[for] {
    cursor: pointer;
}

output {
    display: inline-block;
    font-weight: bold;
    margin: auto 0.3em;
}

fieldset {
    padding: 0.35em 0.75em 0.625em;
    border: 1px solid #bbb;
}

legend {
    padding: 0 0.3em;
    max-width: 100%;
    display: table;
    white-space: normal;
}


/* Input Color */

[type='color'] {
    background-color: #eee;
    height: 1.6em;
    vertical-align: middle;
}

/* Input Number */

[type='number'] {
    -moz-appearance: textfield;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    -webkit-appearance: none;
}

[type='number']:out-of-range {
    border-color: #d00;
}

/* Input Search */

[type='search'] {
    -webkit-appearance: textfield;
    outline-offset: -1px;
}

::-webkit-search-decoration {
    -webkit-appearance: none;
}

/* Input Range */

[type='range'] {
    -webkit-appearance: none;
    height: 1.2em;
    width: 12em;
    vertical-align: bottom;
    background: transparent;
    font: 1em/1 arial, sans-serif;
    border: none;
}

[type='range']::-webkit-slider-runnable-track {
    border-radius: 0.3em;
    height: 0.5em;
    background: #ccc;
}

[type='range']::-moz-range-track {
    border-radius: 0.3em;
    height: 0.5em;
    background: #ccc;
}

[type='range']::-ms-track {
    border-radius: 0.3em;
    height: 0.55em;
    background: #ccc;
}

[type='range']::-webkit-slider-thumb {
    -webkit-appearance: none;
    margin-top: -0.3em;
    width: 1.15em;
    height: 1.15em;
    border-radius: 50%;
    background: #eee;
    border: 2px solid #aaa;
}

[type='range']::-moz-range-thumb {
    -moz-appearance: none;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: #eee;
    border: 2px solid #aaa;
}

[type='range']::-ms-thumb {
    appearance: none;
    margin-top: 0;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    background: #eee;
    border: 2px solid #aaa;
    overflow: visible;
}

/* Meter */

meter {
    vertical-align: bottom;
    height: 1.2em;
    background: none;
    background-color: #eee;
    border: 1px solid #bbb;
}

::-webkit-meter-bar {
    background: #eee;
}

::-webkit-meter-optimum-value {
    background: green;
}

:-moz-meter-optimum::-moz-meter-bar {
    background: green;
}

::-webkit-meter-suboptimum-value {
    background: gold;
}

:-moz-meter-sub-optimum::-moz-meter-bar {
    background: gold;
}

::-webkit-meter-even-less-good-value {
    background: red;
}

:-moz-meter-sub-sub-optimum::-moz-meter-bar {
    background: red;
}

/* Progress */

progress {
    display: inline-block;
    border: 1px solid #bbb;
    vertical-align: baseline;
    height: 1.2em;
}

progress[value] {
    background-color: #eee;
}

progress[value]::-webkit-progress-bar {
    background-color: #eee;
}

progress[value]::-webkit-progress-value {
    background-color: #777;
}

progress[value]::-moz-progress-bar {
    background-color: #777;
}


/*********************
Accessibility
********************/

::after,
::before {
    speak: none;
}

abbr {
    speak: spell-out;
}

[aria-busy='true'] {
    cursor: progress;
}

[aria-controls] {
    cursor: pointer;
}

[aria-disabled='true'],
[disabled] {
    cursor: not-allowed;
}

[aria-hidden='false'][hidden] {
    display: initial;
}

[aria-hidden='false'][hidden]:not(:focus) {
    clip: rect(0,0,0,0);
    position: absolute;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
    *,
    ::before,
    ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
        scroll-behavior: auto !important;
    }
}


/*********************
Browser Hacks
*********************/
/*
@-ms-viewport {
    width: device-width;
}
*/
::-ms-expand {
    display: none;
}

::-moz-focus-inner {
    border-style: none;
    padding: 0;
}

:-moz-ui-invalid {
    box-shadow: none;
}

/* Clear fix */
hr::before,
header::after,
footer::before {
    content: "";
    display: table;
    clear: both;
}

/* MS Edge 12-18 hack (Poor text-decoration support) */
@supports (-ms-accelerator:true) or (-ms-ime-align:auto) {
    abbr[title] {
        text-decoration: none;
        border-bottom: 1px dotted #999;
    }

    ins {
        text-decoration: none;
    }
}

/*********************
Responsive elements
*********************/

/* Mobile Devices */
@media only screen and (min-device-width: 320px) and (max-device-height: 1080px) and (-webkit-min-device-pixel-ratio: 2) {
    a img {
        cursor: pointer;
    }

    [aria-label]:hover::after {
        visibility: hidden;
    }
}

/* Phone (Portrait) and narrow screen */
@media only screen and (min-width: 320px) and (max-width: 812px) {
    body {
        font-size: 0.96em;
    }
    
    nav,
    header,
    main,
    footer,
    aside,
    section,
    article,
    iframe,
    table {
        width: 100%;
        float: none;
        position: relative;
    }

    fieldset {
        width: auto;
    }
}


/* Printing */
@media print {
    @page {
        size: a3;
    }
    
    *,
    ::before,
    ::after {
        text-shadow: none !important;
        box-shadow: none !important;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        page-break-after: avoid;
    }

    p,
    h2,
    h3 {
        orphans: 3;
        widows: 3;
    }

    table,
    tr,
    li,
    img,
    pre,
    blockquote,
    fieldset,
    figure,
    video,
    picture,
    address,
    select,
    textarea {
        -webkit-column-break-inside: avoid;
        page-break-inside: avoid;
        break-inside: avoid;
        max-width: 100%;
    }

    thead {
        display: table-header-group;
    }

    pre {
        overflow-x: auto;
        white-space: pre-wrap !important;
        word-wrap: break-word;
    }

    abbr {
        border: none;
        text-decoration: none !important;
    }

    abbr[title]::after {
        content: " (" attr(title) ")";
        font-size: 80%;
        color: grey;
    }

    [href] {
        text-decoration: underline;
    }

    main [href]::after {
        content: " (" attr(href) ")";
        font-size: 70%;
        color: grey;
    }

    [type='range'], 
    meter, 
    progress {
        border: 1px solid #666;
    }
    
    dialog[open] {
        display: none;
    }

    main + footer::after {
        content: "Please recycle this document.";
        display: block;
        font-size: 0.8em;
        margin: 0.5em;
        text-align: center;
        color: #888;
    }
}

`

export default GlobalStyle