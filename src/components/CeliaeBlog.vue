<template>
  <div class="celiaeblog grid-center font-3rem card-rows">
    <h1>Celiae Blog</h1>
    <button class="btn-bubble1" @click="toBlog()">去看看博客</button>
    <p class="font-4rem">纯属兴趣</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class CeliaeBlog extends Vue {
  msg!: string;
  private toBlog() {
    location.href = "https://ceelia.v6.navy";
  }
}
</script>

<style lang="scss" scoped>
.celiaeblog {
  
}
</style>