<template>
  <div>
    <div class="header">
      <p>故宫新品</p>
    </div>
    <div class="swiperBox">
      <swiper :swiperSrc="swiperSrc"></swiper>
    </div>
    <div class="shopBox">
        <ul class="shopUl">
            <li v-for="(item,idx) in shopSrc" :key="idx" class="shopLi">
                <img :src="item.img" alt="" class="shopImg">
                <div class="rightText">
                    <div class="nameBox"><p class="status" v-if="item.status!=''">{{item.status}}</p><p class="name">{{item.name}}</p></div>
                    <p class="describe">{{item.describe}}</p>
                    <ul class="aggBox">
                        <li v-for="(aggItem,idx) in item.aggs" :key="idx">
                            <p>{{aggItem}}</p>
                        </li>
                    </ul>
                    <div class="priceBox"><p class="price">{{item.price}}</p><p class="redPerfer" v-if="item.redPerfer!=''">{{item.redPerfer}}</p><p class="bluePerfer"  v-if="item.bluePerfer!=''">{{item.bluePerfer}}</p></div>
                    <div class="evalBox"><p class="eval">{{item.eval}}</p><p class="rate">{{item.rate}}</p></div>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>
<script>
import swiper from "../../components/swiper.vue";
export default {
  name: "newShop",
  components: {
    swiper,
  },
  data() {
    return {
      swiperSrc: [
        {
          img: require("../../assets/newProduct.png"),
        },
      ],
      shopSrc:[
          {
              img:require('../../assets/newProduct1.png'),
              status:'新品',
              name:'故宫口红 荷包口红',
              describe:'滋润保湿 妆感舒悦 持妆显色',
              aggs:['多色可选','包装精美'],
              price:'￥199.00',
              redPerfer:'满200减50',
              bluePerfer:'',
              eval:'1万条评价',
              rate:'98.2%觉得好'
          },
          {
              img:require('../../assets/newProduct2.png'),
              status:'',
              name:'宫廷文化·揽月恒温杯',
              describe:'宅家养生 人走茶不凉',
              aggs:['加热保温'],
              price:'￥99.00',
              redPerfer:'',
              bluePerfer:'近期加入购物车',
              eval:'9876条评价',
              rate:'96.2%觉得好'
          },
          {
              img:require('../../assets/newProduct3.png'),
              status:'',
              name:'有凤来仪古风保湿气垫',
              describe:'轻薄水润 粉底奶油肌',
              aggs:['多色可选','包装精美'],
              price:'￥120.00',
              redPerfer:'满150减30',
              bluePerfer:'',
              eval:'9235条评价',
              rate:'95.2%觉得好'
          },
      ]
    };
  },
};
</script>
<style scoped lang="less">
.header {
  background: #c30d23;
  height: 0.88rem;
  text-align: center;
  position: relative;
  p {
    font-size: 0.2rem;
    position: absolute;
    bottom: 0.09rem;
    left: 1.48rem;
  }
}
.swiperBox{
    height: 2.25rem;
}
.shopBox{
    .shopUl{
        .shopLi{
            display: flex;
            margin-top: 0.18rem;
            .shopImg{
                width: 1.2rem;
                height: 1.2rem;
                margin-left: 0.12rem;
            }
            .rightText{
                margin-left: 0.12rem;
                .nameBox{
                    display: flex;
                    .status{
                        color: #FFFCFC;
                        font-size: 0.1rem;
                        background: #C30D23;
                        border-radius: 2px;
                        margin-right: 0.06rem;
                    }
                    .name{
                        font-size: 0.16rem;
                        color:#333333;
                    }
                }
                .describe{
                    font-size: 0.12rem;
                    color:#666666;
                    margin-top: 0.05rem;
                }
                .aggBox{
                    display: flex;
                    margin-top: 0.08rem;
                    li{
                        color: #B3B3B3;
                        background: #F2F2F2;
                        margin-right: 0.08rem;
                        font-size: 0.1rem;
                    }
                }
                .priceBox{
                    margin-top: 0.12rem;
                    display: flex;
                    .price{
                        font-size: 0.16rem;
                        color:#C30D23;
                        margin-right: 0.09rem;
                    }
                    .redPerfer{
                        font-size: 0.1rem;
                        border: 1px solid #C30D23;
                        margin-right: 0.09rem;
                        color:#C30D23;
                    }
                    .bluePerfer{
                        color:#2448AC;
                        border:1px solid #2448AC;
                        font-size: 0.1rem;
                    }
                }
                .evalBox{
                    margin-top: 0.08rem;
                    font-size: 0.1rem;
                    display: flex;
                    color:#999999;
                    .eval{
                        margin-right: 0.09rem;
                    }
                }
            }
        }
    }
}
</style>