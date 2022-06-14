<template>
  <ListBox>
    <div class="columns">
      <div class="column is-5">{{ task.description }}</div>
      <div class="column">{{ task.typePomodoro }}</div>
      <div class="column">
        <Cronometer :timeSeconds="task.timeSeconds" />
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Cronometer, ListBox } from "@/components/index";
import ITask from "@/interface/ITask";
export default defineComponent({
  name: "PomodoroTask",
  props: {
    task: {
      type: Object as PropType<ITask>,
      required: true
    }
  },
  components: {
    Cronometer,
    ListBox
  }
});
</script>

<style lang="scss" scoped>
.box {
  margin: 2.5em;
}
</style>
