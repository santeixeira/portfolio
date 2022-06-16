<template>
  <main :class="{ 'dark-mode': darkMode }">
    <NavBar @altered-theme="alterTheme" :class="{ 'dark-mode': darkMode }" />
    <ContentSlot
      ><router-view :class="{ 'dark-mode': darkMode }"
    /></ContentSlot>
    <FooterBar />
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { NavBar, FooterBar } from "@/components/index";
import ContentSlot from "@/components/ContentSlot.vue";

export default defineComponent({
  name: "FieldBar",
  components: {
    NavBar,
    ContentSlot,
    FooterBar
  },
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    alterTheme(darkModeActive: boolean) {
      this.darkMode = darkModeActive;
    }
  }
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins");
@import "@/assets/config_sass/dark-mode.scss";

#app {
  font-family: Poppins, Avenir, Helvetica, Arial, Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

@media only screen and (min-width: 1080px) {
}
</style>
