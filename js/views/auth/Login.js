import { apiBaseUrl } from "../../app.js";
import { Form } from "../../components/Form.js";
import { Navbar } from "../../components/Navbar.js";
import { AuthService } from "../../services/auth.service.js";

export class Login {
  constructor(authService) {
    this.authService = new AuthService();
  }

  formFields = [
    {name: "E-mail", type: "email"},
    {name: "Senha", type: "password"}
  ]

  form = {
    method: "POST",
    action: `${apiBaseUrl}/auth/login`,
    id: "login-form"
  }

  render() {
    
    return `
      ${Navbar.loggedOutNavbar()}
      ${new Form().render(this.formFields, 'Login', this.form)}
    `;
    
  }
}