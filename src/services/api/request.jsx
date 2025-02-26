import axios from "axios";
const BASE_URL = "https://fakestoreapi.com";

const request = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
});

export default request;
