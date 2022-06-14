<template>
  <ListBox>
    <div class="columns">
      <div class="column is-2">
        <input type="text" class="input" />
      </div>
      <div class="column is-2">
        <input type="text" class="input" />
      </div>
      <div class="column is-2">
        <input type="text" class="input" />
      </div>
    </div>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox, ListContent } from "@/components/index";

export default defineComponent({
  name: "FieldBar",
  components: { ListBox }
});
</script>

<style lang="scss" scoped></style>
