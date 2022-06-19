<template>
  <div class="tile">
    <div class="tile__media">
      <img
        class="tile__img"
        src="https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png"
        alt=""
      />
    </div>
    <div class="tile__details">
      <div class="tile__title"><slot></slot></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselItem"
});
</script>

<style lang="scss" scoped>
@import "./carousel.scss";
</style>
