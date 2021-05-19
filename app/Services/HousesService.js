import { ProxyState } from "../AppState.js";
import { House } from "../Models/House.js";

class houseService{ //changed this from cap H to lower case h
    addHouse(formData) {
        let newHouse = new House(formData.city, formData.acres, formData.price, formData.rooms, formData.img)
        ProxyState.houses.unshift(newHouse)
    }
}

export const housesService = new houseService()