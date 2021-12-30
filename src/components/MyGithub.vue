<template>
  <div class="mygithub grid-center font-3rem card-rows">
    <h1>My Github</h1>
    <button class="btn-bubble2" @click="toGithub()">去看看代码</button>
    <p class="font-4rem">以简单为主</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class MyGithub extends Vue {
  msg!: string;
  private toBlog() {
    location.href = "https://www.github.com/celiae";
  }
}
</script>

<style lang="scss" scoped>
.mygithub {
  background: rgb(121, 138, 138);
  box-shadow: 0rem -1rem 1rem rgb(0, 0, 0), 0rem 1rem 1rem #000;
}
</style>