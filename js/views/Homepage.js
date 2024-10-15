import { Navbar } from "../components/Navbar.js";

export class Homepage {
  constructor() {}

  render() {
    return `
            ${Navbar.loggedOutNavbar()}
            <div class="d-flex justify-content-center align-items-center m-auto h-screen flex-column">
                <h1 class="display-4">Bem-vindo ao Gerenciador de Tarefas</h1>
                <p class="lead">Aqui você pode gerenciar suas tarefas de forma simples e eficiente.</p>
                <hr class="my-4">
                <p>Para começar, faça o login ou cadastre-se.</p>
                <div class="flex m-auto align-items-center justify-content-center flex-column">
                <a class="btn btn-dark btn-lg w-100 my-3 mx-auto" href="/#/auth/login" role="button">Login</a>
                <a class="btn btn-dark btn-lg w-100 my-3 mx-auto" href="/#/auth/register" role="button">Cadastro</a>
                </div>
            </div>
        `;
  }
}
