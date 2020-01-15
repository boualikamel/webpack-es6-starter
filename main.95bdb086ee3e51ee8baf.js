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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app/components/profile.js":
/*!***************************************!*\
  !*** ./src/app/components/profile.js ***!
  \***************************************/
/*! exports provided: Profile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Profile\", function() { return Profile; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar Profile =\n/*#__PURE__*/\nfunction () {\n  function Profile() {\n    _classCallCheck(this, Profile);\n  }\n\n  _createClass(Profile, [{\n    key: \"loadProfile\",\n    value: function loadProfile() {\n      console.log('Profile component is loaded...');\n    }\n  }]);\n\n  return Profile;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/components/profile.js?");

/***/ }),

/***/ "./src/app/dashboard/dashboard.js":
/*!****************************************!*\
  !*** ./src/app/dashboard/dashboard.js ***!
  \****************************************/
/*! exports provided: Dashboard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Dashboard\", function() { return Dashboard; });\n/* harmony import */ var _layouts_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layouts/header/header */ \"./src/app/layouts/header/header.js\");\n/* harmony import */ var _layouts_main_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/main/main */ \"./src/app/layouts/main/main.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n// From component folder\n// From layout folder\n\n\n\nvar Dashboard =\n/*#__PURE__*/\nfunction () {\n  function Dashboard() {\n    _classCallCheck(this, Dashboard);\n  }\n\n  _createClass(Dashboard, [{\n    key: \"loadDashboard\",\n    value: function loadDashboard() {\n      // Create new instances\n      var header = new _layouts_header_header__WEBPACK_IMPORTED_MODULE_0__[\"Header\"]();\n      var main = new _layouts_main_main__WEBPACK_IMPORTED_MODULE_1__[\"Main\"]();\n      header.loadHeader();\n      main.loadMain();\n      console.log('Dashboard component is loaded');\n    }\n  }]);\n\n  return Dashboard;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/dashboard/dashboard.js?");

/***/ }),

/***/ "./src/app/layouts/header/header.html":
/*!********************************************!*\
  !*** ./src/app/layouts/header/header.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<header>\\r\\n    \\r\\n</header>\";\n\n//# sourceURL=webpack:///./src/app/layouts/header/header.html?");

/***/ }),

/***/ "./src/app/layouts/header/header.js":
/*!******************************************!*\
  !*** ./src/app/layouts/header/header.js ***!
  \******************************************/
/*! exports provided: Header */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Header\", function() { return Header; });\n/* harmony import */ var _components_profile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/profile */ \"./src/app/components/profile.js\");\n/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.html */ \"./src/app/layouts/header/header.html\");\n/* harmony import */ var _header_html__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_html__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar Header =\n/*#__PURE__*/\nfunction () {\n  function Header() {\n    _classCallCheck(this, Header);\n  }\n\n  _createClass(Header, [{\n    key: \"loadHeader\",\n    value: function loadHeader() {\n      // Output loading status\n      console.log(\"HEADer component is loaded...\"); // set the html template\n\n      document.body.insertAdjacentHTML(\"beforeend\", _header_html__WEBPACK_IMPORTED_MODULE_1___default.a); // Create a new instance from profile component\n\n      var profile = new _components_profile__WEBPACK_IMPORTED_MODULE_0__[\"Profile\"](); // Invoke the profile\n\n      profile.loadProfile();\n    }\n  }]);\n\n  return Header;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/layouts/header/header.js?");

/***/ }),

/***/ "./src/app/layouts/main/main.html":
/*!****************************************!*\
  !*** ./src/app/layouts/main/main.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = \"<main>\\r\\n    <img class=\\\"logo\\\" src=\\\"\" + __webpack_require__(/*! ../../../assets/images/logo.png */ \"./src/assets/images/logo.png\") + \"\\\" alt=\\\"logo webpack starter ES6\\\">\\r\\n    <img class=\\\"logo-webpack\\\" src=\\\"\" + __webpack_require__(/*! ../../../assets/images/logo-webpack.png */ \"./src/assets/images/logo-webpack.png\") + \"\\\" alt=\\\" logo webpack webpack-dev-server\\\">\\r\\n</main>\";\n\n//# sourceURL=webpack:///./src/app/layouts/main/main.html?");

/***/ }),

/***/ "./src/app/layouts/main/main.js":
/*!**************************************!*\
  !*** ./src/app/layouts/main/main.js ***!
  \**************************************/
/*! exports provided: Main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Main\", function() { return Main; });\n/* harmony import */ var _main_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.html */ \"./src/app/layouts/main/main.html\");\n/* harmony import */ var _main_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_html__WEBPACK_IMPORTED_MODULE_0__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar Main =\n/*#__PURE__*/\nfunction () {\n  function Main() {\n    _classCallCheck(this, Main);\n  }\n\n  _createClass(Main, [{\n    key: \"loadMain\",\n    value: function loadMain() {\n      // Output loading status\n      console.log('Main component is loaded...'); // Set the HTML template\n\n      document.body.insertAdjacentHTML('beforeend', _main_html__WEBPACK_IMPORTED_MODULE_0___default.a);\n    }\n  }]);\n\n  return Main;\n}();\n\n\n\n//# sourceURL=webpack:///./src/app/layouts/main/main.js?");

/***/ }),

/***/ "./src/assets/images/logo-webpack.png":
/*!********************************************!*\
  !*** ./src/assets/images/logo-webpack.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/logo-webpack.png\";\n\n//# sourceURL=webpack:///./src/assets/images/logo-webpack.png?");

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/images/logo.png\";\n\n//# sourceURL=webpack:///./src/assets/images/logo.png?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/index.scss */ \"./src/index.scss\");\n/* harmony import */ var _src_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_index_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/dashboard/dashboard */ \"./src/app/dashboard/dashboard.js\");\n\n\nvar dashboard = new _app_dashboard_dashboard__WEBPACK_IMPORTED_MODULE_1__[\"Dashboard\"]();\ndashboard.loadDashboard();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/index.scss?");

/***/ })

/******/ });