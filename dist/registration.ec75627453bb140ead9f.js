/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"registration": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~registration"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/login_img.png":
/*!******************************!*\
  !*** ./assets/login_img.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4676dfe695fb42d3c34e1e49b1310bcb.png");

/***/ }),

/***/ "./assets/logo/logo_circle.svg":
/*!*************************************!*\
  !*** ./assets/logo/logo_circle.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0d14895a134af94a9552232be18d95d8.svg");

/***/ }),

/***/ "./assets/logo/logo_toxin.svg":
/*!************************************!*\
  !*** ./assets/logo/logo_toxin.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "8b297023740bd8d07d10d66597badacd.svg");

/***/ }),

/***/ "./assets/logo/vector_left.svg":
/*!*************************************!*\
  !*** ./assets/logo/vector_left.svg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "e4ad9b54afa0cf731e9d193828df0d84.svg");

/***/ }),

/***/ "./assets/logo/vector_right.svg":
/*!**************************************!*\
  !*** ./assets/logo/vector_right.svg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "570053001faf5effb91fd0b71a250916.svg");

/***/ }),

/***/ "./icons/arrows_previos_next/css/fontello.css":
/*!****************************************************!*\
  !*** ./icons/arrows_previos_next/css/fontello.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./icons/arrows_previos_next/font/fontello.eot":
/*!*****************************************************!*\
  !*** ./icons/arrows_previos_next/font/fontello.eot ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "073f332b87d2982091b282ca0f5bd520.eot");

/***/ }),

/***/ "./icons/arrows_previos_next/font/fontello.svg":
/*!*****************************************************!*\
  !*** ./icons/arrows_previos_next/font/fontello.svg ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0379fffee238622844c6c31df041a187.svg");

/***/ }),

/***/ "./icons/arrows_previos_next/font/fontello.ttf":
/*!*****************************************************!*\
  !*** ./icons/arrows_previos_next/font/fontello.ttf ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f39022a5114a81af139d23744d750a55.ttf");

/***/ }),

/***/ "./icons/arrows_previos_next/font/fontello.woff":
/*!******************************************************!*\
  !*** ./icons/arrows_previos_next/font/fontello.woff ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "86fb6e64f3f0c7cbb1c1c44013fcf34c.woff");

/***/ }),

/***/ "./icons/arrows_previos_next/font/fontello.woff2":
/*!*******************************************************!*\
  !*** ./icons/arrows_previos_next/font/fontello.woff2 ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "66480a8b9db91a4fadba24bac49210f6.woff2");

/***/ }),

/***/ "./icons/icon_arrow_down/css/fontello.css":
/*!************************************************!*\
  !*** ./icons/icon_arrow_down/css/fontello.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./icons/icon_arrow_down/font/fontello.eot":
/*!*************************************************!*\
  !*** ./icons/icon_arrow_down/font/fontello.eot ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "02482f94143c1b944a8d5a92dc7bf27e.eot");

/***/ }),

/***/ "./icons/icon_arrow_down/font/fontello.svg":
/*!*************************************************!*\
  !*** ./icons/icon_arrow_down/font/fontello.svg ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a8839d3c792fdb6f977340b1d2b60a28.svg");

/***/ }),

/***/ "./icons/icon_arrow_down/font/fontello.ttf":
/*!*************************************************!*\
  !*** ./icons/icon_arrow_down/font/fontello.ttf ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "831af0cec2d8d3a74d45df31d0534663.ttf");

/***/ }),

/***/ "./icons/icon_arrow_down/font/fontello.woff":
/*!**************************************************!*\
  !*** ./icons/icon_arrow_down/font/fontello.woff ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "4572ba53d9dfcda2a247bf23362b8e01.woff");

/***/ }),

/***/ "./icons/icon_arrow_down/font/fontello.woff2":
/*!***************************************************!*\
  !*** ./icons/icon_arrow_down/font/fontello.woff2 ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "064627b7ea51bc2694e57a511b6b8d59.woff2");

/***/ }),

/***/ "./icons/socials_icons/css/fontello.css":
/*!**********************************************!*\
  !*** ./icons/socials_icons/css/fontello.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./icons/socials_icons/font/fontello.eot":
/*!***********************************************!*\
  !*** ./icons/socials_icons/font/fontello.eot ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "20f6d1dce168abaf6139dbdac73d8197.eot");

/***/ }),

/***/ "./icons/socials_icons/font/fontello.svg":
/*!***********************************************!*\
  !*** ./icons/socials_icons/font/fontello.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ef1f4f4a94d86b79654ce26a0d17bb09.svg");

/***/ }),

/***/ "./icons/socials_icons/font/fontello.woff":
/*!************************************************!*\
  !*** ./icons/socials_icons/font/fontello.woff ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "7148bcb90d3af50db12fc55ef21febe4.woff");

/***/ }),

/***/ "./icons/socials_icons/font/fontello.woff2":
/*!*************************************************!*\
  !*** ./icons/socials_icons/font/fontello.woff2 ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "034933c0090103ebcef1a0610a118f26.woff2");

/***/ }),

