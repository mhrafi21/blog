// src/api/baseApi.ts
import axios from "axios";

const baseApi = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // optional: for sending cookies (useful for auth)
});

// // Optional: Interceptors for request/response
// baseApi.interceptors.request.use(
//   (config) => {
//     // Add token or modify config if needed
//     const token = localStorage.getItem("accessToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// baseApi.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     // Central error handling
//     console.error("API Error:", error?.response?.data || error.message);
//     return Promise.reject(error);
//   }
// );

export default baseApi;
