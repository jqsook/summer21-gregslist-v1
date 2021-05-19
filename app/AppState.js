import { Car } from "./Models/Car.js"
import{House} from "./Models/House.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"



class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car("TVR", "Sagaris", 1000, "Blue", 50000, "https://cdn.carbuzz.com/gallery-images/840x560/634000/200/634255.jpg")
  ]
  
  /** @type {House[]} */
  houses = [
    new House("Emmett", 150, 5000000, 10, "https://assets.site-static.com/userFiles/685/image/luxury_report_photo.png")
  ]
}
  


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
