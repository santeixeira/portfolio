<template>
  <div class="box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MiniBoxes"
});
</script>

<style lang="scss" scoped>
@import "./miniboxes.scss";
</style>
