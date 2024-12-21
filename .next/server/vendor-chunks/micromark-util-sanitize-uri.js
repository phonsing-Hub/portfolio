"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/micromark-util-sanitize-uri";
exports.ids = ["vendor-chunks/micromark-util-sanitize-uri"];
exports.modules = {

/***/ "(rsc)/./node_modules/micromark-util-sanitize-uri/dev/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/micromark-util-sanitize-uri/dev/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   normalizeUri: () => (/* binding */ normalizeUri),\n/* harmony export */   sanitizeUri: () => (/* binding */ sanitizeUri)\n/* harmony export */ });\n/* harmony import */ var micromark_util_character__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromark-util-character */ \"(rsc)/./node_modules/micromark-util-character/dev/index.js\");\n/* harmony import */ var micromark_util_encode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromark-util-encode */ \"(rsc)/./node_modules/micromark-util-encode/index.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/codes.js\");\n/* harmony import */ var micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! micromark-util-symbol */ \"(rsc)/./node_modules/micromark-util-symbol/lib/values.js\");\n\n\n\n\n/**\n * Make a value safe for injection as a URL.\n *\n * This encodes unsafe characters with percent-encoding and skips already\n * encoded sequences (see `normalizeUri`).\n * Further unsafe characters are encoded as character references (see\n * `micromark-util-encode`).\n *\n * A regex of allowed protocols can be given, in which case the URL is\n * sanitized.\n * For example, `/^(https?|ircs?|mailto|xmpp)$/i` can be used for `a[href]`, or\n * `/^https?$/i` for `img[src]` (this is what `github.com` allows).\n * If the URL includes an unknown protocol (one not matched by `protocol`, such\n * as a dangerous example, `javascript:`), the value is ignored.\n *\n * @param {string | null | undefined} url\n *   URI to sanitize.\n * @param {RegExp | null | undefined} [protocol]\n *   Allowed protocols.\n * @returns {string}\n *   Sanitized URI.\n */\nfunction sanitizeUri(url, protocol) {\n  const value = (0,micromark_util_encode__WEBPACK_IMPORTED_MODULE_0__.encode)(normalizeUri(url || ''))\n\n  if (!protocol) {\n    return value\n  }\n\n  const colon = value.indexOf(':')\n  const questionMark = value.indexOf('?')\n  const numberSign = value.indexOf('#')\n  const slash = value.indexOf('/')\n\n  if (\n    // If there is no protocol, it’s relative.\n    colon < 0 ||\n    // If the first colon is after a `?`, `#`, or `/`, it’s not a protocol.\n    (slash > -1 && colon > slash) ||\n    (questionMark > -1 && colon > questionMark) ||\n    (numberSign > -1 && colon > numberSign) ||\n    // It is a protocol, it should be allowed.\n    protocol.test(value.slice(0, colon))\n  ) {\n    return value\n  }\n\n  return ''\n}\n\n/**\n * Normalize a URL.\n *\n * Encode unsafe characters with percent-encoding, skipping already encoded\n * sequences.\n *\n * @param {string} value\n *   URI to normalize.\n * @returns {string}\n *   Normalized URI.\n */\nfunction normalizeUri(value) {\n  /** @type {Array<string>} */\n  const result = []\n  let index = -1\n  let start = 0\n  let skip = 0\n\n  while (++index < value.length) {\n    const code = value.charCodeAt(index)\n    /** @type {string} */\n    let replace = ''\n\n    // A correct percent encoded value.\n    if (\n      code === micromark_util_symbol__WEBPACK_IMPORTED_MODULE_1__.codes.percentSign &&\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.asciiAlphanumeric)(value.charCodeAt(index + 1)) &&\n      (0,micromark_util_character__WEBPACK_IMPORTED_MODULE_2__.asciiAlphanumeric)(value.charCodeAt(index + 2))\n    ) {\n      skip = 2\n    }\n    // ASCII.\n    else if (code < 128) {\n      if (!/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(code))) {\n        replace = String.fromCharCode(code)\n      }\n    }\n    // Astral.\n    else if (code > 55_295 && code < 57_344) {\n      const next = value.charCodeAt(index + 1)\n\n      // A correct surrogate pair.\n      if (code < 56_320 && next > 56_319 && next < 57_344) {\n        replace = String.fromCharCode(code, next)\n        skip = 1\n      }\n      // Lone surrogate.\n      else {\n        replace = micromark_util_symbol__WEBPACK_IMPORTED_MODULE_3__.values.replacementCharacter\n      }\n    }\n    // Unicode.\n    else {\n      replace = String.fromCharCode(code)\n    }\n\n    if (replace) {\n      result.push(value.slice(start, index), encodeURIComponent(replace))\n      start = index + skip + 1\n      replace = ''\n    }\n\n    if (skip) {\n      index += skip\n      skip = 0\n    }\n  }\n\n  return result.join('') + value.slice(start)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbWljcm9tYXJrLXV0aWwtc2FuaXRpemUtdXJpL2Rldi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEQ7QUFDZDtBQUNPOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLDJCQUEyQjtBQUN0QztBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDTztBQUNQLGdCQUFnQiw2REFBTTs7QUFFdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUCxhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsZUFBZSx3REFBSztBQUNwQixNQUFNLDJFQUFpQjtBQUN2QixNQUFNLDJFQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix5REFBTTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3Jmb2xpby8uL25vZGVfbW9kdWxlcy9taWNyb21hcmstdXRpbC1zYW5pdGl6ZS11cmkvZGV2L2luZGV4LmpzPzM2NTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHthc2NpaUFscGhhbnVtZXJpY30gZnJvbSAnbWljcm9tYXJrLXV0aWwtY2hhcmFjdGVyJ1xuaW1wb3J0IHtlbmNvZGV9IGZyb20gJ21pY3JvbWFyay11dGlsLWVuY29kZSdcbmltcG9ydCB7Y29kZXMsIHZhbHVlc30gZnJvbSAnbWljcm9tYXJrLXV0aWwtc3ltYm9sJ1xuXG4vKipcbiAqIE1ha2UgYSB2YWx1ZSBzYWZlIGZvciBpbmplY3Rpb24gYXMgYSBVUkwuXG4gKlxuICogVGhpcyBlbmNvZGVzIHVuc2FmZSBjaGFyYWN0ZXJzIHdpdGggcGVyY2VudC1lbmNvZGluZyBhbmQgc2tpcHMgYWxyZWFkeVxuICogZW5jb2RlZCBzZXF1ZW5jZXMgKHNlZSBgbm9ybWFsaXplVXJpYCkuXG4gKiBGdXJ0aGVyIHVuc2FmZSBjaGFyYWN0ZXJzIGFyZSBlbmNvZGVkIGFzIGNoYXJhY3RlciByZWZlcmVuY2VzIChzZWVcbiAqIGBtaWNyb21hcmstdXRpbC1lbmNvZGVgKS5cbiAqXG4gKiBBIHJlZ2V4IG9mIGFsbG93ZWQgcHJvdG9jb2xzIGNhbiBiZSBnaXZlbiwgaW4gd2hpY2ggY2FzZSB0aGUgVVJMIGlzXG4gKiBzYW5pdGl6ZWQuXG4gKiBGb3IgZXhhbXBsZSwgYC9eKGh0dHBzP3xpcmNzP3xtYWlsdG98eG1wcCkkL2lgIGNhbiBiZSB1c2VkIGZvciBgYVtocmVmXWAsIG9yXG4gKiBgL15odHRwcz8kL2lgIGZvciBgaW1nW3NyY11gICh0aGlzIGlzIHdoYXQgYGdpdGh1Yi5jb21gIGFsbG93cykuXG4gKiBJZiB0aGUgVVJMIGluY2x1ZGVzIGFuIHVua25vd24gcHJvdG9jb2wgKG9uZSBub3QgbWF0Y2hlZCBieSBgcHJvdG9jb2xgLCBzdWNoXG4gKiBhcyBhIGRhbmdlcm91cyBleGFtcGxlLCBgamF2YXNjcmlwdDpgKSwgdGhlIHZhbHVlIGlzIGlnbm9yZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkfSB1cmxcbiAqICAgVVJJIHRvIHNhbml0aXplLlxuICogQHBhcmFtIHtSZWdFeHAgfCBudWxsIHwgdW5kZWZpbmVkfSBbcHJvdG9jb2xdXG4gKiAgIEFsbG93ZWQgcHJvdG9jb2xzLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgU2FuaXRpemVkIFVSSS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplVXJpKHVybCwgcHJvdG9jb2wpIHtcbiAgY29uc3QgdmFsdWUgPSBlbmNvZGUobm9ybWFsaXplVXJpKHVybCB8fCAnJykpXG5cbiAgaWYgKCFwcm90b2NvbCkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgY29uc3QgY29sb24gPSB2YWx1ZS5pbmRleE9mKCc6JylcbiAgY29uc3QgcXVlc3Rpb25NYXJrID0gdmFsdWUuaW5kZXhPZignPycpXG4gIGNvbnN0IG51bWJlclNpZ24gPSB2YWx1ZS5pbmRleE9mKCcjJylcbiAgY29uc3Qgc2xhc2ggPSB2YWx1ZS5pbmRleE9mKCcvJylcblxuICBpZiAoXG4gICAgLy8gSWYgdGhlcmUgaXMgbm8gcHJvdG9jb2wsIGl04oCZcyByZWxhdGl2ZS5cbiAgICBjb2xvbiA8IDAgfHxcbiAgICAvLyBJZiB0aGUgZmlyc3QgY29sb24gaXMgYWZ0ZXIgYSBgP2AsIGAjYCwgb3IgYC9gLCBpdOKAmXMgbm90IGEgcHJvdG9jb2wuXG4gICAgKHNsYXNoID4gLTEgJiYgY29sb24gPiBzbGFzaCkgfHxcbiAgICAocXVlc3Rpb25NYXJrID4gLTEgJiYgY29sb24gPiBxdWVzdGlvbk1hcmspIHx8XG4gICAgKG51bWJlclNpZ24gPiAtMSAmJiBjb2xvbiA+IG51bWJlclNpZ24pIHx8XG4gICAgLy8gSXQgaXMgYSBwcm90b2NvbCwgaXQgc2hvdWxkIGJlIGFsbG93ZWQuXG4gICAgcHJvdG9jb2wudGVzdCh2YWx1ZS5zbGljZSgwLCBjb2xvbikpXG4gICkge1xuICAgIHJldHVybiB2YWx1ZVxuICB9XG5cbiAgcmV0dXJuICcnXG59XG5cbi8qKlxuICogTm9ybWFsaXplIGEgVVJMLlxuICpcbiAqIEVuY29kZSB1bnNhZmUgY2hhcmFjdGVycyB3aXRoIHBlcmNlbnQtZW5jb2RpbmcsIHNraXBwaW5nIGFscmVhZHkgZW5jb2RlZFxuICogc2VxdWVuY2VzLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZVxuICogICBVUkkgdG8gbm9ybWFsaXplLlxuICogQHJldHVybnMge3N0cmluZ31cbiAqICAgTm9ybWFsaXplZCBVUkkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVVcmkodmFsdWUpIHtcbiAgLyoqIEB0eXBlIHtBcnJheTxzdHJpbmc+fSAqL1xuICBjb25zdCByZXN1bHQgPSBbXVxuICBsZXQgaW5kZXggPSAtMVxuICBsZXQgc3RhcnQgPSAwXG4gIGxldCBza2lwID0gMFxuXG4gIHdoaWxlICgrK2luZGV4IDwgdmFsdWUubGVuZ3RoKSB7XG4gICAgY29uc3QgY29kZSA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXgpXG4gICAgLyoqIEB0eXBlIHtzdHJpbmd9ICovXG4gICAgbGV0IHJlcGxhY2UgPSAnJ1xuXG4gICAgLy8gQSBjb3JyZWN0IHBlcmNlbnQgZW5jb2RlZCB2YWx1ZS5cbiAgICBpZiAoXG4gICAgICBjb2RlID09PSBjb2Rlcy5wZXJjZW50U2lnbiAmJlxuICAgICAgYXNjaWlBbHBoYW51bWVyaWModmFsdWUuY2hhckNvZGVBdChpbmRleCArIDEpKSAmJlxuICAgICAgYXNjaWlBbHBoYW51bWVyaWModmFsdWUuY2hhckNvZGVBdChpbmRleCArIDIpKVxuICAgICkge1xuICAgICAgc2tpcCA9IDJcbiAgICB9XG4gICAgLy8gQVNDSUkuXG4gICAgZWxzZSBpZiAoY29kZSA8IDEyOCkge1xuICAgICAgaWYgKCEvWyEjJCYtOz0/LVpfYS16fl0vLnRlc3QoU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKSkpIHtcbiAgICAgICAgcmVwbGFjZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gQXN0cmFsLlxuICAgIGVsc2UgaWYgKGNvZGUgPiA1NV8yOTUgJiYgY29kZSA8IDU3XzM0NCkge1xuICAgICAgY29uc3QgbmV4dCA9IHZhbHVlLmNoYXJDb2RlQXQoaW5kZXggKyAxKVxuXG4gICAgICAvLyBBIGNvcnJlY3Qgc3Vycm9nYXRlIHBhaXIuXG4gICAgICBpZiAoY29kZSA8IDU2XzMyMCAmJiBuZXh0ID4gNTZfMzE5ICYmIG5leHQgPCA1N18zNDQpIHtcbiAgICAgICAgcmVwbGFjZSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZSwgbmV4dClcbiAgICAgICAgc2tpcCA9IDFcbiAgICAgIH1cbiAgICAgIC8vIExvbmUgc3Vycm9nYXRlLlxuICAgICAgZWxzZSB7XG4gICAgICAgIHJlcGxhY2UgPSB2YWx1ZXMucmVwbGFjZW1lbnRDaGFyYWN0ZXJcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVW5pY29kZS5cbiAgICBlbHNlIHtcbiAgICAgIHJlcGxhY2UgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgfVxuXG4gICAgaWYgKHJlcGxhY2UpIHtcbiAgICAgIHJlc3VsdC5wdXNoKHZhbHVlLnNsaWNlKHN0YXJ0LCBpbmRleCksIGVuY29kZVVSSUNvbXBvbmVudChyZXBsYWNlKSlcbiAgICAgIHN0YXJ0ID0gaW5kZXggKyBza2lwICsgMVxuICAgICAgcmVwbGFjZSA9ICcnXG4gICAgfVxuXG4gICAgaWYgKHNraXApIHtcbiAgICAgIGluZGV4ICs9IHNraXBcbiAgICAgIHNraXAgPSAwXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdC5qb2luKCcnKSArIHZhbHVlLnNsaWNlKHN0YXJ0KVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/micromark-util-sanitize-uri/dev/index.js\n");

/***/ })

};
;