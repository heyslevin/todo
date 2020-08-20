import View from "./view.js";
import Model from "./model.js"
import Controller from "./controller.js"

//Instatiate
const model = Model();
const controller = Controller(model);
const view = View(controller);




//Materialize
M.AutoInit();

