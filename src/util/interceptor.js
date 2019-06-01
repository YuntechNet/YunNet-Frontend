import axios from "axios";
import router from "@/router";
import cookies from "js-cookie";

axios.default.timeout = 5000;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  config => {
    if (cookies.get("token")) {
      config.headers.Authorization = `Bearer ${cookies.get("token")}`;
    } else {
      router.replace({
        path: "login",
        query: {
          redirect: router.currentRoute.fullPath
        }
      });
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  response => {
    if (!response.data.token) {
      router.replace({
        path: "login",
        query: {
          redirect: router.currentRoute.fullPath
        }
      });
    }
    return response;
  },
  err => {
    return Promise.reject(err);
  }
);

export default axios;
