<template>
  <NavBar></NavBar>
  <ContentSlot><router-view /></ContentSlot>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { NavBar } from "@/components/index";
import ContentSlot from "@/components/ContentSlot.vue";

@Options({
  components: {
    NavBar,
    ContentSlot
  }
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, Montserrat, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
