<template>
  <li>
    <ul class="submenu">
      <li>
        <h2 class="subtitulo">Objetivo</h2>
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
      <li class="justify">
        <span>{{ objetivo }}</span>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ObjectivePart",
  data() {
    return {
      objetivo:
        "Viso assumir desafios, atuar em equipes integradas usando de metodologias ágeis para implementação de soluções inovadoras. Disposto a ser mentorado dentro do projeto, como um júnior em desenvolvimento web e softwares, afim de receber orientações especificas para o mesmo, enriquecendo assim meu repertorio na Stack."
    };
  }
});
</script>

<style scoped>
ul.submenu li.justify {
  text-align: justify;
}
</style>
