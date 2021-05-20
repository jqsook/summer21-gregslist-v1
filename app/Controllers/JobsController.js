import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

export class JobsController{
    constructor() {
        ProxyState.on('jobs', this.drawJobs)
        this.drawJobs()
    }

    drawJobs() {
        let template = ''
        ProxyState.jobs.forEach(job => {
            template += /*html*/`
            <div class"col-lg-4 listings my-3">
                <div class="card">
                    <div>
                    <img src="${job.img}
                    "height="200"/>
                    </div>
                <div class="card-body">
                <p>
                    <b>Title:${job.title}<br> Pay:${job.pay}</b>
                    </p>
                    <p>
                </div>
            </div>
        </div>
    `
        })
        document.getElementById('listings').innerHTML = template
    }
    addJob(event) {
        event.preventDefault()
        let form = event.target
        let formData = {
            title: form.title.value,
            pay: form.pay.value,
            hours: form.hours.value,
            duty: form.duty.value,
            img: form.img.value
        }
        console.log(formData)
        jobsService.addJob(formData)
        form.reset()
        this.toggleForm()
}
    toggleForm() {
        document.getElementById('job-form').classList.toggle('d-none')
    }

}