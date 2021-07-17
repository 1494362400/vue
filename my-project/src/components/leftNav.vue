<template>
  <div>
    <ul class="leftBox">
      <li
        v-for="(item, idx) in leftNavData"
        :key="idx"
        :class="[item.path,{selectLi:leftCurrent==idx}]"
        @click="toJump(item,idx)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "leftNav",
  data() {
    return {
      leftCurrent:2,
      leftNavData: [
        {
          path: "newShop",
          name: "上新馆",
        },
        {
          path: "publish",
          name: "出版馆",
        },
        {
          path: "beauty",
          name: "美妆馆",
        },
        {
          path: "four",
          name: "文房馆",
        },
        {
          path: "atmosphere",
          name: "香氛馆",
        },
        {
          path: "jewelry",
          name: "首饰馆",
        },
        {
          path: "bronze",
          name: "铜器馆",
        },
        {
          path: "ceramic",
          name: "陶瓷馆",
        },
        {
          path: "silk",
          name: "丝绸馆",
        },
        {
          path: "household",
          name: "家居馆",
        },
      ],
    };
  },
  watch:{
    $route(){
      this.leftCurrent=this.$route.query.bottomIndex;
    }
  },
  methods: {
    toJump(item,idx) {
      this.$router.push({
        path: `/cate/${item.path}`,
        query: { bottomIndex: 1 ,leftIndex:idx},
      });
    },
  },
};
</script>

<style scoped lang="less">
.leftBox {
  float: left;
  width: 0.82rem;
  height: 6.41rem;
  background: #f7f7f7;
  li {
    height: 0.62rem;
    font-size: 0.14rem;
    line-height: 0.62rem;
    text-align: center;
  }
  .selectLi{
    color: #C30D23;
    background-color: #FFFCFC;
    position: relative;
  }
  .selectLi::after{
    position: absolute;
    content:'';
    background: url(../assets/catePick.png) no-repeat;
    width: 0.06rem;
    height: 0.22rem;
    left: 0;
    top: 0.18rem;
  }
}
</style>
