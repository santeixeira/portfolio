<template>
  <div class="columns is-gapless is-multiline">
    <div class="column is-10">
      <FieldBar />
      <div class="content-side">
        <Pomodoro />
        <Pomodoro />
        <Pomodoro />
        <Pomodoro />
      </div>
    </div>
    <div class="column is-2 side-bar">
      <SideBar />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { SideBar } from "@/components/index";
import { FieldBar, Pomodoro } from "./index";

export default defineComponent({
  name: "TimeApplication",
  components: { SideBar, FieldBar, Pomodoro }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
@import "@/assets/config_sass/colors.scss";
$height-side: calc(100vh - $content-margin);
.content-side {
  overflow-y: auto;
  height: $height-side;
  box-shadow: 0.2em 0.2em 0.2em 0.2em
    rgba($color: $third-secondary-color, $alpha: 0.025);
}
.content-side::-webkit-scrollbar {
  width: 0.75em;
}

.content-side::-webkit-scrollbar-track {
  background: $gray-scale;
  border-radius: 20px;
}

.content-side::-webkit-scrollbar-thumb {
  background-color: $gray-scale-2;
  border-radius: 20px;
  border: 3px solid $gray-scale;
}

.side-bar {
  height: $height-side;
  position: relative;
  background: none;
}
</style>
