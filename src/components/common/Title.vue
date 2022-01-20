<template>
  <h1
    @mouseover="titleHover"
    @mouseout="titleHover"
    class="bg-secondary p-2 bg-opacity-25 text-danger border-bottom border-primary border-5"
  >
    <span v-show="show" class="itleText">{{ msg }}</span
    ><span class="titleIcon" v-show="!show">
      <font-awesome-icon class="align-middle fs-1 ms-2" :icon="icon" />
    </span>
  </h1>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  props: {
    msg: String,
    icon: Array,
  },
  methods: {
    titleHover: function () {
      this.show = !this.show;
    },
  },
});
</script>
