<template>
  <div class="block is-align-items-center">
    <h1>Bem vindos, samaritanos!</h1>
    <p v-if="{}">
      Esta é um ótima <strong class="timeset">{{ dateTime() }}</strong> para estudar, não? Fique
      de olho nas <a href="#">notícias recentes</a>!
    </p>
    <p>
      Desejo-te boas vindas à minha humilde casa virtual, onde deixo todas as
      minhas evoluções como programador, desde portfólio a artigos cientificos
      das mais diversas areas. Programação, matemática, física, dicas que posso
      oferecer, até mesmo pitacos em aeronáutica.
    </p>

    <p>
      Aqui você pode também organizar suas horas de estudos, com metodologias de
      estudos rápido, como <strong>pomodoro</strong>, listagem de categorias e
      afins. Dá uma conferida, colega!
    </p>

    <CButton>Começar</CButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CButton } from "@/components/index";

export default defineComponent({
  name: "FirstPart",
  components: { CButton },
  methods: {
    dateTime() {
      const time: number = new Date().getHours();
      let timeSet: string;
      switch (true) {
        case time >= 5 && time <= 12:
          timeSet = "manhã";
          break;
        case time >= 12 && time < 18:
          timeSet = "tarde";
          break;
        case time >= 18 && time <= 23:
          timeSet = "noite";
          break;
        default:
          timeSet = "madrugada";
          break;
      }
      console.log(time);
      return timeSet;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "./Home.scss";
@import "@/assets/config_sass/colors.scss";
strong.timeset {
  color: $third-secondary-color;
  font-size: 1.25em;
  margin: 0 0.25em 0;
}
</style>
