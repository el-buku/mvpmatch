import { API_BASE_URL } from "utils/constants";

export default class RESTClient {
  constructor() {
    this.baseUrl = API_BASE_URL;
  }
  onFailed = (e) => {
    console.error(e);
  };
  handleResponse = async (response) => {
    console.log(response);
    if (!response.ok) {
      this.onFailed(response.statusText);
      throw Error(response.statusText);
    }
    return await response.json();
  };
  fetchUsers = async () => {
    const url = `${this.baseUrl}/users`;
    const config = {
      method: "GET",
    };
    return await fetch(url, config).then(this.handleResponse);
  };
  fetchProjects = async () => {
    const url = `${this.baseUrl}/projects`;
    const config = {
      method: "GET",
    };
    return await fetch(url, config).then(this.handleResponse);
  };
  fetchGateways = async () => {
    const url = `${this.baseUrl}/gateways`;
    const config = {
      method: "GET",
    };
    return await fetch(url, config).then(this.handleResponse);
  };
  fetchReports = async (params) => {
    console.log(params);
    if (params !== null) {
      const url = `${this.baseUrl}/reports`;
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(params),
      };
      return await fetch(url, config).then(this.handleResponse);
    }
  };
}
