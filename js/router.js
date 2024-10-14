import { Login } from "./views/auth/Login.js";
import { Register } from "./views/auth/Register.js";
import { Homepage } from "./views/Homepage.js";

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
    template: () => new Register().render(),
    title: "Cadastro",
    description: "Página de cadastro do gerenciador de tarefas",
    path: "/auth/register",
  },
};

const loadTemplate = (route) => {
  if (!route) {
    console.error("Route not found");
    return;
  }
  document.getElementById("app").innerHTML = route.template();
  document.title = route.title;
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute("content", route.description);
  } else {
    console.error('Meta description tag not found');
  }
};
export const locationHandler = async () => {
  let location = window.location.hash.replace("#", "");
  if (location === "") {
    location = "/";
  }
  const route = routes[location];
  if (!route) {
    console.error(`Route for location "${location}" not found`);
    return;
  }
  loadTemplate(route);
};
window.addEventListener("load", locationHandler);
window.addEventListener("hashchange", locationHandler);
