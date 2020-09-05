function todoModule() {
	//Selectors

	const container = document.querySelector("#cardzone");
	const button = document.querySelector("#new-task-button");

	button.addEventListener("click", generatecard);

	function generatecard() {
		let cardinfo = `
				<div class="card grey lighten-2" id="cardjs">

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

		container.insertAdjacentHTML("beforeend", cardinfo);

		M.AutoInit(document.getElementById("cardjs"));

		//Button Actions

		//Save
		const savebutton = document.querySelector("#save-button");
		savebutton.addEventListener("click", createTask);
	}

	function alertone() {
		alert("button works");
	}

	//Factory Function

	const NewTask = (title, description, dueDate, priority) => {
		const taskHtml = `
					<div class="card grey lighten-2">

						<div class="card-content">

							<span class="card-title">${title}
								<label class="float-right">
								<input type="checkbox" checked="checked" class="filled-in checkbox-white ">
								<span></span>
								</label>
							</span>
							
							<p>${description}</p>

						</div>

						<div class="card-action right-align flexcard">

							<div class="cal-container"> 					
								    <label>Date</label>
								    <p>${dueDate}</p>
							</div>	

							<div class="cal-container"> 
								    <label>Priority</label>
								    <p>${priority}</p>
							</div>

							<div class="options">
								<a href="" onclick="return false;" class="btn grey id="edit">Edit</a>
								<a href="" onclick="return false;" class="btn grey" id="delete">Delete</a>

							</div>

						</div>

					</div>

				
				`;

		return {
			taskHtml,
			title,
			description,
			dueDate,
			priority,
		};
	};

	function removeElement(elementId) {
		let element = document.querySelector(elementId);
		element.parentNode.removeChild(element);
	}

	function createTask() {
		const title = document.querySelector("#title").value;
		const description = document.querySelector("#description").value;
		const dueDate = document.querySelector("#dueDate").value;
		const priority = document.querySelector("#priority").value;

		// Create task
		const generateTask = NewTask(title, description, dueDate, priority);

		// Append it
		container.insertAdjacentHTML("beforeend", generateTask.taskHtml);

		// Delete Template
		removeElement("#cardjs");
	}

	function deleteTask() {
		document.body.removeChild(this.parentNode);
	}

	function editTask() {
		alertone();
	}
}

export default todoModule;
