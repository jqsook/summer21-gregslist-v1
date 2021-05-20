import { CarsController } from "./Controllers/CarsController.js";
import { HousesController } from "./Controllers/HousesController.js";
import { JobsController } from "./Controllers/JobsController.js";



class App {

  carsController = new CarsController()
  HousesController = new HousesController()
  JobsController = new JobsController()
}

const app = new App();

window["app"] = app

