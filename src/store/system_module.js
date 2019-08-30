import ApiService from "@/util/api_service";
import JwtService from "@/util/jwt_service";
import ErrorService from "@/util/error_service";
import router from "@/router";
import { SYSTEM_QUERY, SYSTEM_CLEAR, SYSTEM_ABUSE } from "./actions_type";
import { SET_QUERY, PURGE_SYSTEM, SET_ERROR } from "./mutations_type";

const state = {
  info: { user: {}, ip: {} },
  netflow: [],
  lock: [],
  wan: []
};

const actions = {
  [SYSTEM_QUERY](context, username) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.get_pure(`/management/user/${username}`)
          .then(({ data }) => {
            context.commit(SET_QUERY, data);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [SYSTEM_ABUSE](context, credentials) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      return new Promise(resolve => {
        ApiService.put(`/management/abuse/${credentials.ip}`, {
          lock_until: credentials.datenow,
          reason: credentials.reason
        })
          .then(({ data }) => {
            router.replace({ name: "Index" });
            context.commit(SET_ERROR, data.message);
            resolve(data);
          })
          .catch(({ response }) => {
            ErrorService.init(response.status, response.data.message, context);
          });
      });
    }
  },
  [SYSTEM_CLEAR](context) {
    context.commit(PURGE_SYSTEM);
  }
};

const mutations = {
  [SET_QUERY](state, info) {
    state.info = info;
  },
  [PURGE_SYSTEM](state) {
    state.info = { user: {}, ip: {} };
  }
};

export default {
  state,
  actions,
  mutations
};
