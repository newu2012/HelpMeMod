import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", name: "Home", component: () => import("../pages/HomePage.vue") },
  {
    path: "/about",
    name: "About",
    component: () => import("../pages/AboutPage.vue"),
  },
  {
    path: "/empty",
    name: "Empty",
    component: () => import("../pages/EmptyPage.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
