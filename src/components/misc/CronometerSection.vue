<template>
  <section>
    <strong>{{ timePassed }}</strong>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CronometerSection",
  props: {
    timeSeconds: {
      type: Number,
      default: 0
    }
  },
  computed: {
    timePassed(): string {
      return new Date(this.timeSeconds * 1000).toISOString().substr(11, 8);
    }
  }
});
</script>

<style scoped></style>
