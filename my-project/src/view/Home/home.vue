<template>
  <div>
    <div class="header">
      <div class="topHead">
        <div class="logo"></div>
        <div class="searchBox">
          <input type="text" class="searchText" placeholder="故宫口红" />
        </div>
        <div class="message"></div>
      </div>
      <div class="centerHead"></div>
      <div class="bottomHead">
        <ul>
          <li class="newShop">
            <span>故宫新品</span>
          </li>
          <li class="publish">
            <span>故宫出版</span>
          </li>
          <li class="jointly">
            <span>故宫联名</span>
          </li>
          <li class="cultural">
            <span>文创产品</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="space"></div>
    <div class="shop">
      <div class="shopHead">
        <div class="shopText1">新人专享首单0元购</div>
        <div class="shopText2">返还100%的支付金额</div>
        <div class="goBtn"></div>
      </div>
      <div class="shopContent">
        <div class="shopShow">
          <div class="leftShow">
            <div class="leftTitle">
              <span class="title1">故宫上新</span>
              <span class="title2">惊喜上新</span>
            </div>
            <div class="leftShop">
              <ul>
                <li class="nor li1">
                  <img src="../../assets/leftShow1.png" />
                  <span>￥199.9</span>
                </li>
                <li class="nor li2">
                  <img src="../../assets/leftShow2.png" />
                  <span>￥39.9</span>
                </li>
                <li class="sp">
                  <img src="../../assets/leftShow3.png" />
                  <div class="spText">
                    <p class="p1">好事登枝茶海</p>
                    <p class="p2">多福多寿</p>
                    <p class="p3">￥159.99</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="rightShow">
            <div class="rightTitle">
              <span class="title1">宫里好物</span>
              <span class="title2">精选</span>
            </div>
            <div class="rightShop">
              <ul>
                <li>
                  <img src="../../assets/rightShop1.png" />
                  <span>珐琅茶壶</span>
                </li>
                <li>
                  <img src="../../assets/rightShop2.png" />
                  <span>五彩藻纹罐</span>
                </li>
                <li>
                  <img src="../../assets/rightShop3.png" />
                  <span>梅花绣眼壶承</span>
                </li>
                <li>
                  <img src="../../assets/rightShop4.png" />
                  <span>龙纹酒壶</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="news">
        <span class="newsTitle">故宫资讯</span>
        <span class="line"></span>
        <span class="newsText">“故宫讲堂”第一百六十二讲-古陶瓷科技研究 </span>
        <span class="btnBox"></span>
      </div>
    </div>
    <div class="selectBox">
      <div class="titleBox">
        <ul class="title">
          <li>为</li>
          <li>你</li>
          <li>精</li>
          <li>选</li>
        </ul>
      </div>
      <div class="swiperContainer">
        <div class="swiperBox">
          <swiper :swiperSrc="swiperSrc" class="swiperImg"></swiper>
          <div
            slot="textBox"
            class="swiperText"
            v-for="(item, idx) in swiperSrc"
            :key="idx"
          >
            {{ item.text }}
            <div class="img"></div>
            <div class="moreBox"></div>
          </div>
        </div>
      </div>

      <div class="selectShop">
        <ul>
          <li>
            <img src="../../assets/selectShop.png" />
            <p>荷包口红•豇豆红</p>
            <span class="newPrice">￥199.00</span
            ><span class="notice">上新价</span>
          </li>
          <li>
            <img src="../../assets/selectShop2.png" />
            <p>鹤禧觉色•气垫</p>
            <span class="newPrice">￥120.00</span
            ><span class="oldPrice">￥199</span>
          </li>
          <li>
            <img src="../../assets/selectShop3.png" />
            <p>鹤禧觉色•气垫</p>
            <span class="newPrice">￥540.00</span
            ><span class="notice">限时</span>
          </li>
          <li>
            <img src="../../assets/selectShop4.png" />
            <p>鹤舞青松丝巾</p>
            <span class="newPrice">￥120.00</span
            ><span class="notice">上新价</span>
          </li>
        </ul>
      </div>
      <div class="whiteSpace"></div>
    </div>
    <div class="goodThings">
      <div class="titleBox">
        <ul class="title">
          <li>好</li>
          <li>物</li>
          <li>馆</li>
        </ul>
      </div>
      <div class="shops">
        <ul>
          <li>
            <img src="../../assets/goodThings1.png" alt="" />
            <p class="thingName">荷包口红•琥珀橘</p>
            <p class="thingNotice">国风好礼</p>
            <p class="leftPrice">￥199.00</p>
            <p class="leftSale">月销1987</p>
          </li>
          <li>
            <img src="../../assets/goodThings2.png" alt="" />
            <p class="thingName">花丝比翼双飞流苏耳饰</p>
            <p class="rightPrice">￥1127.00</p>
            <p class="rightSale">月销127</p>
            <div class="info">
              <div class="champion"></div>
              <p>故宫首饰排行榜第一</p>
              <div class="rightMore"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../../components/swiper.vue";
