import { CarsController } from "./Controllers/CarsController.js"
import {HousesController} from "./Controllers/HousesController.js"
class App {

  // constructor(){
  //   this.carsController = new CarsController()
  // }

  carsController = new CarsController()
  HousesController = new HousesController()
}

const app = new App();

window["app"] = app