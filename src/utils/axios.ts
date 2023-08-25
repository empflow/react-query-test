import axiosDefault from "axios";

export const baseUrl = "https://jsonplaceholder.typicode.com";

const axios = axiosDefault.create({
  baseURL: baseUrl,
});

export default axios;
