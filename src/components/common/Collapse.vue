<template>
  <p class="mt-4">
    <Button
      buttonStyle="bubble3"
      class="btn btn-info"
      @click="showMsg()"
      :msg="title"
      :icon="questionIcon"
      data-bs-toggle="collapse"
      data-bs-target="#collapseWidthExample"
      aria-expanded="false"
      aria-controls="collapseWidthExample"
    ></Button>
  </p>
  <div style="min-height: 120px">
    <div class="collapse collapse-horizontal" id="collapseWidthExample">
      <div
        class="card card-body border fs-4 overflow-auto"
        style="overflow: hidden; width: 300px; background: #000"
      >
        <Code :codemsg="codemsg" />
        <div class="text-info">life.c</div>
      </div>
    </div>
  </div>
  <h1 data-aos="flip-down" class="text-light" v-if="show">
    Celiae is coding...
  </h1>
</template>

<script lang="ts">
import Code from "./Code.vue";
import Button from "./Button.vue";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      show: true,
      questionIcon: ["fas", "paste"],
    };
  },
  props: {
    title: String,
    codemsg: Array,
    textmsg: String,
  },
  components: {
    Code,
    Button,
  },
  methods: {
    showMsg() {
      setTimeout(() => {
        this.show = !this.show;
      }, 500);
    },
  },
});
</script>

<style lang="scss" scoped>
@media screen and (min-width: 765px) {
  .card {
    width: 30rem !important;
    height: 20rem;
  }
}
</style>
