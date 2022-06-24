<template>
  <div class="carousel">
    <div class="carousel-inner">
      <a href="#">
        <CarouselIndicators
          v-if="indicators"
          :total="slides.length"
          :current-index="currentSlide"
          @switch="switchSlide($event)"
        ></CarouselIndicators>
        <CarouselItem
          v-for="(slide, index) in slides"
          :slide="slide"
          :key="`item-${index}`"
          :current-slide="currentSlide"
          :index="index"
          :direction="direction"
          @mouseenter="stopSlideTimer"
          @mouseout="startSlideTimer"
          ><slot></slot
        ></CarouselItem>
        <ButtonCarousel
          v-if="controls"
          @prev="prev"
          @next="next"
        ></ButtonCarousel>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CarouselItem from "./CarouselItem.vue";
import ButtonCarousel from "./ButtonCarousel.vue";
import CarouselIndicators from "./CarouselIndicators.vue";

export default defineComponent({
  name: "LandingCarousel",
  props: {
    slides: {
      type: Array,
      required: true
    },
    controls: {
      type: Boolean,
      default: false
    },
    indicators: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 10000
    }
  },
  components: { CarouselItem, ButtonCarousel, CarouselIndicators },
  data: () => ({
    currentSlide: 0,
    slideInterval: 0,
    direction: "right"
  }),
  methods: {
    setCurrentSlide(index: number) {
      this.currentSlide = index;
    },
    prev(step = -1) {
      const index =
        this.currentSlide > 0
          ? this.currentSlide + step
          : this.slides.length - 1;
      this.setCurrentSlide(index);
      this.direction = "left";
      this.startSlideTimer();
    },
    _next(step = 1) {
      const index =
        this.currentSlide < this.slides.length - 1
          ? this.currentSlide + step
          : 0;
      this.setCurrentSlide(index);
      this.direction = "right";
    },
    next(step = 1) {
      this._next(step);
      this.startSlideTimer();
    },
    startSlideTimer() {
      this.stopSlideTimer();
      this.slideInterval = setInterval(() => {
        this._next();
      }, this.interval);
    },
    stopSlideTimer() {
      clearInterval(this.slideInterval);
    },
    switchSlide(index: number) {
      const step = index - this.currentSlide;
      if (step > 0) {
        this.next(step);
      } else {
        this.prev(step);
      }
    }
  },
  mounted() {
    this.startSlideTimer();
  },
  beforeUnmount() {
    this.stopSlideTimer();
  }
});
</script>

<style lang="scss" scoped>
.titleCarousel {
  position: absolute;
  justify-content: center;
  text-align: center;
}
.carousel {
  display: flex;
  justify-content: center;
  text-align: center;
}
.carousel-inner {
  position: relative;
  width: 100vw;
  height: 400px;
  overflow: hidden;
  border-radius: 6px;
}
.carousel-inner a{
  &:hover{
    background-color: black;
  }
}
</style>
