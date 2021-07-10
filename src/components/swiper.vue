
<template>
  <div>
    <swiper class="swiper">
      <swiper-slide class="swiper" v-for="(item, idx) in swiperSrc" :key="idx">
        <img :src="item.img" alt="" />
      </swiper-slide>
    </swiper>
    <slot name="textBox"></slot>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.min.css";
export default {
  name: "swiper-example-default",
  title: "Default",
  props: {
    swiperSrc: Array,
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped>
</style>