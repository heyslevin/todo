function controller(model) {

	function getTaskInfo(index) {

		var taskViewModel = {
			index: index,
			title: document.querySelector("#title").value,
			description: document.querySelector("#description").value,
			dueDate: document.querySelector("#dueDate").value,
			priority: document.querySelector("#priority").value
		}

		model.addTask(taskViewModel);
	}

	function getTodos(){
		return model.todos;
	}

	function deleteTask(e){
		//Gets Card index value
		var index = e.target.closest(".card").dataset.index;
		model.todos.splice(index,1);
	}

	function editTask(e){
		//Gets Card index value
		var index = e.target.closest(".card").dataset.index;
		var card = e.target.closest(".card");
		var currentindex = model.todos[index];

		return {
			index,
			card,
			currentindex
		}
	}

	return {
		getTaskInfo,
		getTodos,
		deleteTask,
		editTask
	}

};

export default controller;