/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main.global.css":
/*!*****************************!*\
  !*** ./src/main.global.css ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `:root {\r\n    --trueLight: #D7DADC;\r\n    --trueGreenBlack: #1A1A1B;\r\n    --trueWhite: #ffffff;\r\n    --background: var(--trueWhite);\r\n    --darkRgb: #D2DADD;\r\n    --bodyText: #0F1A1C;\r\n    --logoColor: #ff4500;\r\n    --space: var(--EC);\r\n    --black: #333333;\r\n    --orange: #CC6633;\r\n    --orangeLogo: var(--gray66);\r\n    --orangeFF: #D93A00;\r\n    --coral: coral;\r\n    --sky: #4FBCFF;\r\n    --toggleBackground: #0045AC;\r\n    --toggleBackgroundHover: #1870F4;\r\n    --darkLine: #343536;\r\n    --redCC: #CC3361;\r\n    --green: #A4CC33;\r\n    --EC: #ECECEC;\r\n    --E5: #E5E5E5;\r\n    --buttonColor: var(--trueWhite);\r\n    --whiteLightness: 100%;\r\n    --white: var(--bodyText);\r\n    --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));\r\n    --grayF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));\r\n    --grayD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));\r\n    --grayC4: hsl(0, 0%, calc(var(--whiteLightness) - 25%));\r\n    --gray66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));\r\n    --gray99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));\r\n    --darkness: hsl(0, 0%, calc(var(--whiteLightness) - 72.5%));\r\n    --darkLord: var(--trueLight);\r\n    --greenDark: #0B1416;\r\n    --greenLight: var(--bodyText);\r\n    --commentBorder: var(--trueLight);\r\n    --commentBorderHover: var(--gray99);\r\n    --mobileButton: var(--trueLight);\r\n    --whiteGray: #000000;\r\n    --greenStrong: var(--trueWhite);\r\n    --greenHover: var(--EC);\r\n    --karmaCounterColor: var(--gray66);\r\n    --titleColorHover: var(--gray66);\r\n    --timeCreated: #576F76;\r\n    --commentsButton: var(--gray66);\r\n    --formButtonHover: var(--EC);\r\n    --avatarBackground: var(--trueWhite);\r\n    --backToTopButton: var(--gray99);\r\n    --colorFooter: #d3d6d6;\r\n    --footerBorder: var(--gray99);\r\n    --commentsButtonColor: var(--gray66);\r\n    --colorScrim: #00000099;\r\n}\r\n\r\n.isDark {\r\n    --background: var(--trueGreenBlack);\r\n    --darkRgb: #141415;\r\n    --logoColor: var(--white);\r\n    --space: #000000;\r\n    --orangeLogo: #ff4500;\r\n    --buttonColor: var(--trueLight);\r\n    --whiteLightness: 100%;\r\n    --white: hsl(0, 0%, var(--whiteLightness));\r\n    --darkLord: hsl(0, 0%, calc(var(--whiteLightness) - 83.5%));\r\n    --greenDark: #0B1416;\r\n    --greenLight: var(--bodyText);\r\n    --commentBorder: var(--darkLine);\r\n    --commentBorderHover: var(--trueLight);\r\n    --bodyText: var(--trueLight);\r\n    --mobileButton: #1A282D;\r\n    --whiteGray: #f0f6fc;\r\n    --greenStrong: #0F1A1C;\r\n    --greenHover: #131F23;\r\n    --karmaCounterColor: var(--trueLight);\r\n    --commentsButton: var(--grayC4);\r\n    --commentBorderHover: var(--trueLight);\r\n    --formButtonHover: var(--darkLord);\r\n    --avatarBackground: var(--gray66);\r\n    --avatarBackgroundImage: linear-gradient(0deg, #2A3C42ff, #0B1416ff 75%);\r\n    --backToTopButton: var(--trueLight);\r\n    --colorFooter: #141415;\r\n    --footerBorder: var(--darkLine);\r\n    --commentsButtonColor: var(--bodyText);\r\n}\r\n\r\nbody {\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: var(--space);\r\n    font-size: 14px;\r\n    line-height: 16px;\r\n    font-family: 'Roboto', serif;\r\n}\r\n\r\n* {\r\n    color: var(--black);\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n}\r\n\r\nul {\r\n    margin: 0;\r\n    padding: 0;\r\n    list-style: none;\r\n}\r\n\r\nbutton {\r\n    padding: 0;\r\n    border: 0;\r\n    background: transparent;\r\n    cursor: pointer;\r\n}\r\n\r\nbutton::-moz-focus-inner {\r\n    padding: 0;\r\n    border: 0\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n/* CUSTOM SCROLLBAR */\r\n\r\n::-webkit-scrollbar {\r\n    background-color: var(--background);\r\n    width: 8px;\r\n    border-radius: 1px;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    background-color: var(--gray66);\r\n    border-radius: 1px;\r\n    transition: background-color 0.5s ease-in-out;\r\n}\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n    background-color: var(--orangeFF);\r\n}\r\n\r\n* {\r\n    scrollbar-color: var(--grayD9) var(--EC);\r\n    scrollbar-width: thin;\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n    ::-webkit-scrollbar {\r\n        width: 0;\r\n    }\r\n\r\n    .isDark {\r\n        --background: var(--greenDark);\r\n        --darkRgb: transparent;\r\n        --commentBorder: var(--mobileButton);\r\n        --darkLord: var(--mobileButton);\r\n        --space: var(--greenDark);\r\n        --greenHover: #131F23;\r\n        --colorFooter: var(--greenStrong);\r\n    }\r\n}\r\n\r\n.isDark .active.active {\r\n    color: var(--buttonColor);\r\n    background-color: var(--darkLord);\r\n}\r\n\r\n.isDark .active.active svg {\r\n    fill: var(--buttonColor);\r\n}\r\n\r\n.active.active {\r\n    color: var(--gray66);\r\n    background-color: var(--darkLord);\r\n}\r\n\r\n.active.active svg {\r\n    fill: var(--gray66);\r\n}\r\n\r\n@media (hover:hover) {\r\n    .isDark .active.active:hover {\r\n        background-color: var(--commentBorder);\r\n    }\r\n\r\n    .active.active:hover {\r\n        background-color: var(--E5);\r\n    }\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://new-reddit/./src/main.global.css?");

/***/ }),

/***/ "./src/Loader/RedditLoader/redditLoader.css":
/*!**************************************************!*\
  !*** ./src/Loader/RedditLoader/redditLoader.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"loader\": `redditLoader__loader--scaRs`,\n\t\"scaleout\": `redditLoader__scaleout--ZR9lw`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/Loader/RedditLoader/redditLoader.css?");

/***/ }),

/***/ "./src/errorBanners/error.css":
/*!************************************!*\
  !*** ./src/errorBanners/error.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"error\": `error__error--WRTXg`,\n\t\"image\": `error__image--trPA3`,\n\t\"container\": `error__container--gEtGP`,\n\t\"wrapper\": `error__wrapper--Sc3Sp`,\n\t\"descr\": `error__descr--qWvrC`,\n\t\"message\": `error__message--MqVSM`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/errorBanners/error.css?");

/***/ }),

/***/ "./src/shared/CardsList/BackToTopButton/backToTopButton.css":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/BackToTopButton/backToTopButton.css ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"button\": `backToTopButton__button--M9Nxj`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/BackToTopButton/backToTopButton.css?");

/***/ }),

/***/ "./src/shared/CardsList/CardListFooter/cardListFooter.css":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/CardListFooter/cardListFooter.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"footer\": `cardListFooter__footer--MMK08`,\n\t\"left\": `cardListFooter__left--jKURP`,\n\t\"middle\": `cardListFooter__middle--DW8C5`,\n\t\"right\": `cardListFooter__right--C1KlM`,\n\t\"text\": `cardListFooter__text--wuCl8`,\n\t\"link\": `cardListFooter__link--oXjbX`,\n\t\"github\": `cardListFooter__github--Ls9eH`,\n\t\"gitlab\": `cardListFooter__gitlab--ItW31`,\n\t\"telegram\": `cardListFooter__telegram--rPXul`,\n\t\"vk\": `cardListFooter__vk--awfn3`,\n\t\"email\": `cardListFooter__email--_Xz3V`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardListFooter/cardListFooter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardAnchor/сardAnchor.css":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardAnchor/сardAnchor.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"metaData\": `сardAnchor__metaData--VfLKp`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardAnchor/%D1%81ardAnchor.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Actions/actions.css":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Actions/actions.css ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"actions\": `actions__actions--KnUqL`,\n\t\"shareButton\": `actions__shareButton--djAuh`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/Actions/actions.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"commentsNumber\": `commentsbutton__commentsNumber--t_3ut`,\n\t\"commentsButton\": `commentsbutton__commentsButton--jH6In`,\n\t\"commentsDescr\": `commentsbutton__commentsDescr--fDASc`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"karmaCounter\": `karmacounter__karmaCounter--IeWHC`,\n\t\"karmaValue\": `karmacounter__karmaValue--ZOrCx`,\n\t\"up\": `karmacounter__up--n4768`,\n\t\"down\": `karmacounter__down--cjjf9`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/cardcontrols.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/cardcontrols.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"controls\": `cardcontrols__controls--IWv1k`,\n\t\"karmaCounter\": `cardcontrols__karmaCounter--f7N1D`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/cardcontrols.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardLoader/cardLoader.css":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardLoader/cardLoader.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"loader\": `cardLoader__loader--yvTyz`,\n\t\"observer\": `cardLoader__observer--FpWU6`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardLoader/cardLoader.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/menuFormBtnsDropdown.css":
/*!************************************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/menuFormBtnsDropdown.css ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"list\": `menuFormBtnsDropdown__list--g3meG`,\n\t\"flash\": `menuFormBtnsDropdown__flash--Zep0j`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/menuFormBtnsDropdown.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsForm/modalCommentsForm.css":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/modalCommentsForm.css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"form\": `modalCommentsForm__form--IQmmh`,\n\t\"formOpen\": `modalCommentsForm__formOpen--bywC5`,\n\t\"textarea\": `modalCommentsForm__textarea--Lj9Eu`,\n\t\"label\": `modalCommentsForm__label--l9onr`,\n\t\"buttonsWrapper\": `modalCommentsForm__buttonsWrapper--ErgAy`,\n\t\"item\": `modalCommentsForm__item--fvMcV`,\n\t\"submitButton\": `modalCommentsForm__submitButton--KXHzQ`,\n\t\"cancelBtn\": `modalCommentsForm__cancelBtn--jTjZl`,\n\t\"btnSizeMobile\": `modalCommentsForm__btnSizeMobile--HYQgh`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsForm/modalCommentsForm.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/menuCommentDropdown.css":
/*!*************************************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/menuCommentDropdown.css ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"list\": `menuCommentDropdown__list--QVwrF`,\n\t\"flash\": `menuCommentDropdown__flash--RDVIG`,\n\t\"item\": `menuCommentDropdown__item--qt7FG`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/menuCommentDropdown.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/menuCommentButton.css":
/*!***************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/menuCommentButton.css ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"button\": `menuCommentButton__button--pGqHm`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/menuCommentButton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/comment.css":
/*!***********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/comment.css ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"container\": `comment__container--TLUYE`,\n\t\"header\": `comment__header--tqj8W`,\n\t\"body\": `comment__body--sotBq`,\n\t\"content\": `comment__content--GJfEW`,\n\t\"commentOpen\": `comment__commentOpen--s9TuF`,\n\t\"buttonOpen\": `comment__buttonOpen--o8VhN`,\n\t\"buttonLine\": `comment__buttonLine--mVe0E`,\n\t\"userLinkAvatar\": `comment__userLinkAvatar--qt1H0`,\n\t\"styleAvatar\": `comment__styleAvatar--ulVcl`,\n\t\"createdAd\": `comment__createdAd--_kGGW`,\n\t\"text\": `comment__text--wigUO`,\n\t\"controlPanel\": `comment__controlPanel--yuo9m`,\n\t\"karmaCounter\": `comment__karmaCounter--Lgg37`,\n\t\"button\": `comment__button--VqfAQ`,\n\t\"commentsBlock\": `comment__commentsBlock--K9Amn`,\n\t\"formComment\": `comment__formComment--MaS2J`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/comment.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/modalcommentsList.css":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/modalcommentsList.css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"list\": `modalcommentsList__list--VizIY`,\n\t\"loader\": `modalcommentsList__loader--qQX2b`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/modalcommentsList.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalControlPanel/modalControlPanel.css":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalControlPanel/modalControlPanel.css ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"panel\": `modalControlPanel__panel--EazPe`,\n\t\"item\": `modalControlPanel__item--tt0JH`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalControlPanel/modalControlPanel.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalSortBlock/modalSortBlock.css":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalSortBlock/modalSortBlock.css ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"sortblock\": `modalSortBlock__sortblock--Mb7DF`,\n\t\"button\": `modalSortBlock__button--Xz9S3`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalSortBlock/modalSortBlock.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/MoreCommentsButton/moreCommentsButton.css":
/*!***************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/MoreCommentsButton/moreCommentsButton.css ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"button\": `moreCommentsButton__button--wPPg3`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/MoreCommentsButton/moreCommentsButton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/cardmodal.css":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/cardmodal.css ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"modal\": `cardmodal__modal--_aIAj`,\n\t\"slidein\": `cardmodal__slidein--KjT0W`,\n\t\"container\": `cardmodal__container--kROWd`,\n\t\"loader\": `cardmodal__loader--LFCdA`,\n\t\"buttonBackToTop\": `cardmodal__buttonBackToTop--GCtUg`,\n\t\"buttonCloserX\": `cardmodal__buttonCloserX--uM7LU`,\n\t\"header\": `cardmodal__header--HvEDM`,\n\t\"popupMediaUser\": `cardmodal__popupMediaUser--mANxE`,\n\t\"karmaCounter\": `cardmodal__karmaCounter--NEENl`,\n\t\"preview\": `cardmodal__preview--cVARZ`,\n\t\"textContent\": `cardmodal__textContent--CbJ62`,\n\t\"footer\": `cardmodal__footer--aOopQ`,\n\t\"commentsBlock\": `cardmodal__commentsBlock--sWbJp`,\n\t\"popupHeaderWrapper\": `cardmodal__popupHeaderWrapper--qj_I3`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/cardmodal.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/cardtitlepostlink.css":
/*!*******************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/cardtitlepostlink.css ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"title\": `cardtitlepostlink__title--iv0rp`,\n\t\"link\": `cardtitlepostlink__link--cXfY8`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/cardtitlepostlink.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/CreatedAd/createdad.css":
/*!***************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/CreatedAd/createdad.css ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"createdAd\": `createdad__createdAd--o5FW7`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/CreatedAd/createdad.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/UserLink/userlink.css":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/UserLink/userlink.css ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"userLink\": `userlink__userLink--VFnpy`,\n\t\"snoovatar\": `userlink__snoovatar--IspXr`,\n\t\"avatar\": `userlink__avatar--VWB8P`,\n\t\"username\": `userlink__username--r71BZ`,\n\t\"removed\": `userlink__removed--nCvWu`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/UserLink/userlink.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/cardtextcontent.css":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/cardtextcontent.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"textContent\": `cardtextcontent__textContent--VJhep`,\n\t\"commentsButton\": `cardtextcontent__commentsButton--LgYCo`,\n\t\"userLink\": `cardtextcontent__userLink--YnMMa`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/cardtextcontent.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardVisual/cardVisual.css":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardVisual/cardVisual.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"preview\": `cardVisual__preview--dZjlu`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardVisual/cardVisual.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/LoadMoreButton/loadMoreButton.css":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/LoadMoreButton/loadMoreButton.css ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"button\": `loadMoreButton__button--eOMjA`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/LoadMoreButton/loadMoreButton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MenuButton/menuButton.css":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/MenuButton/menuButton.css ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"button\": `menuButton__button--TZTx3`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/MenuButton/menuButton.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MenuDropdown/menuDropdown.css":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/MenuDropdown/menuDropdown.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"dropdownList\": `menuDropdown__dropdownList--p1z7L`,\n\t\"dropdownItem\": `menuDropdown__dropdownItem--CQ731`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/MenuDropdown/menuDropdown.css?");

/***/ }),

/***/ "./src/shared/CardsList/Card/card.css":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/card.css ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"card\": `card__card--dPIIn`,\n\t\"body\": `card__body--pxbkc`,\n\t\"wrapper\": `card__wrapper--ARy1A`,\n\t\"content\": `card__content--mZCME`,\n\t\"preview\": `card__preview--_29Vb`,\n\t\"previewIsOpen\": `card__previewIsOpen--K849r`,\n\t\"link\": `card__link--fuj3D`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/card.css?");

/***/ }),

/***/ "./src/shared/Content/content.css":
/*!****************************************!*\
  !*** ./src/shared/Content/content.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"content\": `content__content--LaQEL`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Content/content.css?");

/***/ }),

/***/ "./src/shared/Header/HeaderNavigation/MenuNav/menuNav.css":
/*!****************************************************************!*\
  !*** ./src/shared/Header/HeaderNavigation/MenuNav/menuNav.css ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"menu\": `menuNav__menu--RJ_fx`,\n\t\"nav\": `menuNav__nav--uCz8o`,\n\t\"isDark\": `menuNav__isDark--MowKb`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/HeaderNavigation/MenuNav/menuNav.css?");

/***/ }),

/***/ "./src/shared/Header/HeaderNavigation/headerNavigation.css":
/*!*****************************************************************!*\
  !*** ./src/shared/Header/HeaderNavigation/headerNavigation.css ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"nav\": `headerNavigation__nav--b04SX`,\n\t\"link\": `headerNavigation__link--KRVEv`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/HeaderNavigation/headerNavigation.css?");

/***/ }),

/***/ "./src/shared/Header/LogoLink/logoLink.css":
/*!*************************************************!*\
  !*** ./src/shared/Header/LogoLink/logoLink.css ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"link\": `logoLink__link--JzvhR`,\n\t\"logo\": `logoLink__logo--aKeHv`,\n\t\"title\": `logoLink__title--_YSgk`,\n\t\"namix\": `logoLink__namix--uCeBP`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/LogoLink/logoLink.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserAvatar/userAvatar.css":
/*!***************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserAvatar/userAvatar.css ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"avatarBox\": `userAvatar__avatarBox--ozd7u`,\n\t\"avatar\": `userAvatar__avatar--poPVf`,\n\t\"avatarImage\": `userAvatar__avatarImage--oLpvY`,\n\t\"username\": `userAvatar__username--Plvlk`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserAvatar/userAvatar.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/toggleSwitch.css":
/*!*************************************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/toggleSwitch.css ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"input\": `toggleSwitch__input--gTsqw`,\n\t\"label\": `toggleSwitch__label--iEwGF`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/toggleSwitch.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/userBlockDropdown.css":
/*!*****************************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/userBlockDropdown.css ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"backdrop\": `userBlockDropdown__backdrop--Tk7Se`,\n\t\"list\": `userBlockDropdown__list--HtSM8`,\n\t\"isDark\": `userBlockDropdown__isDark--vq6WI`,\n\t\"text\": `userBlockDropdown__text--nfAms`,\n\t\"item\": `userBlockDropdown__item--s_knH`,\n\t\"button\": `userBlockDropdown__button--pzW7e`,\n\t\"descr\": `userBlockDropdown__descr--gjjk2`,\n\t\"username\": `userBlockDropdown__username--eFSAE`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/userBlockDropdown.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/userblock.css":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/userblock.css ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"userBox\": `userblock__userBox--Nm25r`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/userblock.css?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/searchblock.css":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/searchblock.css ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"searchBlock\": `searchblock__searchBlock--AiDOf`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/searchblock.css?");

/***/ }),

/***/ "./src/shared/Header/header.css":
/*!**************************************!*\
  !*** ./src/shared/Header/header.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"header\": `header__header--StEJO`,\n\t\"container\": `header__container--_fZ4W`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/header.css?");

/***/ }),

/***/ "./src/shared/Layout/layout.css":
/*!**************************************!*\
  !*** ./src/shared/Layout/layout.css ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"layout\": `layout__layout--TomHf`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Layout/layout.css?");

/***/ }),

/***/ "./src/shared/PostsSection/postsSection.css":
/*!**************************************************!*\
  !*** ./src/shared/PostsSection/postsSection.css ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"posts\": `postsSection__posts--Iwesw`,\n\t\"loader\": `postsSection__loader--ZxRJx`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/PostsSection/postsSection.css?");

/***/ }),

/***/ "./src/utils/css/text.css":
/*!********************************!*\
  !*** ./src/utils/css/text.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n\t\"black\": `text__black--zzAhE`,\n\t\"blew\": `text__blew--_Qfxm`,\n\t\"orangeFF\": `text__orangeFF--yrDLx`,\n\t\"green\": `text__green--b1uwQ`,\n\t\"white\": `text__white--JLpL3`,\n\t\"whiteGray\": `text__whiteGray--I1P8e`,\n\t\"grayF4\": `text__grayF4--_csvx`,\n\t\"grayF3\": `text__grayF3--LHBVK`,\n\t\"grayD9\": `text__grayD9--zSnHJ`,\n\t\"grayC4\": `text__grayC4--tutHO`,\n\t\"gray66\": `text__gray66--dFeHU`,\n\t\"gray99\": `text__gray99--IqEbT`,\n\t\"s28\": `text__s28--Zy3GV`,\n\t\"s20\": `text__s20--zXQK9`,\n\t\"s16\": `text__s16--Cr0tD`,\n\t\"s14\": `text__s14--rM_Us`,\n\t\"s12\": `text__s12--kzcvP`,\n\t\"s10\": `text__s10--rUuBv`,\n\t\"m28\": `text__m28--NLtWw`,\n\t\"m20\": `text__m20--LbMKa`,\n\t\"m16\": `text__m16--DMIg8`,\n\t\"m14\": `text__m14--EwDTy`,\n\t\"m12\": `text__m12--I2kjW`,\n\t\"m10\": `text__m10--KJulj`,\n\t\"t28\": `text__t28--mvWBX`,\n\t\"t20\": `text__t20--xH5xg`,\n\t\"t16\": `text__t16--zXlQ8`,\n\t\"t14\": `text__t14--ZmAIG`,\n\t\"t12\": `text__t12--DjZMf`,\n\t\"t10\": `text__t10--Jle1Q`,\n\t\"d28\": `text__d28--QEHO1`,\n\t\"d20\": `text__d20--GuW8v`,\n\t\"d16\": `text__d16--s2djM`,\n\t\"d14\": `text__d14--fFZ_y`,\n\t\"d12\": `text__d12--is_Ms`,\n\t\"d10\": `text__d10--_1eKg`\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/css/text.css?");

/***/ }),

/***/ "./src/img/errorReddit.png":
/*!*********************************!*\
  !*** ./src/img/errorReddit.png ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/errorReddit.8418331b35e5fe8568387403a0def8cb.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/errorReddit.png?");

/***/ }),

/***/ "./src/img/logo-gmail.png":
/*!********************************!*\
  !*** ./src/img/logo-gmail.png ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/logo-gmail.1846afe41aa0bcfec0d2c2570553cf74.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/logo-gmail.png?");

/***/ }),

/***/ "./src/img/redditAnonimBlue.png":
/*!**************************************!*\
  !*** ./src/img/redditAnonimBlue.png ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/redditAnonimBlue.9aeeb31c0c00801ab078261a519f9d71.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/redditAnonimBlue.png?");

/***/ }),

/***/ "./src/img/redditAnonimBrown.png":
/*!***************************************!*\
  !*** ./src/img/redditAnonimBrown.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/redditAnonimBrown.7283aa60b606d76aa746bb08f4f0e06f.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/redditAnonimBrown.png?");

/***/ }),

/***/ "./src/img/redditAnonimGreen.png":
/*!***************************************!*\
  !*** ./src/img/redditAnonimGreen.png ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/redditAnonimGreen.ed4c8c9c0a7ff6e4f8989b417cd94b6b.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/redditAnonimGreen.png?");

/***/ }),

/***/ "./src/img/redditAnonimRed.png":
/*!*************************************!*\
  !*** ./src/img/redditAnonimRed.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/redditAnonimRed.0c4f181e7b43c2a5200ebe5c1d033aa0.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/redditAnonimRed.png?");

/***/ }),

/***/ "./src/img/redditAnonimYellow.png":
/*!****************************************!*\
  !*** ./src/img/redditAnonimYellow.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/redditAnonimYellow.ac216724023f68e954ba4edc8afe541e.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/redditAnonimYellow.png?");

/***/ }),

/***/ "./src/img/redditDefaultImagePurple.png":
/*!**********************************************!*\
  !*** ./src/img/redditDefaultImagePurple.png ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/redditDefaultImagePurple.34d0f4bff08a6386e3c3628e5699a905.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/redditDefaultImagePurple.png?");

/***/ }),

/***/ "./src/img/redditLinkImage.png":
/*!*************************************!*\
  !*** ./src/img/redditLinkImage.png ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/redditLinkImage.f30c46c24ca9542d5d8c215a042ecb8c.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/redditLinkImage.png?");

/***/ }),

/***/ "./src/img/redditMessageImage.png":
/*!****************************************!*\
  !*** ./src/img/redditMessageImage.png ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"static/media/redditMessageImage.29da1ab6706323c0e974326cd4b45438.png\");\n\n//# sourceURL=webpack://new-reddit/./src/img/redditMessageImage.png?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n    var list = [];\n    // return the list of modules as css string\n    list.toString = function toString() {\n        return this.map(function (item) {\n            var content = \"\";\n            var needLayer = typeof item[5] !== \"undefined\";\n            if (item[4]) {\n                content += \"@supports (\".concat(item[4], \") {\");\n            }\n            if (item[2]) {\n                content += \"@media \".concat(item[2], \" {\");\n            }\n            if (needLayer) {\n                content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n            }\n            content += cssWithMappingToString(item);\n            if (needLayer) {\n                content += \"}\";\n            }\n            if (item[2]) {\n                content += \"}\";\n            }\n            if (item[4]) {\n                content += \"}\";\n            }\n            return content;\n        }).join(\"\");\n    };\n    // import a list of modules into the list\n    list.i = function i(modules, media, dedupe, supports, layer) {\n        if (typeof modules === \"string\") {\n            modules = [[null, modules, undefined]];\n        }\n        var alreadyImportedModules = {};\n        if (dedupe) {\n            for (var k = 0; k < this.length; k++) {\n                var id = this[k][0];\n                if (id != null) {\n                    alreadyImportedModules[id] = true;\n                }\n            }\n        }\n        for (var _k = 0; _k < modules.length; _k++) {\n            var item = [].concat(modules[_k]);\n            if (dedupe && alreadyImportedModules[item[0]]) {\n                continue;\n            }\n            if (typeof layer !== \"undefined\") {\n                if (typeof item[5] === \"undefined\") {\n                    item[5] = layer;\n                }\n                else {\n                    item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n                    item[5] = layer;\n                }\n            }\n            if (media) {\n                if (!item[2]) {\n                    item[2] = media;\n                }\n                else {\n                    item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n                    item[2] = media;\n                }\n            }\n            if (supports) {\n                if (!item[4]) {\n                    item[4] = \"\".concat(supports);\n                }\n                else {\n                    item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n                    item[4] = supports;\n                }\n            }\n            list.push(item);\n        }\n    };\n    return list;\n};\n\n\n//# sourceURL=webpack://new-reddit/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\nmodule.exports = function (i) {\n    return i[1];\n};\n\n\n//# sourceURL=webpack://new-reddit/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/App.tsx":
/*!*********************!*\
  !*** ./src/App.tsx ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   App: () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.global.css */ \"./src/main.global.css\");\n/* harmony import */ var _shared_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/Layout */ \"./src/shared/Layout/index.ts\");\n/* harmony import */ var _shared_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/Header */ \"./src/shared/Header/index.ts\");\n/* harmony import */ var _shared_Content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/Content */ \"./src/shared/Content/index.ts\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hot-loader/root */ \"react-hot-loader/root\");\n/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _errorBanners_Error__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errorBanners/Error */ \"./src/errorBanners/Error.tsx\");\n/* harmony import */ var _shared_CardsList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/CardsList */ \"./src/shared/CardsList/index.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _shared_CardsList_Card_CardModal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/CardsList/Card/CardModal */ \"./src/shared/CardsList/Card/CardModal/index.ts\");\n/* harmony import */ var _shared_PostsSection_PostsSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/PostsSection/PostsSection */ \"./src/shared/PostsSection/PostsSection.tsx\");\n/* harmony import */ var _context_CardListContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./context/CardListContext */ \"./src/context/CardListContext.tsx\");\n/* harmony import */ var _storeRedux_storeRedux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./storeRedux/storeRedux */ \"./src/storeRedux/storeRedux.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction AppComponent() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_storeRedux_storeRedux__WEBPACK_IMPORTED_MODULE_12__.MountedBrowserRouter, null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_storeRedux_storeRedux__WEBPACK_IMPORTED_MODULE_12__.ReduxProvider, null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_context_CardListContext__WEBPACK_IMPORTED_MODULE_11__.CardListContextProvider, null,\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, null,\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Header__WEBPACK_IMPORTED_MODULE_3__.Header, null),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_Content__WEBPACK_IMPORTED_MODULE_4__.Content, null,\n                        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_PostsSection_PostsSection__WEBPACK_IMPORTED_MODULE_10__.PostsSection, null,\n                            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Routes, null,\n                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: '/:post', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_CardsList__WEBPACK_IMPORTED_MODULE_7__.CardList, null) },\n                                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: ':subreddit/comments/:postId', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_shared_CardsList_Card_CardModal__WEBPACK_IMPORTED_MODULE_9__.CardModal, null) })),\n                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: '*', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_errorBanners_Error__WEBPACK_IMPORTED_MODULE_6__.Error, { massage: 'ERROR 404: page not found' }) }),\n                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: '/', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Navigate, { to: '/best' }) }),\n                                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, { path: '/auth', element: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Navigate, { to: '/best' }) })))))))));\n}\nconst App = (0,react_hot_loader_root__WEBPACK_IMPORTED_MODULE_5__.hot)(() => react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AppComponent, null));\n\n\n//# sourceURL=webpack://new-reddit/./src/App.tsx?");

/***/ }),

