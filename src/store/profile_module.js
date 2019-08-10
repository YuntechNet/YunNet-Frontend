import ApiService from "@/util/api_service";
import JwtService from "@/util/jwt_service";
import { INFO } from "./actions_type";
import { SET_INFO, PURGE_AUTH, SET_ERROR } from "./mutations_type";

const state = {
  info: null,
  error: null
};

const getters = {
  getinfo(state) {
    return state.info;
  }
};

const actions = {
  [INFO](context) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      const uid = JwtService.getUsername();
      ApiService.get(`user/${uid}`)
        .then(({ data }) => {
          context.commit(SET_INFO, data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response);
          context.commit(PURGE_AUTH);
        });
    }
  }
};

const mutations = {
  [SET_INFO](state, info) {
    state.info = info;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
