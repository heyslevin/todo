function view(controller) {

	//Selectors

	const container = document.querySelector("#cardzone");
	const button = document.querySelector("#new-task-button");

	button.addEventListener("click",generatecard);


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

		container.insertAdjacentHTML("afterBegin",input);	

		//Materialize
		M.AutoInit(document.getElementById("inputcard"));

		//Selectors
		const savebutton = document.querySelector("#save-button");

		//Event Listeners
		savebutton.addEventListener("click",saveTask);

	};

	function editCard(e) {

		let todo = controller.editTask(e).currentindex;
		let currentCard = controller.editTask(e).card;
		let currentindex = controller.editTask(e).index;

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

						<a href="" onclick="return false;" class="btn btn-large" id="save-button">Save</a>
	
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
		savebutton.addEventListener("click", function() { saveEditedTask(currentindex) } );

	};

	function clearTasks() {

		const inputcard = document.querySelector("#cardzone");

		while (inputcard.firstChild) {
			inputcard.removeChild(inputcard.lastChild)
		}
	}

	function saveTask() {
		controller.getTaskInfo();
		renderTask();

	}

	function saveEditedTask(index) {
		controller.getTaskInfo(index);
		renderTask();

	}

	function startDeleteTask(e) {
		controller.deleteTask(e);
		renderTask();
	}

	function renderTask() {	

		//Clean up board
		clearTasks()

		//Get all tasks from Model
		var tasks = controller.getTodos();

		tasks.forEach((task) => {

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

		container.insertAdjacentHTML('beforeend',taskHtml);	

		//Selector Delete Button
		var deleteButtons = document.querySelectorAll("#delete");
		deleteButtons.forEach(
			function(button){
				button.addEventListener("click",startDeleteTask);
			});

	

		//Selector Edit Button
		var editButtons = document.querySelectorAll("#edit");
		editButtons.forEach(
			function(button){
				button.addEventListener("click",editCard);
			});


		});

	}

	return {
		generatecard,
		renderTask
	}



};

export default view;