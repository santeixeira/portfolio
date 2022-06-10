<template>
  <input type="checkbox" id="switch" />
  <label for="switch">Toggle</label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ToggleButton"
});
</script>

<style scoped lang="scss">
.navbar input[type="checkbox"] {
  margin: 1em 1em 1em;
  height: 0;
  width: 0;
  visibility: hidden;

  &:checked + label:after {
    left: calc(100% - 2.5px);
    transform: translateX(-100%);
  }

  &:checked + label {
    background: #42b983;
    transition: 0.5s ease;
  }
}

.navbar label {
  cursor: pointer;
  text-indent: -9999px;
  width: 3.25em;
  height: 1.75em;
  background: grey;
  display: block;
  border-radius: 3em;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 1.5px;
    left: 2.5px;
    padding: 0.75em;
    background: #fff;
    border-radius: 10em;
    transition: 0.5s ease;
  }

  &:active::after {
    width: 13px;
  }
}
</style>
