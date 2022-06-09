<template>
  <NavBar></NavBar>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue";
import FullContainer from "@/components/FullContainer.vue";
import NavBar from "@/components/NavBar.vue";

@Options({
  components: {
    HelloWorld,
    FullContainer,
    NavBar
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
