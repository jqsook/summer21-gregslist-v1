import { ProxyState } from "../AppState.js";
import { housesService} from "../Services/HousesService.js"

export class HousesController{
    constructor(){
        ProxyState.on('houses', this.drawHouses)
        // this.drawHouses() Ill probalby only have the cars load from the get go then add on-load as needed.
        
    }
    drawHouses() {
        let template = ''
        ProxyState.houses.forEach(house => {
            template += /*html*/`
            <div class="col-lg-4 listings my-3">
                <div class="card">
                    <div>
                        <img src="${house.img}"height="200" />
                    </div>
                <div class="card-body">
                <p>
                    <b>City:${house.city} <br>Acres:${house.acres}</b>
                </p>
                <p>
                    <em>Price: $${house.price}</em>
                </p>
            </div>
        </div>
    </div>
    `
        })
        document.getElementById('listings').innerHTML = template
        
    }
    addHouse(event){
        event.preventDefault()
        console.log(event)
        let form = event.target
        let formData = {
            city: form.city.value,
            acres: form.acres.value,
            price: form.price.value,
            rooms: form.rooms.value,
            img: form.img.value
        }
        console.log(formData)
        housesService.addHouse(formData)
        form.reset()
        this.toggleForm()
    }
    
    toggleForm(){
        document.getElementById('house-form').classList.toggle('d-none')
    }
}