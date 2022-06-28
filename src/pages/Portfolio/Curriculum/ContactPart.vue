<template>
  <li>
    <ul id="contatos" class="submenu">
      <li>
        <h2 class="subtitulo">Contato</h2>
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
      <li class="clicker" @click="redirect(urls.email)">
        <i class="fas fa-at"></i>
        <span>{{ contatos.email }}</span>
      </li>
      <li class="clicker" @click="redirect(urls.github)">
        <i class="fa-brands fa-github"></i>
        <span>
          {{ contatos.github }}
        </span>
      </li>
      <li class="clicker" @click="redirect(urls.linkedin)">
        <i class="fa-brands fa-linkedin"></i>
        <span>
          {{ contatos.linkedin }}
        </span>
      </li>
      <li class="clicker" @click="redirect(urls.whatsapp)">
        <i class="fa-brands fa-whatsapp"></i>
        <span>
          {{ contatos.whatsapp }}
        </span>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import Methods from "@/utils/Methods";
import { defineComponent } from "vue";
import modes from "@/assets/static_texts/texts.json";

export default defineComponent({
  name: "ContactPart",
  data() {
    return {
      contatos: {
        email: "jbsanthiago@gmail.com",
        github: "github.com/santeixeira",
        linkedin: "Linkedin",
        whatsapp: "Whatsapp"
      },
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

<style scoped>
.clicker {
  cursor: pointer;
}
</style>
