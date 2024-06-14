// @ts-nimport Axios from "axios";
import Axios from "axios";
import { accessToken } from "./user";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.BASE_API_URL, "api");

const SERVER =
  process.env.BASE_API_URL !== "development"
    ? "http://localhost:8080"
    : "http://65.0.55.141:8080";

// const SERVER = "http://65.0.55.141:8080";
// const SERVER = "http://localhost:8080";

const axios = Axios.create({
  baseURL: `${SERVER}/api`,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${
      accessToken ||
      (typeof window !== "undefined" && localStorage.getItem("accessToken"))
    }`,
  },
});

export default axios;
