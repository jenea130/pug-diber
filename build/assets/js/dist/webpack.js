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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_streetMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/streetMap */ \"./src/assets/js/src/modules/streetMap.js\");\n/* harmony import */ var _modules_filterDrinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/filterDrinks */ \"./src/assets/js/src/modules/filterDrinks.js\");\n/* harmony import */ var _modules_filterBeer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/filterBeer */ \"./src/assets/js/src/modules/filterBeer.js\");\n/* harmony import */ var _modules_activePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/activePage */ \"./src/assets/js/src/modules/activePage.js\");\n/* harmony import */ var _modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/header/toggleMenu */ \"./src/assets/js/src/modules/header/toggleMenu.js\");\n/* harmony import */ var _modules_modalContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modalContent */ \"./src/assets/js/src/modules/modalContent.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener(\"DOMContentLoaded\", function () {\r\n  const modal_content = document.querySelector(\"#js-modal-content\");\r\n\r\n  if (modal_content) {\r\n    Object(_modules_modalContent__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n  }\r\n  Object(_modules_activePage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  Object(_modules_header_toggleMenu__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n  Object(_modules_streetMap__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  Object(_modules_filterBeer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  console.log(\"some thing for me\");\r\n  Object(_modules_filterDrinks__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n});\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tYWluLmpzP2UxZjciXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEM7QUFDTTtBQUNKO0FBQ0E7QUFDTztBQUNIOztBQUVsRDtBQUNBOztBQUVBO0FBQ0EsSUFBSSxxRUFBWTtBQUNoQjtBQUNBLEVBQUUsbUVBQVU7QUFDWixFQUFFLDBFQUFVO0FBQ1osRUFBRSxrRUFBUztBQUNYLEVBQUUsbUVBQVU7QUFDWjtBQUNBLEVBQUUscUVBQVk7QUFDZCxDQUFDIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9qcy9zcmMvbWFpbi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHJlZXRNYXAgZnJvbSBcIi4vbW9kdWxlcy9zdHJlZXRNYXBcIjtcclxuaW1wb3J0IGZpbHRlckRyaW5rcyBmcm9tIFwiLi9tb2R1bGVzL2ZpbHRlckRyaW5rc1wiO1xyXG5pbXBvcnQgZmlsdGVyQmVlciBmcm9tIFwiLi9tb2R1bGVzL2ZpbHRlckJlZXJcIjtcclxuaW1wb3J0IGFjdGl2ZVBhZ2UgZnJvbSBcIi4vbW9kdWxlcy9hY3RpdmVQYWdlXCI7XHJcbmltcG9ydCB0b2dnbGVNZW51IGZyb20gXCIuL21vZHVsZXMvaGVhZGVyL3RvZ2dsZU1lbnVcIjtcclxuaW1wb3J0IG1vZGFsQ29udGVudCBmcm9tIFwiLi9tb2R1bGVzL21vZGFsQ29udGVudFwiO1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcclxuICBjb25zdCBtb2RhbF9jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1tb2RhbC1jb250ZW50XCIpO1xyXG5cclxuICBpZiAobW9kYWxfY29udGVudCkge1xyXG4gICAgbW9kYWxDb250ZW50KCk7XHJcbiAgfVxyXG4gIGFjdGl2ZVBhZ2UoKTtcclxuICB0b2dnbGVNZW51KCk7XHJcbiAgc3RyZWV0TWFwKCk7XHJcbiAgZmlsdGVyQmVlcigpO1xyXG4gIGNvbnNvbGUubG9nKFwic29tZSB0aGluZyBmb3IgbWVcIik7XHJcbiAgZmlsdGVyRHJpbmtzKCk7XHJcbn0pO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/js/src/main.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/activePage.js":
/*!*************************************************!*\
  !*** ./src/assets/js/src/modules/activePage.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return activePage; });\nfunction activePage() {\n\n  let activePage = window.location.href;\n  const links = document.querySelectorAll(\".menu__link\");\n\n  \n  links.forEach((link) => {\n    if (link == activePage) {\n      link.classList.add('active');\n    }\n  });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2FjdGl2ZVBhZ2UuanM/NDFmYyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7O0FBRWY7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2FjdGl2ZVBhZ2UuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY3RpdmVQYWdlKCkge1xuXG4gIGxldCBhY3RpdmVQYWdlID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tZW51X19saW5rXCIpO1xuXG4gIFxuICBsaW5rcy5mb3JFYWNoKChsaW5rKSA9PiB7XG4gICAgaWYgKGxpbmsgPT0gYWN0aXZlUGFnZSkge1xuICAgICAgbGluay5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICB9XG4gIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/activePage.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/filterBeer.js":
/*!*************************************************!*\
  !*** ./src/assets/js/src/modules/filterBeer.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return filterBeer; });\nfunction filterBeer() {\n  const filterItemsAll = document.querySelectorAll(\".filter-beer__item\");\n  const filterCategoriesAll = document.querySelectorAll(\"[data-target]\");\n  \n  filterCategoriesAll.forEach( item => {\n    item.onclick = function() {\n\n      // active\n      filterCategoriesAll.forEach(item => {\n        item.classList.remove(\"active\");\n      })\n      item.classList.add(\"active\");\n\n      // filter\n      const value = item.getAttribute('data-target');\n\n      filterItemsAll.forEach( item => {\n        item.style.display = \"none\";\n        if (item.classList.contains(value.toLowerCase())) {\n          item.style.display = \"block\";\n        }\n      })\n    }\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2ZpbHRlckJlZXIuanM/ODM2MyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSCIsImZpbGUiOiIuL3NyYy9hc3NldHMvanMvc3JjL21vZHVsZXMvZmlsdGVyQmVlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlckJlZXIoKSB7XG4gIGNvbnN0IGZpbHRlckl0ZW1zQWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWx0ZXItYmVlcl9faXRlbVwiKTtcbiAgY29uc3QgZmlsdGVyQ2F0ZWdvcmllc0FsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS10YXJnZXRdXCIpO1xuICBcbiAgZmlsdGVyQ2F0ZWdvcmllc0FsbC5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICBpdGVtLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcblxuICAgICAgLy8gYWN0aXZlXG4gICAgICBmaWx0ZXJDYXRlZ29yaWVzQWxsLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgIC8vIGZpbHRlclxuICAgICAgY29uc3QgdmFsdWUgPSBpdGVtLmdldEF0dHJpYnV0ZSgnZGF0YS10YXJnZXQnKTtcblxuICAgICAgZmlsdGVySXRlbXNBbGwuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/filterBeer.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/filterDrinks.js":
/*!***************************************************!*\
  !*** ./src/assets/js/src/modules/filterDrinks.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return filterDrinks; });\nfunction filterDrinks() {\n  const filterItem = document.querySelectorAll(\".filter-drinks__item\");\n  const filterCategory = document.querySelectorAll(\".filter-drinks__category\");\n\n  filterCategory.forEach(item => {\n    item.onclick = function() {\n      \n      // active \n      filterCategory.forEach(item => {\n        item.classList.remove(\"active\");\n      })\n      item.classList.add(\"active\");\n\n      // filter\n      const text = item.textContent;\n      let value = text.split(',')[0];\n    \n      filterItem.forEach(item => {\n        item.style.display = \"none\";\n        if (item.classList.contains(value.toLowerCase())) {\n          item.style.display = \"block\";\n        }\n      })\n    }\n  })\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2ZpbHRlckRyaW5rcy5qcz9mNmM5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0giLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2ZpbHRlckRyaW5rcy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGZpbHRlckRyaW5rcygpIHtcbiAgY29uc3QgZmlsdGVySXRlbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmlsdGVyLWRyaW5rc19faXRlbVwiKTtcbiAgY29uc3QgZmlsdGVyQ2F0ZWdvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpbHRlci1kcmlua3NfX2NhdGVnb3J5XCIpO1xuXG4gIGZpbHRlckNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgICBcbiAgICAgIC8vIGFjdGl2ZSBcbiAgICAgIGZpbHRlckNhdGVnb3J5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICAgIH0pXG4gICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG5cbiAgICAgIC8vIGZpbHRlclxuICAgICAgY29uc3QgdGV4dCA9IGl0ZW0udGV4dENvbnRlbnQ7XG4gICAgICBsZXQgdmFsdWUgPSB0ZXh0LnNwbGl0KCcsJylbMF07XG4gICAgXG4gICAgICBmaWx0ZXJJdGVtLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgIGl0ZW0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnModmFsdWUudG9Mb3dlckNhc2UoKSkpIHtcbiAgICAgICAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/filterDrinks.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/header/toggleMenu.js":
/*!********************************************************!*\
  !*** ./src/assets/js/src/modules/header/toggleMenu.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return toggleMenu; });\nfunction toggleMenu() {\n\tconst mainMenu = document.querySelector(\"#js-main-menu\");\n\tconst sandwichWrap = document.querySelector(\"#js-sandwich-wrap\");\n\tconst menu_links = document.querySelectorAll(\".main-header__menu a\");\n\tconst pathname = window.location.pathname;\n\n\tmenu_links.forEach(function (link) {\n\t\tconst href = link.getAttribute(\"href\");\n\t\tconst link_pathname = href;\n\t\tif (link_pathname === pathname) {\n\t\t\tlink.classList.add(\"active\");\n\t\t}\n\t});\n\n\tsandwichWrap.addEventListener(\"mousedown\", function (e) {\n\t\te.preventDefault();\n\n\t\tif (mainMenu.classList.contains(\"fixed\")) {\n\t\t\tmainMenu.classList.remove(\"fixed\");\n\t\t} else {\n\t\t\tmainMenu.classList.add(\"fixed\");\n\t\t}\n\t\tsandwichWrap.classList.toggle(\"sandwich--active\");\n\t});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL2hlYWRlci90b2dnbGVNZW51LmpzPzE4MzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9qcy9zcmMvbW9kdWxlcy9oZWFkZXIvdG9nZ2xlTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvZ2dsZU1lbnUoKSB7XG5cdGNvbnN0IG1haW5NZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1tYWluLW1lbnVcIik7XG5cdGNvbnN0IHNhbmR3aWNoV3JhcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtc2FuZHdpY2gtd3JhcFwiKTtcblx0Y29uc3QgbWVudV9saW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubWFpbi1oZWFkZXJfX21lbnUgYVwiKTtcblx0Y29uc3QgcGF0aG5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG5cblx0bWVudV9saW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChsaW5rKSB7XG5cdFx0Y29uc3QgaHJlZiA9IGxpbmsuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRjb25zdCBsaW5rX3BhdGhuYW1lID0gaHJlZjtcblx0XHRpZiAobGlua19wYXRobmFtZSA9PT0gcGF0aG5hbWUpIHtcblx0XHRcdGxpbmsuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblx0XHR9XG5cdH0pO1xuXG5cdHNhbmR3aWNoV3JhcC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGZ1bmN0aW9uIChlKSB7XG5cdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG5cdFx0aWYgKG1haW5NZW51LmNsYXNzTGlzdC5jb250YWlucyhcImZpeGVkXCIpKSB7XG5cdFx0XHRtYWluTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwiZml4ZWRcIik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1haW5NZW51LmNsYXNzTGlzdC5hZGQoXCJmaXhlZFwiKTtcblx0XHR9XG5cdFx0c2FuZHdpY2hXcmFwLmNsYXNzTGlzdC50b2dnbGUoXCJzYW5kd2ljaC0tYWN0aXZlXCIpO1xuXHR9KTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/header/toggleMenu.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/modalContent.js":
/*!***************************************************!*\
  !*** ./src/assets/js/src/modules/modalContent.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return modalContent; });\nfunction modalContent() {\n  const modal_content = document.querySelector(\"#js-modal-content\");\n  const btn_yes = document.querySelector(\"#js-btn-yes\");\n  const btn_no = document.querySelector(\"#js-btn-no\");\n  const checkbox = document.querySelector(\"#checkbox\");\n\n  if (!localStorage.getItem(\"modal_content\")) {\n    setTimeout(() => {\n      showPopup();\n    }, 2000);\n  }\n\n  btn_yes.addEventListener(\"click\", function () {\n    if (checkbox.checked) {\n      localStorage.setItem(\"modal_content\", true);\n      closePopup();\n    } else {\n      closePopup();\n    }\n  });\n  btn_no.addEventListener(\"click\", function () {\n    if (checkbox.checked) {\n      goToGoogle();\n    } else {\n      goToGoogle();\n    }\n  });\n\n  function closePopup() {\n    modal_content.classList.remove(\"active\");\n    document.querySelector(\"body\").style.overflow = \"unset\";\n  }\n  function showPopup() {\n    document.querySelector(\"body\").style.overflow = \"hidden\";\n    modal_content.classList.add(\"active\");\n  }\n  function goToGoogle() {\n    window.location.href = \"https://google.com\";\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL21vZGFsQ29udGVudC5qcz81MTQzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL21vZGFsQ29udGVudC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1vZGFsQ29udGVudCgpIHtcbiAgY29uc3QgbW9kYWxfY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtbW9kYWwtY29udGVudFwiKTtcbiAgY29uc3QgYnRuX3llcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjanMtYnRuLXllc1wiKTtcbiAgY29uc3QgYnRuX25vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNqcy1idG4tbm9cIik7XG4gIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaGVja2JveFwiKTtcblxuICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibW9kYWxfY29udGVudFwiKSkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2hvd1BvcHVwKCk7XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBidG5feWVzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibW9kYWxfY29udGVudFwiLCB0cnVlKTtcbiAgICAgIGNsb3NlUG9wdXAoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2xvc2VQb3B1cCgpO1xuICAgIH1cbiAgfSk7XG4gIGJ0bl9uby5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChjaGVja2JveC5jaGVja2VkKSB7XG4gICAgICBnb1RvR29vZ2xlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdvVG9Hb29nbGUoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGNsb3NlUG9wdXAoKSB7XG4gICAgbW9kYWxfY29udGVudC5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlXCIpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLnN0eWxlLm92ZXJmbG93ID0gXCJ1bnNldFwiO1xuICB9XG4gIGZ1bmN0aW9uIHNob3dQb3B1cCgpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKS5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgbW9kYWxfY29udGVudC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICB9XG4gIGZ1bmN0aW9uIGdvVG9Hb29nbGUoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcImh0dHBzOi8vZ29vZ2xlLmNvbVwiO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/modalContent.js\n");

/***/ }),