/***/ "./src/Loader/RedditLoader/RedditLoader.tsx":
/*!**************************************************!*\
  !*** ./src/Loader/RedditLoader/RedditLoader.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RedditLoader: () => (/* binding */ RedditLoader)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _redditLoader_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redditLoader.css */ \"./src/Loader/RedditLoader/redditLoader.css\");\n\n\nfunction RedditLoader({ className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: `${_redditLoader_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loader}${className ? ' ' + className : ''}` },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { xmlns: \"http://www.w3.org/2000/svg\", viewBox: \"0 0 216 216\", xmlnsXlink: \"http://www.w3.org/1999/xlink\", xmlSpace: \"preserve\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"defs\", null,\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"linearGradient\", { id: \"orangeredGradient\", gradientTransform: \"rotate(90)\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"0%\", stopColor: \"#FE7B0E\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"100%\", stopColor: \"#EF0A22\" }))),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"defs\", null,\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient\", cx: \"169.75\", cy: \"92.19\", fx: \"169.75\", fy: \"92.19\", r: \"50.98\", gradientTransform: \"translate(0 11.64) scale(1 .87)\", gradientUnits: \"userSpaceOnUse\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"0\", stopColor: \"#feffff\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".4\", stopColor: \"#feffff\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".51\", stopColor: \"#f9fcfc\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".62\", stopColor: \"#edf3f5\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".7\", stopColor: \"#dee9ec\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".72\", stopColor: \"#d8e4e8\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".76\", stopColor: \"#ccd8df\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".8\", stopColor: \"#c8d5dd\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".83\", stopColor: \"#ccd6de\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".85\", stopColor: \"#d8dbe2\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".88\", stopColor: \"#ede3e9\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".9\", stopColor: \"#ffebef\" })),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-2\", cx: \"47.31\", fx: \"47.31\", r: \"50.98\", xlinkHref: \"#snoo-radial-gragient\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-3\", cx: \"109.61\", cy: \"85.59\", fx: \"109.61\", fy: \"85.59\", r: \"153.78\", gradientTransform: \"translate(0 25.56) scale(1 .7)\", xlinkHref: \"#snoo-radial-gragient\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-4\", cx: \"-6.01\", cy: \"64.68\", fx: \"-6.01\", fy: \"64.68\", r: \"12.85\", gradientTransform: \"translate(81.08 27.26) scale(1.07 1.55)\", gradientUnits: \"userSpaceOnUse\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"0\", stopColor: \"#f60\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".5\", stopColor: \"#ff4500\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".7\", stopColor: \"#fc4301\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".82\", stopColor: \"#f43f07\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".92\", stopColor: \"#e53812\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"1\", stopColor: \"#d4301f\" })),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-5\", cx: \"-73.55\", cy: \"64.68\", fx: \"-73.55\", fy: \"64.68\", r: \"12.85\", gradientTransform: \"translate(62.87 27.26) rotate(-180) scale(1.07 -1.55)\", xlinkHref: \"#snoo-radial-gragient-4\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-6\", cx: \"107.93\", cy: \"166.96\", fx: \"107.93\", fy: \"166.96\", r: \"45.3\", gradientTransform: \"translate(0 57.4) scale(1 .66)\", gradientUnits: \"userSpaceOnUse\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"0\", stopColor: \"#172e35\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".29\", stopColor: \"#0e1c21\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".73\", stopColor: \"#030708\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"1\", stopColor: \"#000\" })),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-7\", cx: \"147.88\", cy: \"32.94\", fx: \"147.88\", fy: \"32.94\", r: \"39.77\", gradientTransform: \"translate(0 .54) scale(1 .98)\", xlinkHref: \"#snoo-radial-gragient\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-8\", cx: \"131.31\", cy: \"73.08\", fx: \"131.31\", fy: \"73.08\", r: \"32.6\", gradientUnits: \"userSpaceOnUse\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".48\", stopColor: \"#7a9299\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".67\", stopColor: \"#172e35\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".75\", stopColor: \"#000\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".82\", stopColor: \"#172e35\" }))),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"#ff4500\", d: \"m108,0h0C48.35,0,0,48.35,0,108h0c0,29.82,12.09,56.82,31.63,76.37l-20.57,20.57c-4.08,4.08-1.19,11.06,4.58,11.06h92.36s0,0,0,0c59.65,0,108-48.35,108-108h0C216,48.35,167.65,0,108,0Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { fill: \"url(#snoo-radial-gragient)\", cx: \"169.22\", cy: \"106.98\", r: \"25.22\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { fill: \"url(#snoo-radial-gragient-2)\", cx: \"46.78\", cy: \"106.98\", r: \"25.22\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ellipse\", { fill: \"url(#snoo-radial-gragient-3)\", cx: \"108.06\", cy: \"128.64\", rx: \"72\", ry: \"54\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"url(#snoo-radial-gragient-4)\", d: \"m86.78,123.48c-.42,9.08-6.49,12.38-13.56,12.38s-12.46-4.93-12.04-14.01c.42-9.08,6.49-15.02,13.56-15.02s12.46,7.58,12.04,16.66Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"url(#snoo-radial-gragient-5)\", d: \"m129.35,123.48c.42,9.08,6.49,12.38,13.56,12.38s12.46-4.93,12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46,7.58-12.04,16.66Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ellipse\", { fill: \"#ffc49c\", cx: \"79.63\", cy: \"116.37\", rx: \"2.8\", ry: \"3.05\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ellipse\", { fill: \"#ffc49c\", cx: \"146.21\", cy: \"116.37\", rx: \"2.8\", ry: \"3.05\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"url(#snoo-radial-gragient-6)\", d: \"m108.06,142.92c-8.76,0-17.16.43-24.92,1.22-1.33.13-2.17,1.51-1.65,2.74,4.35,10.39,14.61,17.69,26.57,17.69s22.23-7.3,26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { fill: \"url(#snoo-radial-gragient-7)\", cx: \"147.49\", cy: \"49.43\", r: \"17.87\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"url(#snoo-radial-gragient-8)\", d: \"m107.8,76.92c-2.14,0-3.87-.89-3.87-2.27,0-16.01,13.03-29.04,29.04-29.04,2.14,0,3.87,1.73,3.87,3.87s-1.73,3.87-3.87,3.87c-11.74,0-21.29,9.55-21.29,21.29,0,1.38-1.73,2.27-3.87,2.27Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"#842123\", d: \"m62.82,122.65c.39-8.56,6.08-14.16,12.69-14.16,6.26,0,11.1,6.39,11.28,14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14,6.05-13.56,15.2c-.42,9.15,4.97,13.83,12.04,13.83.17,0,.35,0,.52,0-6.44-.16-11.3-4.79-10.91-13.2Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"#842123\", d: \"m153.3,122.65c-.39-8.56-6.08-14.16-12.69-14.16-6.26,0-11.1,6.39-11.28,14.33-.17-8.88,5.13-15.99,12.05-15.99,7.07,0,13.14,6.05,13.56,15.2.42,9.15-4.97,13.83-12.04,13.83-.17,0-.35,0-.52,0,6.44-.16,11.3-4.79,10.91-13.2Z\" }))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/Loader/RedditLoader/RedditLoader.tsx?");

/***/ }),

/***/ "./src/Loader/RedditLoader/index.ts":
/*!******************************************!*\
  !*** ./src/Loader/RedditLoader/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RedditLoader: () => (/* reexport safe */ _RedditLoader__WEBPACK_IMPORTED_MODULE_0__.RedditLoader)\n/* harmony export */ });\n/* harmony import */ var _RedditLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedditLoader */ \"./src/Loader/RedditLoader/RedditLoader.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/Loader/RedditLoader/index.ts?");

/***/ }),

/***/ "./src/context/CardContext.ts":
/*!************************************!*\
  !*** ./src/context/CardContext.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cardContext: () => (/* binding */ cardContext)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst cardContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({\n    postId: '',\n    anchorName: '',\n    postSubreddit: '',\n    karmaNumber: 0,\n    postTitle: '',\n    postUrl: '',\n    createdTime: 0,\n    numberComments: 0,\n    isLast: false,\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/context/CardContext.ts?");

/***/ }),

/***/ "./src/context/CardListContext.tsx":
/*!*****************************************!*\
  !*** ./src/context/CardListContext.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardListContext: () => (/* binding */ CardListContext),\n/* harmony export */   CardListContextProvider: () => (/* binding */ CardListContextProvider)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst CardListContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});\nfunction CardListContextProvider({ children }) {\n    const rowHeights = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});\n    const refCardList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({});\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(CardListContext.Provider, { value: { rowHeights, refCardList } }, children));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/context/CardListContext.tsx?");

/***/ }),

/***/ "./src/errorBanners/Error.tsx":
/*!************************************!*\
  !*** ./src/errorBanners/Error.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Error: () => (/* binding */ Error)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _error_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.css */ \"./src/errorBanners/error.css\");\n/* harmony import */ var _img_errorReddit_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/errorReddit.png */ \"./src/img/errorReddit.png\");\n\n\n\nfunction Error(massage) {\n    console.log(massage);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { role: \"alert\", className: _error_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _error_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].container },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { className: _error_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].image, src: _img_errorReddit_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"], alt: \"Error\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _error_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].wrapper },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: _error_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].descr }, \"Something went wrong...\"),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: _error_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].message }, massage.massage)))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/errorBanners/Error.tsx?");

/***/ }),

/***/ "./src/hooks/useAdaptiveForm.ts":
/*!**************************************!*\
  !*** ./src/hooks/useAdaptiveForm.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useAdaptiveForm: () => (/* binding */ useAdaptiveForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useAdaptiveForm(ref) {\n    const [isWidth, setIsWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        let isUnmount = false;\n        function handleResizeForm() {\n            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;\n            if (ref.current && !isUnmount) {\n                setIsWidth({\n                    maxWidth800: ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) >= 800 ? true : false,\n                    maxWidth753: ((_b = ref.current) === null || _b === void 0 ? void 0 : _b.offsetWidth) >= 753 ? true : false,\n                    maxWidth706: ((_c = ref.current) === null || _c === void 0 ? void 0 : _c.offsetWidth) >= 706 ? true : false,\n                    maxWidth659: ((_d = ref.current) === null || _d === void 0 ? void 0 : _d.offsetWidth) >= 659 ? true : false,\n                    maxWidth612: ((_e = ref.current) === null || _e === void 0 ? void 0 : _e.offsetWidth) >= 612 ? true : false,\n                    maxWidth565: ((_f = ref.current) === null || _f === void 0 ? void 0 : _f.offsetWidth) >= 565 ? true : false,\n                    maxWidth518: ((_g = ref.current) === null || _g === void 0 ? void 0 : _g.offsetWidth) >= 518 ? true : false,\n                    maxWidth471: ((_h = ref.current) === null || _h === void 0 ? void 0 : _h.offsetWidth) >= 471 ? true : false,\n                    maxWidth424: ((_j = ref.current) === null || _j === void 0 ? void 0 : _j.offsetWidth) >= 424 ? true : false,\n                    maxWidth377: ((_k = ref.current) === null || _k === void 0 ? void 0 : _k.offsetWidth) >= 377 ? true : false,\n                    maxWidth330: ((_l = ref.current) === null || _l === void 0 ? void 0 : _l.offsetWidth) >= 330 ? true : false,\n                    maxWidth295: ((_m = ref.current) === null || _m === void 0 ? void 0 : _m.offsetWidth) >= 295 ? true : false,\n                    maxWidth200: ((_o = ref.current) === null || _o === void 0 ? void 0 : _o.offsetWidth) >= 200 ? true : false,\n                });\n            }\n        }\n        handleResizeForm();\n        window.addEventListener('resize', handleResizeForm);\n        return () => {\n            window.removeEventListener('resize', handleResizeForm);\n            isUnmount = true;\n        };\n    }, []);\n    return [isWidth];\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useAdaptiveForm.ts?");

/***/ }),

/***/ "./src/hooks/useCommentsPostData.ts":
/*!******************************************!*\
  !*** ./src/hooks/useCommentsPostData.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useModalCommentsData: () => (/* binding */ useModalCommentsData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _storeRedux_comments_commentsAsyncThunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storeRedux/comments/commentsAsyncThunk */ \"./src/storeRedux/comments/commentsAsyncThunk.ts\");\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n\n\n\n\nfunction useModalCommentsData(postSubreddit, postId) {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        dispatch((0,_storeRedux_comments_commentsAsyncThunk__WEBPACK_IMPORTED_MODULE_2__.commentsAsyncThunk)(postSubreddit, postId));\n    }, []);\n    const commentsList = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_3__.selectComments);\n    const modalData = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_3__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_3__.selectCardModalData);\n    return { commentsList, modalData };\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useCommentsPostData.ts?");

/***/ }),

/***/ "./src/hooks/useCoords.ts":
/*!********************************!*\
  !*** ./src/hooks/useCoords.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCoords: () => (/* binding */ useCoords)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useCoords(ref, isOpen) {\n    const [coords, setCoords] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const getCoords = () => {\n        if (ref.current) {\n            return {\n                left: ref.current.offsetLeft,\n                top: ref.current.offsetTop + ref.current.offsetHeight,\n            };\n        }\n        return null;\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        if (!isOpen)\n            return;\n        setCoords(getCoords());\n    }, [isOpen]);\n    return [coords];\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useCoords.ts?");

/***/ }),

/***/ "./src/hooks/useCustomMatchMedia.ts":
/*!******************************************!*\
  !*** ./src/hooks/useCustomMatchMedia.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCustomMatchMedia: () => (/* binding */ useCustomMatchMedia)\n/* harmony export */ });\n/* harmony import */ var use_match_media_hook__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! use-match-media-hook */ \"use-match-media-hook\");\n/* harmony import */ var use_match_media_hook__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(use_match_media_hook__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useCustomMatchMedia() {\n    const queries = [\n        '(max-width: 1023px)',\n        '(min-width: 1024px)',\n        '(max-width: 411px)'\n    ];\n    const [mobile, desktop, mobile411] = use_match_media_hook__WEBPACK_IMPORTED_MODULE_0___default()(queries);\n    return {\n        mobile: mobile,\n        desktop: desktop,\n        mobile411: mobile411\n    };\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useCustomMatchMedia.ts?");

/***/ }),

/***/ "./src/hooks/useDarkMode.ts":
/*!**********************************!*\
  !*** ./src/hooks/useDarkMode.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDarkMode: () => (/* binding */ useDarkMode)\n/* harmony export */ });\nfunction useDarkMode(isDark) {\n    const page = document.body;\n    isDark\n        ? page.classList.add('isDark')\n        : page.classList.remove('isDark');\n    !page.classList.length && page.removeAttribute('class');\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useDarkMode.ts?");

/***/ }),

/***/ "./src/hooks/useModalCloser.ts":
/*!*************************************!*\
  !*** ./src/hooks/useModalCloser.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useModalCloser: () => (/* binding */ useModalCloser)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useModalCloser({ onClose, ref, ref2, timeDelay, noTouch }) {\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        let isUnmount = false;\n        function handleClick(event) {\n            var _a, _b;\n            if (!isUnmount &&\n                event.target instanceof Node &&\n                !((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) &&\n                !((_b = ref2 === null || ref2 === void 0 ? void 0 : ref2.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {\n                setTimeout(() => {\n                    onClose === null || onClose === void 0 ? void 0 : onClose();\n                }, timeDelay);\n            }\n        }\n        document.addEventListener('click', handleClick);\n        !noTouch && document.addEventListener('touchstart', handleClick);\n        return () => {\n            document.removeEventListener('click', handleClick);\n            !noTouch && document.removeEventListener('touchstart', handleClick);\n            isUnmount = true;\n        };\n    }, []);\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useModalCloser.ts?");

/***/ }),

/***/ "./src/hooks/useMoreComments.ts":
/*!**************************************!*\
  !*** ./src/hooks/useMoreComments.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useMoreComments: () => (/* binding */ useMoreComments)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n\nlet count = 0;\nfunction useMoreComments({ commentsData, postId }) {\n    const [moreComments, setMoreCommentsData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        let isUnmount = false;\n        const timer = setTimeout(() => {\n            axios__WEBPACK_IMPORTED_MODULE_1___default().get(`http://oauth.reddit.com/api/morechildren?link_id=t3_${postId}&children=${commentsData}&api_type=json`)\n                .then((response) => {\n                if (!isUnmount && response.data.json.data) {\n                    const comments = response.data.json.data.things;\n                    setMoreCommentsData(comments.filter((commentItem) => commentItem.data.contentHTML &&\n                        commentItem.data.contentHTML !== '[удалено]' &&\n                        commentItem.data.contentHTML !== '[deleted]')\n                        .map((commentItem) => {\n                        const comment = commentItem.data;\n                        const indexStartName = comment.content\n                            .indexOf('data-author=\"') + 13;\n                        const indexEndName = comment.content\n                            .substring(indexStartName)\n                            .indexOf('\"') + indexStartName;\n                        const authorName = comment.content\n                            .substring(indexStartName, indexEndName);\n                        const indexStartTime = comment.content\n                            .indexOf('live-timestamp') + 19;\n                        const indexEndTime = comment.content\n                            .substring(indexStartTime)\n                            .indexOf('&') + indexStartTime;\n                        const createdAt = comment.content\n                            .substring(indexStartTime, indexEndTime)\n                            .trim()\n                            .replace('мин назад', 'min. ago')\n                            .replace('ч назад', 'hr. ago');\n                        const indexStartScore = comment.content\n                            .indexOf('\"score unvoted\" title=\"') + 23;\n                        const indexEndScore = comment.content\n                            .substring(indexStartScore)\n                            .indexOf('\"') + indexStartScore;\n                        const score = comment.content\n                            .substring(indexStartScore, indexEndScore);\n                        return {\n                            postId: postId,\n                            commentId: comment.id,\n                            authorName: authorName,\n                            createdTime: createdAt,\n                            commentText: comment.contentText,\n                            commentHtml: comment.contentHTML,\n                            karmaCounter: score,\n                        };\n                    }));\n                }\n            })\n                .catch(console.log);\n        }, count++ * 300);\n        return () => {\n            clearTimeout(timer);\n            isUnmount = true;\n            count = 0;\n        };\n    }, [commentsData]);\n    return [moreComments];\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useMoreComments.ts?");

/***/ }),

/***/ "./src/hooks/usePostsData.ts":
/*!***********************************!*\
  !*** ./src/hooks/usePostsData.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useScrollPostsData: () => (/* binding */ useScrollPostsData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _storeRedux_posts_getPostsAsyncThunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storeRedux/posts/getPostsAsyncThunk */ \"./src/storeRedux/posts/getPostsAsyncThunk.ts\");\n\n\n\nfunction useScrollPostsData() {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const refEndingOfList = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        const observer = new IntersectionObserver((enrties) => {\n            if (enrties[0].isIntersecting) {\n                dispatch((0,_storeRedux_posts_getPostsAsyncThunk__WEBPACK_IMPORTED_MODULE_2__.getPostsAsyncThunk)());\n            }\n        }, { rootMargin: '100px' });\n        if (refEndingOfList.current) {\n            observer.observe(refEndingOfList.current);\n        }\n        return () => {\n            if (refEndingOfList.current) {\n                observer.unobserve(refEndingOfList.current);\n            }\n        };\n    }, [refEndingOfList.current]);\n    return [refEndingOfList];\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/usePostsData.ts?");

/***/ }),

/***/ "./src/hooks/useResizeCloser.ts":
/*!**************************************!*\
  !*** ./src/hooks/useResizeCloser.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useResizeCloser: () => (/* binding */ useResizeCloser)\n/* harmony export */ });\nfunction useResizeCloser(onClose) {\n    function handleResize() {\n        onClose();\n    }\n    window.addEventListener('resize', handleResize);\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useResizeCloser.ts?");

/***/ }),

/***/ "./src/hooks/useStopScroll.ts":
/*!************************************!*\
  !*** ./src/hooks/useStopScroll.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   setStopScroll: () => (/* binding */ setStopScroll)\n/* harmony export */ });\nfunction setStopScroll(props) {\n    const page = document.body;\n    props\n        ? page.style.overflow = 'hidden'\n        : page.style.overflow = '';\n    !page.style.length && page.removeAttribute('style');\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useStopScroll.ts?");

/***/ }),

/***/ "./src/hooks/useUnmount.ts":
/*!*********************************!*\
  !*** ./src/hooks/useUnmount.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUnmount: () => (/* binding */ useUnmount)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useUnmount() {\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        setMounted(true);\n    }, []);\n    return [mounted];\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useUnmount.ts?");

/***/ }),

/***/ "./src/hooks/useUserAvatar.ts":
/*!************************************!*\
  !*** ./src/hooks/useUserAvatar.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUserAvatar: () => (/* binding */ useUserAvatar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nlet count = 0;\nfunction useUserAvatar(userName) {\n    const [snoovatar, setSnoovatarData] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        if (!userName || userName === '[deleted]' || userName.includes(' '))\n            return;\n        let isUnmount = false;\n        let timer = setTimeout(() => __awaiter(this, void 0, void 0, function* () {\n            try {\n                const { data: { data: { snoovatar_img } } } = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get(`https://www.reddit.com/user/${userName}/about.json`);\n                if (!isUnmount) {\n                    setSnoovatarData(snoovatar_img);\n                }\n            }\n            catch (error) {\n                console.log(error);\n            }\n        }), count++ * 200);\n        return () => {\n            clearTimeout(timer);\n            isUnmount = true;\n            count = 0;\n        };\n    }, []);\n    return [snoovatar];\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useUserAvatar.ts?");

/***/ }),

/***/ "./src/hooks/useUserData.ts":
/*!**********************************!*\
  !*** ./src/hooks/useUserData.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useUserData: () => (/* binding */ useUserData)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _storeRedux_token_saveTokenAsyncThunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../storeRedux/token/saveTokenAsyncThunk */ \"./src/storeRedux/token/saveTokenAsyncThunk.ts\");\n/* harmony import */ var _storeRedux_user_userReguestAsyncThunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../storeRedux/user/userReguestAsyncThunk */ \"./src/storeRedux/user/userReguestAsyncThunk.ts\");\n\n\n\n\nfunction useUserData() {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const { userBlock, redditToken } = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((state) => state);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n        dispatch((0,_storeRedux_token_saveTokenAsyncThunk__WEBPACK_IMPORTED_MODULE_2__.saveTokenAsyncThunk)());\n        dispatch((0,_storeRedux_user_userReguestAsyncThunk__WEBPACK_IMPORTED_MODULE_3__.userReguestAsyncThunk)());\n    }, [redditToken]);\n    return userBlock;\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/hooks/useUserData.ts?");

/***/ }),

/***/ "./src/server/indexTemplate.js":
/*!*************************************!*\
  !*** ./src/server/indexTemplate.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   indexTemplate: () => (/* binding */ indexTemplate)\n/* harmony export */ });\nconst indexTemplate = (content) => `\r\n    <!DOCTYPE html>\r\n    <html lang=\"en\">\r\n        <head>\r\n            <meta charset=\"UTF-8\">\r\n                <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">                                  \r\n                    <title>Reddit Idzanamix</title>\r\n                    <base href=\"/\">\r\n                    <link href=\"static/style.css\" rel=\"stylesheet\" />\r\n                    <link rel=\"icon\" href=\"https://www.redditstatic.com/accountmanager/favicon/safari-pinned-tab.svg\" type=\"image/x-icon\">\r\n                    <script src=\"static/client.js\" type=\"application/javascript\"></script>        \r\n                </head>\r\n                <body>\r\n                    <div id=\"react_root\">${content}</div>\r\n                    <div id=\"modal_root\"></div>\r\n                </body>\r\n            </html>\r\n            `;\n\n\n//# sourceURL=webpack://new-reddit/./src/server/indexTemplate.js?");

/***/ }),

/***/ "./src/server/server.js":
/*!******************************!*\
  !*** ./src/server/server.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App */ \"./src/App.tsx\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _indexTemplate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./indexTemplate */ \"./src/server/indexTemplate.js\");\n\n\n\n\n\n\nconst PORT = 80;\nconst app = express__WEBPACK_IMPORTED_MODULE_2___default()();\nconst SITE_URL = 'http://localhost';\nconst IS_DEV = \"development\" !== 'production';\nif (!IS_DEV) {\n    app.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\n    app.use(helmet__WEBPACK_IMPORTED_MODULE_0___default()({\n        contentSecurityPolicy: false\n    }));\n}\napp.use('/static', express__WEBPACK_IMPORTED_MODULE_2___default()[\"static\"]('./dist/client'));\napp.get('*', (request, response) => {\n    response.send((0,_indexTemplate__WEBPACK_IMPORTED_MODULE_5__.indexTemplate)(react_dom_server__WEBPACK_IMPORTED_MODULE_4___default().renderToString((0,_App__WEBPACK_IMPORTED_MODULE_1__.App)())));\n});\napp.listen(PORT, () => {\n    console.log(`Server started on ${SITE_URL}:${PORT}`);\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/server/server.js?");

/***/ }),

/***/ "./src/shared/CardsList/BackToTopButton/BackToTopButton.tsx":
/*!******************************************************************!*\
  !*** ./src/shared/CardsList/BackToTopButton/BackToTopButton.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BackToTopButton: () => (/* binding */ BackToTopButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _backToTopButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./backToTopButton.css */ \"./src/shared/CardsList/BackToTopButton/backToTopButton.css\");\n\n\nconst BackToTopButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ onClick, className }, ref) => {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { onClick: onClick, className: `${_backToTopButton_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button}${className ? ' ' + className : ''}`, ref: ref }, \"Back to Top\"));\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/BackToTopButton/BackToTopButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/BackToTopButton/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/BackToTopButton/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BackToTopButton: () => (/* reexport safe */ _BackToTopButton__WEBPACK_IMPORTED_MODULE_0__.BackToTopButton)\n/* harmony export */ });\n/* harmony import */ var _BackToTopButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BackToTopButton */ \"./src/shared/CardsList/BackToTopButton/BackToTopButton.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/BackToTopButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardList.tsx":
/*!*******************************************!*\
  !*** ./src/shared/CardsList/CardList.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardList: () => (/* binding */ CardList)\n/* harmony export */ });\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n/* harmony import */ var _storeRedux_posts_getPostsAsyncThunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../storeRedux/posts/getPostsAsyncThunk */ \"./src/storeRedux/posts/getPostsAsyncThunk.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n/* harmony import */ var _context_CardListContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/CardListContext */ \"./src/context/CardListContext.tsx\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-window */ \"react-window\");\n/* harmony import */ var react_window__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_window__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-virtualized-auto-sizer */ \"react-virtualized-auto-sizer\");\n/* harmony import */ var react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _BackToTopButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BackToTopButton */ \"./src/shared/CardsList/BackToTopButton/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _CardRow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./CardRow */ \"./src/shared/CardsList/CardRow/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\nconst CardList = () => {\n    const { rowHeights, refCardList } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useContext)(_context_CardListContext__WEBPACK_IMPORTED_MODULE_3__.CardListContext);\n    const postsData = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.selectPostsData);\n    const { desktop } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_2__.useCustomMatchMedia)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_9__.useDispatch)();\n    const { post } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.useParams)();\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n        dispatch((0,_storeRedux_posts_getPostsAsyncThunk__WEBPACK_IMPORTED_MODULE_1__.getPostsAsyncThunk)(post));\n    }, [post]);\n    const scrollToTop = () => (refCardList === null || refCardList === void 0 ? void 0 : refCardList.current) && refCardList.current.scrollToItem(0);\n    function getRowHeight(index) {\n        return (rowHeights === null || rowHeights === void 0 ? void 0 : rowHeights.current[index]) + (desktop ? index === 0 ? 35 : 15 : 0) || 155;\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.Outlet, null),\n        react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react_virtualized_auto_sizer__WEBPACK_IMPORTED_MODULE_6___default()), null, ({ height, width }) => (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,\n            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_window__WEBPACK_IMPORTED_MODULE_4__.VariableSizeList, { itemCount: postsData.length, itemSize: getRowHeight, innerElementType: \"ul\", ref: refCardList, height: height, width: width }, _CardRow__WEBPACK_IMPORTED_MODULE_10__.CardRow),\n            desktop && react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_BackToTopButton__WEBPACK_IMPORTED_MODULE_8__.BackToTopButton, { onClick: scrollToTop }))))));\n};\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardListFooter/CardListFooter.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/CardsList/CardListFooter/CardListFooter.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardListFooter: () => (/* binding */ CardListFooter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardListFooter.css */ \"./src/shared/CardsList/CardListFooter/cardListFooter.css\");\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _Header_LogoLink_LogoLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Header/LogoLink/LogoLink */ \"./src/shared/Header/LogoLink/LogoLink.tsx\");\n/* harmony import */ var _hooks_useAdaptiveForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hooks/useAdaptiveForm */ \"./src/hooks/useAdaptiveForm.ts\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\n\n\n\n\n\n\nfunction CardListFooter() {\n    const refFooter = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const [isWidth] = (0,_hooks_useAdaptiveForm__WEBPACK_IMPORTED_MODULE_4__.useAdaptiveForm)(refFooter);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"footer\", { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer, ref: refFooter },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].left },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Header_LogoLink_LogoLink__WEBPACK_IMPORTED_MODULE_3__.LogoLink, null),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.Text, { color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.EColor.gray99, size: 12, className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].text }, \"\\u00A9 2024 created by Idzanamix, inspired by reddit.com\")),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].middle },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].link, href: \"https://github.com/Idzanamix\", target: '_blank' },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconGithub, { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].github }),\n                isWidth.maxWidth565 &&\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.Text, { color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.EColor.whiteGray, size: 12 }, \"GitHub\")),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].link, href: \"https://gitlab.skillbox.ru/igor_ponomarenko\", target: '_blank' },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconGitLab, { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].gitlab }),\n                isWidth.maxWidth565 &&\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.Text, { color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.EColor.whiteGray, size: 12 }, \"GitLab\"))),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].right },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { href: 'https://t.me/idzanamix', className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].link, target: '_blank' },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconTelegram, { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].telegram }),\n                isWidth.maxWidth565 &&\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.Text, { color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.EColor.whiteGray, size: 12 }, \"Telegram\")),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].link, href: \"mailto:shmellis@yandex.ru\" },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconEmail, { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].email }),\n                isWidth.maxWidth565 &&\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.Text, { color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.EColor.whiteGray, size: 12 }, \"Email\")),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].link, href: \"https://vk.com/idzanamix\", target: '_blank' },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconVk, { className: _cardListFooter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].vk }),\n                isWidth.maxWidth565 &&\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.Text, { color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.EColor.whiteGray, size: 12 }, \"Vk\")))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardListFooter/CardListFooter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardListFooter/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/CardListFooter/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardListFooter: () => (/* reexport safe */ _CardListFooter__WEBPACK_IMPORTED_MODULE_0__.CardListFooter)\n/* harmony export */ });\n/* harmony import */ var _CardListFooter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardListFooter */ \"./src/shared/CardsList/CardListFooter/CardListFooter.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardListFooter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/CardRow/CardRow.tsx":
