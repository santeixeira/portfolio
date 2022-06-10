<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PrimaryButton",
  props: ["button"]
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
button.button {
  width: 7em;
  height: 2em;
  color: #fff;
  background-color: $primary-color;
  margin: 1em;
}
</style>
