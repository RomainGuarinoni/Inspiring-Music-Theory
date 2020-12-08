import Vue from "vue";
import VueRouter from "vue-router";
import Minijeux from "../components/Minijeux";
import Random from "../components/Random";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "jeux",
    component: Minijeux,
  },
  {
    path: "/random",
    name: "random",
    component: Random,
  },
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  routes,
});

export default router;
