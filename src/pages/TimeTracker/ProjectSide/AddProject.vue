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
import { defineComponent, ref } from "vue";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
import { TypeNotification } from "@/interface/INotification";
import Notifier from "@/hooks/notifier";
import { POST_PROJECTS } from "@/store/typeActions";

export default defineComponent({
  name: "AddProject",
  props: {
    id: {
      type: String
    }
  },
  components: {
    CButton,
    TextInput
  },
  setup(props) {
    const store = useStore();
    const projectName = ref("");
    const taskName = ref("");
    const projects = computed(() => store.state.projects);

    if (props.id) {
      const project = store.state.projects.find((proj) => proj.id == props.id);
      projectName.value = project?.name || "";
    }
    const { toNotify } = Notifier();
    const save = () => {
      store
        .dispatch(POST_PROJECTS, {
          name: taskName.value,
          type: projectName.value,
          created: new Date().toLocaleDateString("pt-BR"),
          updated: "Sem modificações"
        })
        .then(() => {
          toNotify(
            TypeNotification.SUCESS,
            "Sucesso",
            `Projeto ${taskName.value} adicionado.`,
            "fas fa-check"
          );
        });
    };

    return {
      store,
      projectName,
      taskName,
      toNotify,
      save,
      projects
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
