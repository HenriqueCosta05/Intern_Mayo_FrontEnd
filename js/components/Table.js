export class Table {
  constructor(fetchService) {
    this.fetchService = fetchService;
  }

  render() {
    const app = document.getElementById("app");
    const table = document.createElement("section");
    app.appendChild(table);

    // HTMLs
    
      let tableHtml = `
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
                <tr>
                    ${this.renderTableBody()}
                   </tr>
                   </tbody>
        </table>
        `;
    table.innerHTML = tableHtml;
    }
    
    renderTableBody() {
        const tasks = this.fetchService.getTasks();
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
        return tableBody;
    }
}
