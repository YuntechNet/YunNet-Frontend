import ApiService from "@/util/api_service";
import JwtService from "@/util/jwt_service";
import { INFO, IP, CHANGE_MAC } from "./actions_type";
import { SET_INFO, PURGE_AUTH, SET_ERROR, SET_INFO_IP } from "./mutations_type";
import router from "@/router";

const state = {
  info: [],
  info_IP: []
};

const actions = {
  [INFO](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const username = JwtService.getUsername();
      return new Promise(resolve => {
        ApiService.get("user", username)
          .then(({ data }) => {
            context.commit(SET_INFO, data);
            resolve(data);
          })
          .catch(({ response }) => {
            if (response.status != 500) {
              context.commit(PURGE_AUTH);
              router.replace({ name: "Login" });
              context.commit(SET_ERROR, response.data.message);
            }else{
              router.replace({ name: "Index" });
            }
          });
      });
    }
  },
  [IP](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const username = JwtService.getUsername();
      return new Promise(resolve => {
        ApiService.get_pure(`user/${username}/ip`)
          .then(({ data }) => {
            context.commit(SET_INFO_IP, data);
            resolve(data);
          })
          .catch(({ response }) => {
            if (response.status != 500) {
              context.commit(PURGE_AUTH);
              router.replace({ name: "Login" });
              context.commit(SET_ERROR, response.data.message);
            }else{
              router.replace({ name: "Index" });
            }
          });
      });
    }
  },
  [CHANGE_MAC](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const username = JwtService.getUsername();
      return new Promise(resolve => {
        ApiService.patch(`user/${username}/${credentials.ip}/mac`, {
          mac: credentials.mac
        })
          .then(({ data }) => {
            router.replace({ name: "Index" });
            context.commit(SET_ERROR, data.message);
            resolve(data);
          })
          .catch(({ response }) => {
            context.commit(SET_ERROR, response.data.message);
          });
      });
    }
  }
};

const mutations = {
  [SET_INFO](state, info) {
    state.info = info;
  },
  [SET_INFO_IP](state, info_IP) {
    state.info_IP = info_IP;
  }
};

export default {
  state,
  actions,
  mutations
};
