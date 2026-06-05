import axios from "axios";

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api"
    : process.env.REACT_APP_API_BASE_URL || "https://jiivastro-backend.onrender.com/api";

console.log("API Base URL:", baseURL);

const API = axios.create({
  baseURL,
});

API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");

  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }

  return req;
});

export default API;