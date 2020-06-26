(this["webpackJsonprenderers-as-editors"] = this["webpackJsonprenderers-as-editors"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!./node_modules/postcss-loader/src??postcss!./node_modules/resolve-url-loader??ref--6-oneOf-5-3!./node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./src/App.scss ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/**\n ****************************\n * Generic Styles\n ****************************\n*/\nag-grid, ag-grid-angular, ag-grid-ng2, ag-grid-polymer, ag-grid-aurelia {\n  display: block; }\n\n.ag-hidden {\n  display: none !important; }\n\n.ag-invisible {\n  visibility: hidden !important; }\n\n.ag-drag-handle {\n  cursor: move;\n  cursor: grab; }\n\n.ag-column-drop-wrapper {\n  display: flex; }\n\n.ag-column-drop-horizontal-half-width {\n  display: inline-block;\n  width: 50% !important; }\n\n.ag-unselectable {\n  -webkit-user-select: none;\n  user-select: none; }\n\n.ag-selectable {\n  -webkit-user-select: text;\n  user-select: text; }\n\n.ag-tab {\n  position: relative; }\n\n.ag-tab-guard {\n  position: absolute;\n  width: 0;\n  height: 0;\n  display: block; }\n\n.ag-select-agg-func-popup {\n  position: absolute; }\n\n.ag-input-wrapper, .ag-picker-field-wrapper {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  line-height: normal;\n  position: relative; }\n\n.ag-shake-left-to-right {\n  animation-direction: alternate;\n  animation-duration: 0.2s;\n  animation-iteration-count: infinite;\n  animation-name: ag-shake-left-to-right; }\n\n@keyframes ag-shake-left-to-right {\n  from {\n    padding-left: 6px;\n    padding-right: 2px; }\n  to {\n    padding-left: 2px;\n    padding-right: 6px; } }\n\n.ag-root-wrapper {\n  cursor: default;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; }\n  .ag-root-wrapper.ag-layout-normal {\n    height: 100%; }\n\n.ag-watermark {\n  position: absolute;\n  bottom: 10px;\n  right: 25px;\n  opacity: 0.5;\n  transition: opacity 1s ease-out 3s; }\n  .ag-watermark:before {\n    content: '';\n    background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDk0cHgiIGhlaWdodD0iMjM5cHgiIHZpZXdCb3g9IjAgMCA0OTQgMjM5IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA0Ny4xICg0NTQyMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+CiAgICA8dGl0bGU+TG9nbzwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPgogICAgICAgIDxwYXRoIGQ9Ik0wLjYxMjg0OTkzMSwxMDggTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgTDAuNjEyODQ5OTMxLDY3LjQ1OTYzNzQgQzAuNjEyODQ5OTMxLDYyLjEwMDY1MzYgMy40NzE4MzM3OCw1Ny4xNDg3NDgzIDguMTEyODQ5OTMsNTQuNDY5MjU2NCBMOTguMzA2NDI1LDIuMzk1OTcxNTcgTDk4LjMwNjQyNSwyLjM5NTk3MTU3IEMxMDIuOTQ3NDQxLC0wLjI4MzUyMDM1OCAxMDguNjY1NDA5LC0wLjI4MzUyMDM1OCAxMTMuMzA2NDI1LDIuMzk1OTcxNTcgTDExMy4zMDY0MjUsMi4zOTU5NzE1NyBMMjAzLjUsNTQuNDY5MjU2NCBMMjAzLjUsNTQuNDY5MjU2NCBDMjA4LjE0MTAxNiw1Ny4xNDg3NDgzIDIxMSw2Mi4xMDA2NTM2IDIxMSw2Ny40NTk2Mzc0IEwyMTEsMTM4IEwxODEsMTM4IEwxODAuOTk3MDQxLDkzLjk5OTk5OTggTDE4MC45OTYwMzIsOTMuOTk5OTk5OSBDMTgwLjk5NTQ3NSw4NS43MTYxMjI2IDE3NC4yNzk5MDksNzkuMDAxMDA4NyAxNjUuOTk2MDMyLDc5LjAwMTAwODcgTDEyMiw3OC45OTk5OTk5IEMxMTMuNzE1NzI5LDc4Ljk5OTk5OTkgMTA3LDg1LjcxNTcyODYgMTA3LDkzLjk5OTk5OTkgTDEwNywxMzYuMDE1NjIzIEwxMDcsMTM2LjAxNTYyMyBDMTA3LDE0NC4yOTk4OTUgMTEzLjcxNTcyOSwxNTEuMDE1NjIzIDEyMiwxNTEuMDE1NjIzIEwxNjgsMTUxLjAxNTYyMyBMMTY4LDE2MyBDMTY4LDE2NC42NTY4NTQgMTY2LjY1Njg1NCwxNjYgMTY1LDE2NiBMMTIwLDE2NiBMMTIwLDE3OSBMMTY1Ljk5NjAzMiwxNzkgTDE2NS45OTYwMzIsMTc4Ljk5Nzg3NyBDMTc0LjI3OTQ3NCwxNzguOTk3ODc3IDE4MC45OTQ4NiwxNzIuMjgzNDQyIDE4MC45OTYwMzIsMTY0IEwxODEsMTUwLjk2MDU1NCBMMjExLDE1MC45NjA1NTQgTDIxMSwxNzEuNjA2MjA3IEwyMTEsMTcxLjYwNjIwNyBDMjExLDE3Ni45NjUxOTEgMjA4LjE0MTAxNiwxODEuOTE3MDk2IDIwMy41LDE4NC41OTY1ODggTDExMy4zMDY0MjUsMjM2LjY2OTg3MyBMMTEzLjMwNjQyNSwyMzYuNjY5ODczIEMxMDguNjY1NDA5LDIzOS4zNDkzNjUgMTAyLjk0NzQ0MSwyMzkuMzQ5MzY1IDk4LjMwNjQyNSwyMzYuNjY5ODczIEw4LjExMjg0OTkzLDE4NC41OTY1ODggTDguMTEyODQ5OTMsMTg0LjU5NjU4OCBDMy40NzE4MzM3OCwxODEuOTE3MDk2IDAuNjEyODQ5OTMxLDE3Ni45NjUxOTEgMC42MTI4NDk5MzEsMTcxLjYwNjIwNyBMMC42MTI4NDk5MzEsMTIxIEwyNywxMjEgTDI3LDEzNiBDMjcsMTQ0LjI4NDI3MSAzMy43MTU3Mjg3LDE1MSA0MiwxNTEgTDQyLDE1MSBMMTAwLDE1MSBMMTAwLDk0IEMxMDAsODUuNzE1NzI4OCA5My4yODQyNzEyLDc5IDg1LDc5IEwyNyw3OSBMMjcsOTIgTDg0LDkyIEM4NS42NTY4NTQyLDkyIDg3LDkzLjM0MzE0NTggODcsOTUgTDg3LDk1IEw4NywxMDggTDAuNjEyODQ5OTMxLDEwOCBaIiBpZD0icGF0aC0xIj48L3BhdGg+CiAgICA8L2RlZnM+CiAgICA8ZyBpZD0iU3ltYm9scyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkxvZ28iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDc3LDU1IEw0OTQsNTUgTDQ5NCwxNTEgTDQzNSwxNTEgQzQyNi43MTU3MjksMTUxIDQyMCwxNDQuMjg0MjcxIDQyMCwxMzYgTDQyMCw5NiBDNDIwLDg3LjcxNTcyODggNDI2LjcxNTcyOSw4MSA0MzUsODEgTDQzNSw4MSBMNDc3LDgxIEw0NzcsNTUgWiBNNDQwLDk4IEM0MzguMzQzMTQ2LDk4IDQzNyw5OS4zNDMxNDU4IDQzNywxMDEgTDQzNywxMzEgQzQzNywxMzIuNjU2ODU0IDQzOC4zNDMxNDYsMTM0IDQ0MCwxMzQgTDQ3NywxMzQgTDQ3Nyw5OCBMNDQwLDk4IFoiIGlkPSJkIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzOTYuMDAwMDAwLCA1NS4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxwb2x5Z29uIGlkPSJQYXRoLTYiIGZpbGw9IiNGRkZGRkYiIHBvaW50cz0iMCAyNiAxNyAyNiAxNyA5NiAwIDk2Ij48L3BvbHlnb24+CiAgICAgICAgICAgICAgICA8cG9seWdvbiBpZD0iUGF0aC03IiBmaWxsPSIjRTExRjIyIiBwb2ludHM9IjAgMS4xMzY4NjgzOGUtMTMgMTcgMS4xMzY4NjgzOGUtMTMgMTcgMTcgMCAxNyI+PC9wb2x5Z29uPgogICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0zMzEsMTUxIEwzNDgsMTUxIEwzNDgsMTAxIEwzNDgsMTAxIEMzNDgsOTkuMzQzMTQ1OCAzNDkuMzQzMTQ2LDk4IDM1MSw5OCBMMzg5LDk4IEwzODksODEgTDM0Niw4MSBMMzQ2LDgxIEMzMzcuNzE1NzI5LDgxIDMzMSw4Ny43MTU3Mjg4IDMzMSw5NiBMMzMxLDE1MSBaIiBpZD0iciIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPgogICAgICAgICAgICA8cGF0aCBkPSJNMzI0LDg2IEwzMjQsNzYgTDMyNCw3NiBDMzI0LDY3LjcxNTcyODggMzE3LjI4NDI3MSw2MSAzMDksNjEgTDI0OSw2MSBMMjQ5LDYxIEMyNDAuNzE1NzI5LDYxIDIzNCw2Ny43MTU3Mjg4IDIzNCw3NiBMMjM0LDEzNiBMMjM0LDEzNiBDMjM0LDE0NC4yODQyNzEgMjQwLjcxNTcyOSwxNTEgMjQ5LDE1MSBMMzA5LDE1MSBMMzA5LDE1MSBDMzE3LjI4NDI3MSwxNTEgMzI0LDE0NC4yODQyNzEgMzI0LDEzNiBMMzI0LDEwMCBMMjg3LDEwMCBMMjg3LDExNyBMMzA3LDExNyBMMzA3LDEzMSBMMzA3LDEzMSBDMzA3LDEzMi42NTY4NTQgMzA1LjY1Njg1NCwxMzQgMzA0LDEzNCBMMjU0LDEzNCBMMjU0LDEzNCBDMjUyLjM0MzE0NiwxMzQgMjUxLDEzMi42NTY4NTQgMjUxLDEzMSBMMjUxLDgxIEwyNTEsODEgQzI1MSw3OS4zNDMxNDU4IDI1Mi4zNDMxNDYsNzggMjU0LDc4IEwzMDQsNzggTDMwNCw3OCBDMzA1LjY1Njg1NCw3OCAzMDcsNzkuMzQzMTQ1OCAzMDcsODEgTDMwNyw4NiBMMzI0LDg2IFoiIGlkPSJHIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICAgICAgICAgIDxnIGlkPSJhZyI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iQ29tYmluZWQtU2hhcGUiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBmaWxsPSIjRTExRjIyIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgICAgIDxyZWN0IGlkPSJnIiBmaWxsPSIjRTExRjIyIiB4PSIxMjAiIHk9IjkyIiB3aWR0aD0iNDgiIGhlaWdodD0iNDYiIHJ4PSIzIj48L3JlY3Q+CiAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNDAsMTIxIEw4NywxMjEgTDg3LDEzOCBMNDMsMTM4IEw0MywxMzggQzQxLjM0MzE0NTgsMTM4IDQwLDEzNi42NTY4NTQgNDAsMTM1IEw0MCwxMjEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRTExRjIyIj48L3BhdGg+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==);\n    filter: invert(50%);\n    background-repeat: no-repeat;\n    background-size: 110px 60px;\n    display: block;\n    height: 60px;\n    width: 110px; }\n\n.ag-watermark-text {\n  opacity: 0.5;\n  font-weight: bold;\n  font-family: Impact, sans-serif;\n  font-size: 19px; }\n\n.ag-root-wrapper-body {\n  display: flex;\n  flex-direction: row; }\n  .ag-root-wrapper-body.ag-layout-normal {\n    flex: 1 1 auto;\n    height: 0;\n    min-height: 0; }\n\n.ag-root {\n  position: relative;\n  display: flex;\n  flex-direction: column; }\n  .ag-root.ag-layout-normal, .ag-root.ag-layout-auto-height {\n    overflow: hidden;\n    flex: 1 1 auto;\n    width: 0; }\n  .ag-root.ag-layout-normal {\n    height: 100%; }\n\n/**\n ****************************\n * Viewports\n ****************************\n*/\n.ag-header-viewport,\n.ag-floating-top-viewport,\n.ag-body-viewport,\n.ag-center-cols-viewport,\n.ag-floating-bottom-viewport,\n.ag-body-horizontal-scroll-viewport,\n.ag-virtual-list-viewport {\n  position: relative;\n  height: 100%;\n  min-width: 0px;\n  overflow: hidden;\n  flex: 1 1 auto; }\n\n.ag-body-viewport.ag-layout-print {\n  flex: none; }\n\n@media print {\n  .ag-layout-normal {\n    display: none; }\n  .ag-root-wrapper,\n  .ag-root-wrapper-body,\n  .ag-root,\n  .ag-body-viewport,\n  .ag-center-cols-container,\n  .ag-center-cols-viewport,\n  .ag-center-cols-clipper,\n  .ag-body-horizontal-scroll-viewport,\n  .ag-virtual-list-viewport {\n    height: auto !important;\n    overflow: hidden !important;\n    display: block !important; }\n  .ag-row {\n    page-break-inside: avoid; } }\n\n.ag-body-viewport {\n  display: flex; }\n  .ag-body-viewport.ag-layout-normal {\n    overflow-y: auto;\n    -webkit-overflow-scrolling: touch; }\n\n.ag-center-cols-viewport {\n  width: 100%;\n  overflow-x: auto; }\n\n.ag-body-horizontal-scroll-viewport {\n  overflow-x: scroll; }\n\n.ag-virtual-list-viewport {\n  overflow: auto;\n  width: 100%; }\n\n/**\n ****************************\n * Containers\n ****************************\n*/\n.ag-header-container,\n.ag-floating-top-container,\n.ag-body-container,\n.ag-pinned-right-cols-container,\n.ag-center-cols-container,\n.ag-pinned-left-cols-container,\n.ag-floating-bottom-container,\n.ag-body-horizontal-scroll-container,\n.ag-full-width-container,\n.ag-floating-bottom-full-width-container,\n.ag-virtual-list-container {\n  position: relative; }\n\n.ag-header-container, .ag-floating-top-container, .ag-floating-bottom-container {\n  height: 100%;\n  white-space: nowrap; }\n\n.ag-center-cols-clipper {\n  min-height: 100%; }\n\n.ag-center-cols-container {\n  display: block; }\n\n.ag-layout-print .ag-center-cols-clipper {\n  min-width: 100%; }\n\n.ag-layout-auto-height .ag-center-cols-clipper,\n.ag-layout-auto-height .ag-center-cols-container {\n  min-height: 50px; }\n\n.ag-pinned-right-cols-container {\n  display: block; }\n\n.ag-body-horizontal-scroll-container {\n  height: 100%; }\n\n.ag-full-width-container,\n.ag-floating-top-full-width-container,\n.ag-floating-bottom-full-width-container {\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  pointer-events: none; }\n\n.ag-full-width-container {\n  width: 100%; }\n\n.ag-floating-bottom-full-width-container, .ag-floating-top-full-width-container {\n  display: inline-block;\n  overflow: hidden;\n  height: 100%;\n  width: 100%; }\n\n.ag-virtual-list-container {\n  overflow: hidden; }\n\n/**\n ****************************\n * Scrollers\n ****************************\n*/\n.ag-center-cols-clipper {\n  flex: 1 1;\n  min-width: 0;\n  overflow: hidden; }\n\n.ag-body-horizontal-scroll {\n  min-height: 0;\n  min-width: 0;\n  width: 100%;\n  display: flex;\n  position: relative; }\n\n.ag-layout-print .ag-body-horizontal-scroll {\n  display: none; }\n\n.ag-force-vertical-scroll {\n  overflow-y: scroll !important; }\n  .ag-force-vertical-scroll.ag-layout-print {\n    overflow-y: visible !important; }\n\n.ag-horizontal-left-spacer, .ag-horizontal-right-spacer {\n  height: 100%;\n  min-width: 0;\n  overflow-x: scroll; }\n  .ag-horizontal-left-spacer.ag-scroller-corner, .ag-horizontal-right-spacer.ag-scroller-corner {\n    overflow-x: hidden; }\n\n/**\n ****************************\n * Headers\n ****************************\n*/\n.ag-header, .ag-pinned-left-header, .ag-pinned-right-header {\n  display: inline-block;\n  overflow: hidden;\n  position: relative; }\n\n.ag-header-cell-sortable {\n  cursor: pointer; }\n\n.ag-header {\n  display: flex;\n  width: 100%;\n  white-space: nowrap; }\n\n.ag-pinned-left-header {\n  height: 100%; }\n\n.ag-pinned-right-header {\n  height: 100%; }\n\n.ag-header-row {\n  position: absolute;\n  overflow: hidden; }\n\n.ag-header-cell {\n  display: inline-flex;\n  align-items: center;\n  position: absolute;\n  height: 100%; }\n\n.ag-header-group-cell-label, .ag-header-cell-label {\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden;\n  align-items: center;\n  text-overflow: ellipsis;\n  align-self: stretch; }\n\n.ag-header-cell-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.ag-right-aligned-header .ag-header-cell-label {\n  flex-direction: row-reverse; }\n\n.ag-header-group-text {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.ag-header-cell-resize {\n  position: absolute;\n  z-index: 2;\n  height: 100%;\n  width: 8px;\n  top: 0;\n  cursor: ew-resize; }\n  .ag-ltr .ag-header-cell-resize {\n    right: -4px; }\n  .ag-rtl .ag-header-cell-resize {\n    left: -4px; }\n\n.ag-pinned-left-header .ag-header-cell-resize {\n  right: -4px; }\n\n.ag-pinned-right-header .ag-header-cell-resize {\n  left: -4px; }\n\n.ag-header-select-all {\n  display: flex; }\n\n/**\n ****************************\n * Columns\n ****************************\n*/\n.ag-column-moving .ag-cell {\n  transition: left 0.2s; }\n\n.ag-column-moving .ag-header-cell {\n  transition: left 0.2s; }\n\n.ag-column-moving .ag-header-group-cell {\n  transition: left 0.2s, width 0.2s; }\n\n/**\n ****************************\n * Column Panel\n ****************************\n*/\n.ag-column-panel {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex: 1 1 auto; }\n\n.ag-column-select {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex-grow: 3;\n  flex-shrink: 1;\n  flex-basis: 0; }\n\n.ag-column-select-header {\n  position: relative;\n  display: flex;\n  flex: none; }\n\n.ag-column-select-header-icon {\n  position: relative; }\n\n.ag-column-select-header-filter-wrapper {\n  flex: 1 1 auto; }\n\n.ag-column-select-header-filter {\n  width: 100%; }\n\n.ag-column-select-list {\n  flex: 1 1 auto;\n  overflow: auto; }\n\n.ag-column-drop {\n  display: inline-flex;\n  align-items: center;\n  overflow: auto;\n  width: 100%; }\n\n.ag-column-drop-list {\n  display: flex;\n  align-items: center; }\n\n.ag-column-drop-cell {\n  display: flex;\n  align-items: center; }\n\n.ag-column-drop-cell-text {\n  overflow: hidden;\n  flex: 1 1 auto;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.ag-column-drop-vertical {\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  flex: 1 1;\n  align-items: stretch; }\n\n.ag-column-drop-vertical-title-bar {\n  display: flex;\n  align-items: center; }\n\n.ag-column-drop-vertical-list {\n  align-items: stretch;\n  flex-grow: 1;\n  flex-direction: column;\n  overflow-x: auto; }\n  .ag-column-drop-vertical-list > * {\n    flex: none; }\n\n.ag-column-drop-empty .ag-column-drop-vertical-list {\n  overflow: hidden; }\n\n.ag-column-drop-vertical-empty-message {\n  display: block; }\n\n.ag-column-drop.ag-column-drop-horizontal {\n  white-space: nowrap;\n  overflow: hidden; }\n\n.ag-column-drop-cell-button {\n  cursor: pointer; }\n\n.ag-filter-toolpanel {\n  flex: 1 1;\n  min-width: 0; }\n\n.ag-filter-toolpanel-header {\n  position: relative; }\n\n.ag-filter-toolpanel-header, .ag-filter-toolpanel-search {\n  display: flex;\n  align-items: center; }\n  .ag-filter-toolpanel-header > *, .ag-filter-toolpanel-search > * {\n    display: flex;\n    align-items: center; }\n\n.ag-filter-apply-panel {\n  display: flex;\n  justify-content: flex-end;\n  overflow: hidden; }\n\n/**\n ****************************\n * Rows\n ****************************\n*/\n.ag-row-animation .ag-row {\n  transition: transform 0.4s, top 0.4s, height 0.4s, background-color 0.1s, opacity 0.2s; }\n\n.ag-row-no-animation .ag-row {\n  transition: background-color 0.1s; }\n\n.ag-row {\n  white-space: nowrap;\n  width: 100%; }\n\n.ag-row-loading {\n  display: flex;\n  align-items: center; }\n\n.ag-row-position-absolute {\n  position: absolute; }\n\n.ag-row-position-relative {\n  position: relative; }\n\n.ag-full-width-row {\n  overflow: hidden;\n  pointer-events: all; }\n\n.ag-row-inline-editing {\n  z-index: 1; }\n\n.ag-row-dragging {\n  z-index: 2; }\n\n.ag-stub-cell {\n  display: flex;\n  align-items: center; }\n\n/**\n ****************************\n * Cells\n ****************************\n*/\n.ag-cell {\n  display: inline-block;\n  position: absolute;\n  white-space: nowrap; }\n\n.ag-cell-value, .ag-group-value {\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.ag-cell-wrapper {\n  display: flex;\n  align-items: center;\n  height: 100%; }\n  .ag-cell-wrapper.ag-row-group {\n    align-items: flex-start; }\n\n.ag-full-width-row .ag-cell-wrapper.ag-row-group {\n  align-items: center; }\n\n.ag-cell-auto-height {\n  height: 100%; }\n\n.ag-cell-inline-editing {\n  z-index: 1; }\n  .ag-cell-inline-editing .ag-cell-edit-wrapper,\n  .ag-cell-inline-editing .ag-cell-editor,\n  .ag-cell-inline-editing .ag-cell-editor .ag-wrapper,\n  .ag-cell-inline-editing .ag-cell-editor input {\n    height: 100%;\n    width: 100%;\n    line-height: normal; }\n\n.ag-cell .ag-icon {\n  display: inline-block;\n  vertical-align: middle; }\n\n/**\n ****************************\n * Filters\n ****************************\n*/\n.ag-set-filter-item {\n  display: flex;\n  align-items: center;\n  height: 100%; }\n\n.ag-set-filter-item-value {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n\n.ag-set-filter-item-checkbox {\n  display: flex;\n  pointer-events: none; }\n\n.ag-filter-body-wrapper {\n  display: flex;\n  flex-direction: column; }\n\n.ag-filter-filter {\n  flex: 1 1 auto;\n  overflow: hidden; }\n\n.ag-filter-condition {\n  display: flex; }\n\n/**\n ****************************\n * Floating Filter\n ****************************\n*/\n.ag-floating-filter-body {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  height: 100%; }\n\n.ag-floating-filter-full-body {\n  display: flex;\n  flex: 1 1 auto;\n  height: 100%;\n  width: 100%;\n  align-items: center;\n  overflow: hidden; }\n\n.ag-floating-filter-full-body > div {\n  flex: 1 1 auto; }\n\n.ag-floating-filter {\n  display: inline-block;\n  position: absolute; }\n\n.ag-floating-filter-input {\n  align-items: center;\n  display: flex;\n  width: 100%; }\n  .ag-floating-filter-input > * {\n    flex: 1 1 auto; }\n\n.ag-floating-filter-button {\n  display: flex;\n  flex: none; }\n\n/**\n ****************************\n * Drag & Drop\n ****************************\n*/\n.ag-dnd-ghost {\n  position: absolute;\n  display: inline-flex;\n  align-items: center;\n  cursor: move;\n  white-space: nowrap; }\n\n/**\n ****************************\n * Overlay\n ****************************\n*/\n.ag-overlay {\n  height: 100%;\n  left: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  width: 100%; }\n\n.ag-overlay-panel {\n  display: flex;\n  height: 100%;\n  width: 100%; }\n\n.ag-overlay-wrapper {\n  display: flex;\n  flex: none;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center;\n  text-align: center; }\n\n.ag-overlay-loading-wrapper {\n  pointer-events: all; }\n\n/**\n ****************************\n * Popup\n ****************************\n*/\n.ag-popup-child {\n  z-index: 5; }\n\n.ag-popup-editor {\n  position: absolute;\n  -webkit-user-select: none;\n          user-select: none;\n  z-index: 1; }\n\n.ag-large-text-input {\n  display: block; }\n\n/**\n ****************************\n * Virtual Lists\n ****************************\n*/\n.ag-virtual-list-item {\n  position: absolute;\n  width: 100%; }\n\n/**\n ****************************\n * Floating Top and Bottom\n ****************************\n*/\n.ag-floating-top {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex; }\n\n.ag-pinned-left-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px; }\n\n.ag-pinned-right-floating-top {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px; }\n\n.ag-floating-bottom {\n  overflow: hidden;\n  white-space: nowrap;\n  width: 100%;\n  position: relative;\n  display: flex; }\n\n.ag-pinned-left-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px; }\n\n.ag-pinned-right-floating-bottom {\n  display: inline-block;\n  overflow: hidden;\n  position: relative;\n  min-width: 0px; }\n\n/**\n ****************************\n * Dialog\n ****************************\n*/\n.ag-dialog, .ag-panel {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  overflow: hidden; }\n\n.ag-panel-title-bar {\n  display: flex;\n  flex: none;\n  align-items: center;\n  cursor: default; }\n\n.ag-panel-title-bar-title {\n  flex: 1 1 auto; }\n\n.ag-panel-title-bar-buttons {\n  display: flex; }\n\n.ag-panel-title-bar-button {\n  cursor: pointer; }\n\n.ag-panel-content-wrapper {\n  display: flex;\n  flex: 1 1 auto;\n  position: relative;\n  overflow: hidden; }\n\n.ag-dialog {\n  position: absolute; }\n\n.ag-resizer {\n  position: absolute;\n  pointer-events: none;\n  z-index: 1; }\n  .ag-resizer.ag-resizer-topLeft {\n    top: 0;\n    left: 0;\n    height: 5px;\n    width: 5px;\n    cursor: nwse-resize; }\n  .ag-resizer.ag-resizer-top {\n    top: 0;\n    left: 5px;\n    right: 5px;\n    height: 5px;\n    cursor: ns-resize; }\n  .ag-resizer.ag-resizer-topRight {\n    top: 0;\n    right: 0;\n    height: 5px;\n    width: 5px;\n    cursor: nesw-resize; }\n  .ag-resizer.ag-resizer-right {\n    top: 5px;\n    right: 0;\n    bottom: 5px;\n    width: 5px;\n    cursor: ew-resize; }\n  .ag-resizer.ag-resizer-bottomRight {\n    bottom: 0;\n    right: 0;\n    height: 5px;\n    width: 5px;\n    cursor: nwse-resize; }\n  .ag-resizer.ag-resizer-bottom {\n    bottom: 0;\n    left: 5px;\n    right: 5px;\n    height: 5px;\n    cursor: ns-resize; }\n  .ag-resizer.ag-resizer-bottomLeft {\n    bottom: 0;\n    left: 0;\n    height: 5px;\n    width: 5px;\n    cursor: nesw-resize; }\n  .ag-resizer.ag-resizer-left {\n    left: 0;\n    top: 5px;\n    bottom: 5px;\n    width: 5px;\n    cursor: ew-resize; }\n\n/**\n ****************************\n * Tooltip\n ****************************\n*/\n.ag-tooltip {\n  position: absolute;\n  pointer-events: none;\n  z-index: 99999; }\n\n/**\n ****************************\n * Animations\n ****************************\n*/\n.ag-value-slide-out {\n  margin-right: 5px;\n  opacity: 1;\n  transition: opacity 3s, margin-right 3s;\n  transition-timing-function: linear; }\n\n.ag-value-slide-out-end {\n  margin-right: 10px;\n  opacity: 0; }\n\n.ag-opacity-zero {\n  opacity: 0 !important; }\n\n/**\n ****************************\n * Menu\n ****************************\n*/\n.ag-menu {\n  max-height: 100%;\n  overflow-y: auto;\n  position: absolute;\n  -webkit-user-select: none;\n          user-select: none; }\n\n.ag-menu-column-select-wrapper {\n  height: 265px;\n  overflow: auto; }\n\n.ag-menu-list {\n  display: table; }\n\n.ag-menu-option, .ag-menu-separator {\n  display: table-row; }\n\n.ag-menu-separator-cell, .ag-menu-option-part {\n  display: table-cell;\n  vertical-align: middle; }\n\n.ag-menu-option-text {\n  white-space: nowrap; }\n\n.ag-menu-column-select-wrapper .ag-column-select {\n  height: 100%; }\n\n/**\n ****************************\n * Rich Select\n ****************************\n*/\n.ag-rich-select {\n  cursor: default;\n  outline: none; }\n\n.ag-rich-select-value {\n  display: flex;\n  align-items: center; }\n\n.ag-rich-select-value-icon {\n  flex: 1 1 auto;\n  order: 1; }\n  .ag-ltr .ag-rich-select-value-icon {\n    text-align: right; }\n  .ag-rtl .ag-rich-select-value-icon {\n    text-align: left; }\n\n.ag-rich-select-list {\n  position: relative; }\n\n.ag-rich-select-virtual-list-item {\n  display: flex; }\n\n.ag-rich-select-row {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: center;\n  white-space: nowrap; }\n\n/**\n ****************************\n * Pagination\n ****************************\n*/\n.ag-paging-panel {\n  align-items: center;\n  display: flex;\n  justify-content: flex-end; }\n\n.ag-paging-page-summary-panel {\n  display: flex;\n  align-items: center; }\n\n.ag-paging-button-wrapper {\n  position: relative;\n  overflow: hidden; }\n\n.ag-paging-button {\n  position: absolute; }\n\n.ag-disabled .ag-paging-page-summary-panel {\n  pointer-events: none; }\n\n/**\n ****************************\n * Tool Panel\n ****************************\n*/\n.ag-tool-panel-wrapper {\n  display: flex;\n  overflow-y: auto;\n  overflow-x: hidden;\n  cursor: default;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 200px; }\n\n.ag-column-select-column,\n.ag-column-select-column-group {\n  position: relative;\n  align-items: center;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  text-overflow: ellipsis;\n  white-space: nowrap; }\n  .ag-column-select-column > *,\n  .ag-column-select-column-group > * {\n    flex: none; }\n\n.ag-column-select-checkbox {\n  display: flex; }\n\n.ag-tool-panel-horizontal-resize {\n  cursor: ew-resize;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  width: 5px;\n  z-index: 1; }\n\n.ag-ltr .ag-side-bar-left .ag-tool-panel-horizontal-resize {\n  right: -3px; }\n\n.ag-rtl .ag-side-bar-left .ag-tool-panel-horizontal-resize {\n  left: -3px; }\n\n.ag-ltr .ag-side-bar-right .ag-tool-panel-horizontal-resize {\n  left: -3px; }\n\n.ag-rtl .ag-side-bar-right .ag-tool-panel-horizontal-resize {\n  right: -3px; }\n\n.ag-details-row {\n  width: 100%; }\n\n.ag-details-row-fixed-height {\n  height: 100%; }\n\n.ag-details-grid {\n  width: 100%; }\n\n.ag-details-grid-fixed-height {\n  height: 100%; }\n\n.ag-header-group-cell {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  position: absolute; }\n\n.ag-cell-label-container {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: row-reverse;\n  align-items: center;\n  width: 100%;\n  height: 100%; }\n\n.ag-right-aligned-header .ag-cell-label-container {\n  flex-direction: row; }\n\n/**\n ****************************\n * Side Bar\n ****************************\n*/\n.ag-side-bar {\n  display: flex;\n  flex-direction: row-reverse; }\n\n.ag-side-bar-left {\n  order: -1;\n  flex-direction: row; }\n\n.ag-side-button-button {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: nowrap;\n  white-space: nowrap;\n  outline: none;\n  cursor: pointer; }\n\n.ag-side-button-label {\n  writing-mode: vertical-lr; }\n\n/**\n ****************************\n * Status Bar\n ****************************\n*/\n.ag-status-bar {\n  display: flex;\n  justify-content: space-between;\n  overflow: hidden; }\n\n.ag-status-panel {\n  display: inline-flex; }\n\n.ag-status-name-value {\n  white-space: nowrap; }\n\n.ag-status-bar-left {\n  display: inline-flex; }\n\n.ag-status-bar-center {\n  display: inline-flex; }\n\n.ag-status-bar-right {\n  display: inline-flex; }\n\n/**\n ****************************\n * Widgets\n ****************************\n*/\n.ag-icon {\n  display: block;\n  speak: none; }\n\n.ag-group {\n  position: relative;\n  width: 100%; }\n\n.ag-group-title-bar {\n  display: flex;\n  align-items: center; }\n\n.ag-group-title {\n  display: block;\n  flex: 1 1 auto;\n  min-width: 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n.ag-group-title-bar .ag-group-title {\n  cursor: default; }\n\n.ag-group-toolbar {\n  display: flex;\n  align-items: center; }\n\n.ag-group-container {\n  display: flex; }\n\n.ag-disabled .ag-group-container {\n  pointer-events: none; }\n\n.ag-group-container-horizontal {\n  flex-direction: row;\n  flex-wrap: wrap; }\n\n.ag-group-container-vertical {\n  flex-direction: column; }\n\n.ag-charts-font-size-color {\n  display: flex;\n  align-self: stretch;\n  justify-content: space-between; }\n\n.ag-column-group-icons {\n  display: block; }\n  .ag-column-group-icons > * {\n    cursor: pointer; }\n\n.ag-group-item-alignment-stretch .ag-group-item {\n  align-items: stretch; }\n\n.ag-group-item-alignment-start .ag-group-item {\n  align-items: flex-start; }\n\n.ag-group-item-alignment-end .ag-group-item {\n  align-items: flex-end; }\n\n.ag-toggle-button-icon {\n  transition: right 0.3s;\n  position: absolute;\n  top: -1px; }\n\n.ag-input-field, .ag-select {\n  display: flex;\n  flex-direction: row;\n  align-items: center; }\n\n.ag-input-field-input {\n  flex: 1 1 auto;\n  width: 100%;\n  min-width: 0; }\n\n.ag-floating-filter-input .ag-input-field-input[type='date'] {\n  width: 1px; }\n\n.ag-range-field {\n  display: flex;\n  align-items: center; }\n\n.ag-angle-select {\n  display: flex;\n  align-items: center; }\n\n.ag-angle-select-wrapper {\n  display: flex; }\n\n.ag-angle-select-parent-circle {\n  display: block;\n  position: relative; }\n\n.ag-angle-select-child-circle {\n  position: absolute; }\n\n.ag-slider-wrapper {\n  display: flex; }\n\n.ag-slider-wrapper .ag-input-field {\n  flex: 1 1 auto; }\n\n.ag-picker-field-display {\n  flex: 1 1 auto; }\n\n.ag-picker-field {\n  display: flex;\n  align-items: center; }\n\n.ag-picker-field-icon {\n  display: flex;\n  border: 0;\n  padding: 0;\n  margin: 0;\n  cursor: pointer; }\n\n.ag-picker-field-wrapper {\n  overflow: hidden; }\n\n.ag-label-align-right .ag-label {\n  order: 1; }\n\n.ag-label-align-right > * {\n  flex: none; }\n\n.ag-label-align-top {\n  flex-direction: column;\n  align-items: flex-start; }\n  .ag-label-align-top > * {\n    align-self: stretch; }\n\n.ag-color-panel {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  text-align: center; }\n\n.ag-spectrum-color {\n  flex: 1 1 auto;\n  position: relative;\n  overflow: hidden;\n  cursor: default; }\n\n.ag-spectrum-fill {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.ag-spectrum-val {\n  cursor: pointer; }\n\n.ag-spectrum-dragger {\n  position: absolute;\n  pointer-events: none;\n  cursor: pointer; }\n\n.ag-spectrum-hue {\n  cursor: default;\n  background: linear-gradient(to left, #ff0000 3%, #ffff00 17%, #00ff00 33%, #00ffff 50%, #0000ff 67%, #ff00ff 83%, #ff0000 100%); }\n\n.ag-spectrum-alpha {\n  cursor: default; }\n\n.ag-spectrum-hue-background {\n  width: 100%;\n  height: 100%; }\n\n.ag-spectrum-alpha-background {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0), black);\n  width: 100%;\n  height: 100%; }\n\n.ag-spectrum-tool {\n  cursor: pointer; }\n\n.ag-spectrum-slider {\n  position: absolute;\n  pointer-events: none; }\n\n.ag-recent-colors {\n  display: flex; }\n\n.ag-recent-color {\n  cursor: pointer; }\n\n.ag-ltr .ag-column-select-indent-1 {\n  padding-left: 20px; }\n\n.ag-rtl .ag-column-select-indent-1 {\n  padding-right: 20px; }\n\n.ag-ltr .ag-row-group-indent-1 {\n  padding-left: 20px; }\n\n.ag-rtl .ag-row-group-indent-1 {\n  padding-right: 20px; }\n\n.ag-ltr .ag-column-select-indent-2 {\n  padding-left: 40px; }\n\n.ag-rtl .ag-column-select-indent-2 {\n  padding-right: 40px; }\n\n.ag-ltr .ag-row-group-indent-2 {\n  padding-left: 40px; }\n\n.ag-rtl .ag-row-group-indent-2 {\n  padding-right: 40px; }\n\n.ag-ltr .ag-column-select-indent-3 {\n  padding-left: 60px; }\n\n.ag-rtl .ag-column-select-indent-3 {\n  padding-right: 60px; }\n\n.ag-ltr .ag-row-group-indent-3 {\n  padding-left: 60px; }\n\n.ag-rtl .ag-row-group-indent-3 {\n  padding-right: 60px; }\n\n.ag-ltr .ag-column-select-indent-4 {\n  padding-left: 80px; }\n\n.ag-rtl .ag-column-select-indent-4 {\n  padding-right: 80px; }\n\n.ag-ltr .ag-row-group-indent-4 {\n  padding-left: 80px; }\n\n.ag-rtl .ag-row-group-indent-4 {\n  padding-right: 80px; }\n\n.ag-ltr .ag-column-select-indent-5 {\n  padding-left: 100px; }\n\n.ag-rtl .ag-column-select-indent-5 {\n  padding-right: 100px; }\n\n.ag-ltr .ag-row-group-indent-5 {\n  padding-left: 100px; }\n\n.ag-rtl .ag-row-group-indent-5 {\n  padding-right: 100px; }\n\n.ag-ltr .ag-column-select-indent-6 {\n  padding-left: 120px; }\n\n.ag-rtl .ag-column-select-indent-6 {\n  padding-right: 120px; }\n\n.ag-ltr .ag-row-group-indent-6 {\n  padding-left: 120px; }\n\n.ag-rtl .ag-row-group-indent-6 {\n  padding-right: 120px; }\n\n.ag-ltr .ag-column-select-indent-7 {\n  padding-left: 140px; }\n\n.ag-rtl .ag-column-select-indent-7 {\n  padding-right: 140px; }\n\n.ag-ltr .ag-row-group-indent-7 {\n  padding-left: 140px; }\n\n.ag-rtl .ag-row-group-indent-7 {\n  padding-right: 140px; }\n\n.ag-ltr .ag-column-select-indent-8 {\n  padding-left: 160px; }\n\n.ag-rtl .ag-column-select-indent-8 {\n  padding-right: 160px; }\n\n.ag-ltr .ag-row-group-indent-8 {\n  padding-left: 160px; }\n\n.ag-rtl .ag-row-group-indent-8 {\n  padding-right: 160px; }\n\n.ag-ltr .ag-column-select-indent-9 {\n  padding-left: 180px; }\n\n.ag-rtl .ag-column-select-indent-9 {\n  padding-right: 180px; }\n\n.ag-ltr .ag-row-group-indent-9 {\n  padding-left: 180px; }\n\n.ag-rtl .ag-row-group-indent-9 {\n  padding-right: 180px; }\n\n.ag-ltr {\n  direction: ltr; }\n  .ag-ltr .ag-body, .ag-ltr .ag-floating-top, .ag-ltr .ag-floating-bottom, .ag-ltr .ag-header, .ag-ltr .ag-body-viewport, .ag-ltr .ag-body-horizontal-scroll {\n    flex-direction: row; }\n\n.ag-rtl {\n  direction: rtl; }\n  .ag-rtl .ag-body, .ag-rtl .ag-floating-top, .ag-rtl .ag-floating-bottom, .ag-rtl .ag-header, .ag-rtl .ag-body-viewport, .ag-rtl .ag-body-horizontal-scroll {\n    flex-direction: row-reverse; }\n  .ag-rtl .ag-icon-contracted,\n  .ag-rtl .ag-icon-tree-closed {\n    display: block;\n    transform: rotate(180deg); }\n\n.ag-body .ag-body-viewport {\n  -webkit-overflow-scrolling: touch; }\n\n.ag-chart {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  width: 100%;\n  height: 100%; }\n\n.ag-chart-components-wrapper {\n  position: relative;\n  display: flex;\n  flex: 1 1 auto;\n  overflow: hidden; }\n\n.ag-chart-title-edit {\n  position: absolute;\n  display: none;\n  top: 0;\n  left: 0;\n  text-align: center; }\n\n.ag-chart-title-edit.currently-editing {\n  display: inline-block; }\n\n.ag-chart-canvas-wrapper {\n  position: relative;\n  flex: 1 1 auto;\n  overflow: hidden; }\n\n.ag-charts-canvas {\n  display: block; }\n\n.ag-chart-menu {\n  position: absolute;\n  top: 10px;\n  width: 24px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column; }\n  .ag-ltr .ag-chart-menu {\n    right: 20px; }\n  .ag-rtl .ag-chart-menu {\n    left: 20px; }\n\n.ag-chart-docked-container {\n  position: relative;\n  width: 0;\n  min-width: 0;\n  transition: min-width 0.4s; }\n\n.ag-chart-menu-hidden ~ .ag-chart-docked-container {\n  max-width: 0;\n  overflow: hidden; }\n\n.ag-chart-tabbed-menu {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden; }\n\n.ag-chart-tabbed-menu-header {\n  flex: none;\n  -webkit-user-select: none;\n          user-select: none;\n  cursor: default; }\n\n.ag-chart-tabbed-menu-body {\n  display: flex;\n  flex: 1 1 auto;\n  align-items: stretch;\n  overflow: hidden; }\n\n.ag-chart-tab {\n  width: 100%;\n  overflow: hidden;\n  overflow-y: auto; }\n\n.ag-chart-settings {\n  overflow-x: hidden; }\n\n.ag-chart-settings-wrapper {\n  position: relative;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  overflow: hidden; }\n\n.ag-chart-settings-nav-bar {\n  width: 100%;\n  display: flex;\n  height: 30px;\n  align-items: center; }\n\n.ag-chart-settings-card-selector {\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n  flex: 1 1 auto;\n  height: 100%;\n  padding: 0 10px; }\n\n.ag-chart-settings-card-item {\n  cursor: pointer;\n  width: 10px;\n  height: 10px;\n  background-color: #000;\n  position: relative; }\n  .ag-chart-settings-card-item.ag-not-selected {\n    opacity: 0.2; }\n  .ag-chart-settings-card-item:before {\n    content: \" \";\n    display: block;\n    position: absolute;\n    background-color: transparent;\n    left: 50%;\n    top: 50%;\n    margin-left: -10px;\n    margin-top: -10px;\n    width: 20px;\n    height: 20px; }\n\n.ag-chart-settings-prev,\n.ag-chart-settings-next {\n  position: relative;\n  flex: none; }\n\n.ag-chart-settings-prev-button,\n.ag-chart-settings-next-button {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  opacity: 0; }\n\n.ag-chart-settings-mini-charts-container {\n  position: relative;\n  flex: 1 1 auto;\n  overflow-x: hidden;\n  overflow-y: auto; }\n\n.ag-chart-settings-mini-wrapper {\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 100%;\n  overflow: hidden; }\n  .ag-chart-settings-mini-wrapper.ag-animating {\n    transition: left 0.3s;\n    transition-timing-function: ease-in-out; }\n\n.ag-chart-mini-thumbnail {\n  cursor: pointer; }\n\n.ag-chart-mini-thumbnail-canvas {\n  display: block; }\n\n.ag-chart-data-wrapper,\n.ag-chart-format-wrapper {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  -webkit-user-select: none;\n          user-select: none; }\n\n.ag-chart-data-section,\n.ag-chart-format-section {\n  display: flex;\n  margin: 0; }\n\n.ag-charts-font-panel-controls {\n  justify-content: space-between; }\n\n.ag-chart-empty-text {\n  display: flex;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  align-items: center;\n  justify-content: center; }\n\n.ag-chart .ag-chart-menu {\n  opacity: 0;\n  pointer-events: none; }\n\n.ag-chart-menu-hidden:hover .ag-chart-menu {\n  opacity: 1;\n  pointer-events: all; }\n\n.ag-chart-settings-nav-bar {\n  padding: 0 10px;\n  -webkit-user-select: none;\n          user-select: none; }\n\n.ag-date-time-list-page-title-bar {\n  display: flex; }\n\n.ag-date-time-list-page-column-labels-row,\n.ag-date-time-list-page-entries-row {\n  display: flex; }\n\n.ag-date-time-list-page-column-label,\n.ag-date-time-list-page-entry {\n  flex-basis: 0;\n  flex-grow: 1; }\n\n.ag-date-time-list-page-entry {\n  cursor: pointer; }\n\n.ag-theme-alpine {\n  -webkit-font-smoothing: antialiased;\n  color: #181d1f;\n  color: var(--ag-foreground-color, #181d1f);\n  font-family: \"Roboto\", sans-serif;\n  font-size: 16px;\n  line-height: normal; }\n\n@font-face {\n  font-family: \"agGridAlpine\";\n  src: url(\"data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABNkAAsAAAAAIqAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAlMAAAReYc5joU9TLzIAAANcAAAAQAAAAFZWUVJ5Y21hcAAAA5wAAAHqAAAFgHCsDfxnbHlmAAAFiAAACesAABCUC9Ir6mhlYWQAAA90AAAANAAAADZ2zsSBaGhlYQAAD6gAAAAeAAAAJAfSBC5obXR4AAAPyAAAABcAAAEou4D/+2xvY2EAAA/gAAAAbwAAAJbPsst2bWF4cAAAEFAAAAAfAAAAIAFgAHNuYW1lAAAQcAAAATUAAAJG5xgJvXBvc3QAABGoAAABuQAAApPSPvKNeJx9k81SE1EQhc9kQgwJBkREjREU//GPYX4yJiGQMAFisXDhwoUbXGhpUa54Atc+gOUD+BQ+geXSlQ/gA1g+gN/tTAyyIFOZubf79Onuc/vKk1TRmroqZDv7z1U7PDh6r7qKGv2c//jaO3z75kDl8Q5f0b5lef4f1bSiFzrSN0/ea+9zoeQX/K6/73/wP/k/5IO6pkegq1rnCRXxDhQrUVOpCiphC1k/UQu0z7tt1nktaso8mQa6QM6QmIExruqpbmkOnr7x9LQJKuZxnD3euzy3NXsKItUd+BOq2cDqWBvUeU7T2qHGHnV0iG7hncO3ReaAmD6+PrX5hiqajnt6SeS89eYikxwX8w+1bfvAdkuoMEa14W/C7/gek3Vsb5IpIuIh7Amobq7hKv8q3hhMQGzHNHPRSyAjKoy1zMp1FtHZjG7C/kyvdJ+47TymZyqOer5H9RN73/hS8hy3duDaBfuAGiZWdyJ3yRVoiL/CSWV6p4/6oq/6rp/6pd/gF8kSWQebcG+dqsw0+p1EZ3jb/6yu0zOcxUnU/4gKfTdNmxDfIFfQZZvB57SJWQdYY8NX4XT4jGpS9Jpi8gLLG2Etsd9gH4Ku5dPY4jlrOg+YATcBdbRY5+2YRvOWsr9MtFuN6rpoarXguWSn5TR1N2nWdm7m3SnX0fkK34DOEtNnD+9VLI5pYmlYVErVjmMNf0q1k2yuqgZVRcxA2SZraLcgI9N1+hhVEumG3YChTdUKFST5jVzQeau+k5/UguFCi/JQIshvcmyauUnuU5ubit2/LKNqzAB4nGNgZOpknMDAysDAVMW0h4GBoQdCMz5gMGRkAooysDIzYAUBaa4pDA4Muh8NmF8AuVHMb0GmMDCC5ADUogpqeJy11IdSWkEYxfE/RdNM79X0jgJiQIogIMhjmO6Y4pju5CnzJt8LxJzlnjyAmcnO/Fh2udy9O3fPB8wABXkqRcgXyZHab83mpvMFjk7ni/zSeI7D5PW9xBY77EV5f1+zJTbZZjdy09HfltPVc1zjPs80WqNClxZ9aoyp0tHsKm0GNKizzhJNlhkyYYUeIzb0/7xWLzLLIa16RM9xTPc7zglOcorTnOEs5zjPBS5yictc4apWu84N5rnJLW5zh7vc0/oPeMgjHvNE+ynp9wUWKesBZzlYWzvg9alVuq1+bVztaLftQaOujTaXh5OV3mjjH272H9pc+ij89GhCepuZtNtNq8hz68oLa8lL68srq8lrG8sbq8pb68iWpROybavyztry3gbywRry0eqyY+uya0vyyZry2Zbliw3lq6W9f7MV+W49+WEj2TO9wMhlUlYinyH1hUzKVhQzKV8xk9GZJkynmzCdc8J04glLGQxTCghLby9MySBMGSFMaSFMuSFMCSJMWSJMqSJM+SJMSSNMmSNM6SNMOSRMiSRM2SRMKSVMeSVMySVMGSVMaSZMuSZMCSdMWSdMqSdM+SdMlYAw1QTCVB0IU50gTBWDMNUOwlRFCEt1MyxlJmz6/AsZUr+YIfXlDOU/rrOgigAAeJzFF21sU9f1nntjvzgJSRx/vJgQg/3ivNSxwxL7+dkx2JAEEmhIqWpYCqMhMCbWdFppM7EBbsd+dEVV1apS6A/yY9O2oFVaQEOb+sFKtZaRqh/qVLQf/fixdkxkXbNRodIZ3mXnXttpApnW/Zr93rnn3nt8zrnnni8TIPihcyxKqgmBgEdVPAEjYOoBOsdrCgW4yu9HeJxFs4VCJlMoCHLbzes3r7NP2afEhr+qIx7SRIhLURXdtJkChhAwVaAuXcBPnn028uqrNIMg8iwfHR4eXidXInKBPrFgMnzv8DD/YiE9qiWEsh7WQypRjmo6Y07VhJPds7nLaX4GrqZnuQ2uz6ZhCx5F0k6wCeImq/CnQcWu2N2qV/V2mQkzEddb9VaXoqOSqBnqBlcPjI6YqZQ5MvpRGRnpPn68e2JCQjaxaEsi1uvlXYTk/yOTle6tFjFF3l3MqekxjyZG+G0+fzafh4P5PFtmvY0XeJAfK+t5mV0mLuITtx2sBY/T7YdYoCsDhjPeAQ4wVVDZD2587o/58WFVcrTm+N+GZmBqiF3G+aLNG5+Dd+gCTN21mL+6NH+GznUb9yetizRyO2fr4oMLeTLJ0xlwhpbiizxZ1S18i4vfvZVv0Xbs++yb6L+VpJEQByiqA5i5Euzi6jxub1fCENdGP+Ej3Xu5BZmZmQunq6t9dd7ODZ3eOh/8Hn6axg3+KqydmcksW+ZvavUFOzuDvtAKv2BfIWVEMa6K91NHSCjgDNg0Z8ylOdPg1Jwsaj1FD/DN8q5eyhdoLM+PiZsq3lbJ7+lp5GFDHSm6DxyEFL+AYcii/AKfKcVj8Tw/ZOfwND7SLC1v92CUBFSJuL1oqATaqVVzoQ70NK/ROnNwNc8NoTK8gVADbsAb7OXOoPUC7b+nU7NeEHu0X+u09tH+Ugw+zZ4WvuYANJfiAB3dBa7Cvb18Cnb08pN8qhd2IKCJRVPYgSTkljgGXUEb6Aqw9TKQYYsIZLjObbMY1IvPHkKBioq2moEk5qGzkIRUduHZn8A4aCIdZK3ga6qJWJcfVoJSCyIp2ZUOuhrMDKg499NYl6nbtWAHGHFTVxNI6VbUhNlBg9C4NjKwfWT75HgzY+6+aDRi7hr7+uT4iooKz9BotM+9fPTowN2b0mGjfVM4UJlsuWdT2D0w1OLbc/RJ+nP87R19h7dWVZu7tI5IIgbQd2hrddWafY7me7rW7zVbuleG+9uN9t1Jd3gg1zKQ3omLC/SvxdwRRf3RpYUyUtdQhpZOQlHh1WDDTfR23ETvpxX9R/f4UPhTR0eXo2r8/IrxyV9J5ZslsqICfhzeFA5v2iYA+My961FkEV7aerhPaFtVGidRp4GwBKWYG0PbK2QZaqR4FKduBGyqxzRMNlZ4qUBPWdPvZ9+jc4XJszBcyGbffy8z+T4p50J6jc7hvTnkbeiKKnISvfbKK+lCgRu5HBjnzqVlbakhNcU4QfpynIjc0URWEo3opJ2sJsTUjJi64A39lznWqbPZ7EsSWm/9p0khX/xkS2OmNKI6lfPnv1UnAlgdQ/i6UI6Br46vWFNwDODIxoSPWm9LViiCnuIziMFv+Aw9IOXyzVmUleXHUIVMJrOEzVzo61iA0WZXpMngYC5Hz0iT8RpyWxxhscYw1ANsfTF0YIsII+qf7eZn+Jnu2XKMTNDzWJ8aSQQlxDOQBkMr+pHEOkDF1BzSPBg6tBbaARHpaz8LrtGmplK7k8ndqakpbU3wORjiv4aDEgdtfhOuamntruTIQyPJu7S0kptCuFGs7D4wkpQ2vXmTzco8fotNA5gTRXG0ic4BlbCJBqQ0F/mSLh8cPHbNvEbbzWsmJpQ3IW4NCrgL5/QT3OFvDg5CvBUxfMy1g4OD4zjic+2PEC/XkOfYc6iFU+bhmAfQKTEZagbogPWSHxsG2sP5h1g07+W8B+gHWTj4oVxjLn7sA7k2n2++9Fe0vzH/LWb08gspvOd8piz/HfZOUf682HlFsvNC0X/KmgilimL/VNZkviZMF/OiSG8qwPfSnKchxaI4dkOy5E+XWL3sz0SmVbG0KaL5oJeuXImcPx+RkPrl8JiE82cr9jEBzKZLdzIQF2isy6tCB0CwVQc/eNyCcKm+hvdEI4Nbdqb2t/NosAW2IALvBlvE4lJtDh/ZuWUwEm0J8mj7fv73liC8274/JdfK+j2Adc6LfqOjfhrmQrui3VLkAl1etz3YGk+AMHDAiLHGU8vWbV237JQsaQMC8g+cPl/Q5wPDej4HP8mxsVBHRwir3z5JcyLY2ag14mM10BMiKRTv8Ag7TIKlKpMoflWzVQxZAMWOhkZTKfY6NLkuegm0eitaBgQFliDVG/MiqsPdz2D2tjmau1ebeyvranwNqhv8nnUb9gNQ5vZE1eN/icAll6Omsn4y0dblhOWVKoVKOlFZVV1X21B/ER55xlFdXVfTVu2oHl3ub2xyNdTyj1Zsq9lnt/mM9q+p1ciBPlVf76r1TtYy1sT/anfrjfGG4xUVoFQ2XBTHqZJnmmbTGImrSBtZTzaSO0mO7CSj5Ft4Rj9VG1gtVSpCHVSnrgw1W2wBpxcrqZmwuVVRmAzpVorucWO90lQ58UrDhNxqzMDaGzPMMKBFYpioPTG9A/SQXVM8MbMVcw1ztm0IA6oU3tDGP+YffzmDZjhkXfjHnBanDqsSaFxbBS9WRbblIo7wxrZxR2TbtkjVupau5X6wXocjhwHy2fidSYBDWfjdIUGP5kiFHz2X7H+U/XJJ/s1ydsN63e5A8rm3nPUoDA5DnWTueLCtv506IjmUAzbF5Q37NyYfeXmz8ei/EqGR7JEjQaRmAEfy8MhtcSkzMp1O8wuQSnP6WVp0a92cLOxn3eSOcoTVC7dZJcxWLyKMBQWUYdYldkrB9fj4gd6+vt4D41Bfxh7/zq4dhmkaO3a9V0bYZbHB/7mY+MaRRUQSKcWT0KUG4z0htJEFoZj49f9Btb6He3sfflyAvq+mJZ0r0SMofGWFb6t9iopFV6TABf8BZT85241/BovnG2Rjsq7KTkbkQPyXG5AdSTEXWh/T09ZWTNYZmJUL/GSWzllvl2UxekLcmssBl6AO6ugJrH5Dpfs+wZjYc9DiKmP8Cr+yeA97V2xtsWTKXy/Ns0hQ2vsFc8l+X/TYJtwPX/Ra5/mfe6BJYH+AlT0luijtFSd04WnOyoLTc9+8faJ0ulgfdOzS6WeyLECKTmOdEC65INePYUXykC6RS0XpB4/Xrqj4pwodAOM5Jnpmz5c9ghFPmCoSqviYQF8rNgFmeG08m9y95xu5Suv5H3UPlDuFns7tKx8aGTgZt/rpa9gOaJEN1Wub9qxJjSSncvDA0cZvr0vJbkHr3GzbnrsPKemLhPwbDwYCEQB4nGNgZGBgAOLsD0FR8fw2Xxm4mV8ABaI4H+9rgNH/f///zfyW+S1QJQcDE5BkAACRug+HeJxjYGRgYH7BwAAi///+/5v5LQMjAyrwAgCe2QcHAAB4nGNgYGBgfgHC/39D6KGH6QEAIHUuCwB4nGNgAAIphiCGDIZFDHcYvjGqMQYwVjGuYTzH+IhJhMmMyYcpgekAMxezBrMDcxfzIeZbzJ9YTFiKWGawbGK5wfKKlY01jHUK6z+2JWw72P6xR7Dnsfexz2Ffxb6D/Rj7LfYX7H84vEiHANyaI6IAeJxjYGRgYPBiSGfgYQABJiDmAkIGhv9gPgMAGzsB1AB4nHWRPU7DQBCFnxMniBghJCREx1Y0SM5PQZEuFHGfIgWdE68dR7bXWm8ipeMYnIBjUHIETsEheDFTREjZ1a6/+fbNNAZwgy94OC4PV+19XB1csPrjLulW2Cc/CPcQ4Em4T/8sPKB9EQ7YWXKC51/S3ONNuINrvAt36T+EffKncA93+Bbu0/8ID7D0fOEAj95rnEU2T2ZFnVd6obNdEdtTdcpLbZvcVGocjk51pCttY6cTtTqoZp9NnEtVak2p5qZyuiiMqq3Z6rULN87V0+EwFR+uTYkYGSJY5EgwQ4GaVEFjwZNhRxPz9VzqnF/yWDSsDGuFMUKMzqYjnqrtiOH4TdixwoF3gz17JrQOKeuUGcO/ojBvJx/TBbehqdu3Lc2aPsSm7aoxxZA7/ZcPmeKkXwK+aWkAAAB4nG2S6W7bMBCE/cWSI9tpk7ptet/3obbpfaf3kT4FQ9EyEYkUSMp28vRl4yBAgO4fzgwWs7MLdpY6ixp0/l9bLNElIaXHMhl9BgxZ4RjHWWWNE4w4ySlOs84ZznKO81zgIpe4zBWuco3r3OAmt7jNHe5yj/s84CE5j3jMEzZ4yjOe84KXvOI1b3jLO97zgY9s8onPfOEr3/jOD37yi99s8aczFGXpVCmCtqYnnLMz3xVe9qQwUlXZ4sk3UjkRLqzJiZI723ae7wNVrB8K2hQqKFdrI4IaHcqtOehckbayLm90JG45krY2fiCtCU7IoIpE2mY3lc56nxTKy0zNGxE9i77aVbmvhJ90I+qNdRXHpGPtfEhKp5u0dLZtktgQkkqNQ6/SJs5brqwotCmzWsx1rfdUUivTZjHfghk1D4mxRg2NDbmoKjtTRdpEF9VttEkbPbUha5yaatv6NRfNbL7dhmBNbsfj1aOCSZ0uJyHxYqoGvo52eWFn5gD+izVcwP22bIFj6hDPMQpOqaP36+9LtlEma81iHwQlDkVAYzHM8EgqJuywzTx+g4KaloZdxuwx7XT+AvL3sQsAAAA=\") format(\"woff\");\n  font-weight: normal;\n  font-style: normal; }\n  .ag-theme-alpine .ag-icon {\n    font-family: \"agGridAlpine\";\n    font-size: 16px;\n    line-height: 16px;\n    font-style: normal;\n    font-weight: normal;\n    font-feature-settings: normal;\n    font-variant: normal;\n    text-transform: none;\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale; }\n  .ag-theme-alpine .ag-icon-aggregation:before {\n    content: \"\\f101\"; }\n  .ag-theme-alpine .ag-icon-arrows:before {\n    content: \"\\f102\"; }\n  .ag-theme-alpine .ag-icon-asc:before {\n    content: \"\\f103\"; }\n  .ag-theme-alpine .ag-icon-cancel:before {\n    content: \"\\f104\"; }\n  .ag-theme-alpine .ag-icon-chart:before {\n    content: \"\\f105\"; }\n  .ag-theme-alpine .ag-icon-color-picker:before {\n    content: \"\\f109\"; }\n  .ag-theme-alpine .ag-icon-columns:before {\n    content: \"\\f10a\"; }\n  .ag-theme-alpine .ag-icon-contracted:before {\n    content: \"\\f10b\"; }\n  .ag-theme-alpine .ag-icon-copy:before {\n    content: \"\\f10c\"; }\n  .ag-theme-alpine .ag-icon-cross:before {\n    content: \"\\f10d\"; }\n  .ag-theme-alpine .ag-icon-desc:before {\n    content: \"\\f10e\"; }\n  .ag-theme-alpine .ag-icon-expanded:before {\n    content: \"\\f10f\"; }\n  .ag-theme-alpine .ag-icon-eye-slash:before {\n    content: \"\\f110\"; }\n  .ag-theme-alpine .ag-icon-eye:before {\n    content: \"\\f111\"; }\n  .ag-theme-alpine .ag-icon-filter:before {\n    content: \"\\f112\"; }\n  .ag-theme-alpine .ag-icon-first:before {\n    content: \"\\f113\"; }\n  .ag-theme-alpine .ag-icon-grip:before {\n    content: \"\\f114\"; }\n  .ag-theme-alpine .ag-icon-group:before {\n    content: \"\\f115\"; }\n  .ag-theme-alpine .ag-icon-last:before {\n    content: \"\\f116\"; }\n  .ag-theme-alpine .ag-icon-left:before {\n    content: \"\\f117\"; }\n  .ag-theme-alpine .ag-icon-linked:before {\n    content: \"\\f118\"; }\n  .ag-theme-alpine .ag-icon-loading:before {\n    content: \"\\f119\"; }\n  .ag-theme-alpine .ag-icon-maximize:before {\n    content: \"\\f11a\"; }\n  .ag-theme-alpine .ag-icon-menu:before {\n    content: \"\\f11b\"; }\n  .ag-theme-alpine .ag-icon-minimize:before {\n    content: \"\\f11c\"; }\n  .ag-theme-alpine .ag-icon-next:before {\n    content: \"\\f11d\"; }\n  .ag-theme-alpine .ag-icon-none:before {\n    content: \"\\f11e\"; }\n  .ag-theme-alpine .ag-icon-not-allowed:before {\n    content: \"\\f11f\"; }\n  .ag-theme-alpine .ag-icon-paste:before {\n    content: \"\\f120\"; }\n  .ag-theme-alpine .ag-icon-pin:before {\n    content: \"\\f121\"; }\n  .ag-theme-alpine .ag-icon-pivot:before {\n    content: \"\\f122\"; }\n  .ag-theme-alpine .ag-icon-previous:before {\n    content: \"\\f123\"; }\n  .ag-theme-alpine .ag-icon-right:before {\n    content: \"\\f126\"; }\n  .ag-theme-alpine .ag-icon-save:before {\n    content: \"\\f127\"; }\n  .ag-theme-alpine .ag-icon-small-down:before {\n    content: \"\\f128\"; }\n  .ag-theme-alpine .ag-icon-small-left:before {\n    content: \"\\f129\"; }\n  .ag-theme-alpine .ag-icon-small-right:before {\n    content: \"\\f12a\"; }\n  .ag-theme-alpine .ag-icon-small-up:before {\n    content: \"\\f12b\"; }\n  .ag-theme-alpine .ag-icon-tick:before {\n    content: \"\\f12c\"; }\n  .ag-theme-alpine .ag-icon-tree-closed:before {\n    content: \"\\f12d\"; }\n  .ag-theme-alpine .ag-icon-tree-indeterminate:before {\n    content: \"\\f12e\"; }\n  .ag-theme-alpine .ag-icon-tree-open:before {\n    content: \"\\f12f\"; }\n  .ag-theme-alpine .ag-icon-unlinked:before {\n    content: \"\\f130\"; }\n  .ag-theme-alpine .ag-icon-row-drag:before {\n    content: \"\\f114\"; }\n  .ag-theme-alpine .ag-right-arrow:before {\n    content: \"\\f117\"; }\n  .ag-theme-alpine .ag-right-arrow:before {\n    content: \"\\f126\"; }\n  .ag-theme-alpine .ag-root-wrapper {\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff); }\n  .ag-theme-alpine [class^='ag-'], .ag-theme-alpine [class^='ag-']:focus, .ag-theme-alpine [class^='ag-']:after, .ag-theme-alpine [class^='ag-']:before {\n    box-sizing: border-box;\n    outline: none; }\n  .ag-theme-alpine [class^='ag-']::-ms-clear {\n    display: none; }\n  .ag-theme-alpine .ag-checkbox .ag-input-wrapper,\n  .ag-theme-alpine .ag-radio-button .ag-input-wrapper {\n    overflow: visible; }\n  .ag-theme-alpine .ag-range-field .ag-input-wrapper {\n    height: 100%; }\n  .ag-theme-alpine .ag-toggle-button {\n    flex: none;\n    width: unset;\n    min-width: unset; }\n  .ag-theme-alpine .ag-ltr .ag-label-align-right .ag-label {\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-rtl .ag-label-align-right .ag-label {\n    margin-right: 6px; }\n  .ag-theme-alpine input[class^='ag-'] {\n    margin: 0;\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff); }\n  .ag-theme-alpine textarea[class^='ag-'],\n  .ag-theme-alpine select[class^='ag-'] {\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff); }\n  .ag-theme-alpine input[class^='ag-']:not([type]),\n  .ag-theme-alpine input[class^='ag-'][type='text'],\n  .ag-theme-alpine input[class^='ag-'][type='number'],\n  .ag-theme-alpine input[class^='ag-'][type='tel'],\n  .ag-theme-alpine input[class^='ag-'][type='date'],\n  .ag-theme-alpine input[class^='ag-'][type='datetime-local'],\n  .ag-theme-alpine textarea[class^='ag-'] {\n    font-size: inherit;\n    line-height: inherit;\n    color: inherit;\n    border-width: 1px;\n    border-style: solid;\n    border-color: #babfc7;\n    border-color: var(--ag-input-border-color, var(--ag-border-color, #babfc7)); }\n    .ag-theme-alpine input[class^='ag-']:not([type]):disabled,\n    .ag-theme-alpine input[class^='ag-'][type='text']:disabled,\n    .ag-theme-alpine input[class^='ag-'][type='number']:disabled,\n    .ag-theme-alpine input[class^='ag-'][type='tel']:disabled,\n    .ag-theme-alpine input[class^='ag-'][type='date']:disabled,\n    .ag-theme-alpine input[class^='ag-'][type='datetime-local']:disabled,\n    .ag-theme-alpine textarea[class^='ag-']:disabled {\n      color: rgba(24, 29, 31, 0.5);\n      color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n      background-color: #f1f2f4;\n      background-color: var(--ag-input-disabled-background-color, #f1f2f4);\n      border-color: rgba(186, 191, 199, 0.3);\n      border-color: var(--ag-input-disabled-border-color, rgba(186, 191, 199, 0.3)); }\n    .ag-theme-alpine input[class^='ag-']:not([type]):focus,\n    .ag-theme-alpine input[class^='ag-'][type='text']:focus,\n    .ag-theme-alpine input[class^='ag-'][type='number']:focus,\n    .ag-theme-alpine input[class^='ag-'][type='tel']:focus,\n    .ag-theme-alpine input[class^='ag-'][type='date']:focus,\n    .ag-theme-alpine input[class^='ag-'][type='datetime-local']:focus,\n    .ag-theme-alpine textarea[class^='ag-']:focus {\n      outline: none;\n      box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine input[class^='ag-'][type='number'] {\n    -moz-appearance: textfield; }\n    .ag-theme-alpine input[class^='ag-'][type='number']::-webkit-outer-spin-button, .ag-theme-alpine input[class^='ag-'][type='number']::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0; }\n  .ag-theme-alpine input[class^='ag-'][type='range'] {\n    padding: 0; }\n  .ag-theme-alpine input[class^='ag-'][type='button']:focus, .ag-theme-alpine button[class^='ag-']:focus {\n    box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4); }\n  .ag-theme-alpine .ag-drag-handle {\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n  .ag-theme-alpine .ag-list-item, .ag-theme-alpine .ag-virtual-list-item {\n    height: 30px; }\n  .ag-theme-alpine .ag-keyboard-focus .ag-virtual-list-item:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-virtual-list-item:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: 4px;\n      left: 4px;\n      display: block;\n      width: calc(100% - 8px);\n      height: calc(100% - 8px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-select-list {\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff);\n    overflow-y: auto;\n    overflow-x: hidden; }\n  .ag-theme-alpine .ag-list-item {\n    display: flex;\n    align-items: center; }\n    .ag-theme-alpine .ag-list-item.ag-active-item {\n      background-color: var(--ag-row-hover-color); }\n  .ag-theme-alpine .ag-select-list-item {\n    padding-left: 4px;\n    padding-right: 4px;\n    cursor: default;\n    -webkit-user-select: none;\n    user-select: none; }\n    .ag-theme-alpine .ag-select-list-item span {\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden; }\n  .ag-theme-alpine .ag-select .ag-picker-field-wrapper {\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff);\n    min-height: 30px;\n    cursor: default; }\n  .ag-theme-alpine .ag-select:not(.ag-cell-editor) {\n    height: 30px; }\n  .ag-theme-alpine .ag-select .ag-picker-field-display {\n    margin: 4px;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n  .ag-theme-alpine .ag-select .ag-picker-field-icon {\n    display: flex;\n    align-items: center; }\n  .ag-theme-alpine .ag-select.ag-disabled {\n    opacity: 0.5; }\n  .ag-theme-alpine .ag-rich-select {\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8); }\n  .ag-theme-alpine .ag-rich-select-list {\n    width: 100%;\n    min-width: 200px;\n    height: 273px; }\n  .ag-theme-alpine .ag-rich-select-value {\n    padding: 0 6px 0 18px;\n    height: 42px;\n    border-bottom: solid 1px;\n    border-bottom-color: #dde2eb;\n    border-bottom-color: var(--ag-secondary-border-color, #dde2eb); }\n  .ag-theme-alpine .ag-rich-select-virtual-list-item {\n    cursor: default;\n    height: 30px; }\n    .ag-theme-alpine .ag-rich-select-virtual-list-item:hover {\n      background-color: var(--ag-row-hover-color); }\n  .ag-theme-alpine .ag-rich-select-row {\n    padding-left: 18px; }\n  .ag-theme-alpine .ag-rich-select-row-selected {\n    background-color: rgba(33, 150, 243, 0.3);\n    background-color: var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3)); }\n  .ag-theme-alpine .ag-row-drag,\n  .ag-theme-alpine .ag-selection-checkbox,\n  .ag-theme-alpine .ag-group-expanded,\n  .ag-theme-alpine .ag-group-contracted {\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n    .ag-theme-alpine .ag-ltr .ag-row-drag, .ag-theme-alpine .ag-ltr .ag-selection-checkbox, .ag-theme-alpine .ag-ltr .ag-group-expanded, .ag-theme-alpine .ag-ltr .ag-group-contracted {\n      margin-right: 12px; }\n    .ag-theme-alpine .ag-rtl .ag-row-drag, .ag-theme-alpine .ag-rtl .ag-selection-checkbox, .ag-theme-alpine .ag-rtl .ag-group-expanded, .ag-theme-alpine .ag-rtl .ag-group-contracted {\n      margin-left: 12px; }\n  .ag-theme-alpine .ag-cell-wrapper > *:not(.ag-cell-value):not(.ag-group-value) {\n    height: 40px;\n    display: flex;\n    align-items: center;\n    flex: none; }\n  .ag-theme-alpine .ag-group-expanded,\n  .ag-theme-alpine .ag-group-contracted {\n    cursor: pointer; }\n  .ag-theme-alpine .ag-group-title-bar-icon {\n    cursor: pointer;\n    flex: none;\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n  .ag-theme-alpine .ag-ltr .ag-group-child-count {\n    margin-left: 2px; }\n  .ag-theme-alpine .ag-rtl .ag-group-child-count {\n    margin-right: 2px; }\n  .ag-theme-alpine .ag-group-title-bar {\n    background-color: #fff;\n    background-color: var(--ag-subheader-background-color, #fff);\n    padding: 6px; }\n  .ag-theme-alpine .ag-group-toolbar {\n    padding: 6px; }\n  .ag-theme-alpine .ag-disabled-group-title-bar, .ag-theme-alpine .ag-disabled-group-container {\n    opacity: 0.5; }\n  .ag-theme-alpine .group-item {\n    margin: 3px 0; }\n  .ag-theme-alpine .ag-label {\n    white-space: nowrap; }\n    .ag-theme-alpine .ag-ltr .ag-label {\n      margin-right: 6px; }\n    .ag-theme-alpine .ag-rtl .ag-label {\n      margin-left: 6px; }\n  .ag-theme-alpine .ag-label-align-top .ag-label {\n    margin-bottom: 3px; }\n  .ag-theme-alpine .ag-ltr .ag-slider-field, .ag-theme-alpine .ag-ltr .ag-angle-select-field {\n    margin-right: 12px; }\n  .ag-theme-alpine .ag-rtl .ag-slider-field, .ag-theme-alpine .ag-rtl .ag-angle-select-field {\n    margin-left: 12px; }\n  .ag-theme-alpine .ag-angle-select-parent-circle {\n    width: 24px;\n    height: 24px;\n    border-radius: 12px;\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff); }\n  .ag-theme-alpine .ag-angle-select-child-circle {\n    top: 4px;\n    left: 12px;\n    width: 6px;\n    height: 6px;\n    margin-left: -3px;\n    margin-top: -4px;\n    border-radius: 3px;\n    background-color: #181d1f;\n    background-color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n  .ag-theme-alpine .ag-picker-field-wrapper {\n    border: 1px solid;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    border-radius: 5px; }\n    .ag-theme-alpine .ag-picker-field-wrapper:focus {\n      box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4); }\n  .ag-theme-alpine .ag-picker-field-button {\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff);\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n  .ag-theme-alpine .ag-dialog.ag-color-dialog {\n    border-radius: 5px; }\n  .ag-theme-alpine .ag-color-picker .ag-picker-field-display {\n    height: 16px; }\n  .ag-theme-alpine .ag-color-panel {\n    padding: 6px; }\n  .ag-theme-alpine .ag-spectrum-color {\n    background-color: red;\n    border-radius: 2px; }\n  .ag-theme-alpine .ag-spectrum-tools {\n    padding: 10px; }\n  .ag-theme-alpine .ag-spectrum-sat {\n    background-image: linear-gradient(to right, white, rgba(204, 154, 129, 0)); }\n  .ag-theme-alpine .ag-spectrum-val {\n    background-image: linear-gradient(to top, black, rgba(204, 154, 129, 0)); }\n  .ag-theme-alpine .ag-spectrum-dragger {\n    border-radius: 12px;\n    height: 12px;\n    width: 12px;\n    border: 1px solid white;\n    background: black;\n    box-shadow: 0 0 2px 0px rgba(0, 0, 0, 0.24); }\n  .ag-theme-alpine .ag-spectrum-hue-background {\n    border-radius: 2px; }\n  .ag-theme-alpine .ag-spectrum-alpha-background {\n    border-radius: 2px; }\n  .ag-theme-alpine .ag-spectrum-tool {\n    margin-bottom: 10px;\n    height: 11px;\n    border-radius: 2px; }\n  .ag-theme-alpine .ag-spectrum-slider {\n    margin-top: -12px;\n    width: 13px;\n    height: 13px;\n    border-radius: 13px;\n    background-color: #f8f8f8;\n    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.37); }\n  .ag-theme-alpine .ag-recent-color {\n    margin: 0 3px; }\n    .ag-theme-alpine .ag-recent-color:first-child {\n      margin-left: 0; }\n    .ag-theme-alpine .ag-recent-color:last-child {\n      margin-right: 0; }\n  .ag-theme-alpine.ag-dnd-ghost {\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    background: #fff;\n    background: var(--ag-background-color, #fff);\n    border-radius: 3px;\n    box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n    padding: 6px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    z-index: 10;\n    border: solid 1px;\n    border-color: #dde2eb;\n    border-color: var(--ag-secondary-border-color, #dde2eb);\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n    height: 48px !important;\n    line-height: 48px;\n    margin: 0;\n    padding: 0 12px;\n    transform: translateY(12px); }\n  .ag-theme-alpine .ag-dnd-ghost-icon {\n    margin-right: 6px;\n    color: #181d1f;\n    color: var(--ag-foreground-color, #181d1f); }\n  .ag-theme-alpine .ag-popup-child:not(.ag-tooltip-custom) {\n    box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4); }\n  .ag-dragging-range-handle .ag-theme-alpine .ag-dialog,\n  .ag-dragging-fill-handle .ag-theme-alpine .ag-dialog {\n    opacity: 0.7;\n    pointer-events: none; }\n  .ag-theme-alpine .ag-dialog {\n    border-radius: 3px;\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-panel {\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff); }\n  .ag-theme-alpine .ag-panel-title-bar {\n    background-color: #f8f8f8;\n    background-color: var(--ag-header-background-color, #f8f8f8);\n    color: #181d1f;\n    color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)));\n    height: 48px;\n    padding: 6px 18px;\n    border-bottom: solid 1px;\n    border-bottom-color: #babfc7;\n    border-bottom-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-ltr .ag-panel-title-bar-button {\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-rtl .ag-panel-title-bar-button {\n    margin-right: 6px; }\n  .ag-theme-alpine .ag-tooltip {\n    background-color: #f8f8f8;\n    background-color: var(--ag-header-background-color, #f8f8f8);\n    color: #181d1f;\n    color: var(--ag-foreground-color, #181d1f);\n    padding: 6px;\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    border-radius: 3px;\n    transition: opacity 1s; }\n    .ag-theme-alpine .ag-tooltip.ag-tooltip-hiding {\n      opacity: 0; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-indent-1 {\n    padding-left: 16px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-indent-1 {\n    padding-right: 16px; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-indent-2 {\n    padding-left: 32px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-indent-2 {\n    padding-right: 32px; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-indent-3 {\n    padding-left: 48px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-indent-3 {\n    padding-right: 48px; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-indent-4 {\n    padding-left: 64px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-indent-4 {\n    padding-right: 64px; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-indent-5 {\n    padding-left: 80px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-indent-5 {\n    padding-right: 80px; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-indent-6 {\n    padding-left: 96px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-indent-6 {\n    padding-right: 96px; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-indent-7 {\n    padding-left: 112px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-indent-7 {\n    padding-right: 112px; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-indent-8 {\n    padding-left: 128px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-indent-8 {\n    padding-right: 128px; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-indent-9 {\n    padding-left: 144px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-indent-9 {\n    padding-right: 144px; }\n  .ag-theme-alpine .ag-column-select-header-icon {\n    cursor: pointer; }\n  .ag-theme-alpine .ag-keyboard-focus .ag-column-select-header-icon:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-column-select-header-icon:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: 0px;\n      left: 0px;\n      display: block;\n      width: calc(100% - 0px);\n      height: calc(100% - 0px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-ltr .ag-column-group-icons:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-header-icon:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-header-checkbox:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-checkbox:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-alpine .ag-ltr .ag-column-select-column-label:not(:last-child) {\n    margin-right: 12px; }\n  .ag-theme-alpine .ag-rtl .ag-column-group-icons:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-header-icon:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-header-checkbox:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-header-filter-wrapper:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-checkbox:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-column-drag-handle:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-column-group-drag-handle:not(:last-child), .ag-theme-alpine .ag-rtl .ag-column-select-column-label:not(:last-child) {\n    margin-left: 12px; }\n  .ag-theme-alpine .ag-keyboard-focus .ag-column-select-column-group:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-column-select-column-group:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: -3px;\n      left: -3px;\n      display: block;\n      width: calc(100% - -6px);\n      height: calc(100% - -6px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-keyboard-focus .ag-column-select-column:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-column-select-column:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: -3px;\n      left: -3px;\n      display: block;\n      width: calc(100% - -6px);\n      height: calc(100% - -6px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-column-select-column-group:not(:last-child),\n  .ag-theme-alpine .ag-column-select-column:not(:last-child) {\n    margin-bottom: 9px; }\n  .ag-theme-alpine .ag-column-select-column-readonly,\n  .ag-theme-alpine .ag-column-select-column-group-readonly {\n    color: rgba(24, 29, 31, 0.5);\n    color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n    pointer-events: none; }\n  .ag-theme-alpine .ag-ltr .ag-column-select-add-group-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-column-select-add-group-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-column-select-list {\n    padding: 12px 12px; }\n  .ag-theme-alpine .ag-rtl {\n    text-align: right; }\n  .ag-theme-alpine .ag-root-wrapper {\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    border-radius: 3px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {\n    padding-left: 46px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-1 {\n    padding-right: 46px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-1 {\n    padding-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-1 {\n    padding-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-1 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-1 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {\n    padding-left: 74px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-2 {\n    padding-right: 74px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-2 {\n    padding-left: 56px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-2 {\n    padding-right: 56px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-2 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-2 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {\n    padding-left: 102px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-3 {\n    padding-right: 102px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-3 {\n    padding-left: 84px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-3 {\n    padding-right: 84px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-3 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-3 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {\n    padding-left: 130px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-4 {\n    padding-right: 130px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-4 {\n    padding-left: 112px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-4 {\n    padding-right: 112px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-4 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-4 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {\n    padding-left: 158px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-5 {\n    padding-right: 158px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-5 {\n    padding-left: 140px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-5 {\n    padding-right: 140px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-5 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-5 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {\n    padding-left: 186px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-6 {\n    padding-right: 186px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-6 {\n    padding-left: 168px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-6 {\n    padding-right: 168px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-6 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-6 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {\n    padding-left: 214px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-7 {\n    padding-right: 214px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-7 {\n    padding-left: 196px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-7 {\n    padding-right: 196px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-7 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-7 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {\n    padding-left: 242px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-8 {\n    padding-right: 242px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-8 {\n    padding-left: 224px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-8 {\n    padding-right: 224px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-8 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-8 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {\n    padding-left: 270px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-9 {\n    padding-right: 270px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-9 {\n    padding-left: 252px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-9 {\n    padding-right: 252px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-9 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-9 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {\n    padding-left: 298px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-10 {\n    padding-right: 298px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-10 {\n    padding-left: 280px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-10 {\n    padding-right: 280px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-10 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-10 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {\n    padding-left: 326px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-11 {\n    padding-right: 326px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-11 {\n    padding-left: 308px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-11 {\n    padding-right: 308px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-11 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-11 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {\n    padding-left: 354px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-12 {\n    padding-right: 354px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-12 {\n    padding-left: 336px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-12 {\n    padding-right: 336px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-12 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-12 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {\n    padding-left: 382px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-13 {\n    padding-right: 382px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-13 {\n    padding-left: 364px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-13 {\n    padding-right: 364px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-13 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-13 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {\n    padding-left: 410px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-14 {\n    padding-right: 410px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-14 {\n    padding-left: 392px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-14 {\n    padding-right: 392px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-14 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-14 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {\n    padding-left: 438px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-15 {\n    padding-right: 438px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-15 {\n    padding-left: 420px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-15 {\n    padding-right: 420px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-15 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-15 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {\n    padding-left: 466px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-16 {\n    padding-right: 466px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-16 {\n    padding-left: 448px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-16 {\n    padding-right: 448px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-16 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-16 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {\n    padding-left: 494px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-17 {\n    padding-right: 494px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-17 {\n    padding-left: 476px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-17 {\n    padding-right: 476px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-17 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-17 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {\n    padding-left: 522px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-18 {\n    padding-right: 522px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-18 {\n    padding-left: 504px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-18 {\n    padding-right: 504px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-18 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-18 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-ltr .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {\n    padding-left: 550px; }\n  .ag-theme-alpine .ag-rtl .ag-row > .ag-cell-wrapper.ag-row-group-indent-19 {\n    padding-right: 550px; }\n  .ag-theme-alpine .ag-ltr .ag-row-group-indent-19 {\n    padding-left: 532px; }\n  .ag-theme-alpine .ag-rtl .ag-row-group-indent-19 {\n    padding-right: 532px; }\n  .ag-theme-alpine .ag-ltr .ag-row-level-19 .ag-row-group-leaf-indent {\n    margin-left: 28px; }\n  .ag-theme-alpine .ag-rtl .ag-row-level-19 .ag-row-group-leaf-indent {\n    margin-right: 28px; }\n  .ag-theme-alpine .ag-cell {\n    -webkit-font-smoothing: subpixel-antialiased; }\n  .ag-theme-alpine .ag-value-change-delta {\n    padding-right: 2px; }\n  .ag-theme-alpine .ag-value-change-delta-up {\n    color: #43a047;\n    color: var(--ag-value-change-delta-up-color, #43a047); }\n  .ag-theme-alpine .ag-value-change-delta-down {\n    color: #e53935;\n    color: var(--ag-value-change-delta-down-color, #e53935); }\n  .ag-theme-alpine .ag-value-change-value {\n    background-color: transparent;\n    border-radius: 1px;\n    padding-left: 1px;\n    padding-right: 1px;\n    transition: background-color 1s; }\n  .ag-theme-alpine .ag-value-change-value-highlight {\n    background-color: rgba(22, 160, 133, 0.5);\n    background-color: var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5));\n    transition: background-color 0.1s; }\n  .ag-theme-alpine .ag-cell-data-changed {\n    background-color: rgba(22, 160, 133, 0.5) !important;\n    background-color: var(--ag-value-change-value-highlight-background-color, rgba(22, 160, 133, 0.5)) !important; }\n  .ag-theme-alpine .ag-cell-data-changed-animation {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-cell-highlight {\n    background-color: rgba(0, 0, 0, 0) !important;\n    background-color: var(--ag-range-selection-highlight-color, var(--ag-range-selection-border-color, rgba(0, 0, 0, 0))) !important; }\n  .ag-theme-alpine .ag-row {\n    height: 42px;\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff);\n    color: #181d1f;\n    color: var(--ag-data-color, var(--ag-foreground-color, #181d1f));\n    border-width: 1px;\n    border-color: #dde2eb;\n    border-color: var(--ag-row-border-color, var(--ag-secondary-border-color, #dde2eb)); }\n    .ag-theme-alpine .ag-row:not(.ag-row-first) {\n      border-top-style: solid; }\n    .ag-theme-alpine .ag-row.ag-row-last {\n      border-bottom-style: solid; }\n  .ag-theme-alpine .ag-row-highlight-above::after, .ag-theme-alpine .ag-row-highlight-below::after {\n    content: '';\n    position: absolute;\n    width: calc(100% - 1px);\n    height: 1px;\n    background-color: rgba(0, 0, 0, 0);\n    background-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0));\n    left: 1px; }\n  .ag-theme-alpine .ag-row-highlight-above::after {\n    top: -1px; }\n  .ag-theme-alpine .ag-row-highlight-above.ag-row-first::after {\n    top: 0; }\n  .ag-theme-alpine .ag-row-highlight-below::after {\n    bottom: 0px; }\n  .ag-theme-alpine .ag-row-odd {\n    background-color: var(--ag-odd-row-background-color); }\n  .ag-theme-alpine .ag-horizontal-left-spacer:not(.ag-scroller-corner) {\n    border-right: solid 1px;\n    border-right-color: #babfc7;\n    border-right-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-horizontal-right-spacer:not(.ag-scroller-corner) {\n    border-left: solid 1px;\n    border-left-color: #babfc7;\n    border-left-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-ltr .ag-right-aligned-cell {\n    text-align: right; }\n  .ag-theme-alpine .ag-rtl .ag-right-aligned-cell {\n    text-align: left; }\n  .ag-theme-alpine .ag-ltr .ag-right-aligned-cell .ag-cell-value {\n    margin-left: auto; }\n  .ag-theme-alpine .ag-rtl .ag-right-aligned-cell .ag-cell-value {\n    margin-right: auto; }\n  .ag-theme-alpine .ag-cell {\n    border: 1px solid transparent;\n    line-height: 40px;\n    padding-left: 17px;\n    padding-right: 17px; }\n  .ag-theme-alpine .ag-row > .ag-cell-wrapper {\n    padding-left: 17px;\n    padding-right: 17px; }\n  .ag-theme-alpine .ag-row-dragging {\n    cursor: move; }\n  .ag-theme-alpine .ag-row-dragging {\n    opacity: 0.5; }\n  .ag-theme-alpine .ag-cell-inline-editing {\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    background: #fff;\n    background: var(--ag-background-color, #fff);\n    border-radius: 3px;\n    box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n    padding: 6px;\n    padding: 0;\n    height: 42px;\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8); }\n  .ag-theme-alpine .ag-popup-editor {\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    background: #fff;\n    background: var(--ag-background-color, #fff);\n    border-radius: 3px;\n    box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n    padding: 6px;\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8);\n    padding: 0; }\n  .ag-theme-alpine .ag-large-text-input {\n    height: auto;\n    padding: 18px; }\n  .ag-theme-alpine .ag-details-row {\n    padding: 30px;\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff); }\n  .ag-theme-alpine .ag-overlay-loading-wrapper {\n    background-color: rgba(255, 255, 255, 0.66);\n    background-color: var(--ag-modal-overlay-background-color, rgba(255, 255, 255, 0.66)); }\n  .ag-theme-alpine .ag-overlay-loading-center {\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    background: #fff;\n    background: var(--ag-background-color, #fff);\n    border-radius: 3px;\n    box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n    padding: 6px; }\n  .ag-theme-alpine .ag-overlay-no-rows-wrapper.ag-layout-auto-height {\n    padding-top: 30px; }\n  .ag-theme-alpine .ag-loading {\n    padding-left: 18px;\n    display: flex;\n    height: 100%;\n    align-items: center; }\n  .ag-theme-alpine .ag-loading-icon {\n    padding-right: 12px; }\n  .ag-theme-alpine .ag-icon-loading {\n    animation-name: spin;\n    animation-duration: 1000ms;\n    animation-iteration-count: infinite;\n    animation-timing-function: linear; }\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg); }\n  to {\n    transform: rotate(360deg); } }\n  .ag-theme-alpine .ag-floating-top {\n    border-bottom: solid 1px;\n    border-bottom-color: #babfc7;\n    border-bottom-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-floating-bottom {\n    border-top: solid 1px;\n    border-top-color: #babfc7;\n    border-top-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-ltr .ag-cell {\n    border-right: solid transparent; }\n  .ag-theme-alpine .ag-rtl .ag-cell {\n    border-left: solid transparent; }\n  .ag-theme-alpine .ag-ltr .ag-cell {\n    border-right-width: 1px; }\n  .ag-theme-alpine .ag-rtl .ag-cell {\n    border-left-width: 1px; }\n  .ag-theme-alpine .ag-cell.ag-cell-first-right-pinned:not(.ag-cell-range-left):not(.ag-cell-range-single-cell) {\n    border-left: solid 1px;\n    border-left-color: #babfc7;\n    border-left-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-cell.ag-cell-last-left-pinned:not(.ag-cell-range-right):not(.ag-cell-range-single-cell) {\n    border-right: solid 1px;\n    border-right-color: #babfc7;\n    border-right-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-row-selected {\n    background-color: rgba(33, 150, 243, 0.3);\n    background-color: var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3)); }\n  .ag-theme-alpine .ag-cell-range-selected:not(.ag-cell-focus) {\n    background-color: rgba(0, 0, 0, 0.2);\n    background-color: var(--ag-range-selection-background-color, rgba(0, 0, 0, 0.2)); }\n    .ag-theme-alpine .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart {\n      background-color: rgba(0, 88, 255, 0.1);\n      background-color: var(--ag-range-selection-chart-background-color, rgba(0, 88, 255, 0.1)); }\n    .ag-theme-alpine .ag-cell-range-selected:not(.ag-cell-focus).ag-cell-range-chart.ag-cell-range-chart-category {\n      background-color: rgba(0, 255, 132, 0.1);\n      background-color: var(--ag-range-selection-chart-category-background-color, rgba(0, 255, 132, 0.1)); }\n  .ag-theme-alpine .ag-cell-range-selected-1:not(.ag-cell-focus) {\n    background-color: rgba(0, 0, 0, 0.2);\n    background-color: var(--ag-range-selection-background-color-1, var(--ag-range-selection-background-color, rgba(0, 0, 0, 0.2))); }\n  .ag-theme-alpine .ag-cell-range-selected-2:not(.ag-cell-focus) {\n    background-color: rgba(0, 0, 0, 0.36);\n    background-color: var(--ag-range-selection-background-color-2, rgba(0, 0, 0, 0.36)); }\n  .ag-theme-alpine .ag-cell-range-selected-3:not(.ag-cell-focus) {\n    background-color: rgba(0, 0, 0, 0.488);\n    background-color: var(--ag-range-selection-background-color-3, rgba(0, 0, 0, 0.488)); }\n  .ag-theme-alpine .ag-cell-range-selected-4:not(.ag-cell-focus) {\n    background-color: rgba(0, 0, 0, 0.5904);\n    background-color: var(--ag-range-selection-background-color-4, rgba(0, 0, 0, 0.5904)); }\n  .ag-theme-alpine .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-top {\n    border-top-color: rgba(0, 0, 0, 0);\n    border-top-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-right {\n    border-right-color: rgba(0, 0, 0, 0);\n    border-right-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-bottom {\n    border-bottom-color: rgba(0, 0, 0, 0);\n    border-bottom-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-cell.ag-cell-range-selected:not(.ag-cell-range-single-cell).ag-cell-range-left {\n    border-left-color: rgba(0, 0, 0, 0);\n    border-left-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-ltr .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n  .ag-theme-alpine .ag-ltr .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n  .ag-theme-alpine .ag-ltr .ag-cell-range-single-cell.ag-cell-range-handle, .ag-theme-alpine .ag-rtl .ag-has-focus .ag-cell-focus:not(.ag-cell-range-selected),\n  .ag-theme-alpine .ag-rtl .ag-has-focus .ag-cell-focus.ag-cell-range-single-cell,\n  .ag-theme-alpine .ag-rtl .ag-cell-range-single-cell.ag-cell-range-handle {\n    border: 1px solid;\n    border-color: rgba(0, 0, 0, 0);\n    border-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0));\n    outline: initial; }\n  .ag-theme-alpine .ag-cell.ag-selection-fill-top,\n  .ag-theme-alpine .ag-cell.ag-selection-fill-top.ag-cell-range-selected {\n    border-top: 1px dashed;\n    border-top-color: rgba(0, 0, 0, 0);\n    border-top-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-ltr .ag-cell.ag-selection-fill-right, .ag-theme-alpine .ag-ltr .ag-cell.ag-selection-fill-right.ag-cell-range-selected {\n    border-right: 1px dashed;\n    border-right-color: rgba(0, 0, 0, 0);\n    border-right-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-rtl .ag-cell.ag-selection-fill-right, .ag-theme-alpine .ag-rtl .ag-cell.ag-selection-fill-right.ag-cell-range-selected {\n    border-left: 1px dashed;\n    border-left-color: rgba(0, 0, 0, 0);\n    border-left-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-cell.ag-selection-fill-bottom,\n  .ag-theme-alpine .ag-cell.ag-selection-fill-bottom.ag-cell-range-selected {\n    border-bottom: 1px dashed;\n    border-bottom-color: rgba(0, 0, 0, 0);\n    border-bottom-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-ltr .ag-cell.ag-selection-fill-left, .ag-theme-alpine .ag-ltr .ag-cell.ag-selection-fill-left.ag-cell-range-selected {\n    border-left: 1px dashed;\n    border-left-color: rgba(0, 0, 0, 0);\n    border-left-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-rtl .ag-cell.ag-selection-fill-left, .ag-theme-alpine .ag-rtl .ag-cell.ag-selection-fill-left.ag-cell-range-selected {\n    border-right: 1px dashed;\n    border-right-color: rgba(0, 0, 0, 0);\n    border-right-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n  .ag-theme-alpine .ag-fill-handle, .ag-theme-alpine .ag-range-handle {\n    position: absolute;\n    width: 6px;\n    height: 6px;\n    bottom: -1px;\n    background-color: rgba(0, 0, 0, 0);\n    background-color: var(--ag-range-selection-border-color, rgba(0, 0, 0, 0)); }\n    .ag-theme-alpine .ag-ltr .ag-fill-handle, .ag-theme-alpine .ag-ltr .ag-range-handle {\n      right: -1px; }\n    .ag-theme-alpine .ag-rtl .ag-fill-handle, .ag-theme-alpine .ag-rtl .ag-range-handle {\n      left: -1px; }\n  .ag-theme-alpine .ag-fill-handle {\n    cursor: cell; }\n  .ag-theme-alpine .ag-range-handle {\n    cursor: nwse-resize; }\n  .ag-theme-alpine .ag-cell-inline-editing {\n    border-color: rgba(33, 150, 243, 0.4) !important;\n    border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)) !important; }\n  .ag-theme-alpine .ag-menu {\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    background: #fff;\n    background: var(--ag-background-color, #fff);\n    border-radius: 3px;\n    box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n    padding: 6px;\n    padding: 0; }\n  .ag-theme-alpine .ag-menu-list {\n    cursor: default;\n    width: 100%;\n    padding-top: 6px;\n    padding-bottom: 6px; }\n  .ag-theme-alpine .ag-menu-option-part {\n    padding-top: 8px;\n    padding-bottom: 8px;\n    line-height: 16px; }\n  .ag-theme-alpine .ag-menu-option-active {\n    background-color: var(--ag-row-hover-color); }\n  .ag-theme-alpine .ag-menu-option-disabled {\n    opacity: 0.5; }\n  .ag-theme-alpine .ag-menu-option-text {\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-menu-option-icon {\n    padding-left: 12px;\n    padding-right: 6px;\n    min-width: 28px; }\n  .ag-theme-alpine .ag-menu-option-shortcut {\n    padding-left: 12px; }\n  .ag-theme-alpine .ag-menu-separator {\n    height: 12px; }\n  .ag-theme-alpine .ag-menu-separator-cell:after {\n    content: \"\";\n    display: block;\n    border-top: solid 1px;\n    border-top-color: #babfc7;\n    border-top-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-menu-option-popup-pointer {\n    width: 28px;\n    text-align: center; }\n  .ag-theme-alpine .ag-tabs-header {\n    min-width: 220px;\n    width: 100%;\n    display: flex; }\n  .ag-theme-alpine .ag-tab {\n    border-bottom: 2px solid transparent;\n    display: flex;\n    flex: none;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n    flex: 1 1 auto;\n    transition: border-bottom 0.3s; }\n  .ag-theme-alpine .ag-keyboard-focus .ag-tab:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-tab:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: 4px;\n      left: 4px;\n      display: block;\n      width: calc(100% - 8px);\n      height: calc(100% - 8px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-tab-selected {\n    border-bottom-color: #2196f3;\n    border-bottom-color: var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3)); }\n  .ag-theme-alpine .ag-menu-header {\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n  .ag-theme-alpine .ag-filter-condition-operator {\n    height: 17px; }\n  .ag-theme-alpine .ag-ltr .ag-filter-condition-operator-or {\n    margin-left: 12px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-condition-operator-or {\n    margin-right: 12px; }\n  .ag-theme-alpine .ag-set-filter-select-all {\n    padding-top: 12px; }\n  .ag-theme-alpine .ag-set-filter-list {\n    height: 180px; }\n  .ag-theme-alpine .ag-set-filter-filter {\n    margin-top: 12px;\n    margin-left: 12px;\n    margin-right: 12px; }\n  .ag-theme-alpine .ag-filter-to {\n    margin-top: 9px; }\n  .ag-theme-alpine .ag-mini-filter {\n    margin: 12px 12px;\n    margin-bottom: 0; }\n  .ag-theme-alpine .ag-set-filter-item {\n    margin: 0px 12px; }\n  .ag-theme-alpine .ag-ltr .ag-set-filter-item-value {\n    margin-left: 12px; }\n  .ag-theme-alpine .ag-rtl .ag-set-filter-item-value {\n    margin-right: 12px; }\n  .ag-theme-alpine .ag-filter-header-container {\n    padding-bottom: 12px;\n    border-bottom: solid 1px;\n    border-bottom-color: #dde2eb;\n    border-bottom-color: var(--ag-secondary-border-color, #dde2eb); }\n  .ag-theme-alpine .ag-filter-apply-panel {\n    padding: 12px 12px;\n    border-top: solid 1px;\n    border-top-color: #dde2eb;\n    border-top-color: var(--ag-secondary-border-color, #dde2eb); }\n  .ag-theme-alpine .ag-filter-apply-panel-button {\n    line-height: 1.5; }\n    .ag-theme-alpine .ag-ltr .ag-filter-apply-panel-button {\n      margin-left: 12px; }\n    .ag-theme-alpine .ag-rtl .ag-filter-apply-panel-button {\n      margin-right: 12px; }\n  .ag-theme-alpine .ag-simple-filter-body-wrapper {\n    padding: 12px 12px;\n    padding-bottom: 3px; }\n    .ag-theme-alpine .ag-simple-filter-body-wrapper > * {\n      margin-bottom: 9px; }\n  .ag-theme-alpine .ag-filter-no-matches {\n    margin: 12px 12px; }\n  .ag-theme-alpine .ag-side-bar {\n    position: relative; }\n  .ag-theme-alpine .ag-tool-panel-wrapper {\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8); }\n  .ag-theme-alpine .ag-side-buttons {\n    padding-top: 24px;\n    width: 20px;\n    position: relative;\n    color: #181d1f;\n    color: var(--ag-foreground-color, #181d1f);\n    overflow: hidden; }\n  .ag-theme-alpine button.ag-side-button-button {\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n    background: transparent;\n    padding: 12px 0 12px 0;\n    width: 100%;\n    margin: 0;\n    min-height: 108px;\n    background-position-y: center;\n    background-position-x: center;\n    background-repeat: no-repeat;\n    border: none; }\n    .ag-theme-alpine button.ag-side-button-button:focus {\n      box-shadow: none; }\n  .ag-theme-alpine .ag-keyboard-focus .ag-side-button-button:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-side-button-button:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: 4px;\n      left: 4px;\n      display: block;\n      width: calc(100% - 8px);\n      height: calc(100% - 8px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-side-button-icon-wrapper {\n    margin-bottom: 3px; }\n  .ag-theme-alpine .ag-ltr .ag-side-bar-left,\n  .ag-theme-alpine .ag-rtl .ag-side-bar-right {\n    border-right: solid 1px;\n    border-right-color: #babfc7;\n    border-right-color: var(--ag-border-color, #babfc7); }\n    .ag-theme-alpine .ag-ltr .ag-side-bar-left .ag-tool-panel-wrapper,\n    .ag-theme-alpine .ag-rtl .ag-side-bar-right .ag-tool-panel-wrapper {\n      border-left: solid 1px;\n      border-left-color: #babfc7;\n      border-left-color: var(--ag-border-color, #babfc7); }\n    .ag-theme-alpine .ag-ltr .ag-side-bar-left .ag-side-button-button,\n    .ag-theme-alpine .ag-rtl .ag-side-bar-right .ag-side-button-button {\n      border-right: 2px solid transparent;\n      transition: border-right 0.3s; }\n    .ag-theme-alpine .ag-ltr .ag-side-bar-left .ag-selected .ag-side-button-button,\n    .ag-theme-alpine .ag-rtl .ag-side-bar-right .ag-selected .ag-side-button-button {\n      border-right-color: #2196f3;\n      border-right-color: var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3)); }\n  .ag-theme-alpine .ag-rtl .ag-side-bar-left,\n  .ag-theme-alpine .ag-ltr .ag-side-bar-right {\n    border-left: solid 1px;\n    border-left-color: #babfc7;\n    border-left-color: var(--ag-border-color, #babfc7); }\n    .ag-theme-alpine .ag-rtl .ag-side-bar-left .ag-tool-panel-wrapper,\n    .ag-theme-alpine .ag-ltr .ag-side-bar-right .ag-tool-panel-wrapper {\n      border-right: solid 1px;\n      border-right-color: #babfc7;\n      border-right-color: var(--ag-border-color, #babfc7); }\n    .ag-theme-alpine .ag-rtl .ag-side-bar-left .ag-side-button-button,\n    .ag-theme-alpine .ag-ltr .ag-side-bar-right .ag-side-button-button {\n      border-left: 2px solid transparent;\n      transition: border-left 0.3s; }\n    .ag-theme-alpine .ag-rtl .ag-side-bar-left .ag-selected .ag-side-button-button,\n    .ag-theme-alpine .ag-ltr .ag-side-bar-right .ag-selected .ag-side-button-button {\n      border-left-color: #2196f3;\n      border-left-color: var(--ag-selected-tab-underline-color, var(--ag-alpine-active-color, #2196f3)); }\n  .ag-theme-alpine .ag-filter-toolpanel-header {\n    height: 36px; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-header, .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-search {\n    padding-left: 6px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-header, .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-search {\n    padding-right: 6px; }\n  .ag-theme-alpine .ag-keyboard-focus .ag-filter-toolpanel-header:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-filter-toolpanel-header:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: 4px;\n      left: 4px;\n      display: block;\n      width: calc(100% - 8px);\n      height: calc(100% - 8px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title:after {\n    font-family: \"agGridAlpine\";\n    font-size: 16px;\n    line-height: 16px;\n    font-style: normal;\n    font-weight: normal;\n    font-feature-settings: normal;\n    font-variant: normal;\n    text-transform: none;\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    content: \"\\f112\";\n    position: absolute; }\n    .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title:after {\n      padding-left: 6px; }\n    .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group.ag-has-filter > .ag-group-title-bar .ag-group-title:after {\n      padding-right: 6px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-0-header {\n    height: 48px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-item {\n    margin-top: 3px;\n    margin-bottom: 3px; }\n  .ag-theme-alpine .ag-filter-toolpanel-search {\n    height: 48px; }\n  .ag-theme-alpine .ag-filter-toolpanel-search-input {\n    flex-grow: 1;\n    height: 24px; }\n    .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-search-input {\n      margin-right: 6px; }\n    .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-search-input {\n      margin-left: 6px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-0 {\n    border-top: solid 1px;\n    border-top-color: #dde2eb;\n    border-top-color: var(--ag-secondary-border-color, #dde2eb); }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-expand, .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-title-bar-icon {\n    margin-right: 6px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-expand, .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-title-bar-icon {\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-1-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header {\n    padding-left: 22px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-1 .ag-filter-toolpanel-group-level-2-header {\n    padding-right: 22px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-2-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header {\n    padding-left: 38px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-2 .ag-filter-toolpanel-group-level-3-header {\n    padding-right: 38px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-3-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header {\n    padding-left: 54px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-3 .ag-filter-toolpanel-group-level-4-header {\n    padding-right: 54px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-4-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header {\n    padding-left: 70px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-4 .ag-filter-toolpanel-group-level-5-header {\n    padding-right: 70px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-5-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header {\n    padding-left: 86px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-5 .ag-filter-toolpanel-group-level-6-header {\n    padding-right: 86px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-6-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header {\n    padding-left: 102px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-6 .ag-filter-toolpanel-group-level-7-header {\n    padding-right: 102px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-7-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header {\n    padding-left: 118px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-7 .ag-filter-toolpanel-group-level-8-header {\n    padding-right: 118px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-8-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header {\n    padding-left: 134px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-8 .ag-filter-toolpanel-group-level-9-header {\n    padding-right: 134px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-9-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header {\n    padding-left: 150px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-9 .ag-filter-toolpanel-group-level-10-header {\n    padding-right: 150px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-10-header.ag-filter-toolpanel-group-title-bar {\n    background-color: transparent; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header {\n    padding-left: 166px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-group-level-10 .ag-filter-toolpanel-group-level-11-header {\n    padding-right: 166px; }\n  .ag-theme-alpine .ag-filter-toolpanel-instance-header.ag-filter-toolpanel-group-level-1-header {\n    padding-left: 6px; }\n  .ag-theme-alpine .ag-filter-toolpanel-instance-filter {\n    border-top: solid 1px;\n    border-top-color: #babfc7;\n    border-top-color: var(--ag-border-color, #babfc7);\n    border-bottom: solid 1px;\n    border-bottom-color: #babfc7;\n    border-bottom-color: var(--ag-border-color, #babfc7);\n    padding-top: 6px; }\n  .ag-theme-alpine .ag-ltr .ag-filter-toolpanel-instance-header-icon {\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-rtl .ag-filter-toolpanel-instance-header-icon {\n    margin-right: 6px; }\n  .ag-theme-alpine .ag-pivot-mode-panel {\n    height: 48px;\n    display: flex; }\n  .ag-theme-alpine .ag-pivot-mode-select {\n    display: flex;\n    align-items: center; }\n    .ag-theme-alpine .ag-ltr .ag-pivot-mode-select {\n      margin-left: 12px; }\n    .ag-theme-alpine .ag-rtl .ag-pivot-mode-select {\n      margin-right: 12px; }\n  .ag-theme-alpine .ag-keyboard-focus .ag-column-select-header:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-column-select-header:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: 4px;\n      left: 4px;\n      display: block;\n      width: calc(100% - 8px);\n      height: calc(100% - 8px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-column-select-header {\n    height: 48px;\n    align-items: center;\n    padding: 0 12px;\n    border-bottom: solid 1px;\n    border-bottom-color: #dde2eb;\n    border-bottom-color: var(--ag-secondary-border-color, #dde2eb); }\n  .ag-theme-alpine .ag-column-panel-column-select {\n    border-bottom: solid 1px;\n    border-bottom-color: #dde2eb;\n    border-bottom-color: var(--ag-secondary-border-color, #dde2eb);\n    border-top: solid 1px;\n    border-top-color: #dde2eb;\n    border-top-color: var(--ag-secondary-border-color, #dde2eb); }\n  .ag-theme-alpine .ag-column-group-icons,\n  .ag-theme-alpine .ag-column-select-header-icon {\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n  .ag-theme-alpine .ag-header {\n    background-color: #f8f8f8;\n    background-color: var(--ag-header-background-color, #f8f8f8);\n    border-bottom: solid 1px;\n    border-bottom-color: #babfc7;\n    border-bottom-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-header-row {\n    color: #181d1f;\n    color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))); }\n  .ag-theme-alpine .ag-pinned-right-header {\n    border-left: solid 1px;\n    border-left-color: #babfc7;\n    border-left-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-pinned-left-header {\n    border-right: solid 1px;\n    border-right-color: #babfc7;\n    border-right-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-header-row {\n    height: 48px; }\n  .ag-theme-alpine .ag-ltr .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-rtl .ag-header-cell:not(.ag-right-aligned-header) .ag-header-label-icon {\n    margin-right: 6px; }\n  .ag-theme-alpine .ag-ltr .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {\n    margin-right: 6px; }\n  .ag-theme-alpine .ag-rtl .ag-header-cell.ag-right-aligned-header .ag-header-label-icon {\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-header-cell,\n  .ag-theme-alpine .ag-header-group-cell {\n    padding-left: 18px;\n    padding-right: 18px; }\n    .ag-theme-alpine .ag-header-cell.ag-header-cell-moving,\n    .ag-theme-alpine .ag-header-group-cell.ag-header-cell-moving {\n      background-color: #fff;\n      background-color: var(--ag-header-cell-moving-background-color, var(--ag-background-color, #fff)); }\n  .ag-theme-alpine .ag-keyboard-focus .ag-header-cell:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-header-cell:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: 4px;\n      left: 4px;\n      display: block;\n      width: calc(100% - 8px);\n      height: calc(100% - 8px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-keyboard-focus .ag-header-group-cell:focus {\n    outline: none; }\n    .ag-theme-alpine .ag-keyboard-focus .ag-header-group-cell:focus:after {\n      content: '';\n      position: absolute;\n      background-color: transparent;\n      pointer-events: none;\n      top: 4px;\n      left: 4px;\n      display: block;\n      width: calc(100% - 8px);\n      height: calc(100% - 8px);\n      border: 1px solid;\n      border-color: rgba(33, 150, 243, 0.4);\n      border-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n  .ag-theme-alpine .ag-header-icon {\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n  .ag-theme-alpine .ag-header-expand-icon {\n    cursor: pointer; }\n    .ag-theme-alpine .ag-ltr .ag-header-expand-icon {\n      padding-left: 4px; }\n    .ag-theme-alpine .ag-rtl .ag-header-expand-icon {\n      padding-right: 4px; }\n  .ag-theme-alpine .ag-header-row:not(:first-child) .ag-header-cell,\n  .ag-theme-alpine .ag-header-row:not(:first-child) .ag-header-group-cell.ag-header-group-cell-with-group {\n    border-top: solid 1px;\n    border-top-color: #babfc7;\n    border-top-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-header-cell-resize {\n    display: flex;\n    align-items: center; }\n  .ag-theme-alpine .ag-header-cell-resize::after {\n    content: \"\";\n    position: absolute;\n    z-index: 1;\n    display: block;\n    left: calc(50% - 1px);\n    width: 2px;\n    height: 30%;\n    top: calc(50% - 15%);\n    background-color: rgba(186, 191, 199, 0.5);\n    background-color: var(--ag-header-column-resize-handle-color, rgba(186, 191, 199, 0.5)); }\n  .ag-theme-alpine .ag-pinned-right-header .ag-header-cell-resize::after {\n    left: calc(50% - 2px); }\n  .ag-theme-alpine .ag-ltr .ag-header-select-all {\n    margin-right: 18px; }\n  .ag-theme-alpine .ag-rtl .ag-header-select-all {\n    margin-left: 18px; }\n  .ag-theme-alpine .ag-ltr .ag-floating-filter-button {\n    margin-left: 18px; }\n  .ag-theme-alpine .ag-rtl .ag-floating-filter-button {\n    margin-right: 18px; }\n  .ag-theme-alpine .ag-floating-filter-button-button {\n    color: inherit;\n    font-family: inherit;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n    -webkit-appearance: none;\n       -moz-appearance: none;\n            appearance: none;\n    background: transparent;\n    border: none;\n    height: 16px;\n    padding: 0;\n    width: 16px; }\n  .ag-theme-alpine .ag-filter-loading {\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8);\n    height: 100%;\n    padding: 12px 12px;\n    position: absolute;\n    width: 100%;\n    z-index: 1; }\n  .ag-theme-alpine .ag-paging-panel {\n    border-top: 1px solid;\n    border-top-color: #babfc7;\n    border-top-color: var(--ag-border-color, #babfc7);\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n    height: 48px; }\n    .ag-theme-alpine .ag-paging-panel > * {\n      margin: 0 18px; }\n  .ag-theme-alpine .ag-paging-button {\n    cursor: pointer;\n    opacity: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    padding: 0;\n    width: 16px; }\n  .ag-theme-alpine .ag-disabled .ag-paging-button {\n    cursor: default; }\n  .ag-theme-alpine .ag-paging-button-wrapper.ag-disabled {\n    color: rgba(24, 29, 31, 0.5);\n    color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n    cursor: default; }\n  .ag-theme-alpine .ag-paging-button-wrapper, .ag-theme-alpine .ag-paging-description {\n    margin: 0 6px; }\n  .ag-theme-alpine .ag-status-bar {\n    border-top: solid 1px;\n    border-top-color: #babfc7;\n    border-top-color: var(--ag-border-color, #babfc7);\n    color: rgba(24, 29, 31, 0.5);\n    color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n    padding-right: 24px;\n    padding-left: 24px;\n    line-height: 1.5; }\n  .ag-theme-alpine .ag-status-name-value-value {\n    color: #181d1f;\n    color: var(--ag-foreground-color, #181d1f); }\n  .ag-theme-alpine .ag-status-bar-center {\n    text-align: center; }\n  .ag-theme-alpine .ag-status-name-value {\n    margin-left: 6px;\n    margin-right: 6px;\n    padding-top: 12px;\n    padding-bottom: 12px; }\n  .ag-theme-alpine .ag-column-drop-cell {\n    background: rgba(24, 29, 31, 0.07);\n    background: var(--ag-chip-background-color, rgba(24, 29, 31, 0.07));\n    border-radius: 24px;\n    height: 24px;\n    padding: 0 3px; }\n  .ag-theme-alpine .ag-column-drop-cell-text {\n    margin: 0 6px; }\n  .ag-theme-alpine .ag-column-drop-cell-button {\n    min-width: 24px;\n    margin: 0 3px;\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n  .ag-theme-alpine .ag-column-drop-cell-drag-handle {\n    margin-left: 12px; }\n  .ag-theme-alpine .ag-column-drop-cell-ghost {\n    opacity: 0.5; }\n  .ag-theme-alpine .ag-column-drop-horizontal {\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8);\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f));\n    height: 42px;\n    border-bottom: solid 1px;\n    border-bottom-color: #babfc7;\n    border-bottom-color: var(--ag-border-color, #babfc7); }\n    .ag-theme-alpine .ag-ltr .ag-column-drop-horizontal {\n      padding-left: 18px; }\n    .ag-theme-alpine .ag-rtl .ag-column-drop-horizontal {\n      padding-right: 18px; }\n  .ag-theme-alpine .ag-ltr .ag-column-drop-horizontal-half-width:not(:last-child) {\n    border-right: solid 1px;\n    border-right-color: #babfc7;\n    border-right-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-rtl .ag-column-drop-horizontal-half-width:not(:last-child) {\n    border-left: solid 1px;\n    border-left-color: #babfc7;\n    border-left-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-column-drop-horizontal-cell-separator {\n    margin: 0 6px;\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n  .ag-theme-alpine .ag-column-drop-horizontal-empty-message {\n    color: rgba(24, 29, 31, 0.5);\n    color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5)); }\n  .ag-theme-alpine .ag-ltr .ag-column-drop-horizontal-icon {\n    margin-right: 18px; }\n  .ag-theme-alpine .ag-rtl .ag-column-drop-horizontal-icon {\n    margin-left: 18px; }\n  .ag-theme-alpine .ag-column-drop-vertical-list {\n    padding-bottom: 6px;\n    padding-right: 6px;\n    padding-left: 6px; }\n  .ag-theme-alpine .ag-column-drop-vertical-cell {\n    margin-top: 6px; }\n  .ag-theme-alpine .ag-column-drop-vertical {\n    min-height: 50px;\n    max-height: 150px;\n    border-bottom: solid 1px;\n    border-bottom-color: #dde2eb;\n    border-bottom-color: var(--ag-secondary-border-color, #dde2eb); }\n    .ag-theme-alpine .ag-column-drop-vertical.ag-last-column-drop {\n      border-bottom: none; }\n  .ag-theme-alpine .ag-column-drop-vertical-icon {\n    margin-left: 6px;\n    margin-right: 6px; }\n  .ag-theme-alpine .ag-column-drop-vertical-list {\n    position: relative; }\n  .ag-theme-alpine .ag-column-drop-vertical-empty-message {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    overflow: hidden;\n    color: rgba(24, 29, 31, 0.5);\n    color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n    margin-top: 6px; }\n  .ag-theme-alpine .ag-select-agg-func-popup {\n    border: solid 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    background: #fff;\n    background: var(--ag-background-color, #fff);\n    border-radius: 3px;\n    box-shadow: 0 1px 4px 1px rgba(186, 191, 199, 0.4);\n    padding: 6px;\n    background: #fff;\n    background: var(--ag-background-color, #fff);\n    height: 105px;\n    padding: 0; }\n  .ag-theme-alpine .ag-select-agg-func-virtual-list-item {\n    cursor: default;\n    line-height: 30px;\n    padding-left: 12px; }\n    .ag-theme-alpine .ag-select-agg-func-virtual-list-item:hover {\n      background-color: rgba(33, 150, 243, 0.3);\n      background-color: var(--ag-selected-row-background-color, rgba(33, 150, 243, 0.3)); }\n  .ag-theme-alpine .ag-chart-menu {\n    border-radius: 3px;\n    background: #fff;\n    background: var(--ag-background-color, #fff); }\n  .ag-theme-alpine .ag-chart-menu-icon {\n    opacity: 0.5;\n    line-height: 24px;\n    font-size: 24px;\n    width: 24px;\n    height: 24px;\n    margin: 2px 0;\n    cursor: pointer;\n    border-radius: 3px;\n    color: #181d1f;\n    color: var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f)); }\n    .ag-theme-alpine .ag-chart-menu-icon:hover {\n      opacity: 1; }\n  .ag-theme-alpine .ag-chart-mini-thumbnail {\n    border: 1px solid;\n    border-color: #dde2eb;\n    border-color: var(--ag-secondary-border-color, #dde2eb);\n    border-radius: 5px;\n    margin: 5px; }\n    .ag-theme-alpine .ag-chart-mini-thumbnail:nth-last-child(3),\n    .ag-theme-alpine .ag-chart-mini-thumbnail:nth-last-child(3) ~ .ag-chart-mini-thumbnail {\n      margin-left: auto;\n      margin-right: auto; }\n    .ag-theme-alpine .ag-ltr .ag-chart-mini-thumbnail:first-child {\n      margin-left: 0; }\n    .ag-theme-alpine .ag-rtl .ag-chart-mini-thumbnail:first-child {\n      margin-right: 0; }\n    .ag-theme-alpine .ag-ltr .ag-chart-mini-thumbnail:last-child {\n      margin-right: 0; }\n    .ag-theme-alpine .ag-rtl .ag-chart-mini-thumbnail:last-child {\n      margin-left: 0; }\n    .ag-theme-alpine .ag-chart-mini-thumbnail.ag-selected {\n      border-color: #2196f3;\n      border-color: var(--ag-minichart-selected-chart-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))); }\n  .ag-theme-alpine .ag-chart-settings-card-item {\n    background: #181d1f;\n    background: var(--ag-foreground-color, #181d1f);\n    width: 8px;\n    height: 8px;\n    border-radius: 4px; }\n    .ag-theme-alpine .ag-chart-settings-card-item.ag-selected {\n      background-color: #2196f3;\n      background-color: var(--ag-minichart-selected-page-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))); }\n  .ag-theme-alpine .ag-chart-data-column-drag-handle {\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-charts-settings-group-title-bar,\n  .ag-theme-alpine .ag-charts-data-group-title-bar,\n  .ag-theme-alpine .ag-charts-format-top-level-group-title-bar {\n    border-top: solid 1px;\n    border-top-color: #dde2eb;\n    border-top-color: var(--ag-secondary-border-color, #dde2eb); }\n  .ag-theme-alpine .ag-charts-settings-group-container {\n    padding: 6px; }\n  .ag-theme-alpine .ag-charts-data-group-container {\n    padding: 12px 12px;\n    padding-bottom: 3px; }\n    .ag-theme-alpine .ag-charts-data-group-container > * {\n      margin-bottom: 9px; }\n  .ag-theme-alpine .ag-charts-format-top-level-group-container {\n    margin-left: 12px;\n    padding: 6px; }\n  .ag-theme-alpine .ag-charts-format-top-level-group-item {\n    margin: 6px 0; }\n  .ag-theme-alpine .ag-charts-format-sub-level-group-container {\n    padding: 12px 12px;\n    padding-bottom: 3px; }\n    .ag-theme-alpine .ag-charts-format-sub-level-group-container > * {\n      margin-bottom: 9px; }\n  .ag-theme-alpine .ag-charts-group-container.ag-group-container-horizontal {\n    padding: 6px; }\n  .ag-theme-alpine .ag-chart-data-section,\n  .ag-theme-alpine .ag-chart-format-section {\n    display: flex;\n    margin: 0; }\n  .ag-theme-alpine .ag-chart-menu-panel {\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8); }\n    .ag-theme-alpine .ag-ltr .ag-chart-menu-panel {\n      border-left: solid 1px;\n      border-left-color: #babfc7;\n      border-left-color: var(--ag-border-color, #babfc7); }\n    .ag-theme-alpine .ag-rtl .ag-chart-menu-panel {\n      border-right: solid 1px;\n      border-right-color: #babfc7;\n      border-right-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-date-time-list-page-title {\n    flex-grow: 1;\n    text-align: center; }\n  .ag-theme-alpine .ag-date-time-list-page-column-label {\n    text-align: center; }\n  .ag-theme-alpine .ag-date-time-list-page-entry {\n    text-align: center; }\n  .ag-theme-alpine .ag-checkbox-input-wrapper {\n    font-family: \"agGridAlpine\";\n    font-size: 16px;\n    line-height: 16px;\n    font-style: normal;\n    font-weight: normal;\n    font-feature-settings: normal;\n    font-variant: normal;\n    text-transform: none;\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    width: 16px;\n    height: 16px;\n    background-color: #fff;\n    background-color: var(--ag-checkbox-background-color, var(--ag-background-color, #fff));\n    border-radius: 3px;\n    display: inline-block;\n    vertical-align: middle;\n    flex: none; }\n    .ag-theme-alpine .ag-checkbox-input-wrapper input, .ag-theme-alpine .ag-checkbox-input-wrapper input {\n      -webkit-appearance: none;\n      opacity: 0;\n      width: 100%;\n      height: 100%; }\n    .ag-theme-alpine .ag-checkbox-input-wrapper:focus-within, .ag-theme-alpine .ag-checkbox-input-wrapper:active {\n      outline: none;\n      box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4); }\n    .ag-theme-alpine .ag-checkbox-input-wrapper.ag-disabled {\n      opacity: 0.5; }\n    .ag-theme-alpine .ag-checkbox-input-wrapper::after {\n      content: \"\\f108\";\n      color: #999;\n      color: var(--ag-checkbox-unchecked-color, #999);\n      position: absolute;\n      top: 0;\n      left: 0;\n      pointer-events: none; }\n    .ag-theme-alpine .ag-checkbox-input-wrapper.ag-checked::after {\n      content: \"\\f106\";\n      color: #2196f3;\n      color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3));\n      position: absolute;\n      top: 0;\n      left: 0;\n      pointer-events: none; }\n    .ag-theme-alpine .ag-checkbox-input-wrapper.ag-indeterminate::after {\n      content: \"\\f107\";\n      color: #999;\n      color: var(--ag-checkbox-indeterminate-color, var(--ag-checkbox-unchecked-color, #999));\n      position: absolute;\n      top: 0;\n      left: 0;\n      pointer-events: none; }\n  .ag-theme-alpine .ag-toggle-button-input-wrapper {\n    box-sizing: border-box;\n    width: 28px;\n    height: 18px;\n    background-color: #999;\n    background-color: var(--ag-toggle-button-off-background-color, var(--ag-checkbox-unchecked-color, #999));\n    border-radius: 9px;\n    position: relative;\n    flex: none;\n    border: 1px solid;\n    border-color: #999;\n    border-color: var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #999)); }\n    .ag-theme-alpine .ag-toggle-button-input-wrapper input {\n      opacity: 0;\n      height: 100%;\n      width: 100%; }\n    .ag-theme-alpine .ag-toggle-button-input-wrapper:focus-within {\n      outline: none;\n      box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4); }\n    .ag-theme-alpine .ag-toggle-button-input-wrapper.ag-disabled {\n      opacity: 0.5; }\n    .ag-theme-alpine .ag-toggle-button-input-wrapper.ag-checked {\n      background-color: #2196f3;\n      background-color: var(--ag-toggle-button-on-background-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)));\n      border-color: #2196f3;\n      border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))); }\n    .ag-theme-alpine .ag-toggle-button-input-wrapper::before {\n      content: ' ';\n      position: absolute;\n      top: -1px;\n      left: -1px;\n      display: block;\n      box-sizing: border-box;\n      height: 18px;\n      width: 18px;\n      background-color: #fff;\n      background-color: var(--ag-toggle-button-switch-background-color, var(--ag-background-color, #fff));\n      border-radius: 9px;\n      transition: left 100ms;\n      border: 1px solid;\n      border-color: #999;\n      border-color: var(--ag-toggle-button-switch-border-color, var(--ag-toggle-button-off-border-color, var(--ag-checkbox-unchecked-color, #999))); }\n    .ag-theme-alpine .ag-toggle-button-input-wrapper.ag-checked::before {\n      left: calc(100% - 18px);\n      border-color: #2196f3;\n      border-color: var(--ag-toggle-button-on-border-color, var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3))); }\n  .ag-theme-alpine .ag-radio-button-input-wrapper {\n    font-family: \"agGridAlpine\";\n    font-size: 16px;\n    line-height: 16px;\n    font-style: normal;\n    font-weight: normal;\n    font-feature-settings: normal;\n    font-variant: normal;\n    text-transform: none;\n    /* Better Font Rendering =========== */\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    width: 16px;\n    height: 16px;\n    background-color: #fff;\n    background-color: var(--ag-checkbox-background-color, var(--ag-background-color, #fff));\n    border-radius: 3px;\n    display: inline-block;\n    vertical-align: middle;\n    flex: none;\n    border-radius: 16px; }\n    .ag-theme-alpine .ag-radio-button-input-wrapper input, .ag-theme-alpine .ag-radio-button-input-wrapper input {\n      -webkit-appearance: none;\n      opacity: 0;\n      width: 100%;\n      height: 100%; }\n    .ag-theme-alpine .ag-radio-button-input-wrapper:focus-within, .ag-theme-alpine .ag-radio-button-input-wrapper:active {\n      outline: none;\n      box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4); }\n    .ag-theme-alpine .ag-radio-button-input-wrapper.ag-disabled {\n      opacity: 0.5; }\n    .ag-theme-alpine .ag-radio-button-input-wrapper::after {\n      content: \"\\f124\";\n      color: #999;\n      color: var(--ag-checkbox-unchecked-color, #999);\n      position: absolute;\n      top: 0;\n      left: 0;\n      pointer-events: none; }\n    .ag-theme-alpine .ag-radio-button-input-wrapper.ag-checked::after {\n      content: \"\\f125\";\n      color: #2196f3;\n      color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3));\n      position: absolute;\n      top: 0;\n      left: 0;\n      pointer-events: none; }\n  .ag-theme-alpine input[class^='ag-'][type='range'] {\n    -webkit-appearance: none;\n    width: 100%;\n    height: 100%;\n    background: none;\n    overflow: visible; }\n    .ag-theme-alpine input[class^='ag-'][type='range']::-webkit-slider-runnable-track {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 3px;\n      background-color: #babfc7;\n      background-color: var(--ag-border-color, #babfc7);\n      border-radius: 3px;\n      border-radius: 3px; }\n    .ag-theme-alpine input[class^='ag-'][type='range']::-moz-range-track {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 3px;\n      background-color: #babfc7;\n      background-color: var(--ag-border-color, #babfc7);\n      border-radius: 3px;\n      border-radius: 3px; }\n    .ag-theme-alpine input[class^='ag-'][type='range']::-ms-track {\n      margin: 0;\n      padding: 0;\n      width: 100%;\n      height: 3px;\n      background-color: #babfc7;\n      background-color: var(--ag-border-color, #babfc7);\n      border-radius: 3px;\n      border-radius: 3px;\n      color: transparent;\n      width: calc(100% - 2px); }\n    .ag-theme-alpine input[class^='ag-'][type='range']::-webkit-slider-thumb {\n      margin: 0;\n      padding: 0;\n      -webkit-appearance: none;\n      width: 16px;\n      height: 16px;\n      background-color: #fff;\n      background-color: var(--ag-background-color, #fff);\n      border: 1px solid;\n      border-color: #999;\n      border-color: var(--ag-checkbox-unchecked-color, #999);\n      border-radius: 16px;\n      transform: translateY(-6.5px); }\n    .ag-theme-alpine input[class^='ag-'][type='range']::-ms-thumb {\n      margin: 0;\n      padding: 0;\n      -webkit-appearance: none;\n      width: 16px;\n      height: 16px;\n      background-color: #fff;\n      background-color: var(--ag-background-color, #fff);\n      border: 1px solid;\n      border-color: #999;\n      border-color: var(--ag-checkbox-unchecked-color, #999);\n      border-radius: 16px; }\n    .ag-theme-alpine input[class^='ag-'][type='range']::-moz-ag-range-thumb {\n      margin: 0;\n      padding: 0;\n      -webkit-appearance: none;\n      width: 16px;\n      height: 16px;\n      background-color: #fff;\n      background-color: var(--ag-background-color, #fff);\n      border: 1px solid;\n      border-color: #999;\n      border-color: var(--ag-checkbox-unchecked-color, #999);\n      border-radius: 16px; }\n    .ag-theme-alpine input[class^='ag-'][type='range']:focus {\n      outline: none; }\n      .ag-theme-alpine input[class^='ag-'][type='range']:focus::-webkit-slider-thumb {\n        box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n        border-color: #2196f3;\n        border-color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)); }\n      .ag-theme-alpine input[class^='ag-'][type='range']:focus::-ms-thumb {\n        box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n        border-color: #2196f3;\n        border-color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)); }\n      .ag-theme-alpine input[class^='ag-'][type='range']:focus::-moz-ag-range-thumb {\n        box-shadow: 0 0 2px 0.1rem rgba(33, 150, 243, 0.4);\n        border-color: #2196f3;\n        border-color: var(--ag-checkbox-checked-color, var(--ag-alpine-active-color, #2196f3)); }\n    .ag-theme-alpine input[class^='ag-'][type='range']:active::-webkit-slider-runnable-track {\n      background-color: rgba(33, 150, 243, 0.4);\n      background-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n    .ag-theme-alpine input[class^='ag-'][type='range']:active::-moz-ag-range-track {\n      background-color: rgba(33, 150, 243, 0.4);\n      background-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n    .ag-theme-alpine input[class^='ag-'][type='range']:active::-ms-track {\n      background-color: rgba(33, 150, 243, 0.4);\n      background-color: var(--ag-input-focus-border-color, rgba(33, 150, 243, 0.4)); }\n    .ag-theme-alpine input[class^='ag-'][type='range']:disabled {\n      opacity: 0.5; }\n  .ag-theme-alpine .ag-filter-toolpanel-header,\n  .ag-theme-alpine .ag-filter-toolpanel-search,\n  .ag-theme-alpine .ag-status-bar,\n  .ag-theme-alpine .ag-header-row,\n  .ag-theme-alpine .ag-panel-title-bar-title {\n    font-weight: 700;\n    color: #181d1f;\n    color: var(--ag-header-foreground-color, var(--ag-secondary-foreground-color, var(--ag-foreground-color, #181d1f))); }\n  .ag-theme-alpine .ag-ltr .ag-pinned-right-header .ag-header-row:after, .ag-theme-alpine .ag-rtl .ag-pinned-left-header .ag-header-row:before {\n    content: '';\n    position: absolute;\n    height: calc(100% - 20px);\n    top: 10px;\n    width: 1px;\n    background-color: #babfc7;\n    background-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-ltr .ag-pinned-right-header .ag-header-row:after {\n    right: 0; }\n  .ag-theme-alpine .ag-rtl .ag-pinned-left-header .ag-header-row:before {\n    left: 0; }\n  .ag-theme-alpine .ag-row {\n    font-size: 17px; }\n  .ag-theme-alpine input[class^='ag-']:not([type]),\n  .ag-theme-alpine input[class^='ag-'][type='text'],\n  .ag-theme-alpine input[class^='ag-'][type='number'],\n  .ag-theme-alpine input[class^='ag-'][type='tel'],\n  .ag-theme-alpine input[class^='ag-'][type='date'],\n  .ag-theme-alpine input[class^='ag-'][type='datetime-local'],\n  .ag-theme-alpine textarea[class^='ag-'] {\n    min-height: 24px;\n    border-radius: 3px; }\n    .ag-theme-alpine .ag-ltr input[class^='ag-']:not([type]),\n    .ag-theme-alpine .ag-ltr input[class^='ag-'][type='text'],\n    .ag-theme-alpine .ag-ltr input[class^='ag-'][type='number'],\n    .ag-theme-alpine .ag-ltr input[class^='ag-'][type='tel'],\n    .ag-theme-alpine .ag-ltr input[class^='ag-'][type='date'],\n    .ag-theme-alpine .ag-ltr input[class^='ag-'][type='datetime-local'],\n    .ag-theme-alpine .ag-ltr textarea[class^='ag-'] {\n      padding-left: 6px; }\n    .ag-theme-alpine .ag-rtl input[class^='ag-']:not([type]),\n    .ag-theme-alpine .ag-rtl input[class^='ag-'][type='text'],\n    .ag-theme-alpine .ag-rtl input[class^='ag-'][type='number'],\n    .ag-theme-alpine .ag-rtl input[class^='ag-'][type='tel'],\n    .ag-theme-alpine .ag-rtl input[class^='ag-'][type='date'],\n    .ag-theme-alpine .ag-rtl input[class^='ag-'][type='datetime-local'],\n    .ag-theme-alpine .ag-rtl textarea[class^='ag-'] {\n      padding-right: 6px; }\n  .ag-theme-alpine .ag-tab {\n    padding: 9px;\n    transition: color 0.4s; }\n  .ag-theme-alpine .ag-tab-selected {\n    color: #2196f3;\n    color: var(--ag-alpine-active-color, #2196f3); }\n  .ag-theme-alpine .ag-menu {\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8); }\n  .ag-theme-alpine .ag-menu-header {\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8);\n    padding-top: 1px; }\n  .ag-theme-alpine .ag-tabs-header {\n    border-bottom: solid 1px;\n    border-bottom-color: #babfc7;\n    border-bottom-color: var(--ag-border-color, #babfc7); }\n  .ag-theme-alpine .ag-charts-settings-group-title-bar,\n  .ag-theme-alpine .ag-charts-data-group-title-bar,\n  .ag-theme-alpine .ag-charts-format-top-level-group-title-bar {\n    padding: 6px 12px;\n    line-height: 20px; }\n  .ag-theme-alpine .ag-chart-mini-thumbnail {\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff); }\n  .ag-theme-alpine .ag-chart-settings-nav-bar {\n    border-top: solid 1px;\n    border-top-color: #dde2eb;\n    border-top-color: var(--ag-secondary-border-color, #dde2eb); }\n  .ag-theme-alpine .ag-ltr .ag-group-title-bar-icon {\n    margin-right: 6px; }\n  .ag-theme-alpine .ag-rtl .ag-group-title-bar-icon {\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-charts-format-top-level-group-toolbar {\n    margin-top: 6px; }\n    .ag-theme-alpine .ag-ltr .ag-charts-format-top-level-group-toolbar {\n      padding-left: 20px; }\n    .ag-theme-alpine .ag-rtl .ag-charts-format-top-level-group-toolbar {\n      padding-right: 20px; }\n  .ag-theme-alpine .ag-charts-format-sub-level-group {\n    border-left: dashed 1px;\n    border-left-color: #babfc7;\n    border-left-color: var(--ag-border-color, #babfc7);\n    padding-left: 6px;\n    margin-bottom: 12px; }\n  .ag-theme-alpine .ag-charts-format-sub-level-group-title-bar {\n    padding-top: 0;\n    padding-bottom: 0;\n    background: none;\n    font-weight: 700; }\n  .ag-theme-alpine .ag-charts-format-sub-level-group-container {\n    padding-bottom: 0; }\n  .ag-theme-alpine .ag-charts-format-sub-level-group-item:last-child {\n    margin-bottom: 0; }\n  .ag-theme-alpine .ag-dnd-ghost {\n    font-size: 15px;\n    font-weight: 700; }\n  .ag-theme-alpine .ag-side-buttons {\n    width: 30px; }\n  .ag-theme-alpine .ag-standard-button {\n    -moz-appearance: none;\n         appearance: none;\n    -webkit-appearance: none;\n    border-radius: 3px;\n    border: 1px solid;\n    border-color: #2196f3;\n    border-color: var(--ag-alpine-active-color, #2196f3);\n    color: #2196f3;\n    color: var(--ag-alpine-active-color, #2196f3);\n    background-color: #fff;\n    background-color: var(--ag-background-color, #fff);\n    font-weight: 600;\n    padding: 6px 12px; }\n    .ag-theme-alpine .ag-standard-button:hover {\n      border-color: #2196f3;\n      border-color: var(--ag-alpine-active-color, #2196f3);\n      background-color: var(--ag-row-hover-color); }\n    .ag-theme-alpine .ag-standard-button:active {\n      border-color: #2196f3;\n      border-color: var(--ag-alpine-active-color, #2196f3);\n      background-color: #2196f3;\n      background-color: var(--ag-alpine-active-color, #2196f3);\n      color: #fff;\n      color: var(--ag-background-color, #fff); }\n    .ag-theme-alpine .ag-standard-button:disabled {\n      color: rgba(24, 29, 31, 0.5);\n      color: var(--ag-disabled-foreground-color, rgba(24, 29, 31, 0.5));\n      background-color: #f1f2f4;\n      background-color: var(--ag-input-disabled-background-color, #f1f2f4);\n      border-color: rgba(186, 191, 199, 0.3);\n      border-color: var(--ag-input-disabled-border-color, rgba(186, 191, 199, 0.3)); }\n  .ag-theme-alpine .ag-menu-header {\n    min-width: 240px; }\n  .ag-theme-alpine .ag-column-drop-vertical {\n    min-height: 75px;\n    max-height: 175px; }\n  .ag-theme-alpine .ag-tool-panel-wrapper {\n    width: 250px; }\n  .ag-theme-alpine .ag-column-drop-vertical-title-bar {\n    padding: 12px;\n    padding-bottom: 0px; }\n  .ag-theme-alpine .ag-column-drop-vertical-empty-message {\n    display: flex;\n    align-items: center;\n    border: dashed 1px;\n    border-color: #babfc7;\n    border-color: var(--ag-border-color, #babfc7);\n    margin: 12px;\n    padding: 12px; }\n  .ag-theme-alpine .ag-column-drop-empty-message {\n    color: #181d1f;\n    color: var(--ag-foreground-color, #181d1f);\n    opacity: 0.75; }\n  .ag-theme-alpine .ag-status-bar {\n    font-weight: normal; }\n  .ag-theme-alpine .ag-status-name-value-value {\n    font-weight: 700; }\n  .ag-theme-alpine .ag-paging-number, .ag-theme-alpine .ag-paging-row-summary-panel-number {\n    font-weight: 700; }\n  .ag-theme-alpine .ag-column-drop-cell-button {\n    opacity: 0.5; }\n    .ag-theme-alpine .ag-column-drop-cell-button:hover {\n      opacity: 0.75; }\n  .ag-theme-alpine .ag-header-cell-menu-button:hover,\n  .ag-theme-alpine .ag-side-button-button:hover,\n  .ag-theme-alpine .ag-tab:hover,\n  .ag-theme-alpine .ag-panel-title-bar-button:hover,\n  .ag-theme-alpine .ag-header-expand-icon:hover,\n  .ag-theme-alpine .ag-column-group-icons:hover,\n  .ag-theme-alpine .ag-group-expanded .ag-icon:hover,\n  .ag-theme-alpine .ag-group-contracted .ag-icon:hover,\n  .ag-theme-alpine .ag-chart-settings-prev:hover,\n  .ag-theme-alpine .ag-chart-settings-next:hover,\n  .ag-theme-alpine .ag-group-title-bar-icon:hover,\n  .ag-theme-alpine .ag-column-select-header-icon:hover,\n  .ag-theme-alpine .ag-floating-filter-button-button:hover,\n  .ag-theme-alpine .ag-filter-toolpanel-expand:hover,\n  .ag-theme-alpine .ag-chart-menu-icon:hover {\n    color: #2196f3;\n    color: var(--ag-alpine-active-color, #2196f3); }\n  .ag-theme-alpine .ag-chart-settings-card-item.ag-not-selected:hover {\n    opacity: 0.35; }\n  .ag-theme-alpine .ag-ltr .ag-panel-title-bar-button {\n    margin-left: 12px;\n    margin-right: 6px; }\n  .ag-theme-alpine .ag-rtl .ag-panel-title-bar-button {\n    margin-right: 12px;\n    margin-left: 6px; }\n  .ag-theme-alpine .ag-filter-toolpanel-group-container {\n    padding-left: 6px; }\n  .ag-theme-alpine .ag-filter-toolpanel-instance-filter {\n    border: none;\n    background-color: #f8f8f8;\n    background-color: var(--ag-control-panel-background-color, #f8f8f8);\n    border-left: dashed 1px;\n    border-left-color: #babfc7;\n    border-left-color: var(--ag-border-color, #babfc7);\n    margin-left: 13px;\n    padding-left: 8px;\n    margin-right: 12px; }\n  .ag-theme-alpine .ag-set-filter-list {\n    padding-top: 3px;\n    padding-bottom: 3px; }\n  .ag-theme-alpine .ag-overlay-no-rows-wrapper.ag-layout-auto-height {\n    padding-top: 60px; }\n  .ag-theme-alpine .ag-date-time-list-page-entry-is-current {\n    background-color: #2196f3;\n    background-color: var(--ag-alpine-active-color, #2196f3); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap);"]);
// Module
exports.push([module.i, "body {\n  font-family: 'Roboto', sans-serif;\n}\n\nbody {\n  position: relative;\n  min-height: 100vh;\n  /* background: rgb(82, 244, 246); */\n  /* background: radial-gradient(circle, rgba(82, 244, 246, 1) 39%, rgba(0, 212, 255, 1) 55%, rgba(158, 160, 214, 1) 97%); */\n  background: blueviolet;\n}\n\n.ag-react-container {\n  height: 100%;\n}\n\ninput {}\n\n.to-do-input {\n  border: none;\n  background-image: none;\n  background-color: transparent;\n  box-shadow: none;\n  outline: none;\n  background: #3B465C;\n  color: #ccc;\n  height: 60px;\n  flex-grow: 1;\n  padding: 0 10px;\n  font-size: 20px;\n}\n\n.to-do-input::placeholder {\n  color: #ddd;\n}\n\nbutton[type=\"submit\"] {\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  background: rgb(10, 209, 209);\n  width: 60px;\n  color: white;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.completed-icon {\n  display: block;\n  margin: 10px 0;\n  font-size: 22px;\n  color: limegreen;\n  cursor: pointer;\n}\n\n.uncompleted-icon {\n  display: block;\n  margin: 10px 0;\n  font-size: 22px;\n  color: lightslategray;\n  cursor: pointer;\n}\n\n.delete-icon {\n  display: block;\n  margin: 10px 0;\n  font-size: 20px;\n  color: grey;\n  cursor: pointer;\n}\n\n.completed-icon:hover, .uncompleted-icon:hover {\n  opacity: 0.7;\n}\n\n.MuiInput-underline:before {\n  border-bottom: none !important;\n}\n\n.todowrapper {\n  cursor: pointer;\n}\n\n.ag-cell-value, .ag-cell-wrapper {\n  width: 100%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body {\n  position: relative;\n  min-height: 100vh;\n  background: rgb(82, 244, 246);\n  background: radial-gradient(circle, rgba(82, 244, 246, 1) 39%, rgba(0, 212, 255, 1) 55%, rgba(158, 160, 214, 1) 97%);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ag-grid-react */ "./node_modules/ag-grid-react/main.js");
/* harmony import */ var ag_grid_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ag_grid_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ag-grid-enterprise */ "./node_modules/ag-grid-enterprise/dist/ag-grid-enterprise.cjs.js");
/* harmony import */ var ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ag_grid_enterprise__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");
/* harmony import */ var normalize_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(normalize_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @date-io/date-fns */ "./node_modules/@date-io/date-fns/build/index.esm.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var _material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/pickers */ "./node_modules/@material-ui/pickers/esm/index.js");
var _jsxFileName = "/Users/ahmedgadir/GitHub/renderers-as-editors/src/App.js";


 // import 'ag-grid-community/dist/styles/ag-grid.css';
// import 'ag-grid-community/dist/styles/ag-theme-alpine.css';







 // tooltip for the dates saying you have X days remaining 

class DateRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  //  forwardRef((props, ref) => {
  //   const [selectedDate, setSelectedDate] = useState(null);
  //   function handleDateChange(d) {
  //     if (d) {
  //       d.setHours(0, 0, 0, 0);
  //     }
  //     setSelectedDate(d);
  //   }
  //   useImperativeHandle(ref, () => {
  //     return {
  //       getValue: () => {
  //         let dateString = null;
  //         if (selectedDate) {
  //           dateString = format(selectedDate, 'dd/MM/yyyy');
  //         }
  //         return dateString;
  //       },
  //       isCancelAfterEnd: () => {
  //         return !selectedDate;
  //       },
  //       afterGuiAttached: () => {
  //         if (!props.value) {
  //           return;
  //         }
  //         const [_, day, month, year] = props.value.match(/(\d{2})\/(\d{2})\/(\d{4})/);
  //         let selectedDate = new Date(year, month - 1, day);
  //         setSelectedDate(selectedDate);
  //       }
  //     };
  //   });
  constructor(props) {
    super(props);
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["MuiPickersUtilsProvider"], {
      utils: _date_io_date_fns__WEBPACK_IMPORTED_MODULE_6__["default"],
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_pickers__WEBPACK_IMPORTED_MODULE_8__["KeyboardDatePicker"], {
      style: {
        width: '100%',
        margin: '10px 0',
        padding: '6px 10px'
      },
      margin: "normal",
      id: "date-picker-dialog",
      format: "dd/MM/yyyy" // value={selectedDate}
      // onChange={handleDateChange}
      ,
      value: new Date(),
      variant: "inline",
      disableToolbar: true // placeholder={'Enter ' + props.column.colId}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }
    }));
  }

} // })


class ToDoRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    // console.log('[ToDoRenderer] Constructor')
    super(props);

    this.componentDidMount = () => {
      this.setState({
        editingVal: this.props.value
      });
    };

    this.destroy = () => {};

    this.toggleEdit = () => {
      console.log(this.props.getCurrentlyEditingId());

      if (this.props.getCurrentlyEditingId() !== null) {
        alert('youre already editing');
        return;
      }

      this.setState(prevState => ({
        editing: !prevState.editing
      }), () => {
        console.log('letting grid know', this.state.editing, this.props.data.id);
        this.props.letGridKnow(this.state.editing ? this.props.data.id : null);
      });
    };

    this.finishEdit = bool => {
      if (bool) {
        this.props.node.setDataValue(this.props.column.colId, this.state.editingVal);
      }

      this.setState({
        editing: false,
        editingVal: this.props.value
      });
      this.props.letGridKnow(null);
    };

    this.state = {
      editing: false,
      editingVal: null
    };
  }

  render() {
    let component = null;

    if (this.state.editing) {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 9
        }
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: this.state.editingVal,
        onChange: e => this.setState({
          editingVal: e.target.value
        }),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 11
        }
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.finishEdit(true),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 11
        }
      }, "Save"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: () => this.finishEdit(false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 11
        }
      }, "Cancel"));
    } else {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          textDecoration: this.props.data.completed ? 'line-through' : 'none' // color: this.props.data.completed ? 'darkgrey' : 'black'

        },
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 19
        }
      }, this.props.value);
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onDoubleClick: this.toggleEdit,
      className: "todowrapper",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 157,
        columnNumber: 7
      }
    }, component);
  }

}

class CompletedRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.setState({
        completed: this.props.value
      });
    };

    this.setCompleted = bool => {
      this.setState({
        completed: bool
      }, () => {
        this.props.node.setDataValue(this.props.column.colId, bool);
        this.props.api.redrawRows({
          rowNodes: [this.props.node],
          force: true
        });
      });
    };

    this.deleteToDo = () => {
      if (window.confirm('Are you sure youd like to delete this row?')) {
        this.props.deleteToDo(this.props.node.id);
      }
    };

    this.state = {
      completed: null
    };
  }

  render() {
    let component;

    if (this.state.completed) {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "completed-icon",
        onClick: () => this.setCompleted(false),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 19
        }
      }, "\u2714");
    } else {
      component = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "uncompleted-icon",
        onClick: () => this.setCompleted(true),
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194,
          columnNumber: 19
        }
      }, "\u2714");
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, component);
  }

}

class DeleteRenderer extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {};

    this.deleteToDo = () => {
      if (window.confirm('Are you sure youd like to delete this row?')) {
        this.props.deleteToDo(this.props.node.id);
      }
    };
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "delete-icon",
      onClick: this.deleteToDo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 7
      }
    }, "\u2A09");
  }

}

class App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    this.componentDidMount = () => {
      this.inputRef.current.focus();
    };

    this.addToDo = () => {
      console.log('add to do');

      if (!this.state.inputVal) {
        return;
      }

      let rowData = this.state.rowData.map(row => ({ ...row
      }));
      console.log('adding a row with id', this.state.idSeq);
      rowData.push({
        description: this.state.inputVal,
        id: this.state.idSeq,
        date: '',
        completed: false
      });
      this.setState(prevState => ({
        rowData,
        inputVal: '',
        idSeq: prevState.idSeq + 1
      }), () => {
        console.log('idSeq is now', this.state.idSeq);
      });
    };

    this.deleteToDo = id => {
      let rowData = this.state.rowData.filter(row => row.id !== id);
      this.setState({
        rowData
      });
    };

    this.state = {
      inputVal: '',
      idSeq: 1,
      columnDefs: [{
        headerName: 'Description',
        field: 'description',
        rowDrag: true,
        suppressMenu: true,
        flex: 3,
        cellRenderer: 'toDoRenderer',
        cellRendererParams: {
          letGridKnow: id => {
            console.log('letGridKnow', id);
            this.setState({
              currentlyEditingId: id
            }, () => {
              console.log('this.state.currentlyEditingId', this.state.currentlyEditingId);
            });
          },
          getCurrentlyEditingId: () => {
            console.log('getCurrentlyEditingId invoked');
            return this.state.currentlyEditingId;
          }
        }
      }, {
        headerName: 'Due Date',
        field: 'date',
        // hide: true,
        suppressMenu: true,
        width: 180,
        cellRenderer: 'dateRenderer'
      }, {
        headerName: 'Completed',
        field: 'completed',
        suppressMenu: true,
        width: 60,
        cellRenderer: 'completedRenderer'
      }, {
        headerName: 'Delete',
        cellRenderer: 'deleteRenderer',
        hide: true,
        width: 45,
        cellRendererParams: {
          deleteToDo: id => this.deleteToDo(id)
        }
      }],
      rowData: [{
        description: 'Hello World!',
        id: 0,
        date: '11/07/20',
        completed: false
      } // { description: 'World Hello!', id: 999, date: '23/04/20', completed: true },
      // { description: 'Hello! Sudan', id: 987, date: '19/11/20', completed: true },
      // { description: 'Goodbye Latin America Hello!', id: 599, date: '01/08/20', completed: false },
      // { description: 'Buy Coca-Cola', id: 666, date: '12/03/20', completed: true },
      ],
      frameworkComponents: {
        toDoRenderer: ToDoRenderer,
        dateRenderer: DateRenderer,
        completedRenderer: CompletedRenderer,
        deleteRenderer: DeleteRenderer
      },
      currentlyEditingId: null
    };
    this.inputRef = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
  }

  render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        width: 600,
        position: 'absolute',
        left: '50%',
        top: '30vh',
        transform: 'translateX(-50%)'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 7
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      style: {
        display: 'flex'
      },
      onSubmit: e => e.preventDefault(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      ref: this.inputRef,
      className: "to-do-input",
      value: this.state.inputVal,
      onChange: e => this.setState({
        inputVal: e.target.value
      }),
      placeholder: "Enter Task...",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 11
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit",
      onClick: this.addToDo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 11
      }
    }, "+")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ag-theme-alpine",
      style: {
        height: '100%',
        boxShadow: ''
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 9
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ag_grid_react__WEBPACK_IMPORTED_MODULE_2__["AgGridReact"], {
      columnDefs: this.state.columnDefs,
      rowData: this.state.rowData,
      frameworkComponents: this.state.frameworkComponents,
      immutableData: true,
      getRowNodeId: data => {
        console.log('getting id for ', data);
        return data.id;
      },
      domLayout: "autoHeight",
      headerHeight: 0,
      rowHeight: 65,
      getRowStyle: params => {
        if (params.node.data.completed) {
          return {
            background: 'lightgreen'
          };
        }
      },
      rowDragManaged: true,
      animateRows: true // sideBar={{
      //   toolPanels: [{
      //     id: 'columns',
      //     labelDefault: '',
      //     labelKey: 'columns',
      //     iconKey: 'columns',
      //     toolPanel: 'agColumnsToolPanel',
      //     toolPanelParams: {
      //       suppressRowGroups: true,
      //       suppressValues: true,
      //       suppressPivotMode: true,
      //       suppressColumnFilter: true
      //     }
      //   }]
      // }}
      ,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 11
      }
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: __webpack_require__(/*! ./ag-grid-logo.png */ "./src/ag-grid-logo.png"),
      style: {
        width: 200,
        margin: '40px auto 0',
        display: 'block'
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 384,
        columnNumber: 9
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-5-1!../node_modules/postcss-loader/src??postcss!../node_modules/resolve-url-loader??ref--6-oneOf-5-3!../node_modules/sass-loader/dist/cjs.js??ref--6-oneOf-5-4!./App.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/resolve-url-loader/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/App.scss");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/ag-grid-logo.png":
/*!******************************!*\
  !*** ./src/ag-grid-logo.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/ag-grid-logo.6dff605e.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css", function() {
		var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _serviceWorker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./serviceWorker */ "./src/serviceWorker.js");
var _jsxFileName = "/Users/ahmedgadir/GitHub/renderers-as-editors/src/index.js";





react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 3
  }
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }
})), document.getElementById('root')); // If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

