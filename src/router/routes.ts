import { ProjectField, UpdateProject } from "@/pages/TimeTracker";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import {
  HomePage,
  AboutMe,
  ContentStudies,
  CurriculumTemplate,
  OnDevelopment,
  TimeApplication,
  AddProject
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
        name: "ProjectField",
        component: ProjectField,
        children: [
          {
            path: "/projetos/adicionar",
            name: "AddProject",
            component: AddProject
          },
          {
            path: "/projetos/:id",
            name: "UpdateProject",
            component: UpdateProject,
            props: true
          }
        ]
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