/*!**************************************************!*\
  !*** ./src/shared/CardsList/CardRow/CardRow.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardRow: () => (/* binding */ CardRow)\n/* harmony export */ });\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n/* harmony import */ var _context_CardListContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../context/CardListContext */ \"./src/context/CardListContext.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Card_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Card/Card */ \"./src/shared/CardsList/Card/Card.tsx\");\n\n\n\n\nfunction CardRow({ index, style }) {\n    const { rowHeights, refCardList } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_CardListContext__WEBPACK_IMPORTED_MODULE_1__.CardListContext);\n    const refCardItem = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const postsData = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.selectPostsData);\n    function getHeightAfterOnLoading() {\n        if (refCardItem.current) {\n            refCardList.current.resetAfterIndex(0);\n            rowHeights.current = Object.assign(Object.assign({}, rowHeights.current), { [index]: refCardItem.current.clientHeight });\n        }\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Card_Card__WEBPACK_IMPORTED_MODULE_3__.Card, { onLoading: getHeightAfterOnLoading, cardItemData: postsData[index], ref: refCardItem, style: style }));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardRow/CardRow.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/CardRow/index.ts":
/*!***********************************************!*\
  !*** ./src/shared/CardsList/CardRow/index.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardRow: () => (/* reexport safe */ _CardRow__WEBPACK_IMPORTED_MODULE_0__.CardRow)\n/* harmony export */ });\n/* harmony import */ var _CardRow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardRow */ \"./src/shared/CardsList/CardRow/CardRow.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/CardRow/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Card.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/Card/Card.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Card: () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _card_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.css */ \"./src/shared/CardsList/Card/card.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _CardAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CardAnchor */ \"./src/shared/CardsList/Card/CardAnchor/index.ts\");\n/* harmony import */ var _CardLoader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardLoader */ \"./src/shared/CardsList/Card/CardLoader/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MenuButton */ \"./src/shared/CardsList/Card/MenuButton/index.ts\");\n/* harmony import */ var _CardControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/Card/CardControls/index.ts\");\n/* harmony import */ var _CardListFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CardListFooter */ \"./src/shared/CardsList/CardListFooter/index.ts\");\n/* harmony import */ var _CardTextContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CardTextContent */ \"./src/shared/CardsList/Card/CardTextContent/index.ts\");\n/* harmony import */ var _CardVisual_CardVisual__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./CardVisual/CardVisual */ \"./src/shared/CardsList/Card/CardVisual/CardVisual.tsx\");\n/* harmony import */ var _context_CardContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../context/CardContext */ \"./src/context/CardContext.ts\");\n/* harmony import */ var _hooks_usePostsData__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../hooks/usePostsData */ \"./src/hooks/usePostsData.ts\");\n/* harmony import */ var _storeRedux_posts_postIsOpen__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../storeRedux/posts/postIsOpen */ \"./src/storeRedux/posts/postIsOpen.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Card = (0,react__WEBPACK_IMPORTED_MODULE_14__.memo)((0,react__WEBPACK_IMPORTED_MODULE_14__.forwardRef)(({ cardItemData, style, onLoading }, ref) => {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const { anchorName, createdTime, postSubreddit, postId } = cardItemData;\n    const isImageOpen = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_15__.useAppSelector)((0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_15__.selectPostIsOpen)(cardItemData.postId));\n    const { loading, count } = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_15__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_15__.selectPostsBlock);\n    const [refEndingOfList] = (0,_hooks_usePostsData__WEBPACK_IMPORTED_MODULE_11__.useScrollPostsData)();\n    const { mobile } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_13__.useCustomMatchMedia)();\n    const handleClick = () => dispatch((0,_storeRedux_posts_postIsOpen__WEBPACK_IMPORTED_MODULE_12__.setImageIsOpen)({ isImageOpen: !isImageOpen, postId: cardItemData.postId }));\n    (0,react__WEBPACK_IMPORTED_MODULE_14__.useEffect)(() => {\n        if (!isImageOpen) {\n            onLoading();\n        }\n    }, [isImageOpen]);\n    return (react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_context_CardContext__WEBPACK_IMPORTED_MODULE_10__.cardContext.Provider, { value: cardItemData },\n        react__WEBPACK_IMPORTED_MODULE_14___default().createElement(\"li\", { className: _card_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].card, style: style }, cardItemData.isLast\n            ?\n                react__WEBPACK_IMPORTED_MODULE_14___default().createElement((react__WEBPACK_IMPORTED_MODULE_14___default().Fragment), null,\n                    react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_CardLoader__WEBPACK_IMPORTED_MODULE_3__.CardLoader, { ref: refEndingOfList, loading: loading, count: count }),\n                    react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_CardListFooter__WEBPACK_IMPORTED_MODULE_7__.CardListFooter, null))\n            :\n                react__WEBPACK_IMPORTED_MODULE_14___default().createElement(\"article\", { className: _card_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].body, onLoad: onLoading, ref: ref },\n                    react__WEBPACK_IMPORTED_MODULE_14___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Link, { to: `${postSubreddit}/comments/${postId}`, className: _card_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].link }),\n                    react__WEBPACK_IMPORTED_MODULE_14___default().createElement(\"div\", { className: _card_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wrapper },\n                        mobile &&\n                            react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_CardAnchor__WEBPACK_IMPORTED_MODULE_2__.CardAnchor, { anchorName, createdTime }),\n                        react__WEBPACK_IMPORTED_MODULE_14___default().createElement(\"div\", { className: _card_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].content },\n                            react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_CardVisual_CardVisual__WEBPACK_IMPORTED_MODULE_9__.CardVisual, { className: _card_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].preview, onClick: handleClick, props: cardItemData, videoDisabled: true, light: true }),\n                            react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_CardTextContent__WEBPACK_IMPORTED_MODULE_8__.CardTextContent, null),\n                            react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_MenuButton__WEBPACK_IMPORTED_MODULE_5__.MenuButton, null)),\n                        isImageOpen &&\n                            react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_CardVisual_CardVisual__WEBPACK_IMPORTED_MODULE_9__.CardVisual, { className: _card_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].previewIsOpen, props: cardItemData, onLoading: onLoading, videoHeight: mobile ? '70vh' : '550px' })),\n                    react__WEBPACK_IMPORTED_MODULE_14___default().createElement(_CardControls__WEBPACK_IMPORTED_MODULE_6__.CardControls, null)))));\n}));\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/Card.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardAnchor/CardAnchor.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardAnchor/CardAnchor.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardAnchor: () => (/* binding */ CardAnchor)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ardAnchor_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./сardAnchor.css */ \"./src/shared/CardsList/Card/CardAnchor/сardAnchor.css\");\n/* harmony import */ var _CardTextContent_CreatedAd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardTextContent/CreatedAd */ \"./src/shared/CardsList/Card/CardTextContent/CreatedAd/index.ts\");\n/* harmony import */ var _CardTextContent_UserLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../CardTextContent/UserLink */ \"./src/shared/CardsList/Card/CardTextContent/UserLink/index.ts\");\n\n\n\n\nfunction CardAnchor({ anchorName, createdTime }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _ardAnchor_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].metaData },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardTextContent_UserLink__WEBPACK_IMPORTED_MODULE_3__.UserLink, { anchorName: anchorName }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardTextContent_CreatedAd__WEBPACK_IMPORTED_MODULE_2__.CreatedAd, { createdTime: createdTime })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardAnchor/CardAnchor.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardAnchor/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/CardAnchor/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardAnchor: () => (/* reexport safe */ _CardAnchor__WEBPACK_IMPORTED_MODULE_0__.CardAnchor)\n/* harmony export */ });\n/* harmony import */ var _CardAnchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardAnchor */ \"./src/shared/CardsList/Card/CardAnchor/CardAnchor.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardAnchor/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx":
/*!********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Actions: () => (/* binding */ Actions)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _actions_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions.css */ \"./src/shared/CardsList/Card/CardControls/Actions/actions.css\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\n\n\n\nfunction Actions() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _actions_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].actions },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: _actions_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sharebutton },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconShareMobile, null))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/Actions/index.ts":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/Actions/index.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Actions: () => (/* reexport safe */ _Actions__WEBPACK_IMPORTED_MODULE_0__.Actions)\n/* harmony export */ });\n/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/Actions/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CardControls.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CardControls.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardControls: () => (/* binding */ CardControls)\n/* harmony export */ });\n/* harmony import */ var _Actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Actions */ \"./src/shared/CardsList/Card/CardControls/Actions/index.ts\");\n/* harmony import */ var _cardcontrols_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardcontrols.css */ \"./src/shared/CardsList/Card/CardControls/cardcontrols.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _KarmaCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts\");\n/* harmony import */ var _CommentsButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts\");\n/* harmony import */ var _context_CardContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../context/CardContext */ \"./src/context/CardContext.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n\n\n\n\n\n\n\nfunction CardControls() {\n    const { karmaNumber } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_CardContext__WEBPACK_IMPORTED_MODULE_5__.cardContext);\n    const { mobile } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_6__.useCustomMatchMedia)();\n    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: _cardcontrols_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].controls },\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_KarmaCounter__WEBPACK_IMPORTED_MODULE_3__.KarmaCounter, { className: _cardcontrols_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].karmaCounter, carmaNumber: karmaNumber }),\n        mobile &&\n            react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,\n                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CommentsButton__WEBPACK_IMPORTED_MODULE_4__.CommentsButton, { className: _cardcontrols_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commentsButton }),\n                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Actions__WEBPACK_IMPORTED_MODULE_0__.Actions, null))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/CardControls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CommentsButton: () => (/* binding */ CommentsButton)\n/* harmony export */ });\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _commentsbutton_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./commentsbutton.css */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _context_CardContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../context/CardContext */ \"./src/context/CardContext.ts\");\n/* harmony import */ var _utils_ts_shortFormatNumber__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/ts/shortFormatNumber */ \"./src/utils/ts/shortFormatNumber.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n\n\n\n\n\n\n\nfunction CommentsButton({ className }) {\n    const { desktop } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_6__.useCustomMatchMedia)();\n    const { postId, postSubreddit } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_CardContext__WEBPACK_IMPORTED_MODULE_4__.cardContext);\n    function numberComments() {\n        const { numberComments } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_CardContext__WEBPACK_IMPORTED_MODULE_4__.cardContext);\n        return (0,_utils_ts_shortFormatNumber__WEBPACK_IMPORTED_MODULE_5__.shortFormatNumber)(numberComments);\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_0__.Link, { to: `${postSubreddit}/comments/${postId}`, className: `${className ? className + ' ' : ''}${_commentsbutton_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].commentsButton}` },\n        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_3__.IconComments, null),\n        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", { className: _commentsbutton_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].commentsNumber }, numberComments()),\n        desktop &&\n            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", { className: _commentsbutton_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].commentsDescr }, \"Comments\")));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CommentsButton: () => (/* reexport safe */ _CommentsButton__WEBPACK_IMPORTED_MODULE_0__.CommentsButton)\n/* harmony export */ });\n/* harmony import */ var _CommentsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CommentsButton */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   KarmaCounter: () => (/* binding */ KarmaCounter)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _karmacounter_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./karmacounter.css */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _utils_ts_shortFormatNumber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/ts/shortFormatNumber */ \"./src/utils/ts/shortFormatNumber.ts\");\n\n\n\n\nfunction KarmaCounter({ className, carmaNumber, authorName }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: `${className ? className + ' ' : ''}${_karmacounter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].karmaCounter}` },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: _karmacounter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].up },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconTriangle, null)),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: _karmacounter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].karmaValue }, typeof carmaNumber === 'number'\n            ? authorName === 'AutoModerator'\n                ? 'Vote'\n                : (0,_utils_ts_shortFormatNumber__WEBPACK_IMPORTED_MODULE_3__.shortFormatNumber)(carmaNumber)\n            : carmaNumber.includes('=')\n                ? 0\n                : carmaNumber),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: _karmacounter_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].down },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconTriangle, null))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   KarmaCounter: () => (/* reexport safe */ _KarmaCounter__WEBPACK_IMPORTED_MODULE_0__.KarmaCounter)\n/* harmony export */ });\n/* harmony import */ var _KarmaCounter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KarmaCounter */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardControls/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardControls/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardControls: () => (/* reexport safe */ _CardControls__WEBPACK_IMPORTED_MODULE_0__.CardControls)\n/* harmony export */ });\n/* harmony import */ var _CardControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardControls */ \"./src/shared/CardsList/Card/CardControls/CardControls.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardControls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardLoader/CardLoader.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardLoader/CardLoader.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardLoader: () => (/* binding */ CardLoader)\n/* harmony export */ });\n/* harmony import */ var _Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../Loader/RedditLoader */ \"./src/Loader/RedditLoader/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _LoadMoreButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../LoadMoreButton */ \"./src/shared/CardsList/Card/LoadMoreButton/index.ts\");\n/* harmony import */ var _cardLoader_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardLoader.css */ \"./src/shared/CardsList/Card/CardLoader/cardLoader.css\");\n\n\n\n\nconst CardLoader = (0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(({ loading, count }, ref) => {\n    return (loading\n        ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_0__.RedditLoader, { className: _cardLoader_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loader })\n        : count === 2\n            ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_LoadMoreButton__WEBPACK_IMPORTED_MODULE_2__.LoadMoreButton, null)\n            : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", { className: _cardLoader_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].observer, ref: ref, datatype: 'observer' }));\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardLoader/CardLoader.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardLoader/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/CardLoader/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardLoader: () => (/* reexport safe */ _CardLoader__WEBPACK_IMPORTED_MODULE_0__.CardLoader)\n/* harmony export */ });\n/* harmony import */ var _CardLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardLoader */ \"./src/shared/CardsList/Card/CardLoader/CardLoader.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardLoader/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/CardModal.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/CardModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardModal: () => (/* binding */ CardModal)\n/* harmony export */ });\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ \"dompurify\");\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardmodal.css */ \"./src/shared/CardsList/Card/CardModal/cardmodal.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _CardVisual__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardVisual */ \"./src/shared/CardsList/Card/CardVisual/index.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _ModalSortBlock__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ModalSortBlock */ \"./src/shared/CardsList/Card/CardModal/ModalSortBlock/index.ts\");\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _CardTextContent_UserLink__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../CardTextContent/UserLink */ \"./src/shared/CardsList/Card/CardTextContent/UserLink/index.ts\");\n/* harmony import */ var _ModalControlPanel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModalControlPanel */ \"./src/shared/CardsList/Card/CardModal/ModalControlPanel/index.ts\");\n/* harmony import */ var _ModalCommentsForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModalCommentsForm */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/index.ts\");\n/* harmony import */ var _ModalCommentsList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModalCommentsList */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/index.ts\");\n/* harmony import */ var _BackToTopButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../BackToTopButton */ \"./src/shared/CardsList/BackToTopButton/index.ts\");\n/* harmony import */ var _CardTextContent_CreatedAd__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../CardTextContent/CreatedAd */ \"./src/shared/CardsList/Card/CardTextContent/CreatedAd/index.ts\");\n/* harmony import */ var _ModalButtonCloserX__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ModalButtonCloserX */ \"./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/index.ts\");\n/* harmony import */ var _MoreCommentsButton__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./MoreCommentsButton */ \"./src/shared/CardsList/Card/CardModal/MoreCommentsButton/index.ts\");\n/* harmony import */ var _CardControls_KarmaCounter__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../CardControls/KarmaCounter */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts\");\n/* harmony import */ var _Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../../Loader/RedditLoader */ \"./src/Loader/RedditLoader/index.ts\");\n/* harmony import */ var _hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../hooks/useModalCloser */ \"./src/hooks/useModalCloser.ts\");\n/* harmony import */ var _CardTextContent_CardTitlePostLink__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../CardTextContent/CardTitlePostLink */ \"./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/index.ts\");\n/* harmony import */ var _storeRedux_modal_modalSlice__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../storeRedux/modal/modalSlice */ \"./src/storeRedux/modal/modalSlice.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n/* harmony import */ var _hooks_useCommentsPostData__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../../hooks/useCommentsPostData */ \"./src/hooks/useCommentsPostData.ts\");\n/* harmony import */ var _utils_ts_convertRedditTextHtml__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../../utils/ts/convertRedditTextHtml */ \"./src/utils/ts/convertRedditTextHtml.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction CardModal() {\n    const modalRoot = document.querySelector('#modal_root');\n    const { postId, subreddit, post } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useParams)();\n    if (!modalRoot || !subreddit || !postId)\n        return null;\n    const { commentsList: { comments, moreComments, loading }, modalData: { postHint, postThumbnail, postText, karmaNumber, postTitle, postUrl, createdTime, anchorName, postVideoUrl, postHighQualityVideoUrl, numberComments } } = (0,_hooks_useCommentsPostData__WEBPACK_IMPORTED_MODULE_23__.useModalCommentsData)(subreddit, postId);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const refModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const refButtonToTop = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const { desktop } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_22__.useCustomMatchMedia)();\n    const scrollToTop = () => refModal.current && refModal.current.scrollTo({ top: 0 });\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_6__.useNavigate)();\n    const onClose = () => {\n        dispatch((0,_storeRedux_modal_modalSlice__WEBPACK_IMPORTED_MODULE_21__.resetModalData)());\n        navigate(`/${post}`);\n    };\n    (0,_hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_19__.useModalCloser)({\n        onClose: onClose,\n        ref: refModal,\n        ref2: refButtonToTop,\n        timeDelay: 20\n    });\n    return (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)((react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modal },\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_BackToTopButton__WEBPACK_IMPORTED_MODULE_13__.BackToTopButton, { ref: refButtonToTop, className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonBackToTop, onClick: scrollToTop }),\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].container, ref: refModal },\n            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ModalButtonCloserX__WEBPACK_IMPORTED_MODULE_15__.ModalButtonCloserX, { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonCloserX, onClose: onClose }),\n            !postTitle && loading\n                ?\n                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_18__.RedditLoader, { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loader })\n                :\n                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,\n                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header },\n                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CardControls_KarmaCounter__WEBPACK_IMPORTED_MODULE_17__.KarmaCounter, { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].karmaCounter, carmaNumber: karmaNumber }),\n                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].popupHeaderWrapper },\n                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CardTextContent_CardTitlePostLink__WEBPACK_IMPORTED_MODULE_20__.CardTitlePostLink, { postTitle: postTitle, postUrl: postUrl }),\n                                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].popupMediaUser },\n                                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CardTextContent_CreatedAd__WEBPACK_IMPORTED_MODULE_14__.CreatedAd, { createdTime: createdTime }),\n                                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CardTextContent_UserLink__WEBPACK_IMPORTED_MODULE_9__.UserLink, { anchorName: anchorName })))),\n                        postHint !== undefined &&\n                            postThumbnail &&\n                            postThumbnail !== \"self\" &&\n                            postThumbnail !== \"default\" &&\n                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_CardVisual__WEBPACK_IMPORTED_MODULE_5__.CardVisual, { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].preview, props: {\n                                    postThumbnail,\n                                    postVideoUrl,\n                                    postUrl,\n                                    postHighQualityVideoUrl,\n                                    postHint\n                                } }),\n                        postText &&\n                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_8__.Text, { As: \"div\", size: 14, mobileSize: 12, className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].textContent, dangerouslySetInnerHTML: {\n                                    __html: dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize((0,_utils_ts_convertRedditTextHtml__WEBPACK_IMPORTED_MODULE_24__.convertRedditTextHtml)(postText))\n                                } }),\n                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer, id: \"footer_root\" },\n                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ModalControlPanel__WEBPACK_IMPORTED_MODULE_10__.ModalControlPanel, { props: numberComments }),\n                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ModalCommentsForm__WEBPACK_IMPORTED_MODULE_11__.ModalCommentsForm, { autoFocus: desktop ? true : false, commentId: \"modalFormComment\", rootId: \"footer_root\" }),\n                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ModalSortBlock__WEBPACK_IMPORTED_MODULE_7__.ModalSortBlock, null)),\n                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commentsBlock, id: \"comments_root\" },\n                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_ModalCommentsList__WEBPACK_IMPORTED_MODULE_12__.ModalCommentsList, { commentsData: comments, loading: loading }),\n                            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MoreCommentsButton__WEBPACK_IMPORTED_MODULE_16__.MoreCommentsButton, { postId: postId, moreCommentsData: moreComments })))))), modalRoot);\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/CardModal.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/ModalButtonCloserX.tsx":
/*!***************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/ModalButtonCloserX.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalButtonCloserX: () => (/* binding */ ModalButtonCloserX)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\n\n\nfunction ModalButtonCloserX({ onClose, className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: className, onClick: onClose },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__.IconX, null)));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/ModalButtonCloserX.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/index.ts":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalButtonCloserX: () => (/* reexport safe */ _ModalButtonCloserX__WEBPACK_IMPORTED_MODULE_0__.ModalButtonCloserX)\n/* harmony export */ });\n/* harmony import */ var _ModalButtonCloserX__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalButtonCloserX */ \"./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/ModalButtonCloserX.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/MenuFormBtnsDropdown.tsx":
/*!************************************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/MenuFormBtnsDropdown.tsx ***!
  \************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuFormBtnsDropdown: () => (/* binding */ MenuFormBtnsDropdown)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menuFormBtnsDropdown_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuFormBtnsDropdown.css */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/menuFormBtnsDropdown.css\");\n/* harmony import */ var _hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../hooks/useModalCloser */ \"./src/hooks/useModalCloser.ts\");\n/* harmony import */ var _utils_react_GenericList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../utils/react/GenericList */ \"./src/utils/react/GenericList.tsx\");\n/* harmony import */ var _utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../utils/ts/generateRandomIndex */ \"./src/utils/ts/generateRandomIndex.ts\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../hooks/useResizeCloser */ \"./src/hooks/useResizeCloser.ts\");\n\n\n\n\n\n\n\nfunction MenuFormBtnsDropdown({ className, onClose, props, style }) {\n    const $FormBtnsDropdown = [\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth800) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconPicture, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth753) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconFile, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth706) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconDownload, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth659) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconUser, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth612) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconReverse, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth565) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconShareForm, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth518) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconRecord, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth471) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconMessage, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth424) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconPencil, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth377) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconWord, null) },\n        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth330) && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconPdf, null) },\n    ].filter(item => item.item).map(_utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_4__.generateId);\n    (0,_hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_2__.useModalCloser)({ onClose });\n    (0,_hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_6__.useResizeCloser)(onClose);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", { className: _menuFormBtnsDropdown_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list, style: style },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_GenericList__WEBPACK_IMPORTED_MODULE_3__.GenericList, { As: 'button', className: className, list: $FormBtnsDropdown })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/MenuFormBtnsDropdown.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/index.ts":
