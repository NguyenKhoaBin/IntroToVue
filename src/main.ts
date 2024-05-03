import { createApp } from "vue";
import { createPinia } from "pinia";
import "@/assets/css/style.css";
import App from "./App.vue";
import router from "./router/index";
import "primeicons/primeicons.css";
import naive from "naive-ui";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.use(naive);
app.mount("#app");
