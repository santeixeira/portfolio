<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-10">
      <router-view></router-view>
    </div>
    <div class="column is-2 side-bar" >
      <SideBar>
        <router-link to="/pomodoro">
          <div class="side-bar-content">
            <i class="fas fa-hourglass"></i>
            <span>Pomodoro</span>
          </div>
        </router-link>
        <router-link to="">
          <div class="side-bar-content">
            <i class="fas fa-list-check"></i>
            <span>À fazeres</span>
          </div>
        </router-link>
        <router-link to="">
          <div class="side-bar-content">
            <i class="fas fa-file"></i>
            <span>Relatórios</span>
          </div>
        </router-link>
        <router-link to="">
          <div class="side-bar-content">
            <i class="fas fa-timeline"></i>
            <span>Histórico</span>
          </div>
        </router-link>
      </SideBar>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SideBar } from "@/components/index";
export default defineComponent({
  name: "ContentStudies",
  components: { SideBar },
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    alterTheme(darkMode: boolean) {
      this.darkMode = darkMode;
    }
  }
});
</script>

<style lang="scss">
@import "@/assets/config_sass/colors.scss";
</style>
