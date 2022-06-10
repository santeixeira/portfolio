<template>
  <FullContainer>
    <div class="block is-align-items-center">
      <h1>Bem vindos, samaritanos!</h1>
      <p v-if="{}">
        Esta é um ótima {{ dateTime() }} para estudar, não? Fique de olho nas
        <a href="#">notícias recentes</a>!
      </p>
      <p>
        Desejo-te boas vindas à minha humilde casa virtual, onde deixo todas as
        minhas evoluções como programador, desde portfólio a artigos cientificos
        das mais diversas areas. Programação, matemática, física, dicas que
        posso oferecer, até mesmo pitacos em aeronáutica.
      </p>
      <CButton>Teste</CButton>
    </div>
    <div class="columns is-align-items-center">
      <div class="column is-4">
        <MiniBoxes>
          <img
            src="@/assets/images/foo3.webp"
            alt=""
            style="object-fit: cover; overflow: hidden"
          />
          <h3>Portfolio</h3>
        </MiniBoxes>
      </div>
      <div class="column is-4">
        <MiniBoxes>
          <h3>Documentacao</h3>
        </MiniBoxes>
      </div>
      <div class="column is-4">
        <MiniBoxes>
          <h3>Artigos</h3>
        </MiniBoxes>
      </div>
    </div>
    <div class="columns is-align-items-center">
      <h1>Teste</h1>
    </div>
  </FullContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FullContainer, CButton, MiniBoxes } from "@/components/index";
export default defineComponent({
  name: "HomePage",
  components: { FullContainer, CButton, MiniBoxes },
  data() {
    return {};
  },
  methods: {
    dateTime() {
      const time: number = new Date().getHours();
      let timeSet = "";
      if (time > 5 && time <= 12) {
        timeSet = "manhã";
      } else if (time > 12 && time <= 18) {
        timeSet = "tarde";
      } else if (time > 18 && time <= 0) {
        timeSet = "noite";
      } else {
        timeSet = "madrugada";
      }
      return timeSet;
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
.block {
  height: 100%;
  width: 100%;
  box-shadow: 0.2em 0.2em 0.2em 0.2em rgba(132, 132, 143, 0.1);
  vertical-align: middle;
  background-color: $gray-scale;
  justify-content: center;
}

.block button {
  margin-bottom: 2em !important;
}
.block h1 {
  text-align: -webkit-center !important;
  font-size: 3em;
  font-weight: 600;
  padding: 0.5em 0 0.5em;
}
.block p {
  text-align: -webkit-center !important;
  font-size: 1.15em;
  font-weight: 300;
  padding: 0.25em 8em 0.25em;
}
.block p a {
  color: $primary-color;
  &:hover {
    font-weight: 600;
  }
}
.block img {
  position: relative;
  width: 20em;
  height: 20em;
  margin: 0em 7em 0em;
  padding: 2em;
  display: table-cell;
  vertical-align: middle;
  -webkit-border-radius: 50%;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 50%;
  -moz-background-clip: padding;
  border-radius: 50%;
  background-clip: padding-box;
  margin: 0px 0 0 1em;
  float: left;
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}

@media only screen and (max-width: 820px) {
  .block {
    height: 100%;
  }

  .block p {
    padding: 0.25em 2em 0.25em;
  }
}
</style>
