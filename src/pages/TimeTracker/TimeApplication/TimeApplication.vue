<template>
{{vAdd}}
  <Modal :open="isOpen" @close="isOpen = !isOpen">
    <AddProject v-if="vAdd" />
    <UpdateProject v-else />
  </Modal>
  <div class="is-centered">
    <div class="switch-button">
      <input
        class="switch-button-checkbox"
        type="checkbox"
        @change="tabChange"
      />
      <label class="switch-button-label" for=""
        ><span class="switch-button-label-span">Pomodoro</span></label
      >
    </div>
  </div>

  <div
    id="project"
    :class="{ 'collapse-tab-in': tab, 'collapse-tab-out': !tab }"
  >
    <ProjectField @openModal="open" />
  </div>
  <div
    id="pomodoro"
    :class="{ 'collapse-tab-out': tab, 'collapse-tab-in': !tab }"
  >
    <FieldBar @atSaveTask="saveTask" />
    <h2>{{ today }}</h2>
    <div class="content-side">
      <Pomodoro v-for="(task, index) in tasks" :key="index" :task="task" />
      <ListBox v-if="voidList"
        ><p>Voce não começou nenhum estudo hoje</p></ListBox
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox, Modal } from "@/components/index";
import {
  FieldBar,
  Pomodoro,
  AddProject,
  ProjectField,
  UpdateProject
} from "../index";
import ITask from "@/interface/ITask";

export default defineComponent({
  name: "TimeApplication",
  components: {
    FieldBar,
    Pomodoro,
    ListBox,
    ProjectField,
    Modal,
    AddProject,
    UpdateProject
  },
  data() {
    return {
      tasks: [] as ITask[],
      tab: true,
      isOpen: false,
      vAdd: false
    };
  },
  computed: {
    voidList(): boolean {
      return this.tasks.length === 0;
    },
    today() {
      return new Date().toLocaleDateString("pt-BR");
    }
  },
  methods: {
    saveTask(task: ITask): void {
      this.tasks.push(task);
    },
    tabChange() {
      this.tab = !this.tab;
    },
    open(isOpened: boolean, isAdd: boolean) {
      const data1 = (this.isOpen = isOpened);
      const data2 = (this.vAdd = isAdd);
      return { data1, data2 };
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
@import "@/assets/config_sass/colors.scss";

#project {
  position: absolute;
  width: 100% - 16.66667%;
}

#pomodoro {
  position: absolute;
  width: 100% - 16.66667%;
  z-index: 1;
}
.collapse-tab-in {
  transform: translateX(-200%) !important;
  transition: 0.5s ease-in;
}
.collapse-tab-out {
  transform: translateX(0%) !important;
  transition: 0.5s ease-in;
}
.switch-button {
  background: rgba($color: $third-secondary-color, $alpha: 0.25);
  margin: auto;
  border-radius: 30px;
  overflow: hidden;
  width: 240px;
  text-align: center;
  font-size: 12px;
  letter-spacing: 1px;
  color: $gray-scale;
  position: relative;
  padding-right: 120px;
  position: relative;

  &:before {
    content: "Projetos";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    pointer-events: none;
  }

  &-checkbox {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    z-index: 2;

    &:checked + .switch-button-label:before {
      transform: translateX(120px);
      transition: transform 0.5s ease;
    }

    & + .switch-button-label {
      position: relative;
      padding: 0.5em 0;
      display: block;
      user-select: none;
      pointer-events: none;

      &:before {
        content: "";
        background: $background-terciary;
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 0;
        border-radius: 30px;
        transform: translateX(0);
        transition: transform 0.5s ease;
      }

      .switch-button-label-span {
        position: relative;
      }
    }
  }
}
</style>
