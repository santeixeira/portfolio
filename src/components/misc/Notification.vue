<template>
  <div class="notification-box">
    <article
      class="message columns is-centered"
      :class="context[notification.type]"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <div class="column is-2 __align">
        <i :class="notification.icon"></i>
      </div>
      <div class="column is-9 is-multiline">
        <h1>{{ notification.title }}</h1>
        <span>{{ notification.text }}</span>
      </div>
    </article>
  </div>
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
        [TypeNotification.SUCESS]: "success",
        [TypeNotification.WARNING]: "warning",
        [TypeNotification.ERRO]: "erro"
      }
    };
  },
  setup() {
    const store = useStore();
    return {
      notifications: computed(() => store.state.notifications)
    };
  }
});
</script>

<style lang="scss" scoped>
@import "@/assets/config_sass/colors.scss";
$height: 5em;
.__align {
  align-items: center !important;
  justify-content: center;
  margin-top: 0.5em;
}
.notification-box {
  right: 2em;
  width: 18em;
  height: $height;
  position: absolute;
  border-radius: 6px;
  z-index: 100;
  text-align: justify;
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
