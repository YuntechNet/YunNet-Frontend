import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Index",
      component: () => import("./components/Index.vue")
    },

    {
      path: "/userinfo",
      name: "Userinfo",
      component: () => import("./components/Userinfo.vue")
    },

    {
      path: "/login",
      name: "Login",
      component: () => import("./components/Login.vue")
    },
    {
      path: "/netflow",
      name: "Netflown",
      component: () => import("./components/Netflow.vue")
    },
    {
      path: "/universal_lock",
      name: "Universal_lock",
      component: () => import("./components/Universal_lock.vue")
    },
    {
      path: "/dormitory_lock",
      name: "Dormitory_lock",
      component: () => import("./components/Dormitory_lock.vue")
    },
    {
      path: "/register",
      name: "Register",
      component: () => import("./components/Register.vue")
    },
    {
      path: "/contract",
      name: "Contract",
      component: () => import("./components/Contract.vue")
    },
    {
      path: "/user_contract",
      name: "User_contract",
      component: () => import("./components/User_contract.vue")
    },
  ]
});
