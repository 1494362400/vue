<template>
    <div>
        <div class="header">
            <div class="logo">
            </div>
            <div class="text">故 宫 文 创</div>
        </div>
        <div class="content">
            <div class="inputGroup">
                <input type="text" placeholder="+86  手机号" class="phone" v-model="phone">
                <input type="button" value="获取验证码" class="getCode">
            </div>
            <input type="text" placeholder="请输入验证码" class="code" v-model="code">
            <input type="checkbox" class="check" @click="isCheck"><span class="checkText">我已阅读同意用户协议</span>
            <input type="button" class="loginBtn" value="登录" @click="login">
        </div>
        <div class="footer">
            <span class="leftLine">
            </span>
            <span class="loginText">第三方登录</span>
            <span class="rightLine">
            </span>
            <div class="wechatIcon"></div>
            <div class="qqIcon"></div>
            <div class="weiboIcon"></div>
        </div>
    </div>
</template>
<script>
import { Toast } from 'vant';

export default {
    name:'login',
    data(){
        return{
            phone:'',
            code:'',
            check:false
        }
    },
    methods:{
        isCheck(){
            this.check=!this.check;
        },
        login(){
            if(this.phone!='' && this.phone.length==11 && this.code!=''){
                if(this.check==true){
                    this.$router.push({
                    path:'/home'
                })
                }else{
                    Toast('请勾选同意用户协议')
                }
                
            }else{
                Toast('请输入正确的手机号或验证码')
            }
        }
    }
}
</script>
<style scoped>
.header{
    width:3.75rem;
    height: 2.2rem;
    background: url(../../assets/loginBg.png) no-repeat center center;
    background-size: cover;
    position: relative;
}
.logo{
    position: absolute;
    top: 0.83rem;
    left: 1.6rem;
    width:0.54rem;
    height: 0.54rem;
    background: url(../../assets/loginLogo.png) no-repeat center center;
    background-size: cover;
}
.text{
    font-size: 0.14rem;
    font-weight: 400;
    line-height: 0.19rem;
    color: #FFEBB9;
    opacity: 1;
    position: absolute;
    left: 1.53rem;
    bottom: 0.49rem;
}
.content{
    position: relative;
    height: 4.38rem;
}
.inputGroup{
    position: absolute;
    width: 3rem;
    left: 0.4rem;
    top: 0.64rem;
    height: 0.42rem;
}
.phone{
    position: absolute;
    padding: 0.09rem 0;
    width: 2.95rem;
    border: none;
    border-bottom:1px solid rgb(218, 212, 212);
    font-size: 0.14rem;
    outline: none;
}
input::-webkit-input-placeholder{
  color:rgb(218, 212, 212);
}
.getCode{
    position: absolute;
    right: 0;
    top: 0.1rem;
    border: none;
    font-size: 0.14rem;
    background-color: #fff;
}
.code{
    position: absolute;
    left: 0.4rem;
    top: 1.22rem;
    border: none;
    outline: none;
    width: 2.95rem;
    padding: 0.09rem 0;
    border-bottom:1px solid rgb(218, 212, 212);
    font-size: 0.14rem;
}
.check{
    position:absolute;
    left: 0.4rem;
    top: 1.84rem;
    border: none;
}
.checkText{
    font-size: 0.12rem;
    position: absolute;
    top: 1.84rem;
    left: 0.66rem;
    color: rgb(218, 212, 212);
}
.loginBtn{
    position: absolute;
    width: 2.95rem;
    color: #fff;
    background-color: #C91328;
    outline: none;
    top: 2.2rem;
    left: 0.4rem;
    height: 0.38rem;
    font-size: 0.16rem;
}
.footer{
    position: relative;
}
.leftLine{
    display: inline-block;
    width: 0.6rem;
    height: 0.01rem;
    background-color: rgb(218, 212, 212);
    position: absolute;
    left: 0.86rem;
    top: 0.08rem;
}
.rightLine{
    display: inline-block;
    width: 0.6rem;
    height: 0.01rem;
    background-color: rgb(218, 212, 212);
    position: absolute;
    right: 0.86rem;
    top: 0.08rem;
}
.loginText{
    position: absolute;
    top: 0;
    left: 1.58rem;
    font-size: 0.12rem;
    color:rgb(218, 212, 212);
}
.wechatIcon{
    width:0.48rem;
    height: 0.48rem;
    background: url(../../assets/wechatIcon.png) no-repeat center center;
    background-size: cover;
    position: absolute;
    left: 0.59rem;
    bottom: 0.66rem;
}
.qqIcon{
    width:0.48rem;
    height: 0.48rem;
    background: url(../../assets/qqIcon.png) no-repeat center center;
    background-size: cover;
    position: absolute;
    left: 1.64rem;
    bottom: 0.66rem;
}
.weiboIcon{
    width:0.48rem;
    height: 0.48rem;
    background: url(../../assets/weiboIcon.png) no-repeat center center;
    background-size: cover;
    position: absolute;
    right: 0.59rem;
    bottom: 0.66rem;
}
</style>