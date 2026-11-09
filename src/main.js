import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";
import { createPinia } from "pinia";
import "./assets/css/tailwind.css";

const app = createApp(App);
const pinia = createPinia();

app.use(pinia);
app.use(router);
app.mount("#app");
