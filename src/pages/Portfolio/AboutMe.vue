<template>
  <FullContainer>
    <BlockBox>
      <div class="columns is-gapless">
        <div class="column is-3">
          <ul class="multilines">
            <li>
              <img
                src="https://avatars.githubusercontent.com/u/67292685?v=4"
                alt=""
              />
            </li>
            <li>
              <i class="fas fa-user"></i>
              <span>San Thiago Teixeira</span>
            </li>
            <li>
              <i class="fa-brands fa-github"></i>
              <span>Github</span>
            </li>
            <li>
              <i class="fa-brands fa-linkedin"></i>
              <span>Linkedin</span>
            </li>
          </ul>
        </div>
        <div class="column is-9">
          <h1>Sobre mim</h1>
          <p>
            Sou um programador, amante do progresso e admirador de muitos
            esportistas, pois neles, vejo a vontade de sempre melhorar. Hoje sou
            estudante de Ciencia da Computação no Instituto Federal do Ceara.
            Almejo a consistência nos estudos, na academia (tanto fisica quanto
            intelectual) e na vida.
          </p>
          <p>
            Vim da engenharia, onde cursei durante 2 anos e meio Engenharia
            Metalúrgica e um ano Engenharia Mecânica. Não me considero um
            profissional que mudou de carreira, mas que se encontrou dentro do
            desenvolvimento de softwares, onde contarei como:
          </p>
          <p>
            Dentro da universidade Federal do Ceará, participei de um projeto de
            extensão chamado Avoante Aeromec Aerodesign, onde fui líder do
            subsistema de Cargas e Aeroelasticidade, o que me fez aprimorar
            diversas qualidades em Soft-skills, como trabalhar em equipe dentro
            de metodologias ageis, lidar com dead-lines e principalmente a
            coordenar um time para um fim comum.
          </p>
          <p>
            Já nas hard-skills, utilizei python para criação de programas de
            automatização e optimização da obtenção de cargas e efeitos
            aeroelasticos da aeronave projetada, tempo de projeto das cargas da
            aeronave, analisando os dados e repassando em torno de 80% mais
            rapido.
          </p>
          <h2>Para informações mais sucintas</h2>
          <router-link to="/curriculum"
            ><CButton>Conferir curriculo</CButton></router-link
          >
        </div>
      </div>
    </BlockBox>
  </FullContainer>
  <Portfolio />
  <Certificates />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BlockBox, FullContainer, CButton } from "@/components/index";
import { Certificates, Portfolio } from "./index";
export default defineComponent({
  name: "AboutMe",
  components: { BlockBox, FullContainer, CButton, Certificates, Portfolio },
  methods: {}
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
.multilines {
  margin: 2em 0 0 2em !important;
  text-align: -webkit-center !important;
  position: relative;
}
.line-item:not(:last-child) {
  margin-bottom: calc(1.5rem - 0.75rem);
}

ul.multilines li {
  text-align: -webkit-center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.75em;
  &:hover {
    color: $third-secondary-color;
    font-weight: 800;
    box-shadow: 0.1em 0.1em 0.1em 0.5em
      rgba($color: $third-secondary-color, $alpha: 0.025);
  }
}
.block p {
  font-size: 1em;
  text-align: justify !important;
}

.block h2 {
  font-size: 1.75em;
  margin: 2em 0 0em;
}

ul.multilines li img {
  box-shadow: 0.1em 0.1em 0.1em 0.1em
    rgba($color: $third-secondary-color, $alpha: 0.23);
  height: 16.6666em;
  width: 16.6666em;
  margin-bottom: 1.75em;
}

ul.multilines span {
  font-size: 1em;
  font-weight: 500;
  cursor: pointer;
  
}

ul.multilines i {
  margin-right: 1em;
}

@media only screen and (max-width: 820px) {
  ul.multilines li img[data-v-c5e9a9ac] {
    box-shadow: 0.1em 0.1em 0.1em 0.1em rgb(40 109 135 / 23%);
    height: 16.6666em;
    width: 16.6666em;
    margin: 1.75em;
  }

  .multilines[data-v-c5e9a9ac] {
    margin: 2em 0 0 0em !important;
    text-align: -webkit-center !important;
    position: relative;
  }

  ul.multilines li[data-v-c5e9a9ac] {
    text-align: -webkit-center;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.75em;
  }
}
</style>
