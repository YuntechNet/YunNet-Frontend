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
      meta: {
        isAuth: true
      },
      component: () => import("./components/Userinfo.vue")
    },

    {
      path: "/login",
      name: "Login",
      meta: {
        deAuth: true
      },
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
      meta: {
        deAuth: true
      },
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
    {
      path: "/forgot_password",
      name: "Forgot_password",
      component: () => import("./components/Forgot_password.vue")
    },
    {
      path: "/system_universal",
      name: "System_universal",
      component: () =>
        import("./components/system_universal/System_universal.vue")
    },
    {
      path: "/sys_uni_abuse",
      name: "Sys_uni_abuse",
      component: () => import("./components/system_universal/Sys_uni_abuse.vue")
    },
    {
      path: "/sys_uni_permission",
      name: "Sys_uni_permission",
      component: () =>
        import("./components/system_universal/Sys_uni_permission.vue")
    },
    {
      path: "/system_dormitory",
      name: "System_dormitory",
      component: () =>
        import("./components/system_dormitory/System_dormitory.vue")
    },
    {
      path: "/sys_dorm_import",
      name: "Sys_dorm_import",
      component: () =>
        import("./components/system_dormitory/Sys_dorm_import.vue")
    },
    {
      path: "/change_mac/:ip",
      component: () => import("./components/Change_mac.vue"),
      meta: {
        isAuth: true
      }
    },
    {
      path: "/user_netflow",
      name: "User_netflow",
      component: () => import("./components/User_netflow.vue")
    },
    {
      path: "/change_password",
      name: "Change_password",
      component: () => import("./components/Change_password.vue")
    }
  ]
});
