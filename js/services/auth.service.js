import { FetchService } from "./fetch.service.js";

export class AuthService {
    constructor(apiBaseUrl, fetchService) {
        this.apiBaseUrl = apiBaseUrl;
        this.fetchService = fetchService;
    }
    
    async login(email, password) {
        const response = await new FetchService().post('/auth/login', { email, password });
        if (response.access_token) {
            localStorage.setItem("token", response.access_token);
        }
        return response;
    }

    async logout() {
        localStorage.removeItem("token");
    }

    async isAuthenticated() {
        const token = localStorage.getItem("token");
        if (token) {
            return true;
        }
        return false;
    }

    async register(username, email, password) {
        try {
            const response = await this.fetchService.post('/auth/register', { username, email, password });
            console.log(response);
            if (response && response.access_token) {
                localStorage.setItem("token", response.access_token);
            }
            return response;
        } catch (e) {
            console.error('Registration error:', e);
            return false;
        }
    }
 }