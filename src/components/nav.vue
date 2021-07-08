<template>
  <div>
    <ul class="navBar">
      <li
        v-for="(item, idx) in navData"
        :key="idx"
        :class="item.path"
        @click="toJump(item)"
      >
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
      navData: [
        {
          path: "home",
          name: "首页",
        },
        {
          path: "cate",
          name: "分类",
        },
        {
          path: "find",
          name: "发现",
        },
        {
          path: "car",
          name: "购物车",
        },
        {
          path: "person",
          name: "个人中心",
        },
      ],
    };
  },
  methods: {
    toJump(item) {
      this.$router.push({
        path: `/${item.path}`,
      });
    },
  },
};
</script>

<style scoped>
.navBar {
  display: flex;
  position: fixed;
  bottom: 0;
  background-color: #fff;
  z-index: 1000;
}
.navBar li p {
  position: absolute;
  left: 0.1rem;
  bottom: 0.37rem;
  width: 0.56rem;
}
.navBar li {
  width: 0.75rem;
  height: 0.83rem;
  font-size: 0.1rem;
  text-align: center;
  position: relative;
}
.home {
  background: url(../assets/home1.png) no-repeat 0.26rem 0.08rem;
}
.cate {
  background: url(../assets/cate1.png) no-repeat 0.26rem 0.08rem;
}
.find {
  background: url(../assets/find1.png) no-repeat 0.26rem 0.08rem;
}
.car {
  background: url(../assets/car1.png) no-repeat 0.26rem 0.08rem;
}
.person {
  background: url(../assets/person1.png) no-repeat 0.26rem 0.08rem;
}
</style>
