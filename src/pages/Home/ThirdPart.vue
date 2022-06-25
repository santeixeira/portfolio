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
      <h2>{{ new1.title }}</h2>
      <p>
        {{ new1.abs }}
      </p>
    </div>
  </div>
  <div class="columns is-gapless" id="container">
    <div class="column is-8" id="new2Title">
      <h2>{{ new2.title }}</h2>
      <p>{{ new2.abs }}</p>
    </div>
    <div class="column is-4" id="new2Abs">
      <MiniBoxes :class="images[1]"></MiniBoxes>
    </div>
  </div>
  <div class="columns is-gapless">
    <div class="column is-4">
      <MiniBoxes :class="images[2]"></MiniBoxes>
    </div>
    <div class="column is-8">
      <h2>{{ new3.title }}</h2>
      <p>
        {{ new3.abstract }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MiniBoxes } from "@/components/index";

export default defineComponent({
  name: "ThirdPart",
  components: {
    MiniBoxes
  },
  data() {
    return {
      images: ["image_articles", "image2_articles", "image3_articles"],
      windowWidth: window.innerHeight,
      slides: [
        "https://tn.txxx.tube/contents/videos_sources/16714000/16714035/screenshots/1.jpg",
        "https://picsum.photos/id/1033/900/400"
      ],
      new1: {
        title: "Docker Swarm",
        abs: "Docker swarm is a container orchestration tool, meaning that it allows the user to manage multiple containers deployed across multiple host machines. One of the key benefits associated with the operation of a docker swarm is the high level of availability offered for applications."
      },
      new2: {
        title: "Teorema de Bayes",
        abs: "In probability theory and statistics, Bayes' theorem, named after Thomas Bayes, describes the probability of an event, based on prior knowledge of conditions that might be related to the event."
      },
      new3: {
        title: "Introdução ao Flutter",
        abstract:
          "Flutter is an open-source UI software development kit created by Google. It is used to develop cross platform applications for Android, iOS, Linux, macOS, Windows, Google Fuchsia, and the web from a single codebase. First described in 2015, Flutter was released in May 2017."
      }
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  }
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

@media (max-width: 40em) {
  #container {
    display: table;
  }

  #new2Title {
    display: table-footer-group;
  }

  #new2Abs {
    display: table-header-group;
  }
}
</style>
