import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Manage from "@/views/Manage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/manage-music",
    name: "Manage",
    component: Manage,
    beforeEnter: (to, from, next) => {
      next();
    },
  },
  {
    path: "/manage",
    redirect: { name: "Manage" },
  },

  {
    path: "/:catchAll(.*)*",
    redirect: { name: "Home" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkExactActiveClass: "text-yellow-500",
});
router.beforeEach((to, from, next) => {
  next();
});

export default router;
