import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import {
  HomePage,
  AboutMe,
  ContentStudies,
  CurriculumTemplate,
  OnDevelopment,
  TimeApplication,
  ProjectField
} from "./index";

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
      },
      {
        path: "/projetos",
        name: "ToDos",
        component: ProjectField
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    name: "OnDevelopment",
    component: OnDevelopment
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

export default router;
