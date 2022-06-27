<template>
  <CurriculumPaper>
    <div class="columns">
      <div id="column1" class="column is-4 is-multiline">
        <ul class="menu">
          <Enroll />
          <Contact />
          <Lang />
        </ul>
      </div>
      <div class="column" id="titulo">
        <div class="columns">
          <div class="column is-full">
            <h1 class="titulo">{{ dadosPessoais.nome }}</h1>
            <h3>{{ dadosPessoais.titulo }}</h3>
            <svg
              width="132"
              height="11"
              viewBox="0 0 132 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="132" height="11" fill="#404F66" />
            </svg>
          </div>
        </div>
        <div id="objective" class="columns">
          <div class="column"><Objective class="part-2" /></div>
        </div>
        <div id="objective" class="columns">
          <div class="column"><Experiences class="part-2" /></div>
        </div>
        <div id="objective" class="columns">
          <div class="column"><Skills class="part-2" /></div>
        </div>
      </div>
    </div>
  </CurriculumPaper>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CurriculumPaper } from "@/components/index";
import { Enroll, Contact, Lang, Objective, Experiences, Skills } from "./index";
export default defineComponent({
  name: "CurriculumTemplate",
  components: {
    CurriculumPaper,
    Enroll,
    Contact,
    Lang,
    Skills,
    Objective,
    Experiences
  },
  data() {
    return {
      dadosPessoais: {
        nome: "San Thiago Teixeira",
        titulo: "Desenvolvedor Node.js"
      }
    };
  }
});
</script>

<style lang="scss">
#objective {
  margin-top: 1em;
}
.part-2 h2.subtitulo {
  text-align: start !important;
}
li.part-2::marker {
  content: "";
}

h2.subtitulo {
  text-align: end !important;
  color: #000 !important;
  margin: 0 !important;
  font-weight: 200;
  font-size: 1.5em !important;
}
ul.menu li {
  margin: 3em 0 3em;
  text-align: end;
}
ul.menu {
  margin-top: 10em;
  font-family: "Poppins", sans-serif;
}
ul.submenu li {
  margin: 1em 0 1em;
  font-size: 0.75em;
  line-height: 1em;
}

#titulo {
  text-align: start;
}

ul.submenu li i {
  margin-right: 0.5em;
}

.columns .column.is-full h1.titulo {
  color: #000 !important;
  margin: 0 0 -0.25em;
}
</style>