export default {
  name: "home",
  components: {
    swiper,
  },
  data() {
    return {
      swiperSrc: [
        {
          img: require("../../assets/swiperSrc1.png"),
          text: "果园老农 × 国立故宫 × IN LIGHT 新中式",
        },
      ],
    };
  },
};
</script>
<style scoped lang="less">
.swiperText {
  width: 3.51rem;
  height: 0.32rem;
  background: url(../../assets/swiperTextBg.png) no-repeat;
  background-size: cover;
  z-index: 100;
  font-size: 0.12rem;
  line-height: 0.32rem;
  position: absolute;
  bottom: 0;
  opacity: 0.7;
  .img {
    width: 0.2rem;
    height: 0.2rem;
    position: absolute;
    background: url(../../assets/hot.png) no-repeat;
    background-size: cover;
    top: 0.06rem;
    right: 0.97rem;
  }
  .moreBox {
    width: 0.12rem;
    height: 0.12rem;
    position: absolute;
    background: url(../../assets/whiteRightMore.png) no-repeat;
    background-size: cover;
    top: 0.1rem;
    right: 0.1rem;
  }
}
.header {
}
.topHead {
  position: relative;
  height: 0.86rem;
  background-color: rgb(189, 11, 11);
}
.logo {
  position: absolute;
  top: 0.5rem;
  left: 0.16rem;
  width: 0.4rem;
  height: 0.4rem;
  background: url(../../assets/homeLogo.png) no-repeat;
}
.searchBox {
  position: absolute;
  width: 2.6rem;
  height: 0.32rem;
  border-radius: 6px;
  top: 0.51rem;
  left: 0.63rem;
  line-height: 0.32rem;
  background: url(../../assets/search.png) no-repeat 0.83rem 0.06rem;
  
}
.searchBox .searchText {
  position: absolute;
  border: none;
  background-color: none;
  width: 2.6rem;
  height: 0.32rem;
  text-align: center;
  background-color: rgba(255, 255, 255, 0.16);
}
input::-webkit-input-placeholder {
  color: rgba(255, 255, 255, 0.8);
}
.message {
  position: absolute;
  top: 0.51rem;
  right: 0.12rem;
  width: 0.32rem;
  height: 0.32rem;
  background: url(../../assets/notice.png) no-repeat;
  background-size: cover;
}
.centerHead {
  height: 2.14rem;
  background: url(../../assets/homeBg.png) no-repeat;
  background-size: cover;
}
.bottomHead {
  height: 0.87rem;
  padding-top: 0.16rem;
}
.bottomHead ul {
  display: flex;
  justify-content: space-around;
}
.bottomHead ul li {
  position: relative;
  width: 0.48rem;
  height: 0.68rem;
  font-size: 0.12rem;
}
.bottomHead ul li span {
  position: absolute;
  bottom: 0;
}
.newShop {
  background: url(../../assets/newShop.png) no-repeat;
}
.publish {
  background: url(../../assets/publish.png) no-repeat;
}
.jointly {
  background: url(../../assets/jointly.png) no-repeat;
}
.cultural {
  background: url(../../assets/cultural.png) no-repeat;
}
.space {
  width: 3.75rem;
  height: 0.12rem;
  background: #f5f5f5;
  opacity: 1;
}
.shop .shopHead {
  height: 1.23rem;
  background: url(../../assets/shopHead.png) no-repeat;
  background-size: cover;
  position: relative;
}
.shop .shopHead .shopText1 {
  position: absolute;
  font-size: 0.14rem;
  color: #ffffff;
  font-weight: bold;
  left: 0.28rem;
  top: 0.95rem;
}
.shop .shopHead .shopText2 {
  position: absolute;
  font-size: 0.1rem;
  color: #ffffff;
  right: 1.05rem;
  top: 0.98rem;
}
.shop .shopHead .goBtn {
  position: absolute;
  width: 0.48rem;
  height: 0.2rem;
  background: url(../../assets/goBtn.png);
  background-size: cover;
  bottom: 0.08rem;
  right: 0.36rem;
}
.shop .shopContent {
  height: 2.67rem;
  background-color: #c30d23;
}
.shop .shopContent .shopShow {
  background-color: #fff;
  width: 3.51rem;
  height: 2.14rem;
  margin: 0 auto;
  border: 2px solid #ffebb9;
  border-radius: 4px;
  display: flex;
}
.shop .shopContent .shopShow .leftShow {
  width: 1.61rem;
  height: 1.98rem;
  margin-left: 0.16rem;
  border-right: 1px solid #707070;
}
.shop .shopContent .shopShow .leftShow .leftTitle {
  position: relative;
  height: 0.38rem;
}
.shop .shopContent .shopShow .leftShow .leftTitle .title1 {
  font-size: 0.14rem;
  color: #333333;
  position: absolute;
  top: 0.08rem;
}
.shop .shopContent .shopShow .leftShow .leftTitle .title2 {
  background: linear-gradient(90deg, #ff6815 0%, #ff4c3c 100%);
  font-size: 0.08rem;
  color: #fffcfc;
  display: inline-block;
  position: absolute;
  left: 0.6rem;
  top: 0.12rem;
}
.shop .shopContent .shopShow .leftShow .leftShop li {
  float: left;
}
.shop .shopContent .shopShow .leftShow .leftShop .nor {
  width: 0.72rem;
  height: 0.82rem;
  position: relative;
}
.shop .shopContent .shopShow .leftShow .leftShop .li1 {
  background-color: #fff9fa;
  margin-right: 0.08rem;
}
.shop .shopContent .shopShow .leftShow .leftShop .nor img {
  position: absolute;
  left: 0.09rem;
  top: 0.08rem;
}
.shop .shopContent .shopShow .leftShow .leftShop .nor span {
  position: absolute;
  bottom: 0.04rem;
  font-size: 0.1rem;
  color: #c30d23;
}
.shop .shopContent .shopShow .leftShow .leftShop .li1 span {
  left: 0.19rem;
}
.shop .shopContent .shopShow .leftShow .leftShop .li2 span {
  left: 0.22rem;
}
.shop .shopContent .shopShow .leftShow .leftShop .li2 {
  background-color: #fffdf7;
}
.shop .shopContent .shopShow .leftShow .leftShop .sp {
  margin-top: 0.08rem;
  width: 1.52rem;
  height: 0.74rem;
  background-color: #f3faff;
  opacity: 1;
  position: relative;
}
.shop .shopContent .shopShow .leftShow .leftShop .sp img {
  position: absolute;
  top: 0.12rem;
  left: 0.08rem;
}
.shop .shopContent .shopShow .leftShow .leftShop .sp .spText {
  position: absolute;
  top: 0.11rem;
  right: 0.08rem;
}
.shop .shopContent .shopShow .leftShow .leftShop .sp .p1 {
  font-size: 0.1rem;
  color: #333333;
}
.shop .shopContent .shopShow .leftShow .leftShop .sp .p2 {
  font-size: 0.08rem;
  color: #999999;
  margin-top: 0.03rem;
}
.shop .shopContent .shopShow .leftShow .leftShop .sp .p3 {
  font-size: 0.1rem;
  color: #c30d23;
  margin-top: 0.09rem;
}
.shop .shopContent .shopShow .rightShow {
}
.shop .shopContent .shopShow .rightShow .rightTitle {
  height: 0.38rem;
  position: relative;
}
.shop .shopContent .shopShow .rightShow .rightTitle .title1 {
  font-size: 0.14rem;
  color: #333333;
  position: absolute;
  top: 0.08rem;
  left: 0.08rem;
  display: block;
  width: 0.56rem;
}
.shop .shopContent .shopShow .rightShow .rightTitle .title2 {
  position: absolute;
  font-size: 0.08rem;
  background: linear-gradient(90deg, #ffe2a5 0%, #f5a600 100%);
  color: #fffcfc;
  top: 0.12rem;
  left: 0.68rem;
  display: block;
  width: 0.28rem;
}
.shop .shopContent .shopShow .rightShow .rightShop {
  margin-left: 0.2rem;
}
.shop .shopContent .shopShow .rightShow .rightShop li {
  float: left;
  width: 0.73rem;
  height: 0.82rem;
  position: relative;
  margin-right: 0.08rem;
}
.shop .shopContent .shopShow .rightShow .rightShop li img {
  position: absolute;
  top: 0.08rem;
}
.shop .shopContent .shopShow .rightShow .rightShop li span {
  display: block;
  width: 0.8rem;
  font-size: 0.08rem;
  background: #fff9fa;
  position: absolute;
  bottom: 0.02rem;
  color: #c30d23;
}
.shop .news {
  width: 3.51rem;
  height: 0.24rem;
  background: #ffffff;
  border: 2px solid #ffebb9;
  border-radius: 2px;
  font-size: 0.1rem;
  position: absolute;
  bottom: 0.13rem;
  left: 0.12rem;
}
.shop .news .newsTitle {
  color: #c30d23;
  position: absolute;
  top: 0.05rem;
  left: 0.12rem;
}
.shop .news .line {
  display: inline-block;
  width: 0px;
  height: 12px;
  border: 1px solid #333333;
  opacity: 1;
  position: absolute;
  top: 0.06rem;
  left: 0.7rem;
}
.shop .news .newsText {
  position: absolute;
  top: 0.05rem;
  left: 0.72rem;
}
.shop .news .btnBox {
  display: block;
  position: absolute;
  width: 0.12rem;
  height: 0.12rem;
  background: url(../../assets/rightMore.png) no-repeat;
  background-size: cover;
  top: 0.06rem;
  right: 0.1rem;
}

.selectBox {
  height: 3.99rem;
  background: url(../../assets/bar.png) no-repeat 0 0.32rem;
  position: relative;
}
.selectBox .titleBox {
  position: relative;
  height: 0.68rem;
}
.selectBox .title {
  position: absolute;
  top: 0.2rem;
  left: 1.35rem;
}
.selectBox .title li {
  font-size: 0.16rem;
  line-height: 0.32rem;
  text-align: center;
  color: #ffffff;
  float: left;
  height: 0.32rem;
  width: 0.32rem;
  background: url(../../assets/barBg.png) no-repeat;
  background-size: cover;
  position: absolute;
}
.selectBox .title li:nth-child(2) {
  left: 0.25rem;
}
.selectBox .title li:nth-child(3) {
  left: 0.51rem;
}
.selectBox .title li:nth-child(4) {
  left: 0.78rem;
}
.selectBox .swiperContainer {
  position: relative;
  height: 1.43rem;
}
.swiperBox {
  width: 3.5rem;
  position: absolute;
  left: 0.12rem;
  height: 1.16rem;
}
.swiperImg {
}
.swiperImg img {
}
.selectShop {
  margin-top: 0.12rem;
  height: 1.6rem;
}
.selectShop ul {
  margin-left: 0.12rem;
  width: 110%;
  overflow: hidden;
  height: 1.4rem;
  white-space: nowrap;
}
.selectShop ul li {
  float: left;
  width: 1rem;
  margin-right: 0.08rem;
  position: relative;
  height: 1.4rem;
  text-overflow: clip;
}
.selectShop ul li img {
  width: 0.9rem;
}
.selectShop ul li p {
  font-size: 0.1rem;
  position: absolute;
  top: 0.96rem;
  left: 0.08rem;
}
.selectShop ul li .newPrice {
  font-size: 0.12rem;
  position: absolute;
  bottom: 0.08rem;
  left: 0.08rem;
  color: #c30d23;
}
.selectShop ul li .oldPrice {
  font-size: 0.08rem;
  position: absolute;
  text-decoration: line-through;
  right: 0.06rem;
  bottom: 0.1rem;
}
.selectShop ul li .notice {
  font-size: 0.08rem;
  position: absolute;
  right: 0.03rem;
  bottom: 0.1rem;
  color: #c30d23;
  border: 1px solid #c30d23;
  line-height: 0.11rem;
}
.whiteSpace {
  height: 0.12rem;
  background: #f5f5f5;
}
.goodThings {
  height: 3.11rem;
  background: url(../../assets/bar.png) no-repeat 0 0.32rem;
  position: relative;
  margin-bottom: 0.84rem;
}
.goodThings .titleBox {
  position: relative;
  height: 0.68rem;
}
.goodThings .title {
  position: absolute;
  top: 0.2rem;
  left: 1.35rem;
}
.goodThings .title li {
  font-size: 0.16rem;
  line-height: 0.32rem;
  text-align: center;
  color: #ffffff;
  float: left;
  height: 0.32rem;
  width: 0.32rem;
  background: url(../../assets/barBg.png) no-repeat;
  background-size: cover;
  position: absolute;
}
.goodThings .title li:nth-child(2) {
  left: 0.25rem;
}
.goodThings .title li:nth-child(3) {
  left: 0.51rem;
}
.goodThings .shops ul {
  margin-left: 0.12rem;
}
.goodThings .shops ul li {
  width: 1.7rem;
  height: 2.34rem;
  position: relative;
  float: left;
}
.goodThings .shops ul li img {
  width: 1.7rem;
}
.goodThings .shops ul li .thingName {
  position: absolute;
  font-size: 0.12rem;
  left: 0.08rem;
  bottom: 0.6rem;
}
.goodThings .shops ul li .thingNotice {
  font-size: 0.1rem;
  color: #c30d23;
  position: absolute;
  left: 0.08rem;
  bottom: 0.38rem;
}
.goodThings .shops ul li .leftPrice {
  font-size: 0.16rem;
  color: #c30d23;
  position: absolute;
  left: 0.08rem;
  bottom: 0.11rem;
}
.goodThings .shops ul li .rightPrice {
  font-size: 0.16rem;
  color: #c30d23;
  position: absolute;
  left: 0.06rem;
  bottom: 0.33rem;
}
.goodThings .shops ul li .leftSale {
  font-size: 0.1rem;
  color: #999999;
  position: absolute;
  right: 0.06rem;
  bottom: 0.14rem;
}
.goodThings .shops ul li .rightSale {
  font-size: 0.1rem;
  color: #999999;
  position: absolute;
  right: 0.06rem;
  bottom: 0.36rem;
}
.goodThings .shops ul li .info {
  position: absolute;
  bottom: 0.05rem;
  height: 0.23rem;
  width: 100%;
}
.goodThings .shops ul li .info .champion {
  position: absolute;
  width: 0.12rem;
  height: 0.12rem;
  background: url(../../assets/champion.png) no-repeat;
  background-size: cover;
  left: 0.06rem;
}
.goodThings .shops ul li .info p {
  font-size: 0.1rem;
  position: absolute;
  left: 0.24rem;
  width: 1.1rem;
}
.goodThings .shops ul li .info .rightMore {
  background: url(../../assets/rightMore.png) no-repeat;
  background-size: cover;
  width: 0.12rem;
  height: 0.12rem;
  position: absolute;
  right: 0.21rem;
}
</style>