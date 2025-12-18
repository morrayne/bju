import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: '/plan', name: "home" },
    { path: "/plan", name: "plan", component: () => import("@/views/Plan/PlanMain.vue") },
  ],
});

export default router;