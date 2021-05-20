import { ProxyState } from "../Appstate.js";
import { Job } from "../Models/Job.js";

class JobsService{
    addJob(formData) {
        let newJob = new Job(formData.title, formData.pay, formData.hours, formData.duty, formData.img)
        ProxyState.jobs.unshift(newJob)
    }
}

export const jobsService = new JobsService()