import Axios from "axios";
import LocalStorage, { LSKeys } from "./ls";

const axios = Axios.create({
  baseURL: "http://localhost:3000/api",
});

axios.interceptors.request.use(
  (config) => {
    const tokenStorage = new LocalStorage<string>(LSKeys.TOKEN);
    const token = tokenStorage.get();
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
