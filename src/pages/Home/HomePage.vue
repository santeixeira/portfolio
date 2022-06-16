<template>
  <FullContainer>
    <FirstPart @referenced="reference" />
    <SecondPart />
    <ThirdPart ref="letter" id="letter" />
  </FullContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FullContainer } from "@/components/index";
import { FirstPart, SecondPart, ThirdPart } from "./index";
export default defineComponent({
  name: "HomePage",
  components: { FullContainer, FirstPart, SecondPart, ThirdPart },
  data() {
    return {
      images: ["image_articles", "image2_articles", "image3_articles"],
      windowWidth: window.innerHeight
    };
  },
  mounted() {
    window.onresize = () => {
      this.windowWidth = window.innerWidth;
    };
  },
  methods: {
    reference(): void {
      if (this.windowWidth > 820) {
        scrollTo({ top: 900, behavior: "smooth" });
      }
      else { 
        scrollTo({ top: 1800, behavior: "smooth" });
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./Home.scss";
</style>
