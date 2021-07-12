<template>
  <div>
    <ul class="leftBox">
      <li v-for="(item, idx) in leftNavData" :key="idx" :class="item.path" @click="toJump(item)">
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
  methods: {
    toJump(item) {
      this.$router.push({
        path: `/cate/${item.path}`,
      });
    },
  },
};
</script>

<style scoped>
.leftBox {
	float: left;
  width: 0.82rem;
  height: 6.41rem;
  background: #f7f7f7;
}
.leftBox li {
  height: 0.62rem;
  font-size: 0.14rem;
  line-height: 0.62rem;
  text-align: center;
}
</style>
