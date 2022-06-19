<template>
  <FullContainer>
    <div class="columns">
        <div class="column is-full">
            <h1>Meus certificados</h1>
        </div>
    </div>
    <div class="columns">
        <Carousel />
    </div>
  </FullContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FullContainer, Carousel } from "@/components/index";

export default defineComponent({
  name: "CetificatesPart",
  components: { FullContainer, Carousel }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss"
</style>
