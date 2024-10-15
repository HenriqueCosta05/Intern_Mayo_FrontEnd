
import './router.js';
import { locationHandler } from './router.js';
import { AuthService } from './services/auth.service.js';
import { FetchService } from './services/fetch.service.js';

class App {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
    this.appElement = document.getElementById('app');
    this.fetchService = new FetchService(this.apiBaseUrl);
    this.authService = new AuthService(this.apiBaseUrl, this.fetchService);
  }

  init() {
      locationHandler();
  }

}

export const apiBaseUrl = 'http://127.0.0.1:3000'; // Local
// export const apiBaseUrl = 'https://api.example.com'; // Production

export const app = new App(apiBaseUrl);