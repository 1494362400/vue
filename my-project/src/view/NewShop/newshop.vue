<template>
  <div>
    <div class="head">
      <div class="return"></div>
      <p>上新馆</p>
      <select class="selectBox">
        <option value="排序">排序</option>
      </select>
    </div>
    <div class="content">
      <ul>
        <li v-for="(item, idx) in shopData" :key="idx">
          <img :src="item.img" />
          <p class="name">{{item.name}}</p>
          <p class="price">{{item.price}}</p>
          <p class="notice">上新价</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "newshop",
  data() {
    return {
      shopData: [
        {
          img: require("../../assets/newShop1.png"),
          price: "￥199.00",
          name: "荷包口红•豇豆红",
        },
        {
          img: require("../../assets/newShop1.png"),
          price: "￥199.00",
          name: "荷包口红•豇豆红",
        },
        {
          img: require("../../assets/newShop1.png"),
          price: "￥199.00",
          name: "荷包口红•豇豆红",
        },
        {
          img: require("../../assets/newShop1.png"),
          price: "￥199.00",
          name: "荷包口红•豇豆红",
        },
        {
          img: require("../../assets/newShop1.png"),
          price: "￥199.00",
          name: "荷包口红•豇豆红",
        },
        {
          img: require("../../assets/newShop1.png"),
          price: "￥199.00",
          name: "荷包口红•豇豆红",
        },
      ],
    };
  },
};
</script>

<style scoped>
.head {
  height: 0.88rem;
  background: #c30d23;
  position: relative;
}
.head .return {
  width: 0.2rem;
  height: 0.2rem;
  background: url(../../assets/return.png) no-repeat;
  background-size: cover;
  position: absolute;
  left: 0.12rem;
  bottom: 0.13rem;
}
.head p {
  position: absolute;
  font-size: 0.2rem;
  color: #fffcfc;
  left: 1.58rem;
  bottom: 0.1rem;
}
.head .selectBox {
  font-size: 0.14rem;
  position: absolute;
  right: 0.12rem;
  bottom: 0.1rem;
  border: none;
  outline: none;
  background: none;
  color: #fff;
}
.content ul{
    width:3.35rem;
    margin: 0 auto;
    margin-top:0.16rem ;
}
.content ul li{
    width: 1.61rem;
    height: 2.39rem;
    float: left;
    position: relative;
    margin-right: 0.06rem;
}
.content ul li img{
    width: 1.61rem;
}
.content ul li .name{
    font-size: 0.14rem;
    position: absolute;
    left: 0.08rem;
    top: 1.76rem;
    
}
.content ul li .price{
    font-size: 0.16rem;
    position: absolute;
    color: #C30D23;
    top: 2.04rem;
    left: 0.07rem;
}
.content ul li .notice{
    position: absolute;
    font-size: 0.08rem;
    right: 0.45rem;
    top:2.05rem;
    color: #C30D23;
    border: 1px solid #C30D23;
}
</style>
