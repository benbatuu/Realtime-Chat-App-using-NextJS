"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Auth; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ \"./context/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction Auth() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context__WEBPACK_IMPORTED_MODULE_2__.Context), username = ref.username, setUsername = ref.setUsername, secret = ref.secret, setSecret = ref.setSecret;\n    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n        className: \"background\",\n        __source: {\n            fileName: \"/Users/rgbatu/Desktop/nextjsChatApp/pages/index.js\",\n            lineNumber: 10,\n            columnNumber: 5\n        },\n        __self: this,\n        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n            className: \"auth-container\",\n            __source: {\n                fileName: \"/Users/rgbatu/Desktop/nextjsChatApp/pages/index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            },\n            __self: this,\n            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"form\", {\n                className: \"auth-form\",\n                onSubmit: function(e) {\n                    return e.preventDefault();\n                },\n                __source: {\n                    fileName: \"/Users/rgbatu/Desktop/nextjsChatApp/pages/index.js\",\n                    lineNumber: 12,\n                    columnNumber: 9\n                },\n                __self: this,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"auth-title\",\n                        __source: {\n                            fileName: \"/Users/rgbatu/Desktop/nextjsChatApp/pages/index.js\",\n                            lineNumber: 13,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Chat App using NextJS\"\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"input-container\",\n                        __source: {\n                            fileName: \"/Users/rgbatu/Desktop/nextjsChatApp/pages/index.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            placeholder: \"E-mail Address\",\n                            className: \"text-input\",\n                            onChange: function(e) {\n                                return setUsername(e.target.value);\n                            },\n                            __source: {\n                                fileName: \"/Users/rgbatu/Desktop/nextjsChatApp/pages/index.js\",\n                                lineNumber: 16,\n                                columnNumber: 13\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"div\", {\n                        className: \"input-container\",\n                        __source: {\n                            fileName: \"/Users/rgbatu/Desktop/nextjsChatApp/pages/index.js\",\n                            lineNumber: 22,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"input\", {\n                            type: \"password\",\n                            placeholder: \"**********\",\n                            className: \"text-input\",\n                            onChange: function(e) {\n                                return setSecret(e.target.value);\n                            },\n                            __source: {\n                                fileName: \"/Users/rgbatu/Desktop/nextjsChatApp/pages/index.js\",\n                                lineNumber: 23,\n                                columnNumber: 13\n                            },\n                            __self: this\n                        })\n                    }),\n                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"button\", {\n                        __source: {\n                            fileName: \"/Users/rgbatu/Desktop/nextjsChatApp/pages/index.js\",\n                            lineNumber: 30,\n                            columnNumber: 11\n                        },\n                        __self: this,\n                        children: \"Login / Sign\"\n                    })\n                ]\n            })\n        })\n    }));\n};\n_s(Auth, \"GZmLReAIno04YBhJKNdL+8UVLnw=\");\n_c = Auth;\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ0w7QUFDRztBQUNkOztBQUNWLFFBQVEsQ0FBQ0ssSUFBSSxHQUFHLENBQUM7O0lBRTlCLEdBQUssQ0FBNkNKLEdBQW1CLEdBQW5CQSxpREFBVSxDQUFDQyw2Q0FBTyxHQUE1REksUUFBUSxHQUFrQ0wsR0FBbUIsQ0FBN0RLLFFBQVEsRUFBQ0MsV0FBVyxHQUFzQk4sR0FBbUIsQ0FBcERNLFdBQVcsRUFBQ0MsTUFBTSxHQUFlUCxHQUFtQixDQUF4Q08sTUFBTSxFQUFDQyxTQUFTLEdBQUtSLEdBQW1CLENBQWpDUSxTQUFTO0lBRTdDLE1BQU0sc0VBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQVk7Ozs7Ozs7dUZBQ3hCRCxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFnQjs7Ozs7Ozs0RkFDNUJDLENBQUk7Z0JBQUNELFNBQVMsRUFBQyxDQUFXO2dCQUFDRSxRQUFRLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQztvQkFBSUEsTUFBTSxDQUFOQSxDQUFDLENBQUNDLGNBQWM7Ozs7Ozs7Ozt5RkFDeERMLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFZOzs7Ozs7O2tDQUFDLENBQXFCOzt5RkFFaERELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFpQjs7Ozs7Ozt1R0FDN0JLLENBQUs7NEJBQ0pDLFdBQVcsRUFBQyxDQUFnQjs0QkFDNUJOLFNBQVMsRUFBQyxDQUFZOzRCQUN0Qk8sUUFBUSxFQUFFSixRQUFRLENBQVJBLENBQUM7Z0NBQUlQLE1BQU0sQ0FBTkEsV0FBVyxDQUFDTyxDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozt5RkFHNUNWLENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFpQjs7Ozs7Ozt1R0FDN0JLLENBQUs7NEJBQ0pLLElBQUksRUFBQyxDQUFVOzRCQUNmSixXQUFXLEVBQUMsQ0FBWTs0QkFDeEJOLFNBQVMsRUFBQyxDQUFZOzRCQUN0Qk8sUUFBUSxFQUFFSixRQUFRLENBQVJBLENBQUM7Z0NBQUlMLE1BQU0sQ0FBTkEsU0FBUyxDQUFDSyxDQUFDLENBQUNLLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7Ozt5RkFHMUNFLENBQU07Ozs7Ozs7a0NBQUMsQ0FFUjs7Ozs7O0FBS1YsQ0FBQztHQWhDdUJqQixJQUFJO0tBQUpBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4uL2NvbnRleHQnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXV0aCgpIHtcblxuICBjb25zdCB7IHVzZXJuYW1lLHNldFVzZXJuYW1lLHNlY3JldCxzZXRTZWNyZXQgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aC1jb250YWluZXJcIj5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiYXV0aC1mb3JtXCIgb25TdWJtaXQ9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtdGl0bGVcIj5DaGF0IEFwcCB1c2luZyBOZXh0SlM8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRS1tYWlsIEFkZHJlc3NcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKioqKlwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtaW5wdXRcIlxuICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWNyZXQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgICAgTG9naW4gLyBTaWduXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlQ29udGV4dCIsIkNvbnRleHQiLCJ1c2VSb3V0ZXIiLCJheGlvcyIsIkF1dGgiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2VjcmV0Iiwic2V0U2VjcmV0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0eXBlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});