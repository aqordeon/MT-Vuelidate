import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import useVuelidate from "@vuelidate/core";

import "./assets/main.css";
import './index.css'

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(useVuelidate);


app.mount("#app");
