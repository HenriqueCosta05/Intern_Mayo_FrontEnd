class AuthService {
    constructor(apiBaseUrl, fetchService) {
        this.apiBaseUrl = apiBaseUrl;
        this.fetchService = fetchService;
    }
    
    async login(email, password) {
        const response = await this.fetchService.post('/auth/login', { email, password });
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

    async register() {
        const response = await this.fetchService.post('/auth/register', { email, password });
        if (response.access_token) {
            localStorage.setItem("token", response.access_token);
        }
        return response;
    }
 }