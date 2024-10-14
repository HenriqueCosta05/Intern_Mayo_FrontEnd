import { Navbar } from './components/Navbar.js';
import { FetchService } from './services/fetch.service.js';
import { AuthService } from './services/auth.service.js';

class App {
    constructor(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
        this.appElement = document.getElementById('app');
        this.fetchService = new FetchService(this.apiBaseUrl);
        this.authService = new AuthService(this.apiBaseUrl, this.fetchService);
        this.init();
    }
    
    init() {
        const navbar = new Navbar(this.fetchService);
        navbar.render();
        this.appElement.innerHTML = navbar;
    }
}

const apiBaseUrl = 'http://127.0.0.1:3000'; // Local
// const apiBaseUrl = 'https://api.example.com'; // Production

const app = new App(apiBaseUrl);
app.init();