export const baseUrl = "http://192.168.178.53:5001";

class BaseStore {
  constructor() {
    this.baseUrl = baseUrl + "/api";
  }

  async _get(url) {
    const response = await fetch(`${this.baseUrl}${url}`);
    return await response.json();
  }

  async _post(url, data) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async _put(url, data) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await response.json();
  }

  async _delete(url) {
    const response = await fetch(`${this.baseUrl}${url}`, {
      method: "DELETE",
    });
    return await response.json();
  }

  async getProjects() {
    return await this._get("/projects");
  }

  async getUser(userId = 0) {
    return await this._get(`/users/${userId}`);
  }

  async getRedeem(userId = 0, qrCode = "cleanfleet") {
    return await this._get(`/users/${userId}/redeem/${qrCode}`);
  }
}

export default new BaseStore();

//export baseUrl
