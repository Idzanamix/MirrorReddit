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

/***/ "./src/shared/CardsList/CardList.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardsList/CardList.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardList: () => (/* binding */ CardList)\n/* harmony export */ });\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n/* harmony import */ var _storeRedux_posts_getPostsAsyncThunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storeRedux/posts/getPostsAsyncThunk */ \"./src/storeRedux/posts/getPostsAsyncThunk.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n/* harmony import */ var _context_CardListContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/CardListContext */ \"./src/context/CardListContext.tsx\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-window */ \"./node_modules/react-window/dist/index.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _BackToTopButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./BackToTopButton */ \"./src/shared/CardsList/BackToTopButton/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _CardRow__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardRow */ \"./src/shared/CardsList/CardRow/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst CardList = () => {\n    const { rowHeights, refCardList } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_CardListContext__WEBPACK_IMPORTED_MODULE_3__.CardListContext);\n    const postsData = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.selectPostsData);\n    const { desktop } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_2__.useCustomMatchMedia)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const { post } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)();\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {\n        dispatch((0,_storeRedux_posts_getPostsAsyncThunk__WEBPACK_IMPORTED_MODULE_1__.getPostsAsyncThunk)(post));\n    }, [post]);\n    const scrollToTop = () => (refCardList === null || refCardList === void 0 ? void 0 : refCardList.current) && refCardList.current.scrollToItem(0);\n    function getRowHeight(index) {\n        return (rowHeights === null || rowHeights === void 0 ? void 0 : rowHeights.current[index]) + (desktop ? index === 0 ? 35 : 15 : 0) || 155;\n    }\n    useStopScroll(scroll);\n    return (react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null,\n        react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__.Outlet, null),\n        react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], null, ({ height, width }) => (react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null,\n            react__WEBPACK_IMPORTED_MODULE_4__.createElement(react_window__WEBPACK_IMPORTED_MODULE_10__.VariableSizeList, { itemCount: postsData.length, itemSize: getRowHeight, innerElementType: \"ul\", ref: refCardList, height: height, width: width }, _CardRow__WEBPACK_IMPORTED_MODULE_8__.CardRow),\n            desktop && react__WEBPACK_IMPORTED_MODULE_4__.createElement(_BackToTopButton__WEBPACK_IMPORTED_MODULE_6__.BackToTopButton, { onClick: scrollToTop }))))));\n};\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardList.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("be5e57053325405b7770")
/******/ })();
/******/ 
/******/ }
);