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
          imgPath: "",
          title: "Celiae Space",
          content: "喜欢搞搞",
          linkText: "GO",
          link: "https://github.com/celiae/celiae.github.io",
        },
        {
          imgPath: "",
          title: "JSP hr",
          content: "主人的任务",
          linkText: "GO",
          link: "https://github.com/celiae/JSP-",
        },
        {
          imgPath: "",
          title: "Algorithm",
          content: "额,这是什么",
          linkText: "GO",
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
