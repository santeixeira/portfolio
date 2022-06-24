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
import ScreenDetect from "@/utils/ScreenDetect";
export default defineComponent({
  name: "HomePage",
  components: {
    FullContainer,
    FirstPart,
    SecondPart,
    ThirdPart,
    
  },
  data() {
    return {
      images: ["image_articles", "image2_articles", "image3_articles"],
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      
    };
  },
  mounted() {
    this.windowWidth = new ScreenDetect().width(this.windowWidth);
  },
  methods: {
    reference(): void {
      const data = this.windowHeight;
      if (data > 1024) {
        scrollTo({ top: 900, behavior: "smooth" });
      } else if (data <= 1024 && data > 870) {
        scrollTo({ top: this.windowHeight * 1.75, behavior: "smooth" });
      } else {
        scrollTo({ top: this.windowHeight * 1.75, behavior: "smooth" });
      }
    }
  }
});
</script>

<style lang="scss" scoped></style>
