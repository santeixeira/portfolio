<template>
  <div class="block is-align-items-center">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlockBox"
});
</script>

<style lang="scss">
@import "./blockbox.scss";
</style>

<!-- <ToggleButton /> -->
<!-- <a class="navbar-item"> Página inicial </a>

        <a class="navbar-item"> Portfólio </a>

        <a class="navbar-item"> Estudos </a>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Artigos e Documentos </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> Notícias </a>
            <a class="navbar-item"> Artigos </a>
            <a class="navbar-item"> Documentações </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div> -->
