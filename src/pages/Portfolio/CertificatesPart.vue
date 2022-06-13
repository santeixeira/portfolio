<template>
  <FullContainer>
    <div class="columns">
        <div class="column is-full">
            <h1>Meus certificados</h1>
        </div>
    </div>
    <div class="columns">
        <div class="column is-2">
            <MiniBoxes></MiniBoxes>
        </div>
        <div class="column is-2">
            <MiniBoxes></MiniBoxes>
        </div>
        <div class="column is-2">
            <MiniBoxes></MiniBoxes>
        </div>
        <div class="column is-2">
            <MiniBoxes></MiniBoxes>
        </div>
        <div class="column is-2">
            <MiniBoxes></MiniBoxes>
        </div>
        <div class="column is-2">
            <MiniBoxes></MiniBoxes>
        </div>
    </div>
  </FullContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FullContainer } from "@/components/index";
import MiniBoxes from "@/components/Boxes/MiniBoxes.vue";

export default defineComponent({
  name: "CetificatesPart",
  components: { FullContainer, MiniBoxes }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss"
</style>
