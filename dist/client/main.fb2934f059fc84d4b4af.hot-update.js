"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatenew_reddit"]("main",{

/***/ "./src/hooks/useModalCloser.ts":
/*!*************************************!*\
  !*** ./src/hooks/useModalCloser.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useModalCloser: () => (/* binding */ useModalCloser)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n\nfunction useModalCloser({ onClose, ref, ref2, timeDelay }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        let isUnmount = false;\n        function handleClick(event) {\n            var _a, _b;\n            if (!isUnmount &&\n                event.target instanceof Node &&\n                !((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) &&\n                !((_b = ref2 === null || ref2 === void 0 ? void 0 : ref2.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {\n                setTimeout(() => {\n                    onClose === null || onClose === void 0 ? void 0 : onClose();\n                }, timeDelay);\n            }\n        }\n        document.addEventListener('click', handleClick);\n        document.addEventListener('touchstart', handleClick);\n        return () => {\n            document.removeEventListener('click', handleClick);\n            document.removeEventListener('touchstart', handleClick);\n            isUnmount = true;\n        };\n    }, []);\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useModalCloser.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("f67cfbaa94d8353e74f8")
/******/ })();
/******/ 
/******/ }
);