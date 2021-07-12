<template>
    <div>
        <swiper :swiperSrc="swiperSrc" />
    </div>
</template>
<script>
import swiper from '../../components/swiper.vue'
export default {
    name:'shopMessage',
    components:{
        swiper
    },
    data(){
        return{
            swiperSrc:[
                {
                    img:require('../../assets/shopMessage.png')
                },
                {
                    img:require('../../assets/shopMessage.png')
                },
                {
                    img:require('../../assets/shopMessage.png')
                },
                {
                    img:require('../../assets/shopMessage.png')
                },
                {
                    img:require('../../assets/shopMessage.png')
                },
                {
                    img:require('../../assets/shopMessage.png')
                }
            ]
        }
    }
}
</script>