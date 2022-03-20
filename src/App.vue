<template>
  <div class="bg-dark">
    <Header></Header>
    <section id="celiae" class="min-vh-100">
      <Heros></Heros>
    </section>
    <section id="ceblog" class="min-vh-100 pb-4">
      <Title msg="BLOG" :icon="['fab', 'blogger-b']"></Title>
      <Carousel></Carousel>
      <h3 data-aos="fade-up" class="text-light mt-5">
        {{ middlePageContent.subtitle }}
      </h3>
      <Shell :msg="ceblog.gclone"></Shell>

      <div class="container-fluid">
        <div class="row">
          <div class="col text-light">
            <span class="placeholder col-7"></span>
            <span class="placeholder col-6"></span>
            <span class="placeholder col-7"></span>
            <span class="placeholder col-6"></span>
          </div>
          <div class="col">
            <Button
              msg="Ceblog"
              buttonStyle="bubble1"
              :icon="ceblog.icon"
              :url="ceblog.url"
            ></Button>
          </div>
        </div>
      </div>
    </section>
    <section id="github" class="min-vh-100 mb-4">
      <Title msg="Github" :icon="['fab', 'github-square']"></Title>
      <h3 data-aos="zoom-in-top" class="text-light mt-3">
        {{ middlePageContent.myRepository }}
      </h3>
      <Github></Github>
    </section>

    <section>
      <Title msg="Celiae Space" :icon="['fas', 'home']"></Title>

      <h2 class="text-light mt-3 mb-3 pt-3" data-aos="zoom-in-top">
        {{ middlePageContent.subtitle_github }}
      </h2>
      <Shell :msg="github.gclone"></Shell>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="text-light align-center mt-5 bg-primary">
              {{ middlePageContent.pageOfCeliae }}
            </div>
          </div>
          <div class="col">
            <Button
              msg="My repo"
              buttonStyle="bubble2"
              :icon="github.icon"
              :url="github.url"
            ></Button>
          </div>
        </div>
      </div>
    </section>

    <Footer class="pt-4"></Footer>
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
      middlePageContent: {
        myRepository: "我的仓库",
        // pageOfCeliae: "Celiae 的 Github 主页",
      },
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
