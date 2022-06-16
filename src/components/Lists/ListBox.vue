<template>
  <main class="box">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {};
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/dark-mode.scss";
.box {
  margin: 1em;
}
</style>
