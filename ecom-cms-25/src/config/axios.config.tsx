// axios.config.ts
import axios, { AxiosError, type AxiosResponse } from "axios";
import { AppConfig } from "./app.config";

const axiosInstance = axios.create({
  baseURL: AppConfig.baseUrl,
  timeout: 3000,
  timeoutErrorMessage: "Server timed out...",
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  if (localStorage.getItem("_at_39")) {
    // CHANGE 1: Use Authorization header, and prefix with "Bearer "
    config.headers.Authorization = "Bearer " + localStorage.getItem("_at_39");
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  (exception: AxiosError) => {
    let errorResponse = {
      status: exception.status,
      error: exception?.response?.data,
    };
    throw errorResponse;
  }
);

export default axiosInstance;
