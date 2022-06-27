<template>
  <main
    class="columns is-gapless is-multiline"
    :class="{ 'hidden is-11': hiddenBar }"
  >
    <div class="column full-height">
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
      <router-view id="router"></router-view>
    </div>
    <transition>
      <div class="column is-2 side-bar" :class="{ 'hidden is-1': hiddenBar }">
        <SideBar @hiding-bar="hideBar" class="is-absolute">
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
          <router-link to="/a-fazeres">
            <div class="side-bar-content">
              <i class="fas fa-list-check"></i>
              <span :hidden="hiddenBar">À fazeres</span>
            </div>
          </router-link>
          <router-link to="/relatorios">
            <div class="side-bar-content">
              <i class="fas fa-file"></i>
              <span :hidden="hiddenBar">Relatórios</span>
            </div>
          </router-link>
          <router-link to="/historico">
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
      hiddenBar: false,
      tab: true
    };
  },
  methods: {
    alterTheme(darkMode: boolean) {
      this.darkMode = darkMode;
    },
    hideBar(hiddenBarActive: boolean) {
      this.hiddenBar = hiddenBarActive;
    },
    tabChange() {
      this.tab = !this.tab;
      let v = document.getElementById("#router") as HTMLElement;
      if (!this.tab) {
        v?.classList.add("collapse-tab-in");
      } else {
        v?.classList.add("collapse-tab-out");
      }

      setTimeout(() => {
        if (!this.tab) {
          this.$router.push("/projetos");
        } else {
          this.$router.push("/pomodoro");
        }
      }, 1000);
    }
  }
});
</script>

<style lang="scss">
@import "@/assets/config_sass/colors.scss";
@import "@/assets/config_sass/presets.scss";
.full-height {
  height: 100vh !important;
}
.side-bar.is-1.hidden {
  width: 7em;
  transition: 0.4s ease;
  height: 100%;
}

.side-bar.is-2 {
  transition: 0.4s ease;
  height: 100%;
}

#image_foo.hidden-image {
  width: 2.5em;
  height: 2.5em;
  transition: 0.4s ease;
}
.vue-modal-inner {
  max-width: 50em !important;
  width: 50em !important;
  margin: 10em auto !important;
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

.collapse-tab-in {
  transform: translateX(-200%) !important;
  transition: 0.5s ease-in;
}
.collapse-tab-out {
  transform: translateX(0%) !important;
  transition: 0.5s ease-in;
}
</style>
