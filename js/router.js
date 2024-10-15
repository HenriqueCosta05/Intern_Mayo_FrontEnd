import { Login } from "./views/auth/Login.js";
import { Register } from "./views/auth/Register.js";
import { Homepage } from "./views/Homepage.js";
import { TasksHomepage } from "./views/task/Homepage.js";
import { app } from "./app.js";

const routes = {
  "/": {
    template: () => new Homepage().render(),
    title: "Página Inicial",
    description: "Página inicial do gerenciador de tarefas",
    path: "/",
  },
  "/auth/login": {
    template: () => new Login().render(),
    title: "Login",
    description: "Página de login do gerenciador de tarefas",
    path: "/auth/login",
  },
  "/auth/register": {
    template: () => new Register(app.authService).render(),
    title: "Cadastro",
    description: "Página de cadastro do gerenciador de tarefas",
    path: "/auth/register",
  },
  "/app/tasks": {
    template: async () => await new TasksHomepage().render(),
    title: "Tarefas",
    description: "Página de tarefas do gerenciador de tarefas",
    path: "/app/tasks",
  },
};

export async function locationHandler() {
  const path = window.location.hash.replace('#', '') || '/';
  const route = routes[path];
  if (route) {
    document.title = route.title;
    document.querySelector('meta[name="description"]').setAttribute('content', route.description);
    const content = await route.template();
    document.getElementById('app').innerHTML = content;
  } else {
    document.getElementById('app').innerHTML = '<h1>404 - Not Found</h1>';
  }
}

window.addEventListener('hashchange', locationHandler);
window.addEventListener('load', locationHandler);