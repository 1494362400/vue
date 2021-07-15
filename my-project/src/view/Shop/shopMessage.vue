<template>
  <div id="shopMessage">
    <div class="swiperBox">
      <swiper :swiperSrc="swiperSrc" @swiperIndex="swiperIndex" />
      <div slot="numCount" class="numCount">
        {{ swiperidx }}/{{ swiperSrc.length }}
      </div>
      <div class="return" @click="returnRouter"></div>
      <div class="share"></div>
      <div class="only">仅剩10件</div>
    </div>
    <div class="info">
      <p>上新专享</p>
      <span class="price">¥99.00</span>
      <span class="time">距离结束还剩1天</span>
    </div>
    <div class="infoBox">
      <p class="price">¥120.00</p>
      <p class="name">有凤来仪古风保湿气垫霜 轻薄水润粉底奶油肌妆效</p>
      <p class="text">彰显华夏之美，衬红妆风韵</p>
    </div>
    <div class="perferBox">
      <div class="perfer">
        <span class="title">优惠</span>
        <p class="name">故宫新人</p>
        <span class="text">故宫小主新人领百元礼包</span>
        <div class="more"></div>
      </div>
      <div class="perferMore">
        <p class="name">领券</p>
        <div class="redText">满200享9折</div>
        <div class="yellowText">满150减10</div>
      </div>
    </div>
    <div class="buyInfo">
      <div class="selectBox">
        <div class="select">
          <p class="title">已选</p>
          <p class="text">已选，</p>
          <p class="type">{{ typeData[typeSelect].name }}</p>
          <div class="more"></div>
        </div>
        <div class="typeImg">
          <ul>
            <li
              v-for="(item, idx) in typeData"
              :key="idx"
              @click="typeChange(idx)"
              :class="{ checkLi: idx == typeSelect }"
            >
              <img :src="item.img" alt="" />
            </li>
          </ul>
          <div class="allImg">共3种颜色...</div>
        </div>
      </div>
      <div class="line"></div>
      <div class="addressBox">
        <div class="address">
          <p class="title">送至</p>
          <p class="goto">北京 至 广州海珠区</p>
          <div class="more"></div>
        </div>
        <div class="time">
          <span class="status">现货</span>
          <span class="text"
            >今天23：00前完成下单，预计6月2日12:00前发货，6月6日（周六）24:00前送达</span
          >
        </div>
      </div>
      <div class="line"></div>
      <div class="distriBox">
        <p class="title">运费</p>
        <p class="text">免运费</p>
      </div>
      <div class="line"></div>
      <div class="serverBox">
        <ul>
          <li v-for="(item, idx) in serverData" :key="idx">
            <div
              class="img"
              :style="{ backgroundImage: 'url(' + item.img + ')' }"
            ></div>
            <p class="name">{{ item.name }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="evalBox">
      <div class="evalHead">
        <div class="evalBg"></div>
        <p class="title">评价</p>
        <p class="count">（{{ evalData.count }}）</p>
        <p class="line"></p>
        <p class="goodRate">
          <span class="name">好评率</span
          ><span class="number">{{ evalData.goodRate }}</span>
        </p>
        <div class="more"></div>
      </div>
      <div class="evals">
        <ul>
          <li v-for="(item, idx) in evalData.eval" :key="idx">
            {{ item }}
          </li>
        </ul>
      </div>
      <div class="perEval">
        <ul class="evalUl">
          <li v-for="(item, idx) in evalData.perData" :key="idx" class="evalLi">
            <div class="perHead">
              <img :src="item.img" alt="" class="perImg" />
              <div class="perText">
                <p class="name">{{ item.name }}</p>
                <div class="starBox">
                  <div class="star" v-for="num of item.points" :key="num"></div>
                </div>
              </div>
            </div>
            <p class="evalText">{{ item.text }}</p>
            <ul class="shopImgBox">
              <li v-for="(shopItem, idx) in item.shopImgs" :key="idx">
                <img :src="shopItem" alt="" class="shopImg" />
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li>
          <div class="collect"></div>
          <p>收藏</p>
        </li>
        <li>
          <div class="car"></div>
          <p>购物车</p>
        </li>
        <li>
          <div class="customerServer"></div>
          <p>客服</p>
        </li>
      </ul>
      <input type="button" class="add" value="加入购物车" />
      <input type="button" class="buy" value="立即购买" />
    </div>
  </div>
</template>
<script>
import swiper from "../../components/swiper.vue";
export default {
  name: "shopMessage",
  components: {
    swiper,
  },
  data() {
    return {
      swiperidx: 1,
      typeSelect: 0,
      swiperSrc: [
        {
          num: 1,
          img: require("../../assets/shopMessage.png"),
        },
        {
          num: 2,
          img: require("../../assets/shopMessage.png"),
        },
        {
          num: 3,
          img: require("../../assets/shopMessage.png"),
        },
        {
          num: 4,
          img: require("../../assets/shopMessage.png"),
        },
        {
          num: 5,
          img: require("../../assets/shopMessage.png"),
        },
        {
          num: 6,
          img: require("../../assets/shopMessage.png"),
        },
      ],
      typeData: [
        {
          img: require("../../assets/type.png"),
          name: "01自然色",
        },
        {
          img: require("../../assets/type.png"),
          name: "02自然色",
        },
        {
          img: require("../../assets/type.png"),
          name: "03自然色",
        },
      ],
      serverData: [
        {
          name: "售后服务",
          img: require("../../assets/server.png"),
        },
        {
          name: "国妆特字",
          img: require("../../assets/server.png"),
        },
        {
          name: "7天退换",
          img: require("../../assets/server.png"),
        },
        {
          name: "闪电退款",
          img: require("../../assets/server.png"),
        },
      ],
      evalData: {
        count: 12245,
        goodRate: "98%",
        eval: ["外观精美", "轻薄水润", "自然服帖"],
        perData: [
          {
            img: require("../../assets/evalHead.png"),
            name: "万***旅",
            points: 5,
            text: "物流快，包装精美大气",
            shopImgs: [require("../../assets/evalShopImg.png")],
          },
        ],
      },
    };
  },
  methods: {
    typeChange(idx) {
      this.typeSelect = idx;
    },
    swiperIndex(val) {
      this.swiperidx = parseInt(val) + 1;
    },
    returnRouter() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped lang="less">
#shopMessage {
  background: #f5f5f5;
}
.swiperBox {
  height: 3.75rem;
  position: relative;
  .numCount {
    z-index: 100;
    position: absolute;
    right: 0.2rem;
    bottom: 0.12rem;
    font-size: 0.1rem;
    width: 0.3rem;
    height: 0.16rem;
    border-radius: 5px;
    background: rgba(51, 51, 51, 0.3);
    text-align: center;
    color: #fffcfc;
  }
  .return {
    background: url(../../assets/shopreturn.png) no-repeat;
    width: 0.32rem;
    height: 0.32rem;
    position: absolute;
    top: 0.53rem;
    left: 0.16rem;
    z-index: 100;
  }
  .share {
    background: url(../../assets/shopshare.png) no-repeat;
    width: 0.32rem;
    height: 0.32rem;
    position: absolute;
    top: 0.53rem;
    right: 0.16rem;
    z-index: 100;
  }
  .only {
    font-size: 0.1rem;
    color: #fffcfc;
    background: rgba(51, 51, 51, 0.3);
    border-radius: 5px;
    z-index: 100;
    position: absolute;
    left: 0.2rem;
    bottom: 0.12rem;
  }
}
.info {
  height: 0.44rem;
  display: flex;
  font-size: 0.12rem;
  color: #fffcfc;
  // background:  url(../../assets/infoBg.png);
  background-color: red;
  p {
    width: 0.24rem;
    margin-left: 0.2rem;
    margin-top: 0.05rem;
  }
  .price {
    font-size: 0.2rem;
    margin-left: 0.2rem;
    margin-top: 0.07rem;
    font-weight: bold;
  }
  .time {
    margin-left: 1.37rem;
    margin-top: 0.15rem;
  }
}
.infoBox {
  height: 1.43rem;
  background-color: #fff;
  .price {
    font-weight: bold;
    color: #c30d23;
    font-size: 0.18rem;
    margin-top: 0.08rem;
    margin-left: 0.2rem;
  }
  .name {
    width: 3.35rem;
    margin: 0 auto;
    margin-top: 0.1rem;
    font-size: 0.16rem;
    color: #333333;
    font-weight: bold;
  }
  .text {
    font-size: 0.14rem;
    margin-top: 0.08rem;
    margin-left: 0.2rem;
    color: #666666;
  }
}
.perferBox {
  background-color: #fff;
  margin-top: 0.08rem;
  height: 0.87rem;
  .perfer {
    display: flex;
    .title {
      font-size: 0.14rem;
      margin-top: 0.2rem;
      margin-left: 0.2rem;
    }
    .name {
      font-size: 0.1rem;
      margin-top: 0.23rem;
      margin-left: 0.12rem;
    }
    .text {
      font-size: 0.12rem;
      margin-top: 0.22rem;
      margin-left: 0.08rem;
    }
    .more {
      width: 0.2rem;
      height: 0.2rem;
      background: url(../../assets/shopMore.png) no-repeat;
      margin-top: 0.2rem;
      margin-left: 0.91rem;
    }
  }
  .perferMore {
    display: flex;
    font-size: 0.1rem;
    .name {
      color: #fe1d03;
      background: rgba(222, 31, 43, 0.1);
      margin-left: 0.6rem;
      margin-top: 0.12rem;
    }
    .redText {
      width: 0.66rem;
      height: 0.15rem;
      background: url(../../assets/perferRed.png);
      margin-left: 0.08rem;
      margin-top: 0.14rem;
      color: #fe1d03;
    }
    .yellowText {
      width: 0.66rem;
      height: 0.15rem;
      background: url(../../assets/perferYellow.png);
      margin-left: 0.08rem;
      margin-top: 0.14rem;
      color: #facb58;
    }
  }
}
.buyInfo {
  background-color: #fff;
  margin-top: 0.08rem;
  .line {
    width: 2.88rem;
    height: 0.01rem;
    background-color: rgba(106, 106, 106, 0.1);
    margin-left: 0.67rem;
  }
  .selectBox {
    height: 1.16rem;
    .select {
      display: flex;
      .title {
        font-size: 0.14rem;
        margin-top: 0.2rem;
        margin-left: 0.19rem;
      }
      .text {
        font-size: 0.12rem;
        margin-top: 0.22rem;
        margin-left: 0.19rem;
      }
      .type {
        margin-top: 0.22rem;
        font-size: 0.12rem;
      }
      .more {
        width: 0.2rem;
        height: 0.2rem;
        background: url(../../assets/shopMore.png) no-repeat;
        margin-top: 0.2rem;
        margin-left: 1.9rem;
      }
    }
    .typeImg {
      height: 0.46rem;
      display: flex;
      margin-top: 0.14rem;
      margin-left: 0.67rem;
      ul {
        display: flex;
        .checkLi {
          border: 1px solid #de1f2b;
        }
        li {
          width: 0.44rem;
          position: relative;
          margin-right: 0.08rem;
          img {
            position: absolute;
          }
        }
      }
      .allImg {
        width: 0.44rem;
        height: 0.44rem;
        background: #f7f7f7;
        font-size: 0.1rem;
        text-align: center;
      }
    }
  }

  .addressBox {
    height: 0.85rem;
    .address {
      display: flex;
      .title {
        font-size: 0.14rem;
        color: #333333;
        margin-top: 0.12rem;
        margin-left: 0.2rem;
      }
      .goto {
        font-size: 0.12rem;
        color: #333333;
        margin-top: 0.14rem;
        margin-left: 0.15rem;
      }
      .more {
        width: 0.2rem;
        height: 0.2rem;
        background: url(../../assets/shopMore.png) no-repeat;
        margin-top: 0.14rem;
        margin-left: 1.74rem;
      }
    }
    .time {
      margin-top: 0.09rem;
      width: 2.91rem;
      font-size: 0.12rem;
      margin-left: 0.64rem;
      .status {
        color: #c91328;
        margin-right: 0.03rem;
      }
      .text {
        color: #333333;
      }
    }
  }
  .distriBox {
    height: 0.42rem;
    display: flex;
    .title {
      font-size: 0.14rem;
      margin-left: 0.2rem;
      margin-top: 0.12rem;
    }
    .text {
      font-size: 0.12rem;
      margin-left: 0.16rem;
      margin-top: 0.14rem;
    }
  }
  .serverBox {
    height: 0.36rem;
    padding-top: 0.22rem;
    ul {
      display: flex;
      justify-content: space-around;
      width: 3.28rem;
      margin: 0 auto;
      li {
        display: flex;
        .img {
          width: 0.2rem;
          height: 0.2rem;
        }
        .name {
          font-size: 0.12rem;
        }
      }
    }
  }
}
.evalBox {
  background-color: #fff;
  margin-top: 0.08rem;
  padding-top: 0.2rem;
  .evalHead {
    display: flex;
    font-size: 0.14rem;
    .evalBg {
      background: url(../../assets/evalBg.png) no-repeat;
      width: 0.06rem;
      height: 0.18rem;
      margin-left: 0.19rem;
    }
    .title {
      margin-left: 0.06rem;
    }
    .count {
      margin-left: 0.08rem;
    }
    .line {
      margin-left: 0.06rem;
    }
    .goodRate {
      margin-left: 0.02rem;
      .number {
        color: #c30d23;
      }
    }
    .more {
      width: 0.2rem;
      height: 0.2rem;
      background: url(../../assets/shopMore.png) no-repeat;
      margin-left: 1.37rem;
    }
  }
  .evals {
    margin-top: 0.14rem;
    ul {
      display: flex;
      font-size: 0.1rem;
      color: #333333;
      margin-left: 0.2rem;
      li {
        background-color: rgba(201, 19, 40, 0.1);
        margin-right: 0.08rem;
      }
    }
  }
  .perEval {
    .evalUl {
      .evalLi {
        .perHead {
          display: flex;
          .perImg {
            width: 0.28rem;
            margin-left: 0.2rem;
            margin-top: 0.16rem;
          }
          .perText {
            margin-left: 0.08rem;
            margin-top: 0.12rem;
            .name {
              font-size: 0.12rem;
              font-weight: bold;
            }
            .starBox {
              display: flex;
              .star {
                width: 0.12rem;
                height: 0.12rem;
                background: url(../../assets/evalPoint.png) no-repeat;
              }
            }
          }
        }
        .evalText {
          font-size: 0.12rem;
          margin-left: 0.2rem;
          margin-top: 0.12rem;
        }
        .shopImgBox {
          display: flex;
          margin-top: 0.12rem;
          margin-left: 0.2rem;
          li {
            position: relative;
            width: 0.88rem;
            height: 0.88rem;
            .shopImg {
              position: absolute;
              width: 0.88rem;
              height: 0.88rem;
            }
          }
        }
      }
    }
  }
}
.footer {
  display: flex;
  ul {
    display: flex;
    li {
      width: 0.36rem;
      font-size: 0.1rem;
      text-align: center;
      margin-left: 0.12rem;
      .collect {
        width: 0.2rem;
        height: 0.2rem;
        background: url(../../assets/collect.png) no-repeat;
        margin: 0 auto;
        margin-top: 0.06rem;
      }
      .car {
        width: 0.2rem;
        height: 0.2rem;
        background: url(../../assets/car.png) no-repeat;
        margin: 0 auto;
        margin-top: 0.06rem;
      }
      .customerServer {
        width: 0.2rem;
        height: 0.2rem;
        background: url(../../assets/customerServer.png) no-repeat;
        margin: 0 auto;
        margin-top: 0.06rem;
      }
    }
  }
  input {
    width: 1.13rem;
    height: 0.48rem;
    border: none;
    color: #fffcfc;
    font-size: 0.14rem;
  }
  .add {
    background: #facb58;
  }
  .buy {
    background: #c30d23;
  }
}
</style>