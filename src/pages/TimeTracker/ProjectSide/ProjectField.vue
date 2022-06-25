<template>
  <ListBox>
    <div class="columns">
      <div class="column is-1">
        <button @click="open" id="#add" class="btn-project add">
          <i class="fas fa-plus"></i>
        </button>
        {{ isOpen }}
      </div>
      <div class="column is-11">
        <table class="table is-fullwidth content-side">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Categoria</th>
              <th>Criado em</th>
              <th>Modificado em</th>
              <th>&nbsp;&nbsp;</th>
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
              <td>
                {{ project.type }}
              </td>
              <td>
                {{ project.created }}
              </td>
              <td>
                {{ project.updated }}
              </td>
              <td class="is-align-items-center">
                <button @click="openUpdate" class="btn-project destroy mr-4">
                  <i class="fas fa-trash"></i>
                </button>
                <button @click="open" class="btn-project edit">
                  <i class="fas fa-pencil"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { ListBox } from "@/components/index";
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "ProjectField",
  components: {
    ListBox
  },
  emits: ["openModal"],
  data() {
    return {
      taskName: "",
      projectName: "",
      isOpen: false,
      addOpen: false,
      editOpen: false
    };
  },
  methods: {
    save() {
      this.store.commit("POST_PROJECT", this.taskName);
      this.taskName = "";
    },
    open() {
      this.isOpen = !this.isOpen;
      this.addOpen = !this.addOpen;
      this.$emit("openModal", this.isOpen, this.addOpen);
    },
    openUpdate() {
      this.isOpen = !this.isOpen;
      this.addOpen = !this.addOpen;
      this.$emit("openModal", this.isOpen, this.editOpen);
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

.btn-project {
  border: none;
  padding: 0.5em 0.7em 0.5em;
  cursor: pointer;
  border-radius: 6px;
}
.organize-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.table {
  background: none !important;
}
table {
  height: 100% !important;
}
table td,
table th {
  text-align: center !important;
}
</style>
