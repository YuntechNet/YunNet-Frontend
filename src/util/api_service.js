import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import JwtService from "@/util/jwt_service";

const API_URL = "./api";

const ApiService = {
  init() {
    Vue.use(VueAxios, axios);
    Vue.axios.defaults.baseURL = API_URL;
  },
  setHeader() {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${JwtService.getToken()}`;
  },
  deleteHeader() {
    delete axios.defaults.headers.common["Authorization"];
  },
  query(resource, params) {
    return Vue.axios.get(resource, params).catch(error => {
      throw new Error(`[YunNet] ApiService ${error}`);
    });
  },
  get(resource, slug = "") {
    return Vue.axios.get(`${resource}/${slug}`);
  },

  get_pure(resource) {
    return Vue.axios.get(`${resource}`);
  },

  post(resource, params) {
    return Vue.axios.post(`${resource}`, params);
  },

  patch(resource, params) {
    return Vue.axios.patch(`${resource}`, params);
  },

  update(resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return Vue.axios.put(`${resource}`, params);
  },

  delete(resource) {
    return Vue.axios.delete(resource);
  }
};

export default ApiService;
