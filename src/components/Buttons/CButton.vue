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
  background-image: linear-gradient(
    130deg,
    $primary-color,
    $first-secondary-color
  );
  margin: 1em;
  border-radius: 1em;
  background-size: 300% 100%;
  border-radius: 50px;
  -o-transition: all 0.4s ease-in-out;
  -webkit-transition: all 0.4s ease-in-out;
  transition: all 0.4s ease-in-out;

  &:hover {
    background-position: 100% 0;
    -o-transition: all 0.4s ease-in-out;
    -webkit-transition: all 0.4s ease-in-out;
    transition: all 0.4s ease-in-out;
  }
}
.button.is-focused:not(:active),
.button:focus:not(:active) {
  box-shadow: 0em 0em 0em 0.25em
    rgba($color: $first-secondary-color, $alpha: 0.2);
}
</style>
