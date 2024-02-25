/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 853:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(580);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(613);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --background: #1A1A1B;
    --darkRgb: #141415;
    --space: #000000;
    --black: #333333;
    --orange: #CC6633;
    --orangeFF: #D93A00;
    --coral: coral;
    --sky: #4FBCFF;
    --darkLine: #343536;
    --redCC: #CC3361;
    --green: #A4CC33;
    --EC: #ECECEC;
    --E5: #E5E5E5;
    --buttonColor: #D7DADC;
    --whiteLightness: 100%;
    --white: hsl(0, 0%, var(--whiteLightness));
    --grayF4: hsl(0, 0%, calc(var(--whiteLightness) - 4%));
    --grayF3: hsl(0, 0%, calc(var(--whiteLightness) - 5%));
    --grayD9: hsl(0, 0%, calc(var(--whiteLightness) - 15%));
    --grayC4: hsl(0, 0%, calc(var(--whiteLightness) - 25%));
    --gray66: hsl(0, 0%, calc(var(--whiteLightness) - 60%));
    --gray99: hsl(0, 0%, calc(var(--whiteLightness) - 40%));
    --darkness: hsl(0, 0%, calc(var(--whiteLightness) - 72.5%));
    --darkLord: hsl(0, 0%, calc(var(--whiteLightness) - 83.5%));
    --greenDark: #0B1416;
    --commentBorder: #343536;
    --commentBorderHover: #D7DADC;
    --bodyText: #D7DADC;
}

body {
    padding: 0;
    margin: 0;
    background-color: var(--space);
    font-size: 14px;
    line-height: 16px;
    font-family: 'Roboto', serif;
}

