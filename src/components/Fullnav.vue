<template>
  <div id="myNav" class="overlay">
    <a href="javascript:void(0)" class="closebtn" @click="closeNav()"
      >&times;</a
    >
    <div class="overlay-content">
      <a :href="header.url" v-for="header in headers" :key="header.id">{{
        header.title
      }}</a>
    </div>
  </div>
  <Logo @click="openNav()"></Logo>
</template>

<script>
import { defineComponent } from "vue";
import Logo from "@/components/common/Logo.vue";

export default defineComponent({
  data() {
    return {
      headers: [
        {
          title: "Celiae Space",
          url: "#celiae",
        },
        {
          title: "Celiae Blog",
          url: "#ceblog",
        },
        {
          title: "Celiae Github",
          url: "#github",
        },
        {
          title: "Others",
          url: "#",
        },
      ],
    };
  },
  methods: {
    openNav() {
      document.getElementById("myNav").style.width = "100%";
    },

    closeNav() {
      document.getElementById("myNav").style.width = "0%";
    },
  },
  components: {
    Logo,
  },
});
</script>

<style lang="scss" scoped>
.overlay {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.9);
  overflow-x: hidden;
  transition: 0.5s;
}

.overlay-content {
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
}

.overlay a {
  padding: 8px;
  text-decoration: none;
  font-size: 36px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.overlay a:hover,
.overlay a:focus {
  color: #f1f1f1;
}

.overlay .closebtn {
  position: absolute;
  top: 20px;
  right: 45px;
  font-size: 60px;
}

@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 20px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}
</style>
