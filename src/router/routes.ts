import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { HomePage } from "./index";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
