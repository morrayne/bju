// router/index.ts
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", redirect: "/onboarding", name: "none" },
    { path: "/onboarding", name: "onboarding", component: () => import("@/pages/onboarding_main.vue") },
  ],
});

export default router;