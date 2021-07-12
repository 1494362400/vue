<template>
  <div id="confirm">
    <div class="header">
      <p>确认订单</p>
    </div>
    <div class="addressBox">
      <div class="info">
        <p class="name">收货人：{{ confirmData.name }}</p>
        <p class="phone">{{ confirmData.phone }}</p>
      </div>
      <div class="info">
        <p class="address">收货地址：{{ confirmData.address }}</p>
        <div class="more"></div>
      </div>
    </div>
    <ul>
      <li v-for="(item, idx) in shopData" :key="idx">
        <img :src="item.img" alt="" />
        <div class="shopText">
          <p class="name">{{ item.name }}</p>
          <p class="shopMess">{{ item.shopMess }}</p>
          <p class="shopNotice">{{ item.shopNotice }}</p>
          <div class="priceAndNum">
            <p class="priceBox">
              <span>￥</span><span>{{ item.price }}</span>
            </p>
            <p class="numBox">
              <span>x</span><span>{{ item.num }}</span>
            </p>
          </div>
        </div>
      </li>
    </ul>
    <div class="perferBox">
        <div class="perfer">
            <span class="perferTitle">优惠</span><span class="perferName">五品小主券</span><div class="more"></div>
        </div>
        <div class="distri">
            <p class="distriTitle">配送方式</p>
            <p class="distriName">快递免运费</p>
        </div>
        <div class="buyerMess">
            <p class="title">买家留言</p>
            <p class="mess">留言前建议协商（50字内）</p>
        </div>
    </div>
    <div class="allInfo">
        <div class="allPrice">
            <p class="title">商品金额</p><p class="content"><span>￥</span><span>{{confirmData.allprice}}</span></p>
        </div>
        <div class="allDistri">
            <p class="title">运费</p><p class="content">免运费</p>
        </div>
        <div class="totalBox">
            <p class="title">合计</p><p class="content"><span>￥</span><span>{{confirmData.allprice}}</span></p>
        </div>
    </div>
    <div class="calcBox">
        <p class="combine">合计：</p><span class="symbol">￥</span><span class="totalPrice">1326</span><input type="button" value="提交订单" class="submit">
    </div>
  </div>
