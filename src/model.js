var model = function() {

	var todos = [];

	var filteredTodos = [];

	var projects = ["Inbox","Urgent","View All"];


	//Managing Projecs

	var current = "Inbox";

	var currentE;

	var addProject = (val) => {
		projects.push(val);
	}


	var setProject = (val,liCurrent) => {
		current = val;
		currentE = liCurrent;
	}

	var getProject = () => {
		return current;
	}

	var getProjectLi = () => {
		return currentE;
	}

	var addTask = (task) => {

		if (task.index === undefined) {
			newTask(task);
		} else {
			editTask(task);
		}
	
	};

	var getTotalTodos = () => {
		return todos;
	}

	var getTodos = () => {

		if (current === "View All") {
			current = "Inbox";
			return todos;
		} else {
		
			let filtered = todos.filter(todo => {
				return todo.project === current;
			});

			return filtered;

		}
	}


	//Managing tasks

	var newTask = (task) => {
		const todo = {
			index: todos.length,
			project: task.project,
			title: task.title,
			description: task.description,
			dueDate: task.dueDate,
			priority: task.priority
		}

		//todos[index] = todo;
		todos.push(todo);

	}

	var editTask = (task) => {

	const todo = {
		index: task.index,
		title: task.title,
		description: task.description,
		dueDate: task.dueDate,
		priority: task.priority,
		project: task.project
	}

	//todos[index] = todo;
	todos[todo.index] = todo;

};





	return {
		todos,
		addTask,
		newTask,
		editTask,
		projects,
		getProject,
		getProjectLi,
		setProject,
		addProject,
		getTodos,
		getTotalTodos
	}
 };

export default model;