_serviceWorker__WEBPACK_IMPORTED_MODULE_4__["unregister"]();

/***/ }),

/***/ "./src/serviceWorker.js":
/*!******************************!*\
  !*** ./src/serviceWorker.js ***!
  \******************************/
/*! exports provided: register, unregister */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unregister", function() { return unregister; });
// This optional code is used to register a service worker.
// register() is not called by default.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on subsequent visits to a page, after all the
// existing tabs open on the page have been closed, since previously cached
// resources are updated in the background.
// To learn more about the benefits of this model and instructions on how to
// opt-in, read https://bit.ly/CRA-PWA
const isLocalhost = Boolean(window.location.hostname === 'localhost' || // [::1] is the IPv6 localhost address.
window.location.hostname === '[::1]' || // 127.0.0.0/8 are considered localhost for IPv4.
window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register(config) {
  if (false) {}
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker.register(swUrl).then(registration => {
    registration.onupdatefound = () => {
      const installingWorker = registration.installing;

      if (installingWorker == null) {
        return;
      }

      installingWorker.onstatechange = () => {
        if (installingWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // At this point, the updated precached content has been fetched,
            // but the previous service worker will still serve the older
            // content until all client tabs are closed.
            console.log('New content is available and will be used when all ' + 'tabs for this page are closed. See https://bit.ly/CRA-PWA.'); // Execute callback

            if (config && config.onUpdate) {
              config.onUpdate(registration);
            }
          } else {
            // At this point, everything has been precached.
            // It's the perfect time to display a
            // "Content is cached for offline use." message.
            console.log('Content is cached for offline use.'); // Execute callback

            if (config && config.onSuccess) {
              config.onSuccess(registration);
            }
          }
        }
      };
    };
  }).catch(error => {
    console.error('Error during service worker registration:', error);
  });
}

