import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({
      baseURL,
      timeout,
    });

    this.instance.interceptors.response.use(
      (res) => res.data,
      (err) => err
    );
  }

  request(config) {
    return this.instance.request(config);
  }

  get(config) {
    return this.instance.request({ ...config, method: "get" });
  }

  post(config) {
    return this.instance.request({ ...config, method: "post" });
  }
}

export default new Request(BASE_URL, TIMEOUT);
