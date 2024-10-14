export class Navbar {
  static loggedInNavbar() {
    return `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Gerenciador de Tarefas</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#/">Visualizar Todas as Tarefas <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/cadastrar-tarefa">Cadastrar Tarefa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/editar-tarefa">Editar Tarefa</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }

  static loggedOutNavbar() {
    return `
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark w-100 d-flex justify-content-between mb-5">
        <a class="navbar-brand" href="/">Gerenciador de Tarefas</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#/auth/login">Login</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#/auth/register">Cadastro</a>
            </li>
          </ul>
        </div>
      </nav>
    `;
  }

}