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

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/UserBlockDropdown.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/UserBlockDropdown.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserBlockDropdown: () => (/* binding */ UserBlockDropdown)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UserAvatar */ \"./src/shared/Header/SearchBlock/UserBlock/UserAvatar/index.ts\");\n/* harmony import */ var _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userBlockDropdown.css */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/userBlockDropdown.css\");\n/* harmony import */ var _ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToggleSwitch */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Icons_IconNight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Icons/IconNight */ \"./src/shared/Icons/IconNight.tsx\");\n/* harmony import */ var _Icons_IconLogIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Icons/IconLogIn */ \"./src/shared/Icons/IconLogIn.tsx\");\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _storeRedux_token_tokenSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../storeRedux/token/tokenSlice */ \"./src/storeRedux/token/tokenSlice.ts\");\n/* harmony import */ var _storeRedux_user_userSlise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../storeRedux/user/userSlise */ \"./src/storeRedux/user/userSlise.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst UserBlockDropdown = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ loading, iconImg, userName, coords, isMobileOpen }, ref) => {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\n    const darkMode = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_11__.selectIsDarkMode);\n    const { mobile411, desktop } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_10__.useCustomMatchMedia)();\n    function HandleResetToken() {\n        dispatch((0,_storeRedux_token_tokenSlice__WEBPACK_IMPORTED_MODULE_8__.resetToken)());\n        dispatch((0,_storeRedux_user_userSlise__WEBPACK_IMPORTED_MODULE_9__.resetUserData)());\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_4__.createElement(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, null,\n        mobile411 &&\n            react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"div\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].backdrop, style: { top: isMobileOpen ? 0 : '110%', visibility } }),\n        react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"ul\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list, ref: ref, style: {\n                filter: darkMode\n                    ? 'drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.15))'\n                    : 'drop-shadow(0px 0px 6px rgba(2, 2, 2, 0.3))',\n                right: mobile411\n                    ? ''\n                    : `calc(${(coords === null || coords === void 0 ? void 0 : coords.left) + 'px'} + ${desktop ? '65px' : '2px'})`,\n                top: mobile411\n                    ? '110%'\n                    : `calc(${(coords === null || coords === void 0 ? void 0 : coords.top) + 'px'} + ${desktop ? '20px' : '26px'})`,\n            } },\n            userName &&\n                react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"li\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].item },\n                    react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"a\", { href: `https://www.reddit.com/user/${userName}/`, className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button },\n                        react__WEBPACK_IMPORTED_MODULE_4__.createElement(_UserAvatar__WEBPACK_IMPORTED_MODULE_1__.UserAvatar, { userName: userName, loading: loading, iconImg: iconImg, noText: true }),\n                        react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"span\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].descr },\n                            react__WEBPACK_IMPORTED_MODULE_4__.createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { size: 12, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.white, className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].username }, \"View Profile\"),\n                            react__WEBPACK_IMPORTED_MODULE_4__.createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { size: 10, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.gray99, className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].username },\n                                \"u/\",\n                                userName)))),\n            react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"li\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].item }, userName ?\n                react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"button\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button, onClick: HandleResetToken },\n                    react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Icons_IconLogIn__WEBPACK_IMPORTED_MODULE_6__.Iconlogin, null),\n                    react__WEBPACK_IMPORTED_MODULE_4__.createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.white, size: 12 }, \"Log Out\"))\n                :\n                    react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"a\", { href: `https://www.reddit.com/api/v1/authorize?client_id=_27swn7Uy4Ctovp3-0sQUw&response_type=code&state=random_string&redirect_uri=${'http://localhost'}:80/auth&duration=permanent&scope=read submit identity`, className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button, type: 'button' },\n                        react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Icons_IconLogIn__WEBPACK_IMPORTED_MODULE_6__.Iconlogin, null),\n                        react__WEBPACK_IMPORTED_MODULE_4__.createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.white, size: 12 }, \"Log In / Sign Up\"))),\n            react__WEBPACK_IMPORTED_MODULE_4__.createElement(\"li\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].item, style: { padding: '15px 20px' } },\n                react__WEBPACK_IMPORTED_MODULE_4__.createElement(_Icons_IconNight__WEBPACK_IMPORTED_MODULE_5__.IconNight, null),\n                react__WEBPACK_IMPORTED_MODULE_4__.createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.white, size: 12 }, \"Dark Mode\"),\n                react__WEBPACK_IMPORTED_MODULE_4__.createElement(_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__.ToggleSwitch, null)))));\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/UserBlockDropdown.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("28cbd697beb788561e9b")
/******/ })();
/******/ 
/******/ }
);