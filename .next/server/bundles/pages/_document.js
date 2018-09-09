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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(0);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "next/document"
var document_ = __webpack_require__(4);
var document__default = /*#__PURE__*/__webpack_require__.n(document_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link__default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/NavBar.js



var NavBar_NavBar = function NavBar() {
  return external__react__default.a.createElement("nav", {
    className: "navbar is-transparent"
  }, external__react__default.a.createElement("div", {
    className: "container"
  }, external__react__default.a.createElement("div", {
    className: "navbar-brand"
  }, external__react__default.a.createElement("a", {
    className: "navbar-item",
    href: "https://bulma.io"
  }, external__react__default.a.createElement("figure", {
    className: "image is-64x64"
  }, external__react__default.a.createElement("img", {
    src: "/static/assets/img/svg/ZS-Designer-Logo.svg"
  }))), external__react__default.a.createElement("div", {
    className: "navbar-burger burger",
    "data-target": "navbarToggle"
  }, external__react__default.a.createElement("span", null), external__react__default.a.createElement("span", null), external__react__default.a.createElement("span", null))), external__react__default.a.createElement("div", {
    id: "navbarToggle",
    className: "navbar-menu"
  }, external__react__default.a.createElement("div", {
    className: "navbar-end"
  }, external__react__default.a.createElement("div", {
    className: "navbar-item"
  }, external__react__default.a.createElement(link__default.a, {
    href: "/"
  }, external__react__default.a.createElement("a", {
    className: "navbar-item"
  }, "About")))))));
};

/* harmony default export */ var components_NavBar = (NavBar_NavBar);
// CONCATENATED MODULE: ./components/Footer.js



var Footer_Footer = function Footer() {
  return external__react__default.a.createElement("footer", {
    "class": "footer"
  }, external__react__default.a.createElement("div", {
    "class": "container"
  }, external__react__default.a.createElement("section", {
    className: "section"
  }, external__react__default.a.createElement("div", {
    "class": "columns "
  }, external__react__default.a.createElement("div", {
    "class": "column has-text-left has-text-centered-mobile"
  }, external__react__default.a.createElement("p", null, "Copyright \xA9  2018  Zoraida Salcedo"), external__react__default.a.createElement("p", null, "Terms of Use & Privacy Policy")), external__react__default.a.createElement("div", {
    "class": "column has-text-right has-text-centered-mobile"
  }, "socials")))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// EXTERNAL MODULE: ./resources/sass/styles.scss
var styles = __webpack_require__(5);
var styles_default = /*#__PURE__*/__webpack_require__.n(styles);

// CONCATENATED MODULE: ./pages/_document.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _document_MyDocument; });


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var _document_MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, (MyDocument.__proto__ || Object.getPrototypeOf(MyDocument)).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      return external__react__default.a.createElement("html", null, external__react__default.a.createElement(document_["Head"], null, external__react__default.a.createElement("link", {
        rel: "stylesheet",
        href: "/_next/static/style.css"
      })), external__react__default.a.createElement("body", null, external__react__default.a.createElement(components_NavBar, null), external__react__default.a.createElement("div", {
        className: "container"
      }, external__react__default.a.createElement(document_["Main"], null)), external__react__default.a.createElement(components_Footer, null), external__react__default.a.createElement(document_["NextScript"], null), external__react__default.a.createElement("script", {
        defer: true,
        src: "https://use.fontawesome.com/releases/v5.3.1/js/all.js"
      })));
    }
  }]);

  return MyDocument;
}(document__default.a);



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ })
/******/ ]);