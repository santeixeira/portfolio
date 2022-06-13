<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img
          class="not-hover"
          src="https://t3.ftcdn.net/jpg/02/60/73/30/360_F_260733058_ZI2NUHBoU9qt8upuv1PuJpwvSUbgp0iF.jpg"
        />
      </a>

      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Página Inicial</router-link>
        <router-link class="navbar-item" to="/portfolio">Portfólio</router-link>

        <router-link class="navbar-item" to="/estudos">Estudos</router-link>

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link"> Artigos e Documentos </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> Notícias </a>
            <a class="navbar-item"> Artigos </a>
            <a class="navbar-item"> Documentações </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Report an issue </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <ToggleButton />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ToggleButton } from "../index";
export default defineComponent({
  name: "NavBar",
  components: { ToggleButton }
});
</script>

<style lang="scss" scoped>
@import url("@/assets/config_sass/navbar.scss");
</style>
