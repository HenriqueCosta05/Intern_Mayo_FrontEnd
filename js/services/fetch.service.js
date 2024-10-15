export class FetchService {
    constructor(apiBaseUrl) {
        this.apiBaseUrl = apiBaseUrl;
    }

    request = new XMLHttpRequest();


    async get(path) {
        this.request.open("GET", `${this.apiBaseUrl}${path}`, true);
        this.request.setRequestHeader("Content-Type", "application/json");
        this.request.setRequestHeader("Authorization", `Bearer ${localStorage.getItem("token")}`);
        this.request.onreadystatechange = function () {
            if (this.status === 200) {
                return this.responseText;
            }
        }
        return this.request.send();
    }

    async post(path, data) {
        this.request.open("POST", `${this.apiBaseUrl}${path}`);
        this.request.setRequestHeader("Content-Type", "application/json");
                this.request.setRequestHeader(
                  "Authorization",
                  `Bearer ${localStorage.getItem("token")}`
                );

        this.request.onreadystatechange = function () {
            if (this.status === 201 || this.status === 200) {
                return this.responseText;
            }
            return this.request.send(data);
        }
    }

    async put(path, data) {
        this.request.open("PUT", `${this.apiBaseUrl}${path}`);
        this.request.setRequestHeader("Content-Type", "application/json");
                this.request.setRequestHeader(
                  "Authorization",
                  `Bearer ${localStorage.getItem("token")}`
                );

        this.request.onreadystatechange = function () {
            if (this.status === 200) {
                return this.responseText;
            }
        }
        return this.request.send(data);
        }
        
    async delete (path) {
        this.request.open("DELETE", `${this.apiBaseUrl}${path}`);
        this.request.setRequestHeader("Content-Type", "application/json");
                this.request.setRequestHeader(
                  "Authorization",
                  `Bearer ${localStorage.getItem("token")}`
                );

        this.request.onreadystatechange = function () {
            if (this.status === 200) {
                return this.responseText;
            }
        }
        return this.request.send();
    }

    hasUserLoggedIn() {
        return localStorage.getItem("token") ? true : false;
    }
}