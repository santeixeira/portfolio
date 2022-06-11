<template>
  <div class="_footer columns mt-4">
    <div class="column is-3">teste teste teste</div>
    <div class="column is-6">teste teste teste</div>
    <div class="column is-3">teste teste teste</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterBar"
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
._footer {
  background-image: linear-gradient(
    130deg,
    $gray-scale,
    white
  );
  padding: 4em 0 0;
}
</style>
