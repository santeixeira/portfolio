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
            <li @click="redirect(urls.instagram)">
              <i class="fas fa-user"></i>
              <span>San Thiago Teixeira</span>
            </li>
            <li @click="redirect(urls.whatsapp)">
              <i class="fa-brands fa-whatsapp"></i>
              <span>Contato</span>
            </li>
            <li @click="redirect(urls.github)">
              <i class="fa-brands fa-github"></i>
              <span>Github</span>
            </li>
            <li @click="redirect(urls.linkedin)">
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
            estudante de Ciência da Computação no Instituto Federal do Ceará.
            Almejo a consistência nos estudos, na academia (tanto física quanto
            institucional) e na vida.
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
            aeroelásticos da aeronave projetada, tempo de projeto das cargas da
            aeronave, analisando os dados e repassando em torno de 80% mais
            rápido.
          </p>
          <h2>Para informações mais sucintas</h2>
          <CButton @click="isOpen = true">Conferir curriculo</CButton>

          <Modal :open="isOpen" @close="isOpen = !isOpen">
            <div id="curriculum" class="columns is-centered">
              <CurriculumTemplate />
            </div>
            <div class="columns is-centered">
              <CButton @click="''">Download</CButton>
            </div>
          </Modal>
        </div>
      </div>
    </BlockBox>
  </FullContainer>
  <Portfolio />
  <Certificates />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { BlockBox, FullContainer, CButton, Modal } from "@/components/index";
import { Certificates, Portfolio } from "./index";
import { Methods } from "@/utils/index";
import modes from "@/assets/static_texts/texts.json"
import CurriculumTemplate from "./CurriculumTemplate.vue";

export default defineComponent({
  name: "AboutMe",
  components: {
    BlockBox,
    FullContainer,
    CButton,
    Modal,
    Certificates,
    Portfolio,
    CurriculumTemplate
  },
  setup() {
    const isOpen = ref(false);
    return { isOpen };
  },
  data() {
    return {
      urls: modes.urls
    };
  },
  methods: {
    redirect(url: string): void {
      new Methods().redirect(url);
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
.vue-modal-content.a4-paper {
  margin: 1em !important;
}
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
    margin: 0 !important;
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
  .block p {
    padding: 0;
  }

  .block h2[data-v-c5e9a9ac] {
    font-size: 1.5em;
    margin: 2em 0 0em;
    text-align: center;
  }
}
</style>
