<template>
  <main class="columns is-gapless is-multiline">
    <div class="column">
      <router-view></router-view>
    </div>
    <transition>
      <div class="column is-2 side-bar" :class="{ 'hidden is-1': hiddenBar }">
        <SideBar @hiding-bar="hideBar">
          <h1>
            <img
              src="https://cdn.dribbble.com/users/427857/screenshots/16181208/aimm_dribbble_full.png?compress=1&resize=400x300"
              alt="image_foo"
              id="image_foo"
              :class="{ 'hidden-image': hiddenBar }"
            />
          </h1>
          <router-link to="/pomodoro">
            <div class="side-bar-content">
              <i class="fas fa-hourglass"></i>
              <span :hidden="hiddenBar">Pomodoro</span>
            </div>
          </router-link>
          <router-link to="">
            <div class="side-bar-content">
              <i class="fas fa-list-check"></i>
              <span :hidden="hiddenBar">À fazeres</span>
            </div>
          </router-link>
          <router-link to="">
            <div class="side-bar-content">
              <i class="fas fa-file"></i>
              <span :hidden="hiddenBar">Relatórios</span>
            </div>
          </router-link>
          <router-link to="">
            <div class="side-bar-content">
              <i class="fas fa-timeline"></i>
              <span :hidden="hiddenBar">Histórico</span>
            </div>
          </router-link>
        </SideBar>
      </div>
    </transition>
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
      darkMode: false,
      hiddenBar: false
    };
  },
  methods: {
    alterTheme(darkMode: boolean) {
      this.darkMode = darkMode;
    },
    hideBar(hiddenBarActive: boolean) {
      this.hiddenBar = hiddenBarActive;
    }
  }
});
</script>

<style lang="scss">
@import "@/assets/config_sass/colors.scss";
.side-bar.hidden {
  
  width: 7em;
  transition: 0.4s ease;
  height: 100%;
}

#image_foo.hidden-image {
  width: 2.5em;
  height: 2.5em;
  transition: 0.4s ease;
}
</style>
