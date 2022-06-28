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
  notification: INotification[];
}

export const key: InjectionKey<Store<State>> = Symbol();

let increment = 1;
export const store = createStore<State>({
  state: {
    projects: [],
    news: [],
    notification: []
  },
  mutations: {
    [TO_NOTIFY](state, newNotification: INotification): void {
      newNotification.id = 1;
      state.notification.push(newNotification);
      setTimeout(() => {
        state.notification = state.notification.filter(
          (notification) => notification.id = newNotification.id
        );
      }, 3000);
    },
    [POST_PROJECT](state: State, projectName: string): void {
      const project = {
        id: increment,
        name: projectName,
        type: "Nenhum por enquanto",
        created: new Date().toLocaleDateString("pt-BR"),
        updated: "Sem modificações"
      } as IProject;
      increment++;
      state.projects.push(project);
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
