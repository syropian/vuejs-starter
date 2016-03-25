import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./components/app.vue";
import Main from "./components/main.vue";

Vue.use(VueResource);
Vue.use(VueRouter);

const router = new VueRouter({
  hashbang: false,
  history: true
});

router.map({
  // "/auth": {
  //   name: "auth",
  //   component: Auth
  // },
  // "/dashboard": {
  //   name: "dashboard",
  //   component: Dashboard,
  // }
});

router.start(App, '#app')
