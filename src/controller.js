function controller(model) {
  //Fix here, separte things for editing tasks
  async function getTaskInfo(render, index) {
    var taskViewModel = {
      index: index,
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      dueDate: document.querySelector("#dueDate").value,
      priority: document.querySelector("#priority").value,
      project: model.getProject(),
    };
    await model.addTask(taskViewModel, render);
    return taskViewModel.project;
  }

  async function addProjectInfo() {
    var project = document.querySelector("#projectInput").value;
    var projectInput = document.querySelector("#projectInput");

    await model.addProject(project);
    projectInput.value = "";

    return project;
  }

  function getProjectInfo() {
    return model.getProject();
  }

  function getProjectLi() {
    return model.getProjectLi();
  }

  function getProjects() {
    //fix here, has to fetch projects first
    return model.getAllProjects();
  }

  function projectArray() {
    let liList = document.querySelectorAll("a.collection-item");
    return [...liList];
  }

  function setProject(e) {
    let inbox = document.querySelector('[data-val="Inbox"]');
    let val;
    let liCurrent;
    console.log("e is " + e);

    if (e === undefined) {
      val = inbox.dataset.val;
      liCurrent = inbox;
    } else {
      val = e.target.dataset.val;
      liCurrent = e.target;
    }

    let liArray = projectArray();

    liArray.forEach((li) => {
      li.classList.remove("grey-text");
      li.classList.add("grey-text");
    });

    liCurrent.classList.toggle("grey-text");

    console.log("gonna add " + val + liCurrent);
    model.setProject(val, liCurrent);
  }

  async function deleteCurrentProject(render) {
    await model.deleteCurrentProject();
  }

  function getTodos() {
    return model.getTodos();
  }

  function getTotalTodos() {
    return model.getTotalTodos();
  }

  function getTodoLength(project) {
    return model.getTodoLength(project);
  }

  async function deleteTask(e, renderCallBack) {
    //Gets Card index value
    var index = e.target.closest(".card").dataset.index;
    // model.todos.splice(index, 1);
    await model.deleteOnFirebase(index, renderCallBack);
  }

  function editTask(e) {
    //Gets Card index value
    var index = e.target.closest(".card").dataset.index;
    var card = e.target.closest(".card");
    let todoArray = model.getTotalTodos();
    var currentindex = todoArray[index];

    return {
      index,
      card,
      currentindex,
    };
  }

  async function fetchTodos(renderCallBack) {
    await model.fetchTodos(renderCallBack);
  }

  async function fetchProjects(renderCallback) {
    await model.fetchProjects(renderCallback);
  }

  return {
    getTaskInfo,
    projectArray,
    addProjectInfo,
    deleteCurrentProject,
    getProjectInfo,
    getProjectLi,
    getProjects,
    setProject,
    getTodos,
    getTotalTodos,
    getTodoLength,
    deleteTask,
    editTask,
    fetchTodos,
    fetchProjects,
  };
}

export default controller;
