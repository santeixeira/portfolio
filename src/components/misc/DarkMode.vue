<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "DarkMode",
  setup() {
    document.documentElement.setAttribute("data-dark", "true");
    document.body.classList.add("darker");
  }
});
</script>

<style scoped>
@media (prefers-colors-scheme: dark) {
  [data-dark="true"] .darker {
    color: #fff;
    background-color: black;
  }
}
</style>
