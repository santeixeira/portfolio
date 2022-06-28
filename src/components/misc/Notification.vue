<template>
  <article
    class="message notification-box is-flex is-centered"
    :class="context[notification.type]"
    v-for="notification in notifications"
    :key="notification.id"
  >
    <div class="c1">
      <i :class="notification.icon"></i>
    </div>
    <div class="c2">
      <h1>{{ notification.title }}</h1>
      <span>{{ notification.text }}</span>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { computed } from "@vue/reactivity";
import { TypeNotification } from "@/interface/INotification";

export default defineComponent({
  name: "NotificationBox",
  data() {
    return {
      context: {
        [TypeNotification.SUCESS]: "sucess",
        [TypeNotification.WARNING]: "warning",
        [TypeNotification.ERRO]: "erro"
      }
    };
  },
  setup() {
    const store = useStore();
    return {
      notifications: computed(() => store.state.notification)
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
$height: 5em;
.c1 {
  margin: calc($height / 3);
  text-align: start !important;
}
.c2 {
  margin: calc($height / 5) 0 calc($height / 5);
}
.notification-box {
  right: 1em;
  width: 18em;
  height: $height;
  position: absolute;
  border-radius: 6px;
  z-index: 100;
}
.success {
  background-color: $primary-color !important;
}
.warning {
  background-color: rgba(253, 165, 1, 0.927) !important;
}

.erro {
  background-color: rgba(248, 46, 124, 0.877) !important;
}

.notification-box i {
  font-size: 1.75em;
}
.notification-box i,
.notification-box h1,
.notification-box span {
  color: #fff;
}
</style>
