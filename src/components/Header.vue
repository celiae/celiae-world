<template>
  <div
    class="position-sticky top-0 bg-light bg-opacity-75 text-dark border-round"
    style="z-index: 500"
  >
    <header
      id="header"
      class="d-flex flex-wrap justify-content-center mb-4 border-bottom"
    >
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
        ><span></span>
        <span id="webTitle"
          ><font-awesome-icon
            class="align-middle fs-1 ms-2 animate__animated animate__rubberBand animate__repeat-3"
            :icon="['fas', 'angry']"
          />Celiae Space</span
        >
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <a
            href="https://celiae.github.io/ceblog"
            class="nav-link active"
            aria-current="page"
            ><font-awesome-icon
              class="align-middle fs-1 me-2"
              :icon="['fas', 'blog']"
            />Ceblog</a
          >
        </li>
        <li class="nav-item">
          <a
            href="https://github.com/celiae"
            class="nav-link border-bottom border-info"
            >My Github<font-awesome-icon
              class="align-middle fs-1 ms-2"
              :icon="['fab', 'github-alt']"
          /></a>
        </li>
      </ul>
    </header>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  created: function () {
    window.addEventListener("scroll", this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      let headerStyle = document.getElementById("header").style;
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerStyle.padding = "0rem";
        headerStyle.fontSize = ".6rem";
      } else {
        headerStyle.padding = ".8rem";
        headerStyle.fontSize = "1.3rem";
      }
    },
  },
});
</script>
<style lang="scss" scoped>
header {
  padding: 0.8rem;
  font-size: 1.3rem;
  transition: all 0.5s ease-in-out;
}
.container {
  z-index: 500;
}
</style>
