<template>
  <FullContainer>
    <FirstPart />
    <SecondPart />
    <ThirdPart />
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
      images: ["image_articles", "image2_articles", "image3_articles"]
    };
  }
});
</script>

<style lang="scss" scoped>
@import "./Home.scss";
</style>