</template>
<script>
export default {
  name: "confirm",
  data() {
    return {
      confirmData: {
        name: "关山月",
        phone: "12345678911",
        address: "广州市荔湾区西关大道999号",
        allprice:'1326.00'
      },
      shopData: [
        {
          img: require("../../assets/confirmImg1.png"),
          name: "故宫口红•枫叶红",
          shopMess: "枫叶红",
          shopNotice: "7天无理由退换",
          price: "199.00",
          num: 1,
        },
        {
          img: require("../../assets/confirmImg1.png"),
          name: "故宫口红•枫叶红",
          shopMess: "枫叶红",
          shopNotice: "7天无理由退换",
          price: "199.00",
          num: 1,
        },
      ],
    };
  },
};
</script>
<style scoped lang="less">
#confirm {
  background: #f5f5f5;
}
.header {
  height: 0.88rem;
  background: #c30d23;
  text-align: center;
  padding-top: 0.01rem;
  p {
    font-size: 0.2rem;
    font-weight: bold;
    color: #fffcfc;
    margin-top: 0.5rem;
  }
}
.addressBox {
  background: #fff;
  .info {
    display: flex;
    justify-content: space-between;
    font-size: 0.12rem;
    .name {
      font-size: 0.14rem;
      margin-left: 0.2rem;
      margin-top: 0.12rem;
    }
    .phone {
      margin-top: 0.12rem;
      margin-right: 0.23rem;
    }
    .address {
      margin-left: 0.2rem;
      margin-top: 0.09rem;
    }
    .more {
      background: url(../../assets/makesure.png) no-repeat;
      background-size: cover;
      width: 0.2rem;
      height: 0.2rem;
      margin-top: 0.1rem;
      margin-right: 0.2rem;
    }
  }
}
ul{
    background: #fff;
    margin-top: 0.12rem;
    li{
        display: flex;
        img{
            width: 0.88rem;
            height: 0.88rem;
            margin-top: 0.16rem;
            margin-left: 0.2rem;
        }
        .shopText{
            font-size: 0.14rem;
            margin-left: 0.16rem;
            .name{
                margin-top: 0.17rem;
            }
            .shopMess{
                margin-top: 0.08rem;
            }
            .shopNotice{
                margin-top: 0.05rem;
                color: #C91328;
                font-size: 0.08rem;
                background: #FFE0E4;
                width: 0.8rem;
            }
            .priceAndNum{
                margin-top: 0.05rem;
                display: flex;
                .priceBox{
                    color:#C30D23;
                }
                .numBox{
                    margin-left: 1.64rem;
                }
            }
        }

    }
}
.perferBox{
    height: 1.26rem;
    background: #fff;
    margin-top: 0.12rem;
    .perfer{
        display: flex;
        .perferTitle{
            font-size: 0.14rem;
            color: #333333;
            margin-top: 0.21rem;
            margin-left: 0.2rem;
        }
        .perferName{
            font-size: 0.12rem;
            color: #C30D23;
            margin-top: 0.22rem;
            margin-left: 2.3rem;
        }
        .more{
            width: 0.2rem;
            height: 0.2rem;
            background: url(../../assets/makesure.png) no-repeat;
            margin-top: 0.2rem;
        }
    }
}
.distri{
    display: flex;
    .distriTitle{
        font-size: 0.14rem;
        color: #333333;
        margin-top: 0.14rem;
        margin-left: 0.2rem;
    }
    .distriName{
        font-size: 0.12rem;
        color: #333333;
        margin-top: 0.19rem;
        margin-left: 2.19rem;
    }
}
.buyerMess{
    display: flex;
    .title{
        margin-top: 0.14rem;
        margin-left: 0.2rem;
        font-size: 0.14rem;
        color: #333333;
    }
    .mess{
        margin-left: 0.16rem;
        margin-top: 0.16rem;
        font-size: 0.12rem;
        color: #999999;
    }
}
.allInfo{
    margin-top: 0.12rem;
    background: #fff;
    height: 1.39rem;
    .allPrice{
        display: flex;
        justify-content: space-between;
        font-size: 0.14rem;
        .title{
            font-size: 0.14rem;
            margin-left: 0.2rem;
            margin-top: 0.2rem;
        }
        .content{
            margin-right: 0.23rem;
            margin-top: 0.2rem;
            color: #C30D23;
            font-weight: bold;
        }
    }
    .allDistri{
        display: flex;
        justify-content: space-between;
        .title{
            margin-top: 0.14rem;
            margin-left: 0.2rem;
            font-size: 0.14rem;
        }
        .content{
            margin-right: 0.2rem;
            margin-top: 0.17rem;
            font-size: 0.12rem;
        }
    }
    .totalBox{
        display: flex;
        justify-content: space-between;
        font-size: 0.14rem;
        .title{
            margin-top: 0.14rem;
            margin-left: 0.2rem;
        }
        .content{
            color:#C30D23;
            font-weight: bold;
            margin-top: 0.14rem;
            margin-right: 0.23rem;
        }
    }
}
.calcBox{
    background: #fff;
    margin-bottom: 0.83rem;
    display: flex;
    justify-content: flex-end;
    font-size: 0.14rem;
    height: 0.44rem;
    line-height: 0.44rem;
    .combine{
        color:#333333;
    }
    .symbol{
        color:#C30D23;
    }
    .totalPrice{
        margin-right: 0.16rem;
        color: #C30D23;
    }
    .submit{
        width: 0.94rem;
        height: 0.44rem;
        background: #C30D23;
        color:#FFFCFC;
        border:none;
    }
}
</style>