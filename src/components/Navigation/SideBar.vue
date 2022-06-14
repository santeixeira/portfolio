<template>
  <h1>
    <img
      src="https://cdn.dribbble.com/users/427857/screenshots/16181208/aimm_dribbble_full.png?compress=1&resize=400x300"
      alt="image_foo"
      id="image_foo"
    />
  </h1>
  <nav class="mt-6">
    <router-link to="/vagas">
      <div class="side-bar-content">
        <i class="fas fa-hourglass"></i>
        <span>Pomodoro</span>
      </div>
    </router-link>
    <router-link to="/vagas">
      <div class="side-bar-content">
        <i class="fas fa-briefcase"></i> 
        <span>Relatórios</span>
      </div>
    </router-link>
    <router-link to="/vagas">
      <div class="side-bar-content">
        <i class="fas fa-briefcase"></i> 
        <span>Relatórios</span>
      </div>
    </router-link>
    <router-link to="/vagas">
      <div class="side-bar-content">
        <i class="fas fa-timeline"></i> 
        <span>Histórico</span>
      </div>
    </router-link>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar"
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";

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
