// src/config.js
const API_BASE_URL =
  process.env.REACT_APP_API_URL
    ? `${process.env.REACT_APP_API_URL}/api`
    : "http://localhost:8080/api";

export default API_BASE_URL;
