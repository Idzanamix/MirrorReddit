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

/***/ "./src/storeRedux/modal/modalSlice.ts":
/*!********************************************!*\
  !*** ./src/storeRedux/modal/modalSlice.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setModalData: () => (/* binding */ setModalData)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n\nconst initialState = {\n    modalData: {\n        postId: '',\n        anchorName: '',\n        postSubreddit: '',\n        postTitle: '',\n        postUrl: '',\n        createdTime: NaN,\n        numberComments: NaN,\n        karmaNumber: NaN,\n        isLast: false,\n    },\n    isOpen\n};\nconst modalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'cardModal',\n    initialState,\n    reducers: {\n        setModalData(state, action) {\n            return Object.assign(Object.assign({}, state), { modalData: action.payload });\n        }\n    }\n});\nconst { setModalData } = modalSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalSlice.reducer);\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/modal/modalSlice.ts?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5c0d319f43f7e42c82aa")
/******/ })();
/******/ 
/******/ }
);