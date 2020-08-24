var model = function() {

	var todos = [
		// {
		// 	index: 0,
		// 	title: "Do Laundry",
		// 	description: "Clean black and white clothes",
		// 	dueDate: "Aug 24, 2020",
		// 	priority: "High"

		// },		

		// {
		// 	index: 1,
		// 	title: "Buy pet food",
		// 	description: "The 11kg bag from Costco",
		// 	dueDate: "Aug 25, 2020",
		// 	priority: "Low"

		// },
	]


	var addTask = (task) => {

		if (task.index === undefined) {
			newTask(task);
		} else {
			editTask(task);
		}
	
	};

	var newTask = (task) => {
		const todo = {
			index: todos.length,
			title: task.title,
			description: task.description,
			dueDate: task.dueDate,
			priority: task.priority
		}

		//todos[index] = todo;
		todos.push(todo);
		console.log(todos);

	}

	var editTask = (task) => {

	const todo = {
		index: task.index,
		title: task.title,
		description: task.description,
		dueDate: task.dueDate,
		priority: task.priority
	}

	//todos[index] = todo;
	todos[todo.index] = todo;
	console.log(todos);

};





	return {
		todos,
		addTask,
		newTask,
		editTask
	}
 };

export default model;