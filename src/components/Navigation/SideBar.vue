<template>
  <ListBox class="side-bar">
    <button @click="hideBar" class="burger fas fa-bars"></button>
    <nav>
      <slot></slot>
    </nav>
  </ListBox>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { ListBox } from "@/components/index";
export default defineComponent({
  name: "SideBar",
  emits: ['hidingBar'],
  components: {
    ListBox
  },
  data() {
    return {
      hiddenBar: false
    };
  },
  methods: {
    hideBar() {
      this.hiddenBar = !this.hiddenBar;
      this.$emit("hidingBar", this.hiddenBar);
    }
  }
});
</script>

<style lang="scss">
@import "@/assets/config_sass/colors.scss";
button.burger {
  border: none;
  background: none;
  cursor: pointer;
}
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
