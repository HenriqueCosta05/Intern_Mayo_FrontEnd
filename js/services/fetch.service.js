import { apiBaseUrl } from "../app.js";

export class FetchService {

  request = new XMLHttpRequest();

  async get(path) {
    return new Promise((resolve, reject) => {
      this.request.open("GET", `${apiBaseUrl}${path}`, true);
      this.request.setRequestHeader("Content-Type", "application/json");
      this.request.setRequestHeader(
        "Authorization",
        `Bearer ${localStorage.getItem("token")}`
      );
      this.request.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject(new Error(`Erro HTTP! status: ${this.status}`));
          }
        }
      };
      this.request.send();
    });
  }

  async post(path, data) {
    return new Promise((resolve, reject) => {
      this.request.open("POST", `${apiBaseUrl}${path}`, true);
      this.request.setRequestHeader("Content-Type", "application/json");
      if (path === "/auth/login" || path === "/auth/register") {
        this.request.setRequestHeader("Authorization", `Bearer ${localStorage.getItem("token")}`);
      }
      this.request.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200 || this.status === 201) {
            resolve(JSON.parse(this.responseText));
          } else {
            reject(new Error(`HTTP error! status: ${this.status}`));
          }
        }
      };
      this.request.send(JSON.stringify(data));
    });
  }

  async put(path, data) {
    this.request.open("PUT", `${apiBaseUrl}${path}`);
    this.request.setRequestHeader("Content-Type", "application/json");
    this.request.setRequestHeader(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    this.request.onreadystatechange = function () {
      if (this.status === 200) {
        return this.responseText;
      }
    };
    return this.request.send(data);
  }

  async delete(path) {
    this.request.open("DELETE", `${apiBaseUrl}${path}`);
    this.request.setRequestHeader("Content-Type", "application/json");
    this.request.setRequestHeader(
      "Authorization",
      `Bearer ${localStorage.getItem("token")}`
    );

    this.request.onreadystatechange = function () {
      if (this.status === 200) {
        return this.responseText;
      }
    };
    return this.request.send();
  }

  hasUserLoggedIn() {
    return localStorage.getItem("token") ? true : false;
  }
}