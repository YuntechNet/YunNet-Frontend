import ApiService from "@/util/api_service";
import JwtService from "@/util/jwt_service";
import { LOGIN, LOGOUT, REGISTER, CHECK_AUTH, ERROR } from "./actions_type";
import { RE_AUTH, SET_AUTH, PURGE_AUTH, SET_ERROR } from "./mutations_type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken()
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  }
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("user/login", credentials)
        .then(({ data }) => {
          context.commit(SET_AUTH, data);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.message);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [REGISTER](context, credentials) {
    return new Promise((resolve, reject) => {
      ApiService.post("users", { user: credentials })
        .then(({ data }) => {
          context.commit(SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.errors);
          reject(response);
        });
    });
  },
  [CHECK_AUTH](context) {
    if (JwtService.getToken()) {
      context.commit(RE_AUTH);
      ApiService.setHeader();
    } else {
      context.commit(PURGE_AUTH);
    }
  },
  [ERROR](context, message) {
    context.commit(SET_ERROR, message);
  }
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
  },
  [SET_AUTH](state, user) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = null;
    JwtService.saveToken(state.user.token);
  },
  [RE_AUTH](state) {
    state.isAuthenticated = true;
    state.user = { token: JwtService.getToken() };
    state.errors = null;
    JwtService.saveToken(state.user.token);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = null;
    ApiService.deleteHeader();
    JwtService.destroyToken();
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