/*!********************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/index.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuFormBtnsDropdown: () => (/* reexport safe */ _MenuFormBtnsDropdown__WEBPACK_IMPORTED_MODULE_0__.MenuFormBtnsDropdown)\n/* harmony export */ });\n/* harmony import */ var _MenuFormBtnsDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuFormBtnsDropdown */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/MenuFormBtnsDropdown.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormButtonControls.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormButtonControls.tsx ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuFormButtonControls: () => (/* binding */ MenuFormButtonControls)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _MenuFormBtnsDropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuFormBtnsDropdown */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/index.ts\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../hooks/useCoords */ \"./src/hooks/useCoords.ts\");\n\n\n\n\n\nconst MenuFormButtonControls = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(({ className, props, rootId }, ref) => {\n    const buttonsRoot = document.getElementById(rootId);\n    if (!buttonsRoot)\n        return null;\n    const [isBtnsDropdownOpen, setBtnDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [coords] = (0,_hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__.useCoords)(ref, isBtnsDropdownOpen);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: className, onClick: () => setBtnDropdownOpen(true) },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__.IconMenu, null)),\n        isBtnsDropdownOpen &&\n            (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_MenuFormBtnsDropdown__WEBPACK_IMPORTED_MODULE_2__.MenuFormBtnsDropdown, { style: {\n                    left: (coords === null || coords === void 0 ? void 0 : coords.left) + 'px',\n                    top: (coords === null || coords === void 0 ? void 0 : coords.top) + 'px',\n                }, className: className, onClose: () => setBtnDropdownOpen(false), props: props }), buttonsRoot)));\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormButtonControls.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/index.ts":
/*!***********************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/index.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuFormButtonControls: () => (/* reexport safe */ _MenuFormButtonControls__WEBPACK_IMPORTED_MODULE_0__.MenuFormButtonControls)\n/* harmony export */ });\n/* harmony import */ var _MenuFormButtonControls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuFormButtonControls */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormButtonControls.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsForm/ModalCommentsForm.tsx":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/ModalCommentsForm.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalCommentsForm: () => (/* binding */ ModalCommentsForm)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalCommentsForm.css */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/modalCommentsForm.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _MenuFormButtonControls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuFormButtonControls */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/index.ts\");\n/* harmony import */ var _utils_react_GenericList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../utils/react/GenericList */ \"./src/utils/react/GenericList.tsx\");\n/* harmony import */ var _hooks_useAdaptiveForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../hooks/useAdaptiveForm */ \"./src/hooks/useAdaptiveForm.ts\");\n/* harmony import */ var _utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utils/ts/generateRandomIndex */ \"./src/utils/ts/generateRandomIndex.ts\");\n/* harmony import */ var _storeRedux_form_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../storeRedux/form/actions */ \"./src/storeRedux/form/actions.ts\");\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\n\n\n\n\n\n\n\n\n\n\n\nfunction ModalCommentsForm({ rootId, authorName, commentId, onClose, cancelBtn, className, autoFocus }) {\n    const commentFormValue = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)((0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_9__.selectCommentFormValue)(commentId));\n    const { name } = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_9__.selectUserBlock);\n    const formRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [isWidth] = (0,_hooks_useAdaptiveForm__WEBPACK_IMPORTED_MODULE_6__.useAdaptiveForm)(formRef);\n    const $FormBtns = [\n        { item: isWidth.maxWidth800 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconPicture, null) },\n        { item: isWidth.maxWidth753 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconFile, null) },\n        { item: isWidth.maxWidth706 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconDownload, null) },\n        { item: isWidth.maxWidth659 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconUser, null) },\n        { item: isWidth.maxWidth612 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconReverse, null) },\n        { item: isWidth.maxWidth565 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconShareForm, null) },\n        { item: isWidth.maxWidth518 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconRecord, null) },\n        { item: isWidth.maxWidth471 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconMessage, null) },\n        { item: isWidth.maxWidth424 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconPencil, null) },\n        { item: isWidth.maxWidth377 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconWord, null) },\n        { item: isWidth.maxWidth330 && react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_10__.IconPdf, null) },\n    ].filter(item => item.item).map(_utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_7__.generateId);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\n    const handleChangeForm = (event) => dispatch((0,_storeRedux_form_actions__WEBPACK_IMPORTED_MODULE_8__.changeFormValue)(commentId, event.target.value, authorName));\n    const handleFocus = (event) => event.currentTarget.setSelectionRange(event.currentTarget.value.length, event.currentTarget.value.length);\n    const handleSubmit = (event) => event.preventDefault();\n    const handleClose = () => setTimeout(() => onClose === null || onClose === void 0 ? void 0 : onClose(), 10);\n    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"form\", { className: `${_modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].form}${className ? ' ' + className : ''}`, onSubmit: handleSubmit, ref: formRef },\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"textarea\", { autoFocus: autoFocus ? true : false, className: _modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].textarea, value: commentFormValue, onChange: handleChangeForm, onFocus: handleFocus }),\n        !commentFormValue &&\n            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"label\", { className: _modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].label },\n                name &&\n                    react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_3__.Text, { size: 16, mobileSize: 14, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_3__.EColor.blew }, name),\n                name\n                    ? authorName\n                        ? `, reply to u/${authorName}`\n                        : ', what are your thoughts?'\n                    : 'Sign in to add a comment'),\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: _modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonsWrapper },\n            !isWidth.maxWidth800 &&\n                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MenuFormButtonControls__WEBPACK_IMPORTED_MODULE_4__.MenuFormButtonControls, { className: _modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].item, props: isWidth, rootId: rootId, ref: formRef }),\n            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_utils_react_GenericList__WEBPACK_IMPORTED_MODULE_5__.GenericList, { list: $FormBtns, As: 'button', className: _modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].item }),\n            cancelBtn &&\n                react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"button\", { type: 'button', className: `${_modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].cancelBtn}${isWidth.maxWidth330\n                        ? ''\n                        : ' ' + _modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].btnSizeMobile} `, onClick: handleClose }, \"Cancel\"),\n            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"button\", { type: 'submit', className: `${_modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].submitButton}${isWidth.maxWidth330\n                    ? ''\n                    : ' ' + _modalCommentsForm_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].btnSizeMobile} `, disabled: (commentFormValue === null || commentFormValue === void 0 ? void 0 : commentFormValue.trim())\n                    ? false\n                    : true, style: (commentFormValue === null || commentFormValue === void 0 ? void 0 : commentFormValue.trim())\n                    ? { opacity: '1', cursor: 'pointer' }\n                    : { opacity: '.6', cursor: 'not-allowed' } }, \"Comment\"))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsForm/ModalCommentsForm.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsForm/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalCommentsForm: () => (/* reexport safe */ _ModalCommentsForm__WEBPACK_IMPORTED_MODULE_0__.ModalCommentsForm)\n/* harmony export */ });\n/* harmony import */ var _ModalCommentsForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalCommentsForm */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/ModalCommentsForm.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsForm/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/Comment.tsx":
/*!***********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/Comment.tsx ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Comment: () => (/* binding */ Comment)\n/* harmony export */ });\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n/* harmony import */ var _utils_ts_convertRedditTextHtml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../utils/ts/convertRedditTextHtml */ \"./src/utils/ts/convertRedditTextHtml.ts\");\n/* harmony import */ var _utils_ts_commentsArrConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../utils/ts/commentsArrConverter */ \"./src/utils/ts/commentsArrConverter.ts\");\n/* harmony import */ var _storeRedux_form_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../storeRedux/form/actions */ \"./src/storeRedux/form/actions.ts\");\n/* harmony import */ var _storeRedux_storeRedux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../storeRedux/storeRedux */ \"./src/storeRedux/storeRedux.tsx\");\n/* harmony import */ var _CardControls_KarmaCounter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../CardControls/KarmaCounter */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts\");\n/* harmony import */ var _CardTextContent_CreatedAd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../CardTextContent/CreatedAd */ \"./src/shared/CardsList/Card/CardTextContent/CreatedAd/index.ts\");\n/* harmony import */ var _MoreCommentsButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../MoreCommentsButton */ \"./src/shared/CardsList/Card/CardModal/MoreCommentsButton/index.ts\");\n/* harmony import */ var _CardTextContent_UserLink__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../CardTextContent/UserLink */ \"./src/shared/CardsList/Card/CardTextContent/UserLink/index.ts\");\n/* harmony import */ var _ModalCommentsForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../ModalCommentsForm */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/index.ts\");\n/* harmony import */ var _ShareCommentButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ShareCommentButton */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/index.ts\");\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _ReplyCommentButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ReplyCommentButton */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/index.ts\");\n/* harmony import */ var _ModalCommentsList__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../ModalCommentsList */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/ModalCommentsList.tsx\");\n/* harmony import */ var _MenuCommentButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MenuCommentButton */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/index.ts\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _comment_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./comment.css */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/comment.css\");\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! dompurify */ \"dompurify\");\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_19__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst Comment = (0,react__WEBPACK_IMPORTED_MODULE_16__.memo)(({ commentItemData }) => {\n    const { commentReplies, authorName, createdTime, commentHtml, karmaCounter, postId, commentId, moreCommentsData } = commentItemData;\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_17__.useDispatch)();\n    const [isCommentOpen, setIsCommentOpen] = (0,react__WEBPACK_IMPORTED_MODULE_16__.useState)(true);\n    const formIsOpen = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)((0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.selectFormIsOpen)(commentId));\n    const handleHideCommentToggle = () => setTimeout(() => setIsCommentOpen(!isCommentOpen), 10);\n    const setCloseAllCommentsForm = () => {\n        var _a;\n        return (_a = _storeRedux_storeRedux__WEBPACK_IMPORTED_MODULE_4__.storeRedux\n            .getState()) === null || _a === void 0 ? void 0 : _a.commentsForm.filter((comment) => comment.formIsOpen === true).map(comment => dispatch((0,_storeRedux_form_actions__WEBPACK_IMPORTED_MODULE_3__.setIsOpenComment)(comment.commentId, false)));\n    };\n    const setCloseCommentForm = () => dispatch((0,_storeRedux_form_actions__WEBPACK_IMPORTED_MODULE_3__.setIsOpenComment)(commentId, false));\n    const setOpenCommentForm = () => dispatch((0,_storeRedux_form_actions__WEBPACK_IMPORTED_MODULE_3__.setIsOpenComment)(commentId, true));\n    function handleToggleComments() {\n        if (formIsOpen)\n            return setCloseAllCommentsForm();\n        setOpenCommentForm();\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_16___default().createElement(\"li\", { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].container },\n        react__WEBPACK_IMPORTED_MODULE_16___default().createElement(\"div\", { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].header, style: isCommentOpen\n                ? { transform: 'translateX(0)' }\n                : { transform: 'translateX(30px)' } },\n            !isCommentOpen &&\n                react__WEBPACK_IMPORTED_MODULE_16___default().createElement(\"button\", { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].buttonOpen, onClick: handleHideCommentToggle },\n                    react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_15__.IconSwitch, null)),\n            react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_CardTextContent_UserLink__WEBPACK_IMPORTED_MODULE_8__.UserLink, { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].userLinkAvatar, styleAvatar: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].styleAvatar, anchorName: authorName }),\n            react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_CardTextContent_CreatedAd__WEBPACK_IMPORTED_MODULE_6__.CreatedAd, { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].createdAd, createdTime: createdTime, noLabel: true })),\n        isCommentOpen &&\n            react__WEBPACK_IMPORTED_MODULE_16___default().createElement((react__WEBPACK_IMPORTED_MODULE_16___default().Fragment), null, authorName !== '[deleted]' &&\n                authorName !== ';div class=' &&\n                react__WEBPACK_IMPORTED_MODULE_16___default().createElement(\"div\", { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].body },\n                    react__WEBPACK_IMPORTED_MODULE_16___default().createElement(\"button\", { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].buttonLine, onClick: handleHideCommentToggle }),\n                    react__WEBPACK_IMPORTED_MODULE_16___default().createElement(\"div\", { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].content },\n                        react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_11__.Text, { As: \"div\", size: 14, mobileSize: 12, className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].text, dangerouslySetInnerHTML: {\n                                __html: dompurify__WEBPACK_IMPORTED_MODULE_19___default().sanitize((0,_utils_ts_convertRedditTextHtml__WEBPACK_IMPORTED_MODULE_1__.convertRedditTextHtml)(commentHtml))\n                            } }),\n                        react__WEBPACK_IMPORTED_MODULE_16___default().createElement(\"div\", { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].controlPanel },\n                            react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_CardControls_KarmaCounter__WEBPACK_IMPORTED_MODULE_5__.KarmaCounter, { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].karmaCounter, carmaNumber: karmaCounter, authorName: authorName }),\n                            react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ReplyCommentButton__WEBPACK_IMPORTED_MODULE_12__.ReplyCommentButton, { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].button, onOpen: handleToggleComments }),\n                            react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ShareCommentButton__WEBPACK_IMPORTED_MODULE_10__.ShareCommentButton, { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].button }),\n                            react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_MenuCommentButton__WEBPACK_IMPORTED_MODULE_14__.MenuCommentButton, { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].button })),\n                        (formIsOpen || commentReplies) &&\n                            react__WEBPACK_IMPORTED_MODULE_16___default().createElement(\"div\", { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].commentsBlock },\n                                formIsOpen &&\n                                    react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ModalCommentsForm__WEBPACK_IMPORTED_MODULE_9__.ModalCommentsForm, { className: _comment_css__WEBPACK_IMPORTED_MODULE_18__[\"default\"].formComment, authorName: authorName, commentId: commentId, onClose: setCloseCommentForm, rootId: 'comments_root', autoFocus: true, cancelBtn: true }),\n                                react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_ModalCommentsList__WEBPACK_IMPORTED_MODULE_13__.ModalCommentsList, { commentsData: (0,_utils_ts_commentsArrConverter__WEBPACK_IMPORTED_MODULE_2__.commentsArrConverter)(commentReplies, postId) }),\n                                react__WEBPACK_IMPORTED_MODULE_16___default().createElement(_MoreCommentsButton__WEBPACK_IMPORTED_MODULE_7__.MoreCommentsButton, { postId: postId, moreCommentsData: moreCommentsData })))))));\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/Comment.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentButton.tsx":
/*!***************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentButton.tsx ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuCommentButton: () => (/* binding */ MenuCommentButton)\n/* harmony export */ });\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menuCommentButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuCommentButton.css */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/menuCommentButton.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _MenuCommentDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuCommentDropdown */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/index.ts\");\n/* harmony import */ var _hooks_useCoords__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../hooks/useCoords */ \"./src/hooks/useCoords.ts\");\n\n\n\n\n\n\nfunction MenuCommentButton({ className }) {\n    const commentsRoot = document.getElementById('comments_root');\n    if (!commentsRoot)\n        return null;\n    const [isCommentMenuOpen, setisCommentMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const controlRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const [coords] = (0,_hooks_useCoords__WEBPACK_IMPORTED_MODULE_5__.useCoords)(controlRef, isCommentMenuOpen);\n    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"button\", { className: `${className ? className + ' ' : ''}${_menuCommentButton_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button}`, onClick: () => setisCommentMenuOpen(true), ref: controlRef },\n            react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_3__.IconMenu, null)),\n        isCommentMenuOpen && coords && (0,react_dom__WEBPACK_IMPORTED_MODULE_0__.createPortal)(react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_MenuCommentDropdown__WEBPACK_IMPORTED_MODULE_4__.MenuCommentDropdown, { style: {\n                left: (coords === null || coords === void 0 ? void 0 : coords.left) + 'px',\n                top: (coords === null || coords === void 0 ? void 0 : coords.top) + 'px',\n            }, className: className, onClose: () => setisCommentMenuOpen(false) }), commentsRoot)));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/MenuCommentDropdown.tsx":
/*!*************************************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/MenuCommentDropdown.tsx ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuCommentDropdown: () => (/* binding */ MenuCommentDropdown)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _menuCommentDropdown_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuCommentDropdown.css */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/menuCommentDropdown.css\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _utils_react_GenericList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../utils/react/GenericList */ \"./src/utils/react/GenericList.tsx\");\n/* harmony import */ var _hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../../../hooks/useModalCloser */ \"./src/hooks/useModalCloser.ts\");\n/* harmony import */ var _hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../../../../hooks/useResizeCloser */ \"./src/hooks/useResizeCloser.ts\");\n/* harmony import */ var _utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../../../../utils/ts/generateRandomIndex */ \"./src/utils/ts/generateRandomIndex.ts\");\n\n\n\n\n\n\n\nfunction MenuCommentDropdown({ className, onClose, style }) {\n    const $CommentBtnsDropdown = [\n        { item: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconReport, null), text: 'Report' },\n        { item: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconSave, null), text: 'Save' },\n        { item: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconHide, null), text: 'Hide' },\n    ].map(_utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_6__.generateId);\n    (0,_hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_4__.useModalCloser)({ onClose });\n    (0,_hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_5__.useResizeCloser)(onClose);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ul\", { className: _menuCommentDropdown_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list, style: style },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_GenericList__WEBPACK_IMPORTED_MODULE_3__.GenericList, { As: 'button', className: `${className ? className + ' ' : ''}${_menuCommentDropdown_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].item}`, list: $CommentBtnsDropdown })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/MenuCommentDropdown.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/index.ts":
/*!**********************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/index.ts ***!
  \**********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuCommentDropdown: () => (/* reexport safe */ _MenuCommentDropdown__WEBPACK_IMPORTED_MODULE_0__.MenuCommentDropdown)\n/* harmony export */ });\n/* harmony import */ var _MenuCommentDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuCommentDropdown */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/MenuCommentDropdown.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/index.ts":
/*!**************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/index.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuCommentButton: () => (/* reexport safe */ _MenuCommentButton__WEBPACK_IMPORTED_MODULE_0__.MenuCommentButton)\n/* harmony export */ });\n/* harmony import */ var _MenuCommentButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuCommentButton */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentButton.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/ReplyCommentButton.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/ReplyCommentButton.tsx ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReplyCommentButton: () => (/* binding */ ReplyCommentButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../Icons */ \"./src/shared/Icons/index.ts\");\n\n\nfunction ReplyCommentButton({ className, onOpen }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: className, onClick: onOpen },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__.IconComments, null),\n        \"Reply\"));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/ReplyCommentButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/index.ts":
/*!***************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/index.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ReplyCommentButton: () => (/* reexport safe */ _ReplyCommentButton__WEBPACK_IMPORTED_MODULE_0__.ReplyCommentButton)\n/* harmony export */ });\n/* harmony import */ var _ReplyCommentButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReplyCommentButton */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/ReplyCommentButton.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/ShareCommentButton.tsx":
/*!*****************************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/ShareCommentButton.tsx ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShareCommentButton: () => (/* binding */ ShareCommentButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../Icons */ \"./src/shared/Icons/index.ts\");\n\n\nfunction ShareCommentButton({ className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: className },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_1__.IconShare, null),\n        \"Share\"));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/ShareCommentButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/index.ts":
/*!***************************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/index.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ShareCommentButton: () => (/* reexport safe */ _ShareCommentButton__WEBPACK_IMPORTED_MODULE_0__.ShareCommentButton)\n/* harmony export */ });\n/* harmony import */ var _ShareCommentButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShareCommentButton */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/ShareCommentButton.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/index.ts":
/*!********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/index.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Comment: () => (/* reexport safe */ _Comment__WEBPACK_IMPORTED_MODULE_0__.Comment)\n/* harmony export */ });\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comment */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/Comment.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/ModalCommentsList.tsx":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/ModalCommentsList.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalCommentsList: () => (/* binding */ ModalCommentsList)\n/* harmony export */ });\n/* harmony import */ var _Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../Loader/RedditLoader */ \"./src/Loader/RedditLoader/index.ts\");\n/* harmony import */ var _modalcommentsList_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalcommentsList.css */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/modalcommentsList.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Comment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Comment */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/index.ts\");\n\n\n\n\nconst ModalCommentsList = (0,react__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(({ loading, commentsData }, ref) => {\n    if (!commentsData)\n        return null;\n    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"ul\", { className: _modalcommentsList_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list, ref: ref }, loading\n        ? react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_0__.RedditLoader, { className: _modalcommentsList_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loader })\n        : commentsData\n            .filter((cardItemData) => cardItemData.authorName)\n            .map((cardItemData) => (react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_Comment__WEBPACK_IMPORTED_MODULE_3__.Comment, { commentItemData: cardItemData, key: cardItemData.commentId })))));\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/ModalCommentsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalCommentsList/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalCommentsList/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalCommentsList: () => (/* reexport safe */ _ModalCommentsList__WEBPACK_IMPORTED_MODULE_0__.ModalCommentsList)\n/* harmony export */ });\n/* harmony import */ var _ModalCommentsList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalCommentsList */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/ModalCommentsList.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalCommentsList/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalControlPanel/ModalControlPanel.tsx":
/*!*************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalControlPanel/ModalControlPanel.tsx ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalControlPanel: () => (/* binding */ ModalControlPanel)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modalControlPanel_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalControlPanel.css */ \"./src/shared/CardsList/Card/CardModal/ModalControlPanel/modalControlPanel.css\");\n/* harmony import */ var _utils_react_GenericList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/react/GenericList */ \"./src/utils/react/GenericList.tsx\");\n/* harmony import */ var _utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/ts/generateRandomIndex */ \"./src/utils/ts/generateRandomIndex.ts\");\n/* harmony import */ var _utils_ts_shortFormatNumber__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../utils/ts/shortFormatNumber */ \"./src/utils/ts/shortFormatNumber.ts\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\n\n\n\n\n\n\nfunction ModalControlPanel({ props }) {\n    const $ControlPanelList = [\n        {\n            text: `${(0,_utils_ts_shortFormatNumber__WEBPACK_IMPORTED_MODULE_4__.shortFormatNumber)(props) || ''} Comments`,\n            item: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconComments, null),\n            disabled: true\n        },\n        {\n            text: 'Share',\n            item: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconShare, null),\n        },\n        {\n            text: 'Hide',\n            item: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconHide, null),\n        },\n        {\n            text: 'Save',\n            item: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconSave, null),\n        },\n        {\n            text: 'Report',\n            item: react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_5__.IconReport, null),\n        }\n    ].map(_utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_3__.generateId);\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _modalControlPanel_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].panel },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_GenericList__WEBPACK_IMPORTED_MODULE_2__.GenericList, { list: $ControlPanelList, As: 'button', className: _modalControlPanel_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].item, size: 14, mobileSize: 12 })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalControlPanel/ModalControlPanel.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalControlPanel/index.ts":
/*!************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalControlPanel/index.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalControlPanel: () => (/* reexport safe */ _ModalControlPanel__WEBPACK_IMPORTED_MODULE_0__.ModalControlPanel)\n/* harmony export */ });\n/* harmony import */ var _ModalControlPanel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalControlPanel */ \"./src/shared/CardsList/Card/CardModal/ModalControlPanel/ModalControlPanel.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalControlPanel/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalSortBlock/ModalSortBlock.tsx":
/*!*******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalSortBlock/ModalSortBlock.tsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalSortBlock: () => (/* binding */ ModalSortBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modalSortBlock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modalSortBlock.css */ \"./src/shared/CardsList/Card/CardModal/ModalSortBlock/modalSortBlock.css\");\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\n\n\n\n\nfunction ModalSortBlock() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _modalSortBlock_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].sortblock },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.Text, { size: 14, mobileSize: 12, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.EColor.blew }, 'Sort by: '),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: _modalSortBlock_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button },\n            'Best ',\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_3__.IconArrow, null))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalSortBlock/ModalSortBlock.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/ModalSortBlock/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/ModalSortBlock/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ModalSortBlock: () => (/* reexport safe */ _ModalSortBlock__WEBPACK_IMPORTED_MODULE_0__.ModalSortBlock)\n/* harmony export */ });\n/* harmony import */ var _ModalSortBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModalSortBlock */ \"./src/shared/CardsList/Card/CardModal/ModalSortBlock/ModalSortBlock.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/ModalSortBlock/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/MoreCommentsButton/MoreCommentsButton.tsx":
/*!***************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/MoreCommentsButton/MoreCommentsButton.tsx ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MoreCommentsButton: () => (/* binding */ MoreCommentsButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _moreCommentsButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moreCommentsButton.css */ \"./src/shared/CardsList/Card/CardModal/MoreCommentsButton/moreCommentsButton.css\");\n/* harmony import */ var _ModalCommentsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ModalCommentsList */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/index.ts\");\n/* harmony import */ var _hooks_useMoreComments__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hooks/useMoreComments */ \"./src/hooks/useMoreComments.ts\");\n\n\n\n\nfunction MoreCommentsButton({ postId, moreCommentsData }) {\n    const [isRepliesOpen, setIsRepliesOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const [moreComments] = (0,_hooks_useMoreComments__WEBPACK_IMPORTED_MODULE_3__.useMoreComments)({\n        commentsData: moreCommentsData,\n        postId: postId,\n    });\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        !isRepliesOpen &&\n            moreComments &&\n            moreComments.length > 0 &&\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: _moreCommentsButton_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button, onClick: () => setTimeout(() => {\n                    setIsRepliesOpen(true);\n                }, 20) }, moreComments === null || moreComments === void 0 ? void 0 :\n                moreComments.length,\n                (moreComments === null || moreComments === void 0 ? void 0 : moreComments.length) !== 1\n                    ? ' more replies'\n                    : ' more reply'),\n        isRepliesOpen &&\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_ModalCommentsList__WEBPACK_IMPORTED_MODULE_2__.ModalCommentsList, { commentsData: moreComments })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/MoreCommentsButton/MoreCommentsButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/MoreCommentsButton/index.ts":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/MoreCommentsButton/index.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MoreCommentsButton: () => (/* reexport safe */ _MoreCommentsButton__WEBPACK_IMPORTED_MODULE_0__.MoreCommentsButton)\n/* harmony export */ });\n/* harmony import */ var _MoreCommentsButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MoreCommentsButton */ \"./src/shared/CardsList/Card/CardModal/MoreCommentsButton/MoreCommentsButton.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/MoreCommentsButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardModal/index.ts":
/*!******************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/index.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardModal: () => (/* reexport safe */ _CardModal__WEBPACK_IMPORTED_MODULE_0__.CardModal)\n/* harmony export */ });\n/* harmony import */ var _CardModal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardModal */ \"./src/shared/CardsList/Card/CardModal/CardModal.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/CardTextContent.tsx":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/CardTextContent.tsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardTextContent: () => (/* binding */ CardTextContent)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardtextcontent_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardtextcontent.css */ \"./src/shared/CardsList/Card/CardTextContent/cardtextcontent.css\");\n/* harmony import */ var _CardAnchor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../CardAnchor */ \"./src/shared/CardsList/Card/CardAnchor/index.ts\");\n/* harmony import */ var _CardTitlePostLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./CardTitlePostLink */ \"./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/index.ts\");\n/* harmony import */ var _context_CardContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../context/CardContext */ \"./src/context/CardContext.ts\");\n/* harmony import */ var _CardControls_CommentsButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../CardControls/CommentsButton */ \"./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n\n\n\n\n\n\n\nfunction CardTextContent() {\n    const { postTitle, postUrl, createdTime, anchorName, } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context_CardContext__WEBPACK_IMPORTED_MODULE_4__.cardContext);\n    const { desktop } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_6__.useCustomMatchMedia)();\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _cardtextcontent_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].textContent },\n        desktop && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardAnchor__WEBPACK_IMPORTED_MODULE_2__.CardAnchor, { anchorName, createdTime }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardTitlePostLink__WEBPACK_IMPORTED_MODULE_3__.CardTitlePostLink, { postTitle: postTitle, postUrl: postUrl }),\n        desktop && react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_CardControls_CommentsButton__WEBPACK_IMPORTED_MODULE_5__.CommentsButton, { className: _cardtextcontent_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commentsButton })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/CardTextContent.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/CardTitlePostLink.tsx":
/*!*******************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/CardTitlePostLink.tsx ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardTitlePostLink: () => (/* binding */ CardTitlePostLink)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardtitlepostlink_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardtitlepostlink.css */ \"./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/cardtitlepostlink.css\");\n\nconst { convert } = __webpack_require__(/*! html-to-text */ \"html-to-text\");\n\nfunction CardTitlePostLink({ postTitle, postUrl }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", { className: _cardtitlepostlink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { className: _cardtitlepostlink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].link, target: \"_blank\", href: postUrl }, convert(postTitle))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/CardTitlePostLink.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/index.ts":
/*!******************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/index.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardTitlePostLink: () => (/* reexport safe */ _CardTitlePostLink__WEBPACK_IMPORTED_MODULE_0__.CardTitlePostLink)\n/* harmony export */ });\n/* harmony import */ var _CardTitlePostLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardTitlePostLink */ \"./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/CardTitlePostLink.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/CreatedAd/CreatedAd.tsx":
/*!***************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/CreatedAd/CreatedAd.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreatedAd: () => (/* binding */ CreatedAd)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _createdad_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createdad.css */ \"./src/shared/CardsList/Card/CardTextContent/CreatedAd/createdad.css\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n/* harmony import */ var _utils_ts_getRelativeTimeString__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/ts/getRelativeTimeString */ \"./src/utils/ts/getRelativeTimeString.ts\");\n\n\n\n\nfunction CreatedAd({ createdTime, className, noLabel }) {\n    const { desktop } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_2__.useCustomMatchMedia)();\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: `${_createdad_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createdAd}${className ? ' ' + className : ''}` },\n        desktop &&\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"span\", { className: _createdad_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].publishedLabel }, noLabel ? '· ' : 'Posted · '),\n        typeof createdTime === 'number'\n            ? (0,_utils_ts_getRelativeTimeString__WEBPACK_IMPORTED_MODULE_3__.getRelativeTimeString)(createdTime)\n            : createdTime));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/CreatedAd/CreatedAd.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/CreatedAd/index.ts":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/CreatedAd/index.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CreatedAd: () => (/* reexport safe */ _CreatedAd__WEBPACK_IMPORTED_MODULE_0__.CreatedAd)\n/* harmony export */ });\n/* harmony import */ var _CreatedAd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreatedAd */ \"./src/shared/CardsList/Card/CardTextContent/CreatedAd/CreatedAd.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/CreatedAd/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/UserLink/UserLink.tsx":
/*!*************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/UserLink/UserLink.tsx ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserLink: () => (/* binding */ UserLink)\n/* harmony export */ });\n/* harmony import */ var _userlink_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userlink.css */ \"./src/shared/CardsList/Card/CardTextContent/UserLink/userlink.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _hooks_useUserAvatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../hooks/useUserAvatar */ \"./src/hooks/useUserAvatar.ts\");\n\n\n\n\nfunction UserLink({ anchorName, className, styleAvatar }) {\n    const [snoovatar] = (0,_hooks_useUserAvatar__WEBPACK_IMPORTED_MODULE_3__.useUserAvatar)(anchorName);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onError = () => setError(true);\n    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"div\", { className: `${_userlink_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userLink}${className ? ' ' + className : ''}` },\n        snoovatar && !error\n            ? react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"img\", { className: _userlink_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].snoovatar, src: snoovatar, onError: onError, alt: \"avatar\" })\n            : react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconRedditDefault, { className: `${_userlink_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].avatar}${styleAvatar ? ' ' + styleAvatar : ''}` }),\n        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"a\", { target: '_blank', href: `https://www.reddit.com/user/${anchorName}/`, className: _userlink_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].username }, anchorName !== '[deleted]' &&\n            anchorName !== ';div class=' &&\n            anchorName),\n        (anchorName === '[deleted]' || anchorName === ';div class=') &&\n            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"span\", { className: _userlink_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removed }, \"Comment removed by moderator\")));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/UserLink/UserLink.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/UserLink/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/UserLink/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserLink: () => (/* reexport safe */ _UserLink__WEBPACK_IMPORTED_MODULE_0__.UserLink)\n/* harmony export */ });\n/* harmony import */ var _UserLink__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLink */ \"./src/shared/CardsList/Card/CardTextContent/UserLink/UserLink.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/UserLink/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardTextContent/index.ts":
/*!************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardTextContent/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardTextContent: () => (/* reexport safe */ _CardTextContent__WEBPACK_IMPORTED_MODULE_0__.CardTextContent)\n/* harmony export */ });\n/* harmony import */ var _CardTextContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardTextContent */ \"./src/shared/CardsList/Card/CardTextContent/CardTextContent.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardTextContent/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardVisual/CardVisual.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardVisual/CardVisual.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardVisual: () => (/* binding */ CardVisual)\n/* harmony export */ });\n/* harmony import */ var _RedditMessageImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedditMessageImage */ \"./src/shared/CardsList/Card/CardVisual/RedditMessageImage/index.ts\");\n/* harmony import */ var _RedditLinkImage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RedditLinkImage */ \"./src/shared/CardsList/Card/CardVisual/RedditLinkImage/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ \"react-player\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _cardVisual_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cardVisual.css */ \"./src/shared/CardsList/Card/CardVisual/cardVisual.css\");\n\n\n\n\n\nfunction CardVisual({ className, light, props, onClick, onLoading, videoDisabled, videoHeight }) {\n    const { postThumbnail, postVideoUrl, postUrl, postHighQualityVideoUrl, postHint } = props;\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const noop = () => { };\n    const onError = () => setError(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n        onLoading === null || onLoading === void 0 ? void 0 : onLoading();\n    }, []);\n    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"div\", { className: className, onClick: error ? noop : onClick }, !postVideoUrl\n            ?\n                (error\n                    ?\n                        postHint === 'image' ||\n                            postHint === undefined\n                            ? react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_RedditMessageImage__WEBPACK_IMPORTED_MODULE_0__.RedditMessageImage, { className: _cardVisual_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preview, postUrl: postUrl })\n                            : react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_RedditLinkImage__WEBPACK_IMPORTED_MODULE_1__.RedditLinkImage, { className: _cardVisual_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preview, postUrl: postUrl })\n                    :\n                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"img\", { className: _cardVisual_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preview, src: postHint === 'image'\n                                ?\n                                    postUrl\n                                :\n                                    postThumbnail, onError: onError }))\n            :\n                react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react_player__WEBPACK_IMPORTED_MODULE_3___default()), { style: videoDisabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }, controls: true, width: '', height: videoHeight || '100%', url: postHighQualityVideoUrl, light: light &&\n                        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"video\", { preload: 'metadata', className: _cardVisual_css__WEBPACK_IMPORTED_MODULE_4__[\"default\"].preview, src: postVideoUrl }) }))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardVisual/CardVisual.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardVisual/RedditLinkImage/RedditLinkImage.tsx":
/*!**********************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardVisual/RedditLinkImage/RedditLinkImage.tsx ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RedditLinkImage: () => (/* binding */ RedditLinkImage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_redditLinkImage_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../img/redditLinkImage.png */ \"./src/img/redditLinkImage.png\");\n\n\nfunction RedditLinkImage({ postUrl, className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { href: postUrl, target: '_blank' },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { className: className, src: _img_redditLinkImage_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"], alt: \"Massage image\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardVisual/RedditLinkImage/RedditLinkImage.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardVisual/RedditLinkImage/index.ts":
/*!***********************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardVisual/RedditLinkImage/index.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RedditLinkImage: () => (/* reexport safe */ _RedditLinkImage__WEBPACK_IMPORTED_MODULE_0__.RedditLinkImage)\n/* harmony export */ });\n/* harmony import */ var _RedditLinkImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedditLinkImage */ \"./src/shared/CardsList/Card/CardVisual/RedditLinkImage/RedditLinkImage.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardVisual/RedditLinkImage/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardVisual/RedditMessageImage/RedditMessageImage.tsx":
/*!****************************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardVisual/RedditMessageImage/RedditMessageImage.tsx ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RedditMessageImage: () => (/* binding */ RedditMessageImage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_redditMessageImage_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../img/redditMessageImage.png */ \"./src/img/redditMessageImage.png\");\n\n\nfunction RedditMessageImage({ postUrl, className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", { href: postUrl, target: '_blank' },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { className: className, src: _img_redditMessageImage_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"], alt: \"Massage image\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardVisual/RedditMessageImage/RedditMessageImage.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardVisual/RedditMessageImage/index.ts":
/*!**************************************************************************!*\
  !*** ./src/shared/CardsList/Card/CardVisual/RedditMessageImage/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RedditMessageImage: () => (/* reexport safe */ _RedditMessageImage__WEBPACK_IMPORTED_MODULE_0__.RedditMessageImage)\n/* harmony export */ });\n/* harmony import */ var _RedditMessageImage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RedditMessageImage */ \"./src/shared/CardsList/Card/CardVisual/RedditMessageImage/RedditMessageImage.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardVisual/RedditMessageImage/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/CardVisual/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/CardVisual/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardVisual: () => (/* reexport safe */ _CardVisual__WEBPACK_IMPORTED_MODULE_0__.CardVisual)\n/* harmony export */ });\n/* harmony import */ var _CardVisual__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardVisual */ \"./src/shared/CardsList/Card/CardVisual/CardVisual.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardVisual/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/LoadMoreButton/LoadMoreButton.tsx":
