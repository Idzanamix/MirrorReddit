/*! For license information please see reactPlayerPreview.client.js.LICENSE.txt */
"use strict";(self.webpackChunkreddinamix=self.webpackChunkreddinamix||[]).push([["reactPlayerPreview"],{"./node_modules/react-player/lib/Preview.js":(module,__unused_webpack_exports,__webpack_require__)=>{eval('\nvar __create = Object.create;\nvar __defProp = Object.defineProperty;\nvar __getOwnPropDesc = Object.getOwnPropertyDescriptor;\nvar __getOwnPropNames = Object.getOwnPropertyNames;\nvar __getProtoOf = Object.getPrototypeOf;\nvar __hasOwnProp = Object.prototype.hasOwnProperty;\nvar __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;\nvar __export = (target, all) => {\n    for (var name in all)\n        __defProp(target, name, { get: all[name], enumerable: true });\n};\nvar __copyProps = (to, from, except, desc) => {\n    if (from && typeof from === "object" || typeof from === "function") {\n        for (let key of __getOwnPropNames(from))\n            if (!__hasOwnProp.call(to, key) && key !== except)\n                __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });\n    }\n    return to;\n};\nvar __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(\n// If the importer is in node compatibility mode or this is not an ESM\n// file that has been converted to a CommonJS file using a Babel-\n// compatible transform (i.e. "__esModule" has not been set), then set\n// "default" to the CommonJS "module.exports" for node compatibility.\nisNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));\nvar __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);\nvar __publicField = (obj, key, value) => {\n    __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);\n    return value;\n};\nvar Preview_exports = {};\n__export(Preview_exports, {\n    default: () => Preview\n});\nmodule.exports = __toCommonJS(Preview_exports);\nvar import_react = __toESM(__webpack_require__(/*! react */ "./node_modules/react/index.js"));\nconst ICON_SIZE = "64px";\nconst cache = {};\nclass Preview extends import_react.Component {\n    constructor() {\n        super(...arguments);\n        __publicField(this, "mounted", false);\n        __publicField(this, "state", {\n            image: null\n        });\n        __publicField(this, "handleKeyPress", (e) => {\n            if (e.key === "Enter" || e.key === " ") {\n                this.props.onClick();\n            }\n        });\n    }\n    componentDidMount() {\n        this.mounted = true;\n        this.fetchImage(this.props);\n    }\n    componentDidUpdate(prevProps) {\n        const { url, light } = this.props;\n        if (prevProps.url !== url || prevProps.light !== light) {\n            this.fetchImage(this.props);\n        }\n    }\n    componentWillUnmount() {\n        this.mounted = false;\n    }\n    fetchImage({ url, light, oEmbedUrl }) {\n        if (import_react.default.isValidElement(light)) {\n            return;\n        }\n        if (typeof light === "string") {\n            this.setState({ image: light });\n            return;\n        }\n        if (cache[url]) {\n            this.setState({ image: cache[url] });\n            return;\n        }\n        this.setState({ image: null });\n        return window.fetch(oEmbedUrl.replace("{url}", url)).then((response) => response.json()).then((data) => {\n            if (data.thumbnail_url && this.mounted) {\n                const image = data.thumbnail_url.replace("height=100", "height=480").replace("-d_295x166", "-d_640");\n                this.setState({ image });\n                cache[url] = image;\n            }\n        });\n    }\n    render() {\n        const { light, onClick, playIcon, previewTabIndex, previewAriaLabel } = this.props;\n        const { image } = this.state;\n        const isElement = import_react.default.isValidElement(light);\n        const flexCenter = {\n            display: "flex",\n            alignItems: "center",\n            justifyContent: "center"\n        };\n        const styles = {\n            preview: Object.assign({ width: "100%", height: "100%", backgroundImage: image && !isElement ? `url(${image})` : void 0, backgroundSize: "cover", backgroundPosition: "center", cursor: "pointer" }, flexCenter),\n            shadow: Object.assign({ background: "radial-gradient(rgb(0, 0, 0, 0.3), rgba(0, 0, 0, 0) 60%)", borderRadius: ICON_SIZE, width: ICON_SIZE, height: ICON_SIZE, position: isElement ? "absolute" : void 0 }, flexCenter),\n            playIcon: {\n                borderStyle: "solid",\n                borderWidth: "16px 0 16px 26px",\n                borderColor: "transparent transparent transparent white",\n                marginLeft: "7px"\n            }\n        };\n        const defaultPlayIcon = /* @__PURE__ */ import_react.default.createElement("div", { style: styles.shadow, className: "react-player__shadow" }, /* @__PURE__ */ import_react.default.createElement("div", { style: styles.playIcon, className: "react-player__play-icon" }));\n        return /* @__PURE__ */ import_react.default.createElement("div", Object.assign({ style: styles.preview, className: "react-player__preview", onClick, tabIndex: previewTabIndex, onKeyPress: this.handleKeyPress }, previewAriaLabel ? { "aria-label": previewAriaLabel } : {}), isElement ? light : null, playIcon || defaultPlayIcon);\n    }\n}\n\n\n//# sourceURL=webpack://reddinamix/./node_modules/react-player/lib/Preview.js?')}}]);