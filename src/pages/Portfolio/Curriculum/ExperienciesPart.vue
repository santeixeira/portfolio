<template>
  <li id="experiece">
    <ul class="submenu">
      <li>
        <h2 class="subtitulo">Experiências</h2>
        <svg
          width="41"
          height="3"
          viewBox="0 0 41 3"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="41" height="3" fill="#404F66" />
        </svg>
      </li>
      <li>
        <ul class="align-horizontal">
          <li>
            <span>{{ experience.periodo }}</span>
          </li>
          <li>
            <span>{{ experience.posicao }}</span>
          </li>
        </ul>
      </li>
      <li>
        <ul class="align-horizontal">
          <li>
            <span>{{ experience.empresa }}</span>
          </li>
          <li>
            <span>{{ experience.stack }}</span>
          </li>
        </ul>
      </li>
      <li class="justify">
        <span>{{ experience.desc }}</span>
      </li>

      <li v-if="secondExperience">
        <ul class="align-horizontal">
          <li>
            <span>{{ secondExperience.periodo }}</span>
          </li>
          <li>
            <span>{{ secondExperience.posicao }}</span>
          </li>
        </ul>
      </li>
      <li v-if="secondExperience">
        <ul class="align-horizontal">
          <li>
            <span>{{ secondExperience.empresa }}</span>
          </li>
          <li>
            <span>{{ secondExperience.stack }}</span>
          </li>
        </ul>
      </li>
      <li v-if="secondExperience" class="justify">
        <span>{{ secondExperience.desc }}</span>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExperiencesPart",
  data() {
    return {
      experience: {
        desc: "Desempenho atividades terceirizadas pela empresa SJ Imóveis em Fortaleza, onde faço manutenção e migração para Web do Sistema de Gestão Integrada (SGI) da empresa, adicionando responsividade para as atividades dos outros setores. Além disso, sou responsável pela criação de formulários web para o site da mesma.",
        posicao: "Estagiário",
        empresa: "Techway Informática LTDA",
        stack: "ASP.NET, SQL Server, JQuery",
        periodo: "11/2021 - 04/2022"
      },
      secondExperience: {
        desc: "Responsável pelo desenvolvimento de microsserviços de atividades entre empresas e candidatos, ligando habilidades requeridas pelas vagas entre ambos, onde foi criada Dashboard usando Vue.js e toda a lógica de programação com Adonis.js em sua versão com TypeScript. Também atuo no CI/CD de deploy.",
        posicao: "Desenvolvedor Full Stack Júnior",
        empresa: "Jobi Recrutamento e Seleção LTDA",
        stack: "Adonis.js (Node.js), MySQL, Vue.js, TypeScript, Docker",
        periodo: "03/2022 - Atual"
      }
    };
  }
});
</script>
<style scoped>
#experiece {
  margin-top: -3em;
}
ul.align-horizontal {
  list-style: none;
  display: flex;
  justify-content: space-around;
  font-size: 1.25em !important;
}
ul.align-horizontal span {
  font-size: 1em !important;
}
ul.align-horizontal li {
  display: inline;
  margin: 0 !important;
}

ul.submenu li.justify {
  text-align: justify;
}
</style>
