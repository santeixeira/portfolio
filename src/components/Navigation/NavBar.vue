<template>
  <header :class="{ aria: ariaHidden }">
    <router-link to="/">
      <img src="@/assets/logo.png" />
    </router-link>

    <nav id="nav" role="navigation" :class="{ container: widthClass }">
      <ul class="nav__links" :class="{ 'nav-active': ariaHidden }">
        <li>
          <router-link
            class="navbar-item"
            :class="{ 'dark-mode': darkMode }"
            to="/"
            >Página Inicial</router-link
          >
        </li>
        <li>
          <router-link
            class="navbar-item"
            :class="{ 'dark-mode': darkMode }"
            to="/portfolio"
            >Portfólio</router-link
          >
        </li>
        <li class="navbar-item is-hoverable">
          <a class="navbar-link" :class="{ 'dark-mode': darkMode }">
            Minerva
          </a>

          <div class="navbar-dropdown">
            <router-link class="navbar-item" to="/estudos">Estudos</router-link>
            <router-link class="navbar-item" to="/estudos"
              >Notícias</router-link
            >
            <router-link class="navbar-item" to="/estudos">Artigos</router-link>
            <router-link class="navbar-item" to="/estudos"
              >Documentações</router-link
            >
            <hr class="navbar-divider" />
            <a class="navbar-item"> Contato </a>
          </div>
        </li>
        <li class="navbar-item __toggle">
          <ToggleButton @checkedBox="alterTheme" />
        </li>
      </ul>
    </nav>
    <div class="buttons">
      <button @click="hiddenBurger" class="burger fas fa-bars"></button>
    </div>
  </header>
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
      ariaHidden: false,
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
      this.ariaHidden = !this.ariaHidden;
    }
  }
});
</script>

<style lang="scss" scoped>
@import url("@/assets/config_sass/navbar.scss");
#nav {
  justify-content: end;
}
header {
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 50px 0.5em;
  width: 100%;
  z-index: 100;
}
header img {
  height: 3em;
}
nav {
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: transparent;
  display: flex;
  align-items: center;
  transition: all 0.2s ease-in-out;
}
.nav__links {
  list-style: none;
}

.nav__links li {
  display: inline-block;
  width: 9em;
}

.nav__links li a {
  transition: all 0.3s ease 0s;
  justify-content: center !important;
  &:hover {
    color: #4fb49d;
  }
}
header .burger {
  display: none;
  align-items: center;
}

@media screen and (min-width: 1088px) {
  .navbar-dropdown a.navbar-item {
    padding-right: 2.5rem;
  }
}

@media screen and (max-width: 768px) {
  #nav {
    margin-left: 10em;
  }
  body {
    overflow-x: hidden;
  }

  .nav__links {
    position: fixed;
    right: 0px;
    height: 92vh;
    top: 13vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    transform: translateX(100%);
    transition: transform 0.5s ease-in;
    z-index: 4;
  }
  header .burger {
    display: block;
  }
}

.nav-active {
  transform: translateX(0%);
  color: #fff !important;
  z-index: 4;
}
header.aria {
  background-color: #000;
}
</style>
