<template>
  <footer>
    <div class="columns mt-4">
      <div class="column is-3 _footer-col is-multiline">
        <h2>Contatos</h2>
        <h3>Email</h3>
        <h3>Whatsapp</h3>
        <h3>LinkedIn</h3>
        <h3>Github</h3>
        <h3>Instagram</h3>
      </div>
      <div class="column is-3 _footer-col is-multiline">
        <h2>Portfólio</h2>
        <h3>Apresentação</h3>
        <h3>Currículo</h3>
        <h3>Aplicações</h3>
        <h3>Certificados</h3>       
      </div>
      <div class="column is-3 _footer-col"><h2>Contatos</h2></div>
      <div class="column is-3 _footer-col"><h2>Contatos</h2></div>
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
  font-family: "Bitter", serif;
}

footer .columns.__foot {
  justify-content: center;
  align-self: center;
  padding: 1em 0 1em;
}

h4 {
  font-size: 0.75em;
  color: #fff;
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
}

._footer {
  background-image: linear-gradient(130deg, $gray-scale, white);
  padding: 0 0 0;
}
</style>
