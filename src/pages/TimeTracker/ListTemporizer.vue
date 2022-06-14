<template>
  <div class="organize-list is-justify-content-space-around">
    <Cronometer :timeSeconds="timeSeconds" />
    <CButton @click="startCount">
      <span class="icon">
        <i :class="icon"></i>
      </span>
      <span>{{ text }}</span>
    </CButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Cronometer, CButton } from "@/components/index";

export default defineComponent({
  name: "ListTemporizer",
  components: { Cronometer, CButton },
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
