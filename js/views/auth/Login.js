import { apiBaseUrl } from "../../app.js";
import { Form } from "../../components/Form.js";
import { Navbar } from "../../components/Navbar.js";
import { AuthService } from "../../services/auth.service.js";

export class Login {

  formFields = [
    {name: "email", label: "E-mail", type: "email"},
    {name: "password",  label: "Senha", type: "password"}
  ]

  form = {
    method: "POST",
    action: `${apiBaseUrl}/auth/login`,
    id: "login-form"
  }

  render() {
    const html = `
      ${Navbar.loggedOutNavbar()}
      ${new Form().render(this.formFields, 'Login', this.form)}
    `
    setTimeout(() => {
      document
        .getElementById("login-form")
        .addEventListener("submit", async (event) => {
          event.preventDefault();
          const formData = new FormData(event.target);
          const email = formData.get("email");
          const password = formData.get("password");
          try {
            const response = await new AuthService(apiBaseUrl).login(
              email,
              password
            );
            if (response.access_token) {
              alert("Usuário logado com sucesso!");
              window.location.hash = "/app/tasks";
            } else {
              alert("Login falhou");
            }
          } catch (error) {
            console.error("Erro ao realizar login:", error);
            alert("Erro ao cadastrar usuário! Tente novamente mais tarde");
          }
        });
    }, 0);
    return html;
    
  }
}