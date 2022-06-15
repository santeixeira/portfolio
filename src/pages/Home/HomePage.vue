<template>
  <FullContainer>
    <FirstPart id="introduction"/>
    <SecondPart id="partitions"/>
    <ThirdPart id="#reference"/>
  </FullContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FullContainer } from "@/components/index";
import { FirstPart, SecondPart, ThirdPart } from "./index";
export default defineComponent({
  name: "HomePage",
  emits: ["#reference"],
  components: { FullContainer, FirstPart, SecondPart, ThirdPart },
  data() {
    return {
      references: "reference",
      images: ["image_articles", "image2_articles", "image3_articles"]
    };
  }
});
</script>

<style lang="scss" scoped>
@import "./Home.scss";
</style>
