import { createApp } from "vue";
import App from "./App.vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faInfo,
  faHome,
  faBlog,
  faPaste,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


library.add(faInfo, faHome, faGithub, faBlog, faPaste);

AOS.init({ delay: 100, duration: 600, easing: "ease-out-cubic" });

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
