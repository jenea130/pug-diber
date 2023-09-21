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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/src/main.js":
/*!***********************************!*\
  !*** ./src/assets/js/src/main.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/header/toggleMenu */ \"./src/assets/js/src/modules/header/toggleMenu.js\");\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n    console.log(\"some thing for me\");\r\n    Object(_modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tYWluLmpzP2UxZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFxRDs7QUFFckQ7QUFDQTtBQUNBLElBQUksMEVBQVU7QUFDZCxDQUFDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9qcy9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0b2dnbGVNZW51IGZyb20gXCIuL21vZHVsZXMvaGVhZGVyL3RvZ2dsZU1lbnVcIjtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInNvbWUgdGhpbmcgZm9yIG1lXCIpO1xyXG4gICAgdG9nZ2xlTWVudSgpO1xyXG59KTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/src/main.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/header/toggleMenu.js":
/*!********************************************************!*\
  !*** ./src/assets/js/src/modules/header/toggleMenu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleMenu; });\nfunction toggleMenu() {\n\tconst mainMenu = document.querySelector(\"#js-main-menu\");\n\tconst sandwichWrap = document.querySelector(\"#js-sandwich-wrap\");\n\tconst menu_links = document.querySelectorAll(\".main-header__menu a\");\n\tconst pathname = window.location.pathname;\n\n\tmenu_links.forEach(function (link) {\n\t\tconst href = link.getAttribute(\"href\");\n\t\tconst link_pathname = href;\n\t\tif (link_pathname === pathname) {\n\t\t\tlink.classList.add(\"active\");\n\t\t}\n\t});\n\n\tsandwichWrap.addEventListener(\"mousedown\", function (e) {\n\t\te.preventDefault();\n\n\t\tif (mainMenu.classList.contains(\"fixed\")) {\n\t\t\tmainMenu.classList.remove(\"fixed\");\n\t\t} else {\n\t\t\tmainMenu.classList.add(\"fixed\");\n\t\t}\n\t\tsandwichWrap.classList.toggle(\"sandwich--active\");\n\t});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2hlYWRlci90b2dnbGVNZW51LmpzPzE4MzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9qcy9zcmMvbW9kdWxlcy9oZWFkZXIvdG9nZ2xlTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG5cdGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1tYWluLW1lbnVcIik7XG5cdGNvbnN0IHNhbmR3aWNoV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtc2FuZHdpY2gtd3JhcFwiKTtcblx0Y29uc3QgbWVudV9saW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1oZWFkZXJfX21lbnUgYVwiKTtcblx0Y29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cblx0bWVudV9saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XG5cdFx0Y29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRjb25zdCBsaW5rX3BhdGhuYW1lID0gaHJlZjtcblx0XHRpZiAobGlua19wYXRobmFtZSA9PT0gcGF0aG5hbWUpIHtcblx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdHNhbmR3aWNoV3JhcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKG1haW5NZW51LmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkXCIpKSB7XG5cdFx0XHRtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1haW5NZW51LmNsYXNzTGlzdC5hZGQoXCJmaXhlZFwiKTtcblx0XHR9XG5cdFx0c2FuZHdpY2hXcmFwLmNsYXNzTGlzdC50b2dnbGUoXCJzYW5kd2ljaC0tYWN0aXZlXCIpO1xuXHR9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/header/toggleMenu.js\n");

/***/ })

/******/ });