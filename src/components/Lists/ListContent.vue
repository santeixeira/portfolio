<template>
  <ListBox>
    <div class="columns" id="1">
      <div class="column is-1" role="form" aria-label="Adicao de posts">
        <img class="avatar" src="@/assets/images/foo10.jpg" alt="avatar" />
      </div>
      <div class="column is-2">
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <section>
            <span id="titulo-candidato">Desenvolvedor</span>
          </section>
        </div>
        <div
          class="is-flex is-align-items-center is-justify-content-space-between"
        >
          <section>
            <span id="txtNome">{{ nome }}</span>
          </section>
        </div>
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ListContent",
  data() {
    return { nome: "San" };
  }
});
</script>

<style lang="scss" scoped></style>
