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
            esportistas, pois neles, vejo a vontade de sempre melhorar.
          </p>

          <p>
            Viso assumir desafios, atuar em equipes integradas usando de
            metodologias ágeis para implementação de soluções inovadoras.
            Disposto a ser mentorado dentro do projeto, como um júnior em
            desenvolvimento web e softwares, afim de receber orientações
            especificas para o mesmo, enriquecendo assim meu repertório na
            Stack.
          </p>
        </div>
      </div>
    </BlockBox>
  </FullContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { BlockBox, FullContainer } from "@/components/index";

export default defineComponent({
  name: "AboutMe",
  components: { BlockBox, FullContainer }
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

ul.multilines li img {
  box-shadow: 0.1em 0.1em 0.1em 0.1em
    rgba($color: $third-secondary-color, $alpha: 0.23);
  height: 16.6666em;
  width: 16.6666em;
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
