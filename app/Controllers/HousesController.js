import { ProxyState } from "../AppState";

export class HousesController{
    constructor(){
        ProxyState.on('houses', this.drawHouses)
    }

    drawHouses(){
        
    }
}