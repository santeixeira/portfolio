<template>
  <FullContainer>
    <div class="columns">
      <div class="column is-full">
        <h1>Minhas aplicações</h1>
      </div>
    </div>
    <div class="columns">
      <Carousel>
        <CarouselItem :imgs="imgs" :title="content">Test</CarouselItem>
        <CarouselItem :imgs="imgs" :text="content">Test</CarouselItem>
        <CarouselItem :imgs="imgs">Test</CarouselItem>
        <CarouselItem :imgs="imgs">Test</CarouselItem>
        <CarouselItem :imgs="imgs">Test</CarouselItem>
      </Carousel>
    </div>
  </FullContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FullContainer, Carousel, CarouselItem } from "@/components/index";

export default defineComponent({
  name: "PortfolioPart",
  components: { FullContainer, Carousel, CarouselItem },
  data() {
    return {
      content: "test",
      imgs: "https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png"
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
</style>
