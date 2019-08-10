import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth_module";
import profile from "./profile_module";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    profile
  }
});
