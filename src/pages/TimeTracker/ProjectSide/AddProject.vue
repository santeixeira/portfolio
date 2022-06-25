<template>
  <form @submit.prevent="save">
    <div class="columns organize-list">
      <div class="column is-5">
        <TextInput
          :placeholder="'Digite o nome do projeto'"
          v-model="taskName"
          id="taskName"
        ></TextInput>
      </div>
      <div class="column is-5">
        <TextInput
          :id="projectName"
          :placeholder="'Informe uma nova tarefa'"
          :icon="'fas fa-bars-progress'"
          v-model="projectName"
        />
      </div>
      <div class="column is-2 is-align-items-center">
        <CButton type="submit">Salvar</CButton>
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
  name: "AddProject",
  props: {
    id: {
      type: Number
    }
  },
  components: {
    CButton,
    TextInput
  },
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(
        (proj) => proj.id == this.id
      );
      this.projectName = project?.name || "";
    }
  },
  data() {
    return {
      taskName: "",
      projectName: ""
    };
  },
  methods: {
    save() {
      this.store.commit("POST_PROJECT", this.taskName);
      this.taskName = "";
    },
    edit() {
      this.store;
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
