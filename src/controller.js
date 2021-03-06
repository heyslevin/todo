function controller(model) {
	function getTaskInfo(index) {
		var taskViewModel = {
			index: index,
			title: document.querySelector("#title").value,
			description: document.querySelector("#description").value,
			dueDate: document.querySelector("#dueDate").value,
			priority: document.querySelector("#priority").value,
			project: model.getProject(),
		};

		model.addTask(taskViewModel);
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

	function deleteTask(e) {
		//Gets Card index value
		var index = e.target.closest(".card").dataset.index;
		model.todos.splice(index, 1);
	}

	function editTask(e) {
		//Gets Card index value
		var index = e.target.closest(".card").dataset.index;
		var card = e.target.closest(".card");
		var currentindex = model.todos[index];

		return {
			index,
			card,
			currentindex,
		};
	}

	return {
		getTaskInfo,
		projectArray,
		addProjectInfo,
		getProjectInfo,
		getProjectLi,
		setProject,
		getTodos,
		getTotalTodos,
		deleteTask,
		editTask,
	};
}

export default controller;
