import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import BootstrapVue from "bootstrap-vue";
import "vue2-datepicker";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import store from "./store";
import ApiService from "./util/api_service";
import PermissionService from "@/util/permission_service";
import { CHECK_AUTH, ERROR } from "./store/actions_type";

library.add(faTimes, faSignInAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);

ApiService.init();
router.beforeEach((to, from, next) => {
  store.dispatch(CHECK_AUTH);
  if (store.getters.isAuthenticated) {
    if (to.meta.system & !PermissionService.Check("system.view")) {
      next({
        name: "Index"
      });
    } else {
      next();
    }
    if (to.meta.deAuth) {
      next({
        name: "Index"
      });
      store.dispatch(ERROR, "您已登入!");
    } else {
      next();
    }
  } else {
    if (to.meta.isAuth) {
      next({
        name: "Login"
      });
      store.dispatch(ERROR, "請先登入!");
    } else {
      next();
    }
  }
});

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  render: h => h(App)
});
