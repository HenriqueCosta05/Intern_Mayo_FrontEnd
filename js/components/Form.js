export class Form {
  constructor(fetchService, type) {
    this.fetchService = fetchService;
    this.type = type;
  }

  render() {
    const app = document.getElementById("app");
    const form = document.createElement("section");
    form.innerHTML =
      this.type === "task" ? this.renderTaskForm() : this.renderUserForm();
    app.appendChild(form);
  }

  renderTaskForm() {
    const task = this.fetchService.getTaskById();
    return `
      <form action="${this.fetchService.sendForm()}" method="POST">
        <div class="form-group">
          <label for="title">Título</label>
          <input type="text" class="form-control" id="title" name="title" value="${
            task ? task.title : ""
          }">
        </div>
        <div class="form-group">
          <label for="description">Descrição</label>
          <input type="text" class="form-control" id="description" name="description" value="${
            task ? task.description : ""
          }">
        </div>
        <div class="form-group">
          <label for="status">Status</label>
          <select class="form-control" id="status" name="status">
            <option value="pending" ${
              task && task.status === "pending" ? "selected" : ""
            }>Pending</option>
            <option value="completed" ${
              task && task.status === "completed" ? "selected" : ""
            }>Completed</option>
          </select>
        </div>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </form>
    `;
  }

  renderUserForm() {
    const user = this.fetchService.getUserById();
    return `
      <form action="${this.fetchService.sendForm()}" method="POST">
        <div class="form-group">
          <label for="userName">Nome</label>
          <input type="text" class="form-control" id="userName" name="userName" value="${
            user ? user.name : ""
          }">
        </div>
        <div class="form-group">
          <label for="userEmail">Email</label>
          <input type="email" class="form-control" id="userEmail" name="userEmail" value="${
            user ? user.email : ""
          }">
        </div>
        <div class="form-group">
          <label for="userPassword">Senha</label>
          <input type="password" class="form-control" id="userPassword" name="userPassword">
        </div>
        <button type="submit" class="btn btn-primary">Cadastrar</button>
      </form>
    `;
  }

  renderLoginForm() {
    return `
      <form>
        <div class="form-group">
          <label for="userEmail">Email</label>
          <input type="email" class="form-control" id="userEmail" placeholder="Email do Usuário">
        </div>
        <div class="form-group">
          <label for="userPassword">Senha</label>
          <input type="password" class="form-control" id="userPassword" placeholder="Senha do Usuário">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
    `;
  }
}