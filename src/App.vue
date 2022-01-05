<template>
  <Header></Header>
  <section class="vh-100">
    <Logo />
    <Collapse title="这是什么" :codemsg="life" />
  </section>
  <section class="vh-100">
    <Title msg="BLOG"></Title>
    <Carousel></Carousel>
    <Shell :msg="ceblog"></Shell>
    <Button msg="GO" buttonStyle="bubble1" :icon="blogIcon"></Button>
  </section>
  <section class="vh-100">
    <Title msg="Github"></Title>
    <Github></Github>
    <Shell :msg="github"></Shell>
    <Button msg="GO" buttonStyle="bubble2" :icon="githubIcon"></Button>
  </section>
  <Footer></Footer>
</template>

<script lang="ts">
import Header from "@/components/common/Header.vue";
import Button from "@/components/common/Button.vue";
import Code from "@/components/common/Code.vue";
import Shell from "@/components/common/Shell.vue";
import Logo from "@/components/common/Logo.vue";
import Title from "@/components/common/Title.vue";
import Carousel from "@/components/common/Carousel.vue";
import Collapse from "@/components/common/Collapse.vue";
import Footer from "@/components/common/Footer.vue";

import Github from "@/components/Github.vue";

export default {
  name: "App",
  data() {
    return {
      show: true,
      life: [
        "//Life",
        "void new_day(){",
        "eating();",
        "coding();",
        "sleeping();",
        "new_day();",
        "}",
      ],
      ceblog: "git clone https://github.com/celiae/ceblog",
      blogIcon: ["fas", "blog"],
      githubIcon: ["fab", "github"],
      github: "git clone https://github.com/celiae/celiae.github.io",
    };
  },
  components: {
    Header,
    Button,
    Code,
    Shell,
    Logo,
    Title,
    Carousel,
    Collapse,
    Footer,

    Github,
  },
  methods: {
    showCode() {
      console.log("asdf");
    },
  },
};
</script>

<style lang="scss">
@import "./assets/sass/main.scss";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
