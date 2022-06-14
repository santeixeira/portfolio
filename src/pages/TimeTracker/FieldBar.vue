<template>
  <ListBox>
    <div class="columns">
      <div class="column is-5" role="form" aria-label="Form for new task">
        <input
          type="text"
          class="input-box"
          placeholder="Nomeia a nova tarefa"
          v-model="description"
        />
      </div>
      <div class="column is-3">
        <select class="input-box">
          <option value="null" selected>Selecione a sprint</option>
          <option value="1">Sprints 25/5</option>
          <option value="2">Sprints 40/10</option>
          <option value="3">Sprints 50/10</option>
        </select>
      </div>
      <div class="column is-4 organize-list">
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
  components: { ListBox, ListTemporizer },
  data() {
    return {
      description: ""
    };
  },
  methods: {
    end(timePassed: number): void {
      console.log(timePassed);
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
