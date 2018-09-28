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

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard__ = __webpack_require__("clipboard/dist/clipboard");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard__);
var _jsxFileName = "D:\\My Documents\\Web Proyects\\ZS-Porfolio\\baseapp\\pages\\index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }




var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        clipboard: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "activateLasers", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function value() {
        new __WEBPACK_IMPORTED_MODULE_2_clipboard_dist_clipboard___default.a('.clipboard');

        _this.setState({
          clipboard: true
        });

        setTimeout(function () {
          _this.setState({
            clipboard: false
          });
        }, 1000);
      }
    }), _temp));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("section", {
        className: "section",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("header", {
        className: "m-b-150",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "is-main-title m-b-20",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        }
      }, "Hi, I\u2019m a ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, "Visual & Brand Designer"), " focused on user interface and experience design."), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h1", {
        className: "is-main-title",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, "Take a look around, drop me ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
        className: "is-black-link is-bold  clipboard " + (this.state.clipboard ? "is-tooltip-top  tooltip is-tooltip-active" : ""),
        "data-tooltip": "Email copyed to clipboard!",
        onClick: this.activateLasers.bind(this),
        "data-clipboard-text": "zoraida.salcedo@outlook.com",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "a line")), ", check my Linked", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "https://www.linkedin.com/in/zoraidasalcedo",
        className: "is-black-link is-aileron-bold",
        target: "_black",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "in")), " or download my ", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        href: "/static/ZoraidaSalcedo-CV.pdf",
        target: "_blank",
        className: "is-black-link is-bold",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("u", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, "CV")), ".")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "columns is-multiline",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
        className: "effect-sadie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/assets/img/Home-ThinkTelic-Image.jpg",
        alt: "Home-ThinkTelic-Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        }
      }, "Think Telic"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        }
      }, "Brand Identity & UX/UI Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/project/think-telic",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, "View more about Think Telic")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
        className: "effect-sadie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/assets/img/Home-Hernandez2-Image.jpg",
        alt: "Home-ThinkTelic-Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52
        }
      }, "Hernandez2"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
        }
      }, "Personal Brand & UX/UI Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/project/hernandez2",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, "View more about Hernandez2 ")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
        className: "effect-sadie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/assets/img/Home-Skills-Image.jpg",
        alt: "Home-ThinkTelic-Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, "Skills Creative Studios"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, "UX/UI Design"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/project/skills-creative-studios",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      }, "View more about Skills Creative Studios ")))))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "column is-half",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "grid",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figure", {
        className: "effect-sadie",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("img", {
        src: "/static/assets/img/Home-collection.jpeg",
        alt: "Home-ThinkTelic-Image",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("figcaption", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h2", {
        className: "highlight",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, "Identities & Designs"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, "A collection of various design projects"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
        href: "/project/collection-projects",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        }
      }, "View more about Skills Creative Studios "))))))));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "clipboard/dist/clipboard":
/***/ (function(module, exports) {

module.exports = require("clipboard/dist/clipboard");

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