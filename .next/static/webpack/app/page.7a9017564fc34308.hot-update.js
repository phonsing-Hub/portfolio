"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/ui/morphing-text.tsx":
/*!*********************************************!*\
  !*** ./src/components/ui/morphing-text.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/utils */ \"(app-pages-browser)/./src/lib/utils.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\nconst morphTime = 1.5;\nconst cooldownTime = 0.5;\nconst useMorphingText = (texts)=>{\n    _s();\n    const textIndexRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const morphRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const cooldownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(0);\n    const timeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(new Date());\n    const text1Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const text2Ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const setStyles = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((fraction)=>{\n        const [current1, current2] = [\n            text1Ref.current,\n            text2Ref.current\n        ];\n        if (!current1 || !current2) return;\n        current2.style.filter = \"blur(\".concat(Math.min(8 / fraction - 8, 100), \"px)\");\n        current2.style.opacity = \"\".concat(Math.pow(fraction, 0.4) * 100, \"%\");\n        const invertedFraction = 1 - fraction;\n        current1.style.filter = \"blur(\".concat(Math.min(8 / invertedFraction - 8, 100), \"px)\");\n        current1.style.opacity = \"\".concat(Math.pow(invertedFraction, 0.4) * 100, \"%\");\n        current1.textContent = texts[textIndexRef.current % texts.length];\n        current2.textContent = texts[(textIndexRef.current + 1) % texts.length];\n    }, [\n        texts\n    ]);\n    const doMorph = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        morphRef.current -= cooldownRef.current;\n        cooldownRef.current = 0;\n        let fraction = morphRef.current / morphTime;\n        if (fraction > 1) {\n            cooldownRef.current = cooldownTime;\n            fraction = 1;\n        }\n        setStyles(fraction);\n        if (fraction === 1) {\n            textIndexRef.current++;\n        }\n    }, [\n        setStyles\n    ]);\n    const doCooldown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{\n        morphRef.current = 0;\n        const [current1, current2] = [\n            text1Ref.current,\n            text2Ref.current\n        ];\n        if (current1 && current2) {\n            current2.style.filter = \"none\";\n            current2.style.opacity = \"100%\";\n            current1.style.filter = \"none\";\n            current1.style.opacity = \"0%\";\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let animationFrameId;\n        const animate = ()=>{\n            animationFrameId = requestAnimationFrame(animate);\n            const newTime = new Date();\n            const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;\n            timeRef.current = newTime;\n            cooldownRef.current -= dt;\n            if (cooldownRef.current <= 0) doMorph();\n            else doCooldown();\n        };\n        animate();\n        return ()=>{\n            cancelAnimationFrame(animationFrameId);\n        };\n    }, [\n        doMorph,\n        doCooldown\n    ]);\n    return {\n        text1Ref,\n        text2Ref\n    };\n};\n_s(useMorphingText, \"vYov/KX0OjXsrFd041XYAEHxjJI=\");\nconst Texts = (param)=>{\n    let { texts } = param;\n    _s1();\n    const { text1Ref, text2Ref } = useMorphingText(texts);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"absolute inset-x-0 top-0 m-auto inline-block w-full bg-gradient-to-r min-h-40 from-black to-gray-300/80 bg-clip-text\",\n                ref: text1Ref\n            }, void 0, false, {\n                fileName: \"/Users/apl/Documents/GitHub/portfolio/src/components/ui/morphing-text.tsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \"absolute inset-x-0 top-0 m-auto inline-block w-full bg-gradient-to-r bg-clip-text min-h-40\",\n                ref: text2Ref\n            }, void 0, false, {\n                fileName: \"/Users/apl/Documents/GitHub/portfolio/src/components/ui/morphing-text.tsx\",\n                lineNumber: 104,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s1(Texts, \"op+oo1SE4zqMNOmGXVjxgsLCyFw=\", false, function() {\n    return [\n        useMorphingText\n    ];\n});\n_c = Texts;\nconst SvgFilters = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n        id: \"filters\",\n        className: \"hidden\",\n        preserveAspectRatio: \"xMidYMid slice\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"defs\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"filter\", {\n                id: \"threshold\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"feColorMatrix\", {\n                    in: \"SourceGraphic\",\n                    type: \"matrix\",\n                    values: \"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 255 -140\"\n                }, void 0, false, {\n                    fileName: \"/Users/apl/Documents/GitHub/portfolio/src/components/ui/morphing-text.tsx\",\n                    lineNumber: 116,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/apl/Documents/GitHub/portfolio/src/components/ui/morphing-text.tsx\",\n                lineNumber: 115,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/apl/Documents/GitHub/portfolio/src/components/ui/morphing-text.tsx\",\n            lineNumber: 114,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/apl/Documents/GitHub/portfolio/src/components/ui/morphing-text.tsx\",\n        lineNumber: 113,\n        columnNumber: 3\n    }, undefined);\n_c1 = SvgFilters;\nconst MorphingText = (param)=>{\n    let { texts, className } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (0,_lib_utils__WEBPACK_IMPORTED_MODULE_2__.cn)(\"relative mx-auto h-16 w-full max-w-screen-md text-center font-sans text-[40pt] font-bold leading-none [filter:url(#threshold)_blur(0.6px)] md:h-24 lg:text-[4rem]\", className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Texts, {\n                texts: texts\n            }, void 0, false, {\n                fileName: \"/Users/apl/Documents/GitHub/portfolio/src/components/ui/morphing-text.tsx\",\n                lineNumber: 136,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SvgFilters, {}, void 0, false, {\n                fileName: \"/Users/apl/Documents/GitHub/portfolio/src/components/ui/morphing-text.tsx\",\n                lineNumber: 137,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/apl/Documents/GitHub/portfolio/src/components/ui/morphing-text.tsx\",\n        lineNumber: 130,\n        columnNumber: 3\n    }, undefined);\n};\n_c2 = MorphingText;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MorphingText);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Texts\");\n$RefreshReg$(_c1, \"SvgFilters\");\n$RefreshReg$(_c2, \"MorphingText\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3VpL21vcnBoaW5nLXRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFdUQ7QUFFdEI7QUFFakMsTUFBTUksWUFBWTtBQUNsQixNQUFNQyxlQUFlO0FBRXJCLE1BQU1DLGtCQUFrQixDQUFDQzs7SUFDdkIsTUFBTUMsZUFBZU4sNkNBQU1BLENBQUM7SUFDNUIsTUFBTU8sV0FBV1AsNkNBQU1BLENBQUM7SUFDeEIsTUFBTVEsY0FBY1IsNkNBQU1BLENBQUM7SUFDM0IsTUFBTVMsVUFBVVQsNkNBQU1BLENBQUMsSUFBSVU7SUFFM0IsTUFBTUMsV0FBV1gsNkNBQU1BLENBQWtCO0lBQ3pDLE1BQU1ZLFdBQVdaLDZDQUFNQSxDQUFrQjtJQUV6QyxNQUFNYSxZQUFZZixrREFBV0EsQ0FDM0IsQ0FBQ2dCO1FBQ0MsTUFBTSxDQUFDQyxVQUFVQyxTQUFTLEdBQUc7WUFBQ0wsU0FBU00sT0FBTztZQUFFTCxTQUFTSyxPQUFPO1NBQUM7UUFDakUsSUFBSSxDQUFDRixZQUFZLENBQUNDLFVBQVU7UUFFNUJBLFNBQVNFLEtBQUssQ0FBQ0MsTUFBTSxHQUFHLFFBQXdDLE9BQWhDQyxLQUFLQyxHQUFHLENBQUMsSUFBSVAsV0FBVyxHQUFHLE1BQUs7UUFDaEVFLFNBQVNFLEtBQUssQ0FBQ0ksT0FBTyxHQUFHLEdBQWlDLE9BQTlCRixLQUFLRyxHQUFHLENBQUNULFVBQVUsT0FBTyxLQUFJO1FBRTFELE1BQU1VLG1CQUFtQixJQUFJVjtRQUM3QkMsU0FBU0csS0FBSyxDQUFDQyxNQUFNLEdBQUcsUUFBZ0QsT0FBeENDLEtBQUtDLEdBQUcsQ0FBQyxJQUFJRyxtQkFBbUIsR0FBRyxNQUFLO1FBQ3hFVCxTQUFTRyxLQUFLLENBQUNJLE9BQU8sR0FBRyxHQUF5QyxPQUF0Q0YsS0FBS0csR0FBRyxDQUFDQyxrQkFBa0IsT0FBTyxLQUFJO1FBRWxFVCxTQUFTVSxXQUFXLEdBQUdwQixLQUFLLENBQUNDLGFBQWFXLE9BQU8sR0FBR1osTUFBTXFCLE1BQU0sQ0FBQztRQUNqRVYsU0FBU1MsV0FBVyxHQUFHcEIsS0FBSyxDQUFDLENBQUNDLGFBQWFXLE9BQU8sR0FBRyxLQUFLWixNQUFNcUIsTUFBTSxDQUFDO0lBQ3pFLEdBQ0E7UUFBQ3JCO0tBQU07SUFHVCxNQUFNc0IsVUFBVTdCLGtEQUFXQSxDQUFDO1FBQzFCUyxTQUFTVSxPQUFPLElBQUlULFlBQVlTLE9BQU87UUFDdkNULFlBQVlTLE9BQU8sR0FBRztRQUV0QixJQUFJSCxXQUFXUCxTQUFTVSxPQUFPLEdBQUdmO1FBRWxDLElBQUlZLFdBQVcsR0FBRztZQUNoQk4sWUFBWVMsT0FBTyxHQUFHZDtZQUN0QlcsV0FBVztRQUNiO1FBRUFELFVBQVVDO1FBRVYsSUFBSUEsYUFBYSxHQUFHO1lBQ2xCUixhQUFhVyxPQUFPO1FBQ3RCO0lBQ0YsR0FBRztRQUFDSjtLQUFVO0lBRWQsTUFBTWUsYUFBYTlCLGtEQUFXQSxDQUFDO1FBQzdCUyxTQUFTVSxPQUFPLEdBQUc7UUFDbkIsTUFBTSxDQUFDRixVQUFVQyxTQUFTLEdBQUc7WUFBQ0wsU0FBU00sT0FBTztZQUFFTCxTQUFTSyxPQUFPO1NBQUM7UUFDakUsSUFBSUYsWUFBWUMsVUFBVTtZQUN4QkEsU0FBU0UsS0FBSyxDQUFDQyxNQUFNLEdBQUc7WUFDeEJILFNBQVNFLEtBQUssQ0FBQ0ksT0FBTyxHQUFHO1lBQ3pCUCxTQUFTRyxLQUFLLENBQUNDLE1BQU0sR0FBRztZQUN4QkosU0FBU0csS0FBSyxDQUFDSSxPQUFPLEdBQUc7UUFDM0I7SUFDRixHQUFHLEVBQUU7SUFFTHZCLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSThCO1FBRUosTUFBTUMsVUFBVTtZQUNkRCxtQkFBbUJFLHNCQUFzQkQ7WUFFekMsTUFBTUUsVUFBVSxJQUFJdEI7WUFDcEIsTUFBTXVCLEtBQUssQ0FBQ0QsUUFBUUUsT0FBTyxLQUFLekIsUUFBUVEsT0FBTyxDQUFDaUIsT0FBTyxFQUFDLElBQUs7WUFDN0R6QixRQUFRUSxPQUFPLEdBQUdlO1lBRWxCeEIsWUFBWVMsT0FBTyxJQUFJZ0I7WUFFdkIsSUFBSXpCLFlBQVlTLE9BQU8sSUFBSSxHQUFHVTtpQkFDekJDO1FBQ1A7UUFFQUU7UUFDQSxPQUFPO1lBQ0xLLHFCQUFxQk47UUFDdkI7SUFDRixHQUFHO1FBQUNGO1FBQVNDO0tBQVc7SUFFeEIsT0FBTztRQUFFakI7UUFBVUM7SUFBUztBQUM5QjtHQS9FTVI7QUFzRk4sTUFBTWdDLFFBQW9EO1FBQUMsRUFBRS9CLEtBQUssRUFBRTs7SUFDbEUsTUFBTSxFQUFFTSxRQUFRLEVBQUVDLFFBQVEsRUFBRSxHQUFHUixnQkFBZ0JDO0lBQy9DLHFCQUNFOzswQkFDRSw4REFBQ2dDO2dCQUNDQyxXQUFVO2dCQUNWQyxLQUFLNUI7Ozs7OzswQkFFUCw4REFBQzBCO2dCQUNDQyxXQUFVO2dCQUNWQyxLQUFLM0I7Ozs7Ozs7O0FBSWI7SUFkTXdCOztRQUMyQmhDOzs7S0FEM0JnQztBQWdCTixNQUFNSSxhQUF1QixrQkFDM0IsOERBQUNDO1FBQUlDLElBQUc7UUFBVUosV0FBVTtRQUFTSyxxQkFBb0I7a0JBQ3ZELDRFQUFDQztzQkFDQyw0RUFBQ3pCO2dCQUFPdUIsSUFBRzswQkFDVCw0RUFBQ0c7b0JBQ0NDLElBQUc7b0JBQ0hDLE1BQUs7b0JBQ0xDLFFBQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQVBYUjtBQWlCTixNQUFNUyxlQUE0QztRQUFDLEVBQUU1QyxLQUFLLEVBQUVpQyxTQUFTLEVBQUU7eUJBQ3JFLDhEQUFDWTtRQUNDWixXQUFXckMsOENBQUVBLENBQ1gscUtBQ0FxQzs7MEJBR0YsOERBQUNGO2dCQUFNL0IsT0FBT0E7Ozs7OzswQkFDZCw4REFBQ21DOzs7Ozs7Ozs7Ozs7TUFSQ1M7QUFZTiwrREFBZUEsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy91aS9tb3JwaGluZy10ZXh0LnRzeD9lNDdhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IHsgY24gfSBmcm9tIFwiQC9saWIvdXRpbHNcIjtcblxuY29uc3QgbW9ycGhUaW1lID0gMS41O1xuY29uc3QgY29vbGRvd25UaW1lID0gMC41O1xuXG5jb25zdCB1c2VNb3JwaGluZ1RleHQgPSAodGV4dHM6IHN0cmluZ1tdKSA9PiB7XG4gIGNvbnN0IHRleHRJbmRleFJlZiA9IHVzZVJlZigwKTtcbiAgY29uc3QgbW9ycGhSZWYgPSB1c2VSZWYoMCk7XG4gIGNvbnN0IGNvb2xkb3duUmVmID0gdXNlUmVmKDApO1xuICBjb25zdCB0aW1lUmVmID0gdXNlUmVmKG5ldyBEYXRlKCkpO1xuXG4gIGNvbnN0IHRleHQxUmVmID0gdXNlUmVmPEhUTUxTcGFuRWxlbWVudD4obnVsbCk7XG4gIGNvbnN0IHRleHQyUmVmID0gdXNlUmVmPEhUTUxTcGFuRWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3Qgc2V0U3R5bGVzID0gdXNlQ2FsbGJhY2soXG4gICAgKGZyYWN0aW9uOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IFtjdXJyZW50MSwgY3VycmVudDJdID0gW3RleHQxUmVmLmN1cnJlbnQsIHRleHQyUmVmLmN1cnJlbnRdO1xuICAgICAgaWYgKCFjdXJyZW50MSB8fCAhY3VycmVudDIpIHJldHVybjtcblxuICAgICAgY3VycmVudDIuc3R5bGUuZmlsdGVyID0gYGJsdXIoJHtNYXRoLm1pbig4IC8gZnJhY3Rpb24gLSA4LCAxMDApfXB4KWA7XG4gICAgICBjdXJyZW50Mi5zdHlsZS5vcGFjaXR5ID0gYCR7TWF0aC5wb3coZnJhY3Rpb24sIDAuNCkgKiAxMDB9JWA7XG5cbiAgICAgIGNvbnN0IGludmVydGVkRnJhY3Rpb24gPSAxIC0gZnJhY3Rpb247XG4gICAgICBjdXJyZW50MS5zdHlsZS5maWx0ZXIgPSBgYmx1cigke01hdGgubWluKDggLyBpbnZlcnRlZEZyYWN0aW9uIC0gOCwgMTAwKX1weClgO1xuICAgICAgY3VycmVudDEuc3R5bGUub3BhY2l0eSA9IGAke01hdGgucG93KGludmVydGVkRnJhY3Rpb24sIDAuNCkgKiAxMDB9JWA7XG5cbiAgICAgIGN1cnJlbnQxLnRleHRDb250ZW50ID0gdGV4dHNbdGV4dEluZGV4UmVmLmN1cnJlbnQgJSB0ZXh0cy5sZW5ndGhdO1xuICAgICAgY3VycmVudDIudGV4dENvbnRlbnQgPSB0ZXh0c1sodGV4dEluZGV4UmVmLmN1cnJlbnQgKyAxKSAlIHRleHRzLmxlbmd0aF07XG4gICAgfSxcbiAgICBbdGV4dHNdLFxuICApO1xuXG4gIGNvbnN0IGRvTW9ycGggPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgbW9ycGhSZWYuY3VycmVudCAtPSBjb29sZG93blJlZi5jdXJyZW50O1xuICAgIGNvb2xkb3duUmVmLmN1cnJlbnQgPSAwO1xuXG4gICAgbGV0IGZyYWN0aW9uID0gbW9ycGhSZWYuY3VycmVudCAvIG1vcnBoVGltZTtcblxuICAgIGlmIChmcmFjdGlvbiA+IDEpIHtcbiAgICAgIGNvb2xkb3duUmVmLmN1cnJlbnQgPSBjb29sZG93blRpbWU7XG4gICAgICBmcmFjdGlvbiA9IDE7XG4gICAgfVxuXG4gICAgc2V0U3R5bGVzKGZyYWN0aW9uKTtcblxuICAgIGlmIChmcmFjdGlvbiA9PT0gMSkge1xuICAgICAgdGV4dEluZGV4UmVmLmN1cnJlbnQrKztcbiAgICB9XG4gIH0sIFtzZXRTdHlsZXNdKTtcblxuICBjb25zdCBkb0Nvb2xkb3duID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIG1vcnBoUmVmLmN1cnJlbnQgPSAwO1xuICAgIGNvbnN0IFtjdXJyZW50MSwgY3VycmVudDJdID0gW3RleHQxUmVmLmN1cnJlbnQsIHRleHQyUmVmLmN1cnJlbnRdO1xuICAgIGlmIChjdXJyZW50MSAmJiBjdXJyZW50Mikge1xuICAgICAgY3VycmVudDIuc3R5bGUuZmlsdGVyID0gXCJub25lXCI7XG4gICAgICBjdXJyZW50Mi5zdHlsZS5vcGFjaXR5ID0gXCIxMDAlXCI7XG4gICAgICBjdXJyZW50MS5zdHlsZS5maWx0ZXIgPSBcIm5vbmVcIjtcbiAgICAgIGN1cnJlbnQxLnN0eWxlLm9wYWNpdHkgPSBcIjAlXCI7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgYW5pbWF0aW9uRnJhbWVJZDogbnVtYmVyO1xuXG4gICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgIGFuaW1hdGlvbkZyYW1lSWQgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG5cbiAgICAgIGNvbnN0IG5ld1RpbWUgPSBuZXcgRGF0ZSgpO1xuICAgICAgY29uc3QgZHQgPSAobmV3VGltZS5nZXRUaW1lKCkgLSB0aW1lUmVmLmN1cnJlbnQuZ2V0VGltZSgpKSAvIDEwMDA7XG4gICAgICB0aW1lUmVmLmN1cnJlbnQgPSBuZXdUaW1lO1xuXG4gICAgICBjb29sZG93blJlZi5jdXJyZW50IC09IGR0O1xuXG4gICAgICBpZiAoY29vbGRvd25SZWYuY3VycmVudCA8PSAwKSBkb01vcnBoKCk7XG4gICAgICBlbHNlIGRvQ29vbGRvd24oKTtcbiAgICB9O1xuXG4gICAgYW5pbWF0ZSgpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShhbmltYXRpb25GcmFtZUlkKTtcbiAgICB9O1xuICB9LCBbZG9Nb3JwaCwgZG9Db29sZG93bl0pO1xuXG4gIHJldHVybiB7IHRleHQxUmVmLCB0ZXh0MlJlZiB9O1xufTtcblxuaW50ZXJmYWNlIE1vcnBoaW5nVGV4dFByb3BzIHtcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICB0ZXh0czogc3RyaW5nW107XG59XG5cbmNvbnN0IFRleHRzOiBSZWFjdC5GQzxQaWNrPE1vcnBoaW5nVGV4dFByb3BzLCBcInRleHRzXCI+PiA9ICh7IHRleHRzIH0pID0+IHtcbiAgY29uc3QgeyB0ZXh0MVJlZiwgdGV4dDJSZWYgfSA9IHVzZU1vcnBoaW5nVGV4dCh0ZXh0cyk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxzcGFuXG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LXgtMCB0b3AtMCBtLWF1dG8gaW5saW5lLWJsb2NrIHctZnVsbCBiZy1ncmFkaWVudC10by1yIG1pbi1oLTQwIGZyb20tYmxhY2sgdG8tZ3JheS0zMDAvODAgYmctY2xpcC10ZXh0XCJcbiAgICAgICAgcmVmPXt0ZXh0MVJlZn1cbiAgICAgIC8+XG4gICAgICA8c3BhblxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC14LTAgdG9wLTAgbS1hdXRvIGlubGluZS1ibG9jayB3LWZ1bGwgYmctZ3JhZGllbnQtdG8tciBiZy1jbGlwLXRleHQgbWluLWgtNDBcIlxuICAgICAgICByZWY9e3RleHQyUmVmfVxuICAgICAgLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmNvbnN0IFN2Z0ZpbHRlcnM6IFJlYWN0LkZDID0gKCkgPT4gKFxuICA8c3ZnIGlkPVwiZmlsdGVyc1wiIGNsYXNzTmFtZT1cImhpZGRlblwiIHByZXNlcnZlQXNwZWN0UmF0aW89XCJ4TWlkWU1pZCBzbGljZVwiPlxuICAgIDxkZWZzPlxuICAgICAgPGZpbHRlciBpZD1cInRocmVzaG9sZFwiPlxuICAgICAgICA8ZmVDb2xvck1hdHJpeFxuICAgICAgICAgIGluPVwiU291cmNlR3JhcGhpY1wiXG4gICAgICAgICAgdHlwZT1cIm1hdHJpeFwiXG4gICAgICAgICAgdmFsdWVzPVwiMSAwIDAgMCAwXG4gICAgICAgICAgICAgICAgICAwIDEgMCAwIDBcbiAgICAgICAgICAgICAgICAgIDAgMCAxIDAgMFxuICAgICAgICAgICAgICAgICAgMCAwIDAgMjU1IC0xNDBcIlxuICAgICAgICAvPlxuICAgICAgPC9maWx0ZXI+XG4gICAgPC9kZWZzPlxuICA8L3N2Zz5cbik7XG5cbmNvbnN0IE1vcnBoaW5nVGV4dDogUmVhY3QuRkM8TW9ycGhpbmdUZXh0UHJvcHM+ID0gKHsgdGV4dHMsIGNsYXNzTmFtZSB9KSA9PiAoXG4gIDxkaXZcbiAgICBjbGFzc05hbWU9e2NuKFxuICAgICAgXCJyZWxhdGl2ZSBteC1hdXRvIGgtMTYgdy1mdWxsIG1heC13LXNjcmVlbi1tZCB0ZXh0LWNlbnRlciBmb250LXNhbnMgdGV4dC1bNDBwdF0gZm9udC1ib2xkIGxlYWRpbmctbm9uZSBbZmlsdGVyOnVybCgjdGhyZXNob2xkKV9ibHVyKDAuNnB4KV0gbWQ6aC0yNCBsZzp0ZXh0LVs0cmVtXVwiLFxuICAgICAgY2xhc3NOYW1lLFxuICAgICl9XG4gID5cbiAgICA8VGV4dHMgdGV4dHM9e3RleHRzfSAvPlxuICAgIDxTdmdGaWx0ZXJzIC8+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTW9ycGhpbmdUZXh0O1xuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlUmVmIiwiY24iLCJtb3JwaFRpbWUiLCJjb29sZG93blRpbWUiLCJ1c2VNb3JwaGluZ1RleHQiLCJ0ZXh0cyIsInRleHRJbmRleFJlZiIsIm1vcnBoUmVmIiwiY29vbGRvd25SZWYiLCJ0aW1lUmVmIiwiRGF0ZSIsInRleHQxUmVmIiwidGV4dDJSZWYiLCJzZXRTdHlsZXMiLCJmcmFjdGlvbiIsImN1cnJlbnQxIiwiY3VycmVudDIiLCJjdXJyZW50Iiwic3R5bGUiLCJmaWx0ZXIiLCJNYXRoIiwibWluIiwib3BhY2l0eSIsInBvdyIsImludmVydGVkRnJhY3Rpb24iLCJ0ZXh0Q29udGVudCIsImxlbmd0aCIsImRvTW9ycGgiLCJkb0Nvb2xkb3duIiwiYW5pbWF0aW9uRnJhbWVJZCIsImFuaW1hdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJuZXdUaW1lIiwiZHQiLCJnZXRUaW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJUZXh0cyIsInNwYW4iLCJjbGFzc05hbWUiLCJyZWYiLCJTdmdGaWx0ZXJzIiwic3ZnIiwiaWQiLCJwcmVzZXJ2ZUFzcGVjdFJhdGlvIiwiZGVmcyIsImZlQ29sb3JNYXRyaXgiLCJpbiIsInR5cGUiLCJ2YWx1ZXMiLCJNb3JwaGluZ1RleHQiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ui/morphing-text.tsx\n"));

/***/ })

});