* {
    color: var(--black);
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

button {
    padding: 0;
    border: 0;
    background: transparent;
    cursor: pointer;
}

a {
    text-decoration: none;
}

/* CUSTOM SCROLLBAR */

::-webkit-scrollbar {
    background-color: var(--background);
    width: 8px;
    border-radius: 1px;
}

::-webkit-scrollbar-thumb {
    background-color: var(--gray66);
    border-radius: 1px;
    transition: background-color 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
    background-color: var(--orangeFF);
}

* {
    scrollbar-color: var(--grayD9) var(--EC);
    scrollbar-width: thin;
}

@media (max-width: 1024px) {
    ::-webkit-scrollbar {
        width: 3px;
    }
}

.active.active {
    color: var(--buttonColor);
    background-color: var(--darkLord);
}

.active.active:hover {
    background-color: var(--commentBorder);
}

.active.active svg {
    fill: var(--buttonColor);
}`, ""]);
// Exports
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (___CSS_LOADER_EXPORT___)));


/***/ }),

/***/ 613:
/***/ ((module) => {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
    var list = [];
    // return the list of modules as css string
    list.toString = function toString() {
        return this.map(function (item) {
            var content = "";
            var needLayer = typeof item[5] !== "undefined";
            if (item[4]) {
                content += "@supports (".concat(item[4], ") {");
            }
            if (item[2]) {
                content += "@media ".concat(item[2], " {");
            }
            if (needLayer) {
                content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
            }
            content += cssWithMappingToString(item);
            if (needLayer) {
                content += "}";
            }
            if (item[2]) {
                content += "}";
            }
            if (item[4]) {
                content += "}";
            }
            return content;
        }).join("");
    };
    // import a list of modules into the list
    list.i = function i(modules, media, dedupe, supports, layer) {
        if (typeof modules === "string") {
            modules = [[null, modules, undefined]];
        }
        var alreadyImportedModules = {};
        if (dedupe) {
            for (var k = 0; k < this.length; k++) {
                var id = this[k][0];
                if (id != null) {
                    alreadyImportedModules[id] = true;
                }
            }
        }
        for (var _k = 0; _k < modules.length; _k++) {
            var item = [].concat(modules[_k]);
            if (dedupe && alreadyImportedModules[item[0]]) {
                continue;
            }
            if (typeof layer !== "undefined") {
                if (typeof item[5] === "undefined") {
                    item[5] = layer;
                }
                else {
                    item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
                    item[5] = layer;
                }
            }
            if (media) {
                if (!item[2]) {
                    item[2] = media;
                }
                else {
                    item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
                    item[2] = media;
                }
            }
            if (supports) {
                if (!item[4]) {
                    item[4] = "".concat(supports);
                }
                else {
                    item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
                    item[4] = supports;
                }
            }
            list.push(item);
        }
    };
    return list;
};


/***/ }),

/***/ 580:
/***/ ((module) => {


module.exports = function (i) {
    return i[1];
};


/***/ }),

/***/ 816:
/***/ ((module) => {

module.exports = require("html-to-text");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {

;// CONCATENATED MODULE: external "express"
const external_express_namespaceObject = require("express");
var external_express_default = /*#__PURE__*/__webpack_require__.n(external_express_namespaceObject);
;// CONCATENATED MODULE: external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
var server_default = /*#__PURE__*/__webpack_require__.n(server_namespaceObject);
;// CONCATENATED MODULE: external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
// EXTERNAL MODULE: ./src/main.global.css
var main_global = __webpack_require__(853);
;// CONCATENATED MODULE: ./src/shared/Layout/layout.css
// Exports
/* harmony default export */ const layout = ({
	"layout": `layout__layout--TomHf`
});

;// CONCATENATED MODULE: ./src/shared/Layout/Layout.tsx


function Layout({ children }) {
    return (external_react_default().createElement("div", { className: layout.layout }, children));
}

;// CONCATENATED MODULE: ./src/shared/Layout/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/header.css
// Exports
/* harmony default export */ const header = ({
	"header": `header__header--StEJO`,
	"container": `header__container--_fZ4W`
});

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/searchblock.css
// Exports
/* harmony default export */ const searchblock = ({
	"searchBlock": `searchblock__searchBlock--AiDOf`
});

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/userblock.css
// Exports
/* harmony default export */ const userblock = ({
	"userBox": `userblock__userBox--Nm25r`,
	"avatarBox": `userblock__avatarBox--x3w7E`,
	"avatar": `userblock__avatar--reVyF`,
	"avatarImage": `userblock__avatarImage--rrs9K`,
	"username": `userblock__username--f8XW1`
});

;// CONCATENATED MODULE: ./src/shared/Icons/IconAnonim.tsx

function IconAnonim({ className }) {
    return (React.createElement("svg", { className: className, width: "50", height: "50", viewBox: "0 0 50 50", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M25 0C11.2 0 0 11.2 0 25C0 38.8 11.2 50 25 50C38.8 50 50 38.8 50 25C50 11.2 38.8 0 25 0ZM25 7.5C29.15 7.5 32.5 10.85 32.5 15C32.5 19.15 29.15 22.5 25 22.5C20.85 22.5 17.5 19.15 17.5 15C17.5 10.85 20.85 7.5 25 7.5ZM25 43C18.75 43 13.225 39.8 10 34.95C10.075 29.975 20 27.25 25 27.25C29.975 27.25 39.925 29.975 40 34.95C36.775 39.8 31.25 43 25 43Z", fill: "#D9D9D9" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconMenu.tsx

function IconMenu() {
    return (external_react_default().createElement("svg", { width: "5", height: "20", viewBox: "0 0 5 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("circle", { cx: "2.5", cy: "2.5", r: "2.5" }),
        external_react_default().createElement("circle", { cx: "2.5", cy: "10", r: "2.5" }),
        external_react_default().createElement("circle", { cx: "2.5", cy: "17.5", r: "2.5" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconComments.tsx

function IconComments() {
    return (external_react_default().createElement("svg", { width: "15", height: "15", viewBox: "0 0 15 15", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M12.75 0.416626H1.41667C0.6375 0.416626 0 1.05413 0 1.83329V10.3333C0 11.1125 0.6375 11.75 1.41667 11.75H11.3333L14.1667 14.5833V1.83329C14.1667 1.05413 13.5292 0.416626 12.75 0.416626ZM11.3333 8.91663H2.83333V7.49996H11.3333V8.91663ZM11.3333 6.79163H2.83333V5.37496H11.3333V6.79163ZM11.3333 4.66663H2.83333V3.24996H11.3333V4.66663Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconShareForm.tsx

function IconShareForm() {
    return (external_react_default().createElement("svg", { width: "20", height: "10", viewBox: "0 0 20 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconShare.tsx

function IconShare() {
    return (external_react_default().createElement("svg", { width: "12", height: "14", viewBox: "0 0 12 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M10 9.89558C9.49333 9.89558 9.04 10.1064 8.69333 10.4367L3.94 7.52008C3.97333 7.35843 4 7.19679 4 7.02811C4 6.85944 3.97333 6.69779 3.94 6.53614L8.64 3.64759C9 3.999 9.47333 4.21687 10 4.21687C11.1067 4.21687 12 3.2751 12 2.10843C12 0.941767 11.1067 0 10 0C8.89333 0 8 0.941767 8 2.10843C8 2.27711 8.02667 2.43875 8.06 2.6004L3.36 5.48896C3 5.13755 2.52667 4.91968 2 4.91968C0.893333 4.91968 0 5.86145 0 7.02811C0 8.19478 0.893333 9.13655 2 9.13655C2.52667 9.13655 3 8.91867 3.36 8.56727L8.10667 11.491C8.07333 11.6386 8.05333 11.7932 8.05333 11.9478C8.05333 13.0793 8.92667 14 10 14C11.0733 14 11.9467 13.0793 11.9467 11.9478C11.9467 10.8163 11.0733 9.89558 10 9.89558Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconHide.tsx

function IconHide() {
    return (external_react_default().createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M7 0C3.136 0 0 3.136 0 7C0 10.864 3.136 14 7 14C10.864 14 14 10.864 14 7C14 3.136 10.864 0 7 0ZM7 12.6C3.906 12.6 1.4 10.094 1.4 7C1.4 5.705 1.841 4.515 2.583 3.57L10.43 11.417C9.485 12.159 8.295 12.6 7 12.6ZM11.417 10.43L3.57 2.583C4.515 1.841 5.705 1.4 7 1.4C10.094 1.4 12.6 3.906 12.6 7C12.6 8.295 12.159 9.485 11.417 10.43Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconSave.tsx

function IconSave() {
    return (external_react_default().createElement("svg", { width: "14", height: "14", viewBox: "0 0 14 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M1.4 2.8H0V12.6C0 13.37 0.63 14 1.4 14H11.2V12.6H1.4V2.8ZM12.6 0H4.2C3.43 0 2.8 0.63 2.8 1.4V9.8C2.8 10.57 3.43 11.2 4.2 11.2H12.6C13.37 11.2 14 10.57 14 9.8V1.4C14 0.63 13.37 0 12.6 0ZM11.9 6.3H9.1V9.1H7.7V6.3H4.9V4.9H7.7V2.1H9.1V4.9H11.9V6.3Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconReport.tsx

function IconReport() {
    return (external_react_default().createElement("svg", { width: "16", height: "14", viewBox: "0 0 16 14", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M0 14H16L8 0L0 14ZM8.72727 11.7895H7.27273V10.3158H8.72727V11.7895ZM8.72727 8.8421H7.27273V5.89474H8.72727V8.8421Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconTriangle.tsx

function IconTriangle() {
    return (external_react_default().createElement("svg", { width: "19", height: "10", viewBox: "0 0 19 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M9.5 0L0 10H19L9.5 0Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconShareMobile.tsx

function IconShareMobile() {
    return (external_react_default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
        external_react_default().createElement("path", { d: "M11.6667 12.0683C11.3289 12.0683 11.0267 12.2189 10.7956 12.4548L7.62667 10.3715C7.64889 10.256 7.66667 10.1406 7.66667 10.0201C7.66667 9.8996 7.64889 9.78414 7.62667 9.66867L10.76 7.60542C11 7.85643 11.3156 8.01205 11.6667 8.01205C12.4044 8.01205 13 7.33936 13 6.50602C13 5.67269 12.4044 5 11.6667 5C10.9289 5 10.3333 5.67269 10.3333 6.50602C10.3333 6.62651 10.3511 6.74197 10.3733 6.85743L7.24 8.92068C7 8.66968 6.68444 8.51406 6.33333 8.51406C5.59556 8.51406 5 9.18675 5 10.0201C5 10.8534 5.59556 11.5261 6.33333 11.5261C6.68444 11.5261 7 11.3705 7.24 11.1195L10.4044 13.2078C10.3822 13.3133 10.3689 13.4237 10.3689 13.5341C10.3689 14.3424 10.9511 15 11.6667 15C12.3822 15 12.9644 14.3424 12.9644 13.5341C12.9644 12.7259 12.3822 12.0683 11.6667 12.0683Z", fill: "white" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconSaveMobile.tsx

function IconSaveMobile() {
    return (external_react_default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("circle", { cx: "10", cy: "10", r: "10", fill: "#C4C4C4" }),
        external_react_default().createElement("path", { d: "M6 7H5V14C5 14.55 5.45 15 6 15H13V14H6V7ZM14 5H8C7.45 5 7 5.45 7 6V12C7 12.55 7.45 13 8 13H14C14.55 13 15 12.55 15 12V6C15 5.45 14.55 5 14 5ZM13.5 9.5H11.5V11.5H10.5V9.5H8.5V8.5H10.5V6.5H11.5V8.5H13.5V9.5Z", fill: "white" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconX.tsx

function IconX() {
    return (external_react_default().createElement("svg", { width: "21", height: "21", viewBox: "0 0 21 21", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M19.7991 3.05176e-05L20.7419 0.942838L0.94289 20.7418L8.27312e-05 19.799L19.7991 3.05176e-05Z", fill: "#ADADAD" }),
        external_react_default().createElement("path", { d: "M20.7418 19.799L19.799 20.7418L2.47121e-05 0.942798L0.942833 -1.04904e-05L20.7418 19.799Z", fill: "#ADADAD" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconSwitch.tsx

function IconSwitch() {
    return (external_react_default().createElement("svg", { width: "16", height: "8", viewBox: "0 0 20 12", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M7.4 10.6L2.8 6L7.4 1.4L6 0L0 6L6 12L7.4 10.6ZM12.6 10.6L17.2 6L12.6 1.4L14 0L20 6L14 12L12.6 10.6Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconPicture.tsx

function IconPicture() {
    return (external_react_default().createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M18 16V2C18 0.9 17.1 0 16 0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H16C17.1 18 18 17.1 18 16ZM5.5 10.5L8 13.51L11.5 9L16 15H2L5.5 10.5Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconFile.tsx

function IconFile() {
    return (external_react_default().createElement("svg", { width: "16", height: "20", viewBox: "0 0 16 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M10 0H2C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0ZM12 16H4V14H12V16ZM12 12H4V10H12V12ZM9 7V1.5L14.5 7H9Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconDownload.tsx

function IconDownload() {
    return (external_react_default().createElement("svg", { width: "14", height: "17", viewBox: "0 0 14 17", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M14 6H10V0H4V6H0L7 13L14 6ZM0 15V17H14V15H0Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconUser.tsx

function IconUser() {
    return (external_react_default().createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M0 2V16C0 17.1 0.89 18 2 18H16C17.1 18 18 17.1 18 16V2C18 0.9 17.1 0 16 0H2C0.89 0 0 0.9 0 2ZM12 6C12 7.66 10.66 9 9 9C7.34 9 6 7.66 6 6C6 4.34 7.34 3 9 3C10.66 3 12 4.34 12 6ZM3 14C3 12 7 10.9 9 10.9C11 10.9 15 12 15 14V15H3V14Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconReverse.tsx

function IconReverse() {
    return (external_react_default().createElement("svg", { width: "22", height: "16", viewBox: "0 0 22 16", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M18 4L14 8H17C17 11.31 14.31 14 11 14C9.99 14 9.03 13.75 8.2 13.3L6.74 14.76C7.97 15.54 9.43 16 11 16C15.42 16 19 12.42 19 8H22L18 4ZM5 8C5 4.69 7.69 2 11 2C12.01 2 12.97 2.25 13.8 2.7L15.26 1.24C14.03 0.46 12.57 0 11 0C6.58 0 3 3.58 3 8H0L4 12L8 8H5Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconLink.tsx

function IconLink() {
    return (React.createElement("svg", { width: "20", height: "10", viewBox: "0 0 20 10", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        React.createElement("path", { d: "M1.9 5C1.9 3.29 3.29 1.9 5 1.9H9V0H5C2.24 0 0 2.24 0 5C0 7.76 2.24 10 5 10H9V8.1H5C3.29 8.1 1.9 6.71 1.9 5ZM6 6H14V4H6V6ZM15 0H11V1.9H15C16.71 1.9 18.1 3.29 18.1 5C18.1 6.71 16.71 8.1 15 8.1H11V10H15C17.76 10 20 7.76 20 5C20 2.24 17.76 0 15 0Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconRecord.tsx

function IconRecord() {
    return (external_react_default().createElement("svg", { width: "20", height: "18", viewBox: "0 0 20 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M18 2H14.83L13 0H7L5.17 2H2C0.9 2 0 2.9 0 4V16C0 17.1 0.9 18 2 18H9V15.91C6.17 15.43 4 12.97 4 10H6C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10H16C16 12.97 13.83 15.43 11 15.91V18H18C19.1 18 20 17.1 20 16V4C20 2.9 19.1 2 18 2ZM12 10C12 11.1 11.1 12 10 12C8.9 12 8 11.1 8 10V6C8 4.9 8.9 4 10 4C11.1 4 12 4.9 12 6V10Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconMessage.tsx

function IconMessage() {
    return (external_react_default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M19 4H17V13H4V15C4 15.55 4.45 16 5 16H16L20 20V5C20 4.45 19.55 4 19 4ZM15 10V1C15 0.45 14.55 0 14 0H1C0.45 0 0 0.45 0 1V15L4 11H14C14.55 11 15 10.55 15 10Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconPencil.tsx

function IconPencil() {
    return (external_react_default().createElement("svg", { width: "18", height: "18", viewBox: "0 0 18 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M0 14.2501V18.0001H3.75L14.81 6.94006L11.06 3.19006L0 14.2501ZM17.71 4.04006C18.1 3.65006 18.1 3.02006 17.71 2.63006L15.37 0.290059C14.98 -0.0999414 14.35 -0.0999414 13.96 0.290059L12.13 2.12006L15.88 5.87006L17.71 4.04006Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconWord.tsx

function IconWord() {
    return (external_react_default().createElement("svg", { width: "16", height: "18", viewBox: "0 0 16 18", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M7.75 0H6.25L1.5 11H3.6L4.5 8.8H9.5L10.4 11H12.5L7.75 0ZM5.13 7L7 1.98L8.87 7H5.13ZM15.5 15L12.5 12V14H0V16H12.5V18L15.5 15Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconPdf.tsx

function IconPdf() {
    return (external_react_default().createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M18 0H6C4.9 0 4 0.9 4 2V14C4 15.1 4.9 16 6 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM9.5 7.5C9.5 8.33 8.83 9 8 9H7V11H5.5V5H8C8.83 5 9.5 5.67 9.5 6.5V7.5ZM14.5 9.5C14.5 10.33 13.83 11 13 11H10.5V5H13C13.83 5 14.5 5.67 14.5 6.5V9.5ZM18.5 6.5H17V7.5H18.5V9H17V11H15.5V5H18.5V6.5ZM7 7.5H8V6.5H7V7.5ZM2 4H0V18C0 19.1 0.9 20 2 20H16V18H2V4ZM12 9.5H13V6.5H12V9.5Z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconArrow.tsx

function IconArrow() {
    return (external_react_default().createElement("svg", { width: "13", height: "7", viewBox: "0 0 13 7", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6.5 7L5.57483e-07 0.623141L0.703795 -1.55181e-06L6.5 5.6864L12.2962 -5.38365e-07L13 0.623142L6.5 7Z", fill: "#4FBCFF" })));
}

;// CONCATENATED MODULE: ./src/img/redditAnonimBlue.png
/* harmony default export */ const redditAnonimBlue = (__webpack_require__.p + "static/media/redditAnonimBlue.9aeeb31c0c00801ab078261a519f9d71.png");
;// CONCATENATED MODULE: ./src/img/redditAnonimGreen.png
/* harmony default export */ const redditAnonimGreen = (__webpack_require__.p + "static/media/redditAnonimGreen.ed4c8c9c0a7ff6e4f8989b417cd94b6b.png");
;// CONCATENATED MODULE: ./src/img/redditAnonimBrown.png
/* harmony default export */ const redditAnonimBrown = (__webpack_require__.p + "static/media/redditAnonimBrown.7283aa60b606d76aa746bb08f4f0e06f.png");
;// CONCATENATED MODULE: ./src/img/redditAnonimYellow.png
/* harmony default export */ const redditAnonimYellow = (__webpack_require__.p + "static/media/redditAnonimYellow.ac216724023f68e954ba4edc8afe541e.png");
;// CONCATENATED MODULE: ./src/img/redditAnonimRed.png
/* harmony default export */ const redditAnonimRed = (__webpack_require__.p + "static/media/redditAnonimRed.0c4f181e7b43c2a5200ebe5c1d033aa0.png");
;// CONCATENATED MODULE: ./src/img/redditDefaultImagePurple.png
/* harmony default export */ const redditDefaultImagePurple = (__webpack_require__.p + "static/media/redditDefaultImagePurple.34d0f4bff08a6386e3c3628e5699a905.png");
;// CONCATENATED MODULE: ./src/shared/Icons/IconRedditDefault.tsx







function IconRedditDefault({ className }) {
    const imagesDefault = [
        { image: redditAnonimBlue },
        { image: redditAnonimGreen },
        { image: redditAnonimBrown },
        { image: redditAnonimYellow },
        { image: redditAnonimRed },
        { image: redditDefaultImagePurple },
    ];
    function shuffle(array) {
        const [image, setImage] = (0,external_react_namespaceObject.useState)('');
        (0,external_react_namespaceObject.useEffect)(() => {
            setImage(array.sort(() => Math.random() - 0.5)[0].image);
        }, []);
        return image;
    }
    return (external_react_default().createElement("img", { className: className, src: shuffle(imagesDefault) }));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconRocket.tsx

function IconRocket() {
    return (external_react_default().createElement("svg", { viewBox: "0 0 32 32", version: "1.1", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("title", null, "rocket"),
        external_react_default().createElement("path", { d: "M23.371 29.529c0 0 0.335-2.012-1.731-4.469 2.011-5.641 2.29-10.778 2.29-10.778s4.133 0.95 4.133 5.026c-0.001 6.981-4.692 10.221-4.692 10.221zM11.979 27.078c0 0-2.768-8.883-2.768-12.568 0-1.658 0.187-3.133 0.478-4.472h12.61c0.293 1.34 0.481 2.816 0.481 4.473 0 3.629-2.76 12.567-2.76 12.567h-8.041zM15.99 12.069c-1.418 0-2.568 1.15-2.568 2.569 0 1.418 1.15 2.569 2.568 2.569s2.569-1.15 2.569-2.569c0.001-1.419-1.15-2.569-2.569-2.569zM15.438 0.596v-3.498h1v3.409c1.143 0.832 4.236 3.478 5.635 8.575h-12.16c1.352-4.957 4.296-7.574 5.525-8.486zM8.629 29.529c0 0-4.691-3.24-4.691-10.221 0-4.076 4.133-5.026 4.133-5.026s0.279 5.137 2.289 10.778c-2.067 2.458-1.731 4.469-1.731 4.469zM17.691 30.045l-0.838-0.838-0.893 2.793-1.062-2.793-0.726 1.451-1.062-2.625h5.752l-1.171 2.012z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconFire.tsx

function IconFire() {
    return (external_react_default().createElement("svg", { style: { height: '25px', marginRight: 2 }, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
        external_react_default().createElement("path", { d: "M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" })));
}

;// CONCATENATED MODULE: ./src/shared/Header/LogoLink/logoLink.css
// Exports
/* harmony default export */ const logoLink = ({
	"link": `logoLink__link--JzvhR`,
	"logo": `logoLink__logo--aKeHv`,
	"title": `logoLink__title--_YSgk`
});

;// CONCATENATED MODULE: ./src/shared/Icons/RedditLogo.tsx


function RedditLogo() {
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement("svg", { className: logoLink.logo, xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 216 216" },
            external_react_default().createElement("defs", null,
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient", cx: "169.75", cy: "92.19", fx: "169.75", fy: "92.19", r: "50.98", gradientTransform: "translate(0 11.64) scale(1 .87)", gradientUnits: "userSpaceOnUse" },
                    external_react_default().createElement("stop", { offset: "0", stopColor: "#feffff" }),
                    external_react_default().createElement("stop", { offset: ".4", stopColor: "#feffff" }),
                    external_react_default().createElement("stop", { offset: ".51", stopColor: "#f9fcfc" }),
                    external_react_default().createElement("stop", { offset: ".62", stopColor: "#edf3f5" }),
                    external_react_default().createElement("stop", { offset: ".7", stopColor: "#dee9ec" }),
                    external_react_default().createElement("stop", { offset: ".72", stopColor: "#d8e4e8" }),
                    external_react_default().createElement("stop", { offset: ".76", stopColor: "#ccd8df" }),
                    external_react_default().createElement("stop", { offset: ".8", stopColor: "#c8d5dd" }),
                    external_react_default().createElement("stop", { offset: ".83", stopColor: "#ccd6de" }),
                    external_react_default().createElement("stop", { offset: ".85", stopColor: "#d8dbe2" }),
                    external_react_default().createElement("stop", { offset: ".88", stopColor: "#ede3e9" }),
                    external_react_default().createElement("stop", { offset: ".9", stopColor: "#ffebef" })),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-2", cx: "47.31", fx: "47.31", r: "50.98", xlinkHref: "#snoo-radial-gragient" }),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-3", cx: "109.61", cy: "85.59", fx: "109.61", fy: "85.59", r: "153.78", gradientTransform: "translate(0 25.56) scale(1 .7)", xlinkHref: "#snoo-radial-gragient" }),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-4", cx: "-6.01", cy: "64.68", fx: "-6.01", fy: "64.68", r: "12.85", gradientTransform: "translate(81.08 27.26) scale(1.07 1.55)", gradientUnits: "userSpaceOnUse" },
                    external_react_default().createElement("stop", { offset: "0", stopColor: "#f60" }),
                    external_react_default().createElement("stop", { offset: ".5", stopColor: "#ff4500" }),
                    external_react_default().createElement("stop", { offset: ".7", stopColor: "#fc4301" }),
                    external_react_default().createElement("stop", { offset: ".82", stopColor: "#f43f07" }),
                    external_react_default().createElement("stop", { offset: ".92", stopColor: "#e53812" }),
                    external_react_default().createElement("stop", { offset: "1", stopColor: "#d4301f" })),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-5", cx: "-73.55", cy: "64.68", fx: "-73.55", fy: "64.68", r: "12.85", gradientTransform: "translate(62.87 27.26) rotate(-180) scale(1.07 -1.55)", xlinkHref: "#snoo-radial-gragient-4" }),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-6", cx: "107.93", cy: "166.96", fx: "107.93", fy: "166.96", r: "45.3", gradientTransform: "translate(0 57.4) scale(1 .66)", gradientUnits: "userSpaceOnUse" },
                    external_react_default().createElement("stop", { offset: "0", stopColor: "#172e35" }),
                    external_react_default().createElement("stop", { offset: ".29", stopColor: "#0e1c21" }),
                    external_react_default().createElement("stop", { offset: ".73", stopColor: "#030708" }),
                    external_react_default().createElement("stop", { offset: "1", stopColor: "#000" })),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-7", cx: "147.88", cy: "32.94", fx: "147.88", fy: "32.94", r: "39.77", gradientTransform: "translate(0 .54) scale(1 .98)", xlinkHref: "#snoo-radial-gragient" }),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-8", cx: "131.31", cy: "73.08", fx: "131.31", fy: "73.08", r: "32.6", gradientUnits: "userSpaceOnUse" },
                    external_react_default().createElement("stop", { offset: ".48", stopColor: "#7a9299" }),
                    external_react_default().createElement("stop", { offset: ".67", stopColor: "#172e35" }),
                    external_react_default().createElement("stop", { offset: ".75", stopColor: "#000" }),
                    external_react_default().createElement("stop", { offset: ".82", stopColor: "#172e35" }))),
            external_react_default().createElement("path", { fill: "#ff4500", d: "m108,0h0C48.35,0,0,48.35,0,108h0c0,29.82,12.09,56.82,31.63,76.37l-20.57,20.57c-4.08,4.08-1.19,11.06,4.58,11.06h92.36s0,0,0,0c59.65,0,108-48.35,108-108h0C216,48.35,167.65,0,108,0Z" }),
            external_react_default().createElement("circle", { fill: "url(#snoo-radial-gragient)", cx: "169.22", cy: "106.98", r: "25.22" }),
            external_react_default().createElement("circle", { fill: "url(#snoo-radial-gragient-2)", cx: "46.78", cy: "106.98", r: "25.22" }),
            external_react_default().createElement("ellipse", { fill: "url(#snoo-radial-gragient-3)", cx: "108.06", cy: "128.64", rx: "72", ry: "54" }),
            external_react_default().createElement("path", { fill: "url(#snoo-radial-gragient-4)", d: "m86.78,123.48c-.42,9.08-6.49,12.38-13.56,12.38s-12.46-4.93-12.04-14.01c.42-9.08,6.49-15.02,13.56-15.02s12.46,7.58,12.04,16.66Z" }),
            external_react_default().createElement("path", { fill: "url(#snoo-radial-gragient-5)", d: "m129.35,123.48c.42,9.08,6.49,12.38,13.56,12.38s12.46-4.93,12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46,7.58-12.04,16.66Z" }),
            external_react_default().createElement("ellipse", { fill: "#ffc49c", cx: "79.63", cy: "116.37", rx: "2.8", ry: "3.05" }),
            external_react_default().createElement("ellipse", { fill: "#ffc49c", cx: "146.21", cy: "116.37", rx: "2.8", ry: "3.05" }),
            external_react_default().createElement("path", { fill: "url(#snoo-radial-gragient-6)", d: "m108.06,142.92c-8.76,0-17.16.43-24.92,1.22-1.33.13-2.17,1.51-1.65,2.74,4.35,10.39,14.61,17.69,26.57,17.69s22.23-7.3,26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z" }),
            external_react_default().createElement("circle", { fill: "url(#snoo-radial-gragient-7)", cx: "147.49", cy: "49.43", r: "17.87" }),
            external_react_default().createElement("path", { fill: "url(#snoo-radial-gragient-8)", d: "m107.8,76.92c-2.14,0-3.87-.89-3.87-2.27,0-16.01,13.03-29.04,29.04-29.04,2.14,0,3.87,1.73,3.87,3.87s-1.73,3.87-3.87,3.87c-11.74,0-21.29,9.55-21.29,21.29,0,1.38-1.73,2.27-3.87,2.27Z" }),
            external_react_default().createElement("path", { fill: "#842123", d: "m62.82,122.65c.39-8.56,6.08-14.16,12.69-14.16,6.26,0,11.1,6.39,11.28,14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14,6.05-13.56,15.2c-.42,9.15,4.97,13.83,12.04,13.83.17,0,.35,0,.52,0-6.44-.16-11.3-4.79-10.91-13.2Z" }),
            external_react_default().createElement("path", { fill: "#842123", d: "m153.3,122.65c-.39-8.56-6.08-14.16-12.69-14.16-6.26,0-11.1,6.39-11.28,14.33-.17-8.88,5.13-15.99,12.05-15.99,7.07,0,13.14,6.05,13.56,15.2.42,9.15-4.97,13.83-12.04,13.83-.17,0-.35,0-.52,0,6.44-.16,11.3-4.79,10.91-13.2Z" })),
        external_react_default().createElement("svg", { className: logoLink.title, viewBox: "0 0 514 149", xmlns: "http://www.w3.org/2000/svg", xmlSpace: "preserve" },
            external_react_default().createElement("g", { fill: "#FFFFFF" },
                external_react_default().createElement("path", { d: "m71.62,45.92l-12.01,28.56c-1.51-.76-5.11-1.61-8.51-1.61s-6.81.85-10.12,2.46c-6.53,3.31-11.35,9.93-11.35,19.48v52.3H-.26V45.35h29.04v14.28h.57c6.81-9.08,17.21-15.79,30.74-15.79,4.92,0,9.65.95,11.54,2.08Z" }),
                external_react_default().createElement("path", { d: "m65.84,96.52c0-29.41,20.15-52.68,50.32-52.68,27.33,0,46.91,19.96,46.91,48.05,0,4.92-.47,9.55-1.51,14h-68.48c3.12,10.69,12.39,19.01,26.29,19.01,7.66,0,18.54-2.74,24.4-7.28l9.27,22.32c-8.61,5.86-21.75,8.7-33.29,8.7-32.25,0-53.91-20.81-53.91-52.11Zm26.67-9.36h43.03c0-13.05-8.89-19.96-19.77-19.96-12.3,0-20.62,7.94-23.27,19.96Z" }),
                external_react_default().createElement("path", { d: "m419.53-.37c10.03,0,18.25,8.23,18.25,18.25s-8.23,18.25-18.25,18.25-18.25-8.23-18.25-18.25S409.51-.37,419.53-.37Zm14.94,147.49h-29.89V45.35h29.89v101.77Z" }),
                external_react_default().createElement("path", { d: "m246,1.47l-.09,53.53h-.57c-8.23-7.85-17.12-11.07-28.75-11.07-28.66,0-47.67,23.08-47.67,52.3s17.78,52.4,46.72,52.4c12.11,0,23.55-4.16,30.93-13.62h.85v12.11h28.47V1.47h-29.89Zm1.42,121.39h-.99l-6.67-6.93c-4.34,4.33-10.28,6.93-17.22,6.93-14.64,0-24.88-11.58-24.88-26.6s10.24-26.6,24.88-26.6,24.88,11.58,24.88,26.6v26.6Z" }),
                external_react_default().createElement("path", { d: "m360.15,1.47l-.09,53.53h-.57c-8.23-7.85-17.12-11.07-28.75-11.07-28.66,0-47.67,23.08-47.67,52.3s17.78,52.4,46.72,52.4c12.11,0,23.55-4.16,30.93-13.62h.85v12.11h28.47V1.47h-29.89Zm1.28,121.39h-.99l-6.67-6.93c-4.34,4.33-10.28,6.93-17.22,6.93-14.64,0-24.88-11.58-24.88-26.6s10.24-26.6,24.88-26.6,24.88,11.58,24.88,26.6v26.6Z" }),
                external_react_default().createElement("path", { d: "m492.44,45.35h21.85v25.44h-21.85v76.33h-29.89v-76.33h-21.75v-25.44h21.75v-27.66h29.89v27.66Z" })))));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconNew.tsx

function IconNew() {
    return (external_react_default().createElement("svg", { style: { height: 21, marginRight: 5.5 }, version: "1.1", id: "_x32_", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 512 512", xmlSpace: "preserve" },
        external_react_default().createElement("g", null,
            external_react_default().createElement("path", { d: "M13.175,203.061c0,0-0.004-0.013-0.007-0.026l-0.672-1.763L13.175,203.061z" }),
            external_react_default().createElement("path", { d: "M17.239,163.415l11.178-7.3c0.006,0,0.012-0.007,0.019-0.014L17.239,163.415z" }),
            external_react_default().createElement("path", { d: "M480.364,260.466c-0.549-1.436-0.823-2.951-0.823-4.466c0-1.521,0.274-3.042,0.826-4.492l16.869-44.275\r\n\t\tl1.586-4.172c1.74-4.564,2.582-9.324,2.582-14.006c0.006-12.986-6.458-25.516-17.835-32.953l-5.599-3.656l-37.84-24.708\r\n\t\tc-2.569-1.684-4.447-4.276-5.25-7.247l-13.548-50.047c-4.675-17.23-20.28-29.075-37.978-29.075c-0.669,0-1.335,0.013-2.004,0.052\r\n\t\tL329.766,44v-0.006l-0.774,0.02c-2.896,0-5.687-0.98-7.933-2.788l-37.766-30.42l-2.598-2.089\r\n\t\tC273.507,2.912,264.725-0.006,256.002,0c-8.72-0.013-17.504,2.912-24.697,8.717l0.01-0.007L195.11,37.87l-4.159,3.35\r\n\t\tc-2.256,1.815-5.057,2.795-7.94,2.795L182.338,44l-51.555-2.572l-0.033-0.007c-0.8-0.046-1.502-0.052-2.102-0.052\r\n\t\tc-17.701,0-33.303,11.844-37.978,29.075l-13.549,50.047c-0.806,2.983-2.693,5.582-5.278,7.273l-3.732,2.436l-39.694,25.915\r\n\t\tc-11.371,7.444-17.828,19.966-17.822,32.946c0,4.675,0.839,9.415,2.573,13.973l18.465,48.473l0.003,0.006\r\n\t\tc0.548,1.437,0.826,2.965,0.826,4.486c0,1.522-0.274,3.043-0.826,4.48l-18.461,48.46l0.003-0.006\r\n\t\tc-1.74,4.564-2.583,9.318-2.583,13.999c-0.006,12.987,6.451,25.523,17.838,32.966l32.218,21.038l11.201,7.313\r\n\t\tc2.583,1.684,4.463,4.27,5.269,7.26l13.549,50.041c4.671,17.23,20.28,29.075,37.978,29.081c0.6-0.006,1.254-0.013,1.952-0.052\r\n\t\tl-1.482,0.078l53.439-2.67h-0.026l0.5-0.007c2.866,0,5.658,0.98,7.91,2.795l40.371,32.522h0.003\r\n\t\tc7.185,5.792,15.964,8.71,24.687,8.704c8.72,0.007,17.502-2.912,24.691-8.71l43.841-35.318l-3.467,2.795\r\n\t\tc2.253-1.815,5.038-2.788,7.907-2.788l0.6,0.013l52.189,2.605l-0.262-0.012c0.568,0.026,1.186,0.039,1.855,0.045\r\n\t\tc17.691-0.006,33.306-11.844,37.978-29.081l13.548-50.041c0.806-2.99,2.684-5.569,5.262-7.254l43.45-28.37\r\n\t\tc11.364-7.444,17.818-19.966,17.812-32.947c0-4.682-0.842-9.442-2.586-14.012L480.364,260.466z M455.38,241.988\r\n\t\tc-1.72,4.512-2.582,9.265-2.582,14.012c0,4.754,0.862,9.507,2.582,14.019l18.449,48.44l0.003,0.007\r\n\t\tc0.565,1.482,0.829,2.984,0.829,4.473c-0.007,4.166-2.063,8.188-5.716,10.571l-43.41,28.344h0.003\r\n\t\tc-8.086,5.275-13.95,13.346-16.474,22.67l-13.548,50.04c-1.485,5.524-6.513,9.324-12.16,9.317l-0.751-0.02l-0.189-0.006\r\n\t\tl-51.474-2.566h0.036c-0.634-0.039-1.303-0.052-2.004-0.059c-8.968,0-17.685,3.069-24.694,8.717l-3.47,2.801l-36.897,29.721\r\n\t\tc-2.324,1.874-5.086,2.788-7.91,2.788c-2.82,0-5.586-0.914-7.913-2.788l-40.368-32.522c-7.006-5.641-15.719-8.71-24.69-8.71\r\n\t\tc-0.601,0-1.303,0.007-2.106,0.052v0.007l-51.64,2.579l0.016-0.006l-0.652,0.013c-5.642,0.006-10.676-3.794-12.161-9.317\r\n\t\tl-13.548-50.04c-2.524-9.324-8.387-17.394-16.474-22.67l-32.212-21.031l-11.194-7.313c-3.65-2.377-5.713-6.405-5.72-10.578\r\n\t\tc0.003-1.496,0.265-2.997,0.826-4.466l18.461-48.454l-0.003,0.007c1.72-4.518,2.582-9.265,2.582-14.019\r\n\t\tc0-4.753-0.858-9.506-2.582-14.018L38.848,195.33l-0.679-1.776c-0.565-1.489-0.826-2.997-0.83-4.492\r\n\t\tc0.007-4.172,2.067-8.188,5.716-10.564l43.414-28.343l0.007-0.007c8.082-5.288,13.94-13.352,16.464-22.67l13.548-50.047\r\n\t\tc1.482-5.517,6.523-9.324,12.161-9.317l0.503,0.006l51.91,2.592l0.056,0.007c0.63,0.026,1.264,0.04,1.894,0.046\r\n\t\tc8.968,0,17.688-3.063,24.701-8.704l40.386-32.529c2.321-1.874,5.08-2.782,7.904-2.788c2.821,0,5.583,0.914,7.907,2.788\r\n\t\tl-2.602-2.096l42.979,34.618c7.022,5.654,15.752,8.704,24.707,8.704c0.666,0,1.263-0.02,1.792-0.033h-0.14l52.075-2.599h0.035\r\n\t\tl0.601-0.013c5.641-0.007,10.678,3.8,12.16,9.317l13.548,50.047c2.524,9.317,8.38,17.381,16.464,22.67l49.018,32.006l-5.602-3.656\r\n\t\tc3.653,2.377,5.71,6.392,5.716,10.558c0,1.496-0.264,2.998-0.832,4.492l-20.832,54.683L455.38,241.988z" }))));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconTop.tsx

function IconTop() {
    return (external_react_default().createElement("svg", { style: { height: 20 }, version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 512 512", xmlSpace: "preserve" },
        external_react_default().createElement("polygon", { points: "187.115,176.384 187.115,344.495 324.883,344.495 324.883,176.384 390.443,176.384 \r\n\t256,14.694 121.556,176.384 " }),
        external_react_default().createElement("g", null,
            external_react_default().createElement("path", { d: "M324.883,359.187H187.115c-8.115,0-14.694-6.58-14.694-14.694V191.077h-50.866\r\n\t\tc-5.698,0-10.883-3.294-13.304-8.455c-2.42-5.159-1.638-11.251,2.006-15.634L244.701,5.298C247.492,1.941,251.633,0,255.999,0\r\n\t\tc4.365,0,8.508,1.941,11.298,5.298l134.443,161.69c3.644,4.382,4.426,10.475,2.006,15.634c-2.42,5.16-7.604,8.455-13.303,8.455\r\n\t\th-50.866v153.416C339.577,352.609,332.998,359.187,324.883,359.187z M201.809,329.8H310.19V176.384\r\n\t\tc0-8.114,6.578-14.694,14.694-14.694h34.233L256,37.676L152.884,161.69h34.233c8.115,0,14.694,6.58,14.694,14.694V329.8H201.809z" }),
            external_react_default().createElement("path", { d: "M464.648,512H47.352c-8.115,0-14.694-6.58-14.694-14.694V332.739\r\n\t\tc0-8.114,6.578-14.694,14.694-14.694h95.683c8.115,0,14.694,6.58,14.694,14.694v44.081h133.047c8.115,0,14.694,6.58,14.694,14.694\r\n\t\ts-6.578,14.694-14.694,14.694h-147.74c-8.115,0-14.694-6.58-14.694-14.694v-44.081H62.046v135.18h387.909v-135.18h-66.296v44.081\r\n\t\tc0,8.114-6.578,14.694-14.694,14.694s-14.694-6.58-14.694-14.694v-58.774c0-8.114,6.578-14.694,14.694-14.694h95.683\r\n\t\tc8.115,0,14.694,6.58,14.694,14.694v164.567C479.341,505.422,472.763,512,464.648,512z" }))));
}

;// CONCATENATED MODULE: ./src/shared/Icons/IconGrowth.tsx

function IconGrowth() {
    return (external_react_default().createElement("svg", { style: { height: 20 }, version: "1.1", id: "Capa_1", xmlns: "http://www.w3.org/2000/svg", xmlnsXlink: "http://www.w3.org/1999/xlink", viewBox: "0 0 360 360", xmlSpace: "preserve" },
        external_react_default().createElement("path", { d: "M355.606,94.394l-60-60c-5.857-5.858-15.355-5.858-21.213,0l-60,60c-4.29,4.29-5.573,10.742-3.252,16.347\r\n\tc2.322,5.605,7.791,9.26,13.858,9.26h15v180h-30V180c0-8.284-6.716-15-15-15h-60c-8.284,0-15,6.716-15,15v120H90v-55\r\n\tc0-8.284-6.716-15-15-15H15c-8.284,0-15,6.716-15,15v70c0,8.284,6.716,15,15,15h60h60h60h60h60c8.284,0,15-6.716,15-15V120h15\r\n\tc6.067,0,11.536-3.655,13.858-9.26C361.18,105.136,359.897,98.684,355.606,94.394z M30,300v-40h30v40H30z M150,300V195h30v105H150z\r\n\t M270,300V105c0-6.432-4.049-11.919-9.736-14.05L285,66.214l24.736,24.736C304.049,93.081,300,98.568,300,105v195H270z" })));
}

;// CONCATENATED MODULE: ./src/shared/Icons/index.ts

































;// CONCATENATED MODULE: external "classnames"
const external_classnames_namespaceObject = require("classnames");
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_namespaceObject);
;// CONCATENATED MODULE: ./src/utils/css/text.css
// Exports
/* harmony default export */ const css_text = ({
	"black": `text__black--zzAhE`,
	"blew": `text__blew--_Qfxm`,
	"orangeFF": `text__orangeFF--yrDLx`,
	"green": `text__green--b1uwQ`,
	"white": `text__white--JLpL3`,
	"grayF4": `text__grayF4--_csvx`,
	"grayF3": `text__grayF3--LHBVK`,
	"grayD9": `text__grayD9--zSnHJ`,
	"grayC4": `text__grayC4--tutHO`,
	"gray66": `text__gray66--dFeHU`,
	"gray99": `text__gray99--IqEbT`,
	"s28": `text__s28--Zy3GV`,
	"s20": `text__s20--zXQK9`,
	"s16": `text__s16--Cr0tD`,
	"s14": `text__s14--rM_Us`,
	"s12": `text__s12--kzcvP`,
	"s10": `text__s10--rUuBv`,
	"m28": `text__m28--NLtWw`,
	"m20": `text__m20--LbMKa`,
	"m16": `text__m16--DMIg8`,
	"m14": `text__m14--EwDTy`,
	"m12": `text__m12--I2kjW`,
	"m10": `text__m10--KJulj`,
	"t28": `text__t28--mvWBX`,
	"t20": `text__t20--xH5xg`,
	"t16": `text__t16--zXlQ8`,
	"t14": `text__t14--ZmAIG`,
	"t12": `text__t12--DjZMf`,
	"t10": `text__t10--Jle1Q`,
	"d28": `text__d28--QEHO1`,
	"d20": `text__d20--GuW8v`,
	"d16": `text__d16--s2djM`,
	"d14": `text__d14--fFZ_y`,
	"d12": `text__d12--is_Ms`,
	"d10": `text__d10--_1eKg`
});

;// CONCATENATED MODULE: ./src/utils/react/Text.tsx



var EColor;
(function (EColor) {
    EColor["black"] = "black";
    EColor["orangeFF"] = "orangeFF";
    EColor["green"] = "green";
    EColor["white"] = "white";
    EColor["grayF4"] = "grayF4";
    EColor["grayF3"] = "grayF3";
    EColor["grayD9"] = "grayD9";
    EColor["grayC4"] = "grayC4";
    EColor["gray66"] = "gray66";
    EColor["gray99"] = "gray99";
    EColor["blew"] = "blew";
})(EColor || (EColor = {}));
function Text(props) {
    const { As = 'span', color = EColor.black, children, size, mobileSize, tabletSize, desktopSize } = props;
    const classes = external_classnames_default()(css_text[`s${size}`], css_text[color], { [css_text[`m${mobileSize}`]]: mobileSize }, { [css_text[`t${tabletSize}`]]: tabletSize }, { [css_text[`d${desktopSize}`]]: desktopSize });
    return (external_react_default().createElement(As, { className: `${classes}${props.className ? ' ' + props.className : ''}`, dangerouslySetInnerHTML: props.dangerouslySetInnerHTML }, children));
}

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/UserBlock.tsx




function UserBlock({ loading, avatarSrc, username }) {
    return (external_react_default().createElement("a", { href: "https://www.reddit.com/api/v1/authorize?client_id=_27swn7Uy4Ctovp3-0sQUw&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity", className: userblock.userBox },
        external_react_default().createElement("div", { className: userblock.avatarBox }, avatarSrc
            ? external_react_default().createElement("img", { src: avatarSrc, alt: "User avatar", className: userblock.avatarImage })
            : external_react_default().createElement(IconRedditDefault, { className: userblock.avatar })),
        external_react_default().createElement("div", { className: userblock.username },
            external_react_default().createElement(Text, { size: 16, color: username ? EColor.white : EColor.gray99 }, loading
                ? 'loading...'
                : username || 'Log in'))));
}

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/UserBlock/index.ts


;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: external "@reduxjs/toolkit"
const toolkit_namespaceObject = require("@reduxjs/toolkit");
;// CONCATENATED MODULE: ./src/storeRedux/user/userSlise.ts

const initialState = {
    loading: false,
    name: '',
    iconImg: ''
};
const userSlise = (0,toolkit_namespaceObject.createSlice)({
    name: 'userData',
    initialState,
    reducers: {
        userDataPending: (state) => {
            return Object.assign(Object.assign({}, state), { loading: true });
        },
        setUserData: (state, action) => {
            return Object.assign(Object.assign({}, state), { name: action.payload.name, iconImg: action.payload.iconImg, loading: false });
        },
        userDataError: (state, action) => {
            return {
                error: action.payload,
                loading: false,
                name: '',
                iconImg: ''
            };
        }
    },
});
/* harmony default export */ const user_userSlise = (userSlise.reducer);
const { userDataPending, setUserData, userDataError } = userSlise.actions;

;// CONCATENATED MODULE: ./src/storeRedux/token/tokenSlice.ts

const tokenSlice_initialState = {
    token: '',
    createdAt: NaN,
};
const tokenSlice = (0,toolkit_namespaceObject.createSlice)({
    name: 'token',
    initialState: tokenSlice_initialState,
    reducers: {
        setToken(state, action) {
            return Object.assign(Object.assign({}, state), { token: action.payload, createdAt: action.payload ? new Date().getTime() : NaN });
        }
    }
});
const { setToken } = tokenSlice.actions;
/* harmony default export */ const token_tokenSlice = (tokenSlice.reducer);

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/storeRedux/token/saveTokenAsyncThunk.ts
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const saveTokenAsyncThunk = () => (dispatch, getState) => __awaiter(void 0, void 0, void 0, function* () {
    const timeNow = new Date().getTime();
    const { createdAt } = getState().redditToken;
    if (createdAt) {
        setTimeout(() => {
            dispatch(setToken(''));
            dispatch(setUserData({ name: '', iconImg: '' }));
        }, 7200000 - (timeNow - createdAt));
        return;
    }
    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    if (!params.code || !'undefined')
        return;
    try {
        const { data } = yield external_axios_default().post('https://www.reddit.com/api/v1/access_token', `grant_type=authorization_code&code=${params.code}&redirect_uri=http://localhost:3000/auth`, {
            auth: {
                username: 'undefined',
                password: 'VEAVqqPu7VVpRhOmQpqJmaQjl3Zrig'
            },
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
        dispatch(setToken(data['access_token']));
        window.history.replaceState({}, 'Reddit for me', '/auth');
    }
    catch (error) {
        console.log(error);
        alert(`Token error: ${error.message}`);
    }
});

