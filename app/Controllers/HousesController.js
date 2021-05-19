import { ProxyState } from "../AppState";
import { housesService} from "../Services/HousesService.js"

export class HousesController{
    constructor(){
        ProxyState.on('houses', this.drawHouses)
        
    }

    drawHouses() {
        let template = ''
        ProxyState.houses.forEach(house => {
            template += /*html*/`
            <div class="col-lg-4 hs-list my-3">
                <div class="card">
                    <div>
                        <img src="${house.img}"height="200" />
                    </div>
                <div class="card-body">
                <p>
                    <b>${house.city} ${house.acres}</b>
                </p>
                <p>
                    <em>${house.price}</em>
                </p>
            </div>
        </div>
    </div>
    `
        });
        document.getElementById('hs-list').innerHTML = template
        
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