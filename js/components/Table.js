import { FetchService } from "../services/fetch.service.js";

export class Table {
  static async renderTableBody() {
    let tableBody = '';
    const tasks = await new FetchService().get('/task');
    if (tasks.length > 0) {
      tableBody = tasks.map(task => `
        <tr>
          <td>${task.id}</td>
          <td>${task.title}</td>
          <td>${task.description}</td>
          <td>${task.status}</td>
          <td>
            <button class="btn btn-primary">Edit</button>
            <button class="btn btn-danger">Delete</button>
          </td>
        </tr>
      `).join('');
    } else {
      tableBody = `
        <tr>
          <td colspan="5">Nenhuma tarefa encontrada</td>
        </tr>
      `;
    }
    return tableBody;
  }

  static async render() {
    const tableBody = await this.renderTableBody();
    const tableHtml = `
      <table class="table w-75 my-6 mx-auto">
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
          ${tableBody}
        </tbody>
      </table>
    `;
    return tableHtml;
  }
}