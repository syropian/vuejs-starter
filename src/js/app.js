import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import App from "./components/app.vue";
import Main from "./components/main.vue";

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.config.debug = true;

const router = new VueRouter({
  hashbang: false,
  history: true
});

router.map({
  "/": {
    name: "main",
    component: Main
  }
});

router.start(App, '#app')