/*!*********************************************************************!*\
  !*** ./src/shared/CardsList/Card/LoadMoreButton/LoadMoreButton.tsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoadMoreButton: () => (/* binding */ LoadMoreButton)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _loadMoreButton_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMoreButton.css */ \"./src/shared/CardsList/Card/LoadMoreButton/loadMoreButton.css\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _storeRedux_posts_getPostsAsyncThunk__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../storeRedux/posts/getPostsAsyncThunk */ \"./src/storeRedux/posts/getPostsAsyncThunk.ts\");\n\n\n\n\nfunction LoadMoreButton() {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"button\", { className: _loadMoreButton_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].button, onClick: () => dispatch((0,_storeRedux_posts_getPostsAsyncThunk__WEBPACK_IMPORTED_MODULE_3__.getPostsAsyncThunk)()) }, \"Load more\"));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/LoadMoreButton/LoadMoreButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/LoadMoreButton/index.ts":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/LoadMoreButton/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LoadMoreButton: () => (/* reexport safe */ _LoadMoreButton__WEBPACK_IMPORTED_MODULE_0__.LoadMoreButton)\n/* harmony export */ });\n/* harmony import */ var _LoadMoreButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadMoreButton */ \"./src/shared/CardsList/Card/LoadMoreButton/LoadMoreButton.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/LoadMoreButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MenuButton/MenuButton.tsx":
/*!*************************************************************!*\
  !*** ./src/shared/CardsList/Card/MenuButton/MenuButton.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuButton: () => (/* binding */ MenuButton)\n/* harmony export */ });\n/* harmony import */ var _menuButton_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuButton.css */ \"./src/shared/CardsList/Card/MenuButton/menuButton.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _MenuDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MenuDropdown */ \"./src/shared/CardsList/Card/MenuDropdown/index.ts\");\n\n\n\n\nfunction MenuButton() {\n    const [isDropdownOpen, setIsDropdownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"button\", { className: _menuButton_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].button, onClick: () => setIsDropdownOpen(true) },\n            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconMenu, null)),\n        isDropdownOpen &&\n            react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_MenuDropdown__WEBPACK_IMPORTED_MODULE_3__.MenuDropdown, { onClose: () => setIsDropdownOpen(false) })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/MenuButton/MenuButton.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MenuButton/index.ts":
/*!*******************************************************!*\
  !*** ./src/shared/CardsList/Card/MenuButton/index.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuButton: () => (/* reexport safe */ _MenuButton__WEBPACK_IMPORTED_MODULE_0__.MenuButton)\n/* harmony export */ });\n/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuButton */ \"./src/shared/CardsList/Card/MenuButton/MenuButton.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/MenuButton/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MenuDropdown/MenuDropdown.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardsList/Card/MenuDropdown/MenuDropdown.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuDropdown: () => (/* binding */ MenuDropdown)\n/* harmony export */ });\n/* harmony import */ var _menuDropdown_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuDropdown.css */ \"./src/shared/CardsList/Card/MenuDropdown/menuDropdown.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _context_CardContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../context/CardContext */ \"./src/context/CardContext.ts\");\n/* harmony import */ var _utils_react_GenericList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../utils/react/GenericList */ \"./src/utils/react/GenericList.tsx\");\n/* harmony import */ var _hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useModalCloser */ \"./src/hooks/useModalCloser.ts\");\n/* harmony import */ var _utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/ts/generateRandomIndex */ \"./src/utils/ts/generateRandomIndex.ts\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\n\nfunction MenuDropdown({ onClose }) {\n    const { postSubreddit, postId } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_CardContext__WEBPACK_IMPORTED_MODULE_3__.cardContext);\n    const $MenuList = [\n        {\n            item: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, { to: `${postSubreddit}/comments/${postId}` },\n                react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_7__.IconComments, null),\n                \"Comments\"),\n            onClose: () => {\n                onClose();\n            }\n        },\n        {\n            text: 'Share',\n            item: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_7__.IconShare, null),\n            onClose: onClose\n        },\n        {\n            text: 'Hide',\n            item: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_7__.IconHide, null),\n            onClose: onClose\n        },\n        {\n            text: 'Save',\n            item: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_7__.IconSave, null),\n            onClose: onClose\n        },\n        {\n            text: 'Report',\n            item: react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_7__.IconReport, null),\n            onClose: onClose\n        }\n    ].map(_utils_ts_generateRandomIndex__WEBPACK_IMPORTED_MODULE_6__.generateId);\n    const refDropdown = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,_hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_5__.useModalCloser)({ onClose, ref: refDropdown });\n    return (react__WEBPACK_IMPORTED_MODULE_1___default().createElement(\"ul\", { ref: refDropdown, className: _menuDropdown_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dropdownList },\n        react__WEBPACK_IMPORTED_MODULE_1___default().createElement(_utils_react_GenericList__WEBPACK_IMPORTED_MODULE_4__.GenericList, { As: 'li', className: _menuDropdown_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].dropdownItem, list: $MenuList, size: 14, mobileSize: 12, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_2__.EColor.gray99 })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/MenuDropdown/MenuDropdown.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/MenuDropdown/index.ts":
/*!*********************************************************!*\
  !*** ./src/shared/CardsList/Card/MenuDropdown/index.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuDropdown: () => (/* reexport safe */ _MenuDropdown__WEBPACK_IMPORTED_MODULE_0__.MenuDropdown)\n/* harmony export */ });\n/* harmony import */ var _MenuDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuDropdown */ \"./src/shared/CardsList/Card/MenuDropdown/MenuDropdown.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/MenuDropdown/index.ts?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardList: () => (/* reexport safe */ _CardList__WEBPACK_IMPORTED_MODULE_0__.CardList)\n/* harmony export */ });\n/* harmony import */ var _CardList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CardList */ \"./src/shared/CardsList/CardList.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/index.ts?");

/***/ }),

/***/ "./src/shared/Content/Content.tsx":
/*!****************************************!*\
  !*** ./src/shared/Content/Content.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Content: () => (/* binding */ Content)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _content_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content.css */ \"./src/shared/Content/content.css\");\n\n\nfunction Content({ children }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"main\", { className: _content_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].content }, children));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Content/Content.tsx?");

/***/ }),

/***/ "./src/shared/Content/index.ts":
/*!*************************************!*\
  !*** ./src/shared/Content/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Content: () => (/* reexport safe */ _Content__WEBPACK_IMPORTED_MODULE_0__.Content)\n/* harmony export */ });\n/* harmony import */ var _Content__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Content */ \"./src/shared/Content/Content.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Content/index.ts?");

/***/ }),

/***/ "./src/shared/Header/Header.tsx":
/*!**************************************!*\
  !*** ./src/shared/Header/Header.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* binding */ Header)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _header_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.css */ \"./src/shared/Header/header.css\");\n/* harmony import */ var _SearchBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/index.ts\");\n/* harmony import */ var _LogoLink_LogoLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./LogoLink/LogoLink */ \"./src/shared/Header/LogoLink/LogoLink.tsx\");\n/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HeaderNavigation */ \"./src/shared/Header/HeaderNavigation/index.ts\");\n\n\n\n\n\nfunction Header() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"header\", { className: _header_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _header_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].container },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_LogoLink_LogoLink__WEBPACK_IMPORTED_MODULE_3__.LogoLink, null),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_HeaderNavigation__WEBPACK_IMPORTED_MODULE_4__.HeaderNavigation, null),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_SearchBlock__WEBPACK_IMPORTED_MODULE_2__.SearchBlock, null))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/Header.tsx?");

/***/ }),

/***/ "./src/shared/Header/HeaderNavigation/HeaderNavigation.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/Header/HeaderNavigation/HeaderNavigation.tsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderNavigation: () => (/* binding */ HeaderNavigation)\n/* harmony export */ });\n/* harmony import */ var _MenuNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuNav */ \"./src/shared/Header/HeaderNavigation/MenuNav/index.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _headerNavigation_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./headerNavigation.css */ \"./src/shared/Header/HeaderNavigation/headerNavigation.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useAdaptiveForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hooks/useAdaptiveForm */ \"./src/hooks/useAdaptiveForm.ts\");\n/* harmony import */ var _context_CardListContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../context/CardListContext */ \"./src/context/CardListContext.tsx\");\n/* harmony import */ var _storeRedux_posts_postsSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../storeRedux/posts/postsSlice */ \"./src/storeRedux/posts/postsSlice.ts\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n\n\n\n\n\n\n\n\n\n\nfunction HeaderNavigation() {\n    const refNav = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const [isWidth] = (0,_hooks_useAdaptiveForm__WEBPACK_IMPORTED_MODULE_5__.useAdaptiveForm)(refNav);\n    const loading = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_9__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_9__.selectPostsLoading);\n    const { refCardList } = (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(_context_CardListContext__WEBPACK_IMPORTED_MODULE_6__.CardListContext);\n    const styledLink = ({ isActive }) => ({\n        cursor: loading ? 'wait' : 'pointer',\n        pointerEvents: !isActive && loading ? 'none' : 'unset'\n    });\n    const scrollToTop = () => (refCardList === null || refCardList === void 0 ? void 0 : refCardList.current) && refCardList.current.scrollToItem(0);\n    function reset(e) {\n        if (e.currentTarget.classList.value.includes('active')) {\n            scrollToTop();\n        }\n        else {\n            dispatch((0,_storeRedux_posts_postsSlice__WEBPACK_IMPORTED_MODULE_7__.resetPostsData)());\n        }\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"nav\", { className: _headerNavigation_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav, ref: refNav },\n        isWidth.maxWidth200 &&\n            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, { className: _headerNavigation_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].link, style: styledLink, onClick: reset, to: 'best' },\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_8__.IconRocket, null),\n                \"Best\"),\n        isWidth.maxWidth295 &&\n            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, { className: _headerNavigation_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].link, style: styledLink, onClick: reset, to: 'hot' },\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_8__.IconFire, null),\n                \"Hot\"),\n        isWidth.maxWidth330 &&\n            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, { className: _headerNavigation_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].link, style: styledLink, onClick: reset, to: 'new' },\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_8__.IconNew, null),\n                \"New\"),\n        isWidth.maxWidth424 &&\n            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, { className: _headerNavigation_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].link, style: styledLink, onClick: reset, to: 'top' },\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_8__.IconTop, null),\n                \"Top\"),\n        isWidth.maxWidth471 &&\n            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.NavLink, { className: _headerNavigation_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].link, style: styledLink, onClick: reset, to: 'rising' },\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_8__.IconGrowth, null),\n                \"Rising\"),\n        !isWidth.maxWidth471 &&\n            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_MenuNav__WEBPACK_IMPORTED_MODULE_0__.MenuNav, { className: _headerNavigation_css__WEBPACK_IMPORTED_MODULE_3__[\"default\"].link, styledLink: styledLink, isWidth: isWidth, reset: reset })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/HeaderNavigation/HeaderNavigation.tsx?");

/***/ }),

/***/ "./src/shared/Header/HeaderNavigation/MenuNav/MenuNav.tsx":
/*!****************************************************************!*\
  !*** ./src/shared/Header/HeaderNavigation/MenuNav/MenuNav.tsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuNav: () => (/* binding */ MenuNav)\n/* harmony export */ });\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n/* harmony import */ var _hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useResizeCloser */ \"./src/hooks/useResizeCloser.ts\");\n/* harmony import */ var _hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useModalCloser */ \"./src/hooks/useModalCloser.ts\");\n/* harmony import */ var _hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../hooks/useCoords */ \"./src/hooks/useCoords.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _menuNav_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menuNav.css */ \"./src/shared/Header/HeaderNavigation/MenuNav/menuNav.css\");\n\n\n\n\n\n\n\n\n\nfunction MenuNav({ className, isWidth, styledLink, reset }) {\n    const modalRoot = document.getElementById('modal_root');\n    if (!modalRoot)\n        return null;\n    const [isMenuOpen, setIsMenuOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const darkMode = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_1__.selectIsDarkMode);\n    const refButton = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const refMenu = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const [coords] = (0,_hooks_useCoords__WEBPACK_IMPORTED_MODULE_4__.useCoords)(refButton, isMenuOpen);\n    (0,_hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_3__.useModalCloser)({ ref: refMenu, ref2: refButton, onClose: () => setIsMenuOpen(false) });\n    (0,_hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_2__.useResizeCloser)(() => setIsMenuOpen(false));\n    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"button\", { className: _menuNav_css__WEBPACK_IMPORTED_MODULE_8__[\"default\"].menu, ref: refButton, onClick: () => setIsMenuOpen(!isMenuOpen) },\n            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_0__.IconMenu, null)),\n        isMenuOpen && coords && (0,react_dom__WEBPACK_IMPORTED_MODULE_7__.createPortal)(react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"nav\", { ref: refMenu, className: _menuNav_css__WEBPACK_IMPORTED_MODULE_8__[\"default\"].nav, style: {\n                filter: darkMode\n                    ? 'drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.15))'\n                    : 'drop-shadow(0px 0px 6px rgba(2, 2, 2, 0.3))',\n                left: (coords === null || coords === void 0 ? void 0 : coords.left) + 'px',\n                top: `calc(${(coords === null || coords === void 0 ? void 0 : coords.top) + 'px'} + 6px)`\n            } },\n            !isWidth.maxWidth200 &&\n                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, { className: className, to: 'best', onClick: reset, style: styledLink },\n                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_0__.IconRocket, null),\n                    \"Best\"),\n            !isWidth.maxWidth295 &&\n                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, { className: className, to: 'hot', onClick: reset, style: styledLink },\n                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_0__.IconFire, null),\n                    \"Hot\"),\n            !isWidth.maxWidth330 &&\n                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, { className: className, to: 'new', onClick: reset, style: styledLink },\n                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_0__.IconNew, null),\n                    \"New\"),\n            !isWidth.maxWidth424 &&\n                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, { className: className, to: 'top', onClick: reset, style: styledLink },\n                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_0__.IconTop, null),\n                    \"Top\"),\n            !isWidth.maxWidth471 &&\n                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.NavLink, { className: className, to: 'rising', onClick: reset, style: styledLink },\n                    react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_0__.IconGrowth, null),\n                    \"Rising\")), modalRoot)));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/HeaderNavigation/MenuNav/MenuNav.tsx?");

/***/ }),

/***/ "./src/shared/Header/HeaderNavigation/MenuNav/index.ts":
/*!*************************************************************!*\
  !*** ./src/shared/Header/HeaderNavigation/MenuNav/index.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MenuNav: () => (/* reexport safe */ _MenuNav__WEBPACK_IMPORTED_MODULE_0__.MenuNav)\n/* harmony export */ });\n/* harmony import */ var _MenuNav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuNav */ \"./src/shared/Header/HeaderNavigation/MenuNav/MenuNav.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/HeaderNavigation/MenuNav/index.ts?");

/***/ }),

/***/ "./src/shared/Header/HeaderNavigation/index.ts":
/*!*****************************************************!*\
  !*** ./src/shared/Header/HeaderNavigation/index.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HeaderNavigation: () => (/* reexport safe */ _HeaderNavigation__WEBPACK_IMPORTED_MODULE_0__.HeaderNavigation)\n/* harmony export */ });\n/* harmony import */ var _HeaderNavigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./HeaderNavigation */ \"./src/shared/Header/HeaderNavigation/HeaderNavigation.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/HeaderNavigation/index.ts?");

/***/ }),

/***/ "./src/shared/Header/LogoLink/LogoLink.tsx":
/*!*************************************************!*\
  !*** ./src/shared/Header/LogoLink/LogoLink.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LogoLink: () => (/* binding */ LogoLink)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _logoLink_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logoLink.css */ \"./src/shared/Header/LogoLink/logoLink.css\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Icons_RedditLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icons/RedditLogo */ \"./src/shared/Icons/RedditLogo.tsx\");\n\n\n\n\nfunction LogoLink() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, { \"aria-label\": \"Home\", to: \"/\", className: _logoLink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].link },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons_RedditLogo__WEBPACK_IMPORTED_MODULE_3__.RedditLogo, null)));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/LogoLink/LogoLink.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/SearchBlock.tsx":
/*!*******************************************************!*\
  !*** ./src/shared/Header/SearchBlock/SearchBlock.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchBlock: () => (/* binding */ SearchBlock)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _searchblock_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./searchblock.css */ \"./src/shared/Header/SearchBlock/searchblock.css\");\n/* harmony import */ var _UserBlock__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/index.ts\");\n\n\n\nfunction SearchBlock() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _searchblock_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].searchBlock },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_UserBlock__WEBPACK_IMPORTED_MODULE_2__.UserBlock, null)));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/SearchBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserAvatar/UserAvatar.tsx":
/*!***************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserAvatar/UserAvatar.tsx ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserAvatar: () => (/* binding */ UserAvatar)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _userAvatar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userAvatar.css */ \"./src/shared/Header/SearchBlock/UserBlock/UserAvatar/userAvatar.css\");\n/* harmony import */ var _Icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../Icons */ \"./src/shared/Icons/index.ts\");\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n\n\n\n\n\nfunction UserAvatar({ iconImg, loading, userName, noText }) {\n    const { desktop } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_4__.useCustomMatchMedia)();\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _userAvatar_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].avatarBox }, iconImg\n            ? react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { src: iconImg, alt: \"User avatar\", className: _userAvatar_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].avatarImage })\n            : react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Icons__WEBPACK_IMPORTED_MODULE_2__.IconRedditDefault, { className: _userAvatar_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].avatar })),\n        desktop && !noText &&\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _userAvatar_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].username },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_3__.Text, { size: 16, color: userName ? _utils_react_Text__WEBPACK_IMPORTED_MODULE_3__.EColor.white : _utils_react_Text__WEBPACK_IMPORTED_MODULE_3__.EColor.gray99 }, loading\n                    ? 'loading...'\n                    : userName || 'Log in'))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserAvatar/UserAvatar.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserAvatar/index.ts":
/*!*********************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserAvatar/index.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserAvatar: () => (/* reexport safe */ _UserAvatar__WEBPACK_IMPORTED_MODULE_0__.UserAvatar)\n/* harmony export */ });\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserAvatar */ \"./src/shared/Header/SearchBlock/UserBlock/UserAvatar/UserAvatar.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserAvatar/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx":
/*!***************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserBlock: () => (/* binding */ UserBlock)\n/* harmony export */ });\n/* harmony import */ var _userblock_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userblock.css */ \"./src/shared/Header/SearchBlock/UserBlock/userblock.css\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"react-dom\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserAvatar */ \"./src/shared/Header/SearchBlock/UserBlock/UserAvatar/index.ts\");\n/* harmony import */ var _hooks_useCoords__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useCoords */ \"./src/hooks/useCoords.ts\");\n/* harmony import */ var _UserBlockDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./UserBlockDropdown */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _hooks_useUserData__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../hooks/useUserData */ \"./src/hooks/useUserData.ts\");\n/* harmony import */ var _hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../hooks/useDarkMode */ \"./src/hooks/useDarkMode.ts\");\n/* harmony import */ var _hooks_useStopScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../hooks/useStopScroll */ \"./src/hooks/useStopScroll.ts\");\n/* harmony import */ var _hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useModalCloser */ \"./src/hooks/useModalCloser.ts\");\n/* harmony import */ var _hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../hooks/useResizeCloser */ \"./src/hooks/useResizeCloser.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction UserBlock() {\n    const modalRoot = document.getElementById('modal_root');\n    if (!modalRoot)\n        return null;\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);\n    const { iconImg, name, loading } = (0,_hooks_useUserData__WEBPACK_IMPORTED_MODULE_6__.useUserData)();\n    const darkMode = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_12__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_12__.selectIsDarkMode);\n    const refButton = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const listRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(null);\n    const [coords] = (0,_hooks_useCoords__WEBPACK_IMPORTED_MODULE_3__.useCoords)(refButton, true);\n    const { mobile411 } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_11__.useCustomMatchMedia)();\n    mobile411 && (0,_hooks_useStopScroll__WEBPACK_IMPORTED_MODULE_8__.setStopScroll)(isOpen);\n    function handleClose() {\n        if (mobile411 && listRef.current) {\n            listRef.current.style.top = '110%';\n            listRef.current.style.visibility = 'hidden';\n            setIsOpen(false);\n            return;\n        }\n        setIsOpen(false);\n        if (listRef.current) {\n            listRef.current.style.visibility = 'hidden';\n        }\n    }\n    function handleOpen() {\n        var _a;\n        const listHeigth = (_a = listRef.current) === null || _a === void 0 ? void 0 : _a.offsetHeight;\n        if (mobile411 && listRef.current) {\n            listRef.current.style.top = `calc(100% - ${listHeigth + 'px'})`;\n            listRef.current.style.visibility = 'visible';\n            setIsOpen(true);\n            return;\n        }\n        setIsOpen(!isOpen);\n        if (listRef.current) {\n            listRef.current.style.visibility = 'visible';\n        }\n    }\n    (0,_hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_9__.useModalCloser)({ onClose: handleClose, ref: listRef, ref2: refButton, noTouch: true });\n    (0,_hooks_useResizeCloser__WEBPACK_IMPORTED_MODULE_10__.useResizeCloser)(handleClose);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(() => {\n        (0,_hooks_useDarkMode__WEBPACK_IMPORTED_MODULE_7__.useDarkMode)(darkMode);\n    }, [darkMode]);\n    return (react__WEBPACK_IMPORTED_MODULE_5___default().createElement((react__WEBPACK_IMPORTED_MODULE_5___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_5___default().createElement(\"button\", { type: 'button', ref: refButton, className: _userblock_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].userBox, onClick: handleOpen },\n            react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_UserAvatar__WEBPACK_IMPORTED_MODULE_2__.UserAvatar, { loading: loading, iconImg: iconImg, userName: name })),\n        mobile411 && coords &&\n            (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_UserBlockDropdown__WEBPACK_IMPORTED_MODULE_4__.UserBlockDropdown, { isMobileOpen: isOpen, loading: loading, iconImg: iconImg, userName: name, coords: coords, ref: listRef }), modalRoot),\n        !mobile411 && isOpen && coords &&\n            (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_UserBlockDropdown__WEBPACK_IMPORTED_MODULE_4__.UserBlockDropdown, { loading: loading, iconImg: iconImg, userName: name, coords: coords, ref: listRef }), modalRoot)));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/ToggleSwitch.tsx":
/*!*************************************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/ToggleSwitch.tsx ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToggleSwitch: () => (/* binding */ ToggleSwitch)\n/* harmony export */ });\n/* harmony import */ var _toggleSwitch_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleSwitch.css */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/toggleSwitch.css\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _storeRedux_user_userSlise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../storeRedux/user/userSlise */ \"./src/storeRedux/user/userSlise.ts\");\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n\n\n\n\n\nfunction ToggleSwitch() {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useDispatch)();\n    const refInput = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const darkMode = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_4__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_4__.selectIsDarkMode);\n    const handleClick = () => { var _a; return refInput.current && dispatch((0,_storeRedux_user_userSlise__WEBPACK_IMPORTED_MODULE_3__.setDarkMode)((_a = refInput.current) === null || _a === void 0 ? void 0 : _a.checked)); };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n        if (refInput.current) {\n            refInput.current.checked = darkMode;\n        }\n    }, [darkMode]);\n    return (react__WEBPACK_IMPORTED_MODULE_2___default().createElement((react__WEBPACK_IMPORTED_MODULE_2___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"input\", { onClick: handleClick, className: _toggleSwitch_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].input, ref: refInput, type: \"checkbox\", id: \"switch\" }),\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\"label\", { className: _toggleSwitch_css__WEBPACK_IMPORTED_MODULE_0__[\"default\"].label, htmlFor: \"switch\" }, \"Toggle\")));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/ToggleSwitch.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/index.ts":
/*!*****************************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/index.ts ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToggleSwitch: () => (/* reexport safe */ _ToggleSwitch__WEBPACK_IMPORTED_MODULE_0__.ToggleSwitch)\n/* harmony export */ });\n/* harmony import */ var _ToggleSwitch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ToggleSwitch */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/ToggleSwitch.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/UserBlockDropdown.tsx":
/*!*****************************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/UserBlockDropdown.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserBlockDropdown: () => (/* binding */ UserBlockDropdown)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _UserAvatar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../UserAvatar */ \"./src/shared/Header/SearchBlock/UserBlock/UserAvatar/index.ts\");\n/* harmony import */ var _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userBlockDropdown.css */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/userBlockDropdown.css\");\n/* harmony import */ var _ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ToggleSwitch */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/ToggleSwitch/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Icons_IconNight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../Icons/IconNight */ \"./src/shared/Icons/IconNight.tsx\");\n/* harmony import */ var _Icons_IconLogIn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../Icons/IconLogIn */ \"./src/shared/Icons/IconLogIn.tsx\");\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _storeRedux_token_tokenSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../storeRedux/token/tokenSlice */ \"./src/storeRedux/token/tokenSlice.ts\");\n/* harmony import */ var _storeRedux_user_userSlise__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../storeRedux/user/userSlise */ \"./src/storeRedux/user/userSlise.ts\");\n/* harmony import */ var _hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../hooks/useCustomMatchMedia */ \"./src/hooks/useCustomMatchMedia.ts\");\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\nconst UserBlockDropdown = (0,react__WEBPACK_IMPORTED_MODULE_4__.forwardRef)(({ loading, iconImg, userName, coords, isMobileOpen }, ref) => {\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch)();\n    const darkMode = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_11__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_11__.selectIsDarkMode);\n    const { mobile411, desktop } = (0,_hooks_useCustomMatchMedia__WEBPACK_IMPORTED_MODULE_10__.useCustomMatchMedia)();\n    function HandleResetToken() {\n        dispatch((0,_storeRedux_token_tokenSlice__WEBPACK_IMPORTED_MODULE_8__.resetToken)());\n        dispatch((0,_storeRedux_user_userSlise__WEBPACK_IMPORTED_MODULE_9__.resetUserData)());\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null,\n        mobile411 &&\n            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"div\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].backdrop, style: {\n                    top: isMobileOpen ? 0 : '110%',\n                    visibility: isMobileOpen ? 'visible' : 'hidden',\n                    background: isMobileOpen ? 'var(--colorScrim)' : 'none'\n                } }),\n        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"ul\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].list, ref: ref, style: {\n                filter: darkMode\n                    ? 'drop-shadow(0px 0px 3px rgba(255, 255, 255, 0.15))'\n                    : 'drop-shadow(0px 0px 6px rgba(2, 2, 2, 0.3))',\n                top: mobile411\n                    ? '110%'\n                    : `calc(${(coords === null || coords === void 0 ? void 0 : coords.top) + 'px'} + ${desktop ? '20px' : '26px'})`,\n                right: mobile411\n                    ? ''\n                    : `calc(${(coords === null || coords === void 0 ? void 0 : coords.left) + 'px'} + ${desktop ? '65px' : '2px'})`,\n            } },\n            userName &&\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"li\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].item },\n                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"a\", { href: `https://www.reddit.com/user/${userName}/`, className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button },\n                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_UserAvatar__WEBPACK_IMPORTED_MODULE_1__.UserAvatar, { userName: userName, loading: loading, iconImg: iconImg, noText: true }),\n                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"span\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].descr },\n                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { size: 12, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.white, className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].username }, \"View Profile\"),\n                            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { size: 10, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.gray99, className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].username },\n                                \"u/\",\n                                userName)))),\n            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"li\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].item }, userName ?\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"button\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button, onClick: HandleResetToken },\n                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icons_IconLogIn__WEBPACK_IMPORTED_MODULE_6__.Iconlogin, null),\n                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.white, size: 12 }, \"Log Out\"))\n                :\n                    react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"a\", { href: `https://www.reddit.com/api/v1/authorize?client_id=${'_27swn7Uy4Ctovp3-0sQUw'}&response_type=code&state=random_string&redirect_uri=${'http://localhost'}:80/auth&duration=permanent&scope=read submit identity`, className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].button, type: 'button' },\n                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icons_IconLogIn__WEBPACK_IMPORTED_MODULE_6__.Iconlogin, null),\n                        react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.white, size: 12 }, \"Log In / Sign Up\"))),\n            react__WEBPACK_IMPORTED_MODULE_4___default().createElement(\"li\", { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].item, style: { padding: '15px 20px' } },\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_Icons_IconNight__WEBPACK_IMPORTED_MODULE_5__.IconNight, null),\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.Text, { className: _userBlockDropdown_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"].text, color: _utils_react_Text__WEBPACK_IMPORTED_MODULE_7__.EColor.white, size: 12 }, \"Dark Mode\"),\n                react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_ToggleSwitch__WEBPACK_IMPORTED_MODULE_3__.ToggleSwitch, null)))));\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/UserBlockDropdown.tsx?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/index.ts":
/*!****************************************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/index.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserBlockDropdown: () => (/* reexport safe */ _UserBlockDropdown__WEBPACK_IMPORTED_MODULE_0__.UserBlockDropdown)\n/* harmony export */ });\n/* harmony import */ var _UserBlockDropdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBlockDropdown */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/UserBlockDropdown.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/UserBlockDropdown/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/UserBlock/index.ts":
/*!**********************************************************!*\
  !*** ./src/shared/Header/SearchBlock/UserBlock/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   UserBlock: () => (/* reexport safe */ _UserBlock__WEBPACK_IMPORTED_MODULE_0__.UserBlock)\n/* harmony export */ });\n/* harmony import */ var _UserBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserBlock */ \"./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/UserBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/SearchBlock/index.ts":
/*!************************************************!*\
  !*** ./src/shared/Header/SearchBlock/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   SearchBlock: () => (/* reexport safe */ _SearchBlock__WEBPACK_IMPORTED_MODULE_0__.SearchBlock)\n/* harmony export */ });\n/* harmony import */ var _SearchBlock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchBlock */ \"./src/shared/Header/SearchBlock/SearchBlock.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/SearchBlock/index.ts?");

/***/ }),

/***/ "./src/shared/Header/index.ts":
/*!************************************!*\
  !*** ./src/shared/Header/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Header: () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header)\n/* harmony export */ });\n/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ \"./src/shared/Header/Header.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Header/index.ts?");

