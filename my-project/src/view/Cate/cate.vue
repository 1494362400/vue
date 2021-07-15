<template>
  <div>
    <div class="headBox">
      <label class="searchBox">
        <input type="text" placeholder="故宫口红" class="search" />
      </label>
    </div>
    <div class="content">
      <leftNav class="leftNav"></leftNav>
    </div>
  </div>
</template>
<script>
import leftNav from "../../components/leftNav.vue";
export default {
  name: "cate",
  components: {
    leftNav,
  },
  mounted(){
    this.$router.push({
      path:'/cate/beauty',
      query:{bottomIndex:1}
    })
  }
};
</script>
<style scorped>
.headBox {
  height: 0.4rem;
  background: #c30d23;
  padding-top: 0.48rem;
}
.headBox .searchBox {
  display: block;
  width: 3.15rem;
  height: 0.32rem;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 0.06rem;
  margin: 0 auto;
}
.headBox .searchBox .search {
  width: 3.15rem;
  height: 0.32rem;
  position: absolute;
  text-align: center;
  border: none;
  outline: none;
  font-size: 0.14rem;
  background: url(../../assets/cateSearch.png) no-repeat 0.11rem 0.02rem;
}
.content {
}
.content .leftNav {
}
</style>