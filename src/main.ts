
import './styles/_variables.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bs5-lightbox'
import { createApp } from "vue";
import "./style.scss";
import 'photoswipe/style.css';
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
