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

/***/ "./src/shared/CardsList/Card/CardModal/CardModal.tsx":
/*!***********************************************************!*\
  !*** ./src/shared/CardsList/Card/CardModal/CardModal.tsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CardModal: () => (/* binding */ CardModal)\n/* harmony export */ });\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dompurify */ \"./node_modules/dompurify/dist/purify.js\");\n/* harmony import */ var dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dompurify__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cardmodal.css */ \"./src/shared/CardsList/Card/CardModal/cardmodal.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-dom */ \"./node_modules/@hot-loader/react-dom/index.js\");\n/* harmony import */ var _CardVisual__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CardVisual */ \"./src/shared/CardsList/Card/CardVisual/index.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/dist/index.js\");\n/* harmony import */ var _ModalSortBlock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ModalSortBlock */ \"./src/shared/CardsList/Card/CardModal/ModalSortBlock/index.ts\");\n/* harmony import */ var _utils_react_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../utils/react/Text */ \"./src/utils/react/Text.tsx\");\n/* harmony import */ var _CardTextContent_UserLink__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../CardTextContent/UserLink */ \"./src/shared/CardsList/Card/CardTextContent/UserLink/index.ts\");\n/* harmony import */ var _ModalControlPanel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModalControlPanel */ \"./src/shared/CardsList/Card/CardModal/ModalControlPanel/index.ts\");\n/* harmony import */ var _ModalCommentsForm__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModalCommentsForm */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsForm/index.ts\");\n/* harmony import */ var _ModalCommentsList__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModalCommentsList */ \"./src/shared/CardsList/Card/CardModal/ModalCommentsList/index.ts\");\n/* harmony import */ var _BackToTopButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../BackToTopButton */ \"./src/shared/CardsList/BackToTopButton/index.ts\");\n/* harmony import */ var _CardTextContent_CreatedAd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../CardTextContent/CreatedAd */ \"./src/shared/CardsList/Card/CardTextContent/CreatedAd/index.ts\");\n/* harmony import */ var _ModalButtonCloserX__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ModalButtonCloserX */ \"./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/index.ts\");\n/* harmony import */ var _MoreCommentsButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./MoreCommentsButton */ \"./src/shared/CardsList/Card/CardModal/MoreCommentsButton/index.ts\");\n/* harmony import */ var _CardControls_KarmaCounter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../CardControls/KarmaCounter */ \"./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts\");\n/* harmony import */ var _Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../../Loader/RedditLoader */ \"./src/Loader/RedditLoader/index.ts\");\n/* harmony import */ var _hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../../hooks/useModalCloser */ \"./src/hooks/useModalCloser.ts\");\n/* harmony import */ var _CardTextContent_CardTitlePostLink__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../CardTextContent/CardTitlePostLink */ \"./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/index.ts\");\n/* harmony import */ var _hooks_useCommentsPostData__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../../hooks/useCommentsPostData */ \"./src/hooks/useCommentsPostData.ts\");\n/* harmony import */ var _utils_ts_convertRedditTextHtml__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../../utils/ts/convertRedditTextHtml */ \"./src/utils/ts/convertRedditTextHtml.ts\");\n/* harmony import */ var _hooks_useStopScroll__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../../hooks/useStopScroll */ \"./src/hooks/useStopScroll.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction CardModal() {\n    const modalRoot = document.querySelector('#modal_root');\n    const { postId, subreddit } = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useParams)();\n    if (!modalRoot || !subreddit || !postId)\n        return null;\n    const [scroll, setScroll] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n        if (postId) {\n            setScroll();\n        }\n    }, [postId]);\n    (0,_hooks_useStopScroll__WEBPACK_IMPORTED_MODULE_21__.useStopScroll)(scroll);\n    const { commentsList: { comments, moreComments, loading }, modalData: { postHint, postThumbnail, postText, karmaNumber, postTitle, postUrl, createdTime, anchorName, postVideoUrl, postHighQualityVideoUrl, numberComments } } = (0,_hooks_useCommentsPostData__WEBPACK_IMPORTED_MODULE_19__.useModalCommentsData)(subreddit, postId);\n    const refModal = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const refButtonToTop = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n    const scrollToTop = () => refModal.current && refModal.current.scrollTo({ top: 0 });\n    const navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_22__.useNavigate)();\n    const onClose = () => navigate(-1);\n    (0,_hooks_useModalCloser__WEBPACK_IMPORTED_MODULE_17__.useModalCloser)({\n        onClose: onClose,\n        ref: refModal,\n        ref2: refButtonToTop,\n        timeDelay: 20\n    });\n    return (0,react_dom__WEBPACK_IMPORTED_MODULE_3__.createPortal)((react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].modal },\n        react__WEBPACK_IMPORTED_MODULE_2__.createElement(_BackToTopButton__WEBPACK_IMPORTED_MODULE_11__.BackToTopButton, { ref: refButtonToTop, className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonBackToTop, onClick: scrollToTop }),\n        react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].container, ref: refModal },\n            react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ModalButtonCloserX__WEBPACK_IMPORTED_MODULE_13__.ModalButtonCloserX, { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].buttonCloserX, onClose: onClose }),\n            !postTitle && loading\n                ?\n                    react__WEBPACK_IMPORTED_MODULE_2__.createElement(_Loader_RedditLoader__WEBPACK_IMPORTED_MODULE_16__.RedditLoader, { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loader })\n                :\n                    react__WEBPACK_IMPORTED_MODULE_2__.createElement(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, null,\n                        react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].header },\n                            react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CardControls_KarmaCounter__WEBPACK_IMPORTED_MODULE_15__.KarmaCounter, { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].karmaCounter, carmaNumber: karmaNumber }),\n                            react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].popupHeaderWrapper },\n                                react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CardTextContent_CardTitlePostLink__WEBPACK_IMPORTED_MODULE_18__.CardTitlePostLink, { postTitle: postTitle, postUrl: postUrl }),\n                                react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].popupMediaUser },\n                                    react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CardTextContent_CreatedAd__WEBPACK_IMPORTED_MODULE_12__.CreatedAd, { createdTime: createdTime }),\n                                    react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CardTextContent_UserLink__WEBPACK_IMPORTED_MODULE_7__.UserLink, { anchorName: anchorName })))),\n                        postHint !== undefined &&\n                            postThumbnail &&\n                            postThumbnail !== \"self\" &&\n                            postThumbnail !== \"default\" &&\n                            react__WEBPACK_IMPORTED_MODULE_2__.createElement(_CardVisual__WEBPACK_IMPORTED_MODULE_4__.CardVisual, { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].preview, props: {\n                                    postThumbnail,\n                                    postVideoUrl,\n                                    postUrl,\n                                    postHighQualityVideoUrl,\n                                    postHint\n                                } }),\n                        postText &&\n                            react__WEBPACK_IMPORTED_MODULE_2__.createElement(_utils_react_Text__WEBPACK_IMPORTED_MODULE_6__.Text, { As: \"div\", size: 14, mobileSize: 12, className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].textContent, dangerouslySetInnerHTML: {\n                                    __html: dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize((0,_utils_ts_convertRedditTextHtml__WEBPACK_IMPORTED_MODULE_20__.convertRedditTextHtml)(postText))\n                                } }),\n                        react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].footer, id: \"footer_root\" },\n                            react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ModalControlPanel__WEBPACK_IMPORTED_MODULE_8__.ModalControlPanel, { props: numberComments }),\n                            react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ModalCommentsForm__WEBPACK_IMPORTED_MODULE_9__.ModalCommentsForm, { rootId: \"footer_root\", commentId: \"modalFormComment\" }),\n                            react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ModalSortBlock__WEBPACK_IMPORTED_MODULE_5__.ModalSortBlock, null)),\n                        react__WEBPACK_IMPORTED_MODULE_2__.createElement(\"div\", { className: _cardmodal_css__WEBPACK_IMPORTED_MODULE_1__[\"default\"].commentsBlock, id: \"comments_root\" },\n                            react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ModalCommentsList__WEBPACK_IMPORTED_MODULE_10__.ModalCommentsList, { commentsData: comments, loading: loading }),\n                            react__WEBPACK_IMPORTED_MODULE_2__.createElement(_MoreCommentsButton__WEBPACK_IMPORTED_MODULE_14__.MoreCommentsButton, { postId: postId, moreCommentsData: moreComments })))))), modalRoot);\n}\n\n\n//# sourceURL=webpack://new-reddit/./src/shared/CardsList/Card/CardModal/CardModal.tsx?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("93241355290ad8f86dcb")
/******/ })();
/******/ 
/******/ }
);