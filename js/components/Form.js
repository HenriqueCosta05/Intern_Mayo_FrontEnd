class Form {
  constructor(fetchService) {
    this.fetchService = fetchService;
  }

  render() {
    const app = document.getElementById("app");
    const form = document.createElement("section");
    app.appendChild(form);

    const task = this.fetchService.getTaskById();
    const user = this.fetchService.getUserById();

    const taskFormHTML = `
        <form action="${this.fetchService.sendForm()}" method="POST">
            <div class="form-group">
                <label for="title">Título</label>
                <input type="text" class="form-control" id="title" name="title" value="${task ? task.title : ''}">
            </div>
            <div class="form-group">
                <label for="description">Descrição</label>
                <input type="text" class="form-control" id="description" name="description" value="${task ? task.description : ''}">
            </div>
            <div class="form-group">
                <label for="status">Status</label>
                <select class="form-control" id="status" name="status">
                    <option value="pendente" ${task && task.status === 'pendente' ? 'selected' : ''}>Pendente</option>
                    <option value="fazendo" ${task && task.status === 'fazendo' ? 'selected' : ''}>Em andamento</option>
                    <option value="feito" ${task && task.status === 'feito' ? 'selected' : ''}>Feito</option>
                </select>
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    `;

    const userFormHTML = `
        <form action="${this.fetchService.sendForm()}" method="POST">
            <div class="form-group">
                <label for="name">Nome</label>
                <input type="text" class="form-control" id="name" name="name" value="${user ? user.name : ''}">
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" value="${user ? user.email : ''}">
            </div>
            <div class="form-group">
                <label for="password">Senha</label>
                <input type="password" class="form-control" id="password" name="password" value="${user ? user.password : ''}">
            </div>
            <button type="submit" class="btn btn-primary">Salvar</button>
        </form>
    `;

    if (task) {
      form.innerHTML = taskFormHTML;
    } else if (user) {
      form.innerHTML = userFormHTML;
    }
  }
}