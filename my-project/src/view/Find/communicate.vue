<template>
  <div id="commun">
    <topNav :topData="topData" :mess="mess" />

    <van-pull-refresh
      v-model="isLoading"
      :head-height="80"
      @refresh="onRefresh"
    >
      <!-- 下拉提示，通过 scale 实现一个缩放效果 -->
      <template #pulling="props">
        <img
          class="doge"
          src="../../assets/findRefresh.png"
          :style="{ transform: `scale(${props.distance / 80})` }"
        />
        <p class="pullText">下拉刷新</p>
      </template>

      <!-- 释放提示 -->
      <template #loosing>
        <img class="doge" src="../../assets/findRefresh.png" />
        <p class="pullText">释放</p>
      </template>

      <!-- 加载提示 -->
      <template #loading>
        <img class="doge" src="../../assets/findRefresh.png" />
        <p class="pullText">加载</p>
      </template>

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
    </van-pull-refresh>
  </div>
</template>
<script>
import topNav from "../../components/topNav.vue";
export default {
  name: "communicate",
  data() {
    return {
      isLoading: false,
      mess: "发现故宫",
      topData: [
        {
          path: "communicate",
          name: "交流圈",
        },
        {
          path: "inspiration",
          name: "灵感",
        },
        {
          path: "joint",
          name: "联名",
        },
        {
          path: "designer",
          name: "设计师",
        },
      ],
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
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
  components: {
    topNav,
  },
};
</script>
<style scoped>
.doge {
  width: 0.61rem;
  height: 0.61rem;
}
.pullText{
  font-size: 0.1rem;
  color:#CCCCCC;
}
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