<template>
  <div id="car">
    <div class="header">
      <p>购物车</p>
      <input type="button" value="编辑" class="editBtn" />
    </div>
    <div class="content">
      <ul class="carBox">
        <li v-for="(item, idx) in carData" :key="idx">
          <input type="checkbox" class="check" />
          <img :src="item.img" alt="" class="carImg" />
          <div class="carInfo">
            <p class="name">{{ item.name }}</p>
            <select class="selectCarBox">
              <option v-for="(optioItem, idx) in item.options" :key="idx">
                {{ optioItem }}
              </option>
            </select>
            <div class="carSpace"></div>
            <div class="infoBox">
              <p class="price">{{ item.price }}</p>
              <input type="button" class="minus" value="-" />
              <input type="number" class="count" :value="item.count" />
              <input type="button" class="add" value="+" />
            </div>
          </div>
        </li>
      </ul>
      <div class="settleBox">
        <input type="checkbox" class="allcheck" />
        <p class="allCheckText">全选</p>
        <p class="combine">合计：</p>
        <p class="allPrice"><span>￥</span><span class="priceCount"></span></p>
        <input type="button" class="settleBtn" value="结算" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "car",
  data() {
    return {
      carData: [
        {
          img: require("../../assets/carImg.png"),
          name: "故宫口红•枫叶红",
          options: ["枫叶红，哑光"],
          price: "¥ 199",
          count: "1",
        },
        {
          img: require("../../assets/carImg.png"),
          name: "故宫口红•枫叶红",
          options: ["枫叶红，哑光"],
          price: "¥ 199",
          count: "1",
        },
        {
          img: require("../../assets/carImg.png"),
          name: "故宫口红•枫叶红",
          options: ["枫叶红，哑光"],
          price: "¥ 199",
          count: "1",
        },
        {
          img: require("../../assets/carImg.png"),
          name: "故宫口红•枫叶红",
          options: ["枫叶红，哑光"],
          price: "¥ 199",
          count: "1",
        },
      ],
    };
  },
};
</script>
<style scoped>
#car {
  background: #faf8f8;
}
.header {
  height: 0.88rem;
  background: #c30d23;
  color: #fff;
  text-align: center;
  position: relative;
}
.header p {
  font-size: 0.2rem;
  position: absolute;
  bottom: 0.11rem;
  left: 1.58rem;
}
.header .editBtn {
  position: absolute;
  border: none;
  background: none;
  font-size: 0.12rem;
  color: #fffcfc;
  right: 0.12rem;
  bottom: 0.17rem;
}
.carBox {
  margin: 0 auto;
  width: 3.35rem;
}
.carBox li {
  background: #fff;
  display: flex;
  width: 3.35rem;
  height: 1.46rem;
  position: relative;
  margin-top: 0.08rem;
}
.carBox li .check {
  width: 0.16rem;
  margin-top: 0.64rem;
  margin-left: 0.08rem;
}
.carBox li .carImg {
  width: 1.14rem;
  height: 1.14rem;
  margin-top: 0.16rem;
  margin-left: 0.12rem;
}
.carBox li .carInfo {
  margin-top: 0.16rem;
  margin-left: 0.12rem;
}
.carBox li .carInfo .name {
  font-size: 0.14rem;
  color: #333333;
}
.carBox li .carInfo .selectCarBox {
  width: 1.05rem;
  height: 0.25rem;
  position: absolute;
  top: 0.43rem;
  right: 0.7rem;
  color: #999999;
}
.carBox li .carInfo .carSpace {
  height: 0.12rem;
}
.carBox li .carInfo .infoBox {
  display: flex;
  position: absolute;
  right: 0.12rem;
  bottom: 0.19rem;
  width: 1.67rem;
}
.carBox li .carInfo .infoBox .price {
  font-size: 0.14rem;
  color: #c30d23;
}
.carBox li .carInfo .infoBox .minus {
  width: 0.18rem;
  height: 0.18rem;
  background: #f7f7f7;
  margin-left: 0.61rem;
  border: none;
}
.carBox li .carInfo .infoBox .add {
  width: 0.18rem;
  height: 0.18rem;
  background: #f7f7f7;
  margin-left: 0.04rem;
  border: none;
}
.carBox li .carInfo .infoBox .count {
  width: 18px;
  height: 18px;
  background: #f7f7f7;
  font-size: 0.12rem;
  margin-left: 0.04rem;
  border: none;
  outline: none;
  text-align: center;
  color: #c30d23;
}
.settleBox {
    width: 3.75rem;
  height: 0.44rem;
  background: #fff;
  line-height: 0.44rem;
  display: flex;
  position: fixed;
    bottom: 0.83rem;
    justify-content: space-between;
}
.settleBox .allcheck {
  width: 0.15rem;
  height: 0.15rem;
  margin-top: 0.15rem;
  margin-left: 0.28rem;
}
.settleBox .allCheckText {
  font-size: 0.14rem;
  margin-left: -0.6rem;
}
.settleBox .combine {
  font-size: 0.14rem;
  color: #333333;
  margin-left: -0.2rem;
}
.settleBox .allPrice {
  color: #c30d23;
  font-size: 0.18rem;
  margin-left: -0.6rem;
}
.settleBox .settleBtn {
  width: 0.94rem;
  height: 0.44rem;
  background: #c30d23;
  color: #FAFAFA;
  border: none;
  outline: none;
}
</style>