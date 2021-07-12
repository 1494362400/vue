<template>
  <div id="allOrder">
    <topNav :topData="topData" :mess="mess" />
    <ul class="allBox">
      <li v-for="(item, idx) in allData" :key="idx" class="allLi">
        <div class="liHead">
          <div
            class="storeImg"
            :style="{ backgroundImage: 'url(' + item.storeImg + ')' }"
          ></div>
          <p class="storeName">{{ item.storeName }}</p>
          <p class="status">{{ item.status }}</p>
        </div>
        <ul>
          <li v-for="(shopItem, idx) in item.shops" :key="idx">
            <img :src="shopItem.shopImg" alt="" />
            <div class="shopText">
              <p class="shopName">{{ shopItem.name }}</p>
              <p class="shopMess">{{ shopItem.shopMess }}</p>
              <p class="shopNotice">{{ shopItem.shopNotice }}</p>
              <p class="priceBox">
                <span>￥</span
                ><span class="shopPrice">{{ shopItem.shopPrice }}</span
                ><span>x</span><span class="num">{{ shopItem.num }}</span>
              </p>
            </div>
          </li>
        </ul>
        <div class="liFooter">
          <span>共</span><span class="allNum">{{ item.allNum }}</span
          ><span>件商品</span>
          <span class="perferSpan">优惠￥</span><span class="perfer">{{ item.perfer }}</span>
          <span class="allSpan">合计</span><span class="fuhao">￥</span><span class="allPrice">{{ item.allPrice }}</span>
        </div>
        <input type="button" value="查看物流" class="checkLogic">
        <input type="button" value="确认收货" class="confirmGoods">
      </li>
    </ul>
  </div>
</template>
<script>
import topNav from "../../components/topNav.vue";
export default {
  name: "allOrder",
  components: {
    topNav,
  },
  data() {
    return {
      mess: "全部订单",
      topData: [
        {
          path: "all",
          name: "全部",
        },
        {
          path: "forPay",
          name: "待付款",
        },
        {
          path: "hasPay",
          name: "已付款",
        },
        {
          path: "forGoods",
          name: "待收货",
        },
        {
          path: "forEval",
          name: "待评价",
        },
        {
          path: "returnGoods",
          name: "退货售后",
        },
      ],

      allData: [
        {
          storeImg: require("../../assets/storeImg.png"),
          storeName: "故宫文创",
          status: "等待买家付款",
          shops: [
            {
              shopImg: require("../../assets/shopImg.png"),
              name: "故宫口红•枫叶红",
              shopMess: "枫叶红",
              shopNotice: "7天无理由退换",
              shopPrice: "199.00",
              num: "1",
            },
            {
              shopImg: require("../../assets/shopImg.png"),
              name: "故宫口红•枫叶红",
              shopMess: "枫叶红",
              shopNotice: "7天无理由退换",
              shopPrice: "199.00",
              num: "1",
            },
          ],
          allNum: "2",
          perfer: "0.00",
          allPrice: "1326.00",
        },
        {
          storeImg: require("../../assets/storeImg.png"),
          storeName: "故宫文创",
          status: "已付款",
          shops: [
            {
              shopImg: require("../../assets/shopImg.png"),
              name: "故宫口红•枫叶红",
              shopMess: "枫叶红",
              shopNotice: "7天无理由退换",
              shopPrice: "199.00",
              num: "1",
            },
            {
              shopImg: require("../../assets/shopImg.png"),
              name: "故宫口红•枫叶红",
              shopMess: "枫叶红",
              shopNotice: "7天无理由退换",
              shopPrice: "199.00",
              num: "1",
            },
          ],
          allNum: "2",
          perfer: "0.00",
          allPrice: "1326.00",
        },
      ],
    };
  },
};
</script>
<style scoped lang='less'>
#allOrder {
  padding-top: 0.01rem;
  background: #fffcfc;
}
.allBox {
  margin-top: 1.36rem;
  font-size: 0.12rem;
  .allLi {
    margin-top: 0.12rem;
    .liHead {
      display: flex;
      justify-content: space-around;
      .storeImg {
        width: 0.18rem;
        height: 0.18rem;
        margin-top: 0.13rem;
        // margin-left: 0.2rem;
      }
      .storeName {
        font-size: 0.14rem;
        color: #333333;
        margin-top: 0.12rem;
        margin-right:1.7rem;
      }
      .status {
        color: #c30d23;
        font-size: 0.12rem;
        margin-top: 0.15rem;
        // margin-left: 1.77rem;
      }
    }
    ul {
      li {
        display: flex;
        font-size: 0.14rem;
        img {
          width: 0.88rem;
          height: 0.88rem;
          margin-left: 0.16rem;
          margin-top: 0.16rem;
        }
        .shopText {
          margin-left: 0.16rem;
          .shopMess {
            margin-top: 0.07rem;
          }
          .shopNotice {
            color: #c91328;
            background: #ffe0e4;
            margin-top: 0.09rem;
            width: 1rem;
          }
          .priceBox {
            margin-top: 0.04rem;
            .shopPrice {
              margin-right: 1.64rem;
            }
          }
        }
      }
    }
    .liFooter {
      margin-top: 0.23rem;
      margin-left: 1.14rem;
      .perferSpan{
          margin-left: 0.12rem;
      }
      .allSpan{
          margin-left: 0.16rem;
      }
      .fuhao,.allPrice{
          font-size: 0.16rem;
          color:#C30D23;
      }
    }
    .checkLogic{
        width: 0.87rem;
        height: 0.28rem;
        background: #FFEBB9;
        font-size: 0.14rem;
        color:#333333;
        border:none;
        margin-left: 1.69rem;
        margin-top: 0.18rem;
    }
    .confirmGoods{
        width: 0.87rem;
        height: 0.28rem;
        background: #C30D23;
        font-size: 0.14rem;
        color:#FFFCFC;
        border:none;
        margin-left: 0.12rem;
        margin-top: 0.18rem;
    }
  }
}
</style>