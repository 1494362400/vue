<template>
  <div class="findHead">
    <div class="header">
      <p>{{mess}}</p>
    </div>
    <ul class="topBar">
      <li v-for="(item, idx) in topData" :class="{active:idx==current}" :key="idx" @click="toJump(item,idx)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "topNav",
  props:{
    topData:Array,
    mess:String
  },
  data() {
    return {
      current:0,
    };
  },
  mounted(){
    this.current=this.$route.query.index;
  },
  methods: {
    toJump(item,idx) {
      this.$router.push({
        path: `/find/${item.path}`,
        query:{index:idx}
      });
    },
  },
};
</script>
<style scoped>
.active{
  position: relative;
}
.active::after{
  content:'';
  width:80%;
  border: 1px solid red;
  position: absolute;
  left: 8%;
  bottom: 0.05rem;
}
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