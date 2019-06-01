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
import axios from "./util/interceptor.js";
import store from "./store/index.js";

Vue.prototype.$http = axios;
Vue.config.productionTip = false;
library.add(faTimes, faSignInAlt);
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);

new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  render: h => h(App)
});
