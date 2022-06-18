<template>
  <FullContainer class="test">
    <h1>Desculpe, página em desenvolvimento</h1>
  </FullContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FullContainer } from "@/components/index";

export default defineComponent({
  name: "OnDevelopment",
  components: { FullContainer }
});
</script>

<style scoped>
.test {
  background-image: url("@/assets/images/foo12.png");
  background-repeat: no-repeat;
  background-position-y: 0;
  background-size: contain;
  max-height: 100%;
  height: 100vh;
  display: grid;
}

.test h1 {
  font-size: 3em;
  text-align: start;
  font-style: italic;
  width: 55%;
  display: block;
  position: absolute;
  margin: 1.25em 0em 0em;
}
</style>
