import http from "@/http";
import { INews, IProject } from "@/interface/index";
import { INotification, TypeNotification } from "@/interface/INotification";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import {
  DESTROY_PROJECTS,
  GET_PROJECTS,
  POST_PROJECTS,
  UPDATE_PROJECTS
} from "./typeActions";
import {
  DESTROY_PROJECT,
  POST_PROJECT,
  UPDATE_PROJECT,
  TO_NOTIFY,
  DEFINE_PROJECT
} from "./typeMutations";

interface State {
  projects: IProject[];
  news: INews[];
  notifications: INotification[];
}

export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state: {
    projects: [],
    news: [],
    notifications: []
  },
  mutations: {
    [TO_NOTIFY](state, newNotification: INotification): void {
      newNotification.id = 1;
      state.notifications.push(newNotification);
      setTimeout(() => {
        state.notifications = state.notifications.filter(
          (notification) => notification.id != newNotification.id
        );
      }, 3000);
    },
    [POST_PROJECT](state: State, newProject: IProject): void {
      newProject.created = new Date().toLocaleDateString("pt-BR");
      newProject.updated = "Sem modificações";
      state.projects.push(newProject);
    },
    [UPDATE_PROJECT](state, project: IProject): void {
      const index = state.projects.findIndex((proj) => proj.id == project.id);
      state.projects[index] = {
        ...project,
        updated: new Date().toLocaleDateString("pt-BR")
      };
    },
    [DESTROY_PROJECT](state, id: number): void {
      state.projects = state.projects.filter((proj) => proj.id != id);
    },

    [DEFINE_PROJECT](state, projects: IProject[]) {
      state.projects = projects;
    }

    // [POST_NEWS]({ state, newsTitle: string) {
    //   const news = {
    //     title: newsTitle,
    //     abstract: String
    //   } as INews
    // }
  },
  actions: {
    [GET_PROJECTS]({ commit }) {
      http
        .get("projects")
        .then((response) => commit(DEFINE_PROJECT, response.data));
    },
    [POST_PROJECTS]({ commit }, newProject: IProject) {
      return http
        .post("/projects", {
          ...newProject
        })
        .then((response) => commit(POST_PROJECT, response.data));
    },
    async [UPDATE_PROJECTS]({ commit }, newProject: IProject) {
      const data = await http.put(`/projects/${newProject.id}`, {
        ...newProject
      });
      commit(UPDATE_PROJECT, { ...newProject });
      return data;
    },
    [DESTROY_PROJECTS]({ commit }, idProject: number) {
      return http
        .delete(`/projects/${idProject}`)
        .then(() => commit(DESTROY_PROJECT, idProject));
    }
  }
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
