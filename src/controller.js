function controller(model) {
  //Fix here, separte things for editing tasks
  function getTaskInfo(render, index) {
    var taskViewModel = {
      index: index,
      title: document.querySelector("#title").value,
      description: document.querySelector("#description").value,
      dueDate: document.querySelector("#dueDate").value,
      priority: document.querySelector("#priority").value,
      project: model.getProject(),
    };
    model.addTask(taskViewModel, render);
  }

  function addProjectInfo() {
    var projectInput = document.querySelector("#projectInput");
    var project = document.querySelector("#projectInput").value;

    model.addProject(project);
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
    return model.getAllProjects();
  }

  function projectArray() {
    let liList = document.querySelectorAll("a.collection-item");
    return [...liList];
  }

  function setProject(e) {
    let inbox = document.querySelector("#inbox");
    let val;
    let liCurrent;

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

    model.setProject(val, liCurrent);
  }

  function getTodos() {
    return model.getTodos();
  }

  function getTotalTodos() {
    return model.getTotalTodos();
  }

  function deleteTask(e, renderCallBack) {
    //Gets Card index value
    var index = e.target.closest(".card").dataset.index;
    // model.todos.splice(index, 1);
    //NEXT HERE: Integrate model.deleteOnFirebase, and then update todos array
    model.deleteOnFirebase(index, renderCallBack);
  }

  function editTask(e) {
    //Gets Card index value
    var index = e.target.closest(".card").dataset.index;
    var card = e.target.closest(".card");
    let todoArray = model.getTotalTodos();
    var currentindex = todoArray[index];
    console.log(currentindex);

    return {
      index,
      card,
      currentindex,
    };
  }

  function fetchTodos(renderCallBack) {
    model.fetchTodos(renderCallBack);
  }

  function fetchProjects(renderCallback) {
    model.fetchProjects(renderCallback);
  }

  return {
    getTaskInfo,
    projectArray,
    addProjectInfo,
    getProjectInfo,
    getProjectLi,
    getProjects,
    setProject,
    getTodos,
    getTotalTodos,
    deleteTask,
    editTask,
    fetchTodos,
    fetchProjects,
  };
}

export default controller;
