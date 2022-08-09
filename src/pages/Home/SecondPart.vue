<template>
  <div
    class="columns is-align-items-center"
    :class="{
      __container: !screenSize
    }"
  >
    <div class="column is-4" :class="{ __item: !screenSize }">
      <router-link to="/portfolio"
        ><MiniBoxes :class="images[1]">
          <h3>Portfólio</h3>
        </MiniBoxes></router-link
      >
    </div>
    <div class="column is-4" :class="{ __item: !screenSize }">
      <router-link to="/documentacoes">
        <MiniBoxes :class="images[2]">
          <h3>Documentação</h3>
        </MiniBoxes>
      </router-link>
    </div>

    <div class="column is-4" :class="{ __item: !screenSize }">
      <router-link to="/artigos">
        <MiniBoxes :class="images[0]">
          <h3>Artigos</h3>
        </MiniBoxes>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { MiniBoxes } from "@/components/index";
import { ScreenDetect } from "@/utils";

const sc = new ScreenDetect();

export default defineComponent({
  name: "SecondPart",
  components: { MiniBoxes },
  data() {
    return {
      images: ["image_articles", "image2_articles", "image3_articles"],
      windowWidth: innerWidth,
      screenSize: false
    };
  },
  mounted() {
    this.screenSize = sc.mounted(this.windowWidth, this.screenSize);
  }
});
</script>

<style lang="scss" scoped>

.image_articles {
  background-image: url("@/assets/images/foo7.webp");
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}
.image2_articles {
  background-image: url("@/assets/images/foo4.webp");
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}
.image3_articles {
  background-image: url("@/assets/images/foo6.webp");
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}

.box h3 {
  margin: 2em 0 0;
  font-size: 2em;
  font-weight: 600;
  color: #f4f4f4;
}

@media screen and (max-width: 768px) {
  .__container {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    scroll-padding: 24px;
    border-radius: 8px;
  }

  .__container .__item {
    flex: 0 0 95%;
    border-radius: 8px;
    scroll-snap-align: start;
  }
}
</style>
