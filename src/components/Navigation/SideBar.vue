<template>
  <ListBox class="side-bar">
    <h1>
      <img
        src="https://cdn.dribbble.com/users/427857/screenshots/16181208/aimm_dribbble_full.png?compress=1&resize=400x300"
        alt="image_foo"
        id="image_foo"
      />
    </h1>
    <nav class="mt-6">
      <slot></slot>
    </nav>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox } from "@/components/index";
export default defineComponent({
  name: "SideBar",
  components: {
    ListBox
  }
});
</script>

<style lang="scss">
@import "@/assets/config_sass/colors.scss";
.box.side-bar {
  height: 100vh;
  margin-top: 0em !important;
}

.box.dark-mode {
  background-color: $first-secondary-color;
}

.side-bar-content {
  color: $font-color;
  margin: 1em 0 1em;
  &:hover {
    color: $primary-color;
  }
}

.side-bar-content i {
  margin-right: 0.5em;
}

#image_foo {
  margin-top: 3em;
  width: 10em;
  height: 10em;
  -webkit-border-radius: 50%;
  -webkit-background-clip: padding-box;
  -moz-border-radius: 50%;
  -moz-background-clip: padding;
  border-radius: 50%;
  background-clip: padding-box;
  background-size: cover;
  background-position: center center;
  object-fit: cover;
}

@media only screen and (max-width: 768px) {
  .side-bar {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
