import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false
library.add(faTimes, faSignInAlt);
Vue.component('font-awesome-icon', FontAwesomeIcon)


new Vue({
  el: '#app',
  router,
  components: { App },
  //template: '<App/>'
  
  render: h => h(App)
  
})
