<template>
  <BlockBox id="block" :class="darkMode">
    <h1>Bem vindos, samaritanos!</h1>
    <p>
      Esta é um ótima <strong class="timeset">{{ dateTime() }}</strong> para
      estudar, não? Fique de olho nas
      <a @click="reference">notícias recentes</a>!
    </p>
    <p>
      {{ home.p2 }}
    </p>

    <p>
      {{ home.p3 }}
    </p>

    <router-link to="/estudos"><CButton>Começar</CButton></router-link>
  </BlockBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { CButton, BlockBox } from "@/components/index";
import mode from "@/assets/static_texts/texts.json";
export default defineComponent({
  name: "FirstPart",
  emits: ["referenced"],
  data() {
    return {
      darkMode: "dark-mode",
      home: mode.en.home
    };
  },
  components: { CButton, BlockBox },
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
      return timeSet;
    },
    reference() {
      this.$emit("referenced");
    }
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
@import "@/assets/config_sass/dark-mode.scss";
#block {
  margin-top: 2em;
  margin-bottom: 2em;
}
strong.timeset {
  color: $third-secondary-color;
  font-size: 1.25em;
  margin: 0 0.25em 0;
}
</style>
