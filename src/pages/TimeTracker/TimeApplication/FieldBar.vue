<template>
  <ListBox>
    <div class="columns organize-list is-mobile">
      <div
        class="column is-full-mobile"
        role="form"
        aria-label="Form for new task"
      >
        <TextInput
          :id="description"
          :placeholder="'Informe uma nova tarefa'"
          :icon="'fas fa-bars-progress'"
          v-model="description"
        />
      </div>
      <div class="column is-full-mobile">
        <SelectInput
          :icon="'fas fa-bolt'"
          v-model="typePomodoro"
          :placeholder="'Informe uma nova tarefa'"
          :options="options"
          :selected="options[0]"
        >
        </SelectInput>
      </div>
      <div class="column is-full-mobile">
        <div class="input-box">
          <i class="fas fa-diagram-project"></i>
          <select v-model="idProject">
            <option value="" selected>Selecione o projeto</option>
            <option
              :value="project.id"
              v-for="project in projects"
              :key="project.id"
            >
              {{ project.name }}
            </option>
          </select>
        </div>
      </div>
      <div class="column is-full-mobile">
        <ListTemporizer @endedTime="end" />
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox, TextInput, SelectInput } from "@/components/index";
import ListTemporizer from "./ListTemporizer.vue";
import { useStore } from "vuex";
import IProject from "@/interface/IProject";
import { key } from "@/store";
import { computed } from "@vue/reactivity";
export default defineComponent({
  name: "FieldBar",
  emits: ["atSaveTask"],
  components: { ListBox, ListTemporizer, TextInput, SelectInput },
  data() {
    return {
      description: "",
      typePomodoro: "",
      idProject: 0,
      options: [
        "Sprint livre",
        "Sprints 25/5",
        "Sprints 45/10",
        "Sprints 50/10"
      ],
      projectsOption: [] as IProject[]
    };
  },
  methods: {
    end(timePassed: number): void {
      this.$emit("atSaveTask", {
        timeSeconds: timePassed,
        description: this.description,
        typePomodoro: this.typePomodoro,
        project: this.projects.find((proj) => proj.id == this.idProject)
      });
      this.description = "";
    }
  },
  setup() {
    const store = useStore(key);
    return {
      projects: computed(() => store.state.projects)
    };
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
@media only screen and (max-width: 820px) {
  .organize-list {
    display: block;
  }
}
</style>
