<template>
  <main class="content-slot" :class="{ container: widthClass }">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import ScreenDetect from "@/utils/ScreenDetect";
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContentSlot",
  mounted() {
    this.widthClass = new ScreenDetect().mounted(
      this.windowWidth,
      this.widthClass
    );
  },
  data() {
    return {
      widthClass: false,
      windowWidth: innerWidth
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
</style>
