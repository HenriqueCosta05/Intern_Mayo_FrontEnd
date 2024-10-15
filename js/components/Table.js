import { FetchService } from "../services/fetch.service.js";

export class Table {
  constructor(fetchService) {
    this.fetchService = FetchService;
  }

  render() {
    return `
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Título</th>
                    <th scope="col">Descrição</th>
                    <th scope="col">Status</th>
                    <th scope="col">Ações</th>
                </tr>
            </thead>
            <tbody>
                    ${this.renderTableBody()}
            </tbody>
        </table>
        `;
    }
    
    renderTableBody() {
        const tasks = this.fetchService.get("/tasks");
        let tableBody = "";
        tasks.forEach(task => {
            tableBody += `
                <th scope="row">${task.id}</th>
                <td>${task.title}</td>
                <td>${task.description}</td>
                <td>${task.status}</td>
                <td>
                    <button type="button" class="btn btn-primary">Editar</button>
                    <button type="button" class="btn btn-danger">Excluir</button>
                </td>
            `;
        });
        if(!tasks.length) {
            tableBody = `
                <tr>
                    <td colspan="5">Nenhuma tarefa encontrada</td>
                </tr>
            `;
        }
        return tableBody;
    }
}
