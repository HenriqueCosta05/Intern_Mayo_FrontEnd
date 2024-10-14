export class Navbar {
    constructor(fetchService) {
        this.fetchService = fetchService;

        // HTMLs
        this.loggedOutNavbar = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Gerenciador de Tarefas</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="/auth/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
        this.loggedInNavbar = `
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">Gerenciador de Tarefas</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="/">Visualizar Todas as Tarefas <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cadastrar-tarefa">Cadastrar Tarefa</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/editar-tarefa">Editar Tarefa</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    }

    render() {
        const navbar = document.createElement('header');
        
        const hasUserLoggedIn = this.fetchService.hasUserLoggedIn();

        if (hasUserLoggedIn) {
            navbar.innerHTML = this.loggedInNavbar;
        } else {
            navbar.innerHTML = this.loggedOutNavbar;
        }
    }
}