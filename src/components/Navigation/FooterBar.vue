<template>
  <footer>
    <div class="columns mt-4">
      <div class="column is-3 _footer-col is-multiline">
        <h2>Contatos</h2>
        <h3>
          <router-link to="/">Email</router-link>
        </h3>
        <h3>
          <router-link to="/">Whatsapp</router-link>
        </h3>
        <h3>
          <router-link to="/">LinkedIn</router-link>
        </h3>
        <h3>
          <router-link to="/">Github</router-link>
        </h3>
        <h3>
          <router-link to="/">Instagram</router-link>
        </h3>
      </div>
      <div class="column is-3 _footer-col is-multiline">
        <h2>Portfólio</h2>
        <h3>
          <router-link to="/">Apresentação</router-link>
        </h3>
        <h3>
          <router-link to="/">Currículo</router-link>
        </h3>
        <h3>
          <router-link to="/">Aplicações</router-link>
        </h3>
        <h3>
          <router-link to="/">Certificados</router-link>
        </h3>
      </div>
      <div class="column is-3 _footer-col">
        <h2>Projeto Minerva</h2>
        <h3>
          <router-link to="/">Estudos</router-link>
        </h3>
        <h3>
          <router-link to="/">Pomodoro</router-link>
        </h3>
        <h3>
          <router-link to="/">Class</router-link>
        </h3>
        <h3>
          <router-link to="/">Notícias</router-link>
        </h3>
        <h3>
          <router-link to="/">Artigos</router-link>
        </h3>
        <h3>
          <router-link to="/">Documentações</router-link>
        </h3>
      </div>
      <div class="column is-3 _footer-col">
        <h2>Políticas</h2>
        <h3>
          <router-link to="/">Termos de Uso</router-link>
        </h3>
      </div>
    </div>
    <div class="columns __foot">
      <h4>Desenvolvido por San Thiago Teixeira - 2022</h4>
    </div>
  </footer>
</template>

<script lang="ts">
import ScreenDetect from "@/utils/ScreenDetect";
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooterBar",
  mounted() {
    this.widthClass = new ScreenDetect().mounted(
      this.windowWidth,
      this.widthClass
    );
  },
  data() {
    return {
      widthClass: false,
      windowWidth: innerWidth
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
@import url("https://fonts.googleapis.com/css?family=Bitter");
footer {
  background-color: #000;
  color: #fff;
  
}

footer .columns.__foot {
  justify-content: center;
  align-self: center;
  padding: 1em 0 1em;
}

a,
h4 {
  font-size: 0.75em;
  color: #fff;
}
img {
  height: 3em;
}
h3 {
  font-size: 0.75em;
  margin: 1em 0 1em;
}

._footer-col {
  align-self: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 1em;
  height: 14em;
}

@media screen and (max-width: 768px) {
  ._footer-col {
    height: 100%;
  }
  h2 {
    margin: 0.5em 0 0.5em !important;
  }
}

._footer {
  background-image: linear-gradient(130deg, $gray-scale, white);
  padding: 0 0 0;
}
</style>
