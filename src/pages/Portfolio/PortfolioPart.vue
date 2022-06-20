<template>
  <FullContainer>
    <div class="columns">
      <div class="column is-full">
        <h1>Minhas aplicações</h1>
      </div>
    </div>
    <div class="columns">
      <Carousel>
        <CarouselItem :imgs="imgs" @redirected-url="redirect(urls.linkedin)"
          >Test</CarouselItem
        >
        <CarouselItem :imgs="imgs" @redirected-url="redirect(urls.linkedin)"
          >Test</CarouselItem
        >
        <CarouselItem :imgs="imgs" @redirected-url="redirect(urls.linkedin)"
          >Test</CarouselItem
        >
        <CarouselItem :imgs="imgs" @redirected-url="redirect(urls.linkedin)"
          >Test</CarouselItem
        >
      </Carousel>
    </div>
  </FullContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FullContainer, Carousel, CarouselItem } from "@/components/index";
import { Methods, links } from "@/utils/index";

export default defineComponent({
  name: "PortfolioPart",
  components: { FullContainer, Carousel, CarouselItem },
  data() {
    return {
      urls: links.urls,
      content: "test",
      imgs: "https://assets-global.website-files.com/5b5729421aca332c60585f78/61ba503872080311dde1ea56_long-form-landing-page-examples.png"
    };
  },
  methods: {
    redirect(url: string): void {
      new Methods().redirect(url);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
</style>