/***/ "./scripts/babel.js":
/*!**************************!*\
  !*** ./scripts/babel.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./scripts/registration_page.js":
/*!**************************************!*\
  !*** ./scripts/registration_page.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_registration_page_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/styles/registration_page.css */ "./styles/registration_page.css");
/* harmony import */ var _styles_registration_page_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_registration_page_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_login_img_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/login_img.png */ "./assets/login_img.png");
/* harmony import */ var _logo_logo_circle_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @logo/logo_circle.svg */ "./assets/logo/logo_circle.svg");
/* harmony import */ var _logo_vector_left_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @logo/vector_left.svg */ "./assets/logo/vector_left.svg");
/* harmony import */ var _logo_vector_right_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @logo/vector_right.svg */ "./assets/logo/vector_right.svg");
/* harmony import */ var _logo_logo_toxin_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @logo/logo_toxin.svg */ "./assets/logo/logo_toxin.svg");
/* harmony import */ var _styles_registration_page_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/registration_page.scss */ "./styles/registration_page.scss");
/* harmony import */ var _styles_registration_page_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_registration_page_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./babel.js */ "./scripts/babel.js");
/* harmony import */ var _babel_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _icons_icon_arrow_down_css_fontello_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/icons/icon_arrow_down/css/fontello.css */ "./icons/icon_arrow_down/css/fontello.css");
/* harmony import */ var _icons_icon_arrow_down_css_fontello_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_icons_icon_arrow_down_css_fontello_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _icons_icon_arrow_down_font_fontello_eot__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/icons/icon_arrow_down/font/fontello.eot */ "./icons/icon_arrow_down/font/fontello.eot");
/* harmony import */ var _icons_icon_arrow_down_font_fontello_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/icons/icon_arrow_down/font/fontello.svg */ "./icons/icon_arrow_down/font/fontello.svg");
/* harmony import */ var _icons_icon_arrow_down_font_fontello_ttf__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/icons/icon_arrow_down/font/fontello.ttf */ "./icons/icon_arrow_down/font/fontello.ttf");
/* harmony import */ var _icons_icon_arrow_down_font_fontello_woff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/icons/icon_arrow_down/font/fontello.woff */ "./icons/icon_arrow_down/font/fontello.woff");
/* harmony import */ var _icons_icon_arrow_down_font_fontello_woff2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/icons/icon_arrow_down/font/fontello.woff2 */ "./icons/icon_arrow_down/font/fontello.woff2");
/* harmony import */ var _icons_socials_icons_css_fontello_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/icons/socials_icons/css/fontello.css */ "./icons/socials_icons/css/fontello.css");
/* harmony import */ var _icons_socials_icons_css_fontello_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_icons_socials_icons_css_fontello_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _icons_socials_icons_font_fontello_eot__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/icons/socials_icons/font/fontello.eot */ "./icons/socials_icons/font/fontello.eot");
/* harmony import */ var _icons_socials_icons_font_fontello_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/icons/socials_icons/font/fontello.svg */ "./icons/socials_icons/font/fontello.svg");
/* harmony import */ var _icons_socials_icons_font_fontello_woff__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/icons/socials_icons/font/fontello.woff */ "./icons/socials_icons/font/fontello.woff");
/* harmony import */ var _icons_socials_icons_font_fontello_woff2__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/icons/socials_icons/font/fontello.woff2 */ "./icons/socials_icons/font/fontello.woff2");
/* harmony import */ var _icons_arrows_previos_next_css_fontello_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/icons/arrows_previos_next/css/fontello.css */ "./icons/arrows_previos_next/css/fontello.css");
/* harmony import */ var _icons_arrows_previos_next_css_fontello_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_icons_arrows_previos_next_css_fontello_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _icons_arrows_previos_next_font_fontello_eot__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/icons/arrows_previos_next/font/fontello.eot */ "./icons/arrows_previos_next/font/fontello.eot");
/* harmony import */ var _icons_arrows_previos_next_font_fontello_svg__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/icons/arrows_previos_next/font/fontello.svg */ "./icons/arrows_previos_next/font/fontello.svg");
/* harmony import */ var _icons_arrows_previos_next_font_fontello_ttf__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/icons/arrows_previos_next/font/fontello.ttf */ "./icons/arrows_previos_next/font/fontello.ttf");
/* harmony import */ var _icons_arrows_previos_next_font_fontello_woff__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/icons/arrows_previos_next/font/fontello.woff */ "./icons/arrows_previos_next/font/fontello.woff");
/* harmony import */ var _icons_arrows_previos_next_font_fontello_woff2__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/icons/arrows_previos_next/font/fontello.woff2 */ "./icons/arrows_previos_next/font/fontello.woff2");


























/***/ }),

/***/ "./styles/registration_page.css":
/*!**************************************!*\
  !*** ./styles/registration_page.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./styles/registration_page.scss":
/*!***************************************!*\
  !*** ./styles/registration_page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!************************************************************!*\
  !*** multi @babel/polyfill ./scripts/registration_page.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! @babel/polyfill */"../node_modules/@babel/polyfill/lib/index.js");
module.exports = __webpack_require__(/*! ./scripts/registration_page.js */"./scripts/registration_page.js");


/***/ })

/******/ });