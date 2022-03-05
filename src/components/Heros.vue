<template>
  <div class="container col-xxl-8 px-4 py-5 pb-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <Fullnav></Fullnav>
      </div>
      <div class="col-lg-6">
        <h1
          class="display-5 fw-bold lh-1 mb-3 text-info animate__animated animate__bounce"
        >
          {{ heroTitle }}
        </h1>
        <p
          class="lead text-warning animate__animated animate__heartBeat animate__delay-2s"
        >
          {{ heroContent }}
        </p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
            <font-awesome-icon
              class="align-middle fs-1 me-2 animate__animated animate__shakeX"
              :icon="['fab', 'angellist']"
            />行
          </button>
          <button
            type="button"
            class="btn btn-outline-secondary btn-lg px-4 animate__animated animate__wobble animate__delay-2s"
          >
            Perfect<font-awesome-icon
              class="align-middle fs-1 ms-2"
              :icon="['fas', 'check']"
            />
          </button>
        </div>
      </div>
    </div>
    <h2 class="text-light border-bottom">我也在这里</h2>
    <div class="">
      <button @click="toTiktok()" class="btn badge bg-primary m-1 p-2">
        <font-awesome-icon
          class="align-middle fs-1 pb-3"
          :icon="['fab', 'tiktok']"
        />
        <p>Tiktok</p>
      </button>
      <button @click="toTwitter()" class="btn badge badge bg-primary m-1 p-2">
        <font-awesome-icon
          class="align-middle fs-1 pb-3"
          :icon="['fab', 'twitter']"
        />
        <p>Twitter</p>
      </button>
      <button @click="toTelegram()" class="btn badge badge bg-primary m-1 p-2">
        <font-awesome-icon
          class="align-middle fs-1 pb-3"
          :icon="['fab', 'telegram-plane']"
        />
        <p>Telegram</p>
      </button>
      <button @click="toGithub()" class="btn badge badge bg-primary m-1 p-2">
        <font-awesome-icon
          class="align-middle fs-1 pb-3"
          :icon="['fab', 'github']"
        />
        <p>Github</p>
      </button>
    </div>
    <div class="">
      <button @click="toDouyin()" class="btn badge bg-primary m-1 p-2 w-25">
        抖音
      </button>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Fullnav from "@/components/Fullnav.vue";

export default defineComponent({
  data() {
    return {
      heroTitle: "山不在高 有仙则名",
      heroContent: "水不在深 有龙则灵 --刘禹锡",
    };
  },
  components: {
    Fullnav,
  },
  methods: {
    toTiktok: function () {
      location.href = "https://www.tiktok.com/@tikceliae";
    },
    toTwitter: function () {
      location.href = "https://twitter.com/ceeliatt";
    },
    toTelegram: function () {
      location.href = "https://t.me/celiaetg";
    },
    toGithub: function () {
      location.href = "https://github.com/celiae";
    },

    toDouyin: function () {
      location.href =
        "https://www.douyin.com/user/MS4wLjABAAAA1_WA_ot3r6ZW3OY7ZfF_gAFDWIMFvIsu52oMrk71_XE";
    },
  },
});
</script>
