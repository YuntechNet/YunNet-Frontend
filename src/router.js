import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('./components/Index.vue')
    },
    
    {
      path: '/userinfo',
      name: 'Userinfo',
      component: () => import('./components/Userinfo.vue')
    },

    {
      path: '/login',
      name: 'Login',
      component: () => import('./components/Login.vue')
    },

  ]
})
