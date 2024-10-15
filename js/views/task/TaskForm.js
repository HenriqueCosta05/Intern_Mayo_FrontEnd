import { Form } from "../../components/Form";
import { FetchService } from "../../services/fetch.service";

export class TaskForm{
    constructor() {
        this.fetchService = FetchService;
    }
    
    formFields = [
        'title',
        'description',
        'status',
    ]
    render() {
        return `
                ${new Form().render(this.formFields)}
        `;
    }
}