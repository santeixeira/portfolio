<template>
  <div class="_container">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FullContainer",
});
</script>

<style lang="scss" scoped>
._container {
  margin: 0em 5em 0;
}

@media only screen and (max-width: 820px) {
  ._container { 
    margin: 0em 1em 0em !important;
  }
}
</style>
