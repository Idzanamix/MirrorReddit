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

/***/ "./src/shared/PostsSection/PostsSection.tsx":
/*!**************************************************!*\
  !*** ./src/shared/PostsSection/PostsSection.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostsSection: () => (/* binding */ PostsSection)\n/* harmony export */ });\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n/* harmony import */ var _Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Loader/RedditLoader */ \"./src/Loader/RedditLoader/index.ts\");\n/* harmony import */ var _errorBanners_Error__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../errorBanners/Error */ \"./src/errorBanners/Error.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _postsSection_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./postsSection.css */ \"./src/shared/PostsSection/postsSection.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _hooks_useStopScroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hooks/useStopScroll */ \"./src/hooks/useStopScroll.ts\");\n\n\n\n\n\n\n\nfunction PostsSection({ children }) {\n    const { loading, afterList, error } = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.selectPostsBlock);\n    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useLocation)();\n    (0,_hooks_useStopScroll__WEBPACK_IMPORTED_MODULE_5__.useStopScroll)(isScroll);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n        if (location.pathname.includes('comments')) {\n        }\n        console.log('Route changed to:', location.pathname);\n    }, [location]);\n    return (react__WEBPACK_IMPORTED_MODULE_3__.createElement(\"section\", { className: _postsSection_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].posts },\n        loading && !afterList\n            ? react__WEBPACK_IMPORTED_MODULE_3__.createElement(_Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_1__.RedditLoader, { className: _postsSection_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].loader })\n            : error && react__WEBPACK_IMPORTED_MODULE_3__.createElement(_errorBanners_Error__WEBPACK_IMPORTED_MODULE_2__.Error, { massage: error.message }),\n        children));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/PostsSection/PostsSection.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3351b1bc47b2fd86e239")
/******/ })();
/******/ 
/******/ }
);