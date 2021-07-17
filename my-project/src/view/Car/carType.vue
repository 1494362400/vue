<template>
  <div v-if="closeFlag == false" id="carType">
    <div class="header"></div>
    <div class="content">
      <div class="infoBox">
        <img :src="shopData.img" alt="" class="shopiImg" />
        <div class="info">
          <p class="price">价格：{{ shopData.price }}</p>
          <p class="status">{{ shopData.status }}</p>
        </div>
        <img
          src="../../assets/close.png"
          alt=""
          class="close"
          @click="closeSelect"
        />
      </div>
      <div v-for="(item, idx) in shopData.options" :key="idx" class="typeBox">
        <p class="name">{{ item.name }}</p>
        <ul>
          <li
            v-for="(typeItem, index) in item.type"
            :key="index"
            :class="{ selected: currentType == index }"
            @click="typeSelect(index)"
          >
            {{ typeItem }}
          </li>
        </ul>
      </div>
    </div>
    <div class="footer">
      <p class="sendTime">{{ shopData.sendTime }}</p>
      <input type="button" value="确定" class="confirmBtn" @click="confirmSelect" />
    </div>
  </div>
</template>
<script>
export default {
  name: "carType",
  methods: {
    typeSelect(index) {
      this.currentType = index;
    },
    openSelect(data){
        this.closeFlag=false;
        this.shopData=data;
    },
    closeSelect() {
      this.closeFlag = true;
    },
    confirmSelect(){
        this.closeFlag = true;
        this.$emit("selectIndex",this.currentType)
    }
  },
  data() {
    return {
      closeFlag: true,
      currentType: 0,
      shopData: {
        img: require("../../assets/carImg.png"),
        price: "¥ 199",
        status: "全店销售排行榜一",
        options: [
          {
            name: "材质",
            type: ["925银镀24k金", "925银镀24k金", "925银镀24k金"],
          },
        ],
        sendTime: "现在下单预计8月1号送达",
      },
    };
  },
};
</script>
<style scoped lang="less">
#carType{
    width: 100%;
    height: 100%;
}
.header {
  height: 3.06rem;
  background: rgba(51, 51, 51, 0.7);
}
.content {
    background: #fff;
    height: calc(100% - 3.06rem);
  padding-top: 0.18rem;
  .infoBox {
    width: 3.35rem;
    margin: 0 auto;
    display: flex;
    .shopImg {
      width: 0.98rem;
      height: 0.98rem;
    }
    .info {
      margin-left: 0.12rem;
      .price {
        color: #c30d23;
        font-size: 0.16rem;
        margin-top: 0.44rem;
      }
      .status {
        color: #333333;
        font-size: 0.12rem;
        margin-top: 0.15rem;
      }
    }
    .close {
      width: 0.32rem;
      height: 0.32rem;
      margin-left: 0.8rem;
    }
  }
  .typeBox {
    margin-top: 0.28rem;
    .name {
      font-size: 0.14rem;
      color: #333333;
      margin-left: 0.2rem;
    }
    ul {
      font-size: 0.12rem;
      display: flex;
      flex-wrap: wrap;
      width: 3.35rem;
      margin: 0 auto;
      margin-top: 0.18rem;
      li {
        margin-right: 0.16rem;
        border: 1px solid #c30d23;
        color: #333333;
        background: #f7f7f7;
      }
      .selected {
        background: #c30d23;
        color: #ffffff;
      }
    }
  }
}
.footer {
  position: absolute;
  display: flex;
  flex-direction: column;
  bottom: 0;
  .sendTime {
    color: #333333;
    font-size: 0.12rem;
    margin: 0 auto;
    margin-bottom: 0.08rem;
  }
  .confirmBtn {
    background: #c30d23;
    color: #fffcfc;
    font-size: 0.16rem;
    width: 3.75rem;
    height: 0.48rem;
    border: none;
  }
}
</style>