<template>
  <div class="bg-dark">
    <Header></Header>
    <section id="celiae" class="vh-100">
      <Heros></Heros>
    </section>
    <section id="ceblog" class="vh-100">
      <Title msg="BLOG" :icon="['fab', 'blogger-b']"></Title>
      <Carousel></Carousel>
      <Shell :msg="ceblog.gclone"></Shell>
      <Button
        msg="GO"
        buttonStyle="bubble1"
        :icon="ceblog.icon"
        :url="ceblog.url"
      ></Button>
    </section>
    <section id="github" class="min-vh-100">
      <Title msg="Github" :icon="['fab', 'github-square']"></Title>
      <Github></Github>
      <Shell :msg="github.gclone"></Shell>
      <Button
        msg="GO"
        buttonStyle="bubble2"
        :icon="github.icon"
        :url="github.url"
      ></Button>
    </section>

    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import Button from "@/components/common/Button.vue";
import Shell from "@/components/common/Shell.vue";
import Logo from "@/components/common/Logo.vue";
import Title from "@/components/common/Title.vue";
import Carousel from "@/components/common/Carousel.vue";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Github from "@/components/Github.vue";
import Heros from "@/components/Heros.vue";

export default {
  name: "App",
  data() {
    return {
      ceblog: {
        gclone: "git clone https://github.com/celiae/ceblog",
        icon: ["fas", "blog"],
        url: "https://celiae.github.io/ceblog",
      },
      github: {
        gclone: "git clone https://github.com/celiae/celiae.github.io",
        icon: ["fab", "github"],
        url: "https://github.com/celiae",
      },
      wish: {
        icon: ["fas", "hand-holding-heart"],
      },
    };
  },
  components: {
    Button,
    Shell,
    Logo,
    Title,
    Carousel,

    Github,
    Heros,
    Footer,
    Header,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
html {
  scroll-behavior: smooth;
}
</style>
