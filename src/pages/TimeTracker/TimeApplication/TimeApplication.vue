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

export default defineComponent({
  name: "TimeApplication",
  components: {
    FieldBar,
    Pomodoro,
    ListBox
  },
  data() {
    return {
      tasks: [] as ITask[],
    };
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
      this.tasks.push(task);
    },
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
@import "@/assets/config_sass/colors.scss";
</style>
