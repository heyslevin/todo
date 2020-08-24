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

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction controller(model) {\n  function getTaskInfo(index) {\n    var taskViewModel = {\n      index: index,\n      title: document.querySelector(\"#title\").value,\n      description: document.querySelector(\"#description\").value,\n      dueDate: document.querySelector(\"#dueDate\").value,\n      priority: document.querySelector(\"#priority\").value\n    };\n    model.addTask(taskViewModel);\n  }\n\n  function getTodos() {\n    return model.todos;\n  }\n\n  function deleteTask(e) {\n    //Gets Card index value\n    var index = e.target.closest(\".card\").dataset.index;\n    model.todos.splice(index, 1);\n  }\n\n  function editTask(e) {\n    //Gets Card index value\n    var index = e.target.closest(\".card\").dataset.index;\n    var card = e.target.closest(\".card\");\n    var currentindex = model.todos[index];\n    return {\n      index: index,\n      card: card,\n      currentindex: currentindex\n    };\n  }\n\n  return {\n    getTaskInfo: getTaskInfo,\n    getTodos: getTodos,\n    deleteTask: deleteTask,\n    editTask: editTask\n  };\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _view_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./view.js */ \"./src/view.js\");\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\n\n //Instatiate\n\nvar model = Object(_model_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nvar controller = Object(_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(model);\nvar view = Object(_view_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(controller); //Materialize\n\nM.AutoInit();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar model = function model() {\n  var todos = [// {\n    // \tindex: 0,\n    // \ttitle: \"Do Laundry\",\n    // \tdescription: \"Clean black and white clothes\",\n    // \tdueDate: \"Aug 24, 2020\",\n    // \tpriority: \"High\"\n    // },\t\t\n    // {\n    // \tindex: 1,\n    // \ttitle: \"Buy pet food\",\n    // \tdescription: \"The 11kg bag from Costco\",\n    // \tdueDate: \"Aug 25, 2020\",\n    // \tpriority: \"Low\"\n    // },\n  ];\n\n  var addTask = function addTask(task) {\n    if (task.index === undefined) {\n      newTask(task);\n    } else {\n      editTask(task);\n    }\n  };\n\n  var newTask = function newTask(task) {\n    var todo = {\n      index: todos.length,\n      title: task.title,\n      description: task.description,\n      dueDate: task.dueDate,\n      priority: task.priority\n    }; //todos[index] = todo;\n\n    todos.push(todo);\n    console.log(todos);\n  };\n\n  var editTask = function editTask(task) {\n    var todo = {\n      index: task.index,\n      title: task.title,\n      description: task.description,\n      dueDate: task.dueDate,\n      priority: task.priority\n    }; //todos[index] = todo;\n\n    todos[todo.index] = todo;\n    console.log(todos);\n  };\n\n  return {\n    todos: todos,\n    addTask: addTask,\n    newTask: newTask,\n    editTask: editTask\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (model);\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction view(controller) {\n  //Selectors\n  var container = document.querySelector(\"#cardzone\");\n  var button = document.querySelector(\"#new-task-button\");\n  button.addEventListener(\"click\", generatecard);\n\n  function generatecard() {\n    var input = \"\\n\\t\\t\\t\\t<div class=\\\"card grey lighten-2\\\" id=\\\"inputcard\\\">\\n\\n\\t\\t\\t\\t\\t<div class=\\\"card-content\\\">\\n\\n\\t\\t\\t\\t\\t\\t<span class=\\\"card-title\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"input-field cal-container\\\">\\n\\t\\t\\t\\t\\t          <input placeholder=\\\"Enter Title\\\" id=\\\"title\\\" type=\\\"text\\\" class=\\\"validate\\\">\\n\\t\\t\\t\\t\\t          <label for=\\\"title\\\">Task Title</label>\\n\\t\\t\\t\\t\\t        </div>\\n\\t\\t\\t\\t\\t\\t\\t<label class=\\\"float-right\\\">\\n\\t\\t\\t\\t\\t\\t\\t<input type=\\\"checkbox\\\" checked=\\\"checked\\\" class=\\\"filled-in checkbox-white \\\">\\n\\t\\t\\t\\t\\t\\t\\t<span></span>\\n\\t\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t\\t</span>\\n\\n\\t\\t\\t\\t\\t    <label for=\\\"description\\\">Description</label>\\n\\t\\t\\t\\t\\t\\t<input placeholder=\\\"Enter Description\\\" id=\\\"description\\\" type=\\\"text\\\" class=\\\"validate\\\">\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\\"card-action right-align flexcard\\\">\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t<label for=\\\"duedate\\\">Due date</label>\\n\\t\\t\\t\\t\\t\\t\\t<input placeholder=\\\"select date\\\" type=\\\"text\\\" class=\\\"datepicker\\\" id=\\\"dueDate\\\">\\n\\t\\t\\t\\t\\t\\t</div>\\t\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\n\\n\\t\\t\\t\\t\\t\\t\\t  <div class=\\\"input-field\\\">\\n\\n\\t\\t\\t\\t\\t\\t\\t    <select id=\\\"priority\\\">\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"\\\" disabled selected>Choose your option</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"Low\\\">Low</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"Medium\\\">Medium</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"High\\\">High</option>\\n\\t\\t\\t\\t\\t\\t\\t    </select>\\n\\n\\t\\t\\t\\t\\t\\t\\t    <label>Priority</label>\\n\\n\\t\\t\\t\\t\\t\\t\\t  </div>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div>\\n\\n\\t\\t\\t\\t\\t\\t<a href=\\\"\\\" onclick=\\\"return false;\\\" class=\\\"btn btn-large\\\" id=\\\"save-button\\\">Save</a>\\n\\t\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t</div>\\t\\t\\n\\n\\t\\t\"; //Append Card to Container\n\n    container.insertAdjacentHTML(\"afterBegin\", input); //Materialize\n\n    M.AutoInit(document.getElementById(\"inputcard\")); //Selectors\n\n    var savebutton = document.querySelector(\"#save-button\"); //Event Listeners\n\n    savebutton.addEventListener(\"click\", saveTask);\n  }\n\n  ;\n\n  function editCard(e) {\n    var todo = controller.editTask(e).currentindex;\n    var currentCard = controller.editTask(e).card;\n    var currentindex = controller.editTask(e).index;\n    var input = \"\\n\\t\\t\\t\\t<div class=\\\"card grey lighten-2\\\" id=\\\"inputcard\\\">\\n\\n\\t\\t\\t\\t\\t<div class=\\\"card-content\\\">\\n\\n\\t\\t\\t\\t\\t\\t<span class=\\\"card-title\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"input-field cal-container\\\">\\n\\t\\t\\t\\t\\t          <input placeholder=\\\"Enter Title\\\" id=\\\"title\\\" type=\\\"text\\\" class=\\\"validate\\\" value=\\\"\".concat(todo.title, \"\\\">\\n\\t\\t\\t\\t\\t          <label for=\\\"title\\\">Task Title</label>\\n\\t\\t\\t\\t\\t        </div>\\n\\t\\t\\t\\t\\t\\t\\t<label class=\\\"float-right\\\">\\n\\t\\t\\t\\t\\t\\t\\t<input type=\\\"checkbox\\\" checked=\\\"checked\\\" class=\\\"filled-in checkbox-white \\\">\\n\\t\\t\\t\\t\\t\\t\\t<span></span>\\n\\t\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t\\t</span>\\n\\n\\t\\t\\t\\t\\t    <label for=\\\"description\\\">Description</label>\\n\\t\\t\\t\\t\\t\\t<input placeholder=\\\"Enter Description\\\" id=\\\"description\\\" type=\\\"text\\\" class=\\\"validate\\\" value=\\\"\").concat(todo.description, \"\\\">\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\\"card-action right-align flexcard\\\">\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t<label for=\\\"duedate\\\">Due date</label>\\n\\t\\t\\t\\t\\t\\t\\t<input placeholder=\\\"select date\\\" type=\\\"text\\\" class=\\\"datepicker\\\" id=\\\"dueDate\\\" value=\\\"\").concat(todo.dueDate, \"\\\"\\\">\\n\\t\\t\\t\\t\\t\\t</div>\\t\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\n\\n\\t\\t\\t\\t\\t\\t\\t  <div class=\\\"input-field\\\">\\n\\n\\t\\t\\t\\t\\t\\t\\t    <select id=\\\"priority\\\">\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"\\\" disabled selected>\").concat(todo.priority, \"</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"Low\\\">Low</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"Medium\\\">Medium</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"High\\\">High</option>\\n\\t\\t\\t\\t\\t\\t\\t    </select>\\n\\n\\t\\t\\t\\t\\t\\t\\t    <label>Priority</label>\\n\\n\\t\\t\\t\\t\\t\\t\\t  </div>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div>\\n\\n\\t\\t\\t\\t\\t\\t<a href=\\\"\\\" onclick=\\\"return false;\\\" class=\\\"btn btn-large\\\" id=\\\"save-button\\\">Save</a>\\n\\t\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t</div>\\t\\t\\n\\n\\t\\t\"); //Append Card to Container\n\n    currentCard.innerHTML = input; //Materialize\n\n    M.AutoInit(document.getElementById(\"inputcard\")); //Selectors\n\n    var savebutton = document.querySelector(\"#save-button\"); //Event Listeners\n\n    savebutton.addEventListener(\"click\", function () {\n      saveEditedTask(currentindex);\n    });\n  }\n\n  ;\n\n  function clearTasks() {\n    var inputcard = document.querySelector(\"#cardzone\");\n\n    while (inputcard.firstChild) {\n      inputcard.removeChild(inputcard.lastChild);\n    }\n  }\n\n  function saveTask() {\n    controller.getTaskInfo();\n    renderTask();\n  }\n\n  function saveEditedTask(index) {\n    controller.getTaskInfo(index);\n    renderTask();\n  }\n\n  function startDeleteTask(e) {\n    controller.deleteTask(e);\n    renderTask();\n  }\n\n  function renderTask() {\n    //Clean up board\n    clearTasks(); //Get all tasks from Model\n\n    var tasks = controller.getTodos();\n    tasks.forEach(function (task) {\n      var taskHtml = \"\\n\\t\\t\\t\\t\\t<div class=\\\"card grey lighten-2\\\" data-index=\".concat(task.index, \">\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"card-content\\\">\\n\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\\"card-title\\\">\").concat(task.title, \"\\n\\t\\t\\t\\t\\t\\t\\t\\t<label class=\\\"float-right\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<input type=\\\"checkbox\\\" checked=\\\"checked\\\" class=\\\"filled-in checkbox-white \\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span></span>\\n\\t\\t\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t<p>\").concat(task.description, \"</p>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"card-action right-align flexcard\\\">\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t    <label>Date</label>\\n\\t\\t\\t\\t\\t\\t\\t\\t    <p>\").concat(task.dueDate, \"</p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\t\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\n\\t\\t\\t\\t\\t\\t\\t\\t    <label>Priority</label>\\n\\t\\t\\t\\t\\t\\t\\t\\t    <p>\").concat(task.priority, \"</p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"options\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\\"\\\" onclick=\\\"return false;\\\" class=\\\"btn grey\\\" id=\\\"edit\\\">Edit</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\\"\\\" onclick=\\\"return false;\\\" class=\\\"btn grey\\\" id=\\\"delete\\\">Delete</a>\\n\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t\");\n      container.insertAdjacentHTML('beforeend', taskHtml); //Selector Delete Button\n\n      var deleteButtons = document.querySelectorAll(\"#delete\");\n      deleteButtons.forEach(function (button) {\n        button.addEventListener(\"click\", startDeleteTask);\n      }); //Selector Edit Button\n\n      var editButtons = document.querySelectorAll(\"#edit\");\n      editButtons.forEach(function (button) {\n        button.addEventListener(\"click\", editCard);\n      });\n    });\n  }\n\n  return {\n    generatecard: generatecard,\n    renderTask: renderTask\n  };\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (view);\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });