var model = function() {

	var todos = [];

	var filteredTodos = [];

	var projects = ["Inbox","Urgent","View All"];


	//Managing Projecs

	var current = "Inbox";

	var addProject = (val) => {
		projects.push(val);
	}


	var setProject = (val) => {
		current = val;
	}

	var getProject = () => {
		return current;
	}

	var addTask = (task) => {

		if (task.index === undefined) {
			newTask(task);
		} else {
			editTask(task);
		}
	
	};

	var getTodos = () => {

		if (current === "View All") {
			current = "Inbox";
			return todos;
		} else {
		
			return todos.filter(todo => {
				return todo.project === current;
			});

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
		console.log(todo);
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
		setProject,
		addProject,
		getTodos
	}
 };

export default model;