;// CONCATENATED MODULE: ./src/storeRedux/user/userReguestAsyncThunk.ts
var userReguestAsyncThunk_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const userReguestAsyncThunk = () => (dispatch, getState) => userReguestAsyncThunk_awaiter(void 0, void 0, void 0, function* () {
    const { token } = getState().redditToken;
    if (!token)
        return;
    dispatch(userDataPending());
    try {
        const { data } = yield external_axios_default().get('https://oauth.reddit.com/api/v1/me', {
            headers: {
                Authorization: `bearer ${token}`
            }
        });
        dispatch(setUserData({
            name: data.name,
            iconImg: data.snoovatar_img
        }));
    }
    catch (error) {
        console.log(error);
        alert(`USER DATA ERROR: ${error.message}`);
        dispatch(userDataError(error));
    }
});

;// CONCATENATED MODULE: ./src/hooks/useUserData.ts




function useUserData() {
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const { userBlock, redditToken } = (0,external_react_redux_namespaceObject.useSelector)((state) => state);
    (0,external_react_namespaceObject.useEffect)(() => {
        dispatch(saveTokenAsyncThunk());
        dispatch(userReguestAsyncThunk());
    }, [redditToken]);
    return userBlock;
}

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/SearchBlock.tsx




function SearchBlock() {
    const { iconImg, name, loading } = useUserData();
    return (external_react_default().createElement("div", { className: searchblock.searchBlock },
        external_react_default().createElement(UserBlock, { avatarSrc: iconImg, username: name, loading: loading })));
}

;// CONCATENATED MODULE: ./src/shared/Header/SearchBlock/index.ts


;// CONCATENATED MODULE: external "react-router-dom"
const external_react_router_dom_namespaceObject = require("react-router-dom");
;// CONCATENATED MODULE: ./src/shared/Header/LogoLink/LogoLink.tsx




function LogoLink() {
    return (external_react_default().createElement(external_react_router_dom_namespaceObject.Link, { "aria-label": "Home", to: "/", className: logoLink.link },
        external_react_default().createElement(RedditLogo, null)));
}

;// CONCATENATED MODULE: ./src/storeRedux/posts/postsSlice.ts

