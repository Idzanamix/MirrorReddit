"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunknew_reddit"] = self["webpackChunknew_reddit"] || []).push([["reactPlayerSoundCloud"],{

/***/ "./node_modules/react-player/lib/players/SoundCloud.js":
/*!*************************************************************!*\
  !*** ./node_modules/react-player/lib/players/SoundCloud.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n    for (var name in all)\n        __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n    if (from && typeof from === \"object\" || typeof from === \"function\") {\n        for (let key of __getOwnPropNames(from))\n            if (!__hasOwnProp.call(to, key) && key !== except)\n                __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n    }\n    return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n// If the importer is in node compatibility mode or this is not an ESM\n// file that has been converted to a CommonJS file using a Babel-\n// compatible transform (i.e. \"__esModule\" has not been set), then set\n// \"default\" to the CommonJS \"module.exports\" for node compatibility.\nisNodeMode || !mod || !mod.__esModule ? __defProp(target, \"default\", { value: mod, enumerable: true }) : target, mod));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, \"__esModule\", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n    __defNormalProp(obj, typeof key !== \"symbol\" ? key + \"\" : key, value);\n    return value;\n};\nvar SoundCloud_exports = {};\n__export(SoundCloud_exports, {\n    default: () => SoundCloud\n});\nmodule.exports = __toCommonJS(SoundCloud_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar import_utils = __webpack_require__(/*! ../utils */ \"./node_modules/react-player/lib/utils.js\");\nvar import_patterns = __webpack_require__(/*! ../patterns */ \"./node_modules/react-player/lib/patterns.js\");\nconst SDK_URL = \"https://w.soundcloud.com/player/api.js\";\nconst SDK_GLOBAL = \"SC\";\nclass SoundCloud extends import_react.Component {\n    constructor() {\n        super(...arguments);\n        __publicField(this, \"callPlayer\", import_utils.callPlayer);\n        __publicField(this, \"duration\", null);\n        __publicField(this, \"currentTime\", null);\n        __publicField(this, \"fractionLoaded\", null);\n        __publicField(this, \"mute\", () => {\n            this.setVolume(0);\n        });\n        __publicField(this, \"unmute\", () => {\n            if (this.props.volume !== null) {\n                this.setVolume(this.props.volume);\n            }\n        });\n        __publicField(this, \"ref\", (iframe) => {\n            this.iframe = iframe;\n        });\n    }\n    componentDidMount() {\n        this.props.onMount && this.props.onMount(this);\n    }\n    load(url, isReady) {\n        (0, import_utils.getSDK)(SDK_URL, SDK_GLOBAL).then((SC) => {\n            if (!this.iframe)\n                return;\n            const { PLAY, PLAY_PROGRESS, PAUSE, FINISH, ERROR } = SC.Widget.Events;\n            if (!isReady) {\n                this.player = SC.Widget(this.iframe);\n                this.player.bind(PLAY, this.props.onPlay);\n                this.player.bind(PAUSE, () => {\n                    const remaining = this.duration - this.currentTime;\n                    if (remaining < 0.05) {\n                        return;\n                    }\n                    this.props.onPause();\n                });\n                this.player.bind(PLAY_PROGRESS, (e) => {\n                    this.currentTime = e.currentPosition / 1e3;\n                    this.fractionLoaded = e.loadedProgress;\n                });\n                this.player.bind(FINISH, () => this.props.onEnded());\n                this.player.bind(ERROR, (e) => this.props.onError(e));\n            }\n            this.player.load(url, Object.assign(Object.assign({}, this.props.config.options), { callback: () => {\n                    this.player.getDuration((duration) => {\n                        this.duration = duration / 1e3;\n                        this.props.onReady();\n                    });\n                } }));\n        });\n    }\n    play() {\n        this.callPlayer(\"play\");\n    }\n    pause() {\n        this.callPlayer(\"pause\");\n    }\n    stop() {\n    }\n    seekTo(seconds, keepPlaying = true) {\n        this.callPlayer(\"seekTo\", seconds * 1e3);\n        if (!keepPlaying) {\n            this.pause();\n        }\n    }\n    setVolume(fraction) {\n        this.callPlayer(\"setVolume\", fraction * 100);\n    }\n    getDuration() {\n        return this.duration;\n    }\n    getCurrentTime() {\n        return this.currentTime;\n    }\n    getSecondsLoaded() {\n        return this.fractionLoaded * this.duration;\n    }\n    render() {\n        const { display } = this.props;\n        const style = {\n            width: \"100%\",\n            height: \"100%\",\n            display\n        };\n        return /* @__PURE__ */ import_react.default.createElement(\"iframe\", {\n            ref: this.ref,\n            src: `https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,\n            style,\n            frameBorder: 0,\n            allow: \"autoplay\"\n        });\n    }\n}\n__publicField(SoundCloud, \"displayName\", \"SoundCloud\");\n__publicField(SoundCloud, \"canPlay\", import_patterns.canPlay.soundcloud);\n__publicField(SoundCloud, \"loopOnEnded\", true);\n\n\n//# sourceURL=webpack://new-reddit/./node_modules/react-player/lib/players/SoundCloud.js?");

/***/ })

}]);