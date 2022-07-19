<template>
  <form @submit.prevent="edit">
    <div class="columns organize-list">
      <div class="column is-5">
        <TextInput
          :placeholder="'Digite o nome do projeto'"
          v-model="projectName"
          id="taskName"
        ></TextInput>
      </div>
      <div class="column is-full-mobile">
        <div class="input-box">
          <i class="fas fa-diagram-project"></i>
          <select v-model="categoryName">
            <option value="" default>Selecione o projeto</option>
            <option
              :value="projects[index].type"
              v-for="(project, index) in projects"
              :key="projects[index].id"
              v-text="projects[index].type"
            ></option>
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
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import { UPDATE_PROJECTS } from "@/store/typeActions";

export default defineComponent({
  name: "UpdateProject",
  props: {
    id: {
      type: String
    }
  },
  components: {
    CButton,
    TextInput
  },
  data() {
    return {
      projectName: "",
      categoryName: ""
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
      this.store.dispatch(UPDATE_PROJECTS, {
        id: this.id,
        name: this.projectName,
        type: this.categoryName,
        updated: new Date().toLocaleDateString("pt-BR")
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
