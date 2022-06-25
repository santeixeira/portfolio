import { INews, IProject } from "@/interface/index";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  projects: IProject[];
  news: INews[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
    news: []
  },
  mutations: {
    POST_PROJECT(state, projectName: string): void {
      const project = {
        id: new Date().getMilliseconds(),
        name: projectName,
        // type: projectInstance.categoryName,
        created: new Date().toLocaleDateString("pt-BR"),
        updated: "Sem modificações"
      } as IProject;
      state.projects.push(project);
    },
    // UPDATE_PROJECT(state, projectName: string): void {

    // }
  }
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
