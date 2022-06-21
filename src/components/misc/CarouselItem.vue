<template>
  <div class="tile" @click="redirect">
    <div class="tile__media">
      <img class="tile__img" :src="imgs || foo" alt="" />
    </div>
    <div class="tile__details">
      <h1 :title="content"></h1>
      <div class="tile__title">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CarouselItem",
  emits: ["redirectedUrl"],
  props: ["imgs", "content"],
  data() {
    return {
      foo: "@/assets/images/foo3.webp"
    };
  },
  methods: {
    redirect() {
      this.$emit("redirectedUrl");
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./carousel.scss";
</style>
