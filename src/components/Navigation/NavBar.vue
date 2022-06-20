<template>
  <nav
    class="navbar"
    role="navigation"
    aria-label="main navigation"
    :class="{ container: widthClass }"
  >
    <div class="navbar-brand">
      <router-link to="/">
        <img src="@/assets/logo.png" />
      </router-link>

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
        <router-link
          class="navbar-item"
          :class="{ 'dark-mode': darkMode }"
          to="/"
          >Página Inicial</router-link
        >
        <router-link
          class="navbar-item"
          :class="{ 'dark-mode': darkMode }"
          to="/portfolio"
          >Portfólio</router-link
        >

        <router-link
          class="navbar-item"
          :class="{ 'dark-mode': darkMode }"
          to="/estudos"
          >Estudos</router-link
        >
        <router-link
          class="navbar-item"
          :class="{ 'dark-mode': darkMode }"
          to="/estudos"
          >Roadmap</router-link
        >

        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" :class="{ 'dark-mode': darkMode }">
            Artigos e Documentos
          </a>

          <div class="navbar-dropdown">
            <a class="navbar-item"> Notícias </a>
            <a class="navbar-item"> Artigos </a>
            <a class="navbar-item"> Documentações </a>
            <hr class="navbar-divider" />
            <a class="navbar-item"> Entre em contato comigo </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <ToggleButton @checkedBox="alterTheme" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { ScreenDetect } from "@/utils/index";
import { defineComponent } from "vue";
import { ToggleButton } from "../index";

const sc = new ScreenDetect();

export default defineComponent({
  name: "NavBar",
  components: { ToggleButton },
  emits: ["alteredTheme"],
  data() {
    return {
      darkMode: false,
      ariaHidden: true,
      widthClass: false,
      windowWidth: innerWidth
    };
  },
  mounted() {
    this.widthClass = sc.mounted(this.windowWidth, this.widthClass);
    this.darkMode = sc.darkTheme(this.darkMode);
  },
  methods: {
    alterTheme(): void {
      this.darkMode = !this.darkMode;
      this.$emit("alteredTheme", this.darkMode);
    },
    hiddenBurger() {
      document.getElementById("one")?.ariaHidden;
    }
  }
});
</script>

<style lang="scss" scoped>
@import url("@/assets/config_sass/navbar.scss");
</style>
