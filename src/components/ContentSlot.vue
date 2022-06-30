<template>
  <!-- <Notification></Notification> -->
  <main class="content-slot" :class="{ container: widthClass }">
    <slot></slot>
  </main>
</template>

<script lang="ts">
import ScreenDetect from "@/utils/ScreenDetect";
import { defineComponent } from "vue";
import Notification from "./misc/Notification.vue";
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
  },
  // components: { Notification }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
.content-slot {
  padding: 6em 0!important;
}
</style>