/***/ }),

/***/ "./src/shared/Icons/IconAnonim.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/IconAnonim.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconAnonim: () => (/* binding */ IconAnonim)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconAnonim({ className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { className: className, width: \"50\", height: \"50\", viewBox: \"0 0 50 50\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z\", fill: \"#D9D9D9\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconAnonim.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconArrow.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/IconArrow.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconArrow: () => (/* binding */ IconArrow)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconArrow() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"13\", height: \"7\", viewBox: \"0 0 13 7\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fillRule: \"evenodd\", clipRule: \"evenodd\", d: \"M6.5 7L5.57483e-07 0.623141L0.703795 -1.55181e-06L6.5 5.6864L12.2962 -5.38365e-07L13 0.623142L6.5 7Z\", fill: \"#4FBCFF\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconArrow.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconComments.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/IconComments.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconComments: () => (/* binding */ IconComments)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconComments() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"15\", height: \"15\", viewBox: \"0 0 15 15\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconComments.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconDownload.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/IconDownload.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconDownload: () => (/* binding */ IconDownload)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconDownload() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"14\", height: \"17\", viewBox: \"0 0 14 17\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconDownload.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconEmail.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/IconEmail.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconEmail: () => (/* binding */ IconEmail)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_logo_gmail_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/logo-gmail.png */ \"./src/img/logo-gmail.png\");\n\n\nfunction IconEmail({ className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { className: className, src: _img_logo_gmail_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"], alt: \"logoGmail\" }));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconEmail.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconFile.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconFile.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconFile: () => (/* binding */ IconFile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconFile() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"16\", height: \"20\", viewBox: \"0 0 16 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconFile.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconFire.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconFire.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconFire: () => (/* binding */ IconFire)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconFire() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { style: { height: '25px', marginRight: 2 }, viewBox: \"0 0 24 24\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconFire.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconGitLab.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/IconGitLab.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconGitLab: () => (/* binding */ IconGitLab)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconGitLab({ className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { className: className, width: \"32\", height: \"32\", viewBox: \"0 0 32 32\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\", role: \"img\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M31.4618 12.7787L31.417 12.6641L27.0667 1.31308C26.9783 1.09046 26.8218 0.90145 26.6197 0.773028C26.416 0.644476 26.1775 0.582308 25.937 0.595107C25.6965 0.607906 25.4659 0.695039 25.277 0.844481C25.0899 0.994513 24.955 1.1998 24.8915 1.43106L21.9503 10.4324H10.0509L7.10976 1.43106C7.04625 1.1998 6.91133 0.994513 6.72425 0.844481C6.53618 0.694035 6.30572 0.606246 6.06523 0.593431C5.82473 0.580616 5.58625 0.64342 5.38326 0.773028C5.18023 0.900924 5.02312 1.09005 4.9346 1.31308L0.579314 12.679L0.534448 12.792C-0.0907536 14.429 -0.167604 16.2247 0.315452 17.9091C0.798508 19.5935 1.81536 21.0756 3.21309 22.1324L3.22971 22.144L3.26793 22.1739L9.90306 27.1407L13.1832 29.625L15.1773 31.1354C15.4115 31.3124 15.6971 31.4082 15.9907 31.4082C16.2842 31.4082 16.5698 31.3124 16.8041 31.1354L18.7981 29.625L22.0799 27.1407L28.7533 22.144L28.7715 22.1307C30.174 21.0749 31.1949 19.5916 31.6802 17.9045C32.1656 16.2175 32.0889 14.4184 31.4618 12.7787Z\", fill: \"#E24329\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M31.462 12.7787L31.4172 12.6641C29.2955 13.1013 27.2962 14.0005 25.5614 15.2978L16.0083 22.5378C19.2652 25.0005 22.1001 27.1407 22.1001 27.1407L28.7734 22.144L28.7917 22.1307C30.1907 21.0723 31.2076 19.5877 31.6893 17.9009C32.171 16.214 32.0912 14.4163 31.462 12.7787Z\", fill: \"#FC6D26\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M9.9082 27.1407L13.1834 29.625L15.1774 31.1354C15.4117 31.3124 15.6972 31.4082 15.9908 31.4082C16.2844 31.4082 16.57 31.3124 16.8042 31.1354L18.7982 29.625L22.0801 27.1407C22.0801 27.1407 19.2452 25.0005 15.9883 22.5378L9.9082 27.1407Z\", fill: \"#FCA326\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M6.43513 15.3045C4.70076 14.0067 2.70123 13.108 0.579333 12.6724L0.534467 12.7854C-0.0923403 14.4232 -0.170036 16.2203 0.313079 17.9061C0.796194 19.5919 1.81396 21.0751 3.21311 22.1324L3.22973 22.144L3.26795 22.1739L9.90307 27.1407L16.0081 22.5378L6.43513 15.3045Z\", fill: \"#FC6D26\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconGitLab.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconGithub.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/IconGithub.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconGithub: () => (/* binding */ IconGithub)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconGithub({ className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { className: className, height: \"32\", \"aria-hidden\": \"true\", viewBox: \"0 0 16 16\", version: \"1.1\", width: \"32\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconGithub.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconGrowth.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/IconGrowth.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconGrowth: () => (/* binding */ IconGrowth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconGrowth() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { style: { height: 20 }, version: \"1.1\", id: \"Capa_1\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\", viewBox: \"0 0 360 360\", xmlSpace: \"preserve\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M355.606,94.394l-60-60c-5.857-5.858-15.355-5.858-21.213,0l-60,60c-4.29,4.29-5.573,10.742-3.252,16.347\\r\\n\\tc2.322,5.605,7.791,9.26,13.858,9.26h15v180h-30V180c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15v120H90v-55\\r\\n\\tc0-8.284-6.716-15-15-15H15c-8.284,0-15,6.716-15,15v70c0,8.284,6.716,15,15,15h60h60h60h60h60c8.284,0,15-6.716,15-15V120h15\\r\\n\\tc6.067,0,11.536-3.655,13.858-9.26C361.18,105.136,359.897,98.684,355.606,94.394z M30,300v-40h30v40H30z M150,300V195h30v105H150z\\r\\n\\t M270,300V105c0-6.432-4.049-11.919-9.736-14.05L285,66.214l24.736,24.736C304.049,93.081,300,98.568,300,105v195H270z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconGrowth.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconHide.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconHide.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconHide: () => (/* binding */ IconHide)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconHide() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconHide.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconLink.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconLink.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconLink: () => (/* binding */ IconLink)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconLink() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"20\", height: \"10\", viewBox: \"0 0 20 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconLink.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconLogIn.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/IconLogIn.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Iconlogin: () => (/* binding */ Iconlogin)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Iconlogin() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { fill: \"var(--white)\", height: \"20\", \"icon-name\": \"logout-outline\", viewBox: \"0 0 20 20\", width: \"20\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M11.991 10.625H1v-1.25h10.991l-1.933-1.933.884-.884 3 3a.624.624 0 0 1 0 .884l-3 3-.884-.884 1.933-1.933ZM15.375 1h-9.75A2.629 2.629 0 0 0 3 3.625v.792h1.25v-.792A1.377 1.377 0 0 1 5.625 2.25h9.75a1.377 1.377 0 0 1 1.375 1.375v12.75a1.377 1.377 0 0 1-1.375 1.375h-9.75a1.377 1.377 0 0 1-1.375-1.375v-.792H3v.792A2.63 2.63 0 0 0 5.625 19h9.75A2.63 2.63 0 0 0 18 16.375V3.625A2.63 2.63 0 0 0 15.375 1Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconLogIn.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconMenu.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconMenu.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconMenu: () => (/* binding */ IconMenu)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconMenu() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconMenu.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconMessage.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/IconMessage.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconMessage: () => (/* binding */ IconMessage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconMessage() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconMessage.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconNew.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/IconNew.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconNew: () => (/* binding */ IconNew)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconNew() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { style: { height: 21, marginRight: 5.5 }, version: \"1.1\", id: \"_x32_\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\", viewBox: \"0 0 512 512\", xmlSpace: \"preserve\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M13.175,203.061c0,0-0.004-0.013-0.007-0.026l-0.672-1.763L13.175,203.061z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M17.239,163.415l11.178-7.3c0.006,0,0.012-0.007,0.019-0.014L17.239,163.415z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M480.364,260.466c-0.549-1.436-0.823-2.951-0.823-4.466c0-1.521,0.274-3.042,0.826-4.492l16.869-44.275\\r\\n\\t\\tl1.586-4.172c1.74-4.564,2.582-9.324,2.582-14.006c0.006-12.986-6.458-25.516-17.835-32.953l-5.599-3.656l-37.84-24.708\\r\\n\\t\\tc-2.569-1.684-4.447-4.276-5.25-7.247l-13.548-50.047c-4.675-17.23-20.28-29.075-37.978-29.075c-0.669,0-1.335,0.013-2.004,0.052\\r\\n\\t\\tL329.766,44v-0.006l-0.774,0.02c-2.896,0-5.687-0.98-7.933-2.788l-37.766-30.42l-2.598-2.089\\r\\n\\t\\tC273.507,2.912,264.725-0.006,256.002,0c-8.72-0.013-17.504,2.912-24.697,8.717l0.01-0.007L195.11,37.87l-4.159,3.35\\r\\n\\t\\tc-2.256,1.815-5.057,2.795-7.94,2.795L182.338,44l-51.555-2.572l-0.033-0.007c-0.8-0.046-1.502-0.052-2.102-0.052\\r\\n\\t\\tc-17.701,0-33.303,11.844-37.978,29.075l-13.549,50.047c-0.806,2.983-2.693,5.582-5.278,7.273l-3.732,2.436l-39.694,25.915\\r\\n\\t\\tc-11.371,7.444-17.828,19.966-17.822,32.946c0,4.675,0.839,9.415,2.573,13.973l18.465,48.473l0.003,0.006\\r\\n\\t\\tc0.548,1.437,0.826,2.965,0.826,4.486c0,1.522-0.274,3.043-0.826,4.48l-18.461,48.46l0.003-0.006\\r\\n\\t\\tc-1.74,4.564-2.583,9.318-2.583,13.999c-0.006,12.987,6.451,25.523,17.838,32.966l32.218,21.038l11.201,7.313\\r\\n\\t\\tc2.583,1.684,4.463,4.27,5.269,7.26l13.549,50.041c4.671,17.23,20.28,29.075,37.978,29.081c0.6-0.006,1.254-0.013,1.952-0.052\\r\\n\\t\\tl-1.482,0.078l53.439-2.67h-0.026l0.5-0.007c2.866,0,5.658,0.98,7.91,2.795l40.371,32.522h0.003\\r\\n\\t\\tc7.185,5.792,15.964,8.71,24.687,8.704c8.72,0.007,17.502-2.912,24.691-8.71l43.841-35.318l-3.467,2.795\\r\\n\\t\\tc2.253-1.815,5.038-2.788,7.907-2.788l0.6,0.013l52.189,2.605l-0.262-0.012c0.568,0.026,1.186,0.039,1.855,0.045\\r\\n\\t\\tc17.691-0.006,33.306-11.844,37.978-29.081l13.548-50.041c0.806-2.99,2.684-5.569,5.262-7.254l43.45-28.37\\r\\n\\t\\tc11.364-7.444,17.818-19.966,17.812-32.947c0-4.682-0.842-9.442-2.586-14.012L480.364,260.466z M455.38,241.988\\r\\n\\t\\tc-1.72,4.512-2.582,9.265-2.582,14.012c0,4.754,0.862,9.507,2.582,14.019l18.449,48.44l0.003,0.007\\r\\n\\t\\tc0.565,1.482,0.829,2.984,0.829,4.473c-0.007,4.166-2.063,8.188-5.716,10.571l-43.41,28.344h0.003\\r\\n\\t\\tc-8.086,5.275-13.95,13.346-16.474,22.67l-13.548,50.04c-1.485,5.524-6.513,9.324-12.16,9.317l-0.751-0.02l-0.189-0.006\\r\\n\\t\\tl-51.474-2.566h0.036c-0.634-0.039-1.303-0.052-2.004-0.059c-8.968,0-17.685,3.069-24.694,8.717l-3.47,2.801l-36.897,29.721\\r\\n\\t\\tc-2.324,1.874-5.086,2.788-7.91,2.788c-2.82,0-5.586-0.914-7.913-2.788l-40.368-32.522c-7.006-5.641-15.719-8.71-24.69-8.71\\r\\n\\t\\tc-0.601,0-1.303,0.007-2.106,0.052v0.007l-51.64,2.579l0.016-0.006l-0.652,0.013c-5.642,0.006-10.676-3.794-12.161-9.317\\r\\n\\t\\tl-13.548-50.04c-2.524-9.324-8.387-17.394-16.474-22.67l-32.212-21.031l-11.194-7.313c-3.65-2.377-5.713-6.405-5.72-10.578\\r\\n\\t\\tc0.003-1.496,0.265-2.997,0.826-4.466l18.461-48.454l-0.003,0.007c1.72-4.518,2.582-9.265,2.582-14.019\\r\\n\\t\\tc0-4.753-0.858-9.506-2.582-14.018L38.848,195.33l-0.679-1.776c-0.565-1.489-0.826-2.997-0.83-4.492\\r\\n\\t\\tc0.007-4.172,2.067-8.188,5.716-10.564l43.414-28.343l0.007-0.007c8.082-5.288,13.94-13.352,16.464-22.67l13.548-50.047\\r\\n\\t\\tc1.482-5.517,6.523-9.324,12.161-9.317l0.503,0.006l51.91,2.592l0.056,0.007c0.63,0.026,1.264,0.04,1.894,0.046\\r\\n\\t\\tc8.968,0,17.688-3.063,24.701-8.704l40.386-32.529c2.321-1.874,5.08-2.782,7.904-2.788c2.821,0,5.583,0.914,7.907,2.788\\r\\n\\t\\tl-2.602-2.096l42.979,34.618c7.022,5.654,15.752,8.704,24.707,8.704c0.666,0,1.263-0.02,1.792-0.033h-0.14l52.075-2.599h0.035\\r\\n\\t\\tl0.601-0.013c5.641-0.007,10.678,3.8,12.16,9.317l13.548,50.047c2.524,9.317,8.38,17.381,16.464,22.67l49.018,32.006l-5.602-3.656\\r\\n\\t\\tc3.653,2.377,5.71,6.392,5.716,10.558c0,1.496-0.264,2.998-0.832,4.492l-20.832,54.683L455.38,241.988z\" }))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconNew.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconNight.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/IconNight.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconNight: () => (/* binding */ IconNight)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconNight() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { fill: \"var(--white)\", height: \"20\", \"icon-name\": \"night-outline\", viewBox: \"0 0 20 20\", width: \"20\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M9.875 19a9.073 9.073 0 0 1-8.48-5.78 1.094 1.094 0 0 1 .247-1.191 1.145 1.145 0 0 1 1.232-.255c1.13.449 2.361.587 3.564.4A6.89 6.89 0 0 0 12.17 6.44a6.806 6.806 0 0 0-.394-3.564 1.148 1.148 0 0 1 .255-1.231 1.1 1.1 0 0 1 1.193-.248 9.082 9.082 0 0 1 5.746 9.254 9.184 9.184 0 0 1-8.32 8.32 11.93 11.93 0 0 1-.775.028Zm-7.206-5.967A7.871 7.871 0 1 0 13.033 2.668 8.116 8.116 0 0 1 2.669 13.033Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconNight.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconPdf.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/IconPdf.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconPdf: () => (/* binding */ IconPdf)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconPdf() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"20\", height: \"20\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconPdf.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconPencil.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/IconPencil.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconPencil: () => (/* binding */ IconPencil)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconPencil() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M0 14.2501V18.0001H3.75L14.81 6.94006L11.06 3.19006L0 14.2501ZM17.71 4.04006C18.1 3.65006 18.1 3.02006 17.71 2.63006L15.37 0.290059C14.98 -0.0999414 14.35 -0.0999414 13.96 0.290059L12.13 2.12006L15.88 5.87006L17.71 4.04006Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconPencil.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconPicture.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/IconPicture.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconPicture: () => (/* binding */ IconPicture)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconPicture() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconPicture.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconRecord.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/IconRecord.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconRecord: () => (/* binding */ IconRecord)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconRecord() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"20\", height: \"18\", viewBox: \"0 0 20 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconRecord.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconRedditDefault.tsx":
/*!************************************************!*\
  !*** ./src/shared/Icons/IconRedditDefault.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconRedditDefault: () => (/* binding */ IconRedditDefault)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _img_redditAnonimBlue_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/redditAnonimBlue.png */ \"./src/img/redditAnonimBlue.png\");\n/* harmony import */ var _img_redditAnonimGreen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../img/redditAnonimGreen.png */ \"./src/img/redditAnonimGreen.png\");\n/* harmony import */ var _img_redditAnonimBrown_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../img/redditAnonimBrown.png */ \"./src/img/redditAnonimBrown.png\");\n/* harmony import */ var _img_redditAnonimYellow_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../img/redditAnonimYellow.png */ \"./src/img/redditAnonimYellow.png\");\n/* harmony import */ var _img_redditAnonimRed_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../img/redditAnonimRed.png */ \"./src/img/redditAnonimRed.png\");\n/* harmony import */ var _img_redditDefaultImagePurple_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../img/redditDefaultImagePurple.png */ \"./src/img/redditDefaultImagePurple.png\");\n\n\n\n\n\n\n\nfunction IconRedditDefault({ className }) {\n    const imagesDefault = [\n        { image: _img_redditAnonimBlue_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"] },\n        { image: _img_redditAnonimGreen_png__WEBPACK_IMPORTED_MODULE_2__[\"default\"] },\n        { image: _img_redditAnonimBrown_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"] },\n        { image: _img_redditAnonimYellow_png__WEBPACK_IMPORTED_MODULE_4__[\"default\"] },\n        { image: _img_redditAnonimRed_png__WEBPACK_IMPORTED_MODULE_5__[\"default\"] },\n        { image: _img_redditDefaultImagePurple_png__WEBPACK_IMPORTED_MODULE_6__[\"default\"] },\n    ];\n    function shuffle(array) {\n        const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n        (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n            setImage(array.sort(() => Math.random() - 0.5)[0].image);\n        }, []);\n        return image;\n    }\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"img\", { className: className, src: shuffle(imagesDefault) }));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconRedditDefault.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconReport.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/IconReport.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconReport: () => (/* binding */ IconReport)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconReport() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"16\", height: \"14\", viewBox: \"0 0 16 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconReport.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconReverse.tsx":
/*!******************************************!*\
  !*** ./src/shared/Icons/IconReverse.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconReverse: () => (/* binding */ IconReverse)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconReverse() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"22\", height: \"16\", viewBox: \"0 0 22 16\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconReverse.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconRocket.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/IconRocket.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconRocket: () => (/* binding */ IconRocket)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconRocket() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { viewBox: \"0 0 32 32\", version: \"1.1\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"title\", null, \"rocket\"),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M23.371 29.529c0 0 0.335-2.012-1.731-4.469 2.011-5.641 2.29-10.778 2.29-10.778s4.133 0.95 4.133 5.026c-0.001 6.981-4.692 10.221-4.692 10.221zM11.979 27.078c0 0-2.768-8.883-2.768-12.568 0-1.658 0.187-3.133 0.478-4.472h12.61c0.293 1.34 0.481 2.816 0.481 4.473 0 3.629-2.76 12.567-2.76 12.567h-8.041zM15.99 12.069c-1.418 0-2.568 1.15-2.568 2.569 0 1.418 1.15 2.569 2.568 2.569s2.569-1.15 2.569-2.569c0.001-1.419-1.15-2.569-2.569-2.569zM15.438 0.596v-3.498h1v3.409c1.143 0.832 4.236 3.478 5.635 8.575h-12.16c1.352-4.957 4.296-7.574 5.525-8.486zM8.629 29.529c0 0-4.691-3.24-4.691-10.221 0-4.076 4.133-5.026 4.133-5.026s0.279 5.137 2.289 10.778c-2.067 2.458-1.731 4.469-1.731 4.469zM17.691 30.045l-0.838-0.838-0.893 2.793-1.062-2.793-0.726 1.451-1.062-2.625h5.752l-1.171 2.012z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconRocket.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconSave.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconSave.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconSave: () => (/* binding */ IconSave)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconSave() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"14\", height: \"14\", viewBox: \"0 0 14 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconSave.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconSaveMobile.tsx":
/*!*********************************************!*\
  !*** ./src/shared/Icons/IconSaveMobile.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconSaveMobile: () => (/* binding */ IconSaveMobile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconSaveMobile() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"27\", height: \"27\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"#1A282D\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z\", fill: \"#D7DADC\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconSaveMobile.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconShare.tsx":
/*!****************************************!*\
  !*** ./src/shared/Icons/IconShare.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconShare: () => (/* binding */ IconShare)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconShare() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"12\", height: \"14\", viewBox: \"0 0 12 14\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconShare.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconShareForm.tsx":
/*!********************************************!*\
  !*** ./src/shared/Icons/IconShareForm.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconShareForm: () => (/* binding */ IconShareForm)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconShareForm() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"20\", height: \"10\", viewBox: \"0 0 20 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconShareForm.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconShareMobile.tsx":
/*!**********************************************!*\
  !*** ./src/shared/Icons/IconShareMobile.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconShareMobile: () => (/* binding */ IconShareMobile)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconShareMobile() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"26\", height: \"26\", viewBox: \"0 0 20 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { cx: \"10\", cy: \"10\", r: \"10\", fill: \"var(--mobileButton)\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z\", fill: \"var(--commentsButtonColor)\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconShareMobile.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconSwitch.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/IconSwitch.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconSwitch: () => (/* binding */ IconSwitch)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconSwitch() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"16\", height: \"8\", viewBox: \"0 0 20 12\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconSwitch.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconTelegram.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/IconTelegram.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconTelegram: () => (/* binding */ IconTelegram)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconTelegram({ className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { className: className, height: \"31\", viewBox: \"0 0 34 34\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", { fill: \"none\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { cx: \"17\", cy: \"17\", fill: \"#1c93e3\", r: \"17\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"m7.06510669 16.9258959c5.22739451-2.1065178 8.71314291-3.4952633 10.45724521-4.1662364 4.9797665-1.9157646 6.0145193-2.2485535 6.6889567-2.2595423.1483363-.0024169.480005.0315855.6948461.192827.1814076.1361492.23132.3200675.2552048.4491519.0238847.1290844.0536269.4231419.0299841.65291-.2698553 2.6225356-1.4375148 8.986738-2.0315537 11.9240228-.2513602 1.2428753-.7499132 1.5088847-1.2290685 1.5496672-1.0413153.0886298-1.8284257-.4857912-2.8369905-1.0972863-1.5782048-.9568691-2.5327083-1.3984317-4.0646293-2.3321592-1.7703998-1.0790837-.212559-1.583655.7963867-2.5529189.2640459-.2536609 4.7753906-4.3097041 4.755976-4.431706-.0070494-.0442984-.1409018-.481649-.2457499-.5678447-.104848-.0861957-.2595946-.0567202-.3712641-.033278-.1582881.0332286-2.6794907 1.5745492-7.5636077 4.6239616-.715635.4545193-1.3638349.6759763-1.9445998.6643712-.64024672-.0127938-1.87182452-.334829-2.78737602-.6100966-1.12296117-.3376271-1.53748501-.4966332-1.45976769-1.0700283.04048-.2986597.32581586-.610598.8560076-.935815z\", fill: \"#fff\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"m49.4 24v-12.562h-4.224v-2.266h11.198v2.266h-4.268v12.562zm16.094-4.598h-7.172c.066 1.936 1.562 2.772 3.3 2.772 1.254 0 2.134-.198 2.97-.484l.396 1.848c-.924.396-2.2.682-3.74.682-3.476 0-5.522-2.134-5.522-5.412 0-2.97 1.804-5.764 5.236-5.764 3.476 0 4.62 2.86 4.62 5.214 0 .506-.044.902-.088 1.144zm-7.172-1.892h4.708c.022-.99-.418-2.618-2.222-2.618-1.672 0-2.376 1.518-2.486 2.618zm9.538 6.49v-15.62h2.706v15.62zm14.84-4.598h-7.172c.066 1.936 1.562 2.772 3.3 2.772 1.254 0 2.134-.198 2.97-.484l.396 1.848c-.924.396-2.2.682-3.74.682-3.476 0-5.522-2.134-5.522-5.412 0-2.97 1.804-5.764 5.236-5.764 3.476 0 4.62 2.86 4.62 5.214 0 .506-.044.902-.088 1.144zm-7.172-1.892h4.708c.022-.99-.418-2.618-2.222-2.618-1.672 0-2.376 1.518-2.486 2.618zm19.24-1.144v6.072c0 2.244-.462 3.85-1.584 4.862-1.1.99-2.662 1.298-4.136 1.298-1.364 0-2.816-.308-3.74-.858l.594-2.046c.682.396 1.826.814 3.124.814 1.76 0 3.08-.924 3.08-3.234v-.924h-.044c-.616.946-1.694 1.584-3.124 1.584-2.662 0-4.554-2.2-4.554-5.236 0-3.52 2.288-5.654 4.862-5.654 1.65 0 2.596.792 3.102 1.672h.044l.11-1.43h2.354c-.044.726-.088 1.606-.088 3.08zm-2.706 2.948v-1.738c0-.264-.022-.506-.088-.726-.286-.99-1.056-1.738-2.2-1.738-1.518 0-2.64 1.32-2.64 3.498 0 1.826.924 3.3 2.618 3.3 1.012 0 1.892-.66 2.2-1.65.088-.264.11-.638.11-.946zm5.622 4.686v-7.26c0-1.452-.022-2.508-.088-3.454h2.332l.11 2.024h.066c.528-1.496 1.782-2.266 2.948-2.266.264 0 .418.022.638.066v2.53c-.242-.044-.484-.066-.814-.066-1.276 0-2.178.814-2.42 2.046-.044.242-.066.528-.066.814v5.566zm16.05-6.424v3.85c0 .968.044 1.914.176 2.574h-2.442l-.198-1.188h-.066c-.638.836-1.76 1.43-3.168 1.43-2.156 0-3.366-1.562-3.366-3.19 0-2.684 2.398-4.07 6.358-4.048v-.176c0-.704-.286-1.87-2.178-1.87-1.056 0-2.156.33-2.882.792l-.528-1.76c.792-.484 2.178-.946 3.872-.946 3.432 0 4.422 2.178 4.422 4.532zm-2.64 2.662v-1.474c-1.914-.022-3.74.374-3.74 2.002 0 1.056.682 1.54 1.54 1.54 1.1 0 1.87-.704 2.134-1.474.066-.198.066-.396.066-.594zm5.6 3.762v-7.524c0-1.232-.044-2.266-.088-3.19h2.31l.132 1.584h.066c.506-.836 1.474-1.826 3.3-1.826 1.408 0 2.508.792 2.97 1.98h.044c.374-.594.814-1.034 1.298-1.342.616-.418 1.298-.638 2.2-.638 1.76 0 3.564 1.21 3.564 4.642v6.314h-2.64v-5.918c0-1.782-.616-2.838-1.914-2.838-.924 0-1.606.66-1.892 1.43-.088.242-.132.594-.132.902v6.424h-2.64v-6.204c0-1.496-.594-2.552-1.848-2.552-1.012 0-1.694.792-1.958 1.518-.088.286-.132.594-.132.902v6.336z\" }))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconTelegram.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconTop.tsx":
/*!**************************************!*\
  !*** ./src/shared/Icons/IconTop.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconTop: () => (/* binding */ IconTop)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconTop() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { style: { height: 20 }, version: \"1.1\", id: \"Layer_1\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\", viewBox: \"0 0 512 512\", xmlSpace: \"preserve\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"polygon\", { points: \"187.115,176.384 187.115,344.495 324.883,344.495 324.883,176.384 390.443,176.384 \\r\\n\\t256,14.694 121.556,176.384 \" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", null,\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M324.883,359.187H187.115c-8.115,0-14.694-6.58-14.694-14.694V191.077h-50.866\\r\\n\\t\\tc-5.698,0-10.883-3.294-13.304-8.455c-2.42-5.159-1.638-11.251,2.006-15.634L244.701,5.298C247.492,1.941,251.633,0,255.999,0\\r\\n\\t\\tc4.365,0,8.508,1.941,11.298,5.298l134.443,161.69c3.644,4.382,4.426,10.475,2.006,15.634c-2.42,5.16-7.604,8.455-13.303,8.455\\r\\n\\t\\th-50.866v153.416C339.577,352.609,332.998,359.187,324.883,359.187z M201.809,329.8H310.19V176.384\\r\\n\\t\\tc0-8.114,6.578-14.694,14.694-14.694h34.233L256,37.676L152.884,161.69h34.233c8.115,0,14.694,6.58,14.694,14.694V329.8H201.809z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M464.648,512H47.352c-8.115,0-14.694-6.58-14.694-14.694V332.739\\r\\n\\t\\tc0-8.114,6.578-14.694,14.694-14.694h95.683c8.115,0,14.694,6.58,14.694,14.694v44.081h133.047c8.115,0,14.694,6.58,14.694,14.694\\r\\n\\t\\ts-6.578,14.694-14.694,14.694h-147.74c-8.115,0-14.694-6.58-14.694-14.694v-44.081H62.046v135.18h387.909v-135.18h-66.296v44.081\\r\\n\\t\\tc0,8.114-6.578,14.694-14.694,14.694s-14.694-6.58-14.694-14.694v-58.774c0-8.114,6.578-14.694,14.694-14.694h95.683\\r\\n\\t\\tc8.115,0,14.694,6.58,14.694,14.694v164.567C479.341,505.422,472.763,512,464.648,512z\" }))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconTop.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconTriangle.tsx":
/*!*******************************************!*\
  !*** ./src/shared/Icons/IconTriangle.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconTriangle: () => (/* binding */ IconTriangle)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconTriangle() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"19\", height: \"10\", viewBox: \"0 0 19 10\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M9.5 0L0 10H19L9.5 0Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconTriangle.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconUser.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconUser.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconUser: () => (/* binding */ IconUser)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconUser() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"18\", height: \"18\", viewBox: \"0 0 18 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconUser.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconVk.tsx":
