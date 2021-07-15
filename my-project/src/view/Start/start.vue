<template>
    <div>
        <div class="bg">
            <div class="text">
                把
                故
                宫
                文
                化
                带
                回
                家
            </div>
            <div class="img">

            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'start',
  created(){
      setTimeout(()=>{
          this.$router.push({
              path:'/flash'
          })
      },3000)
  }
}
</script>
<style scoped>
    .bg{
        position: relative;
        width: 3.75rem;
        height: 8.12rem;
        background: url(../../assets/startBg.png) no-repeat center center;
        background-size: cover;
    }
    .text{
        position: absolute;
        width:0.24rem;
        font-size:0.24rem;
        font-weight: bold;
        line-height: 30px;
        color: #C91328;
        opacity: 1; 
        left: 1.75rem;
        top: 2.52rem;
    }
    .img{
        width:0.5rem;
        height: 0.5rem;
        background: url(../../assets/startLogo.png) no-repeat center center;
        background-size: cover;
        position: absolute;
        left: 1.62rem;
        bottom: 1.13rem;
    }
</style>