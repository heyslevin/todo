import model from "./model";

function view(controller) {
  //Project Selection
  // const urgent = document.querySelector("#urgent");
  // urgent.addEventListener("click",function(e){ controller.setProject(e,urgent.innerHTML) } );

  //Selectors Projects

  //Fix here. Add a delete project button, not available for View All or Inbox or Urgent

  const projectButton = document.querySelector("#newProject");
  projectButton.addEventListener("click", function () {
    newProject();
  });

  const deleteProjectButton = document.querySelector("#deleteProject");
  deleteProjectButton.addEventListener("click", function () {
    deleteCurrentProject(renderAllProjects);
  });

  //function to capture input data
  async function newProject() {
    let project = await controller.addProjectInfo();
    renderIndividualProject(project);
    eventProject();
  }

  //delete Project
  async function deleteCurrentProject(render) {
    await controller.deleteCurrentProject(render);

    renderAllProjects();
    eventProject();
  }

  function eventProject() {
    let liList = controller.projectArray();

    liList.forEach((li) => {
      li.addEventListener("click", function (e) {
        setProjectView(e);
      });
    });
  }

  function setProjectView(e) {
    controller.setProject(e);
    renderTask();
  }

  function renderAllProjects() {
    console.log("rendering projects");

    //Clear Projects
    clearProjects();
    //Get Projects
    let projects = controller.getProjects();
    console.log("rendering these projects: " + projects);
    // let filteredProjects = projects.filter((project) => {
    //   if (
    //     project === "Inbox" ||
    //     project === "Urgent" ||
    //     project === "View All"
    //   ) {
    //     return false;
    //   } else {
    //     return true;
    //   }
    // });
    console.log("filteredProjects is = ");
    console.log(filteredProjects);
    //for each project, render project
    projects.forEach((project) => {
      console.log("now filtering project: " + project);
      renderIndividualProject(project);
    });

    //Next, make a special case for View All
  }

  function clearProjects() {
    while (myProjects.firstChild) {
      myProjects.removeChild(myProjects.lastChild);
    }
  }

  function renderIndividualProject(project) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const a = document.createElement("a");

    a.href = "#!";
    a.classList.add("collection-item", "grey-text");
    a.dataset.val = project;

    span.classList.add("badge", "new", "indigo", "darken-4", "white-text");

    //Sets badge count
    span.innerHTML = controller.getTodoLength(project);

    a.innerHTML = project;

    a.append(span);
    li.append(a);

    myProjects.appendChild(li);
  }

  function updateCount(i) {
    let currentProject = controller.getProjectLi();

    let totalCount = controller.getTotalTodos().length;

    currentProject.children[0].innerHTML = i;

    viewAll.children[0].innerHTML = totalCount;
  }

  //Selectors

  const container = document.querySelector("#cardzone");
  const button = document.querySelector("#new-task-button");

  const myProjects = document.querySelector(".loadedProjects");
  const divider = document.querySelector("#divider");
  const viewAll = document.querySelector("#view-all");

  button.addEventListener("click", generatecard);

  function generatecard() {
    let input = `
				<div class="card grey lighten-2" id="inputcard">

					<div class="card-content">

						<span class="card-title">
							<div class="input-field cal-container">
					          <input placeholder="Enter Title" id="title" type="text" class="validate">
					          <label for="title">Task Title</label>
					        </div>
							<label class="float-right">
							<input type="checkbox" checked="checked" class="filled-in checkbox-white ">
							<span></span>
							</label>
						</span>

					    <label for="description">Description</label>
						<input placeholder="Enter Description" id="description" type="text" class="validate">

					</div>

					<div class="card-action right-align flexcard">

						<div class="cal-container"> 					
							<label for="duedate">Due date</label>
							<input placeholder="select date" type="text" class="datepicker" id="dueDate">
						</div>	

						<div class="cal-container"> 

							  <div class="input-field">

							    <select id="priority">
							      <option value="" disabled selected>Choose your option</option>
							      <option value="Low">Low</option>
							      <option value="Medium">Medium</option>
							      <option value="High">High</option>
							    </select>

							    <label>Priority</label>

							  </div>

						</div>

						<div>

						<a href="" onclick="return false;" class="btn btn-large" id="save-button">Save</a>
	
						</div>

					</div>

				</div>		

		`;

    //Append Card to Container

    container.insertAdjacentHTML("afterBegin", input);

    //Materialize
    M.AutoInit(document.getElementById("inputcard"));

    //Selectors
    const savebutton = document.querySelector("#save-button");

    //Event Listeners
    savebutton.addEventListener("click", saveTask);
  }

  function editCard(e) {
    let selectedTodo = controller.editTask(e);

    let todo = selectedTodo.currentindex;
    let currentCard = selectedTodo.card;
    let currentIndex = selectedTodo.index;

    let input = `
				<div class="card grey lighten-2" id="inputcard">

					<div class="card-content">

						<span class="card-title">
							<div class="input-field cal-container">
					          <input placeholder="Enter Title" id="title" type="text" class="validate" value="${todo.title}">
					          <label for="title">Task Title</label>
					        </div>
							<label class="float-right">
							<input type="checkbox" checked="checked" class="filled-in checkbox-white ">
							<span></span>
							</label>
						</span>

					    <label for="description">Description</label>
						<input placeholder="Enter Description" id="description" type="text" class="validate" value="${todo.description}">

					</div>

					<div class="card-action right-align flexcard">

						<div class="cal-container"> 					
							<label for="duedate">Due date</label>
							<input placeholder="select date" type="text" class="datepicker" id="dueDate" value="${todo.dueDate}"">
						</div>	

						<div class="cal-container"> 

							  <div class="input-field">

							    <select id="priority">
							      <option value="" disabled selected>${todo.priority}</option>
							      <option value="Low">Low</option>
							      <option value="Medium">Medium</option>
							      <option value="High">High</option>
							    </select>

							    <label>Priority</label>

							  </div>

						</div>

						<div>

						<a href="" onclick="return false;" class="btn btn-large" id="save-button" data-index=${currentIndex}>Save</a>
	
						</div>

					</div>

				</div>		

		`;

    //Append Card to Container

    currentCard.innerHTML = input;

    //Materialize
    M.AutoInit(document.getElementById("inputcard"));

    //Selectors
    const savebutton = document.querySelector("#save-button");

    //Event Listeners
    savebutton.addEventListener("click", saveEditedTask);
  }

  function clearTasks() {
    const inputcard = document.querySelector("#cardzone");

    while (inputcard.firstChild) {
      inputcard.removeChild(inputcard.lastChild);
    }
  }

  function saveTask(e) {
    controller.getTaskInfo(renderTask);
  }

  function saveEditedTask(e) {
    let index = e.target.dataset.index;
    controller.getTaskInfo(renderTask, index);
    //Pass project to render task for filtering
  }

  function startDeleteTask(e) {
    controller.deleteTask(e, renderTask);
    // renderTask();
  }

  function renderTask(filter) {
    //Clean up board
    clearTasks();

    //Get all tasks from Model

    if (filter === undefined) {
      filter = "Inbox";
    } else {
      filter;
    }

    var tasks = controller.getTodos(filter);

    //Task Count
    let i = 0;
    console.log("rendering");
    tasks.forEach((task) => {
      i += 1;

      var taskHtml = `
					<div class="card grey lighten-2" data-index=${task.index}>

						<div class="card-content">

							<span class="card-title">${task.title}
								<label class="float-right">
								<input type="checkbox" checked="checked" class="filled-in checkbox-white ">
								<span></span>
								</label>
							</span>
							
							<p>${task.description}</p>

						</div>

						<div class="card-action right-align flexcard">

							<div class="cal-container"> 					
								    <label>Date</label>
								    <p>${task.dueDate}</p>
							</div>	

							<div class="cal-container"> 
								    <label>Priority</label>
								    <p>${task.priority}</p>
							</div>

							<div class="options">
								<a href="" onclick="return false;" class="btn grey" id="edit">Edit</a>
								<a href="" onclick="return false;" class="btn grey" id="delete">Delete</a>

							</div>

						</div>

					</div>

				
				`;

      container.insertAdjacentHTML("beforeend", taskHtml);

      //Update Project Count
      // updateCount(i);

      //Selector Delete Button
      var deleteButtons = document.querySelectorAll("#delete");
      deleteButtons.forEach(function (button) {
        button.addEventListener("click", startDeleteTask);
      });

      //Selector Edit Button
      var editButtons = document.querySelectorAll("#edit");
      editButtons.forEach(function (button) {
        button.addEventListener("click", editCard);
      });
    });
  }

  //Initialize
  const initialLoad = async function () {
    //gets tasks
    await controller.fetchTodos(renderTask);
    //gets projects
    initialLoadProjects(renderAllProjects);
  };

  const initialLoadProjects = async function () {
    await controller.fetchProjects(renderAllProjects);
    controller.setProject();
    eventProject();
  };

  initialLoad();

  return {
    generatecard,
    renderTask,
  };
}

export default view;
