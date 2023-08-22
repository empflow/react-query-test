import axiosDefault from "axios";

const axios = axiosDefault.create({
  baseURL: "http://localhost:4000",
});

export default axios;
