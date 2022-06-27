<template>
  <form @submit.prevent="edit">
    <div class="columns organize-list">
      <div class="column is-5">
        <TextInput
          :placeholder="'Digite o nome do projeto'"
          v-model="taskName"
          id="taskName"
        ></TextInput>
      </div>
      <div class="column is-full-mobile">
        <div class="input-box">
          <i class="fas fa-diagram-project"></i>
          <select v-model="projectName">
            <option value="" default>Selecione o projeto</option>
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
      <div class="column is-2 is-align-items-center">
        <CButton type="submit">Atualizar</CButton>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { CButton, TextInput } from "@/components/index";
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";

export default defineComponent({
  name: "UpdateProject",
  props: {
    id: {
      type: Number
    }
  },
  components: {
    CButton,
    TextInput
  },
  data() {
    return {
      taskName: "",
      projectName: "",
      idProject: ""
    };
  },
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(
        (proj) => proj.id == this.id
      );
      this.projectName = project?.name || "";
    }
  },
  methods: {
    edit() {
      this.store.commit("UPDATE_PROJECT", {
        id: this.id,
        name: this.taskName,
        type: this.projectName
      });
      this.projectName = "";
    }
  },
  setup() {
    const store = useStore();
    return {
      store,
      projects: computed(() => store.state.projects)
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/dark-mode.scss";
@import "@/assets/config_sass/presets.scss";
.organize-list {
  margin: 1em;
  align-items: center;
}
</style>
