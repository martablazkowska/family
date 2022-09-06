module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/PageTitle.js":
/*!*********************************!*\
  !*** ./components/PageTitle.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst H2 = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h2`\n  font-size: 2.25rem;\n  transform: translateX(-0.15rem);\n`;\n/* harmony default export */ __webpack_exports__[\"default\"] = (H2);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2VUaXRsZS5qcz8wZDlkIl0sIm5hbWVzIjpbIkgyIiwic3R5bGVkIiwiaDIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsTUFBTUEsRUFBRSxHQUFHQyx3REFBTSxDQUFDQyxFQUFHO0FBQ3JCO0FBQ0E7QUFDQSxDQUhBO0FBS2VGLGlFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdlVGl0bGUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBIMiA9IHN0eWxlZC5oMmBcbiAgZm9udC1zaXplOiAyLjI1cmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTAuMTVyZW0pO1xuYDtcblxuZXhwb3J0IGRlZmF1bHQgSDI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PageTitle.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ \"isomorphic-unfetch\");\n/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_PageTitle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/PageTitle */ \"./components/PageTitle.js\");\nvar _jsxFileName = \"/Users/mblazko-macwro/Source/family/pages/index.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\nconst Index = ({\n  posts\n}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_PageTitle__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }\n}, \"Hello, world.\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }\n}, \"Next.js PWA Boilerplate starts your progressive web app off with a perfect Google Lighthouse score. To see this in action, open this website with Chrome, go to the \\u201CAudits\\u201D tab in dev tools, and click \\u201CRun audit\\u201D.\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }\n}, \"Check out the\", \" \", __jsx(\"a\", {\n  href: \"https://github.com/pingboard/next-pwa-boilerplate\",\n  rel: \"noopener noreferrer\",\n  target: \"_blank\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 7\n  }\n}, \"source code\"), \" \", \"and a more full\", \" \", __jsx(\"a\", {\n  href: \"https://nextter.now.sh\",\n  rel: \"noopener noreferrer\",\n  target: \"_blank\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 7\n  }\n}, \"example\"), \" \", \"for details.\"), __jsx(\"p\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }\n}, \"Also, here is a list of lorem ipsum fetched from an API to prove how performant this app still is while using dynamic data sources:\"), __jsx(\"ul\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }\n}, posts.map(({\n  id,\n  title\n}) => __jsx(\"li\", {\n  key: id,\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 9\n  }\n}, title))));\n\nIndex.getInitialProps = async function () {\n  const fetchPosts = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()(\"https://jsonplaceholder.typicode.com/posts\");\n  const posts = await fetchPosts.json();\n  return {\n    posts\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkluZGV4IiwicG9zdHMiLCJtYXAiLCJpZCIsInRpdGxlIiwiZ2V0SW5pdGlhbFByb3BzIiwiZmV0Y2hQb3N0cyIsImZldGNoIiwianNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxLQUFLLEdBQUcsQ0FBQztFQUFFQztBQUFGLENBQUQsS0FDWixtRUFDRSxNQUFDLDZEQUFEO0VBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0FBQUEsbUJBREYsRUFFRTtFQUFBO0VBQUE7SUFBQTtJQUFBO0lBQUE7RUFBQTtBQUFBLCtPQUZGLEVBT0U7RUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUE7QUFBQSxvQkFDZ0IsR0FEaEIsRUFFRTtFQUNFLElBQUksRUFBQyxtREFEUDtFQUVFLEdBQUcsRUFBQyxxQkFGTjtFQUdFLE1BQU0sRUFBQyxRQUhUO0VBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0FBQUEsaUJBRkYsRUFRTyxHQVJQLHFCQVNrQixHQVRsQixFQVVFO0VBQ0UsSUFBSSxFQUFDLHdCQURQO0VBRUUsR0FBRyxFQUFDLHFCQUZOO0VBR0UsTUFBTSxFQUFDLFFBSFQ7RUFBQTtFQUFBO0lBQUE7SUFBQTtJQUFBO0VBQUE7QUFBQSxhQVZGLEVBZ0JPLEdBaEJQLGlCQVBGLEVBMEJFO0VBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0FBQUEseUlBMUJGLEVBOEJFO0VBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0FBQUEsR0FDR0EsS0FBSyxDQUFDQyxHQUFOLENBQVUsQ0FBQztFQUFFQyxFQUFGO0VBQU1DO0FBQU4sQ0FBRCxLQUNUO0VBQUksR0FBRyxFQUFFRCxFQUFUO0VBQUE7RUFBQTtJQUFBO0lBQUE7SUFBQTtFQUFBO0FBQUEsR0FBY0MsS0FBZCxDQURELENBREgsQ0E5QkYsQ0FERjs7QUF1Q0FKLEtBQUssQ0FBQ0ssZUFBTixHQUF3QixrQkFBaUI7RUFDdkMsTUFBTUMsVUFBVSxHQUFHLE1BQU1DLHlEQUFLLENBQUMsNENBQUQsQ0FBOUI7RUFDQSxNQUFNTixLQUFLLEdBQUcsTUFBTUssVUFBVSxDQUFDRSxJQUFYLEVBQXBCO0VBRUEsT0FBTztJQUNMUDtFQURLLENBQVA7QUFHRCxDQVBEOztBQVNlRCxvRUFBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcbmltcG9ydCBQYWdlVGl0bGUgZnJvbSBcIi4uL2NvbXBvbmVudHMvUGFnZVRpdGxlXCI7XG5cbmNvbnN0IEluZGV4ID0gKHsgcG9zdHMgfSkgPT4gKFxuICA8PlxuICAgIDxQYWdlVGl0bGU+SGVsbG8sIHdvcmxkLjwvUGFnZVRpdGxlPlxuICAgIDxwPlxuICAgICAgTmV4dC5qcyBQV0EgQm9pbGVycGxhdGUgc3RhcnRzIHlvdXIgcHJvZ3Jlc3NpdmUgd2ViIGFwcCBvZmYgd2l0aCBhIHBlcmZlY3RcbiAgICAgIEdvb2dsZSBMaWdodGhvdXNlIHNjb3JlLiBUbyBzZWUgdGhpcyBpbiBhY3Rpb24sIG9wZW4gdGhpcyB3ZWJzaXRlIHdpdGhcbiAgICAgIENocm9tZSwgZ28gdG8gdGhlIOKAnEF1ZGl0c+KAnSB0YWIgaW4gZGV2IHRvb2xzLCBhbmQgY2xpY2sg4oCcUnVuIGF1ZGl04oCdLlxuICAgIDwvcD5cbiAgICA8cD5cbiAgICAgIENoZWNrIG91dCB0aGV7XCIgXCJ9XG4gICAgICA8YVxuICAgICAgICBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Bpbmdib2FyZC9uZXh0LXB3YS1ib2lsZXJwbGF0ZVwiXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgPlxuICAgICAgICBzb3VyY2UgY29kZVxuICAgICAgPC9hPntcIiBcIn1cbiAgICAgIGFuZCBhIG1vcmUgZnVsbHtcIiBcIn1cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9XCJodHRwczovL25leHR0ZXIubm93LnNoXCJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICA+XG4gICAgICAgIGV4YW1wbGVcbiAgICAgIDwvYT57XCIgXCJ9XG4gICAgICBmb3IgZGV0YWlscy5cbiAgICA8L3A+XG4gICAgPHA+XG4gICAgICBBbHNvLCBoZXJlIGlzIGEgbGlzdCBvZiBsb3JlbSBpcHN1bSBmZXRjaGVkIGZyb20gYW4gQVBJIHRvIHByb3ZlIGhvd1xuICAgICAgcGVyZm9ybWFudCB0aGlzIGFwcCBzdGlsbCBpcyB3aGlsZSB1c2luZyBkeW5hbWljIGRhdGEgc291cmNlczpcbiAgICA8L3A+XG4gICAgPHVsPlxuICAgICAge3Bvc3RzLm1hcCgoeyBpZCwgdGl0bGUgfSkgPT4gKFxuICAgICAgICA8bGkga2V5PXtpZH0+e3RpdGxlfTwvbGk+XG4gICAgICApKX1cbiAgICA8L3VsPlxuICA8Lz5cbik7XG5cbkluZGV4LmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uKCkge1xuICBjb25zdCBmZXRjaFBvc3RzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vcG9zdHNcIik7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZmV0Y2hQb3N0cy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwb3N0c1xuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"isomorphic-unfetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIj9lYmI2Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Imlzb21vcnBoaWMtdW5mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///isomorphic-unfetch\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });