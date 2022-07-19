<template>
  <FieldBar @atSaveTask="saveTask" />
  <h2>{{ today }}</h2>
  <div class="content-side">
    <Pomodoro v-for="(task, index) in tasks" :key="index" :task="task" />
    <ListBox v-if="voidList"
      ><p>Voce não começou nenhum estudo hoje</p></ListBox
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox } from "@/components/index";
import { FieldBar, Pomodoro } from "../index";
import ITask from "@/interface/ITask";
import { GET_PROJECTS, POST_TASKS, GET_TASKS } from "@/store/typeActions";
import { store, useStore } from "@/store";
import { computed } from "@vue/reactivity";
export default defineComponent({
  name: "TimeApplication",
  components: {
    FieldBar,
    Pomodoro,
    ListBox
  },
  computed: {
    voidList(): boolean {
      return this.tasks.length === 0;
    },
    today() {
      return new Date().toLocaleDateString("pt-BR");
    }
  },
  methods: {
    saveTask(task: ITask): void {
      task.createdAt = new Date().toLocaleDateString("pt-BR");
      store.dispatch(POST_TASKS, {...task});
    }
  },
  setup() {
    const store = useStore();
    store.dispatch(GET_TASKS);
    store.dispatch(GET_PROJECTS);
    return {
      tasks: computed(() => store.state.tasks),
      store
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
@import "@/assets/config_sass/colors.scss";
</style>
