import { TimeApplication } from "@/pages/TimeTracker";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { HomePage, AboutMe, ContentStudies, CurriculumTemplate } from "./index";

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
    path: "/curriculum",
    name: "CurriculumTemplate",
    component: CurriculumTemplate
  },
  {
    path: "/estudos",
    name: "ContentStudies",
    component: ContentStudies,
    children: [
      {
        path: "/pomodoro",
        name: "TimeApplication",
        component: TimeApplication
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
