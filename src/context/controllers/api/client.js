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
  getUsers = async () => {
    const url = `${this.baseUrl}/users`;
    const config = {
      method: "GET",
    };
    return await fetch(url, config).then(this.handleResponse);
  };
}
