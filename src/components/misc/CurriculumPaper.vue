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

<style lang="scss">
@import "@/assets/config_sass/presets.scss";
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Bitter:wght@500&family=Epilogue:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lora:wght@700&display=swap');
.a4-paper h1,
.a4-paper h2 {
  font-family: 'Bebas Neue', cursive;
  font-size: 3em;
  text-transform: uppercase;
  font-weight: 900;
}
</style>
