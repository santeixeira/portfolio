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
      hiddenBar: true
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
  cursor: pointer;
  border: none;
  background: none;
  cursor: pointer;
  &:hover {
    color: $primary-color;
    transition: 0.3s ease-in;
  }
}
.box.side-bar {
  height: 100%;
  margin-top: 0em !important;
}

.side-bar-content {
  color: $font-color;
  margin: 1em 0 1em;
  &:hover {
    color: $primary-color;
    transition: 0.3s ease-in;
  }
}


.side-bar-content i {
  margin-right: 0.5em;
}

#image_foo {
  margin-top: 1em;
  width: 8em;
  height: 8em;
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