const postsSlice_initialState = {
    postsData: [],
    afterList: '',
    count: 0,
    loading: false,
    type: ''
};
const postsSlice = (0,toolkit_namespaceObject.createSlice)({
    name: 'postsBlock',
    initialState: postsSlice_initialState,
    reducers: {
        resetPostsData(state) {
            return postsSlice_initialState;
        },
        getPostsDataPending(state) {
            return Object.assign(Object.assign({}, state), { loading: true });
        },
        setPostsData(state, action) {
            const addIsLast = state.postsData.map((post) => {
                return Object.assign(Object.assign({}, post), { isLast: false });
            });
            const scrolledPosts = addIsLast.concat(action.payload.postsData);
            return Object.assign(Object.assign({}, state), { postsData: scrolledPosts, afterList: action.payload.after, count: state.count === 2 ? 0 : state.count + 1, type: action.payload.postType || state.type, loading: false });
        },
        postsDataError(state, action) {
            return {
                postsData: [],
                loading: false,
                afterList: '',
                count: 0,
                error: action.payload,
                type: ''
            };
        }
    }
});
const { resetPostsData, getPostsDataPending, setPostsData, postsDataError } = postsSlice.actions;
/* harmony default export */ const posts_postsSlice = (postsSlice.reducer);

;// CONCATENATED MODULE: ./src/hooks/useAdaptiveForm.ts

function useAdaptiveForm(ref) {
    const [isWidth, setIsWidth] = (0,external_react_namespaceObject.useState)({});
    (0,external_react_namespaceObject.useEffect)(() => {
        let isUnmount = false;
        function handleResizeForm() {
            var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
            if (ref.current && !isUnmount) {
                setIsWidth({
                    maxWidth800: ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.offsetWidth) >= 800 ? true : false,
                    maxWidth753: ((_b = ref.current) === null || _b === void 0 ? void 0 : _b.offsetWidth) >= 753 ? true : false,
                    maxWidth706: ((_c = ref.current) === null || _c === void 0 ? void 0 : _c.offsetWidth) >= 706 ? true : false,
                    maxWidth659: ((_d = ref.current) === null || _d === void 0 ? void 0 : _d.offsetWidth) >= 659 ? true : false,
                    maxWidth612: ((_e = ref.current) === null || _e === void 0 ? void 0 : _e.offsetWidth) >= 612 ? true : false,
                    maxWidth565: ((_f = ref.current) === null || _f === void 0 ? void 0 : _f.offsetWidth) >= 565 ? true : false,
                    maxWidth518: ((_g = ref.current) === null || _g === void 0 ? void 0 : _g.offsetWidth) >= 518 ? true : false,
                    maxWidth471: ((_h = ref.current) === null || _h === void 0 ? void 0 : _h.offsetWidth) >= 471 ? true : false,
                    maxWidth424: ((_j = ref.current) === null || _j === void 0 ? void 0 : _j.offsetWidth) >= 424 ? true : false,
                    maxWidth377: ((_k = ref.current) === null || _k === void 0 ? void 0 : _k.offsetWidth) >= 377 ? true : false,
                    maxWidth330: ((_l = ref.current) === null || _l === void 0 ? void 0 : _l.offsetWidth) >= 330 ? true : false,
                    maxWidth295: ((_m = ref.current) === null || _m === void 0 ? void 0 : _m.offsetWidth) >= 295 ? true : false,
                    maxWidth200: ((_o = ref.current) === null || _o === void 0 ? void 0 : _o.offsetWidth) >= 200 ? true : false,
                });
            }
        }
        handleResizeForm();
        window.addEventListener('resize', handleResizeForm);
        return () => {
            window.removeEventListener('resize', handleResizeForm);
            isUnmount = true;
        };
    }, []);
    return [isWidth];
}

;// CONCATENATED MODULE: ./src/shared/Header/HeaderNavigation/headerNavigation.css
// Exports
/* harmony default export */ const headerNavigation = ({
	"nav": `headerNavigation__nav--b04SX`,
	"link": `headerNavigation__link--KRVEv`
});

;// CONCATENATED MODULE: ./src/hooks/useResizeCloser.ts
function useResizeCloser(onClose) {
    function handleResize() {
        onClose();
    }
    window.addEventListener('resize', handleResize);
}

;// CONCATENATED MODULE: ./src/hooks/useModalCloser.ts

function useModalCloser({ onClose, ref, ref2, timeDelay }) {
    (0,external_react_namespaceObject.useEffect)(() => {
        let isUnmount = false;
        function handleClick(event) {
            var _a, _b;
            if (!isUnmount &&
                event.target instanceof Node &&
                !((_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.contains(event.target)) &&
                !((_b = ref2 === null || ref2 === void 0 ? void 0 : ref2.current) === null || _b === void 0 ? void 0 : _b.contains(event.target))) {
                setTimeout(() => {
                    onClose === null || onClose === void 0 ? void 0 : onClose();
                }, timeDelay);
            }
        }
        document.addEventListener('click', handleClick);
        return () => {
            document.removeEventListener('click', handleClick);
            isUnmount = true;
        };
    }, []);
}

;// CONCATENATED MODULE: ./src/hooks/useCoords.ts

function useCoords(ref, isOpen) {
    const [coords, setCoords] = (0,external_react_namespaceObject.useState)(null);
    const getCoords = () => {
        if (ref.current) {
            return {
                left: ref.current.offsetLeft,
                top: ref.current.offsetTop + ref.current.offsetHeight,
            };
        }
        return null;
    };
    (0,external_react_namespaceObject.useEffect)(() => {
        if (!isOpen)
            return;
        setCoords(getCoords());
    }, [isOpen]);
    return [coords];
}

;// CONCATENATED MODULE: external "react-dom"
const external_react_dom_namespaceObject = require("react-dom");
;// CONCATENATED MODULE: ./src/shared/Header/HeaderNavigation/MenuNav/menuNav.css
// Exports
/* harmony default export */ const menuNav = ({
	"menu": `menuNav__menu--RJ_fx`,
	"nav": `menuNav__nav--uCz8o`
});

;// CONCATENATED MODULE: ./src/shared/Header/HeaderNavigation/MenuNav/MenuNav.tsx










function MenuNav({ className, isWidth }) {
    const modalRoot = document.getElementById('modal_root');
    if (!modalRoot)
        return null;
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const reset = () => dispatch(resetPostsData());
    const refMenu = (0,external_react_namespaceObject.useRef)(null);
    const [isMenuOpen, setIsMenuOpen] = (0,external_react_namespaceObject.useState)(false);
    const [coords] = useCoords(refMenu, isMenuOpen);
    useModalCloser({ ref: refMenu, onClose: () => setIsMenuOpen(false) });
    useResizeCloser(() => setIsMenuOpen(false));
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement("button", { className: menuNav.menu, onClick: () => setIsMenuOpen(!isMenuOpen), ref: refMenu },
            external_react_default().createElement(IconMenu, null)),
        isMenuOpen && coords && (0,external_react_dom_namespaceObject.createPortal)(external_react_default().createElement("nav", { className: menuNav.nav, style: {
                left: (coords === null || coords === void 0 ? void 0 : coords.left) + 'px',
                top: `calc(${(coords === null || coords === void 0 ? void 0 : coords.top) + 'px'} + 2px)`,
            } },
            !isWidth.maxWidth200 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: className, to: 'best', onClick: reset },
                external_react_default().createElement(IconRocket, null),
                "Best"),
            !isWidth.maxWidth295 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: className, to: 'hot', onClick: reset },
                external_react_default().createElement(IconFire, null),
                "Hot"),
            !isWidth.maxWidth330 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: className, to: 'new', onClick: reset },
                external_react_default().createElement(IconNew, null),
                "New"),
            !isWidth.maxWidth424 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: className, to: 'top', onClick: reset },
                external_react_default().createElement(IconTop, null),
                "Top"),
            !isWidth.maxWidth471 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: className, to: 'rising', onClick: reset },
                external_react_default().createElement(IconGrowth, null),
                "Rising")), modalRoot)));
}

;// CONCATENATED MODULE: ./src/shared/Header/HeaderNavigation/MenuNav/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/HeaderNavigation/HeaderNavigation.tsx








function HeaderNavigation() {
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const refNav = (0,external_react_namespaceObject.useRef)(null);
    const reset = () => dispatch(resetPostsData());
    const [isWidth] = useAdaptiveForm(refNav);
    return (external_react_default().createElement("nav", { className: headerNavigation.nav, ref: refNav },
        isWidth.maxWidth200 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: headerNavigation.link, to: 'best', onClick: reset },
            external_react_default().createElement(IconRocket, null),
            "Best"),
        isWidth.maxWidth295 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: headerNavigation.link, to: 'hot', onClick: reset },
            external_react_default().createElement(IconFire, null),
            "Hot"),
        isWidth.maxWidth330 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: headerNavigation.link, to: 'new', onClick: reset },
            external_react_default().createElement(IconNew, null),
            "New"),
        isWidth.maxWidth424 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: headerNavigation.link, to: 'top', onClick: reset },
            external_react_default().createElement(IconTop, null),
            "Top"),
        isWidth.maxWidth471 && external_react_default().createElement(external_react_router_dom_namespaceObject.NavLink, { className: headerNavigation.link, to: 'rising', onClick: reset },
            external_react_default().createElement(IconGrowth, null),
            "Rising"),
        !isWidth.maxWidth471 && external_react_default().createElement(MenuNav, { className: headerNavigation.link, isWidth: isWidth })));
}

;// CONCATENATED MODULE: ./src/shared/Header/HeaderNavigation/index.ts


;// CONCATENATED MODULE: ./src/shared/Header/Header.tsx





function Header() {
    return (external_react_default().createElement("header", { className: header.header },
        external_react_default().createElement("div", { className: header.container },
            external_react_default().createElement(LogoLink, null),
            external_react_default().createElement(HeaderNavigation, null),
            external_react_default().createElement(SearchBlock, null))));
}

;// CONCATENATED MODULE: ./src/shared/Header/index.ts


;// CONCATENATED MODULE: ./src/shared/Content/content.css
// Exports
/* harmony default export */ const content = ({
	"content": `content__content--LaQEL`
});

;// CONCATENATED MODULE: ./src/shared/Content/Content.tsx


function Content({ children }) {
    return (external_react_default().createElement("main", { className: content.content }, children));
}

;// CONCATENATED MODULE: ./src/shared/Content/index.ts


;// CONCATENATED MODULE: external "react-hot-loader/root"
const root_namespaceObject = require("react-hot-loader/root");
;// CONCATENATED MODULE: ./src/errorBanners/error.css
// Exports
/* harmony default export */ const error = ({
	"error": `error__error--WRTXg`,
	"image": `error__image--trPA3`,
	"container": `error__container--gEtGP`,
	"wrapper": `error__wrapper--Sc3Sp`,
	"descr": `error__descr--qWvrC`,
	"message": `error__message--MqVSM`
});

;// CONCATENATED MODULE: ./src/img/errorReddit.png
/* harmony default export */ const errorReddit = (__webpack_require__.p + "static/media/errorReddit.8418331b35e5fe8568387403a0def8cb.png");
;// CONCATENATED MODULE: ./src/errorBanners/Error.tsx



function Error(massage) {
    console.log(massage);
    return (external_react_default().createElement("div", { role: "alert", className: error.error },
        external_react_default().createElement("div", { className: error.container },
            external_react_default().createElement("img", { className: error.image, src: errorReddit, alt: "Error" }),
            external_react_default().createElement("div", { className: error.wrapper },
                external_react_default().createElement("span", { className: error.descr }, "Something went wrong..."),
                external_react_default().createElement("span", { className: error.message }, massage.massage)))));
}

;// CONCATENATED MODULE: ./src/storeRedux/storeSelectors.ts

const useAppSelector = external_react_redux_namespaceObject.useSelector;
const selectUserBlock = (state) => state.userBlock;
const selectPostsBlock = (state) => state.postsBlock;
const selectPostsData = (state) => state.postsBlock.postsData;
const selectCardModalData = (state) => state.cardModal.modalData;
const selectComments = (state) => state.commentsList;
const selectPostIsOpen = (id) => (state) => {
    var _a;
    return (_a = state.postIsOpen.postsDataIsOpen
        .filter(post => post.postId === id)[0]) === null || _a === void 0 ? void 0 : _a.isImageOpen;
};
const selectCommentFormValue = (commentId) => (state) => {
    var _a, _b;
    return (_b = (_a = state.commentsForm) === null || _a === void 0 ? void 0 : _a.filter(item => item.commentId === commentId)[0]) === null || _b === void 0 ? void 0 : _b.textComment;
};
const selectFormIsOpen = (commentId) => (state) => {
    var _a;
    return (_a = state.commentsForm
        .filter((comment) => comment.commentId === commentId)[0]) === null || _a === void 0 ? void 0 : _a.formIsOpen;
};

;// CONCATENATED MODULE: ./src/utils/ts/postConverter.ts
function postConverter(data, isLast) {
    var _a, _b, _c, _d;
    return {
        postId: data.id,
        postSubreddit: data.subreddit,
        anchorName: data.author,
        postTitle: data.title,
        postUrl: data.url,
        createdTime: data.created_utc,
        numberComments: data.num_comments,
        karmaNumber: data.score,
        postHint: data.post_hint,
        postThumbnail: data.thumbnail,
        postHighQualityVideoUrl: (_b = (_a = data.secure_media) === null || _a === void 0 ? void 0 : _a.reddit_video) === null || _b === void 0 ? void 0 : _b.hls_url,
        postVideoUrl: (_d = (_c = data.secure_media) === null || _c === void 0 ? void 0 : _c.reddit_video) === null || _d === void 0 ? void 0 : _d.scrubber_media_url,
        postText: data.selftext_html,
        isLast: isLast || false,
    };
}

;// CONCATENATED MODULE: ./src/storeRedux/posts/postIsOpen.ts

const postIsOpen_initialState = {
    postsDataIsOpen: [],
};
const postIsOpen = (0,toolkit_namespaceObject.createSlice)({
    name: 'postsIsOpen',
    initialState: postIsOpen_initialState,
    reducers: {
        setImageIsOpen(state, action) {
            const filteredPost = state.postsDataIsOpen.map(post => {
                return Object.assign(Object.assign({}, post), { isImageOpen: post.postId === action.payload.postId ? action.payload.isImageOpen : post.isImageOpen });
            });
            return {
                postsDataIsOpen: filteredPost
            };
        },
        setPostsIsOpen(state, action) {
            return {
                postsDataIsOpen: state.postsDataIsOpen.concat(action.payload.postsDataIsOpen)
            };
        }
    }
});
const { setImageIsOpen, setPostsIsOpen } = postIsOpen.actions;
/* harmony default export */ const posts_postIsOpen = (postIsOpen.reducer);

;// CONCATENATED MODULE: ./src/storeRedux/posts/getPostsAsyncThunk.ts
var getPostsAsyncThunk_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




const getPostsAsyncThunk = (postType) => (dispatch, getState) => getPostsAsyncThunk_awaiter(void 0, void 0, void 0, function* () {
    const { afterList } = getState().postsBlock;
    const { type } = getState().postsBlock;
    dispatch(getPostsDataPending());
    try {
        const { data: { data: { after, children } } } = yield external_axios_default().get(`https://www.reddit.com/${postType || type}.json?sr_detail=true`, {
            params: {
                limit: 25,
                after: afterList
            }
        });
        dispatch(setPostsData({
            postType: postType,
            after: after,
            postsData: children.map(({ data }) => {
                const lastItemId = children[children.length - 1].data.id;
                const isLast = lastItemId === data.id ? true : false;
                return postConverter(data, isLast);
            })
        }));
        dispatch(setPostsIsOpen({
            postsDataIsOpen: children.map((({ data }) => {
                return {
                    postId: data.id,
                    isImageOpen: false
                };
            }))
        }));
    }
    catch (error) {
        console.log(error);
        dispatch(postsDataError(error));
    }
    ;
});

;// CONCATENATED MODULE: external "use-match-media-hook"
const external_use_match_media_hook_namespaceObject = require("use-match-media-hook");
var external_use_match_media_hook_default = /*#__PURE__*/__webpack_require__.n(external_use_match_media_hook_namespaceObject);
;// CONCATENATED MODULE: ./src/hooks/useCustomMatchMedia.ts

function useCustomMatchMedia() {
    const queries = [
        '(max-width: 1023px)',
        '(min-width: 1024px)',
    ];
    const [mobile, desktop] = external_use_match_media_hook_default()(queries);
    return {
        mobile: mobile,
        desktop: desktop
    };
}

;// CONCATENATED MODULE: ./src/context/CardListContext.tsx


const CardListContext = (0,external_react_namespaceObject.createContext)({});
function CardListContextProvider({ children }) {
    const rowHeights = (0,external_react_namespaceObject.useRef)({});
    const refCardList = (0,external_react_namespaceObject.useRef)({});
    return (external_react_default().createElement(CardListContext.Provider, { value: { rowHeights, refCardList } }, children));
}

