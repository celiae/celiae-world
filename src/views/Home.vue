<template>
  <div class="home">
    
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <Welcome2022></Welcome2022>
    <CeliaeBlog></CeliaeBlog>
    <MyGithub></MyGithub>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import Welcome2022 from '@/components/Welcome2022.vue'; // @ is an alias to /src
import CeliaeBlog from '@/components/CeliaeBlog.vue'; // @ is an alias to /src
import MyGithub from '@/components/MyGithub.vue'; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
    Welcome2022,
    CeliaeBlog,
    MyGithub
  },
})
export default class Home extends Vue {}
</script>
