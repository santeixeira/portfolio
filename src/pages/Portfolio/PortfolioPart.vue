<template>
  <FullContainer>
    <div class="columns">
        <div class="column is-full">
            <h1>Minhas aplicações</h1>
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
import { FullContainer, MiniBoxes } from "@/components/index";

export default defineComponent({
  name: "PortfolioPart",
  components: { FullContainer, MiniBoxes }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss"
</style>
