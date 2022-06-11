import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { HomePage, AboutMe } from "./index";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/portfolio",
    name: "AboutMe",
    component: AboutMe
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
