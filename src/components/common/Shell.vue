<template>
  <div
    class="w-75 position-relative m-auto text-start"
    @mouseover="show = true"
    @mouseleave="hideClip()"
    @click="copy()"
    data-aos="zoom-in-up"
  >
    <div class="border m-auto mt-5 overflow-auto text-nowrap pt-4 pb-2 fs-3">
      <span class="status m-0"></span>
      <span class="prompt text-warning">~:$</span>
      <code type="text" class="text-light m-3">{{ msg }}</code>
    </div>
    <div
      id="copy"
      v-if="show"
      class="position-absolute text-light top-0 end-0 m-2 btn btn-info fs-6"
    >
      <font-awesome-icon class="align-middle fs-1" :icon="['fas', 'paste']" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      show: false,
    };
  },
  props: {
    msg: String,
  },
  methods: {
    hideClip() {
      setTimeout(() => {
        this.show = false;
      }, 1000);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "/node_modules/bootstrap/scss/bootstrap.scss";
#copy {
  cursor: pointer;
}
code {
  user-select: none;
}
.status {
  border-left: 5px solid $teal-500;
  height: 1.4rem;
  position: sticky;
  left: 0;
}
@media screen and (min-width: 1000px) {
  .inner-shell {
    width: 50% !important;
    overflow: auto;
  }
  code {
    font-size: 2rem !important;
    overflow: auto;
  }
}
</style>
