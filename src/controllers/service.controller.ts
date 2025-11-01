import a from "axios";
import { endpoints } from "../../app.configs.json";
const apikey = import.meta.env.VITE_API_KEY;

export const serviceController = {
  axios: a.create({ baseURL: endpoints.api }),
  getHeaders() {
    const headers = {
      Authorization: "x-api-key: " + apikey,
      "Content-Type": "application/json",
    };

    return headers;
  },
  async get(url: string) {
    try {
      const response = await this.axios.get(url, {
        headers: this.getHeaders(),
      });
      if (response.data) {
        return response.data;
      }
    } catch (error) {
      console.log(error, "error");
     
      return false;
    }
  },
};
