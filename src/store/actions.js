import * as types from "./mutation-types";

const actions = {
  userLogin({ commit }, data) {
    commit(types.LOGIN, data);
  },
  userLoginOut({ commit }) {
    commit(types.LOGINOUT);
  }
};

export default actions;
