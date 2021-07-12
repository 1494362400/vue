<template>
  <div id="find">
    <topNav :topData="topData" :mess="mess" />
    <router-view />
  </div>
</template>
<script>
import topNav from "../../components/topNav.vue";
export default {
  name: "find",
  data() {
    return {
      mess:'发现故宫',
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
    };
  },
  components: {
    topNav,
  },
};
</script>