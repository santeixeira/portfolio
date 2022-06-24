import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/routes";
import "@fortawesome/fontawesome-free/css/all.css";
import { key, store } from "./store";

createApp(App).use(router).use(store, key).mount("#app");
