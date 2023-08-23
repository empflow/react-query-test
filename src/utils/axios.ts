import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export default axios;
