<template>
  <input type="checkbox" id="switch" @change="checked" :checked="check" />
  <label for="switch">Toggle</label>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ScreenDetect } from "@/utils/index";

const sc = new ScreenDetect();

export default defineComponent({
  name: "ToggleButton",
  emits: ["checkedBox"],
  data() {
    return {
      check: false
    };
  },
  beforeMount() {
    this.check = sc.darkTheme(this.check);
  },
  methods: {
    checked() {
      this.check = !this.check;
      this.$emit("checkedBox");
    }
  }
});
</script>

<style scoped lang="scss">
@import "./toggle_button.scss";
</style>
