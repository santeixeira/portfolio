<template>
  <ListBox>
    <div class="columns organize-list is-mobile">
      <div class="column is-3" role="form" aria-label="Form for new task">
        <TextInput
          :id="inputTask"
          :placeholder="'Informe uma nova tarefa'"
          :icon="'fas fa-bars-progress'"
          v-model="description"
        />
      </div>
      <div class="column is-3">
        <SelectInput :icon="'fas fa-bolt'">
          <option value="" default>Sprint livre</option>
          <option>Sprints 25/5</option>
          <option>Sprints 45/10</option>
          <option>Sprints 50/10</option>
        </SelectInput>
      </div>
      <div class="column is-3">
        <SelectInput :icon="'fas fa-bolt'">
          <option value="" default>Sprint livre</option>
        </SelectInput>
      </div>
      <div class="column is-3">
        <ListTemporizer @endedTime="end" />
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox, TextInput, SelectInput } from "@/components/index";
import ListTemporizer from "./ListTemporizer.vue";
export default defineComponent({
  name: "FieldBar",
  emits: ["atSaveTask"],
  components: { ListBox, ListTemporizer, TextInput, SelectInput },
  data() {
    return {
      description: "",
      typePomodoro: "",
      inputTask: ""
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
