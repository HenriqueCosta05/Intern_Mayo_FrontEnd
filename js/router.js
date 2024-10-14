import { Navbar } from './components/Navbar.js';
import { Form } from './components/Form.js';
import { Table } from './components/Table.js';

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  window.history.pushState({}, "", event.target.href);
  handleLocation();
};

const routes = {
  "/": "navbar",
  "/cadastrar-tarefa": "form-task",
  "/cadastrar-usuario": "form-user",
  "/visualizar-tarefas": "table",
  "/auth/login": "login",
  "/auth/register": "form-user",
};

const handleLocation = async () => {
  const path = window.location.pathname;
  const route = routes[path] || routes[404];
  const appElement = document.getElementById("app");

  switch (route) {
    case "navbar":
      const navbar = new Navbar();
      appElement.innerHTML = navbar.render();
      break;
    case "form-task":
      const formTask = new Form('task');
      appElement.innerHTML = formTask.render();
      break;
    case "form-user":
      const formUser = new Form('user');
      appElement.innerHTML = formUser.render();
      break;
    case "table":
      const table = new Table();
      appElement.innerHTML = table.render();
      break;
    default:
      appElement.innerHTML = '<h1>404 - Página não encontrada</h1>';
  }
};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();