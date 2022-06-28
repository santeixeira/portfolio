import { INews, IProject } from "@/interface/index";
import { INotification, TypeNotification } from "@/interface/INotification";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import {
  DESTROY_PROJECT,
  POST_NEWS,
  POST_PROJECT,
  UPDATE_PROJECT,
  TO_NOTIFY
} from "./typeMutations";

interface State {
  projects: IProject[];
  news: INews[];
  notifications: INotification[];
}

export const key: InjectionKey<Store<State>> = Symbol();

let increment = 1;
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
      newProject.id = increment;
      newProject.created = new Date().toLocaleDateString("pt-BR");
      newProject.updated = "Sem modificações";
      increment++;
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
    }

    // [POST_NEWS]({ state, newsTitle: string) {
    //   const news = {
    //     title: newsTitle,
    //     abstract: String
    //   } as INews
    // }
  }
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
