<template>
    <div id="designer">
        <topNav />
        <ul class="designerBox">
            <li v-for="(item,idx) in designerData" :key="idx">
                <img :src="item.img" alt="">
                <div class="info">
                    <p class="id">{{item.id}}</p>
                    <p class="line"></p>
                    <p class="address">{{item.address}}</p>
                    <p class="line"></p>
                    <p class="name">{{item.name}}</p>
                </div>
                <p class="designerText">{{item.text}}</p>
            </li>
        </ul>
    </div>
</template>
<script>
import topNav from '../../components/topNav.vue'
export default {
    name:"designer",
    components:{
        topNav
    },
    data(){
        return{
            designerData:[
                {
                    img:require('../../assets/designerImg.png'),
                    id:'故宫新品研究员',
                    address:'北京',
                    name:'宋轶',
                    text:'“关于故宫文化，我有很多想法，但是最重要的是怎么用设计把文化融入生活”',
                },
                {
                    img:require('../../assets/designerImg.png'),
                    id:'故宫新品研究员',
                    address:'北京',
                    name:'宋轶',
                    text:'“关于故宫文化，我有很多想法，但是最重要的是怎么用设计把文化融入生活”',
                }
            ]
        }
    }
}
</script>
<style scoped>
#designer{
    padding-top:0.01rem
}
.designerBox{
    margin-top: 1.36rem;
}
.designerBox li{
    margin-top: 0.22rem;
}
.designerBox li img{
    width: 3.75rem;
}
.designerBox li .info{
    display: flex;
    font-size: 0.14rem;
    margin-left: 0.2rem;
    /* height: 0.42rem; */
    /* line-height: 0.42rem; */
}
.designerBox li .info .id{

}
.designerBox li .info .address{

}
.designerBox li .info .name{

}
.designerBox li .info .line{
    width: 0.01rem;
    height: 0.14rem;
    background: #333333;
    margin-left: 0.04rem;
    margin-right: 0.04rem;
    margin-top: 0.03rem;
}
.designerBox li .designerText{
    font-size: 0.12rem;
    margin: 0 0.2rem;
    color:#999999;
    margin-top: 0.07rem;
}
</style>