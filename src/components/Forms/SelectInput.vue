<template>
  <div class="input-box">
    <i :class="icon"></i>
    <select v-model="theModel" required>
      
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option"
        v-text="options[index]"
      >
      </option>
    </select>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  // USAR SOMENTE EM CASO DE PROPS ESTATICAS
  name: "SelectRegister",
  emits: ["update:modelValue"],
  props: {
    placeholder: {
      type: String
    },
    icon: {
      type: String
    },
    options: {
      type: Array,
      required: true
    } 
  },
  setup(props, { emit }) {
    const theModel = computed({
      get: () => props.options as string[],
      set: (value) => emit("update:modelValue", value)
    });
    return { theModel };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/presets.scss";
</style>
