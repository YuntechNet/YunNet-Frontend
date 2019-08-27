import ApiService from "@/util/api_service";
import JwtService from "@/util/jwt_service";
import router from "@/router";
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  CHECK_AUTH,
  ERROR,
  REGISTER_VERIFY,
  FORGOT_PASSWORD
} from "./actions_type";
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
      ApiService.post("login", credentials)
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
    return new Promise(resolve => {
      ApiService.post("register", credentials)
        .then(({ data }) => {
          alert("Success! Please check mail!");
          router.replace({ name: "Index" });
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(SET_ERROR, response.data.message);
        });
    });
  },
  [REGISTER_VERIFY](context, token) {
    return new Promise(resolve => {
      ApiService.get("verify-mail", token)
        .then(({ data }) => {
          alert("Success");
          router.replace({ name: "Index" });
          resolve(data);
        })
        .catch(({ response }) => {
          if (response.status != 500) {
            alert(response.data.message);
            router.replace({ name: "Index" });
          } else {
            router.replace({ name: "Index" });
          }
        });
    });
  },
  [FORGOT_PASSWORD](context, credentials) {
    return new Promise(resolve => {
      ApiService.post("forgot-password", credentials)
        .then(({ data }) => {
          alert("Success! Please check mail!");
          router.replace({ name: "Index" });
          resolve(data);
        })
        .catch(({ response }) => {
          if (response.status != 500) {
            context.commit(SET_ERROR, response.data.message);
          } else {
            router.replace({ name: "Index" });
          }
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
    state.user = { token: user.token, username: user.username };
    state.errors = null;
    JwtService.saveToken(state.user.token, state.user.username);
  },
  [RE_AUTH](state) {
    state.isAuthenticated = true;
    state.user = {
      token: JwtService.getToken(),
      username: JwtService.getUsername()
    };
    state.errors = null;
    JwtService.saveToken(state.user.token, state.user.username);
  },
  [PURGE_AUTH](state) {
    state.isAuthenticated = false;
    state.errors = null;
    state.user = {};
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
