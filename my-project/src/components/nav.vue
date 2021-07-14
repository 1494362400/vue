<template>
  <div>
    <ul class="navBar">
      <li v-for="(item, idx) in navData" :key="idx" @click="toJump(item,idx)">
        <div class="navImg" :class="[item.class,bottomCurrent==idx?className[idx]:'']"></div>
        <p>{{ item.name }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "navBar",
  data() {
    return {
      bottomCurrent: 0,
      className: [
        "bottomActiveHome",
        "bottomActiveCate",
        "bottomActiveFind",
        "bottomActiveCar",
        "bottomActivePerson",
      ],
      navData: [
        {
          path: "home",
          class:'home',
          name: "首页",
        },
        {
          path: "cate",
          class:"cate",
          name: "分类",
        },
        {
          path: "find",
          class:"find",
          name: "发现",
        },
        {
          path: "car",
          class:"car",
          name: "购物车",
        },
        {
          path: "person",
          class:"person",
          name: "个人中心",
        },
      ],
    };
  },
  watch:{
    $route(){
      this.bottomCurrent=this.$route.query.bottomIndex;
    }
  },
  methods: {
    toJump(item, idx) {
      this.$router.push({
        path: `/${item.path}`,
        query: { bottomIndex: idx,index:0}
      });
    },
  },
};
</script>

<style scoped>
.navBar {
  width: 3.75rem;
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  z-index: 1000;
}
.navBar li p {
  text-align: center;
}
.navBar li {
  width: 0.75rem;
  height: 0.83rem;
  font-size: 0.1rem;
  text-align: center;
  position: relative;
}
.navImg {
  width: 0.24rem;
  height: 0.24rem;
  margin: 0 auto;
  margin-top: 0.08rem;
}
.home {
  background: url(../assets/home1.png) no-repeat;
}
.cate {
  background: url(../assets/cate1.png) no-repeat;
}
.find {
  background: url(../assets/find1.png) no-repeat;
}
.car {
  background: url(../assets/car1.png) no-repeat;
}
.person {
  background: url(../assets/person1.png) no-repeat;
}
.bottomActiveHome {
  background: url(../assets/home2.png) no-repeat;
}
.bottomActiveCate {
  background: url(../assets/cate2.png) no-repeat;
}
.bottomActiveFind {
  background: url(../assets/find2.png) no-repeat;
}
.bottomActiveCar {
  background: url(../assets/car2.png) no-repeat;
}
.bottomActivePerson {
  background: url(../assets/person2.png) no-repeat;
}
</style>