/*!*************************************!*\
  !*** ./src/shared/Icons/IconVk.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconVk: () => (/* binding */ IconVk)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconVk({ className }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { className: className, width: \"31\", height: \"31\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M11.5 24h1c5.44 0 8.15 0 9.83-1.68C24 20.64 24 17.92 24 12.5v-1.02c0-5.4 0-8.12-1.67-9.8C20.65 0 17.93 0 12.5 0h-1C6.06 0 3.35 0 1.67 1.68 0 3.36 0 6.08 0 11.5v1.02c0 5.4 0 8.12 1.68 9.8C3.36 24 6.08 24 11.5 24Z\", fill: \"#07F\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M12.77 17.29c-5.47 0-8.59-3.75-8.72-9.99h2.74c.09 4.58 2.11 6.52 3.71 6.92V7.3h2.58v3.95c1.58-.17 3.24-1.97 3.8-3.95h2.58a7.62 7.62 0 0 1-3.51 4.98 7.9 7.9 0 0 1 4.11 5.01h-2.84a4.94 4.94 0 0 0-4.14-3.57v3.57h-.31Z\", fill: \"#fff\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconVk.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconWord.tsx":
/*!***************************************!*\
  !*** ./src/shared/Icons/IconWord.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconWord: () => (/* binding */ IconWord)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconWord() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"16\", height: \"18\", viewBox: \"0 0 16 18\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconWord.tsx?");

/***/ }),

/***/ "./src/shared/Icons/IconX.tsx":
/*!************************************!*\
  !*** ./src/shared/Icons/IconX.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconX: () => (/* binding */ IconX)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction IconX() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { width: \"21\", height: \"21\", viewBox: \"0 0 21 21\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z\", fill: \"#ADADAD\" }),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z\", fill: \"#ADADAD\" })));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/IconX.tsx?");

/***/ }),

/***/ "./src/shared/Icons/RedditLogo.tsx":
/*!*****************************************!*\
  !*** ./src/shared/Icons/RedditLogo.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   RedditLogo: () => (/* binding */ RedditLogo)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _shared_Header_LogoLink_logoLink_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/Header/LogoLink/logoLink.css */ \"./src/shared/Header/LogoLink/logoLink.css\");\n\n\nfunction RedditLogo() {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null,\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { className: _shared_Header_LogoLink_logoLink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].logo, xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\", viewBox: \"0 0 216 216\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"defs\", null,\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient\", cx: \"169.75\", cy: \"92.19\", fx: \"169.75\", fy: \"92.19\", r: \"50.98\", gradientTransform: \"translate(0 11.64) scale(1 .87)\", gradientUnits: \"userSpaceOnUse\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"0\", stopColor: \"#feffff\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".4\", stopColor: \"#feffff\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".51\", stopColor: \"#f9fcfc\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".62\", stopColor: \"#edf3f5\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".7\", stopColor: \"#dee9ec\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".72\", stopColor: \"#d8e4e8\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".76\", stopColor: \"#ccd8df\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".8\", stopColor: \"#c8d5dd\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".83\", stopColor: \"#ccd6de\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".85\", stopColor: \"#d8dbe2\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".88\", stopColor: \"#ede3e9\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".9\", stopColor: \"#ffebef\" })),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-2\", cx: \"47.31\", fx: \"47.31\", r: \"50.98\", xlinkHref: \"#snoo-radial-gragient\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-3\", cx: \"109.61\", cy: \"85.59\", fx: \"109.61\", fy: \"85.59\", r: \"153.78\", gradientTransform: \"translate(0 25.56) scale(1 .7)\", xlinkHref: \"#snoo-radial-gragient\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-4\", cx: \"-6.01\", cy: \"64.68\", fx: \"-6.01\", fy: \"64.68\", r: \"12.85\", gradientTransform: \"translate(81.08 27.26) scale(1.07 1.55)\", gradientUnits: \"userSpaceOnUse\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"0\", stopColor: \"#f60\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".5\", stopColor: \"#ff4500\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".7\", stopColor: \"#fc4301\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".82\", stopColor: \"#f43f07\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".92\", stopColor: \"#e53812\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"1\", stopColor: \"#d4301f\" })),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-5\", cx: \"-73.55\", cy: \"64.68\", fx: \"-73.55\", fy: \"64.68\", r: \"12.85\", gradientTransform: \"translate(62.87 27.26) rotate(-180) scale(1.07 -1.55)\", xlinkHref: \"#snoo-radial-gragient-4\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-6\", cx: \"107.93\", cy: \"166.96\", fx: \"107.93\", fy: \"166.96\", r: \"45.3\", gradientTransform: \"translate(0 57.4) scale(1 .66)\", gradientUnits: \"userSpaceOnUse\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"0\", stopColor: \"#172e35\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".29\", stopColor: \"#0e1c21\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".73\", stopColor: \"#030708\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \"1\", stopColor: \"#000\" })),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-7\", cx: \"147.88\", cy: \"32.94\", fx: \"147.88\", fy: \"32.94\", r: \"39.77\", gradientTransform: \"translate(0 .54) scale(1 .98)\", xlinkHref: \"#snoo-radial-gragient\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"radialGradient\", { id: \"snoo-radial-gragient-8\", cx: \"131.31\", cy: \"73.08\", fx: \"131.31\", fy: \"73.08\", r: \"32.6\", gradientUnits: \"userSpaceOnUse\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".48\", stopColor: \"#7a9299\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".67\", stopColor: \"#172e35\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".75\", stopColor: \"#000\" }),\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"stop\", { offset: \".82\", stopColor: \"#172e35\" }))),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"#ff4500\", d: \"m108,0h0C48.35,0,0,48.35,0,108h0c0,29.82,12.09,56.82,31.63,76.37l-20.57,20.57c-4.08,4.08-1.19,11.06,4.58,11.06h92.36s0,0,0,0c59.65,0,108-48.35,108-108h0C216,48.35,167.65,0,108,0Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { fill: \"url(#snoo-radial-gragient)\", cx: \"169.22\", cy: \"106.98\", r: \"25.22\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { fill: \"url(#snoo-radial-gragient-2)\", cx: \"46.78\", cy: \"106.98\", r: \"25.22\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ellipse\", { fill: \"url(#snoo-radial-gragient-3)\", cx: \"108.06\", cy: \"128.64\", rx: \"72\", ry: \"54\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"url(#snoo-radial-gragient-4)\", d: \"m86.78,123.48c-.42,9.08-6.49,12.38-13.56,12.38s-12.46-4.93-12.04-14.01c.42-9.08,6.49-15.02,13.56-15.02s12.46,7.58,12.04,16.66Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"url(#snoo-radial-gragient-5)\", d: \"m129.35,123.48c.42,9.08,6.49,12.38,13.56,12.38s12.46-4.93,12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46,7.58-12.04,16.66Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ellipse\", { fill: \"#ffc49c\", cx: \"79.63\", cy: \"116.37\", rx: \"2.8\", ry: \"3.05\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"ellipse\", { fill: \"#ffc49c\", cx: \"146.21\", cy: \"116.37\", rx: \"2.8\", ry: \"3.05\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"url(#snoo-radial-gragient-6)\", d: \"m108.06,142.92c-8.76,0-17.16.43-24.92,1.22-1.33.13-2.17,1.51-1.65,2.74,4.35,10.39,14.61,17.69,26.57,17.69s22.23-7.3,26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"circle\", { fill: \"url(#snoo-radial-gragient-7)\", cx: \"147.49\", cy: \"49.43\", r: \"17.87\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"url(#snoo-radial-gragient-8)\", d: \"m107.8,76.92c-2.14,0-3.87-.89-3.87-2.27,0-16.01,13.03-29.04,29.04-29.04,2.14,0,3.87,1.73,3.87,3.87s-1.73,3.87-3.87,3.87c-11.74,0-21.29,9.55-21.29,21.29,0,1.38-1.73,2.27-3.87,2.27Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"#842123\", d: \"m62.82,122.65c.39-8.56,6.08-14.16,12.69-14.16,6.26,0,11.1,6.39,11.28,14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14,6.05-13.56,15.2c-.42,9.15,4.97,13.83,12.04,13.83.17,0,.35,0,.52,0-6.44-.16-11.3-4.79-10.91-13.2Z\" }),\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { fill: \"#842123\", d: \"m153.3,122.65c-.39-8.56-6.08-14.16-12.69-14.16-6.26,0-11.1,6.39-11.28,14.33-.17-8.88,5.13-15.99,12.05-15.99,7.07,0,13.14,6.05,13.56,15.2.42,9.15-4.97,13.83-12.04,13.83-.17,0-.35,0-.52,0,6.44-.16,11.3-4.79,10.91-13.2Z\" })),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { className: _shared_Header_LogoLink_logoLink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].title, viewBox: \"0 0 439 149\", xmlns: \"http://www.w3.org/2000/svg\", xmlSpace: \"preserve\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", { fill: \"var(--logoColor)\" },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"m71.62,45.92l-12.01,28.56c-1.51-.76-5.11-1.61-8.51-1.61s-6.81.85-10.12,2.46c-6.53,3.31-11.35,9.93-11.35,19.48v52.3H-.26V45.35h29.04v14.28h.57c6.81-9.08,17.21-15.79,30.74-15.79,4.92,0,9.65.95,11.54,2.08Z\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"m65.84,96.52c0-29.41,20.15-52.68,50.32-52.68,27.33,0,46.91,19.96,46.91,48.05,0,4.92-.47,9.55-1.51,14h-68.48c3.12,10.69,12.39,19.01,26.29,19.01,7.66,0,18.54-2.74,24.4-7.28l9.27,22.32c-8.61,5.86-21.75,8.7-33.29,8.7-32.25,0-53.91-20.81-53.91-52.11Zm26.67-9.36h43.03c0-13.05-8.89-19.96-19.77-19.96-12.3,0-20.62,7.94-23.27,19.96Z\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"m419.53-.37c10.03,0,18.25,8.23,18.25,18.25s-8.23,18.25-18.25,18.25-18.25-8.23-18.25-18.25S409.51-.37,419.53-.37Zm14.94,147.49h-29.89V45.35h29.89v101.77Z\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"m246,1.47l-.09,53.53h-.57c-8.23-7.85-17.12-11.07-28.75-11.07-28.66,0-47.67,23.08-47.67,52.3s17.78,52.4,46.72,52.4c12.11,0,23.55-4.16,30.93-13.62h.85v12.11h28.47V1.47h-29.89Zm1.42,121.39h-.99l-6.67-6.93c-4.34,4.33-10.28,6.93-17.22,6.93-14.64,0-24.88-11.58-24.88-26.6s10.24-26.6,24.88-26.6,24.88,11.58,24.88,26.6v26.6Z\" }),\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"path\", { d: \"m360.15,1.47l-.09,53.53h-.57c-8.23-7.85-17.12-11.07-28.75-11.07-28.66,0-47.67,23.08-47.67,52.3s17.78,52.4,46.72,52.4c12.11,0,23.55-4.16,30.93-13.62h.85v12.11h28.47V1.47h-29.89Zm1.28,121.39h-.99l-6.67-6.93c-4.34,4.33-10.28,6.93-17.22,6.93-14.64,0-24.88-11.58-24.88-26.6s10.24-26.6,24.88-26.6,24.88,11.58,24.88,26.6v26.6Z\" }))),\n        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"svg\", { className: _shared_Header_LogoLink_logoLink_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].namix, viewBox: \"0 0 65 22\", xmlns: \"http://www.w3.org/2000/svg\", xmlnsXlink: \"http://www.w3.org/1999/xlink\" },\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"g\", { transform: \"translate(0 0)\" },\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"text\", { transform: \"translate(1 20)\", fill: \"#9e9e9e\", fontSize: \"22\", fontFamily: \"Roboto-Bold,Roboto\" },\n                    react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"tspan\", { x: \"0\", y: \"0\" }, \"namix\"))))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/RedditLogo.tsx?");

/***/ }),

/***/ "./src/shared/Icons/index.ts":
/*!***********************************!*\
  !*** ./src/shared/Icons/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   IconAnonim: () => (/* reexport safe */ _IconAnonim__WEBPACK_IMPORTED_MODULE_0__.IconAnonim),\n/* harmony export */   IconArrow: () => (/* reexport safe */ _IconArrow__WEBPACK_IMPORTED_MODULE_24__.IconArrow),\n/* harmony export */   IconComments: () => (/* reexport safe */ _IconComments__WEBPACK_IMPORTED_MODULE_2__.IconComments),\n/* harmony export */   IconDownload: () => (/* reexport safe */ _IconDownload__WEBPACK_IMPORTED_MODULE_15__.IconDownload),\n/* harmony export */   IconEmail: () => (/* reexport safe */ _IconEmail__WEBPACK_IMPORTED_MODULE_36__.IconEmail),\n/* harmony export */   IconFile: () => (/* reexport safe */ _IconFile__WEBPACK_IMPORTED_MODULE_14__.IconFile),\n/* harmony export */   IconFire: () => (/* reexport safe */ _IconFire__WEBPACK_IMPORTED_MODULE_27__.IconFire),\n/* harmony export */   IconGitLab: () => (/* reexport safe */ _IconGitLab__WEBPACK_IMPORTED_MODULE_33__.IconGitLab),\n/* harmony export */   IconGithub: () => (/* reexport safe */ _IconGithub__WEBPACK_IMPORTED_MODULE_32__.IconGithub),\n/* harmony export */   IconGrowth: () => (/* reexport safe */ _IconGrowth__WEBPACK_IMPORTED_MODULE_31__.IconGrowth),\n/* harmony export */   IconHide: () => (/* reexport safe */ _IconHide__WEBPACK_IMPORTED_MODULE_5__.IconHide),\n/* harmony export */   IconLink: () => (/* reexport safe */ _IconLink__WEBPACK_IMPORTED_MODULE_18__.IconLink),\n/* harmony export */   IconMenu: () => (/* reexport safe */ _IconMenu__WEBPACK_IMPORTED_MODULE_1__.IconMenu),\n/* harmony export */   IconMessage: () => (/* reexport safe */ _IconMessage__WEBPACK_IMPORTED_MODULE_20__.IconMessage),\n/* harmony export */   IconNew: () => (/* reexport safe */ _IconNew__WEBPACK_IMPORTED_MODULE_29__.IconNew),\n/* harmony export */   IconNight: () => (/* reexport safe */ _IconNight__WEBPACK_IMPORTED_MODULE_37__.IconNight),\n/* harmony export */   IconPdf: () => (/* reexport safe */ _IconPdf__WEBPACK_IMPORTED_MODULE_23__.IconPdf),\n/* harmony export */   IconPencil: () => (/* reexport safe */ _IconPencil__WEBPACK_IMPORTED_MODULE_21__.IconPencil),\n/* harmony export */   IconPicture: () => (/* reexport safe */ _IconPicture__WEBPACK_IMPORTED_MODULE_13__.IconPicture),\n/* harmony export */   IconRecord: () => (/* reexport safe */ _IconRecord__WEBPACK_IMPORTED_MODULE_19__.IconRecord),\n/* harmony export */   IconRedditDefault: () => (/* reexport safe */ _IconRedditDefault__WEBPACK_IMPORTED_MODULE_25__.IconRedditDefault),\n/* harmony export */   IconReport: () => (/* reexport safe */ _IconReport__WEBPACK_IMPORTED_MODULE_7__.IconReport),\n/* harmony export */   IconReverse: () => (/* reexport safe */ _IconReverse__WEBPACK_IMPORTED_MODULE_17__.IconReverse),\n/* harmony export */   IconRocket: () => (/* reexport safe */ _IconRocket__WEBPACK_IMPORTED_MODULE_26__.IconRocket),\n/* harmony export */   IconSave: () => (/* reexport safe */ _IconSave__WEBPACK_IMPORTED_MODULE_6__.IconSave),\n/* harmony export */   IconSaveMobile: () => (/* reexport safe */ _IconSaveMobile__WEBPACK_IMPORTED_MODULE_10__.IconSaveMobile),\n/* harmony export */   IconShare: () => (/* reexport safe */ _IconShare__WEBPACK_IMPORTED_MODULE_4__.IconShare),\n/* harmony export */   IconShareForm: () => (/* reexport safe */ _IconShareForm__WEBPACK_IMPORTED_MODULE_3__.IconShareForm),\n/* harmony export */   IconShareMobile: () => (/* reexport safe */ _IconShareMobile__WEBPACK_IMPORTED_MODULE_9__.IconShareMobile),\n/* harmony export */   IconSwitch: () => (/* reexport safe */ _IconSwitch__WEBPACK_IMPORTED_MODULE_12__.IconSwitch),\n/* harmony export */   IconTelegram: () => (/* reexport safe */ _IconTelegram__WEBPACK_IMPORTED_MODULE_35__.IconTelegram),\n/* harmony export */   IconTop: () => (/* reexport safe */ _IconTop__WEBPACK_IMPORTED_MODULE_30__.IconTop),\n/* harmony export */   IconTriangle: () => (/* reexport safe */ _IconTriangle__WEBPACK_IMPORTED_MODULE_8__.IconTriangle),\n/* harmony export */   IconUser: () => (/* reexport safe */ _IconUser__WEBPACK_IMPORTED_MODULE_16__.IconUser),\n/* harmony export */   IconVk: () => (/* reexport safe */ _IconVk__WEBPACK_IMPORTED_MODULE_34__.IconVk),\n/* harmony export */   IconWord: () => (/* reexport safe */ _IconWord__WEBPACK_IMPORTED_MODULE_22__.IconWord),\n/* harmony export */   IconX: () => (/* reexport safe */ _IconX__WEBPACK_IMPORTED_MODULE_11__.IconX),\n/* harmony export */   RedditLogo: () => (/* reexport safe */ _RedditLogo__WEBPACK_IMPORTED_MODULE_28__.RedditLogo)\n/* harmony export */ });\n/* harmony import */ var _IconAnonim__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IconAnonim */ \"./src/shared/Icons/IconAnonim.tsx\");\n/* harmony import */ var _IconMenu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IconMenu */ \"./src/shared/Icons/IconMenu.tsx\");\n/* harmony import */ var _IconComments__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IconComments */ \"./src/shared/Icons/IconComments.tsx\");\n/* harmony import */ var _IconShareForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./IconShareForm */ \"./src/shared/Icons/IconShareForm.tsx\");\n/* harmony import */ var _IconShare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./IconShare */ \"./src/shared/Icons/IconShare.tsx\");\n/* harmony import */ var _IconHide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./IconHide */ \"./src/shared/Icons/IconHide.tsx\");\n/* harmony import */ var _IconSave__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./IconSave */ \"./src/shared/Icons/IconSave.tsx\");\n/* harmony import */ var _IconReport__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./IconReport */ \"./src/shared/Icons/IconReport.tsx\");\n/* harmony import */ var _IconTriangle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./IconTriangle */ \"./src/shared/Icons/IconTriangle.tsx\");\n/* harmony import */ var _IconShareMobile__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IconShareMobile */ \"./src/shared/Icons/IconShareMobile.tsx\");\n/* harmony import */ var _IconSaveMobile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./IconSaveMobile */ \"./src/shared/Icons/IconSaveMobile.tsx\");\n/* harmony import */ var _IconX__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./IconX */ \"./src/shared/Icons/IconX.tsx\");\n/* harmony import */ var _IconSwitch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./IconSwitch */ \"./src/shared/Icons/IconSwitch.tsx\");\n/* harmony import */ var _IconPicture__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./IconPicture */ \"./src/shared/Icons/IconPicture.tsx\");\n/* harmony import */ var _IconFile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./IconFile */ \"./src/shared/Icons/IconFile.tsx\");\n/* harmony import */ var _IconDownload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./IconDownload */ \"./src/shared/Icons/IconDownload.tsx\");\n/* harmony import */ var _IconUser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./IconUser */ \"./src/shared/Icons/IconUser.tsx\");\n/* harmony import */ var _IconReverse__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./IconReverse */ \"./src/shared/Icons/IconReverse.tsx\");\n/* harmony import */ var _IconLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./IconLink */ \"./src/shared/Icons/IconLink.tsx\");\n/* harmony import */ var _IconRecord__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./IconRecord */ \"./src/shared/Icons/IconRecord.tsx\");\n/* harmony import */ var _IconMessage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./IconMessage */ \"./src/shared/Icons/IconMessage.tsx\");\n/* harmony import */ var _IconPencil__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./IconPencil */ \"./src/shared/Icons/IconPencil.tsx\");\n/* harmony import */ var _IconWord__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./IconWord */ \"./src/shared/Icons/IconWord.tsx\");\n/* harmony import */ var _IconPdf__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./IconPdf */ \"./src/shared/Icons/IconPdf.tsx\");\n/* harmony import */ var _IconArrow__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./IconArrow */ \"./src/shared/Icons/IconArrow.tsx\");\n/* harmony import */ var _IconRedditDefault__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./IconRedditDefault */ \"./src/shared/Icons/IconRedditDefault.tsx\");\n/* harmony import */ var _IconRocket__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./IconRocket */ \"./src/shared/Icons/IconRocket.tsx\");\n/* harmony import */ var _IconFire__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./IconFire */ \"./src/shared/Icons/IconFire.tsx\");\n/* harmony import */ var _RedditLogo__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./RedditLogo */ \"./src/shared/Icons/RedditLogo.tsx\");\n/* harmony import */ var _IconNew__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./IconNew */ \"./src/shared/Icons/IconNew.tsx\");\n/* harmony import */ var _IconTop__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./IconTop */ \"./src/shared/Icons/IconTop.tsx\");\n/* harmony import */ var _IconGrowth__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./IconGrowth */ \"./src/shared/Icons/IconGrowth.tsx\");\n/* harmony import */ var _IconGithub__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./IconGithub */ \"./src/shared/Icons/IconGithub.tsx\");\n/* harmony import */ var _IconGitLab__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./IconGitLab */ \"./src/shared/Icons/IconGitLab.tsx\");\n/* harmony import */ var _IconVk__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./IconVk */ \"./src/shared/Icons/IconVk.tsx\");\n/* harmony import */ var _IconTelegram__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./IconTelegram */ \"./src/shared/Icons/IconTelegram.tsx\");\n/* harmony import */ var _IconEmail__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./IconEmail */ \"./src/shared/Icons/IconEmail.tsx\");\n/* harmony import */ var _IconNight__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./IconNight */ \"./src/shared/Icons/IconNight.tsx\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Icons/index.ts?");

/***/ }),

/***/ "./src/shared/Layout/Layout.tsx":
/*!**************************************!*\
  !*** ./src/shared/Layout/Layout.tsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: () => (/* binding */ Layout)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _layout_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.css */ \"./src/shared/Layout/layout.css\");\n\n\nfunction Layout({ children }) {\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", { className: _layout_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].layout }, children));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Layout/Layout.tsx?");

/***/ }),

/***/ "./src/shared/Layout/index.ts":
/*!************************************!*\
  !*** ./src/shared/Layout/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Layout: () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_0__.Layout)\n/* harmony export */ });\n/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Layout */ \"./src/shared/Layout/Layout.tsx\");\n\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/Layout/index.ts?");

/***/ }),

/***/ "./src/shared/PostsSection/PostsSection.tsx":
/*!**************************************************!*\
  !*** ./src/shared/PostsSection/PostsSection.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   PostsSection: () => (/* binding */ PostsSection)\n/* harmony export */ });\n/* harmony import */ var _storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../storeRedux/storeSelectors */ \"./src/storeRedux/storeSelectors.ts\");\n/* harmony import */ var _hooks_useStopScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hooks/useStopScroll */ \"./src/hooks/useStopScroll.ts\");\n/* harmony import */ var _Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Loader/RedditLoader */ \"./src/Loader/RedditLoader/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _errorBanners_Error__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../errorBanners/Error */ \"./src/errorBanners/Error.tsx\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _postsSection_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postsSection.css */ \"./src/shared/PostsSection/postsSection.css\");\n\n\n\n\n\n\n\nfunction PostsSection({ children }) {\n    const { loading, afterList, error } = (0,_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.useAppSelector)(_storeRedux_storeSelectors__WEBPACK_IMPORTED_MODULE_0__.selectPostsBlock);\n    const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(() => {\n        if (location.pathname.includes('comments')) {\n            (0,_hooks_useStopScroll__WEBPACK_IMPORTED_MODULE_1__.setStopScroll)(true);\n        }\n        else {\n            (0,_hooks_useStopScroll__WEBPACK_IMPORTED_MODULE_1__.setStopScroll)(false);\n        }\n    }, [location]);\n    return (react__WEBPACK_IMPORTED_MODULE_3___default().createElement(\"section\", { className: _postsSection_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].posts },\n        loading && !afterList\n            ? react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_2__.RedditLoader, { className: _postsSection_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].loader })\n            : error && react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_errorBanners_Error__WEBPACK_IMPORTED_MODULE_4__.Error, { massage: error.message }),\n        children));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/PostsSection/PostsSection.tsx?");

/***/ }),

/***/ "./src/storeRedux/comments/commentsAsyncThunk.ts":
/*!*******************************************************!*\
  !*** ./src/storeRedux/comments/commentsAsyncThunk.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsAsyncThunk: () => (/* binding */ commentsAsyncThunk)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modal_modalSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modal/modalSlice */ \"./src/storeRedux/modal/modalSlice.ts\");\n/* harmony import */ var _utils_ts_postConverter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/ts/postConverter */ \"./src/utils/ts/postConverter.ts\");\n/* harmony import */ var _utils_ts_commentsArrConverter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/ts/commentsArrConverter */ \"./src/utils/ts/commentsArrConverter.ts\");\n/* harmony import */ var _commentsSlice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./commentsSlice */ \"./src/storeRedux/comments/commentsSlice.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n\nconst commentsAsyncThunk = (postSubreddit, postId) => (dispatch, getState) => __awaiter(void 0, void 0, void 0, function* () {\n    dispatch((0,_commentsSlice__WEBPACK_IMPORTED_MODULE_4__.commentsDataPending)());\n    const { postsData } = getState().postsBlock;\n    const post = postsData.filter(post => post.postId === postId)[0];\n    post && dispatch((0,_modal_modalSlice__WEBPACK_IMPORTED_MODULE_1__.setModalData)(post));\n    try {\n        const { data } = yield axios__WEBPACK_IMPORTED_MODULE_0___default().get(`https://api.reddit.com/r/${postSubreddit}/comments/${postId}`);\n        !post && dispatch((0,_modal_modalSlice__WEBPACK_IMPORTED_MODULE_1__.setModalData)((0,_utils_ts_postConverter__WEBPACK_IMPORTED_MODULE_2__.postConverter)(data[0].data.children[0].data)));\n        dispatch((0,_commentsSlice__WEBPACK_IMPORTED_MODULE_4__.setCommentsData)((0,_utils_ts_commentsArrConverter__WEBPACK_IMPORTED_MODULE_3__.commentsArrConverter)(data[1].data.children, postId)));\n    }\n    catch (error) {\n        console.log(error);\n        dispatch((0,_commentsSlice__WEBPACK_IMPORTED_MODULE_4__.commentsDataError)(error));\n    }\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/comments/commentsAsyncThunk.ts?");

/***/ }),

/***/ "./src/storeRedux/comments/commentsSlice.ts":
/*!**************************************************!*\
  !*** ./src/storeRedux/comments/commentsSlice.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsDataError: () => (/* binding */ commentsDataError),\n/* harmony export */   commentsDataPending: () => (/* binding */ commentsDataPending),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setCommentsData: () => (/* binding */ setCommentsData)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    comments: [],\n    loading: false\n};\nconst commentsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'comments',\n    initialState,\n    reducers: {\n        commentsDataPending: (state) => {\n            return {\n                comments: [],\n                loading: true\n            };\n        },\n        setCommentsData: (state, action) => {\n            var _a, _b, _c, _d;\n            const moreComments = (_d = (_c = (_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.filter((item) => item.children)[0]) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.join(',')) === null || _d === void 0 ? void 0 : _d.substring(0, 799);\n            return {\n                comments: action.payload,\n                loading: false,\n                moreComments: moreComments\n            };\n        },\n        commentsDataError: (state, action) => {\n            return {\n                comments: [],\n                loading: false,\n                error: action.payload,\n            };\n        }\n    }\n});\nconst { commentsDataPending, setCommentsData, commentsDataError } = commentsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsSlice.reducer);\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/comments/commentsSlice.ts?");

/***/ }),

/***/ "./src/storeRedux/form/actions.ts":
/*!****************************************!*\
  !*** ./src/storeRedux/form/actions.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CHANGE_COMMENT: () => (/* binding */ CHANGE_COMMENT),\n/* harmony export */   REPLY_: () => (/* binding */ REPLY_),\n/* harmony export */   SET_STATE_CLOSE_COMMENT: () => (/* binding */ SET_STATE_CLOSE_COMMENT),\n/* harmony export */   SET_STATE_OPEN_COMMENT: () => (/* binding */ SET_STATE_OPEN_COMMENT),\n/* harmony export */   changeFormValue: () => (/* binding */ changeFormValue),\n/* harmony export */   setIsOpenComment: () => (/* binding */ setIsOpenComment)\n/* harmony export */ });\nconst REPLY_ = 'REPLY_';\nconst CHANGE_COMMENT = 'CHANGE_COMMENT';\nconst SET_STATE_OPEN_COMMENT = 'SET_STATE_OPEN_COMMENT';\nconst SET_STATE_CLOSE_COMMENT = 'SET_STATE_CLOSE_COMMENT';\nconst changeFormValue = (commentId, textComment, replysName) => ({\n    type: replysName ? REPLY_ + replysName : CHANGE_COMMENT,\n    commentId: commentId,\n    textComment: textComment,\n    replysName: replysName,\n});\nconst setIsOpenComment = (commentId, formIsOpen) => ({\n    type: formIsOpen ? SET_STATE_OPEN_COMMENT : SET_STATE_CLOSE_COMMENT,\n    commentId: commentId,\n    formIsOpen: formIsOpen\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/form/actions.ts?");

/***/ }),

