<template>
  <div
    id="carouselExampleCaptions"
    class="carousel slide"
    data-bs-ride="carousel"
    data-aos="zoom-in"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="@/assets/blog/Linux.svg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="text-info fs-1">Linux</h5>
          <p>进入开源世界</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/blog/Nginx.svg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="text-info fs-1">Nginx</h5>
          <p>市场份额最大的Web server</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="@/assets/blog/Github.svg" class="d-block w-100" alt="" />
        <div class="carousel-caption d-none d-md-block">
          <h5 class="text-info fs-1">Github</h5>
          <p>在开发者当中广为人知的代码托管平台</p>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
  },
});
</script>

<style lang="scss" scoped>
@media screen and (min-width: 1350px) {
  .carousel {
    width: 50%;
    margin: auto;
  }
}
</style>
