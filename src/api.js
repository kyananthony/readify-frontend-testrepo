import axios from "axios";

const API_BASE_URL = "https://readify-deployment-38fc3c9a9a8c.herokuapp.com"; // Replace with your actual backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
