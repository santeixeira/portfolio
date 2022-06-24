import IProject from "@/interface/IProject";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  projects: IProject[];
}

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: []
  },
  mutations: {
    POST_PROJECT(state, projectName: string) {
      const project = {
        id: new Date().getMilliseconds(),
        name: projectName
      } as IProject;
      state.projects.push(project);
    }
  }
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
