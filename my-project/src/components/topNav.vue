<template>
  <div class="findHead">
    <div class="header">
      <p>发现故宫</p>
    </div>
    <ul class="topBar">
      <li v-for="(item, idx) in topData" :key="idx" @click="toJump(item)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "topNav",
  data() {
    return {
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
        }
      ],
    };
  },
  methods: {
    toJump(item) {
      this.$router.push({
        path: `/find/${item.path}`,
      });
    },
  },
};
</script>
<style scoped>
.findHead{
    position: fixed;
    width: 3.75rem;
}
.header {
  height: 0.88rem;
  background: #c30d23;
  position: relative;
}
.header p {
  font-size: 0.2rem;
  position: absolute;
  left: 1.49rem;
  bottom: 0.09rem;
  color: #fff;
}
.topBar {
  height: 0.48rem;
  line-height: 0.48rem;
  font-size: 0.14rem;
  display: flex;
  justify-content: space-around;
  background:#fff;
}
</style>