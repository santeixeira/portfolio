<template>
  <NavBar></NavBar>
  <ContentSlot><router-view /></ContentSlot>
  <FooterBar></FooterBar>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NavBar, FooterBar } from "@/components/index";
import ContentSlot from "@/components/ContentSlot.vue";

@Options({
  components: {
    NavBar,
    ContentSlot,
    FooterBar
  }
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Poppins");
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
