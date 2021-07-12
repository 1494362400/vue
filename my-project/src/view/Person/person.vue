<template>
  <div id="person">
    <div class="headerBox">
      <div class="headerInfo">
        <img src="../../assets/personHead.png" alt="" class="personHead" />
        <div class="messInfo">
          <p>关山月</p>
          <img
            src="../../assets/personCenter.png"
            alt=""
            class="personCenter"
          />
        </div>
        <div class="personSetting"></div>
      </div>
      <div class="myInfo">
        <ul>
          <li v-for="(item, idx) in personData" :key="idx">
            <p class="count">{{ item.count }}</p>
            <p class="text">{{ item.text }}</p>
          </li>
        </ul>
      </div>
      <div class="vip">
        <input type="button" value="查看详情" class="lookInfo" />
      </div>
    </div>
    <div class="myOrderBox">
      <div class="title">
        <p class="titleName">我的订单</p>
        <div class="titleRight" @click="lookAll">
          <p class="lookAll">查看全部</p>
          <div class="more"></div>
        </div>
      </div>
      <div class="line"></div>
      <ul class="myOrder">
        <li>
          <img src="../../assets/personR1.png" alt="" />
          <p>待付款</p>
        </li>
        <li>
          <img src="../../assets/personR2.png" alt="" />
          <p>待收货</p>
        </li>
        <li>
          <img src="../../assets/personR3.png" alt="" />
          <p>待评价</p>
        </li>
        <li>
          <img src="../../assets/personR4.png" alt="" />
          <p>售后/评价</p>
        </li>
      </ul>
    </div>
    <div class="activity"></div>
    <div class="myServerBox">
      <div class="titleBox">
        <span class="myServer">我的服务</span>
        <span class="lookAll">查看全部</span>
        <div class="more"></div>
      </div>
      <ul class="ulBox">
        <li>
          <div class="address"></div>
          <p>收货地址</p>
        </li>
        <li>
          <div class="myChange"></div>
          <p>我的零钱</p>
        </li>
        <li>
          <div class="myVip"></div>
          <p>我的会员</p>
        </li>
        <li>
          <div class="chat"></div>
          <p>客服聊天</p>
        </li>
        <li>
          <div class="task"></div>
          <p>任务中心</p>
        </li>
        <li>
          <div class="agreement"></div>
          <p>用户协议</p>
        </li>
        <li>
          <div class="problem"></div>
          <p>常见问题</p>
        </li>
        <li>
          <div class="advice"></div>
          <p>产品建议</p>
        </li>
      </ul>
    </div>
    <div class="youLikeBox">
        <div class="img">

        </div>
        <p>猜你喜欢</p>
        <div class="img">

        </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "person",
  data() {
    return {
      personData: [
        {
          count: "12",
          text: "我的收藏",
        },
        {
          count: "2",
          text: "我的卡券",
        },
        {
          count: "300",
          text: "我的积分",
        },
        {
          count: "48",
          text: "我的浏览",
        },
      ],
    };
  },
  methods:{
    lookAll(){
      this.$router.push({
        path:'/person/all'
      })
    }
  }
};
</script>
<style scoped lang="less">
#person {
  background-color: #faf8f8;
}
.headerBox {
  background-size: cover;
  background: url(../../assets/personBg.png) no-repeat;
  height: 2.38rem;
  padding-top: 0.01rem;
  .headerInfo {
    width: 3.29rem;
    height: 0.46rem;
    display: flex;
    margin: 0 auto;
    margin-top: 0.68rem;
  }
}
.headerBox .headerInfo .personHead {
  width: 0.46rem;
}
.headerBox .messInfo {
  margin-left: 0.2rem;
  position: relative;
}
.headerBox .messInfo p {
  font-size: 0.16rem;
  font-weight: bold;
  color: #fffcfc;
}
.headerBox .messInfo .personCenter {
  width: 0.58rem;
  position: absolute;
}
.headerBox .personSetting {
  width: 0.32rem;
  height: 0.32rem;
  background-size: cover;
  background: url(../../assets/personSetting.png) no-repeat;
  margin-left: 1.73rem;
}
.headerBox .myInfo {
  margin-top: 0.2rem;
}
.headerBox .myInfo ul {
  display: flex;
  width: 3.35rem;
  justify-content: space-around;
  margin: 0 auto;
}
.headerBox .myInfo ul li {
  width: 0.48rem;
  color: #fffcfc;
  text-align: center;
}
.headerBox .myInfo ul li .count {
  font-size: 0.18rem;
}
.headerBox .myInfo ul li .text {
  font-size: 0.12rem;
}
.headerBox .vip {
  width: 3.35rem;
  height: 0.4rem;
  background-size: cover;
  background: url(../../assets/personVip.png) no-repeat;
  margin: 0 auto;
  margin-top: 0.2rem;
  position: relative;
}
.headerBox .vip .lookInfo {
  width: 0.64rem;
  height: 0.24rem;
  position: absolute;
  top: 0.08rem;
  right: 0.22rem;
  font-size: 0.12rem;
  border: none;
  background-color: #f4d4ac;
  border-radius: 0.11rem;
  color: #333333;
}

