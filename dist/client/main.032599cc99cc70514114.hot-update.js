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

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserBlock: () => (/* binding */ UserBlock)\n/* harmony export */ });\n/* harmony import */ var _userblock_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\");\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAvatar */ \"./src/shared/Header/SearchBlock/UserBlock/UserAvatar/index.ts\");\n/* harmony import */ var _hooks_useCoords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useCoords */ \"./src/hooks/useCoords.ts\");\n/* harmony import */ var _UserBlockDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserBlockDropdown */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _hooks_useUserData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\n/* harmony import */ var _hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useDarkMode */ \"./src/hooks/useDarkMode.ts\");\n/* harmony import */ var _hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useModalCloser */ \"./src/hooks/useModalCloser.ts\");\n/* harmony import */ var _hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useResizeCloser */ \"./src/hooks/useResizeCloser.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nfunction UserBlock() {\n    const modalRoot = document.getElementById('modal_root');\n    if (!modalRoot)\n        return null;\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const { iconImg, name, loading } = (0,_hooks_useUserData__WEBPACK_IMPORTED_MODULE_6__.useUserData)();\n    const darkMode = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_11__.selectIsDarkMode);\n    const refButton = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const [coords] = (0,_hooks_useCoords__WEBPACK_IMPORTED_MODULE_3__.useCoords)(refButton, isOpen);\n    const { mobile411 } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_10__.useCustomMatchMedia)();\n    console.log('coords', coords);\n    function handleClose() {\n        if (mobile411 && listRef.current) {\n            listRef.current.style.top = '110%';\n            listRef.current.style.visibility = 'hidden';\n            return;\n        }\n        if (listRef.current) {\n            setIsOpen(false);\n            listRef.current.style.visibility = 'hidden';\n        }\n        // right: mobile411 \n        //             ? ''\n        //             : `calc(${coords?.left + 'px'} + ${desktop ? '65px' : '3px'})`,\n        //         top: mobile411 \n        //             ? `calc(100% - ${listHeigth + 'px'})`\n        //             : `calc(${coords?.top + 'px'} + ${desktop ? '20px' : '25px'})`,\n    }\n    function handleOpen() {\n        var _a;\n        const listHeigth = (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight;\n        if (mobile411 && listRef.current) {\n            listRef.current.style.top = `calc(100% - ${listHeigth + 'px'})`;\n            listRef.current.style.visibility = 'visible';\n            return;\n        }\n        if (listRef.current) {\n            setIsOpen(true);\n            listRef.current.style.visibility = 'visible';\n        }\n    }\n    (0,_hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_8__.useModalCloser)({ onClose: handleClose, ref: listRef, ref2: refButton });\n    (0,_hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_9__.useResizeCloser)(handleClose);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n        (0,_hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_7__.useDarkMode)(darkMode);\n    }, [darkMode]);\n    return (react__WEBPACK_IMPORTED_MODULE_5__.createElement(react__WEBPACK_IMPORTED_MODULE_5__.Fragment, null,\n        react__WEBPACK_IMPORTED_MODULE_5__.createElement(\"button\", { type: 'button', ref: refButton, className: _userblock_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userBox, onClick: handleOpen },\n            react__WEBPACK_IMPORTED_MODULE_5__.createElement(_UserAvatar__WEBPACK_IMPORTED_MODULE_2__.UserAvatar, { loading: loading, iconImg: iconImg, userName: name })),\n        mobile411 &&\n            (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_5__.createElement(_UserBlockDropdown__WEBPACK_IMPORTED_MODULE_4__.UserBlockDropdown, { loading: loading, iconImg: iconImg, userName: name, coords: coords, ref: listRef }), modalRoot),\n        !mobile411 && isOpen && coords && (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_5__.createElement(_UserBlockDropdown__WEBPACK_IMPORTED_MODULE_4__.UserBlockDropdown, { loading: loading, iconImg: iconImg, userName: name, coords: coords, ref: listRef }), modalRoot)));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("b6423a3696004d810b06")
/******/ })();
/******/ 
/******/ }
);