import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "landing",
      component: () => import("./views/Landing.vue")
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue")
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/Profile.vue")
    }
  ]
});
