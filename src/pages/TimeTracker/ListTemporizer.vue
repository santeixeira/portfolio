<template>
  <Cronometer :timeSeconds="timeSeconds" />
  <button class="button" @click="startCount">
    <span class="icon">
      <i :class="icon"></i>
    </span>
    <span>{{ text }}</span>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Cronometer } from "@/components/index";

export default defineComponent({
  name: "ListTemporizer",
  components: { Cronometer },
  data() {
    return {
      timeSeconds: 0,
      cronometer: 0,
      timeCondition: true,
      icon: "fas fa-play",
      text: "play"
    };
  },
  methods: {
    startCount() {
      if (this.timeCondition == true) {
        this.cronometer = setInterval(() => {
          this.timeSeconds++;
        }, 1000);
        this.timeCondition = false;
        this.icon = "fas fa-stop";
        this.text = "stop";
      } else {
        clearInterval(this.cronometer);
        this.icon = "fas fa-play";
        this.text = "play";
        this.timeCondition = true;
        this.$emit("endedTime", this.timeSeconds);
        this.timeSeconds = 0;
      }
    }
  }
});
</script>

<style scoped></style>
