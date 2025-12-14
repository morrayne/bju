import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: () => import("@/views/Home/HomeMain.vue") },
    { path: "/plan", name: "plan", component: () => import("@/views/Plan/PlanMain.vue") },
  ],
});

export default router;