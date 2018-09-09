module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(9);


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_stringConstant__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_stringConstant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config_stringConstant__);




var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "section"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "m-b-150"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "is-main-title m-b-20"
  }, "Hi, I\u2019m a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "highlight"
  }, "Visual & Brand Designer"), " focused on user interface and experience design."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "is-main-title"
  }, "Take a look around, drop me ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "is-black-link is-bold"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", null, "a line")), ", check my Linked", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/zoraidasalcedo",
    className: "is-black-link is-aileron-bold",
    target: "_black"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", null, "in")), " or download my ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "is-black-link is-bold"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", null, "CV")), ".")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "columns is-multiline"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column is-half"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    className: "effect-sadie"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/assets/img/Home-ThinkTelic-Image.jpg",
    alt: "Home-ThinkTelic-Image"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "highlight"
  }, "Think Telic"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Brand Identity & UX/UI Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "View more"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column is-half"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    "class": "effect-sadie"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/assets/img/Home-Hernandez2-Image.jpg",
    alt: "Home-ThinkTelic-Image"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "highlight"
  }, "Hernandez2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "Personal Brand & UX/UI Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "View more"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column is-half"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    className: "effect-sadie"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/assets/img/Home-Skills-Image.jpg",
    alt: "Home-ThinkTelic-Image"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "highlight"
  }, "Skills Creative Studios"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "UX/UI Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "View more"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column is-half"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    className: "effect-sadie"
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/assets/img/Home-ThinkTelic-Image.jpg",
    alt: "Home-ThinkTelic-Image"
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", null, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "highlight"
  }, "Identities & Designs"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", null, "A collection of various design projects"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#"
  }, "View more")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  //DEFAULT
  "APP_NAME": "Think Telic",
  "APP_DESCRIPTION": "",
  //CONTACT TABLE CONSTANTS
  "COMPANY_EMAIL": "hello@thinktelic.com",
  "COMPANY_TELEPHONE": ""
};

/***/ })
/******/ ]);