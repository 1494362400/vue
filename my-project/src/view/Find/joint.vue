<template>
    <div id="joint">
        <topNav />
        <div>
            <ul class="content">
                <li v-for="(item,idx) in jointData" :key="idx" class="contentLi">
                    <p class="jointTitle">{{item.title}}</p>
                    <p class="jointAuthor">{{item.author}}</p>
                    <ul class="imgUl">
                        <li v-for="(imgItem,idx) in item.imgs" :key="idx" class="imgLi">
                            <img :src="imgItem.imgPath" alt="" class="img">
                            <p class="imgName">{{imgItem.imgName}}</p>
                        </li>
                    </ul>
                    <div class="moreInfo">
                        <p>{{item.moreInfo}}</p>
                        <div class="moreBtn">

                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import topNav from '../../components/topNav.vue'
export default {
    name:'joint',
    components:{
        topNav
    },
    data(){
        return{
            jointData:[
                {
                    title:'20年×百雀羚故宫×年货节',
                    author:'《百雀羚故宫系列--流光溢彩器什件》',
                    imgs:[
                        {
                        imgPath:require('../../assets/joint1.png'),
                        imgName:'雀鸟翠木箸什件'
                    },{
                        imgPath:require('../../assets/joint1.png'),
                        imgName:'雀鸟翠木箸什件'
                    },{
                        imgPath:require('../../assets/joint1.png'),
                        imgName:'雀鸟翠木箸什件'
                    }

                    ],
                    moreInfo:'更多百雀羚×故宫好品，引领新风尚'
                },
                {
                    title:'20年×百雀羚故宫×年货节',
                    author:'《百雀羚故宫系列--流光溢彩器什件》',
                    imgs:[
                        {
                        imgPath:require('../../assets/joint1.png'),
                        imgName:'雀鸟翠木箸什件'
                    },{
                        imgPath:require('../../assets/joint1.png'),
                        imgName:'雀鸟翠木箸什件'
                    },{
                        imgPath:require('../../assets/joint1.png'),
                        imgName:'雀鸟翠木箸什件'
                    }

                    ],
                    moreInfo:'更多百雀羚×故宫好品，引领新风尚'
                },
                {
                    title:'20年×百雀羚故宫×年货节',
                    author:'《百雀羚故宫系列--流光溢彩器什件》',
                    imgs:[
                        {
                        imgPath:require('../../assets/joint1.png'),
                        imgName:'雀鸟翠木箸什件'
                    },{
                        imgPath:require('../../assets/joint1.png'),
                        imgName:'雀鸟翠木箸什件'
                    },{
                        imgPath:require('../../assets/joint1.png'),
                        imgName:'雀鸟翠木箸什件'
                    }

                    ],
                    moreInfo:'更多百雀羚×故宫好品，引领新风尚'
                }
            ]
        }
    }
}
</script>
<style scoped>
#joint{
    background: #FAF8F8;
    padding-top: 0.01rem;
}
.content{
    width: 3.51rem;
    margin: 0 auto;
    margin-top: 1.36rem;
    padding-top: 0.12rem;
}
.content .contentLi{
    height: 2.44rem;
    margin-top: 0.11rem;
    background:#fff;
}
.content .contentLi .jointTitle{
    font-size: 0.16rem;
    color: #333333;
    margin-top: 0.13rem;
    margin-left: 0.16rem;
}
.content .contentLi .jointAuthor{
    font-size: 0.12rem;
    color: #999999;
    margin-top: 0.11rem;
    margin-left: 0.12rem;
}
.content .contentLi .imgUl{
    width: 3.27rem;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0,0,0,0.5);
    height: 1.55rem;
}
.content .contentLi .imgUl .imgLi{
    width: 0.98rem;
}
.content .contentLi .imgUl .imgLi .img{
    width: 0.98rem;
    height: 0.98rem;
}
.content .contentLi .imgUl .imgLi .imgName{
    font-size: 0.1rem;
    text-align: center;
}
.content .contentLi .moreInfo{
    display: flex;
    height: 0.38rem;
    line-height: 0.38rem;
    justify-content: space-between;
}
.content .contentLi .moreInfo p{
    font-size: 0.1rem;
    margin-left: 0.12rem;
}
.content .contentLi .moreInfo .moreBtn{
    width: 0.2rem;
    height: 0.2rem;
    background-size: cover;
    background:url(../../assets/jointMore.png) no-repeat ;
    margin-right: 0.12rem;
    margin-top: 0.09rem;
}
</style>