/***/ "./src/storeRedux/form/commentsFormReducer.ts":
/*!****************************************************!*\
  !*** ./src/storeRedux/form/commentsFormReducer.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsFormReducer: () => (/* binding */ commentsFormReducer)\n/* harmony export */ });\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/storeRedux/form/actions.ts\");\n\nconst initialState = [\n    {\n        commentId: 'modalFormComment',\n        textComment: '',\n    },\n];\nconst commentsFormReducer = (state = initialState, action) => {\n    const { type, textComment, replysName, commentId, formIsOpen } = action;\n    function setFilterPrevState(commentId, notEqual) {\n        return state.filter((comment) => notEqual ? comment.commentId !== commentId : comment.commentId === commentId);\n    }\n    switch (type) {\n        case _actions__WEBPACK_IMPORTED_MODULE_0__.CHANGE_COMMENT:\n            return [\n                ...setFilterPrevState('modalFormComment', true),\n                Object.assign(Object.assign({}, setFilterPrevState('modalFormComment')[0]), { commentId: commentId, textComment: textComment }),\n            ];\n        case _actions__WEBPACK_IMPORTED_MODULE_0__.REPLY_ + replysName:\n            return [\n                ...setFilterPrevState(commentId, true),\n                Object.assign(Object.assign({}, setFilterPrevState(commentId)[0]), { commentId: commentId, replysName: replysName, textComment: textComment })\n            ];\n        case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_STATE_OPEN_COMMENT:\n            return [\n                ...setFilterPrevState(commentId, true),\n                Object.assign(Object.assign({}, setFilterPrevState(commentId)[0]), { commentId: commentId, formIsOpen: formIsOpen })\n            ];\n        case _actions__WEBPACK_IMPORTED_MODULE_0__.SET_STATE_CLOSE_COMMENT:\n            return [\n                ...setFilterPrevState(commentId, true)\n                    .filter(comment => comment.textComment !== '' && comment.textComment),\n                Object.assign(Object.assign({}, setFilterPrevState(commentId)[0]), { commentId: commentId, formIsOpen: formIsOpen })\n            ];\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/form/commentsFormReducer.ts?");

/***/ }),

/***/ "./src/storeRedux/modal/modalSlice.ts":
/*!********************************************!*\
  !*** ./src/storeRedux/modal/modalSlice.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   resetModalData: () => (/* binding */ resetModalData),\n/* harmony export */   setModalData: () => (/* binding */ setModalData)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    modalData: {\n        postId: '',\n        anchorName: '',\n        postSubreddit: '',\n        postTitle: '',\n        postUrl: '',\n        createdTime: NaN,\n        numberComments: NaN,\n        karmaNumber: NaN,\n        isLast: false,\n    },\n};\nconst modalSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'cardModal',\n    initialState,\n    reducers: {\n        resetModalData() {\n            return initialState;\n        },\n        setModalData(state, action) {\n            return Object.assign(Object.assign({}, state), { modalData: action.payload });\n        }\n    }\n});\nconst { resetModalData, setModalData } = modalSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalSlice.reducer);\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/modal/modalSlice.ts?");

/***/ }),

/***/ "./src/storeRedux/posts/getPostsAsyncThunk.ts":
/*!****************************************************!*\
  !*** ./src/storeRedux/posts/getPostsAsyncThunk.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getPostsAsyncThunk: () => (/* binding */ getPostsAsyncThunk)\n/* harmony export */ });\n/* harmony import */ var _postsSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./postsSlice */ \"./src/storeRedux/posts/postsSlice.ts\");\n/* harmony import */ var _utils_ts_postConverter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/ts/postConverter */ \"./src/utils/ts/postConverter.ts\");\n/* harmony import */ var _postIsOpen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postIsOpen */ \"./src/storeRedux/posts/postIsOpen.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\nconst getPostsAsyncThunk = (postType) => (dispatch, getState) => __awaiter(void 0, void 0, void 0, function* () {\n    const { afterList } = getState().postsBlock;\n    const { type } = getState().postsBlock;\n    dispatch((0,_postsSlice__WEBPACK_IMPORTED_MODULE_0__.getPostsDataPending)());\n    try {\n        const { data: { data: { after, children } } } = yield axios__WEBPACK_IMPORTED_MODULE_3___default().get(`https://www.reddit.com/${postType || type}.json?sr_detail=true`, {\n            params: {\n                limit: 5,\n                after: afterList\n            }\n        });\n        dispatch((0,_postsSlice__WEBPACK_IMPORTED_MODULE_0__.setPostsData)({\n            postType: postType,\n            after: after,\n            postsData: children.map(({ data }) => {\n                const lastItemId = children[children.length - 1].data.id;\n                const isLast = lastItemId === data.id ? true : false;\n                return (0,_utils_ts_postConverter__WEBPACK_IMPORTED_MODULE_1__.postConverter)(data, isLast);\n            })\n        }));\n        dispatch((0,_postIsOpen__WEBPACK_IMPORTED_MODULE_2__.setPostsIsOpen)({\n            postsDataIsOpen: children.map((({ data }) => {\n                return {\n                    postId: data.id,\n                    isImageOpen: false\n                };\n            }))\n        }));\n    }\n    catch (error) {\n        console.log(error);\n        dispatch((0,_postsSlice__WEBPACK_IMPORTED_MODULE_0__.postsDataError)(error));\n    }\n    ;\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/posts/getPostsAsyncThunk.ts?");

/***/ }),

/***/ "./src/storeRedux/posts/postIsOpen.ts":
/*!********************************************!*\
  !*** ./src/storeRedux/posts/postIsOpen.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   setImageIsOpen: () => (/* binding */ setImageIsOpen),\n/* harmony export */   setPostsIsOpen: () => (/* binding */ setPostsIsOpen)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    postsDataIsOpen: [],\n};\nconst postIsOpen = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'postsIsOpen',\n    initialState,\n    reducers: {\n        setImageIsOpen(state, action) {\n            const filteredPost = state.postsDataIsOpen.map(post => {\n                return Object.assign(Object.assign({}, post), { isImageOpen: post.postId === action.payload.postId ? action.payload.isImageOpen : post.isImageOpen });\n            });\n            return {\n                postsDataIsOpen: filteredPost\n            };\n        },\n        setPostsIsOpen(state, action) {\n            return {\n                postsDataIsOpen: state.postsDataIsOpen.concat(action.payload.postsDataIsOpen)\n            };\n        }\n    }\n});\nconst { setImageIsOpen, setPostsIsOpen } = postIsOpen.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postIsOpen.reducer);\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/posts/postIsOpen.ts?");

/***/ }),

/***/ "./src/storeRedux/posts/postsSlice.ts":
/*!********************************************!*\
  !*** ./src/storeRedux/posts/postsSlice.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getPostsDataPending: () => (/* binding */ getPostsDataPending),\n/* harmony export */   postsDataError: () => (/* binding */ postsDataError),\n/* harmony export */   resetPostsData: () => (/* binding */ resetPostsData),\n/* harmony export */   setPostsData: () => (/* binding */ setPostsData)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    postsData: [],\n    afterList: '',\n    count: 0,\n    loading: false,\n    type: ''\n};\nconst postsSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'postsBlock',\n    initialState,\n    reducers: {\n        resetPostsData(state) {\n            return initialState;\n        },\n        getPostsDataPending(state) {\n            return Object.assign(Object.assign({}, state), { loading: true });\n        },\n        setPostsData(state, action) {\n            const addIsLast = state.postsData.map((post) => {\n                return Object.assign(Object.assign({}, post), { isLast: false });\n            });\n            const scrolledPosts = addIsLast.concat(action.payload.postsData);\n            return Object.assign(Object.assign({}, state), { postsData: scrolledPosts, afterList: action.payload.after, count: state.count === 2 ? 0 : state.count + 1, type: action.payload.postType || state.type, loading: false });\n        },\n        postsDataError(state, action) {\n            return {\n                postsData: [],\n                loading: false,\n                afterList: '',\n                count: 0,\n                error: action.payload,\n                type: ''\n            };\n        }\n    }\n});\nconst { resetPostsData, getPostsDataPending, setPostsData, postsDataError } = postsSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (postsSlice.reducer);\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/posts/postsSlice.ts?");

/***/ }),

/***/ "./src/storeRedux/storeRedux.tsx":
/*!***************************************!*\
  !*** ./src/storeRedux/storeRedux.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MountedBrowserRouter: () => (/* binding */ MountedBrowserRouter),\n/* harmony export */   ReduxProvider: () => (/* binding */ ReduxProvider),\n/* harmony export */   persistor: () => (/* binding */ persistor),\n/* harmony export */   storeRedux: () => (/* binding */ storeRedux)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist/lib/storage/createWebStorage */ \"redux-persist/lib/storage/createWebStorage\");\n/* harmony import */ var redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _form_commentsFormReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form/commentsFormReducer */ \"./src/storeRedux/form/commentsFormReducer.ts\");\n/* harmony import */ var _comments_commentsSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments/commentsSlice */ \"./src/storeRedux/comments/commentsSlice.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _hooks_useUnmount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../hooks/useUnmount */ \"./src/hooks/useUnmount.ts\");\n/* harmony import */ var _posts_postsSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./posts/postsSlice */ \"./src/storeRedux/posts/postsSlice.ts\");\n/* harmony import */ var _token_tokenSlice__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./token/tokenSlice */ \"./src/storeRedux/token/tokenSlice.ts\");\n/* harmony import */ var _modal_modalSlice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal/modalSlice */ \"./src/storeRedux/modal/modalSlice.ts\");\n/* harmony import */ var _posts_postIsOpen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./posts/postIsOpen */ \"./src/storeRedux/posts/postIsOpen.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _user_userSlise__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/userSlise */ \"./src/storeRedux/user/userSlise.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! redux-persist */ \"redux-persist\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(redux_persist__WEBPACK_IMPORTED_MODULE_13__);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst createNoopStorage = () => {\n    return {\n        getItem(_key) {\n            return Promise.resolve(null);\n        },\n        setItem(_key, value) {\n            return Promise.resolve(value);\n        },\n        removeItem(_key) {\n            return Promise.resolve();\n        },\n    };\n};\nconst storage = typeof window === 'undefined' ? createNoopStorage() : redux_persist_lib_storage_createWebStorage__WEBPACK_IMPORTED_MODULE_1___default()('local');\nconst persistConfig = {\n    key: 'noop',\n    storage,\n    whitelist: [\n        'userBlock',\n        'redditToken',\n    ]\n};\nconst rootReducer = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({\n    userBlock: _user_userSlise__WEBPACK_IMPORTED_MODULE_11__[\"default\"],\n    redditToken: _token_tokenSlice__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n    commentsForm: _form_commentsFormReducer__WEBPACK_IMPORTED_MODULE_2__.commentsFormReducer,\n    commentsList: _comments_commentsSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    postsBlock: _posts_postsSlice__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n    postIsOpen: _posts_postIsOpen__WEBPACK_IMPORTED_MODULE_9__[\"default\"],\n    cardModal: _modal_modalSlice__WEBPACK_IMPORTED_MODULE_8__[\"default\"],\n});\nconst persistedReducer = (0,redux_persist__WEBPACK_IMPORTED_MODULE_13__.persistReducer)(persistConfig, rootReducer);\nconst storeRedux = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: persistedReducer,\n    middleware: (getDefaultMiddleware) => getDefaultMiddleware({\n        serializableCheck: {\n            ignoredActions: [redux_persist__WEBPACK_IMPORTED_MODULE_13__.FLUSH, redux_persist__WEBPACK_IMPORTED_MODULE_13__.REHYDRATE, redux_persist__WEBPACK_IMPORTED_MODULE_13__.PAUSE, redux_persist__WEBPACK_IMPORTED_MODULE_13__.PERSIST, redux_persist__WEBPACK_IMPORTED_MODULE_13__.PURGE, redux_persist__WEBPACK_IMPORTED_MODULE_13__.REGISTER],\n        },\n    }),\n});\nconst persistor = (0,redux_persist__WEBPACK_IMPORTED_MODULE_13__.persistStore)(storeRedux);\nfunction ReduxProvider({ children }) {\n    return (react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_redux__WEBPACK_IMPORTED_MODULE_12__.Provider, { store: storeRedux }, children));\n}\nfunction MountedBrowserRouter({ children }) {\n    const [mounted] = (0,_hooks_useUnmount__WEBPACK_IMPORTED_MODULE_5__.useUnmount)();\n    return (mounted && react__WEBPACK_IMPORTED_MODULE_10___default().createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.BrowserRouter, null, children));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/storeRedux.tsx?");

/***/ }),

/***/ "./src/storeRedux/storeSelectors.ts":
/*!******************************************!*\
  !*** ./src/storeRedux/storeSelectors.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   selectCardModalData: () => (/* binding */ selectCardModalData),\n/* harmony export */   selectCommentFormValue: () => (/* binding */ selectCommentFormValue),\n/* harmony export */   selectComments: () => (/* binding */ selectComments),\n/* harmony export */   selectFormIsOpen: () => (/* binding */ selectFormIsOpen),\n/* harmony export */   selectIsDarkMode: () => (/* binding */ selectIsDarkMode),\n/* harmony export */   selectPostIsOpen: () => (/* binding */ selectPostIsOpen),\n/* harmony export */   selectPostsBlock: () => (/* binding */ selectPostsBlock),\n/* harmony export */   selectPostsData: () => (/* binding */ selectPostsData),\n/* harmony export */   selectPostsLoading: () => (/* binding */ selectPostsLoading),\n/* harmony export */   selectUserBlock: () => (/* binding */ selectUserBlock),\n/* harmony export */   useAppSelector: () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\nconst selectUserBlock = (state) => state.userBlock;\nconst selectPostsBlock = (state) => state.postsBlock;\nconst selectPostsData = (state) => state.postsBlock.postsData;\nconst selectPostsLoading = (state) => state.postsBlock.loading;\nconst selectCardModalData = (state) => state.cardModal.modalData;\nconst selectComments = (state) => state.commentsList;\nconst selectPostIsOpen = (id) => (state) => {\n    var _a;\n    return (_a = state.postIsOpen.postsDataIsOpen\n        .filter(post => post.postId === id)[0]) === null || _a === void 0 ? void 0 : _a.isImageOpen;\n};\nconst selectCommentFormValue = (commentId) => (state) => {\n    var _a, _b;\n    return (_b = (_a = state.commentsForm) === null || _a === void 0 ? void 0 : _a.filter(item => item.commentId === commentId)[0]) === null || _b === void 0 ? void 0 : _b.textComment;\n};\nconst selectFormIsOpen = (commentId) => (state) => {\n    var _a;\n    return (_a = state.commentsForm\n        .filter((comment) => comment.commentId === commentId)[0]) === null || _a === void 0 ? void 0 : _a.formIsOpen;\n};\nconst selectIsDarkMode = (state) => state.userBlock.darkMode;\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/storeSelectors.ts?");

/***/ }),

/***/ "./src/storeRedux/token/saveTokenAsyncThunk.ts":
/*!*****************************************************!*\
  !*** ./src/storeRedux/token/saveTokenAsyncThunk.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   saveTokenAsyncThunk: () => (/* binding */ saveTokenAsyncThunk)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tokenSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tokenSlice */ \"./src/storeRedux/token/tokenSlice.ts\");\n/* harmony import */ var _user_userSlise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/userSlise */ \"./src/storeRedux/user/userSlise.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\nconst saveTokenAsyncThunk = () => (dispatch, getState) => __awaiter(void 0, void 0, void 0, function* () {\n    const timeNow = new Date().getTime();\n    const { createdAt } = getState().redditToken;\n    if (createdAt) {\n        setTimeout(() => {\n            dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_1__.resetToken)());\n            dispatch((0,_user_userSlise__WEBPACK_IMPORTED_MODULE_2__.resetUserData)());\n        }, 7200000 - (timeNow - createdAt));\n        return;\n    }\n    const params = new Proxy(new URLSearchParams(window.location.search), {\n        get: (searchParams, prop) => searchParams.get(prop),\n    });\n    if (!params.code || !'_27swn7Uy4Ctovp3-0sQUw' || !'VEAVqqPu7VVpRhOmQpqJmaQjl3Zrig')\n        return;\n    try {\n        const { data } = yield axios__WEBPACK_IMPORTED_MODULE_0___default().post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${params.code}&redirect_uri=${'http://localhost'}:80/auth`, {\n            auth: {\n                username: '_27swn7Uy4Ctovp3-0sQUw',\n                password: 'VEAVqqPu7VVpRhOmQpqJmaQjl3Zrig'\n            },\n            headers: {\n                'Content-Type': 'application/x-www-form-urlencoded'\n            }\n        });\n        dispatch((0,_tokenSlice__WEBPACK_IMPORTED_MODULE_1__.setToken)(data['access_token']));\n        window.history.replaceState({}, 'Reddit for me', '/auth');\n    }\n    catch (error) {\n        console.log(error);\n        alert(`Token error: ${error.message}`);\n    }\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/token/saveTokenAsyncThunk.ts?");

/***/ }),

/***/ "./src/storeRedux/token/tokenSlice.ts":
/*!********************************************!*\
  !*** ./src/storeRedux/token/tokenSlice.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   resetToken: () => (/* binding */ resetToken),\n/* harmony export */   setToken: () => (/* binding */ setToken)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    token: '',\n    createdAt: NaN,\n};\nconst tokenSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'token',\n    initialState,\n    reducers: {\n        resetToken() {\n            return initialState;\n        },\n        setToken(state, action) {\n            return Object.assign(Object.assign({}, state), { token: action.payload, createdAt: action.payload ? new Date().getTime() : NaN });\n        }\n    }\n});\nconst { resetToken, setToken } = tokenSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (tokenSlice.reducer);\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/token/tokenSlice.ts?");

/***/ }),

/***/ "./src/storeRedux/user/userReguestAsyncThunk.ts":
/*!******************************************************!*\
  !*** ./src/storeRedux/user/userReguestAsyncThunk.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   userReguestAsyncThunk: () => (/* binding */ userReguestAsyncThunk)\n/* harmony export */ });\n/* harmony import */ var _userSlise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userSlise */ \"./src/storeRedux/user/userSlise.ts\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\nconst userReguestAsyncThunk = () => (dispatch, getState) => __awaiter(void 0, void 0, void 0, function* () {\n    const { token } = getState().redditToken;\n    if (!token)\n        return;\n    dispatch((0,_userSlise__WEBPACK_IMPORTED_MODULE_0__.userDataPending)());\n    try {\n        const { data } = yield axios__WEBPACK_IMPORTED_MODULE_1___default().get('https://oauth.reddit.com/api/v1/me', {\n            headers: {\n                Authorization: `bearer ${token}`\n            }\n        });\n        dispatch((0,_userSlise__WEBPACK_IMPORTED_MODULE_0__.setUserData)({\n            name: data.name,\n            iconImg: data.snoovatar_img\n        }));\n    }\n    catch (error) {\n        console.log(error);\n        alert(`USER DATA ERROR: ${error.message}`);\n        dispatch((0,_userSlise__WEBPACK_IMPORTED_MODULE_0__.userDataError)(error));\n    }\n});\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/user/userReguestAsyncThunk.ts?");

/***/ }),

/***/ "./src/storeRedux/user/userSlise.ts":
/*!******************************************!*\
  !*** ./src/storeRedux/user/userSlise.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   resetUserData: () => (/* binding */ resetUserData),\n/* harmony export */   setDarkMode: () => (/* binding */ setDarkMode),\n/* harmony export */   setUserData: () => (/* binding */ setUserData),\n/* harmony export */   userDataError: () => (/* binding */ userDataError),\n/* harmony export */   userDataPending: () => (/* binding */ userDataPending)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = {\n    loading: false,\n    darkMode: false,\n    name: '',\n    iconImg: '',\n};\nconst userSlise = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: 'userData',\n    initialState,\n    reducers: {\n        userDataPending: (state) => {\n            return Object.assign(Object.assign({}, state), { loading: true });\n        },\n        setDarkMode(state, action) {\n            return Object.assign(Object.assign({}, state), { darkMode: action.payload });\n        },\n        resetUserData(state) {\n            return Object.assign(Object.assign({}, initialState), { darkMode: state.darkMode });\n        },\n        setUserData: (state, action) => {\n            return Object.assign(Object.assign({}, state), { name: action.payload.name, iconImg: action.payload.iconImg, loading: false });\n        },\n        userDataError: (state, action) => {\n            return {\n                error: action.payload,\n                darkMode: state.darkMode,\n                loading: false,\n                name: '',\n                iconImg: '',\n            };\n        }\n    },\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlise.reducer);\nconst { setDarkMode, resetUserData, userDataPending, setUserData, userDataError } = userSlise.actions;\n\n\n//# sourceURL=webpack://new-reddit/./src/storeRedux/user/userSlise.ts?");

/***/ }),

/***/ "./src/utils/react/GenericList.tsx":
/*!*****************************************!*\
  !*** ./src/utils/react/GenericList.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GenericList: () => (/* binding */ GenericList)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_text_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/text.css */ \"./src/utils/css/text.css\");\n/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Text */ \"./src/utils/react/Text.tsx\");\n\n\n\n\nconst noop = () => { };\nfunction GenericList({ list, As = 'li', className, size, mobileSize, tabletSize, desktopSize, color = _Text__WEBPACK_IMPORTED_MODULE_3__.EColor.black }) {\n    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][`s${size}`], _css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][color], { [_css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][`m${mobileSize}`]]: mobileSize }, { [_css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][`t${tabletSize}`]]: tabletSize }, { [_css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][`d${desktopSize}`]]: desktopSize });\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, list.map(({ id, item, href, text, disabled, onClose = noop }) => (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(As, { disabled: disabled, type: As === 'button' ? 'button' : undefined, className: `${classes}${className ? ' ' + className : ''}`, onClick: () => onClose(id), key: id, href: href },\n        item,\n        text)))));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/react/GenericList.tsx?");

/***/ }),

/***/ "./src/utils/react/Text.tsx":
/*!**********************************!*\
  !*** ./src/utils/react/Text.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   EColor: () => (/* binding */ EColor),\n/* harmony export */   Text: () => (/* binding */ Text)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_text_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/text.css */ \"./src/utils/css/text.css\");\n\n\n\nvar EColor;\n(function (EColor) {\n    EColor[\"black\"] = \"black\";\n    EColor[\"orangeFF\"] = \"orangeFF\";\n    EColor[\"green\"] = \"green\";\n    EColor[\"white\"] = \"white\";\n    EColor[\"whiteGray\"] = \"whiteGray\";\n    EColor[\"grayF4\"] = \"grayF4\";\n    EColor[\"grayF3\"] = \"grayF3\";\n    EColor[\"grayD9\"] = \"grayD9\";\n    EColor[\"grayC4\"] = \"grayC4\";\n    EColor[\"gray66\"] = \"gray66\";\n    EColor[\"gray99\"] = \"gray99\";\n    EColor[\"blew\"] = \"blew\";\n})(EColor || (EColor = {}));\nfunction Text(props) {\n    const { As = 'span', color = EColor.black, children, size, mobileSize, tabletSize, desktopSize } = props;\n    const classes = classnames__WEBPACK_IMPORTED_MODULE_1___default()(_css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][`s${size}`], _css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][color], { [_css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][`m${mobileSize}`]]: mobileSize }, { [_css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][`t${tabletSize}`]]: tabletSize }, { [_css_text_css__WEBPACK_IMPORTED_MODULE_2__[\"default\"][`d${desktopSize}`]]: desktopSize });\n    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement(As, { className: `${classes}${props.className ? ' ' + props.className : ''}`, dangerouslySetInnerHTML: props.dangerouslySetInnerHTML }, children));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/react/Text.tsx?");

/***/ }),

/***/ "./src/utils/ts/assoc.ts":
/*!*******************************!*\
  !*** ./src/utils/ts/assoc.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assoc: () => (/* binding */ assoc)\n/* harmony export */ });\nfunction assoc(key, value) {\n    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/ts/assoc.ts?");

/***/ }),

/***/ "./src/utils/ts/commentsArrConverter.ts":
/*!**********************************************!*\
  !*** ./src/utils/ts/commentsArrConverter.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   commentsArrConverter: () => (/* binding */ commentsArrConverter)\n/* harmony export */ });\nfunction commentsArrConverter(arr, postId) {\n    if (!arr)\n        return;\n    return arr.map((item) => {\n        var _a, _b, _c, _d, _e, _f, _g, _h, _j;\n        const comment = item.data;\n        const moreCommentsData = (_g = (_f = (_e = (_d = (_c = (_b = (_a = comment === null || comment === void 0 ? void 0 : comment.replies) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.filter((item) => item.kind === 'more')[0]) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.children) === null || _f === void 0 ? void 0 : _f.join(',')) === null || _g === void 0 ? void 0 : _g.substring(0, 799);\n        return {\n            postId: postId,\n            commentId: comment.id,\n            authorName: comment.author,\n            createdTime: comment.created,\n            commentText: comment.body,\n            commentHtml: comment.body_html,\n            karmaCounter: comment.score,\n            commentReplies: (_j = (_h = comment.replies) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.children,\n            children: comment.children,\n            moreCommentsData: moreCommentsData\n        };\n    });\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/ts/commentsArrConverter.ts?");

/***/ }),

/***/ "./src/utils/ts/convertRedditTextHtml.ts":
/*!***********************************************!*\
  !*** ./src/utils/ts/convertRedditTextHtml.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   convertRedditTextHtml: () => (/* binding */ convertRedditTextHtml)\n/* harmony export */ });\nfunction convertRedditTextHtml(str) {\n    str = str.replace(/&lt;!-- SC_OFF --&gt;&lt;div class=\"md\"&gt;/g, '')\n        .replace(\"&lt;/div&gt;&lt;!-- SC_ON --&gt;\", '')\n        .replace(/&gt;/g, \">\")\n        .replace(/&lt;/g, \"<\")\n        .replace(/&amp;#39;/g, \"'\")\n        .replace(/&amp;quot;/g, '\"')\n        .replace(/&amp;/g, '&');\n    return str;\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/ts/convertRedditTextHtml.ts?");

/***/ }),

/***/ "./src/utils/ts/generateRandomIndex.ts":
/*!*********************************************!*\
  !*** ./src/utils/ts/generateRandomIndex.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   assignId: () => (/* binding */ assignId),\n/* harmony export */   generateId: () => (/* binding */ generateId),\n/* harmony export */   generateRandomString: () => (/* binding */ generateRandomString)\n/* harmony export */ });\n/* harmony import */ var _assoc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assoc */ \"./src/utils/ts/assoc.ts\");\n\nconst generateRandomString = () => Math.random().toString(36).substring(2, 15);\nconst assignId = (0,_assoc__WEBPACK_IMPORTED_MODULE_0__.assoc)('id', generateRandomString());\nconst generateId = (obj) => (0,_assoc__WEBPACK_IMPORTED_MODULE_0__.assoc)('id', generateRandomString())(obj);\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/ts/generateRandomIndex.ts?");

/***/ }),

/***/ "./src/utils/ts/getRelativeTimeString.ts":
/*!***********************************************!*\
  !*** ./src/utils/ts/getRelativeTimeString.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRelativeTimeString: () => (/* binding */ getRelativeTimeString)\n/* harmony export */ });\nfunction getRelativeTimeString(date, lang = 'en-US') {\n    if (!date)\n        return;\n    const timeSec = typeof date === 'number' ? date : date.getTime();\n    const deltaSeconds = Math.round(timeSec - (Date.now() / 1000));\n    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];\n    const units = ['second', 'minute', 'hour',\n        'day', 'week', 'month', 'year'];\n    const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds));\n    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;\n    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto', style: 'short' });\n    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/ts/getRelativeTimeString.ts?");

/***/ }),

/***/ "./src/utils/ts/postConverter.ts":
/*!***************************************!*\
  !*** ./src/utils/ts/postConverter.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postConverter: () => (/* binding */ postConverter)\n/* harmony export */ });\nfunction postConverter(data, isLast) {\n    var _a, _b, _c, _d;\n    return {\n        postId: data.id,\n        postSubreddit: data.subreddit,\n        anchorName: data.author,\n        postTitle: data.title,\n        postUrl: data.url,\n        createdTime: data.created_utc,\n        numberComments: data.num_comments,\n        karmaNumber: data.score,\n        postHint: data.post_hint,\n        postThumbnail: data.thumbnail,\n        postHighQualityVideoUrl: (_b = (_a = data.secure_media) === null || _a === void 0 ? void 0 : _a.reddit_video) === null || _b === void 0 ? void 0 : _b.hls_url,\n        postVideoUrl: (_d = (_c = data.secure_media) === null || _c === void 0 ? void 0 : _c.reddit_video) === null || _d === void 0 ? void 0 : _d.scrubber_media_url,\n        postText: data.selftext_html,\n        isLast: isLast || false,\n    };\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/ts/postConverter.ts?");

/***/ }),

/***/ "./src/utils/ts/shortFormatNumber.ts":
/*!*******************************************!*\
  !*** ./src/utils/ts/shortFormatNumber.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   shortFormatNumber: () => (/* binding */ shortFormatNumber)\n/* harmony export */ });\nfunction shortFormatNumber(value) {\n    if (!value)\n        return;\n    let fractionDigits = 1;\n    if (value > 100000)\n        fractionDigits = 0;\n    return new Intl.NumberFormat('en-GB', {\n        notation: \"compact\",\n        maximumFractionDigits: fractionDigits\n    }).format(value).replace('K', 'k');\n}\n;\n\n\n//# sourceURL=webpack://new-reddit/./src/utils/ts/shortFormatNumber.ts?");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "dompurify":
/*!****************************!*\
  !*** external "dompurify" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("dompurify");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "html-to-text":
/*!*******************************!*\
  !*** external "html-to-text" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("html-to-text");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react-hot-loader/root");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-player");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "react-virtualized-auto-sizer":
/*!***********************************************!*\
  !*** external "react-virtualized-auto-sizer" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("react-virtualized-auto-sizer");

/***/ }),

/***/ "react-window":
/*!*******************************!*\
  !*** external "react-window" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("react-window");

/***/ }),

/***/ "redux-persist":
/*!********************************!*\
  !*** external "redux-persist" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("redux-persist");

/***/ }),

/***/ "redux-persist/lib/storage/createWebStorage":
/*!*************************************************************!*\
  !*** external "redux-persist/lib/storage/createWebStorage" ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = require("redux-persist/lib/storage/createWebStorage");

/***/ }),

/***/ "use-match-media-hook":
/*!***************************************!*\
  !*** external "use-match-media-hook" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("use-match-media-hook");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.js");
/******/ 	
/******/ })()
;