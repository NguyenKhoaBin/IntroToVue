import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { useAuthStore } from "@/stores/authStore";
import { useTodoStore } from "@/stores/todoStore";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const authStore = useAuthStore(pinia);

app.provide("$auth", authStore);

const todoStore = useTodoStore(pinia);

app.provide("$todo", todoStore);

app.use(router);
app.mount("#app");
