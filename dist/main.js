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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todoModule_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoModule.js */ \"./src/todoModule.js\");\n\nM.AutoInit();\nObject(_todoModule_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/todoModule.js":
/*!***************************!*\
  !*** ./src/todoModule.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction todoModule() {\n\n\t//Selectors\n\n\tconst container = document.querySelector(\"#cardzone\");\n\tconst button = document.querySelector(\"#new-task-button\");\n\n\tbutton.addEventListener(\"click\",generatecard);\n\n\n\tfunction generatecard() {\n\t\tlet cardinfo = `\n\t\t\t\t<div class=\"card grey lighten-2\" id=\"cardjs\">\n\n\t\t\t\t\t<div class=\"card-content\">\n\n\t\t\t\t\t\t<span class=\"card-title\">\n\t\t\t\t\t\t\t<div class=\"input-field cal-container\">\n\t\t\t\t\t          <input placeholder=\"Enter Title\" id=\"title\" type=\"text\" class=\"validate\">\n\t\t\t\t\t          <label for=\"title\">Task Title</label>\n\t\t\t\t\t        </div>\n\t\t\t\t\t\t\t<label class=\"float-right\">\n\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" class=\"filled-in checkbox-white \">\n\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t</span>\n\n\t\t\t\t\t    <label for=\"description\">Description</label>\n\t\t\t\t\t\t<input placeholder=\"Enter Description\" id=\"description\" type=\"text\" class=\"validate\">\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"card-action right-align flexcard\">\n\n\t\t\t\t\t\t<div class=\"cal-container\"> \t\t\t\t\t\n\t\t\t\t\t\t\t<label for=\"duedate\">Due date</label>\n\t\t\t\t\t\t\t<input placeholder=\"select date\" type=\"text\" class=\"datepicker\" id=\"dueDate\">\n\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t<div class=\"cal-container\"> \n\n\t\t\t\t\t\t\t  <div class=\"input-field\">\n\n\t\t\t\t\t\t\t    <select id=\"priority\">\n\t\t\t\t\t\t\t      <option value=\"\" disabled selected>Choose your option</option>\n\t\t\t\t\t\t\t      <option value=\"Low\">Low</option>\n\t\t\t\t\t\t\t      <option value=\"Medium\">Medium</option>\n\t\t\t\t\t\t\t      <option value=\"High\">High</option>\n\t\t\t\t\t\t\t    </select>\n\n\t\t\t\t\t\t\t    <label>Priority</label>\n\n\t\t\t\t\t\t\t  </div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div>\n\n\t\t\t\t\t\t<a href=\"\" onclick=\"return false;\" class=\"btn btn-large\" id=\"save-button\">Save</a>\n\t\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t</div>\t\t\n\n\t\t`;\n\n\t\tcontainer.insertAdjacentHTML('beforeend',cardinfo);\n\n\n\t\tM.AutoInit(document.getElementById(\"cardjs\"));\n\n\t\tconst savebutton = document.querySelector(\"#save-button\");\n\t\tsavebutton.addEventListener(\"click\",createTask);\n\n\n\t};\n\n\tfunction alertone() {\n\n\t\talert(\"button works\")\n\n\t}\n\n\t//Factory Function\n\n\tconst NewTask = (title,description,dueDate,priority) => {\n\n\t\tconst taskHtml = `\n\t\t\t\t\t<div class=\"card grey lighten-2\">\n\n\t\t\t\t\t\t<div class=\"card-content\">\n\n\t\t\t\t\t\t\t<span class=\"card-title\">${title}\n\t\t\t\t\t\t\t\t<label class=\"float-right\">\n\t\t\t\t\t\t\t\t<input type=\"checkbox\" checked=\"checked\" class=\"filled-in checkbox-white \">\n\t\t\t\t\t\t\t\t<span></span>\n\t\t\t\t\t\t\t\t</label>\n\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<p>${description}</p>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"card-action right-align flexcard\">\n\n\t\t\t\t\t\t\t<div class=\"cal-container\"> \t\t\t\t\t\n\t\t\t\t\t\t\t\t    <label>Date</label>\n\t\t\t\t\t\t\t\t    <p>${dueDate}</p>\n\t\t\t\t\t\t\t</div>\t\n\n\t\t\t\t\t\t\t<div class=\"cal-container\"> \n\t\t\t\t\t\t\t\t    <label>Priority</label>\n\t\t\t\t\t\t\t\t    <p>${priority}</p>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<div class=\"options\">\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn grey\">Edit</a>\n\t\t\t\t\t\t\t\t<a href=\"\" class=\"btn grey\">Delete</a>\n\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\n\t\t\t\t\n\t\t\t\t`;\n\n\t\treturn {\n\t\t\ttaskHtml,\n\t\t\ttitle,\n\t\t\tdescription,\n\t\t\tdueDate,\n\t\t\tpriority\n\t\t}\n\n\n\t};\n\n\n\tfunction createTask() {\n\n\t\t\tconst title = document.querySelector(\"#title\").value;\n\t\t\tconst description = document.querySelector(\"#description\").value;\n\t\t\tconst dueDate = document.querySelector(\"#dueDate\").value;\n\t\t\tconst priority = document.querySelector(\"#priority\").value;\n\n\t\t\tconst generateTask = NewTask(title,description,dueDate,priority);\n\n\t\t\tcontainer.insertAdjacentHTML('beforeend',generateTask.taskHtml);\n\t\t\t\n\n\t};\n\n\n\n\n\n\n\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (todoModule);\n\n//# sourceURL=webpack:///./src/todoModule.js?");

/***/ })

/******/ });