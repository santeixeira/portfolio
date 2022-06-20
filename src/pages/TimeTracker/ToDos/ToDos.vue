<template>
  <ListBox>
    <form @submit.prevent="save">
      <div class="columns">
        <div class="column is-4">
          <TextInput
            :placeholder="'Digite o nome do projeto'"
            v-model="taskName"
            id="taskName"
          ></TextInput>
        </div>
        <div class="column is-2"><CButton type="submit">Salvar</CButton></div>
      </div>
    </form>
  </ListBox>
  <ListBox>
    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects" :key="project.id">
          <td>
            {{ project.id }}
          </td>
          <td>
            {{ project.name }}
          </td>
        </tr>
      </tbody>
    </table>
  </ListBox>
</template>

<script lang="ts">
import { ListBox, CButton, TextInput } from "@/components/index";
import { defineComponent } from "vue";
import IProject from "@/interface/IProject";

export default defineComponent({
  name: "ToDos",
  components: {
    ListBox,
    CButton,
    TextInput
  },
  data() {
    return {
      taskName: "",
      projects: [] as IProject[]
    };
  },
  methods: {
    save() {
      const project: IProject = {
        name: this.taskName,
        id: new Date().getMilliseconds()
      };
      this.projects.push(project);
      this.taskName = "";
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/dark-mode.scss";
@import "@/assets/config_sass/presets.scss";
.organize-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table {
  background: none!important;
}
</style>
