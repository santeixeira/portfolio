import { INews, IProject } from "@/interface/index";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  projects: IProject[];
  news: INews[];
}

export const key: InjectionKey<Store<State>> = Symbol();

let increment = 1;
export const store = createStore<State>({
  state: {
    projects: [],
    news: []
  },
  mutations: {
    POST_PROJECT(
      state,
      payload: {
        projectName: string;
        categoryName: string;
      }
    ): void {
      const project = {
        id: increment,
        name: payload?.projectName,
        type: payload?.categoryName,
        created: new Date().toLocaleDateString("pt-BR"),
        updated: "Sem modificações"
      } as IProject;
      increment++;
      state.projects.push(project);
    },
    UPDATE_PROJECT(state, project: IProject): void {
      const index = state.projects.findIndex((proj) => proj.id == project.id);
      state.projects[index] = {
        ...project,
        updated: new Date().toLocaleDateString("pt-BR")
      };
    },
    POST_NEWS({ ...state }, newsTitle: string) {
      const news = {
        title: newsTitle,
        abstract: String
      };
    }
  }
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
