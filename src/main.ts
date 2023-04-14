import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import "./index.css";

import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faUser,
  faAddressCard,
  faDownload,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { useSidebarStore } from "./stores/sidebarStore";
import router from "./router";

library.add(
  faGithub,
  faUser,
  faAddressCard,
  faLinkedin,
  faWhatsapp,
  faDownload,
  faAnglesLeft,
  faAnglesRight
);

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon).mount("#app");
