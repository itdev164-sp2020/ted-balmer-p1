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
    word-break: break-word;
	line-height: 1.15;
    text-rendering: auto;
	-webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
    -ms-overflow-style: -ms-autohiding-scrollbar;
    scrollbar-width: thin;
    font-kerning: normal;
    font-variant-ligatures: none;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-family:
        system-ui,
        -apple-system,
        BlinkMacSystemFont,
        'Segoe UI',
        'Roboto',
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
    min-height: 100vh;
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
    border: 1px solid #aaa;
}

blockquote {
    -webkit-hyphens: auto;
    -ms-hyphens: auto;
}

template, 
[hidden], 
p:empty, 
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
    border-radius: 5px;
    padding: 0 2px;
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
    -webkit-text-decoration: underline dotted #880;
    text-decoration: underline dotted #880;
    cursor: help;
    border-bottom: none;
}


/* List Elements */

nav ol,
nav ul {
    list-style: none;
    padding: 0;
}


/* Tables */

table {
    border-collapse: collapse;
    border-spacing: 0;
    font-variant-numeric: tabular-nums;
}

td, 
th {
    padding: 0.125em 0.5em 0.25em 0.5em;
    line-height: 1;
    text-align: left;
    text-overflow: ellipsis;
    vertical-align: top;
    -webkit-font-feature-settings: "tnum";
    -moz-font-feature-settings: "tnum";
    -ms-font-feature-settings: "tnum";
    font-feature-settings: "tnum";
}

caption {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    caption-side: top;
}


/* Headings */

h1 {
    font-size: 2.3rem;
    margin: 0.67em 0;
    font-weight: 300;
    letter-spacing: -1.5px;
}

h2 {
    font-size: 2rem;
    font-weight: 300;
    letter-spacing: -0.5px;
}

h3 {
    font-size: 1.6rem;
    font-weight: 500;
}

h4 {
    font-weight: 400;
    font-size: 1.4rem;
    letter-spacing: 0.25px;
    margin-bottom: 5px;
}

h5 {
    font-size: 1.2rem;
    font-weight: 400;
}

h6 {
    font-size: 1rem;
}


/*********************
Monospace elements
*********************/

code,
kbd,
samp,
pre {
    white-space: pre-wrap;
	font-size: 0.85rem;
	font-family:
		SFMono-Regular,
		'Menlo',
		'Consolas',
        'Roboto Mono',
        'Noto Mono',
		'Liberation Mono',
		monospace;
}

kbd {
    background: #ddd;
    padding: 1px 4px;
    border-radius: 4px;  
    border-bottom: 1px solid #aaa;
}

code {
    background: #eee;
    padding: 1px 4px;
    border-radius: 3px;
}


/*********************
Images and figures
*********************/

img,
iframe {
    height: auto;
    max-width: 100%;
    vertical-align: middle;
    border-style: none;
    object-fit: cover;
    image-rendering: auto;
}