;// CONCATENATED MODULE: external "react-window"
const external_react_window_namespaceObject = require("react-window");
;// CONCATENATED MODULE: external "react-virtualized-auto-sizer"
const external_react_virtualized_auto_sizer_namespaceObject = require("react-virtualized-auto-sizer");
var external_react_virtualized_auto_sizer_default = /*#__PURE__*/__webpack_require__.n(external_react_virtualized_auto_sizer_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/CardsList/BackToTopButton/backToTopButton.css
// Exports
/* harmony default export */ const backToTopButton = ({
	"button": `backToTopButton__button--M9Nxj`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/BackToTopButton/BackToTopButton.tsx


const BackToTopButton = (0,external_react_namespaceObject.forwardRef)(({ onClick, className }, ref) => {
    return (external_react_default().createElement("button", { onClick: onClick, className: `${backToTopButton.button}${className ? ' ' + className : ''}`, ref: ref }, "Back to Top"));
});

;// CONCATENATED MODULE: ./src/shared/CardsList/BackToTopButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/card.css
// Exports
/* harmony default export */ const card = ({
	"card": `card__card--dPIIn`,
	"body": `card__body--pxbkc`,
	"wrapper": `card__wrapper--ARy1A`,
	"content": `card__content--mZCME`,
	"preview": `card__preview--_29Vb`,
	"previewIsOpen": `card__previewIsOpen--K849r`
});

;// CONCATENATED MODULE: ./src/Loader/RedditLoader/redditLoader.css
// Exports
/* harmony default export */ const redditLoader = ({
	"loader": `redditLoader__loader--scaRs`,
	"scaleout": `redditLoader__scaleout--ZR9lw`
});

;// CONCATENATED MODULE: ./src/Loader/RedditLoader/RedditLoader.tsx


function RedditLoader({ className }) {
    return (external_react_default().createElement("div", { className: `${redditLoader.loader}${className ? ' ' + className : ''}` },
        external_react_default().createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 216 216", xmlnsXlink: "http://www.w3.org/1999/xlink", xmlSpace: "preserve" },
            external_react_default().createElement("defs", null,
                external_react_default().createElement("linearGradient", { id: "orangeredGradient", gradientTransform: "rotate(90)" },
                    external_react_default().createElement("stop", { offset: "0%", stopColor: "#FE7B0E" }),
                    external_react_default().createElement("stop", { offset: "100%", stopColor: "#EF0A22" }))),
            external_react_default().createElement("defs", null,
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient", cx: "169.75", cy: "92.19", fx: "169.75", fy: "92.19", r: "50.98", gradientTransform: "translate(0 11.64) scale(1 .87)", gradientUnits: "userSpaceOnUse" },
                    external_react_default().createElement("stop", { offset: "0", stopColor: "#feffff" }),
                    external_react_default().createElement("stop", { offset: ".4", stopColor: "#feffff" }),
                    external_react_default().createElement("stop", { offset: ".51", stopColor: "#f9fcfc" }),
                    external_react_default().createElement("stop", { offset: ".62", stopColor: "#edf3f5" }),
                    external_react_default().createElement("stop", { offset: ".7", stopColor: "#dee9ec" }),
                    external_react_default().createElement("stop", { offset: ".72", stopColor: "#d8e4e8" }),
                    external_react_default().createElement("stop", { offset: ".76", stopColor: "#ccd8df" }),
                    external_react_default().createElement("stop", { offset: ".8", stopColor: "#c8d5dd" }),
                    external_react_default().createElement("stop", { offset: ".83", stopColor: "#ccd6de" }),
                    external_react_default().createElement("stop", { offset: ".85", stopColor: "#d8dbe2" }),
                    external_react_default().createElement("stop", { offset: ".88", stopColor: "#ede3e9" }),
                    external_react_default().createElement("stop", { offset: ".9", stopColor: "#ffebef" })),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-2", cx: "47.31", fx: "47.31", r: "50.98", xlinkHref: "#snoo-radial-gragient" }),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-3", cx: "109.61", cy: "85.59", fx: "109.61", fy: "85.59", r: "153.78", gradientTransform: "translate(0 25.56) scale(1 .7)", xlinkHref: "#snoo-radial-gragient" }),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-4", cx: "-6.01", cy: "64.68", fx: "-6.01", fy: "64.68", r: "12.85", gradientTransform: "translate(81.08 27.26) scale(1.07 1.55)", gradientUnits: "userSpaceOnUse" },
                    external_react_default().createElement("stop", { offset: "0", stopColor: "#f60" }),
                    external_react_default().createElement("stop", { offset: ".5", stopColor: "#ff4500" }),
                    external_react_default().createElement("stop", { offset: ".7", stopColor: "#fc4301" }),
                    external_react_default().createElement("stop", { offset: ".82", stopColor: "#f43f07" }),
                    external_react_default().createElement("stop", { offset: ".92", stopColor: "#e53812" }),
                    external_react_default().createElement("stop", { offset: "1", stopColor: "#d4301f" })),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-5", cx: "-73.55", cy: "64.68", fx: "-73.55", fy: "64.68", r: "12.85", gradientTransform: "translate(62.87 27.26) rotate(-180) scale(1.07 -1.55)", xlinkHref: "#snoo-radial-gragient-4" }),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-6", cx: "107.93", cy: "166.96", fx: "107.93", fy: "166.96", r: "45.3", gradientTransform: "translate(0 57.4) scale(1 .66)", gradientUnits: "userSpaceOnUse" },
                    external_react_default().createElement("stop", { offset: "0", stopColor: "#172e35" }),
                    external_react_default().createElement("stop", { offset: ".29", stopColor: "#0e1c21" }),
                    external_react_default().createElement("stop", { offset: ".73", stopColor: "#030708" }),
                    external_react_default().createElement("stop", { offset: "1", stopColor: "#000" })),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-7", cx: "147.88", cy: "32.94", fx: "147.88", fy: "32.94", r: "39.77", gradientTransform: "translate(0 .54) scale(1 .98)", xlinkHref: "#snoo-radial-gragient" }),
                external_react_default().createElement("radialGradient", { id: "snoo-radial-gragient-8", cx: "131.31", cy: "73.08", fx: "131.31", fy: "73.08", r: "32.6", gradientUnits: "userSpaceOnUse" },
                    external_react_default().createElement("stop", { offset: ".48", stopColor: "#7a9299" }),
                    external_react_default().createElement("stop", { offset: ".67", stopColor: "#172e35" }),
                    external_react_default().createElement("stop", { offset: ".75", stopColor: "#000" }),
                    external_react_default().createElement("stop", { offset: ".82", stopColor: "#172e35" }))),
            external_react_default().createElement("path", { fill: "#ff4500", d: "m108,0h0C48.35,0,0,48.35,0,108h0c0,29.82,12.09,56.82,31.63,76.37l-20.57,20.57c-4.08,4.08-1.19,11.06,4.58,11.06h92.36s0,0,0,0c59.65,0,108-48.35,108-108h0C216,48.35,167.65,0,108,0Z" }),
            external_react_default().createElement("circle", { fill: "url(#snoo-radial-gragient)", cx: "169.22", cy: "106.98", r: "25.22" }),
            external_react_default().createElement("circle", { fill: "url(#snoo-radial-gragient-2)", cx: "46.78", cy: "106.98", r: "25.22" }),
            external_react_default().createElement("ellipse", { fill: "url(#snoo-radial-gragient-3)", cx: "108.06", cy: "128.64", rx: "72", ry: "54" }),
            external_react_default().createElement("path", { fill: "url(#snoo-radial-gragient-4)", d: "m86.78,123.48c-.42,9.08-6.49,12.38-13.56,12.38s-12.46-4.93-12.04-14.01c.42-9.08,6.49-15.02,13.56-15.02s12.46,7.58,12.04,16.66Z" }),
            external_react_default().createElement("path", { fill: "url(#snoo-radial-gragient-5)", d: "m129.35,123.48c.42,9.08,6.49,12.38,13.56,12.38s12.46-4.93,12.04-14.01c-.42-9.08-6.49-15.02-13.56-15.02s-12.46,7.58-12.04,16.66Z" }),
            external_react_default().createElement("ellipse", { fill: "#ffc49c", cx: "79.63", cy: "116.37", rx: "2.8", ry: "3.05" }),
            external_react_default().createElement("ellipse", { fill: "#ffc49c", cx: "146.21", cy: "116.37", rx: "2.8", ry: "3.05" }),
            external_react_default().createElement("path", { fill: "url(#snoo-radial-gragient-6)", d: "m108.06,142.92c-8.76,0-17.16.43-24.92,1.22-1.33.13-2.17,1.51-1.65,2.74,4.35,10.39,14.61,17.69,26.57,17.69s22.23-7.3,26.57-17.69c.52-1.23-.33-2.61-1.65-2.74-7.77-.79-16.16-1.22-24.92-1.22Z" }),
            external_react_default().createElement("circle", { fill: "url(#snoo-radial-gragient-7)", cx: "147.49", cy: "49.43", r: "17.87" }),
            external_react_default().createElement("path", { fill: "url(#snoo-radial-gragient-8)", d: "m107.8,76.92c-2.14,0-3.87-.89-3.87-2.27,0-16.01,13.03-29.04,29.04-29.04,2.14,0,3.87,1.73,3.87,3.87s-1.73,3.87-3.87,3.87c-11.74,0-21.29,9.55-21.29,21.29,0,1.38-1.73,2.27-3.87,2.27Z" }),
            external_react_default().createElement("path", { fill: "#842123", d: "m62.82,122.65c.39-8.56,6.08-14.16,12.69-14.16,6.26,0,11.1,6.39,11.28,14.33.17-8.88-5.13-15.99-12.05-15.99s-13.14,6.05-13.56,15.2c-.42,9.15,4.97,13.83,12.04,13.83.17,0,.35,0,.52,0-6.44-.16-11.3-4.79-10.91-13.2Z" }),
            external_react_default().createElement("path", { fill: "#842123", d: "m153.3,122.65c-.39-8.56-6.08-14.16-12.69-14.16-6.26,0-11.1,6.39-11.28,14.33-.17-8.88,5.13-15.99,12.05-15.99,7.07,0,13.14,6.05,13.56,15.2.42,9.15-4.97,13.83-12.04,13.83-.17,0-.35,0-.52,0,6.44-.16,11.3-4.79,10.91-13.2Z" }))));
}

