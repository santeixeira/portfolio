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
              <i class="fas fa-user"></i>
              <span>github.com/santeixeira</span>
            </li>
            <li>
              <i class="fas fa-user"></i>
              <span>linkedin.com/user/santeixeira</span>
            </li>
          </ul>
        </div>
        <div class="column is-9">
          <h1>Sobre mim</h1>
          <p>
            Sou um programador, amante do progresso e admirador de muitos
            esportistas, pois neles, vejo a vontade de sempre melhorar. Hoje sou
            estudante de Ciencia da Computacao no Instituto Federal do Ceara.
            Almejo a constancia nos estudos, na academia (tanto fisica quanto
            intelectual) e na vida.
          </p>
          <p>
            Vim da engenharia, onde cursei durante 2 anos e meio Engenharia
            Metalurgica e um ano Engenharia Mecânica. Nao me considero um
            profissional que mudou de carreira, mas que me encontrou dentro do
            desenvolvimento.
          </p>
          <p>
            Dentro da universidade Federal do Ceará, participei de um projeto de
            extensao chamado Avoante Aeromec Aerodesign, onde fui líder de
            subsistema, melhorando diversas qualidades em Soft-skills, como
            trabalhar em equipe dentro de metodologias ageis, lidar com
            dead-lines e principalmente a coordenar um time para um fim comum.
          </p>
          <p>
            Já nas hard-skills da minha area atual, utilizei python para criacao
            de programas de automatizacao e optimizacao do tempo de projeto das
            cargas da aeronave, analisando os dados e repassando em torno de 80%
            mais rapido.
          </p>
          <h2>Para informações mais sucintas</h2>
          <CButton>Conferir curriculo</CButton>
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
  components: { BlockBox, FullContainer, CButton, Certificates, Portfolio }
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
  &:hover {
    color: $third-secondary-color;
    font-weight: 800;
    box-shadow: 0.1em 0.1em 0.1em 0.5em
      rgba($color: $third-secondary-color, $alpha: 0.025);
  }
}

ul.multilines i {
  margin-right: 1em;
}
</style>
