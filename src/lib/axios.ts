// @ts-nimport Axios from "axios";
import Axios from "axios";
import { access } from "fs";
import { accessToken } from "./user";
const axios = Axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      accessToken ||
      (typeof window !== "undefined" && localStorage.getItem("accessToken"))
    }`,
  },
});

export default axios;