;// CONCATENATED MODULE: ./src/Loader/RedditLoader/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/LoadMoreButton/loadMoreButton.css
// Exports
/* harmony default export */ const loadMoreButton = ({
	"button": `loadMoreButton__button--eOMjA`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/LoadMoreButton/LoadMoreButton.tsx




function LoadMoreButton() {
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    return (external_react_default().createElement("button", { className: loadMoreButton.button, onClick: () => dispatch(getPostsAsyncThunk()) }, "Load more"));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/LoadMoreButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardLoader/cardLoader.css
// Exports
/* harmony default export */ const cardLoader = ({
	"loader": `cardLoader__loader--yvTyz`,
	"observer": `cardLoader__observer--FpWU6`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardLoader/CardLoader.tsx




const CardLoader = (0,external_react_namespaceObject.forwardRef)(({ loading, count }, ref) => {
    return (loading
        ? external_react_default().createElement(RedditLoader, { className: cardLoader.loader })
        : count === 2
            ? external_react_default().createElement(LoadMoreButton, null)
            : external_react_default().createElement("div", { className: cardLoader.observer, ref: ref, datatype: 'observer' }));
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardLoader/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/MenuButton/menuButton.css
// Exports
/* harmony default export */ const menuButton = ({
	"button": `menuButton__button--TZTx3`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/MenuDropdown/menuDropdown.css
// Exports
/* harmony default export */ const menuDropdown = ({
	"dropdownList": `menuDropdown__dropdownList--p1z7L`,
	"dropdownItem": `menuDropdown__dropdownItem--CQ731`
});

;// CONCATENATED MODULE: ./src/context/CardContext.ts

const cardContext = (0,external_react_namespaceObject.createContext)({
    postId: '',
    anchorName: '',
    postSubreddit: '',
    karmaNumber: 0,
    postTitle: '',
    postUrl: '',
    createdTime: 0,
    numberComments: 0,
    isLast: false,
});

;// CONCATENATED MODULE: ./src/utils/react/GenericList.tsx




const noop = () => { };
function GenericList({ list, As = 'li', className, size, mobileSize, tabletSize, desktopSize, color = EColor.black }) {
    const classes = external_classnames_default()(css_text[`s${size}`], css_text[color], { [css_text[`m${mobileSize}`]]: mobileSize }, { [css_text[`t${tabletSize}`]]: tabletSize }, { [css_text[`d${desktopSize}`]]: desktopSize });
    return (external_react_default().createElement((external_react_default()).Fragment, null, list.map(({ id, item, href, text, disabled, onClose = noop }) => (external_react_default().createElement(As, { disabled: disabled, type: As === 'button' ? 'button' : undefined, className: `${classes}${className ? ' ' + className : ''}`, onClick: () => onClose(id), key: id, href: href },
        item,
        text)))));
}

;// CONCATENATED MODULE: ./src/utils/ts/assoc.ts
function assoc(key, value) {
    return (obj) => (Object.assign(Object.assign({}, obj), { [key]: value }));
}

;// CONCATENATED MODULE: ./src/utils/ts/generateRandomIndex.ts

const generateRandomString = () => Math.random().toString(36).substring(2, 15);
const assignId = assoc('id', generateRandomString());
const generateId = (obj) => assoc('id', generateRandomString())(obj);

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/MenuDropdown/MenuDropdown.tsx









function MenuDropdown({ onClose }) {
    const { postSubreddit, postId } = (0,external_react_namespaceObject.useContext)(cardContext);
    const $MenuList = [
        {
            item: external_react_default().createElement(external_react_router_dom_namespaceObject.Link, { to: `${postSubreddit}/comments/${postId}` },
                external_react_default().createElement(IconComments, null),
                "Comments"),
            onClose: () => {
                onClose();
            }
        },
        {
            text: 'Share',
            item: external_react_default().createElement(IconShare, null),
            onClose: onClose
        },
        {
            text: 'Hide',
            item: external_react_default().createElement(IconHide, null),
            onClose: onClose
        },
        {
            text: 'Save',
            item: external_react_default().createElement(IconSave, null),
            onClose: onClose
        },
        {
            text: 'Report',
            item: external_react_default().createElement(IconReport, null),
            onClose: onClose
        }
    ].map(generateId);
    const refDropdown = (0,external_react_namespaceObject.useRef)(null);
    useModalCloser({ onClose, ref: refDropdown });
    return (external_react_default().createElement("ul", { ref: refDropdown, className: menuDropdown.dropdownList },
        external_react_default().createElement(GenericList, { As: 'li', className: menuDropdown.dropdownItem, list: $MenuList, size: 14, mobileSize: 12, color: EColor.gray99 })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/MenuDropdown/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/MenuButton/MenuButton.tsx




function MenuButton() {
    const [isDropdownOpen, setIsDropdownOpen] = (0,external_react_namespaceObject.useState)(false);
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement("button", { className: menuButton.button, onClick: () => setIsDropdownOpen(true) },
            external_react_default().createElement(IconMenu, null)),
        isDropdownOpen &&
            external_react_default().createElement(MenuDropdown, { onClose: () => setIsDropdownOpen(false) })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/MenuButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/Actions/actions.css
// Exports
/* harmony default export */ const actions = ({
	"actions": `actions__actions--KnUqL`,
	"shareButton": `actions__shareButton--djAuh`,
	"saveButton": `actions__saveButton--WIfyW`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/Actions/Actions.tsx



function Actions() {
    return (external_react_default().createElement("div", { className: actions.actions },
        external_react_default().createElement("button", { className: actions.sharebutton },
            external_react_default().createElement(IconShareMobile, null)),
        external_react_default().createElement("button", { className: actions.saveButton },
            external_react_default().createElement(IconSaveMobile, null))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/Actions/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/cardcontrols.css
// Exports
/* harmony default export */ const cardcontrols = ({
	"controls": `cardcontrols__controls--IWv1k`,
	"karmaCounter": `cardcontrols__karmaCounter--f7N1D`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/KarmaCounter/karmacounter.css
// Exports
/* harmony default export */ const karmacounter = ({
	"karmaCounter": `karmacounter__karmaCounter--IeWHC`,
	"karmaValue": `karmacounter__karmaValue--ZOrCx`,
	"up": `karmacounter__up--n4768`,
	"down": `karmacounter__down--cjjf9`
});

;// CONCATENATED MODULE: ./src/utils/ts/shortFormatNumber.ts
function shortFormatNumber(value) {
    if (!value)
        return;
    let fractionDigits = 1;
    if (value > 100000)
        fractionDigits = 0;
    return new Intl.NumberFormat('en-GB', {
        notation: "compact",
        maximumFractionDigits: fractionDigits
    }).format(value).replace('K', 'k');
}
;

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/KarmaCounter/KarmaCounter.tsx




function KarmaCounter({ className, carmaNumber, authorName }) {
    return (external_react_default().createElement("div", { className: `${className ? className + ' ' : ''}${karmacounter.karmaCounter}` },
        external_react_default().createElement("button", { className: karmacounter.up },
            external_react_default().createElement(IconTriangle, null)),
        external_react_default().createElement("span", { className: karmacounter.karmaValue }, typeof carmaNumber === 'number'
            ? authorName === 'AutoModerator'
                ? 'Vote'
                : shortFormatNumber(carmaNumber)
            : carmaNumber.includes('=')
                ? 0
                : carmaNumber),
        external_react_default().createElement("button", { className: karmacounter.down },
            external_react_default().createElement(IconTriangle, null))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/KarmaCounter/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/CommentsButton/commentsbutton.css
// Exports
/* harmony default export */ const commentsbutton = ({
	"commentsNumber": `commentsbutton__commentsNumber--t_3ut`,
	"commentsButton": `commentsbutton__commentsButton--jH6In`,
	"commentsDescr": `commentsbutton__commentsDescr--fDASc`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/CommentsButton/CommentsButton.tsx







function CommentsButton({ className }) {
    const { desktop } = useCustomMatchMedia();
    const { postId, postSubreddit } = (0,external_react_namespaceObject.useContext)(cardContext);
    function numberComments() {
        const { numberComments } = (0,external_react_namespaceObject.useContext)(cardContext);
        return shortFormatNumber(numberComments);
    }
    return (external_react_default().createElement(external_react_router_dom_namespaceObject.Link, { to: `${postSubreddit}/comments/${postId}`, className: `${className ? className + ' ' : ''}${commentsbutton.commentsButton}` },
        external_react_default().createElement(IconComments, null),
        external_react_default().createElement("span", { className: commentsbutton.commentsNumber }, numberComments()),
        desktop &&
            external_react_default().createElement("span", { className: commentsbutton.commentsDescr }, "Comments")));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/CommentsButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/CardControls.tsx







function CardControls() {
    const { karmaNumber } = (0,external_react_namespaceObject.useContext)(cardContext);
    const { mobile } = useCustomMatchMedia();
    return (external_react_default().createElement("div", { className: cardcontrols.controls },
        external_react_default().createElement(KarmaCounter, { className: cardcontrols.karmaCounter, carmaNumber: karmaNumber }),
        mobile &&
            external_react_default().createElement((external_react_default()).Fragment, null,
                external_react_default().createElement(CommentsButton, { className: cardcontrols.commentsButton }),
                external_react_default().createElement(Actions, null))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardControls/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/UserLink/userlink.css
// Exports
/* harmony default export */ const userlink = ({
	"userLink": `userlink__userLink--VFnpy`,
	"snoovatar": `userlink__snoovatar--IspXr`,
	"avatar": `userlink__avatar--VWB8P`,
	"username": `userlink__username--r71BZ`,
	"removed": `userlink__removed--nCvWu`
});

;// CONCATENATED MODULE: ./src/hooks/useUserAvatar.ts
var useUserAvatar_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let count = 0;
function useUserAvatar(userName) {
    const [snoovatar, setSnoovatarData] = (0,external_react_namespaceObject.useState)();
    (0,external_react_namespaceObject.useEffect)(() => {
        if (!userName || userName === '[deleted]' || userName.includes(' '))
            return;
        let isUnmount = false;
        let timer = setTimeout(() => useUserAvatar_awaiter(this, void 0, void 0, function* () {
            try {
                const { data: { data: { snoovatar_img } } } = yield external_axios_default().get(`https://www.reddit.com/user/${userName}/about.json`);
                if (!isUnmount) {
                    setSnoovatarData(snoovatar_img);
                }
            }
            catch (error) {
                console.log(error);
            }
        }), count++ * 200);
        return () => {
            clearTimeout(timer);
            isUnmount = true;
            count = 0;
        };
    }, []);
    return [snoovatar];
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/UserLink/UserLink.tsx




function UserLink({ anchorName, className, styleAvatar }) {
    const [snoovatar] = useUserAvatar(anchorName);
    const [error, setError] = (0,external_react_namespaceObject.useState)(false);
    const onError = () => setError(true);
    return (external_react_default().createElement("div", { className: `${userlink.userLink}${className ? ' ' + className : ''}` },
        snoovatar && !error
            ? external_react_default().createElement("img", { className: userlink.snoovatar, src: snoovatar, onError: onError, alt: "avatar" })
            : external_react_default().createElement(IconRedditDefault, { className: `${userlink.avatar}${styleAvatar ? ' ' + styleAvatar : ''}` }),
        external_react_default().createElement("a", { target: '_blank', href: `https://www.reddit.com/user/${anchorName}/`, className: userlink.username }, anchorName !== '[deleted]' &&
            anchorName !== ';div class=' &&
            anchorName),
        (anchorName === '[deleted]' || anchorName === ';div class=') &&
            external_react_default().createElement("span", { className: userlink.removed }, "Comment removed by moderator")));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/UserLink/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/CreatedAd/createdad.css
// Exports
/* harmony default export */ const createdad = ({
	"createdAd": `createdad__createdAd--o5FW7`
});

;// CONCATENATED MODULE: ./src/utils/ts/getRelativeTimeString.ts
function getRelativeTimeString(date, lang = 'en-US') {
    if (!date)
        return;
    const timeSec = typeof date === 'number' ? date : date.getTime();
    const deltaSeconds = Math.round(timeSec - (Date.now() / 1000));
    const cutoffs = [60, 3600, 86400, 86400 * 7, 86400 * 30, 86400 * 365, Infinity];
    const units = ['second', 'minute', 'hour',
        'day', 'week', 'month', 'year'];
    const unitIndex = cutoffs.findIndex(cutoff => cutoff > Math.abs(deltaSeconds));
    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1;
    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto', style: 'short' });
    return rtf.format(Math.floor(deltaSeconds / divisor), units[unitIndex]);
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/CreatedAd/CreatedAd.tsx




function CreatedAd({ createdTime, className, noLabel }) {
    const { desktop } = useCustomMatchMedia();
    return (external_react_default().createElement("span", { className: `${createdad.createdAd}${className ? ' ' + className : ''}` },
        desktop &&
            external_react_default().createElement("span", { className: createdad.publishedLabel }, noLabel ? '· ' : 'Posted · '),
        typeof createdTime === 'number'
            ? getRelativeTimeString(createdTime)
            : createdTime));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/CreatedAd/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/cardtextcontent.css
// Exports
/* harmony default export */ const cardtextcontent = ({
	"textContent": `cardtextcontent__textContent--VJhep`,
	"metaData": `cardtextcontent__metaData--q4W5a`,
	"commentsButton": `cardtextcontent__commentsButton--LgYCo`,
	"userLink": `cardtextcontent__userLink--YnMMa`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/cardtitlepostlink.css
// Exports
/* harmony default export */ const cardtitlepostlink = ({
	"title": `cardtitlepostlink__title--iv0rp`,
	"link": `cardtitlepostlink__link--cXfY8`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/CardTitlePostLink.tsx

const { convert } = __webpack_require__(816);

function CardTitlePostLink({ postTitle, postUrl }) {
    return (external_react_default().createElement("h2", { className: cardtitlepostlink.title },
        external_react_default().createElement("a", { className: cardtitlepostlink.link, target: "_blank", href: postUrl }, convert(postTitle))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/CardTitlePostLink/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/CardTextContent.tsx








function CardTextContent() {
    const { postTitle, postUrl, createdTime, anchorName, } = (0,external_react_namespaceObject.useContext)(cardContext);
    const { desktop } = useCustomMatchMedia();
    return (external_react_default().createElement("div", { className: cardtextcontent.textContent },
        external_react_default().createElement("div", { className: cardtextcontent.metaData },
            external_react_default().createElement(UserLink, { anchorName: anchorName }),
            external_react_default().createElement(CreatedAd, { createdTime: createdTime })),
        external_react_default().createElement(CardTitlePostLink, { postTitle: postTitle, postUrl: postUrl }),
        desktop && external_react_default().createElement(CommentsButton, { className: cardtextcontent.commentsButton })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardTextContent/index.ts


;// CONCATENATED MODULE: ./src/img/redditMessageImage.png
/* harmony default export */ const redditMessageImage = (__webpack_require__.p + "static/media/redditMessageImage.29da1ab6706323c0e974326cd4b45438.png");
;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardVisual/RedditMessageImage/RedditMessageImage.tsx


function RedditMessageImage({ postUrl, className }) {
    return (external_react_default().createElement("a", { href: postUrl, target: '_blank' },
        external_react_default().createElement("img", { className: className, src: redditMessageImage, alt: "Massage image" })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardVisual/RedditMessageImage/index.ts


;// CONCATENATED MODULE: ./src/img/redditLinkImage.png
/* harmony default export */ const redditLinkImage = (__webpack_require__.p + "static/media/redditLinkImage.f30c46c24ca9542d5d8c215a042ecb8c.png");
;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardVisual/RedditLinkImage/RedditLinkImage.tsx


function RedditLinkImage({ postUrl, className }) {
    return (external_react_default().createElement("a", { href: postUrl, target: '_blank' },
        external_react_default().createElement("img", { className: className, src: redditLinkImage, alt: "Massage image" })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardVisual/RedditLinkImage/index.ts


;// CONCATENATED MODULE: external "react-player"
const external_react_player_namespaceObject = require("react-player");
var external_react_player_default = /*#__PURE__*/__webpack_require__.n(external_react_player_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardVisual/cardVisual.css
// Exports
/* harmony default export */ const cardVisual = ({
	"preview": `cardVisual__preview--dZjlu`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardVisual/CardVisual.tsx





function CardVisual({ className, light, props, onClick, onLoading, videoDisabled, videoHeight }) {
    const { postThumbnail, postVideoUrl, postUrl, postHighQualityVideoUrl, postHint } = props;
    const [error, setError] = (0,external_react_namespaceObject.useState)(false);
    const noop = () => { };
    const onError = () => setError(true);
    (0,external_react_namespaceObject.useEffect)(() => {
        onLoading === null || onLoading === void 0 ? void 0 : onLoading();
    }, []);
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement("div", { className: className, onClick: error ? noop : onClick }, !postVideoUrl
            ?
                (error
                    ?
                        postHint === 'image' ||
                            postHint === undefined
                            ? external_react_default().createElement(RedditMessageImage, { className: cardVisual.preview, postUrl: postUrl })
                            : external_react_default().createElement(RedditLinkImage, { className: cardVisual.preview, postUrl: postUrl })
                    :
                        external_react_default().createElement("img", { className: cardVisual.preview, src: postHint === 'image'
                                ?
                                    postUrl
                                :
                                    postThumbnail, onError: onError }))
            :
                external_react_default().createElement((external_react_player_default()), { style: videoDisabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }, controls: true, width: '', height: videoHeight || '100%', url: postHighQualityVideoUrl, light: light &&
                        external_react_default().createElement("video", { preload: 'metadata', className: cardVisual.preview, src: postVideoUrl }) }))));
}

;// CONCATENATED MODULE: ./src/hooks/usePostsData.ts



function useScrollPostsData() {
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const refEndingOfList = (0,external_react_namespaceObject.useRef)(null);
    (0,external_react_namespaceObject.useEffect)(() => {
        const observer = new IntersectionObserver((enrties) => {
            if (enrties[0].isIntersecting) {
                dispatch(getPostsAsyncThunk());
            }
        }, { rootMargin: '100px' });
        if (refEndingOfList.current) {
            observer.observe(refEndingOfList.current);
        }
        return () => {
            if (refEndingOfList.current) {
                observer.unobserve(refEndingOfList.current);
            }
        };
    }, [refEndingOfList.current]);
    return [refEndingOfList];
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/Card.tsx













const Card = (0,external_react_namespaceObject.memo)((0,external_react_namespaceObject.forwardRef)(({ cardItemData, style, onLoading }, ref) => {
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const isImageOpen = useAppSelector(selectPostIsOpen(cardItemData.postId));
    const { loading, count } = useAppSelector(selectPostsBlock);
    const { desktop } = useCustomMatchMedia();
    const [refEndingOfList] = useScrollPostsData();
    function handleClick() {
        dispatch(setImageIsOpen({ isImageOpen: !isImageOpen, postId: cardItemData.postId }));
    }
    (0,external_react_namespaceObject.useEffect)(() => {
        if (!isImageOpen) {
            onLoading();
        }
    }, [isImageOpen]);
    return (external_react_default().createElement(cardContext.Provider, { value: cardItemData },
        external_react_default().createElement("li", { className: card.card, style: style }, cardItemData.isLast
            ?
                external_react_default().createElement(CardLoader, { ref: refEndingOfList, loading: loading, count: count })
            :
                external_react_default().createElement("article", { className: card.body, ref: ref, onLoad: onLoading },
                    external_react_default().createElement("div", { className: card.wrapper },
                        external_react_default().createElement("div", { className: card.content },
                            external_react_default().createElement(CardVisual, { className: card.preview, props: cardItemData, light: true, videoDisabled: true, onClick: handleClick }),
                            external_react_default().createElement(CardTextContent, null),
                            external_react_default().createElement(MenuButton, null)),
                        isImageOpen &&
                            external_react_default().createElement(CardVisual, { className: card.previewIsOpen, props: cardItemData, onLoading: onLoading, videoHeight: desktop ? '550px' : '70vh' })),
                    external_react_default().createElement(CardControls, null)))));
}));

;// CONCATENATED MODULE: ./src/shared/CardsList/CardRow/CardRow.tsx




function CardRow({ index, style }) {
    const { rowHeights, refCardList } = (0,external_react_namespaceObject.useContext)(CardListContext);
    const refCardItem = (0,external_react_namespaceObject.useRef)(null);
    const postsData = useAppSelector(selectPostsData);
    function getHeightAfterOnLoading() {
        if (refCardItem.current) {
            refCardList.current.resetAfterIndex(0);
            rowHeights.current = Object.assign(Object.assign({}, rowHeights.current), { [index]: refCardItem.current.clientHeight });
        }
    }
    return (external_react_default().createElement(Card, { onLoading: getHeightAfterOnLoading, cardItemData: postsData[index], ref: refCardItem, style: style }));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/CardRow/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/CardList.tsx











const CardList = () => {
    const { rowHeights, refCardList } = (0,external_react_namespaceObject.useContext)(CardListContext);
    const postsData = useAppSelector(selectPostsData);
    const { desktop } = useCustomMatchMedia();
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const { post } = (0,external_react_router_dom_namespaceObject.useParams)();
    (0,external_react_namespaceObject.useEffect)(() => {
        dispatch(getPostsAsyncThunk(post));
    }, [post]);
    const scrollToTop = () => (refCardList === null || refCardList === void 0 ? void 0 : refCardList.current) && refCardList.current.scrollToItem(0);
    function getRowHeight(index) {
        return (rowHeights === null || rowHeights === void 0 ? void 0 : rowHeights.current[index]) + (desktop ? index === 0 ? 35 : 15 : 0) || 155;
    }
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement(external_react_router_dom_namespaceObject.Outlet, null),
        external_react_default().createElement((external_react_virtualized_auto_sizer_default()), null, ({ height, width }) => (external_react_default().createElement((external_react_default()).Fragment, null,
            external_react_default().createElement(external_react_window_namespaceObject.VariableSizeList, { itemCount: postsData.length, itemSize: getRowHeight, innerElementType: "ul", ref: refCardList, height: height, width: width }, CardRow),
            desktop && external_react_default().createElement(BackToTopButton, { onClick: scrollToTop }))))));
};

;// CONCATENATED MODULE: ./src/shared/CardsList/index.ts


;// CONCATENATED MODULE: external "dompurify"
const external_dompurify_namespaceObject = require("dompurify");
var external_dompurify_default = /*#__PURE__*/__webpack_require__.n(external_dompurify_namespaceObject);
;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/cardmodal.css
// Exports
/* harmony default export */ const cardmodal = ({
	"modal": `cardmodal__modal--_aIAj`,
	"slidein": `cardmodal__slidein--KjT0W`,
	"container": `cardmodal__container--kROWd`,
	"loader": `cardmodal__loader--LFCdA`,
	"buttonBackToTop": `cardmodal__buttonBackToTop--GCtUg`,
	"buttonCloserX": `cardmodal__buttonCloserX--uM7LU`,
	"header": `cardmodal__header--HvEDM`,
	"popupMediaUser": `cardmodal__popupMediaUser--mANxE`,
	"karmaCounter": `cardmodal__karmaCounter--NEENl`,
	"preview": `cardmodal__preview--cVARZ`,
	"textContent": `cardmodal__textContent--CbJ62`,
	"footer": `cardmodal__footer--aOopQ`,
	"commentsBlock": `cardmodal__commentsBlock--sWbJp`,
	"popupHeaderWrapper": `cardmodal__popupHeaderWrapper--qj_I3`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardVisual/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalSortBlock/modalSortBlock.css
// Exports
/* harmony default export */ const modalSortBlock = ({
	"sortblock": `modalSortBlock__sortblock--Mb7DF`,
	"button": `modalSortBlock__button--Xz9S3`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalSortBlock/ModalSortBlock.tsx




function ModalSortBlock() {
    return (external_react_default().createElement("div", { className: modalSortBlock.sortblock },
        external_react_default().createElement(Text, { size: 14, mobileSize: 12, color: EColor.blew }, 'Sort by: '),
        external_react_default().createElement("button", { className: modalSortBlock.button },
            'Best ',
            external_react_default().createElement(IconArrow, null))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalSortBlock/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalControlPanel/modalControlPanel.css
// Exports
/* harmony default export */ const modalControlPanel = ({
	"panel": `modalControlPanel__panel--EazPe`,
	"item": `modalControlPanel__item--tt0JH`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalControlPanel/ModalControlPanel.tsx







function ModalControlPanel({ props }) {
    const $ControlPanelList = [
        {
            text: `${shortFormatNumber(props) || ''} Comments`,
            item: external_react_default().createElement(IconComments, null),
            disabled: true
        },
        {
            text: 'Share',
            item: external_react_default().createElement(IconShare, null),
        },
        {
            text: 'Hide',
            item: external_react_default().createElement(IconHide, null),
        },
        {
            text: 'Save',
            item: external_react_default().createElement(IconSave, null),
        },
        {
            text: 'Report',
            item: external_react_default().createElement(IconReport, null),
        }
    ].map(generateId);
    return (external_react_default().createElement("div", { className: modalControlPanel.panel },
        external_react_default().createElement(GenericList, { list: $ControlPanelList, As: 'button', className: modalControlPanel.item, size: 14, mobileSize: 12, color: EColor.grayC4 })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalControlPanel/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/modalCommentsForm.css
// Exports
/* harmony default export */ const modalCommentsForm = ({
	"form": `modalCommentsForm__form--IQmmh`,
	"formOpen": `modalCommentsForm__formOpen--bywC5`,
	"textarea": `modalCommentsForm__textarea--Lj9Eu`,
	"label": `modalCommentsForm__label--l9onr`,
	"buttonsWrapper": `modalCommentsForm__buttonsWrapper--ErgAy`,
	"item": `modalCommentsForm__item--fvMcV`,
	"submitButton": `modalCommentsForm__submitButton--KXHzQ`,
	"cancelBtn": `modalCommentsForm__cancelBtn--jTjZl`,
	"btnSizeMobile": `modalCommentsForm__btnSizeMobile--HYQgh`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/menuFormBtnsDropdown.css
// Exports
/* harmony default export */ const menuFormBtnsDropdown = ({
	"list": `menuFormBtnsDropdown__list--g3meG`,
	"flash": `menuFormBtnsDropdown__flash--Zep0j`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/MenuFormBtnsDropdown.tsx







function MenuFormBtnsDropdown({ className, onClose, props, style }) {
    const $FormBtnsDropdown = [
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth800) && external_react_default().createElement(IconPicture, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth753) && external_react_default().createElement(IconFile, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth706) && external_react_default().createElement(IconDownload, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth659) && external_react_default().createElement(IconUser, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth612) && external_react_default().createElement(IconReverse, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth565) && external_react_default().createElement(IconShareForm, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth518) && external_react_default().createElement(IconRecord, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth471) && external_react_default().createElement(IconMessage, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth424) && external_react_default().createElement(IconPencil, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth377) && external_react_default().createElement(IconWord, null) },
        { item: !(props === null || props === void 0 ? void 0 : props.maxWidth330) && external_react_default().createElement(IconPdf, null) },
    ].filter(item => item.item).map(generateId);
    useModalCloser({ onClose });
    useResizeCloser(onClose);
    return (external_react_default().createElement("ul", { className: menuFormBtnsDropdown.list, style: style },
        external_react_default().createElement(GenericList, { As: 'button', className: className, list: $FormBtnsDropdown })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormBtnsDropdown/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/MenuFormButtonControls.tsx





const MenuFormButtonControls = (0,external_react_namespaceObject.forwardRef)(({ className, props, rootId }, ref) => {
    const buttonsRoot = document.getElementById(rootId);
    if (!buttonsRoot)
        return null;
    const [isBtnsDropdownOpen, setBtnDropdownOpen] = (0,external_react_namespaceObject.useState)(false);
    const [coords] = useCoords(ref, isBtnsDropdownOpen);
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement("button", { className: className, onClick: () => setBtnDropdownOpen(true) },
            external_react_default().createElement(IconMenu, null)),
        isBtnsDropdownOpen &&
            (0,external_react_dom_namespaceObject.createPortal)(external_react_default().createElement(MenuFormBtnsDropdown, { style: {
                    left: (coords === null || coords === void 0 ? void 0 : coords.left) + 'px',
                    top: (coords === null || coords === void 0 ? void 0 : coords.top) + 'px',
                }, className: className, onClose: () => setBtnDropdownOpen(false), props: props }), buttonsRoot)));
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/MenuFormButtonControls/index.ts


;// CONCATENATED MODULE: ./src/storeRedux/form/actions.ts
const REPLY_ = 'REPLY_';
const CHANGE_COMMENT = 'CHANGE_COMMENT';
const SET_STATE_OPEN_COMMENT = 'SET_STATE_OPEN_COMMENT';
const SET_STATE_CLOSE_COMMENT = 'SET_STATE_CLOSE_COMMENT';
const changeFormValue = (commentId, textComment, replysName) => ({
    type: replysName ? REPLY_ + replysName : CHANGE_COMMENT,
    commentId: commentId,
    textComment: textComment,
    replysName: replysName,
});
const setIsOpenComment = (commentId, formIsOpen) => ({
    type: formIsOpen ? SET_STATE_OPEN_COMMENT : SET_STATE_CLOSE_COMMENT,
    commentId: commentId,
    formIsOpen: formIsOpen
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/ModalCommentsForm.tsx











function ModalCommentsForm({ rootId, authorName, commentId, onClose, cancelBtn, className }) {
    const commentFormValue = useAppSelector(selectCommentFormValue(commentId));
    const { name } = useAppSelector(selectUserBlock);
    const formRef = (0,external_react_namespaceObject.useRef)(null);
    const [isWidth] = useAdaptiveForm(formRef);
    const $FormBtns = [
        { item: isWidth.maxWidth800 && external_react_default().createElement(IconPicture, null) },
        { item: isWidth.maxWidth753 && external_react_default().createElement(IconFile, null) },
        { item: isWidth.maxWidth706 && external_react_default().createElement(IconDownload, null) },
        { item: isWidth.maxWidth659 && external_react_default().createElement(IconUser, null) },
        { item: isWidth.maxWidth612 && external_react_default().createElement(IconReverse, null) },
        { item: isWidth.maxWidth565 && external_react_default().createElement(IconShareForm, null) },
        { item: isWidth.maxWidth518 && external_react_default().createElement(IconRecord, null) },
        { item: isWidth.maxWidth471 && external_react_default().createElement(IconMessage, null) },
        { item: isWidth.maxWidth424 && external_react_default().createElement(IconPencil, null) },
        { item: isWidth.maxWidth377 && external_react_default().createElement(IconWord, null) },
        { item: isWidth.maxWidth330 && external_react_default().createElement(IconPdf, null) },
    ].filter(item => item.item).map(generateId);
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const handleChangeForm = (event) => dispatch(changeFormValue(commentId, event.target.value, authorName));
    const handleFocus = (event) => event.currentTarget.setSelectionRange(event.currentTarget.value.length, event.currentTarget.value.length);
    const handleSubmit = (event) => event.preventDefault();
    const handleClose = () => setTimeout(() => onClose === null || onClose === void 0 ? void 0 : onClose(), 10);
    return (external_react_default().createElement("form", { className: `${modalCommentsForm.form}${className ? ' ' + className : ''}`, onSubmit: handleSubmit, ref: formRef },
        external_react_default().createElement("textarea", { autoFocus: true, className: modalCommentsForm.textarea, value: commentFormValue, onChange: handleChangeForm, onFocus: handleFocus }),
        !commentFormValue &&
            external_react_default().createElement("label", { className: modalCommentsForm.label },
                name &&
                    external_react_default().createElement(Text, { size: 16, mobileSize: 14, color: EColor.blew }, name),
                name
                    ?
                        ', what are your thoughts?'
                    :
                        'Sign in to add a comment'),
        external_react_default().createElement("div", { className: modalCommentsForm.buttonsWrapper },
            !isWidth.maxWidth800 &&
                external_react_default().createElement(MenuFormButtonControls, { className: modalCommentsForm.item, props: isWidth, rootId: rootId, ref: formRef }),
            external_react_default().createElement(GenericList, { list: $FormBtns, As: 'button', className: modalCommentsForm.item }),
            cancelBtn &&
                external_react_default().createElement("button", { type: 'button', className: `${modalCommentsForm.cancelBtn}${isWidth.maxWidth330
                        ? ''
                        : ' ' + modalCommentsForm.btnSizeMobile} `, onClick: handleClose }, "Cancel"),
            external_react_default().createElement("button", { type: 'submit', className: `${modalCommentsForm.submitButton}${isWidth.maxWidth330
                    ? ''
                    : ' ' + modalCommentsForm.btnSizeMobile} `, disabled: (commentFormValue === null || commentFormValue === void 0 ? void 0 : commentFormValue.trim())
                    ? false
                    : true, style: (commentFormValue === null || commentFormValue === void 0 ? void 0 : commentFormValue.trim())
                    ? { opacity: '1', cursor: 'pointer' }
                    : { opacity: '.6', cursor: 'not-allowed' } }, "Comment"))));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsForm/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/modalcommentsList.css
// Exports
/* harmony default export */ const modalcommentsList = ({
	"list": `modalcommentsList__list--VizIY`,
	"loader": `modalcommentsList__loader--qQX2b`
});

;// CONCATENATED MODULE: ./src/utils/ts/convertRedditTextHtml.ts
function convertRedditTextHtml(str) {
    str = str.replace(/&lt;!-- SC_OFF --&gt;&lt;div class="md"&gt;/g, '')
        .replace("&lt;/div&gt;&lt;!-- SC_ON --&gt;", '')
        .replace(/&gt;/g, ">")
        .replace(/&lt;/g, "<")
        .replace(/&amp;#39;/g, "'")
        .replace(/&amp;quot;/g, '"')
        .replace(/&amp;/g, '&');
    return str;
}

;// CONCATENATED MODULE: ./src/utils/ts/commentsArrConverter.ts
function commentsArrConverter(arr, postId) {
    if (!arr)
        return;
    return arr.map((item) => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        const comment = item.data;
        const moreCommentsData = (_g = (_f = (_e = (_d = (_c = (_b = (_a = comment === null || comment === void 0 ? void 0 : comment.replies) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.filter((item) => item.kind === 'more')[0]) === null || _d === void 0 ? void 0 : _d.data) === null || _e === void 0 ? void 0 : _e.children) === null || _f === void 0 ? void 0 : _f.join(',')) === null || _g === void 0 ? void 0 : _g.substring(0, 799);
        return {
            postId: postId,
            commentId: comment.id,
            authorName: comment.author,
            createdTime: comment.created,
            commentText: comment.body,
            commentHtml: comment.body_html,
            karmaCounter: comment.score,
            commentReplies: (_j = (_h = comment.replies) === null || _h === void 0 ? void 0 : _h.data) === null || _j === void 0 ? void 0 : _j.children,
            children: comment.children,
            moreCommentsData: moreCommentsData
        };
    });
}

;// CONCATENATED MODULE: external "redux-persist/lib/storage/createWebStorage"
const createWebStorage_namespaceObject = require("redux-persist/lib/storage/createWebStorage");
var createWebStorage_default = /*#__PURE__*/__webpack_require__.n(createWebStorage_namespaceObject);
;// CONCATENATED MODULE: ./src/storeRedux/form/commentsFormReducer.ts

const commentsFormReducer_initialState = [
    {
        commentId: 'modalFormComment',
        textComment: '',
    },
];
const commentsFormReducer = (state = commentsFormReducer_initialState, action) => {
    const { type, textComment, replysName, commentId, formIsOpen } = action;
    function setFilterPrevState(commentId, notEqual) {
        return state.filter((comment) => notEqual ? comment.commentId !== commentId : comment.commentId === commentId);
    }
    switch (type) {
        case CHANGE_COMMENT:
            return [
                ...setFilterPrevState('modalFormComment', true),
                Object.assign(Object.assign({}, setFilterPrevState('modalFormComment')[0]), { commentId: commentId, textComment: textComment }),
            ];
        case REPLY_ + replysName:
            return [
                ...setFilterPrevState(commentId, true),
                Object.assign(Object.assign({}, setFilterPrevState(commentId)[0]), { commentId: commentId, replysName: replysName, textComment: textComment })
            ];
        case SET_STATE_OPEN_COMMENT:
            return [
                ...setFilterPrevState(commentId, true),
                Object.assign(Object.assign({}, setFilterPrevState(commentId)[0]), { commentId: commentId, formIsOpen: formIsOpen })
            ];
        case SET_STATE_CLOSE_COMMENT:
            return [
                ...setFilterPrevState(commentId, true)
                    .filter(comment => comment.textComment !== '' && comment.textComment),
                Object.assign(Object.assign({}, setFilterPrevState(commentId)[0]), { commentId: commentId, formIsOpen: formIsOpen })
            ];
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./src/storeRedux/comments/commentsSlice.ts

const commentsSlice_initialState = {
    comments: [],
    loading: false
};
const commentsSlice = (0,toolkit_namespaceObject.createSlice)({
    name: 'comments',
    initialState: commentsSlice_initialState,
    reducers: {
        commentsDataPending: (state) => {
            return {
                comments: [],
                loading: true
            };
        },
        setCommentsData: (state, action) => {
            var _a, _b, _c, _d;
            const moreComments = (_d = (_c = (_b = (_a = action.payload) === null || _a === void 0 ? void 0 : _a.filter((item) => item.children)[0]) === null || _b === void 0 ? void 0 : _b.children) === null || _c === void 0 ? void 0 : _c.join(',')) === null || _d === void 0 ? void 0 : _d.substring(0, 799);
            return {
                comments: action.payload,
                loading: false,
                moreComments: moreComments
            };
        },
        commentsDataError: (state, action) => {
            return {
                comments: [],
                loading: false,
                error: action.payload,
            };
        }
    }
});
const { commentsDataPending, setCommentsData, commentsDataError } = commentsSlice.actions;
/* harmony default export */ const comments_commentsSlice = (commentsSlice.reducer);

;// CONCATENATED MODULE: ./src/hooks/useUnmount.ts

function useUnmount() {
    const [mounted, setMounted] = (0,external_react_namespaceObject.useState)(false);
    (0,external_react_namespaceObject.useEffect)(() => {
        setMounted(true);
    }, []);
    return [mounted];
}

;// CONCATENATED MODULE: ./src/storeRedux/modal/modalSlice.ts

const modalSlice_initialState = {
    modalData: {
        postId: '',
        anchorName: '',
        postSubreddit: '',
        postTitle: '',
        postUrl: '',
        createdTime: NaN,
        numberComments: NaN,
        karmaNumber: NaN,
        isLast: false,
    },
};
const modalSlice = (0,toolkit_namespaceObject.createSlice)({
    name: 'cardModal',
    initialState: modalSlice_initialState,
    reducers: {
        setModalData(state, action) {
            return Object.assign(Object.assign({}, state), { modalData: action.payload });
        }
    }
});
const { setModalData } = modalSlice.actions;
/* harmony default export */ const modal_modalSlice = (modalSlice.reducer);

;// CONCATENATED MODULE: external "redux-persist"
const external_redux_persist_namespaceObject = require("redux-persist");
;// CONCATENATED MODULE: ./src/storeRedux/storeRedux.tsx














const createNoopStorage = () => {
    return {
        getItem(_key) {
            return Promise.resolve(null);
        },
        setItem(_key, value) {
            return Promise.resolve(value);
        },
        removeItem(_key) {
            return Promise.resolve();
        },
    };
};
const storage = typeof window === 'undefined' ? createNoopStorage() : createWebStorage_default()('local');
const persistConfig = {
    key: 'noop',
    storage,
    whitelist: [
        'redditToken',
    ]
};
const rootReducer = (0,toolkit_namespaceObject.combineReducers)({
    userBlock: user_userSlise,
    redditToken: token_tokenSlice,
    commentsForm: commentsFormReducer,
    commentsList: comments_commentsSlice,
    postsBlock: posts_postsSlice,
    postIsOpen: posts_postIsOpen,
    cardModal: modal_modalSlice,
});
const persistedReducer = (0,external_redux_persist_namespaceObject.persistReducer)(persistConfig, rootReducer);
const storeRedux = (0,toolkit_namespaceObject.configureStore)({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [external_redux_persist_namespaceObject.FLUSH, external_redux_persist_namespaceObject.REHYDRATE, external_redux_persist_namespaceObject.PAUSE, external_redux_persist_namespaceObject.PERSIST, external_redux_persist_namespaceObject.PURGE, external_redux_persist_namespaceObject.REGISTER],
        },
    }),
});
const persistor = (0,external_redux_persist_namespaceObject.persistStore)(storeRedux);
function ReduxProvider({ children }) {
    return (external_react_default().createElement(external_react_redux_namespaceObject.Provider, { store: storeRedux }, children));
}
function MountedBrowserRouter({ children }) {
    const [mounted] = useUnmount();
    return (mounted && external_react_default().createElement(external_react_router_dom_namespaceObject.BrowserRouter, null, children));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/MoreCommentsButton/moreCommentsButton.css
// Exports
/* harmony default export */ const moreCommentsButton = ({
	"button": `moreCommentsButton__button--wPPg3`
});

;// CONCATENATED MODULE: ./src/hooks/useMoreComments.ts


let useMoreComments_count = 0;
function useMoreComments({ commentsData, postId }) {
    const [moreComments, setMoreCommentsData] = (0,external_react_namespaceObject.useState)();
    (0,external_react_namespaceObject.useEffect)(() => {
        let isUnmount = false;
        const timer = setTimeout(() => {
            external_axios_default().get(`http://oauth.reddit.com/api/morechildren?link_id=t3_${postId}&children=${commentsData}&api_type=json`)
                .then((response) => {
                if (!isUnmount && response.data.json.data) {
                    const comments = response.data.json.data.things;
                    setMoreCommentsData(comments.filter((commentItem) => commentItem.data.contentHTML &&
                        commentItem.data.contentHTML !== '[удалено]' &&
                        commentItem.data.contentHTML !== '[deleted]')
                        .map((commentItem) => {
                        const comment = commentItem.data;
                        const indexStartName = comment.content
                            .indexOf('data-author="') + 13;
                        const indexEndName = comment.content
                            .substring(indexStartName)
                            .indexOf('"') + indexStartName;
                        const authorName = comment.content
                            .substring(indexStartName, indexEndName);
                        const indexStartTime = comment.content
                            .indexOf('live-timestamp') + 19;
                        const indexEndTime = comment.content
                            .substring(indexStartTime)
                            .indexOf('&') + indexStartTime;
                        const createdAt = comment.content
                            .substring(indexStartTime, indexEndTime)
                            .trim()
                            .replace('мин назад', 'min. ago')
                            .replace('ч назад', 'hr. ago');
                        const indexStartScore = comment.content
                            .indexOf('"score unvoted" title="') + 23;
                        const indexEndScore = comment.content
                            .substring(indexStartScore)
                            .indexOf('"') + indexStartScore;
                        const score = comment.content
                            .substring(indexStartScore, indexEndScore);
                        return {
                            postId: postId,
                            commentId: comment.id,
                            authorName: authorName,
                            createdTime: createdAt,
                            commentText: comment.contentText,
                            commentHtml: comment.contentHTML,
                            karmaCounter: score,
                        };
                    }));
                }
            })
                .catch(console.log);
        }, useMoreComments_count++ * 300);
        return () => {
            clearTimeout(timer);
            isUnmount = true;
            useMoreComments_count = 0;
        };
    }, [commentsData]);
    return [moreComments];
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/MoreCommentsButton/MoreCommentsButton.tsx




function MoreCommentsButton({ postId, moreCommentsData }) {
    const [isRepliesOpen, setIsRepliesOpen] = (0,external_react_namespaceObject.useState)(false);
    const [moreComments] = useMoreComments({
        commentsData: moreCommentsData,
        postId: postId,
    });
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        !isRepliesOpen &&
            moreComments &&
            moreComments.length > 0 &&
            external_react_default().createElement("button", { className: moreCommentsButton.button, onClick: () => setTimeout(() => {
                    setIsRepliesOpen(true);
                }, 20) }, moreComments === null || moreComments === void 0 ? void 0 :
                moreComments.length,
                (moreComments === null || moreComments === void 0 ? void 0 : moreComments.length) !== 1
                    ? ' more replies'
                    : ' more reply'),
        isRepliesOpen &&
            external_react_default().createElement(ModalCommentsList, { commentsData: moreComments })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/MoreCommentsButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/ShareCommentButton.tsx


function ShareCommentButton({ className }) {
    return (external_react_default().createElement("button", { className: className },
        external_react_default().createElement(IconShare, null),
        "Share"));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ShareCommentButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/ReplyCommentButton.tsx


function ReplyCommentButton({ className, onOpen }) {
    return (external_react_default().createElement("button", { className: className, onClick: onOpen },
        external_react_default().createElement(IconComments, null),
        "Reply"));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/ReplyCommentButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/menuCommentButton.css
// Exports
/* harmony default export */ const menuCommentButton = ({
	"button": `menuCommentButton__button--pGqHm`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/menuCommentDropdown.css
// Exports
/* harmony default export */ const menuCommentDropdown = ({
	"list": `menuCommentDropdown__list--QVwrF`,
	"flash": `menuCommentDropdown__flash--RDVIG`,
	"item": `menuCommentDropdown__item--qt7FG`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/MenuCommentDropdown.tsx







function MenuCommentDropdown({ className, onClose, style }) {
    const $CommentBtnsDropdown = [
        { item: external_react_default().createElement(IconReport, null), text: 'Report' },
        { item: external_react_default().createElement(IconSave, null), text: 'Save' },
        { item: external_react_default().createElement(IconHide, null), text: 'Hide' },
    ].map(generateId);
    useModalCloser({ onClose });
    useResizeCloser(onClose);
    return (external_react_default().createElement("ul", { className: menuCommentDropdown.list, style: style },
        external_react_default().createElement(GenericList, { As: 'button', className: `${className ? className + ' ' : ''}${menuCommentDropdown.item}`, list: $CommentBtnsDropdown })));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentDropdown/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/MenuCommentButton.tsx






function MenuCommentButton({ className }) {
    const commentsRoot = document.getElementById('comments_root');
    if (!commentsRoot)
        return null;
    const [isCommentMenuOpen, setisCommentMenuOpen] = (0,external_react_namespaceObject.useState)(false);
    const controlRef = (0,external_react_namespaceObject.useRef)(null);
    const [coords] = useCoords(controlRef, isCommentMenuOpen);
    return (external_react_default().createElement((external_react_default()).Fragment, null,
        external_react_default().createElement("button", { className: `${className ? className + ' ' : ''}${menuCommentButton.button}`, onClick: () => setisCommentMenuOpen(true), ref: controlRef },
            external_react_default().createElement(IconMenu, null)),
        isCommentMenuOpen && coords && (0,external_react_dom_namespaceObject.createPortal)(external_react_default().createElement(MenuCommentDropdown, { style: {
                left: (coords === null || coords === void 0 ? void 0 : coords.left) + 'px',
                top: (coords === null || coords === void 0 ? void 0 : coords.top) + 'px',
            }, className: className, onClose: () => setisCommentMenuOpen(false) }), commentsRoot)));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/MenuCommentButton/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/comment.css
// Exports
/* harmony default export */ const comment = ({
	"container": `comment__container--TLUYE`,
	"header": `comment__header--tqj8W`,
	"body": `comment__body--sotBq`,
	"content": `comment__content--GJfEW`,
	"commentOpen": `comment__commentOpen--s9TuF`,
	"buttonOpen": `comment__buttonOpen--o8VhN`,
	"buttonLine": `comment__buttonLine--mVe0E`,
	"userLinkAvatar": `comment__userLinkAvatar--qt1H0`,
	"styleAvatar": `comment__styleAvatar--ulVcl`,
	"createdAd": `comment__createdAd--_kGGW`,
	"text": `comment__text--wigUO`,
	"controlPanel": `comment__controlPanel--yuo9m`,
	"karmaCounter": `comment__karmaCounter--Lgg37`,
	"button": `comment__button--VqfAQ`,
	"commentsBlock": `comment__commentsBlock--K9Amn`,
	"formComment": `comment__formComment--MaS2J`
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/Comment.tsx




















const Comment = (0,external_react_namespaceObject.memo)(({ commentItemData }) => {
    const { commentReplies, authorName, createdTime, commentHtml, karmaCounter, postId, commentId, moreCommentsData } = commentItemData;
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    const [isCommentOpen, setIsCommentOpen] = (0,external_react_namespaceObject.useState)(true);
    const handleHideCommentToggle = () => setTimeout(() => setIsCommentOpen(!isCommentOpen), 10);
    const formIsOpen = useAppSelector(selectFormIsOpen(commentId));
    const setCloseAllCommentsForm = () => {
        var _a;
        return (_a = storeRedux
            .getState()) === null || _a === void 0 ? void 0 : _a.commentsForm.filter((comment) => comment.formIsOpen === true).map(comment => dispatch(setIsOpenComment(comment.commentId, false)));
    };
    const setCloseCommentForm = () => dispatch(setIsOpenComment(commentId, false));
    const setOpenCommentForm = () => dispatch(setIsOpenComment(commentId, true));
    function handleToggleComments() {
        if (formIsOpen)
            return setCloseAllCommentsForm();
        setOpenCommentForm();
    }
    return (external_react_default().createElement("li", { className: comment.container },
        external_react_default().createElement("div", { className: comment.header, style: isCommentOpen
                ? { transform: 'translateX(0)' }
                : { transform: 'translateX(30px)' } },
            !isCommentOpen &&
                external_react_default().createElement("button", { className: comment.buttonOpen, onClick: handleHideCommentToggle },
                    external_react_default().createElement(IconSwitch, null)),
            external_react_default().createElement(UserLink, { className: comment.userLinkAvatar, styleAvatar: comment.styleAvatar, anchorName: authorName }),
            external_react_default().createElement(CreatedAd, { className: comment.createdAd, createdTime: createdTime, noLabel: true })),
        isCommentOpen &&
            external_react_default().createElement((external_react_default()).Fragment, null, authorName !== '[deleted]' &&
                authorName !== ';div class=' &&
                external_react_default().createElement("div", { className: comment.body },
                    external_react_default().createElement("button", { className: comment.buttonLine, onClick: handleHideCommentToggle }),
                    external_react_default().createElement("div", { className: comment.content },
                        external_react_default().createElement(Text, { As: "div", size: 14, mobileSize: 12, className: comment.text, dangerouslySetInnerHTML: {
                                __html: external_dompurify_default().sanitize(convertRedditTextHtml(commentHtml))
                            } }),
                        external_react_default().createElement("div", { className: comment.controlPanel },
                            external_react_default().createElement(KarmaCounter, { className: comment.karmaCounter, carmaNumber: karmaCounter, authorName: authorName }),
                            external_react_default().createElement(ReplyCommentButton, { className: comment.button, onOpen: handleToggleComments }),
                            external_react_default().createElement(ShareCommentButton, { className: comment.button }),
                            external_react_default().createElement(MenuCommentButton, { className: comment.button })),
                        (formIsOpen || commentReplies) &&
                            external_react_default().createElement("div", { className: comment.commentsBlock },
                                formIsOpen &&
                                    external_react_default().createElement(ModalCommentsForm, { className: comment.formComment, authorName: authorName, commentId: commentId, onClose: setCloseCommentForm, rootId: 'comments_root', cancelBtn: true }),
                                external_react_default().createElement(ModalCommentsList, { commentsData: commentsArrConverter(commentReplies, postId) }),
                                external_react_default().createElement(MoreCommentsButton, { postId: postId, moreCommentsData: moreCommentsData })))))));
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/Comment/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/ModalCommentsList.tsx




const ModalCommentsList = (0,external_react_namespaceObject.forwardRef)(({ loading, commentsData }, ref) => {
    if (!commentsData)
        return null;
    return (external_react_default().createElement("ul", { className: modalcommentsList.list, ref: ref }, loading
        ? external_react_default().createElement(RedditLoader, { className: modalcommentsList.loader })
        : commentsData
            .filter((cardItemData) => cardItemData.authorName)
            .map((cardItemData) => (external_react_default().createElement(Comment, { commentItemData: cardItemData, key: cardItemData.commentId })))));
});

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalCommentsList/index.ts


;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/ModalButtonCloserX.tsx


function ModalButtonCloserX({ onClose, className }) {
    return (external_react_default().createElement("button", { className: className, onClick: onClose },
        external_react_default().createElement(IconX, null)));
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/ModalButtonCloserX/index.ts


;// CONCATENATED MODULE: ./src/storeRedux/comments/commentsAsyncThunk.ts
var commentsAsyncThunk_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const commentsAsyncThunk = (postSubreddit, postId) => (dispatch, getState) => commentsAsyncThunk_awaiter(void 0, void 0, void 0, function* () {
    dispatch(commentsDataPending());
    const { postsData } = getState().postsBlock;
    const post = postsData.filter(post => post.postId === postId)[0];
    post && dispatch(setModalData(post));
    try {
        const { data } = yield external_axios_default().get(`https://api.reddit.com/r/${postSubreddit}/comments/${postId}`);
        !post && dispatch(setModalData(postConverter(data[0].data.children[0].data)));
        dispatch(setCommentsData(commentsArrConverter(data[1].data.children, postId)));
    }
    catch (error) {
        console.log(error);
        dispatch(commentsDataError(error));
    }
});

;// CONCATENATED MODULE: ./src/hooks/useCommentsPostData.ts




function useModalCommentsData(postSubreddit, postId) {
    const dispatch = (0,external_react_redux_namespaceObject.useDispatch)();
    (0,external_react_namespaceObject.useEffect)(() => {
        dispatch(commentsAsyncThunk(postSubreddit, postId));
    }, []);
    const commentsList = useAppSelector(selectComments);
    const modalData = useAppSelector(selectCardModalData);
    return { commentsList, modalData };
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/CardModal.tsx























function CardModal() {
    const modalRoot = document.querySelector('#modal_root');
    const { postId, subreddit } = (0,external_react_router_dom_namespaceObject.useParams)();
    if (!modalRoot || !subreddit || !postId)
        return null;
    const { commentsList: { comments, moreComments, loading }, modalData: { postHint, postThumbnail, postText, karmaNumber, postTitle, postUrl, createdTime, anchorName, postVideoUrl, postHighQualityVideoUrl, numberComments } } = useModalCommentsData(subreddit, postId);
    const refModal = (0,external_react_namespaceObject.useRef)(null);
    const refButtonToTop = (0,external_react_namespaceObject.useRef)(null);
    const scrollToTop = () => refModal.current && refModal.current.scrollTo({ top: 0 });
    const navigate = (0,external_react_router_dom_namespaceObject.useNavigate)();
    const onClose = () => navigate(-1);
    useModalCloser({
        onClose: onClose,
        ref: refModal,
        ref2: refButtonToTop,
        timeDelay: 20
    });
    return (0,external_react_dom_namespaceObject.createPortal)((external_react_default().createElement("div", { className: cardmodal.modal },
        external_react_default().createElement(BackToTopButton, { ref: refButtonToTop, className: cardmodal.buttonBackToTop, onClick: scrollToTop }),
        external_react_default().createElement("div", { className: cardmodal.container, ref: refModal },
            external_react_default().createElement(ModalButtonCloserX, { className: cardmodal.buttonCloserX, onClose: onClose }),
            !postTitle && loading
                ?
                    external_react_default().createElement(RedditLoader, { className: cardmodal.loader })
                :
                    external_react_default().createElement((external_react_default()).Fragment, null,
                        external_react_default().createElement("div", { className: cardmodal.header },
                            external_react_default().createElement(KarmaCounter, { className: cardmodal.karmaCounter, carmaNumber: karmaNumber }),
                            external_react_default().createElement("div", { className: cardmodal.popupHeaderWrapper },
                                external_react_default().createElement(CardTitlePostLink, { postTitle: postTitle, postUrl: postUrl }),
                                external_react_default().createElement("div", { className: cardmodal.popupMediaUser },
                                    external_react_default().createElement(CreatedAd, { createdTime: createdTime }),
                                    external_react_default().createElement(UserLink, { anchorName: anchorName })))),
                        postHint !== undefined &&
                            postThumbnail &&
                            postThumbnail !== "self" &&
                            postThumbnail !== "default" &&
                            external_react_default().createElement(CardVisual, { className: cardmodal.preview, props: {
                                    postThumbnail,
                                    postVideoUrl,
                                    postUrl,
                                    postHighQualityVideoUrl,
                                    postHint
                                } }),
                        postText &&
                            external_react_default().createElement(Text, { As: "div", size: 14, mobileSize: 12, className: cardmodal.textContent, dangerouslySetInnerHTML: {
                                    __html: external_dompurify_default().sanitize(convertRedditTextHtml(postText))
                                } }),
                        external_react_default().createElement("div", { className: cardmodal.footer, id: "footer_root" },
                            external_react_default().createElement(ModalControlPanel, { props: numberComments }),
                            external_react_default().createElement(ModalCommentsForm, { rootId: "footer_root", commentId: "modalFormComment" }),
                            external_react_default().createElement(ModalSortBlock, null)),
                        external_react_default().createElement("div", { className: cardmodal.commentsBlock, id: "comments_root" },
                            external_react_default().createElement(ModalCommentsList, { commentsData: comments, loading: loading }),
                            external_react_default().createElement(MoreCommentsButton, { postId: postId, moreCommentsData: moreComments })))))), modalRoot);
}

;// CONCATENATED MODULE: ./src/shared/CardsList/Card/CardModal/index.ts


;// CONCATENATED MODULE: ./src/hooks/useStopScroll.ts
function setStopScroll(props) {
    const page = document.body;
    props
        ? page.style.overflow = 'hidden'
        : page.style.overflow = '';
    !page.style.length && page.removeAttribute('style');
}

;// CONCATENATED MODULE: ./src/shared/PostsSection/postsSection.css
// Exports
/* harmony default export */ const postsSection = ({
	"posts": `postsSection__posts--Iwesw`,
	"loader": `postsSection__loader--ZxRJx`
});

;// CONCATENATED MODULE: ./src/shared/PostsSection/PostsSection.tsx







function PostsSection({ children }) {
    const { loading, afterList, error } = useAppSelector(selectPostsBlock);
    const location = (0,external_react_router_dom_namespaceObject.useLocation)();
    (0,external_react_namespaceObject.useEffect)(() => {
        if (location.pathname.includes('comments')) {
            setStopScroll(true);
        }
        else {
            setStopScroll(false);
        }
    }, [location]);
    return (external_react_default().createElement("section", { className: postsSection.posts },
        loading && !afterList
            ? external_react_default().createElement(RedditLoader, { className: postsSection.loader })
            : error && external_react_default().createElement(Error, { massage: error.message }),
        children));
}

;// CONCATENATED MODULE: ./src/App.tsx













function AppComponent() {
    return (external_react_default().createElement(MountedBrowserRouter, null,
        external_react_default().createElement(ReduxProvider, null,
            external_react_default().createElement(CardListContextProvider, null,
                external_react_default().createElement(Layout, null,
                    external_react_default().createElement(Header, null),
                    external_react_default().createElement(Content, null,
                        external_react_default().createElement(PostsSection, null,
                            external_react_default().createElement(external_react_router_dom_namespaceObject.Routes, null,
                                external_react_default().createElement(external_react_router_dom_namespaceObject.Route, { path: '/:post', element: external_react_default().createElement(CardList, null) },
                                    external_react_default().createElement(external_react_router_dom_namespaceObject.Route, { path: ':subreddit/comments/:postId', element: external_react_default().createElement(CardModal, null) })),
                                external_react_default().createElement(external_react_router_dom_namespaceObject.Route, { path: '*', element: external_react_default().createElement(Error, { massage: 'ERROR 404: page not found' }) }),
                                external_react_default().createElement(external_react_router_dom_namespaceObject.Route, { path: '/', element: external_react_default().createElement(external_react_router_dom_namespaceObject.Navigate, { to: '/best' }) }),
                                external_react_default().createElement(external_react_router_dom_namespaceObject.Route, { path: '/auth', element: external_react_default().createElement(external_react_router_dom_namespaceObject.Navigate, { to: '/best' }) })))))))));
}
const App = (0,root_namespaceObject.hot)(() => external_react_default().createElement(AppComponent, null));

;// CONCATENATED MODULE: ./src/server/indexTemplate.js
const indexTemplate = (content) => `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">                                  
                    <title>Reddit Idzanamix</title>
                    <base href="/">
                    <link href="static/style.css" rel="stylesheet" />
                    <link rel="icon" href="https://www.redditstatic.com/accountmanager/favicon/safari-pinned-tab.svg" type="image/x-icon">
                    <script src="static/client.js" type="application/javascript"></script>        
                </head>
                <body>
                    <div id="react_root">${content}</div>
                    <div id="modal_root"></div>
                </body>
            </html>
            `;

;// CONCATENATED MODULE: external "compression"
const external_compression_namespaceObject = require("compression");
var external_compression_default = /*#__PURE__*/__webpack_require__.n(external_compression_namespaceObject);
;// CONCATENATED MODULE: external "helmet"
const external_helmet_namespaceObject = require("helmet");
var external_helmet_default = /*#__PURE__*/__webpack_require__.n(external_helmet_namespaceObject);
;// CONCATENATED MODULE: ./src/server/server.js






const PORT = process.env.PORT || 80;
const IS_DEV = "production" !== 'production';
const app = external_express_default()();
if (!IS_DEV) {
    app.use(external_compression_default()());
    app.use(external_helmet_default()({
        contentSecurityPolicy: false
    }));
}
app.use('/static', external_express_default()["static"]('./dist/client'));
app.get('*', (request, response) => {
    response.send(indexTemplate(server_default().renderToString(App())));
});
app.listen(PORT, () => {
    console.log(`Server started on reddinamix.fun:${PORT}`);
});

})();

/******/ })()
;