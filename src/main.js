import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
Vue.config.productionTip = false




new Vue({
  el: '#app',
  router,
  components: { App },
  //template: '<App/>'
  render: h => h(App)
})
