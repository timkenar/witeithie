import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000","https://witeithie-backend.onrender.com", // Replace with your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
