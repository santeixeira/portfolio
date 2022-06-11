<template>
  <input type="checkbox" id="switch" />
  <label for="switch">Toggle</label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleButton"
});
</script>

<style scoped lang="scss">
@import "toggle_button.scss"
</style>
