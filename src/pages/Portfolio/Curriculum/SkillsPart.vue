<template>
  <li>
    <ul id="skills" class="submenu">
      <li>
        <h2 class="subtitulo">Habilidades</h2>
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
        <ul class="align-horizontal">
          <li v-for="(skill, index) in skills" :key="skill">
            {{ skills[index] }}
          </li>
        </ul>
      </li>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SkillsPart",
  data() {
    return {
      skills: [
        "Node.js",
        "Vue.js",
        "Adonis.js",
        "MySQL",
        "PostgreSQL",
        "Express",
        "TypeScript",
        "Git",
        "Docker"
      ]
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/dark-mode.scss";
#skills {
  margin-top: -2.5em;
  color: #2c3e50;
}
ul.align-horizontal {
  list-style-type: none;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.25em !important;
}
ul.align-horizontal span {
  font-size: 1em !important;
}
ul.align-horizontal li {
  flex: 0 0 33%;
  border: none;
  padding: 0 1em 2em;
  display: flex;
  align-items: flex-end;
  margin: 0 !important;
  font-weight: 500;
}

ul.submenu li.justify {
  text-align: justify;
}
</style>
