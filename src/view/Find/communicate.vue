<template>
  <div id="commun">
    <topNav />
    <ul class="communBox">
      <li v-for="(item, idx) in comData" :key="idx">
        <img :src="item.img" class="photo" />
        <p>{{ item.text }}</p>
        <div class="infoMess">
          <div
            class="headImg"
            :style="{ backgroundImage: 'url(' + item.headImg + ')' }"
          ></div>
          <div class="name">{{ item.name }}</div>
          <div class="address">{{ item.address }}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import topNav from "../../components/topNav.vue";
export default {
  name: "communicate",
  data() {
    return {
      comData: [
        {
          img: require("../../assets/commun1.png"),
          text: "故宫的文创产品，给家里增添了不少文化气息",
          name: "田田",
          headImg: require("../../assets/head1.png"),
          address: "北京",
        },
        {
          img: require("../../assets/commun2.png"),
          text: "故宫的文创产品，给家里增添了不少文化气息",
          name: "田田",
          headImg: require("../../assets/head1.png"),
          address: "北京",
        },
        {
          img: require("../../assets/commun3.png"),
          text: "故宫的文创产品，给家里增添了不少文化气息",
          name: "田田",
          headImg: require("../../assets/head1.png"),
          address: "北京",
        },
        {
          img: require("../../assets/commun4.png"),
          text: "故宫的文创产品，给家里增添了不少文化气息",
          name: "田田",
          headImg: require("../../assets/head1.png"),
          address: "北京",
        },
      ],
    };
  },
  components: {
    topNav,
  },
};
</script>
<style scoped>
#commun {
  padding-top: 0.01rem;
}
.communBox {
  margin-left: 0.05rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 5.93rem;
  margin-top: 1.36rem;
}
.communBox li {
  width: 1.6rem;
  /* float:inline-start; */
  margin-left: 0.15rem;
  margin-top: 0.16rem;
}
.communBox li .photo {
  width: 1.6rem;
}
.communBox li p {
  font-size: 0.12rem;
  margin-top: -0.22rem;
}
.communBox li .infoMess {
  display: flex;
}
.communBox li .headImg {
  width: 0.12rem;
  height: 0.12rem;
  margin-top: 0.14rem;
}
.communBox li .name {
  font-size: 0.1rem;
  color: #333333;
  margin-left: 0.04rem;
  margin-top: 0.13rem;
}
.communBox li .address {
  font-size: 0.1rem;
  margin-top: 0.13rem;
  margin-left: 0.96rem;
}
</style>