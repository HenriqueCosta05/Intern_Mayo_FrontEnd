import { FetchService } from "../services/fetch.service.js";

export class Form {
  constructor(fetchService) {
    this.fetchService = FetchService;
  }

  render(fields, buttonText, form) {
    return `
      <form method="${form.method}" action="${form.action}" id=${form.id} class="w-50 d-flex justify-content-center flex-column mx-auto">
        <div class="form-group my-4">
          ${fields.map(field => `
            <label for="${field.name}">${field.name}</label>
            <input type="${field.type}" class="form-control" id="${field.name}" name="${field.name}">
          `).join('')}
        </div>
        <button type="submit" class="btn btn-dark mt-2">${buttonText}</button>
      </form>
    `;
  }
}