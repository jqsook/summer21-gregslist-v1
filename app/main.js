import { CarsController } from "./Controllers/CarsController.js"
class App {

  // constructor(){
  //   this.carsController = new CarsController()
  // }

  carsController = new CarsController()

}

const app = new App();

window["app"] = app