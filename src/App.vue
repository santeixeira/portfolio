<template>
  <main :class="{ 'dark-mode': darkMode }">
    <NavBar
      @altered-theme="alterTheme"
      :class="{ 'dark-mode': darkMode, onScroll: !view }"
    />
    <ContentSlot :class="{ 'dark-mode': darkMode }"
      ><router-view
    /></ContentSlot>
    <FooterBar :class="{ 'dark-mode': darkMode }" />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavBar, FooterBar } from "@/components/index";
import ContentSlot from "@/components/ContentSlot.vue";
import { ScreenDetect } from "@/utils/index";

const sc = new ScreenDetect();

export default defineComponent({
  name: "FieldBar",
  components: {
    NavBar,
    ContentSlot,
    FooterBar
  },
  props: ["dark-mode"],
  data() {
    return {
      darkMode: false,
      view: true
    };
  },
  methods: {
    alterTheme(darkModeActive: boolean) {
      this.darkMode = darkModeActive;
    },
    handleScroll() {
      if (window.pageYOffset > 0) {
        if (this.view) this.view = false;
      } else {
        if (!this.view) this.view = true;
      }
    }
  },
  mounted() {
    this.darkMode = sc.darkTheme(this.darkMode);
    window.addEventListener("scroll", this.handleScroll);
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import url("https://fonts.googleapis.com/css2?family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lora:wght@700&display=swap");
@import "@/assets/config_sass/dark-mode.scss";

#app {
  font-family: "Epilogue", Poppins, Avenir, Helvetica, Arial, Montserrat,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-family: "Epilogue", serif;
  font-weight: 900;
}

@media only screen and (min-width: 1080px) {
}

header.onScroll {
  box-shadow: 0 0 10px #2c3e50!important;
  background-color: $gray-scale!important;
  transition: 0.3s ease;
}

header.onScroll.dark-mode {
  box-shadow: 0 0 10px #2c3e50!important;
  background-color: #000!important;
  transition: 0.3s ease;
}


</style>
