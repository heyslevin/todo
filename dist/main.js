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
eval("__webpack_require__.r(__webpack_exports__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction controller(model) {\n  function getTaskInfo(index) {\n    var taskViewModel = {\n      index: index,\n      title: document.querySelector(\"#title\").value,\n      description: document.querySelector(\"#description\").value,\n      dueDate: document.querySelector(\"#dueDate\").value,\n      priority: document.querySelector(\"#priority\").value,\n      project: model.getProject()\n    };\n    model.addTask(taskViewModel);\n  }\n\n  function addProjectInfo() {\n    var projectInput = document.querySelector(\"#projectInput\");\n    var project = document.querySelector(\"#projectInput\").value;\n    model.addProject(project);\n    projectInput.value = \"\";\n    return project;\n  }\n\n  function getProjectInfo() {\n    return model.getProject();\n  }\n\n  function getProjectLi() {\n    return model.getProjectLi();\n  }\n\n  function projectArray() {\n    var liList = document.querySelectorAll(\"a.collection-item\");\n    return _toConsumableArray(liList);\n  }\n\n  function setProject(e) {\n    var inbox = document.querySelector(\"#inbox\");\n    var val;\n    var liCurrent;\n\n    if (e === undefined) {\n      val = inbox.dataset.val;\n      liCurrent = inbox;\n    } else {\n      val = e.target.dataset.val;\n      liCurrent = e.target;\n    }\n\n    var liArray = projectArray();\n    liArray.forEach(function (li) {\n      li.classList.remove(\"grey-text\");\n      li.classList.add(\"grey-text\");\n    });\n    liCurrent.classList.toggle(\"grey-text\");\n    model.setProject(val, liCurrent);\n  }\n\n  function getTodos() {\n    return model.getTodos();\n  }\n\n  function getTotalTodos() {\n    return model.getTotalTodos();\n  }\n\n  function deleteTask(e) {\n    //Gets Card index value\n    var index = e.target.closest(\".card\").dataset.index;\n    model.todos.splice(index, 1);\n  }\n\n  function editTask(e) {\n    //Gets Card index value\n    var index = e.target.closest(\".card\").dataset.index;\n    var card = e.target.closest(\".card\");\n    var currentindex = model.todos[index];\n    return {\n      index: index,\n      card: card,\n      currentindex: currentindex\n    };\n  }\n\n  return {\n    getTaskInfo: getTaskInfo,\n    projectArray: projectArray,\n    addProjectInfo: addProjectInfo,\n    getProjectInfo: getProjectInfo,\n    getProjectLi: getProjectLi,\n    setProject: setProject,\n    getTodos: getTodos,\n    getTotalTodos: getTotalTodos,\n    deleteTask: deleteTask,\n    editTask: editTask\n  };\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (controller);\n\n//# sourceURL=webpack:///./src/controller.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\nvar model = function model() {\n  var todos = [];\n  var filteredTodos = [];\n  var projects = [\"Inbox\", \"Urgent\", \"View All\"]; //Managing Projecs\n\n  var current = \"Inbox\";\n  var currentE;\n\n  var addProject = function addProject(val) {\n    projects.push(val);\n  };\n\n  var setProject = function setProject(val, liCurrent) {\n    current = val;\n    currentE = liCurrent;\n  };\n\n  var getProject = function getProject() {\n    return current;\n  };\n\n  var getProjectLi = function getProjectLi() {\n    return currentE;\n  };\n\n  var addTask = function addTask(task) {\n    if (task.index === undefined) {\n      newTask(task);\n    } else {\n      editTask(task);\n    }\n  };\n\n  var getTotalTodos = function getTotalTodos() {\n    return todos;\n  };\n\n  var getTodos = function getTodos() {\n    if (current === \"View All\") {\n      current = \"Inbox\";\n      return todos;\n    } else {\n      var filtered = todos.filter(function (todo) {\n        return todo.project === current;\n      });\n      return filtered;\n    }\n  }; //Managing tasks\n\n\n  var newTask = function newTask(task) {\n    var todo = {\n      index: todos.length,\n      project: task.project,\n      title: task.title,\n      description: task.description,\n      dueDate: task.dueDate,\n      priority: task.priority\n    }; //todos[index] = todo;\n\n    todos.push(todo);\n  };\n\n  var editTask = function editTask(task) {\n    var todo = {\n      index: task.index,\n      title: task.title,\n      description: task.description,\n      dueDate: task.dueDate,\n      priority: task.priority,\n      project: task.project\n    }; //todos[index] = todo;\n\n    todos[todo.index] = todo;\n  };\n\n  return {\n    todos: todos,\n    addTask: addTask,\n    newTask: newTask,\n    editTask: editTask,\n    projects: projects,\n    getProject: getProject,\n    getProjectLi: getProjectLi,\n    setProject: setProject,\n    addProject: addProject,\n    getTodos: getTodos,\n    getTotalTodos: getTotalTodos\n  };\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (model);\n\n//# sourceURL=webpack:///./src/model.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction view(controller) {\n  //Project Selection\n  // const urgent = document.querySelector(\"#urgent\");\n  // urgent.addEventListener(\"click\",function(e){ controller.setProject(e,urgent.innerHTML) } );\n  //Selectors Projects\n  var projectButton = document.querySelector(\"#newProject\");\n  projectButton.addEventListener(\"click\", function () {\n    newProject();\n  }); //function to capture input data\n\n  function newProject() {\n    var project = controller.addProjectInfo();\n    createProject(project);\n    eventProject();\n  } //\n\n\n  function eventProject() {\n    var liList = controller.projectArray();\n    liList.forEach(function (li) {\n      li.addEventListener(\"click\", function (e) {\n        setProjectView(e);\n      });\n    });\n  }\n\n  function setProjectView(e) {\n    controller.setProject(e);\n    renderTask();\n  }\n\n  controller.setProject();\n  eventProject();\n\n  function createProject(project) {\n    var li = document.createElement(\"li\");\n    var span = document.createElement(\"span\");\n    var a = document.createElement(\"a\");\n    a.href = \"#!\";\n    a.classList.add(\"collection-item\", \"grey-text\");\n    a.dataset.val = project;\n    span.classList.add(\"badge\", \"new\", \"indigo\", \"darken-4\", \"white-text\");\n    span.innerHTML = \"0\";\n    a.innerHTML = project;\n    a.append(span);\n    li.append(a);\n    myProjects.insertBefore(li, divider);\n  }\n\n  ;\n\n  function updateCount(i) {\n    var currentProject = controller.getProjectLi();\n    var totalCount = controller.getTotalTodos().length;\n    console.log(totalCount);\n    console.log(controller.getTotalTodos());\n    currentProject.children[0].innerHTML = i;\n    viewAll.children[0].innerHTML = totalCount;\n  } //Selectors\n\n\n  var container = document.querySelector(\"#cardzone\");\n  var button = document.querySelector(\"#new-task-button\");\n  var myProjects = document.querySelector(\"#slide-out\");\n  var divider = document.querySelector(\"#divider\");\n  var viewAll = document.querySelector(\"#view-all\");\n  button.addEventListener(\"click\", generatecard);\n\n  function generatecard() {\n    var input = \"\\n\\t\\t\\t\\t<div class=\\\"card grey lighten-2\\\" id=\\\"inputcard\\\">\\n\\n\\t\\t\\t\\t\\t<div class=\\\"card-content\\\">\\n\\n\\t\\t\\t\\t\\t\\t<span class=\\\"card-title\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"input-field cal-container\\\">\\n\\t\\t\\t\\t\\t          <input placeholder=\\\"Enter Title\\\" id=\\\"title\\\" type=\\\"text\\\" class=\\\"validate\\\">\\n\\t\\t\\t\\t\\t          <label for=\\\"title\\\">Task Title</label>\\n\\t\\t\\t\\t\\t        </div>\\n\\t\\t\\t\\t\\t\\t\\t<label class=\\\"float-right\\\">\\n\\t\\t\\t\\t\\t\\t\\t<input type=\\\"checkbox\\\" checked=\\\"checked\\\" class=\\\"filled-in checkbox-white \\\">\\n\\t\\t\\t\\t\\t\\t\\t<span></span>\\n\\t\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t\\t</span>\\n\\n\\t\\t\\t\\t\\t    <label for=\\\"description\\\">Description</label>\\n\\t\\t\\t\\t\\t\\t<input placeholder=\\\"Enter Description\\\" id=\\\"description\\\" type=\\\"text\\\" class=\\\"validate\\\">\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\\"card-action right-align flexcard\\\">\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t<label for=\\\"duedate\\\">Due date</label>\\n\\t\\t\\t\\t\\t\\t\\t<input placeholder=\\\"select date\\\" type=\\\"text\\\" class=\\\"datepicker\\\" id=\\\"dueDate\\\">\\n\\t\\t\\t\\t\\t\\t</div>\\t\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\n\\n\\t\\t\\t\\t\\t\\t\\t  <div class=\\\"input-field\\\">\\n\\n\\t\\t\\t\\t\\t\\t\\t    <select id=\\\"priority\\\">\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"\\\" disabled selected>Choose your option</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"Low\\\">Low</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"Medium\\\">Medium</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"High\\\">High</option>\\n\\t\\t\\t\\t\\t\\t\\t    </select>\\n\\n\\t\\t\\t\\t\\t\\t\\t    <label>Priority</label>\\n\\n\\t\\t\\t\\t\\t\\t\\t  </div>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div>\\n\\n\\t\\t\\t\\t\\t\\t<a href=\\\"\\\" onclick=\\\"return false;\\\" class=\\\"btn btn-large\\\" id=\\\"save-button\\\">Save</a>\\n\\t\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t</div>\\t\\t\\n\\n\\t\\t\"; //Append Card to Container\n\n    container.insertAdjacentHTML(\"afterBegin\", input); //Materialize\n\n    M.AutoInit(document.getElementById(\"inputcard\")); //Selectors\n\n    var savebutton = document.querySelector(\"#save-button\"); //Event Listeners\n\n    savebutton.addEventListener(\"click\", saveTask);\n  }\n\n  ;\n\n  function editCard(e) {\n    var todo = controller.editTask(e).currentindex;\n    var currentCard = controller.editTask(e).card;\n    var currentindex = controller.editTask(e).index;\n    var input = \"\\n\\t\\t\\t\\t<div class=\\\"card grey lighten-2\\\" id=\\\"inputcard\\\">\\n\\n\\t\\t\\t\\t\\t<div class=\\\"card-content\\\">\\n\\n\\t\\t\\t\\t\\t\\t<span class=\\\"card-title\\\">\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"input-field cal-container\\\">\\n\\t\\t\\t\\t\\t          <input placeholder=\\\"Enter Title\\\" id=\\\"title\\\" type=\\\"text\\\" class=\\\"validate\\\" value=\\\"\".concat(todo.title, \"\\\">\\n\\t\\t\\t\\t\\t          <label for=\\\"title\\\">Task Title</label>\\n\\t\\t\\t\\t\\t        </div>\\n\\t\\t\\t\\t\\t\\t\\t<label class=\\\"float-right\\\">\\n\\t\\t\\t\\t\\t\\t\\t<input type=\\\"checkbox\\\" checked=\\\"checked\\\" class=\\\"filled-in checkbox-white \\\">\\n\\t\\t\\t\\t\\t\\t\\t<span></span>\\n\\t\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t\\t</span>\\n\\n\\t\\t\\t\\t\\t    <label for=\\\"description\\\">Description</label>\\n\\t\\t\\t\\t\\t\\t<input placeholder=\\\"Enter Description\\\" id=\\\"description\\\" type=\\\"text\\\" class=\\\"validate\\\" value=\\\"\").concat(todo.description, \"\\\">\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t<div class=\\\"card-action right-align flexcard\\\">\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t<label for=\\\"duedate\\\">Due date</label>\\n\\t\\t\\t\\t\\t\\t\\t<input placeholder=\\\"select date\\\" type=\\\"text\\\" class=\\\"datepicker\\\" id=\\\"dueDate\\\" value=\\\"\").concat(todo.dueDate, \"\\\"\\\">\\n\\t\\t\\t\\t\\t\\t</div>\\t\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\n\\n\\t\\t\\t\\t\\t\\t\\t  <div class=\\\"input-field\\\">\\n\\n\\t\\t\\t\\t\\t\\t\\t    <select id=\\\"priority\\\">\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"\\\" disabled selected>\").concat(todo.priority, \"</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"Low\\\">Low</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"Medium\\\">Medium</option>\\n\\t\\t\\t\\t\\t\\t\\t      <option value=\\\"High\\\">High</option>\\n\\t\\t\\t\\t\\t\\t\\t    </select>\\n\\n\\t\\t\\t\\t\\t\\t\\t    <label>Priority</label>\\n\\n\\t\\t\\t\\t\\t\\t\\t  </div>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div>\\n\\n\\t\\t\\t\\t\\t\\t<a href=\\\"\\\" onclick=\\\"return false;\\\" class=\\\"btn btn-large\\\" id=\\\"save-button\\\">Save</a>\\n\\t\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t</div>\\t\\t\\n\\n\\t\\t\"); //Append Card to Container\n\n    currentCard.innerHTML = input; //Materialize\n\n    M.AutoInit(document.getElementById(\"inputcard\")); //Selectors\n\n    var savebutton = document.querySelector(\"#save-button\"); //Event Listeners\n\n    savebutton.addEventListener(\"click\", function () {\n      saveEditedTask(currentindex);\n    });\n  }\n\n  ;\n\n  function clearTasks() {\n    var inputcard = document.querySelector(\"#cardzone\");\n\n    while (inputcard.firstChild) {\n      inputcard.removeChild(inputcard.lastChild);\n    }\n  }\n\n  function saveTask() {\n    controller.getTaskInfo();\n    renderTask();\n  }\n\n  function saveEditedTask(index) {\n    controller.getTaskInfo(index);\n    renderTask(); //Pass project to render task for filtering\n  }\n\n  function startDeleteTask(e) {\n    controller.deleteTask(e);\n    renderTask();\n  }\n\n  function renderTask(filter) {\n    //Clean up board\n    clearTasks(); //Get all tasks from Model\n\n    if (filter === undefined) {\n      filter = \"Inbox\";\n    } else {\n      filter;\n    }\n\n    var tasks = controller.getTodos(filter); //Task Count\n\n    var i = 0;\n    tasks.forEach(function (task) {\n      i += 1;\n      var taskHtml = \"\\n\\t\\t\\t\\t\\t<div class=\\\"card grey lighten-2\\\" data-index=\".concat(task.index, \">\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"card-content\\\">\\n\\n\\t\\t\\t\\t\\t\\t\\t<span class=\\\"card-title\\\">\").concat(task.title, \"\\n\\t\\t\\t\\t\\t\\t\\t\\t<label class=\\\"float-right\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<input type=\\\"checkbox\\\" checked=\\\"checked\\\" class=\\\"filled-in checkbox-white \\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<span></span>\\n\\t\\t\\t\\t\\t\\t\\t\\t</label>\\n\\t\\t\\t\\t\\t\\t\\t</span>\\n\\t\\t\\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t<p>\").concat(task.description, \"</p>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t<div class=\\\"card-action right-align flexcard\\\">\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\t\\t\\t\\t\\t\\n\\t\\t\\t\\t\\t\\t\\t\\t    <label>Date</label>\\n\\t\\t\\t\\t\\t\\t\\t\\t    <p>\").concat(task.dueDate, \"</p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\t\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"cal-container\\\"> \\n\\t\\t\\t\\t\\t\\t\\t\\t    <label>Priority</label>\\n\\t\\t\\t\\t\\t\\t\\t\\t    <p>\").concat(task.priority, \"</p>\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t\\t<div class=\\\"options\\\">\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\\"\\\" onclick=\\\"return false;\\\" class=\\\"btn grey\\\" id=\\\"edit\\\">Edit</a>\\n\\t\\t\\t\\t\\t\\t\\t\\t<a href=\\\"\\\" onclick=\\\"return false;\\\" class=\\\"btn grey\\\" id=\\\"delete\\\">Delete</a>\\n\\n\\t\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\t</div>\\n\\n\\t\\t\\t\\t\\n\\t\\t\\t\\t\");\n      container.insertAdjacentHTML('beforeend', taskHtml); //Update Project Count\n\n      updateCount(i); //Selector Delete Button\n\n      var deleteButtons = document.querySelectorAll(\"#delete\");\n      deleteButtons.forEach(function (button) {\n        button.addEventListener(\"click\", startDeleteTask);\n      }); //Selector Edit Button\n\n      var editButtons = document.querySelectorAll(\"#edit\");\n      editButtons.forEach(function (button) {\n        button.addEventListener(\"click\", editCard);\n      });\n    });\n  }\n\n  return {\n    generatecard: generatecard,\n    renderTask: renderTask\n  };\n}\n\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (view);\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });