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
              :value="projects[index].name"
              v-for="(project, index) in projects"
              :key="projects[index].id"
              v-text="projects[index].name"
            ></option>
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
import { defineComponent, computed, ref } from "vue";
import { ListBox, TextInput, SelectInput } from "@/components/index";
import ListTemporizer from "./ListTemporizer.vue";
import { useStore } from "vuex";
import { key } from "@/store";
export default defineComponent({
  name: "FieldBar",
  emits: ["atSaveTask"],
  props: ["store"],
  components: { ListBox, ListTemporizer, TextInput, SelectInput },
  data() {
    return {
      options: [
        "Sprint livre",
        "Sprints 25/5",
        "Sprints 45/10",
        "Sprints 50/10"
      ]
    };
  },
  setup(props, { emit }) {
    
    const store = useStore(key);

    const description = ref("");
    const typePomodoro = ref("");
    const idProject = ref("");

    const projects = computed(() => store.state.projects);

    const end = (timePassed: number): void => {
      emit("atSaveTask", {
        timeSeconds: timePassed,
        description: description.value,
        typePomodoro: typePomodoro.value,
        project: projects.value.find((proj) => proj.id == idProject.value)
      });
      description.value = "";
      typePomodoro.value = "";
    };

    return {
      projects,
      description,
      typePomodoro,
      idProject,
      end
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
