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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/stringConstant.js":
/***/ (function(module, exports) {

module.exports = {
  //DEFAULT
  "APP_NAME": "Think Telic",
  "APP_DESCRIPTION": "",
  //CONTACT TABLE CONSTANTS
  "COMPANY_EMAIL": "hello@thinktelic.com",
  "COMPANY_TELEPHONE": ""
};

/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_stringConstant__ = __webpack_require__("./config/stringConstant.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_stringConstant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config_stringConstant__);
var _jsxFileName = "D:\\My Documents\\Web Proyects\\ZS-Porfolio\\baseapp\\pages\\index.js";




var Index = function Index() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
    className: "section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
    className: "m-b-150",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "is-main-title m-b-20",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, "Hi, I\u2019m a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "Visual & Brand Designer"), " focused on user interface and experience design."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
    className: "is-main-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Take a look around, drop me ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "is-black-link is-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "a line")), ", check my Linked", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/zoraidasalcedo",
    className: "is-black-link is-aileron-bold",
    target: "_black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "in")), " or download my ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    className: "is-black-link is-bold",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "CV")), ".")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "columns is-multiline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column is-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    className: "effect-sadie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/assets/img/Home-ThinkTelic-Image.jpg",
    alt: "Home-ThinkTelic-Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, "Think Telic"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, "Brand Identity & UX/UI Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "/project/think-telic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, "View more"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column is-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    "class": "effect-sadie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/assets/img/Home-Hernandez2-Image.jpg",
    alt: "Home-ThinkTelic-Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Hernandez2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Personal Brand & UX/UI Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "View more"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column is-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    className: "effect-sadie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/assets/img/Home-Skills-Image.jpg",
    alt: "Home-ThinkTelic-Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  }, "Skills Creative Studios"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    }
  }, "UX/UI Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    }
  }, "View more"))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "column is-half",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "grid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
    className: "effect-sadie",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
    src: "/static/assets/img/Home-ThinkTelic-Image.jpg",
    alt: "Home-ThinkTelic-Image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
    className: "highlight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    }
  }, "Identities & Designs"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    }
  }, "A collection of various design projects"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    }
  }, "View more")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map