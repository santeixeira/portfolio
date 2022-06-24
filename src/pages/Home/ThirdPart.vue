<template>
  <div class="columns">
    <div class="column is-full">
      <h1>Novidades da semana</h1>
    </div>
  </div>
  
  <div class="columns is-gapless">
    <div class="column is-4">
      <MiniBoxes :class="images[0]"></MiniBoxes>
    </div>
    <div class="column is-8">
      <h2>Docker Swarm</h2>
      <p>
        Docker swarm is a container orchestration tool, meaning that it allows
        the user to manage multiple containers deployed across multiple host
        machines. One of the key benefits associated with the operation of a
        docker swarm is the high level of availability offered for applications.
      </p>
    </div>
  </div>
  <div class="columns is-gapless">
    <div class="column is-8" >
      <h2>Teorema de Bayes</h2>
      <p>
        In probability theory and statistics, Bayes' theorem, named after Thomas
        Bayes, describes the probability of an event, based on prior knowledge
        of conditions that might be related to the event.
      </p>
    </div>
    <div class="column is-4">
      <MiniBoxes :class="images[1]"></MiniBoxes>
    </div>
  </div>
  <div class="columns is-gapless">
    <div class="column is-4">
      <MiniBoxes :class="images[2]"></MiniBoxes>
    </div>
    <div class="column is-8">
      <h2>Introdução ao Flutter</h2>
      <p>
        Flutter is an open-source UI software development kit created by Google.
        It is used to develop cross platform applications for Android, iOS,
        Linux, macOS, Windows, Google Fuchsia, and the web from a single
        codebase. First described in 2015, Flutter was released in May 2017.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MiniBoxes } from "@/components/index";

import LandingCarousel from "@/components/misc/Carousel/LandingCarousel.vue";

export default defineComponent({
  name: "ThirdPart",
  components: {
    MiniBoxes,
  },
  data() {
    return {
      images: ["image_articles", "image2_articles", "image3_articles"],
      windowWidth: window.innerHeight,
      slides: [
        "https://tn.txxx.tube/contents/videos_sources/16714000/16714035/screenshots/1.jpg",
        "https://picsum.photos/id/1033/900/400",
      ]
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
.image_articles {
  background-image: url("@/assets/images/foo1.jpeg");
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}
.image2_articles {
  background-image: url("@/assets/images/foo10.jpg");
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}
.image3_articles {
  background-image: url("@/assets/images/foo9.png");
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}
</style>
