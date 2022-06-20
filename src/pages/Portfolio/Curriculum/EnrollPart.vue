<template>
  <li>
    <ul class="submenu">
      <li>
        <h2 class="subtitulo">Formação</h2>
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
        <span>{{ formacao.periodo }}</span>
      </li>
      <li>
        <span>{{ formacao.curso }}</span>
      </li>
      <li>
        <span>{{ formacao.instituicao }}</span>
      </li>
      <li>
        <span>{{ formacao.situacao }}</span>
      </li>
    </ul>
    <ul class="submenu" v-if="segundaFormacao">
      <li>
        <span>{{ segundaFormacao.periodo }}</span>
      </li>
      <li>
        <span>{{ segundaFormacao.curso }}</span>
      </li>
      <li>
        <span>{{ segundaFormacao.instituicao }}</span>
      </li>
      <li>
        <span>{{ segundaFormacao.situacao }}</span>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "EnrollPart",
  data() {
    return {
      formacao: {
        periodo: "2021-2023",
        curso: "Ciência da Computação",
        instituicao: "Instuto Federal do Ceará",
        situacao: "Cursando"
      },
      segundaFormacao: {
        periodo: "2019-2021",
        curso: "Engenharia Metalúrgica",
        instituicao: "Universidade Federal do Ceará",
        situacao: "Interrompido"
      }
    };
  }
});
</script>
