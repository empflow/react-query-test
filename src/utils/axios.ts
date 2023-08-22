import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:3000",
});

export default axios;
