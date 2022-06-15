<template>
  <div class="a4-paper">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CurriculumPaper"
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss"</style>
