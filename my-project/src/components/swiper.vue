
<template>
  <div>
    <swiper :options="swiperOption" ref="mySwiper" class="swiper">
      <swiper-slide class="swiper" v-for="(item, idx) in swiperSrc" :key="idx">
        <img :src="item.img" alt="" />
        <slot name="numCount" class="numCount"></slot>
      </swiper-slide>
    </swiper>
    <slot name="textBox" class="swiperText" />
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
  data() {
    return {
      swiperOption: {
        on: {
          slideChangeTransitionEnd: (e)=> {
            this.$emit("swiperIndex",e.activeIndex)
          },
        },
      },
    };
  },
};
</script>
<style scoped lang="less">
.swiper {
  position: relative;
  .numCount {
    position: absolute;
    right: 0.2rem;
    bottom: 0.12rem;
    font-size: 0.1rem;
    width: 0.3rem;
    height: 0.16rem;
  }
}
</style>