function checkValidServiceWorker(swUrl, config) {
  // Check if the service worker can be found. If it can't reload the page.
  fetch(swUrl, {
    headers: {
      'Service-Worker': 'script'
    }
  }).then(response => {
    // Ensure service worker exists, and that we really are getting a JS file.
    const contentType = response.headers.get('content-type');

    if (response.status === 404 || contentType != null && contentType.indexOf('javascript') === -1) {
      // No service worker found. Probably a different app. Reload the page.
      navigator.serviceWorker.ready.then(registration => {
        registration.unregister().then(() => {
          window.location.reload();
        });
      });
    } else {
      // Service worker found. Proceed as normal.
      registerValidSW(swUrl, config);
    }
  }).catch(() => {
    console.log('No internet connection found. App is running in offline mode.');
  });
}

function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(registration => {
      registration.unregister();
    }).catch(error => {
      console.error(error.message);
    });
  }
}

/***/ }),

/***/ 1:
/*!**************************************************************************************************************!*\
  !*** multi (webpack)/hot/dev-server.js ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/ahmedgadir/GitHub/renderers-as-editors/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/ahmedgadir/GitHub/renderers-as-editors/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /Users/ahmedgadir/GitHub/renderers-as-editors/src/index.js */"./src/index.js");


/***/ })

},[[1,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map