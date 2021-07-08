
<template>
  <div>
    <swiper class="swiper">
      <swiper-slide class="swiper" v-for="(item, idx) in swiperSrc" :key="idx">
        <img :src="item.img" alt="" />
      </swiper-slide>
    </swiper>
    <div
      slot="textBox"
      class="swiperText"
      v-for="(item, idx) in swiperSrc"
      :key="idx"
    >
      {{ item.text }}
      <div class="img"></div>
      <div class="moreBox"></div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/swiper.min.css";
export default {
  name: "swiper-example-default",
  title: "Default",
  props: {
    swiperSrc: Array
  },
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>
<style scoped>
.img {
  width: 0.2rem;
  height: 0.2rem;
  position: absolute;
  background: url(../assets/hot.png) no-repeat;
  background-size: cover;
  top: 0.06rem;
  right: 0.97rem;
}
.moreBox {
  width: 0.12rem;
  height: 0.12rem;
  position: absolute;
  background: url(../assets/whiteRightMore.png) no-repeat;
  background-size: cover;
  top: 0.1rem;
  right: 0.1rem;
}
.swiperText {
  width: 3.51rem;
  height: 0.32rem;
  background: url(../assets/swiperTextBg.png) no-repeat;
  background-size: cover;
  z-index: 100;
  font-size: 0.12rem;
  line-height: 0.32rem;
  position: absolute;
  bottom: 0;
  opacity: 0.7;
}
</style>