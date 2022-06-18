<template>
  <div class="input-box">
    <i v-bind:class="icon"></i>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      :v-model="descricao"
      required
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TextInput",
  props: {
    type: { type: String, default: "text" },
    id: { type: String },
    icon: { type: String },
    placeholder: { type: String },
  },
  data() {
    return {
      descricao: "",
    };
  },
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss"; 
@import "@/assets/config_sass/presets.scss"
</style>
