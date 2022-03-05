<template>
  <div class="bg-dark">
    <Header></Header>
    <section id="celiae" class="min-vh-100">
      <Heros></Heros>
    </section>
    <section id="ceblog" class="min-vh-100 pb-4">
      <Title msg="BLOG" :icon="['fab', 'blogger-b']"></Title>
      <Carousel></Carousel>
      <h3 data-aos="fade-up" class="text-light mt-5">下载Ceblog源码</h3>
      <Shell :msg="ceblog.gclone"></Shell>
      <div class="container bg-warning p-3">
        <div>
          <span
            data-aos="fade-down"
            class="text-dark pt-1 border-radius p-3 align-center"
          >
            创建Ceblog仓库并部署到Github
            pages的是为了记录日常与计算机打交道时遇到的困难
            同时这也是一个备忘录，防止自己遇到的困难再次出现
          </span>
        </div>
        <div class="border-bottom border-dark">
          <span data-aos="fade-down" class="text-dark pt-1">
            点击下面按钮访问Ceblog
          </span>
        </div>
      </div>
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
      <h3 data-aos="zoom-in-top" class="text-light mt-3">我的仓库</h3>
      <Github></Github>
    </section>

    <section>
      <Title msg="Celiae Space" :icon="['fas', 'home']"></Title>
      <div data-aos="zoom-in" class="container bg-warning text-dark fs-4 p-3">
        这是一个标志我个人的地方，通过这里来了解我是个不错的决定
      </div>
      <h2 class="text-light mt-3 mb-3 pt-3" data-aos="zoom-in-top">
        下载此网站-Celiae Space源码
      </h2>
      <Shell :msg="github.gclone"></Shell>
      <div class="container-fluid">
        <div class="row">
          <div class="col">
            <div class="text-light align-center mt-5 bg-primary">
              Celiae 的 Github 主页
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
