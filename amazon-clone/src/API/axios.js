import axios from "axios"
const axiosInstance = axios.create({
  // baseURL: "http://127.0.0.1:5001/clone-6a997/us-central1/api",
  baseURL: "https://api-rcjzrqzhsa-uc.a.run.app",
});

export {axiosInstance}