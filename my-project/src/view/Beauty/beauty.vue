<template>
  <div>
    <headContent></headContent>
    <div class="content">
      <leftNav></leftNav>
      <div class="rightContent">
        <div class="headerBox">
          <swiper :swiperSrc="swiperSrc"></swiper>
        </div>
        <div class="shopContent">
          <ul>
            <li v-for="(item, idx) in shopData" :key="idx">
              <img :src="item.img" />
              <p>{{ item.name }}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swiper from "../../components/swiper.vue";
import headContent from "../../components/headContent.vue";
import leftNav from "../../components/leftNav.vue";
export default {
  name: "beauty",
  components: {
    swiper,
    headContent,
    leftNav,
  },
  data() {
    return {
      shopData: [
        {
          img: require("../../assets/beauty1.png"),
          name: "口红",
        },
        {
          img: require("../../assets/beauty1.png"),
          name: "眉笔",
        },
        {
          img: require("../../assets/beauty1.png"),
          name: "气垫",
        },
        {
          img: require("../../assets/beauty1.png"),
          name: "眼影",
        },
        {
          img: require("../../assets/beauty1.png"),
          name: "护肤",
        },
        {
          img: require("../../assets/beauty1.png"),
          name: "腮红",
        },
        {
          img: require("../../assets/beauty1.png"),
          name: "洁面",
        },
        {
          img: require("../../assets/beauty1.png"),
          name: "定妆",
        },
      ],
      swiperSrc: [
        {
          img: require("../../assets/beautyBg.png"),
        },
      ],
    };
  },
};
</script>

<style scoped>
.headerBox {
  width: 2.69rem;
  height: 1rem;
  margin-right: 0.14rem;
}
.content {
  display: flex;
}
.rightContent{
    margin-left: 0.1rem;
}
.shopContent ul {
  width: 2.69rem;
}
.shopContent ul li {
  width: 0.8rem;
  height: 1.06rem;
  float: left;
  position: relative;
  margin-right: 0.13rem;
  margin-left: 0.32rem;
  margin-top: 0.21rem;
}
.shopContent ul li img {
  position: absolute;
  top: 0;
  width: 0.8rem;
  height: 0.8rem;
}
.shopContent ul li p {
  font-size: 0.16rem;
  position: absolute;
  left: 0.24rem;
  top: 0.85rem;
}
</style>
