<template>
  <ListBox>
    <div class="columns">
      <div class="column is-7">
        Descricao
      </div>
      <div class="column">
        <Cronometer :timeSeconds="15"/>
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Cronometer, ListBox } from "@/components/index";
export default defineComponent({
  name: "PomodoroTask",
  components: {
    Cronometer,
    ListBox
  }
});
</script>

<style lang="scss" scoped>
.box {
    margin: 2.5em;
}
</style>