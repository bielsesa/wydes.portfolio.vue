import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GalleryView from "../views/GalleryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: GalleryView,
    },
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/AboutView.vue"),
    // },
    {
      path: "/summary",
      name: "summary",
      component: () => import("../views/SummaryProjectView.vue"),
    },
    // {
    //   path: "/gallery",
    //   name: "gallery",
    //   component: () => import("../views/GalleryView.vue"),
    // },
  ],
});

export default router;
