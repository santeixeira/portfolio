<template>
  <div class="content-slot">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentSlot"
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/navbar.scss";
</style>
