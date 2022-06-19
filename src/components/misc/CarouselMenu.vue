<template>
  <div class="contain">
    <div class="row">
      <div class="row__inner">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselMenu",
});
</script>

<style lang="scss" scoped>
@import "./carousel.scss";
</style>
