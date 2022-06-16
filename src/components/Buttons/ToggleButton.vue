<template>
  <input type="checkbox" id="switch" @change="checked" />
  <label for="switch">Toggle</label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleButton",
  emits: ["checkedBox"],
  data() {
    return {
      checkedBox: true
    };
  },
  methods: {
    checked() {
      this.checkedBox = !this.checkedBox;
      this.$emit("checkedBox");
    }
  }
});
</script>

<style scoped lang="scss">
@import "toggle_button.scss";
</style>
