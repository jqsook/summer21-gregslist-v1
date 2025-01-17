import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class HousesService{ 
    addHouse(formData) {
        let newHouse = new House(formData.city, formData.acres, formData.price, formData.rooms, formData.img)
        ProxyState.houses.unshift(newHouse)
    }
}

export const housesService = new HousesService()