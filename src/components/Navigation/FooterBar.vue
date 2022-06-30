<template>
  <footer class="_footer" :class="{ container: widthClass }">
    <div class="columns mt-4" >
      <div class="column is-3">teste teste teste</div>
      <div class="column is-6">teste teste teste</div>
      <div class="column is-3">teste teste teste</div>
    </div>
  </footer>
</template>

<script lang="ts">
import ScreenDetect from "@/utils/ScreenDetect";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterBar",
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
@import "@/assets/config_sass/colors.scss";
._footer {
  background-image: linear-gradient(130deg, $gray-scale, white);
  padding: 0 0 0;
}
</style>
