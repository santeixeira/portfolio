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
          ><h1>Lucrei!</h1>
          <p>Lorem ipsum dolor, sit amet.</p>
          <section class="stack">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            /></section
        ></CarouselItem>
        <CarouselItem :imgs="imgs" @redirected-url="redirect(urls.linkedin)"
          ><h1>SJ Imóveis</h1>
          <p>Lorem ipsum dolor, sit amet, ipsum dolor, sit amet</p>
          <section class="stack">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            /></section
        ></CarouselItem>
        <CarouselItem :imgs="imgs" @redirected-url="redirect(urls.linkedin)"
          ><h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor, sit amet .</p>
          <section class="stack">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            /></section
        ></CarouselItem>
        <CarouselItem :imgs="imgs" @redirected-url="redirect(urls.linkedin)"
          ><h1>Lorem ipsum</h1>
          <p>Lorem ipsum dolor, sit amet .</p>
          <section class="stack">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
            />
          </section>
        </CarouselItem>
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
.tile__title p{
  font-size: 0.5em;
  text-align: center!important;
  justify-content: center;
  padding: 0 10% 0;
}
.stack {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}
.stack img {
  height: 1.25em;
  width: 1.25em;
  padding: 0.2em;
}
</style>