/***/ "./src/assets/js/src/modules/streetMap.js":
/*!************************************************!*\
  !*** ./src/assets/js/src/modules/streetMap.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return streetMap; });\nfunction streetMap() {\n    const coords = [45.95913107169674, 12.320310668149938];\n    const coords_2 = [46.35054085399973, 11.967401955225618];\n    const addressText = 'Via Trentino 22, 31029 - Vittorio Veneto (TV)';\n\n    let map = L.map('map').setView(coords, 13.5);\n\n    let myIcon = L.icon({\n        iconUrl: 'assets/i/static/map-icon.png',\n        iconSize: [38, 38],\n        iconAnchor: [38, 38],\n        shadowSize: [68, 95],\n        shadowAnchor: [22, 94]\n    });\n\n    L.marker(coords, {icon: myIcon})\n        .bindTooltip(addressText, {\n            direction: 'right',\n            offset: [-10, -30],\n            permanent: false,\n        })\n        .addTo(map);\n    L.marker(coords_2, {icon: myIcon})\n        .bindTooltip(addressText, {\n            direction: 'right',\n            offset: [-10, -30],\n            permanent: false,\n        })\n        .addTo(map);\n\n    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\n        maxZoom: 24,\n        attribution:\n            '&copy; <a href=\"http://www.openstreetmap.org/copyright\">OpenStreetMap</a>',\n    }).addTo(map);\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2pzL3NyYy9tb2R1bGVzL3N0cmVldE1hcC5qcz81ZjNmIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMLHNCQUFzQixhQUFhO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esd0JBQXdCLGFBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUEsMEJBQTBCLEVBQUUseUJBQXlCLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRTtBQUMvRDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CLEtBQUs7QUFDTCIsImZpbGUiOiIuL3NyYy9hc3NldHMvanMvc3JjL21vZHVsZXMvc3RyZWV0TWFwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RyZWV0TWFwKCkge1xuICAgIGNvbnN0IGNvb3JkcyA9IFs0NS45NTkxMzEwNzE2OTY3NCwgMTIuMzIwMzEwNjY4MTQ5OTM4XTtcbiAgICBjb25zdCBjb29yZHNfMiA9IFs0Ni4zNTA1NDA4NTM5OTk3MywgMTEuOTY3NDAxOTU1MjI1NjE4XTtcbiAgICBjb25zdCBhZGRyZXNzVGV4dCA9ICdWaWEgVHJlbnRpbm8gMjIsIDMxMDI5IC0gVml0dG9yaW8gVmVuZXRvIChUViknO1xuXG4gICAgbGV0IG1hcCA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KGNvb3JkcywgMTMuNSk7XG5cbiAgICBsZXQgbXlJY29uID0gTC5pY29uKHtcbiAgICAgICAgaWNvblVybDogJ2Fzc2V0cy9pL3N0YXRpYy9tYXAtaWNvbi5wbmcnLFxuICAgICAgICBpY29uU2l6ZTogWzM4LCAzOF0sXG4gICAgICAgIGljb25BbmNob3I6IFszOCwgMzhdLFxuICAgICAgICBzaGFkb3dTaXplOiBbNjgsIDk1XSxcbiAgICAgICAgc2hhZG93QW5jaG9yOiBbMjIsIDk0XVxuICAgIH0pO1xuXG4gICAgTC5tYXJrZXIoY29vcmRzLCB7aWNvbjogbXlJY29ufSlcbiAgICAgICAgLmJpbmRUb29sdGlwKGFkZHJlc3NUZXh0LCB7XG4gICAgICAgICAgICBkaXJlY3Rpb246ICdyaWdodCcsXG4gICAgICAgICAgICBvZmZzZXQ6IFstMTAsIC0zMF0sXG4gICAgICAgICAgICBwZXJtYW5lbnQ6IGZhbHNlLFxuICAgICAgICB9KVxuICAgICAgICAuYWRkVG8obWFwKTtcbiAgICBMLm1hcmtlcihjb29yZHNfMiwge2ljb246IG15SWNvbn0pXG4gICAgICAgIC5iaW5kVG9vbHRpcChhZGRyZXNzVGV4dCwge1xuICAgICAgICAgICAgZGlyZWN0aW9uOiAncmlnaHQnLFxuICAgICAgICAgICAgb2Zmc2V0OiBbLTEwLCAtMzBdLFxuICAgICAgICAgICAgcGVybWFuZW50OiBmYWxzZSxcbiAgICAgICAgfSlcbiAgICAgICAgLmFkZFRvKG1hcCk7XG5cbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICAgIG1heFpvb206IDI0LFxuICAgICAgICBhdHRyaWJ1dGlvbjpcbiAgICAgICAgICAgICcmY29weTsgPGEgaHJlZj1cImh0dHA6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4nLFxuICAgIH0pLmFkZFRvKG1hcCk7XG59XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/assets/js/src/modules/streetMap.js\n");

/***/ })

/******/ });