<template>
  <li>
    <ul class="submenu">
      <li>
        <h2 class="subtitulo">Línguas</h2>
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
        <span
          ><strong>{{ linguas.idioma }}</strong></span
        >
      </li>
      <li>
        <span>{{ linguas.nivel }}</span>
      </li>
      <li v-if="segundaLingua">
        <span
          ><strong>{{ segundaLingua.idioma }}</strong></span
        >
      </li>
      <li v-if="segundaLingua">
        <span>{{ segundaLingua.nivel }}</span>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LangPart",
  data() {
    return {
      linguas: {
        idioma: "Inglês",
        nivel: "Avançado"
      },
      segundaLingua: {
        idioma: "Francês",
        nivel: "Intermediário"
      }
    };
  }
});
</script>
