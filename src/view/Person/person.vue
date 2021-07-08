<template>
    <div>
        <div class="headerBox">
            <div class="headerInfo">
                <img src="../../assets/personHead.png" alt="" class="personHead">
                <div class="messInfo">
                    <p>关山月</p>
                    <img src="../../assets/personCenter.png" alt="" class="personCenter">
                </div>
                <div class="personSetting">

                </div>
            </div>
            <div class="myInfo">
                <ul>
                    <li v-for="(item,idx) in personData" :key="idx">
                        <p class="count">{{item.count}}</p>
                        <p class="text">{{item.text}}</p>
                    </li>
                </ul>
            </div>
            <div class="vip">
                <input type="button" value="查看详情" class="lookInfo">
            </div>
        </div>
        <div class="myOrderBox">
            <div class="title">
                <p class="titleName">我的订单</p>
                <div class="titleRight">
                    <p class="lookAll">查看全部</p>
                    <div class="more"></div>
                </div>
            </div>
            <ul class="myOrder">
                <li>
                    <img src="../../assets/personR1.png" alt="">
                    <p>待付款</p>
                </li>
                <li>
                    <img src="../../assets/personR2.png" alt="">
                    <p>待收货</p>
                </li>
                <li>
                    <img src="../../assets/personR3.png" alt="">
                    <p>待评价</p>
                </li>
                <li>
                    <img src="../../assets/personR4.png" alt="">
                    <p>售后/评价</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name:"person",
    data(){
        return{
            personData:[
                {
                    count:'12',
                    text:'我的收藏'
                },
                {
                    count:'2',
                    text:'我的卡券'
                },
                {
                    count:'300',
                    text:'我的积分'
                },
                {
                    count:'48',
                    text:'我的浏览'
                },
            ]
        }
    }
}
</script>
<style scoped>
.headerBox{
    background-size: cover;
    background:url(../../assets/personBg.png) no-repeat;
    height: 2.38rem;
    padding-top: 0.01rem;
}
.headerBox .headerInfo{
    width: 3.29rem;
    height: 0.46rem;
    display: flex;
    margin: 0 auto;
    margin-top: 0.68rem;
}
.headerBox .headerInfo .personHead{
    width: 0.46rem;
}
.headerBox .messInfo{
margin-left: 0.2rem;
position: relative;
}
.headerBox .messInfo p{
    font-size: 0.16rem;
    font-weight: bold;
    color: #FFFCFC;
}
.headerBox .messInfo .personCenter{
    width: 0.58rem;
    position: absolute;
}
.headerBox .personSetting{
    width: 0.32rem;
    height: 0.32rem;
    background-size: cover;
    background:url(../../assets/personSetting.png) no-repeat;
    margin-left: 1.73rem;
}
.headerBox .myInfo{
    margin-top: 0.2rem;
}
.headerBox .myInfo ul{
    display: flex;
    width: 3.35rem;
    justify-content: space-around;
    margin:0 auto;

}
.headerBox .myInfo ul li{
    width: 0.48rem;
    color:#FFFCFC;
    text-align: center;
}
.headerBox .myInfo ul li .count{
    font-size: 0.18rem;
}
.headerBox .myInfo ul li .text{
    font-size: 0.12rem;
}
.headerBox .vip{
    width: 3.35rem;
    height: 0.4rem;
    background-size: cover;
    background:url(../../assets/personVip.png) no-repeat;
    margin:0 auto;
    margin-top: 0.2rem;
    position: relative;
}
.headerBox .vip .lookInfo{
    width: 0.64rem;
    height: 0.24rem;
    position: absolute;
    top: 0.08rem;
    right: 0.22rem;
    font-size: 0.12rem;
    border: none;
    background-color:#F4D4AC;
    border-radius: 0.11rem;
    color: #333333;
}

.myOrderBox{
    width: 3.51rem;
    height: 1.16rem;
    margin:0 auto;
}
.myOrderBox .title{
    display: flex;
}
.myOrderBox .title .titleName{
    color: #333333;
    font-size: 0.14rem;
    margin-left: 0.16rem;
    margin-top: 0.13rem;
}
.myOrderBox .title .titleRight{
    margin-top: 0.14rem;
    margin-left: 1.95rem;
    display: flex;
}
.myOrderBox .title .titleRight .lookAll{
    font-size: 0.12rem;
}
.myOrderBox .title .titleRight .more{
    width: 0.2rem;
    height: 0.2rem;
    background-size: cover;
    background:url(../../assets/personMore.png) no-repeat;
}
.myOrderBox .myOrder{
    display: flex;
    justify-content: space-around;
}
.myOrderBox .myOrder li{
    width: 0.54rem;
    text-align: center;
}
.myOrderBox .myOrder li img{
    width: 0.32rem;
}
.myOrderBox .myOrder li p{
    font-size: 0.1rem;
}
</style>