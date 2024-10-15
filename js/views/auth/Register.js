import { Navbar } from "../../components/Navbar.js";
import { Form } from "../../components/Form.js";
import { apiBaseUrl } from "../../app.js";
import { AuthService } from "../../services/auth.service.js";

export class Register {
  constructor(authService) {
    this.authService = new AuthService();
  }

  render() {
    const form = new Form();

    const fields = [
      { label: "Nome de Usuário", name: "username", type: "text" },
      { label: "E-mail", name: "email", type: "email" },
      { label: "Senha", name: "password", type: "password" }
    ];

    const formConfig = {
      method: "POST",
      action: `${apiBaseUrl}/auth/register`,
      id: "register-form"
    };

    const html = `
      ${Navbar.loggedOutNavbar()}
      ${form.render(fields, "Cadastrar", formConfig)}
    `;

    setTimeout(() => {
      document.getElementById('register-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const email = formData.get('email');
        const password = formData.get('password');
        try {
          const response = await this.authService.register(username, email, password);
          if (response.access_token) {
            alert("Usuário criado com sucesso!")
            window.location.hash = '/app/tasks';
          } else {
            alert('Registration failed');
          }
        } catch (error) {
          console.error('Registration error:', error);
          alert('Erro ao cadastrar usuário! Tente novamente mais tarde');
        }
      });
    }, 0);

    return html;
  }
}