.myOrderBox {
  width: 3.51rem;
  height: 1.16rem;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 0.1rem;
  .line {
    width: 3.11rem;
    height: 0.01rem;
    margin: 0 auto;
    background-color: #f2f2f2;
    margin-top: 0.08rem;
  }
}
.myOrderBox .title {
  display: flex;
}
.myOrderBox .title .titleName {
  color: #333333;
  font-size: 0.14rem;
  margin-left: 0.16rem;
  margin-top: 0.13rem;
}
.myOrderBox .title .titleRight {
  margin-top: 0.14rem;
  margin-left: 1.95rem;
  display: flex;
}
.myOrderBox .title .titleRight .lookAll {
  font-size: 0.12rem;
}
.myOrderBox .title .titleRight .more {
  width: 0.2rem;
  height: 0.2rem;
  background-size: cover;
  background: url(../../assets/personMore.png) no-repeat;
}
.myOrderBox .myOrder {
  display: flex;
  justify-content: space-around;
  margin-top: 0.14rem;
}
.myOrderBox .myOrder li {
  width: 0.54rem;
  text-align: center;
  display: flex;
  flex-direction: column;
}
.myOrderBox .myOrder li img {
  width: 0.32rem;
  margin: 0 auto;
}
.myOrderBox .myOrder li p {
  font-size: 0.1rem;
}
.activity {
  width: 3.5rem;
  height: 0.78rem;
  margin: 0 auto;
  background: url(../../assets/personActivity.png);
  background-size: cover;
  margin-top: 0.12rem;
}
.myServerBox {
  width: 3.51rem;
  margin: 0 auto;
  background-color: #fff;
  margin-top: 0.16rem;
  .titleBox {
    display: flex;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 3.11rem;
    margin: 0 auto;
    border-bottom: 1px solid #f2f2f2;
    .myServer {
      font-size: 0.14rem;
      color: #333333;
      font-weight: bold;
    }
    .lookAll {
      font-size: 0.12rem;
      margin-left: 1.87rem;
      color: #999999;
    }
    .more {
      width: 0.2rem;
      height: 0.2rem;
      background: url(../../assets/personMore.png) no-repeat;
      background-size: cover;
      margin-top: 0.11rem;
    }
  }
  .ulBox {
    width: 3.11rem;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    // justify-content: space-between;
    li {
      width: 0.72rem;
      margin-top: 0.19rem;
      div {
        width: 0.28rem;
        height: 0.28rem;
        background-size: cover;
        margin: 0 auto;
      }
      p {
        font-size: 0.1rem;
        margin-top: 0.08rem;
      }
      .address {
        background: url(../../assets/personAddress.png) no-repeat;
      }
      .myChange {
        background: url(../../assets/myChange.png) no-repeat;
      }
      .myVip {
        background: url(../../assets/myVip.png) no-repeat;
      }
      .chat {
        background: url(../../assets/chat.png) no-repeat;
      }
      .task {
        background: url(../../assets/task.png) no-repeat;
      }
      .agreement {
        background: url(../../assets/agreement.png) no-repeat;
      }
      .problem {
        background: url(../../assets/problem.png) no-repeat;
      }
      .advice {
        background: url(../../assets/advice.png) no-repeat;
      }
    }
  }
}
.youLikeBox{
    display: flex;
    width:2.6rem;
    height: 0.58rem;
    margin: 0 auto;
    line-height:0.58rem;
    p{
        font-weight: bold;
        font-size: 0.14rem;
        color: #C30D23;
    }
    .img{
        margin: 0 0.12rem;
        width: 0.78rem;
        height: 0.11rem;
        background:url(../../assets/youLikeBg.png) no-repeat;
        background-size: cover;
        margin-top:0.25rem
    }
}
</style>