import { createRouter, createWebHistory } from "vue-router";

import HomePage from "@/pages/HomePage.vue";
import AboutPage from "@/pages/AboutPage.vue";
import EmptyPage from "@/pages/EmptyPage.vue";

const routes = [
  { path: "/", name: "Home", component: HomePage },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  { path: "/empty", name: "Empty", component: EmptyPage },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