img[src$='.gif'], 
img[src$='.svg'], 
canvas {
    image-rendering: -webkit-optimize-contrast;
    image-rendering: -moz-crisp-edges;
    image-rendering: crisp-edges;
    image-rendering: pixelated;
    -ms-interpolation-mode: nearest-neighbor;
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

figcaption {
    text-align: center;
    padding: 8px 2px 2px 2px;
    font-size: 0.9em;
    line-height: 1.2em;
}

svg:not(:root) {
    overflow: hidden;
}


/*********************
Interactive elements
*********************/

a,
area,
button,
input,
label,
select,
textarea,
summary,
[tabindex] {
    -ms-touch-action: manipulation;
    touch-action: manipulation;
}

a[href] {
    -webkit-text-decoration-skip: ink;
    text-decoration-skip: ink;
}

a[href=''], 
a[href='#'] {
    pointer-events: none;
    text-decoration: none;
}

a::before, 
a::after {
    display: inline-block;
}

[tabindex='-1']:focus {
    outline: none !important;
}

summary {
    cursor: pointer;
	display: list-item;
}

details {
    display: block;
}

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

input:not(:empty):invalid {
    caret-color: red;
}

[disabled], 
[disabled] + label[for],
[aria-disabled] {
    opacity: 0.6;
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
textarea {
	font-family: inherit;
	font-size: 100%;
	line-height: 1.15;
	margin: 0;
}

button,
input,
select,
textarea {
    border: 1px solid #999;
    color: inherit;
    font: inherit;
    letter-spacing: inherit;
    padding: 0.25em 0.375em;
    max-width: 100%;
}

select {
    -webkit-appearance: none;
    -moz-appearance: none;
    border-radius: 0;
    text-transform: none;
    cursor: pointer;
    overflow: hidden;
    -webkit-user-select: none;
    user-select: none;
}

select:not([multiple]):not([size]) {
    padding-right: 1.4em;
    background: no-repeat right center / 1em;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCI+PHBhdGggZD0iTTEuOTcgNS4wNWw0LjggNC44IDQuOC00LjggMS40OCAxLjQ3LTYuMjcgNi4yOEwuNSA2LjUyeiIvPjwvc3ZnPg==);
}

button,
[role='button'],
[type='button'],
[type='reset'],
[type='submit'],
[type='file']::-webkit-file-upload-button {
    overflow: visible;
	cursor: pointer;
    white-space: nowrap;
    text-transform: none;
	-webkit-appearance: button;
	-webkit-touch-callout: none;
    -webkit-user-select: none;
    user-select: none;
}

[type='checkbox'],
[type='radio'] {
    cursor: pointer;
}

input[list] {
    background: no-repeat right center / 1em;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='4'%3E%3Cpath d='M4 0h6L7 4'/%3E%3C/svg%3E");
}

textarea {
    overflow: auto;
    resize: vertical;
    max-width: 100%;
    min-height: 1.7em;
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
    border: 1px solid #ccc;
}

legend {
	padding: 0 0.3em;
    display: table;
}

[type='color'] {
    background-color: #eee;
    height: 1.6em;
    vertical-align: middle;
}

[type='range'] {
    height: 1.2em;
	vertical-align: bottom;
}

[type='number'] {
    -moz-appearance: textfield;
    appearance: textfield;
}

[type='number']:out-of-range {
    border-color: #d00;
}

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
    -webkit-appearance: none;
	height: auto;
}

[type='search'] {
	-webkit-appearance: textfield;
	outline-offset: -2px;
}

::-webkit-search-decoration {
	-webkit-appearance: none;
}

:-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.54);
}

::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
}

::-moz-placeholder {
    color: #888; 
    opacity: 1
}

meter {
    display: inline-block;
	vertical-align: bottom;
    height: 1.1em;    
}

progress {
    display: inline-block;
	vertical-align: bottom;
    height: 1.1em;
}


/*********************
Accessibility
********************/

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
    clip: rect(0, 0, 0, 0);
    position: absolute;
}

/* Remove all animations and transitions for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
    *, ::before, ::after {
        animation-delay: -1ms !important;
        animation-duration: 1ms !important;
        animation-iteration-count: 1 !important;
        background-attachment: initial !important;
        scroll-behavior: auto !important;
        transition-delay: 0s !important;
        transition-duration: 0s !important;
    }
}


/*********************
Browser Hacks
*********************/

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

.clearfix, 
hr::after, 
header::after, 
footer::before {
    content: " ";
    display: table;
    clear: both;
}

/* MS Edge 12+ (text-decoration support) */
@supports (-ms-accelerator: true) or (-ms-ime-align: auto) {
    abbr[title] {
        text-decoration: none;
        border-bottom: 1px dotted #a00;
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
    abbr {
        border: none;
        text-decoration: none;
    }
    
    abbr[title]::after, 
    abbr[aria-label]::after {
        content: " (" attr(title) ")";
        font-size: 0.9em;
    }
    
    a img {
        cursor: pointer;
    }
    
    input[list] {
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
    }
    
    [aria-label]:hover::after {
        visibility: hidden;
    }
}

/* Phone (Portrait) and narrow screen */
@media only screen and (min-width: 320px) and (max-width: 812px) {    
    nav,
    header, 
    main, 
    footer, 
    section, 
    aside,
    article,
    table {
        width: 100%;
        float: none;
    }
    
    fieldset {
        width: auto;
    }
}


/* Printing */
@media only print {
    *, 
    ::before, 
    ::after {
        color: #000;
        box-shadow: none;
        text-shadow: none;
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
    textarea {
        page-break-inside: avoid;
        break-inside: avoid;
        max-width: 100%;
        -webkit-column-break-inside: avoid;
    }
    
    thead {
        display: table-header-group;
    }    

	pre {
		overflow-x: auto;
		white-space: -pre-wrap;
		white-space: pre-wrap;
		word-wrap: break-word;
    }
    
    abbr {
        border: none;
        text-decoration: none;
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
}

`

export default GlobalStyle