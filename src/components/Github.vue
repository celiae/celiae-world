<template>
  <main>
    <section class="m-auto w-75" v-for="card in cards" :key="card.id">
      <Card
        :imgPath="card.imgPath"
        :title="card.title"
        :content="card.content"
        :linkText="card.linkText"
        :link="card.link"
      ></Card>
    </section>
  </main>
</template>
<script lang="ts">
import Card from "@/components/common/Card.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      cards: [
        {
          title: "Celiae Space",
          content: "Celiae 的个人主页，也是你现在正在访问的网站",
          linkText: "Celiae Space 源码",
          link: "https://github.com/celiae/celiae.github.io",
        },
        {
          title: "JSP hr",
          content:
            "很low的人事管理网站,大三上的课程设计,不喜欢jsp,所以暂停开发",
          linkText: "JSP hr 源码",
          link: "https://github.com/celiae/JSP-",
        },
        {
          title: "Algorithm",
          content: "准备罗列一些经典的算法，忘记的时候可以看看",
          linkText: "经典算法(未完成)",
          link: "",
        },
      ],
    };
  },
  components: {
    Card,
  },
});
</script>
<style lang="scss" scoped>
@media screen and (min-width: 1200px) {
  main {
    display: flex !important;
  }
}
</style>
