<template>
  <div class="container is-fluid">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FullContainer"
});
</script>

<style scoped></style>
