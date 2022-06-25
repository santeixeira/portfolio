<template>
  <ListBox>
    <div class="columns">
      <div class="column is-3 is-align-items-center">
        <p>{{ task.description || "Sem descrição" }}</p>
      </div>
      <div class="column is-align-items-center">
        <p>{{ task.typePomodoro || "Sprint livre" }}</p>
      </div>
      <div class="column is-align-items-center">
        <p>{{ task.project || "Sem projeto" }}</p>
      </div>

      <div class="column is-align-items-center">
        <Cronometer :timeSeconds="task.timeSeconds" />
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Cronometer, ListBox } from "@/components/index";
import { ITask } from "@/interface/index";
export default defineComponent({
  name: "PomodoroTask",
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true
    }
  },
  data() {
    return {
      darkMode: false,
      project: {}
    };
  },
  components: {
    Cronometer,
    ListBox
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/dark-mode.scss";
.box {
  margin: 2.5em;
}
</style>
