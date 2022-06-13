import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { HomePage, AboutMe, TimeApplication } from "./index";

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
  },
  {
    path: "/estudos",
    name: "TimeApplication",
    component: TimeApplication
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
