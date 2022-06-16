<template>
  <main class="content-slot" >
    <slot></slot>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContentSlot",
  
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";

</style>
