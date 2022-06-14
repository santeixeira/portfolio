<template>
  <ListBox>
    <div class="columns organize-list">
      <div class="column is-5" role="form" aria-label="Form for new task">
        <input
          type="text"
          class="input-box"
          placeholder="Nomeia a nova tarefa"
          v-model="description"
        />
      </div>
      <div class="column is-3">
        <select v-model="typePomodoro" class="input-box">
          <option disabled value="">Selecione a sprint</option>
          <option>Sprints 25/5</option>
          <option>Sprints 45/10</option>
          <option>Sprints 50/10</option>
        </select>
      </div>
      <div class="column is-4">
        <ListTemporizer @endedTime="end" />
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox } from "@/components/index";
import ListTemporizer from "./ListTemporizer.vue";
export default defineComponent({
  name: "FieldBar",
  emits: ["atSaveTask"],
  components: { ListBox, ListTemporizer },
  data() {
    return {
      description: "",
      typePomodoro: ""
    };
  },
  methods: {
    end(timePassed: number): void {
      this.$emit("atSaveTask", {
        timeSeconds: timePassed,
        description: this.description,
        typePomodoro: this.typePomodoro
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
.organize-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
