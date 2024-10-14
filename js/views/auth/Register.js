export class Register {
  constructor(authService) {
    this.authService = authService;
  }

  render() {
    const app = document.getElementById("app");
    const register = document.createElement("section");
    register.innerHTML = `
        ${Navbar.render()}
    <form action="${this.fetchService.sendForm()}" method="POST">
     <div class="form-group">
          <label for="username">Nome de Usuário</label>
          <input type="text" class="form-control" id="username" name="username" value="${
            user ? user.username : ""
          }">
        </div>
        <div class="form-group">
          <label for="email">Nome</label>
          <input type="text" class="form-control" id="email" name="email" value="${
            user ? user.email : ""
          }">
        </div>
        <div class="form-group">
          <label for="password">Email</label>
          <input type="email" class="form-control" id="password" name="password" value="${
            user ? user.password : ""
          }">
        </div>
        <button type="submit" class="btn btn-primary">Login</button>
      </form>
        `;
    app.appendChild(register);
  }
}
