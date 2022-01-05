<template>
  <h1 data-aos="slide-up" class="bg-secondary p-2 text-white bg-opacity-25 text-light border border-primary">{{msg}}</h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    msg: String,
  },
});
</script>