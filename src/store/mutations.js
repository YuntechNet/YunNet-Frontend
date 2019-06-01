import * as types from "./mutation-types";
import cookies from "js-cookie";

export const mutations = {
  [types.LOGIN](state, data) {
    cookies.set("token", data.token);
    state.token = data.token;
  },
  [types.LOGINOUT](state) {
    cookies.remove("token")
    state.token = null;
  }
};

export default mutations;
