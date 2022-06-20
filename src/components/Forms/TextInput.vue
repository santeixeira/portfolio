<template>
  <div class="input-box">
    <i v-bind:class="icon"></i>
    <input
      :id="id"
      :type="type"
      :placeholder="placeholder"
      v-model="theModel"
      required
    />
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from "vue";
export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: "TextInput",
  emits: ["update:modelValue"],
  props: {
    type: { type: String, default: "text" },
    id: { type: String },
    icon: { type: String },
    placeholder: { type: String },
    modelValue: {
      type: String,
      default: () => ""
    }
  },
  setup(props, { emit }) {
    const theModel = computed({
      get: () => props.modelValue,
      set: (value) => emit("update:modelValue", value)
    });
    return { theModel };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
@import "@/assets/config_sass/presets.scss";
</style>
