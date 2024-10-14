import { Navbar } from "../../components/Navbar.js";
import { app } from "../../app.js";

export class Login {
  constructor(authService) {
    this.authService = authService;
  }

  render() {
    return `
      ${Navbar.loggedOutNavbar()}
      <form id="loginForm">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" name="email">
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" name="password">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
      <script>
        document.getElementById('loginForm').addEventListener('submit', async (event) => {
          event.preventDefault();
          const form = event.target;
          const formData = new FormData(form);
          const email = formData.get('email');
          const password = formData.get('password');
          try {
            const response = await app.authService.login(email, password);
            if (response.access_token) {
              window.location.hash = '/';
            } else {
              alert('Login failed');
            }
          } catch (error) {
            console.error('Login error:', error);
            alert('Login error');
          }
        });
      </script>
    `;
  }
}