<template>
  <div
    data-aos="zoom-in-up"
    class="card m-auto mt-4 mb-4 text-dark"
    style="width: 18rem"
  >
    <img src="@/assets/logo.svg" class="card-img-top" alt="" />
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p class="card-text">
        {{ content }}
      </p>
      <a :href="link" class="btn btn-primary">{{ linkText }}</a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {};
  },
  props: {
    title: String,
    content: String,
    linkText: String,
    link: String,
  },
});
</script>
