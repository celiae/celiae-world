<template>
  <div class="welcome grid-center">
    <img alt="Celiae logo" src="../assets/logo.svg" />
    <div class="text-content">
      <p class="font-4rem">Welcome to 2022</p>
      <p class="font-4rem">为即将来临的新年致敬</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";
export default class Welcome2022 extends Vue {
  msg!: string;
}
</script>
<style lang="scss" scoped>
.welcome {
  grid-template-rows: 20rem 20rem;
  background: rgb(121, 138, 138);
  box-shadow: 0 1rem 1rem #000,0 -1rem 1rem #000;
}
.text-content {
  border: 3px solid #000;
  padding: 1rem;
}
.text-content:hover {
  padding-bottom: 3.5rem;
  background: rgba(0, 0, 0, 0.425);
}
img:hover{
  transform: scale(1.2);
}
</style>