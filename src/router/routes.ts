import { ProjectField, UpdateProject } from "@/pages/TimeTracker";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import {
  HomePage,
  AboutMe,
  ContentStudies,
  HomeStudies,
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
    name: "HomeStudies",
    component: HomeStudies
  },
  {
    path: "/app",
    name: "ContentStudies",
    component: ContentStudies,
    children: [
      {
        path: "/app/pomodoro",
        name: "TimeApplication",
        component: TimeApplication
      },
      {
        path: "/app/projetos",
        name: "ProjectField",
        component: ProjectField,
        children: [
          {
            path: "/app/projetos/adicionar",
            name: "AddProject",
            component: AddProject
          },
          {
            path: "/app/projetos/:id",
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
