import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import AOS from "aos";
import "aos/dist/aos.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import "animate.css";
import {
  faInfo,
  faHome,
  faBlog,
  faPaste,
  faCheckDouble,
  faAngry,
  faCheck,
  faTerminal,
  faHandsWash,
  faHandHoldingHeart,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faTwitter,
  faTelegram,
  faTelegramPlane,
  faAngellist,
  faGithubAlt,
  faGithubSquare,
  faBloggerB,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faInfo,
  faHome,
  faGithub,
  faBlog,
  faPaste,
  faCheckDouble,
  faTwitter,
  faTelegram,
  faTelegramPlane,
  faAngry,
  faAngellist,
  faCheck,
  faGithubAlt,
  faGithubSquare,
  faBloggerB,
  faTerminal,
  faHandHoldingHeart,
  faHeart,
  faTiktok
);

AOS.init({ delay: 100, duration: 600, easing: "ease-out-cubic" });

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
