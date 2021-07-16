<template>
    <div>
        <ul class="pageBox">
            <li @click="first" :class="{disabled:current==1}">&laquo;</li>
            <li @click="prev" :class="{disabled:current==1}">&lt;</li>
            <li v-for="n of activeNum" :key="n" :class="{active:current==n}" @click="changeCurrent(n)">
                {{n}}
            </li>
            <li @click="next" :class="{disabled:current==num}">&gt;</li>
            <li @click="last" :class="{disabled:current==num}">&raquo;</li>
            <slot name="jump"></slot>
        </ul>
    </div>
</template>
<script>
export default {
    name:'page',
    props:{
        num:Number
    },
    data(){
        return{
            current:1
        }
    },
    methods:{
        changeCurrent(n){
            this.current=n
        },
        first(){
            this.current=1
        },
        last(){
            this.current=this.num
        },
        prev(){
            if(this.current>1){
                this.current-=1;
            }
        },
        next(){
            if(this.current<this.num){
                this.current+=1
            }
        },
        jump(n){
            this.current=n;
        }
    },
    computed:{
        activeNum(){
            var arr=[]
            for(var i=1;i<=this.num;i++){
                if(i!=1 && i!=this.num && i!=this.current){
                    if(Math.abs(i-this.current)<=2){
                        arr.push(i)
                    }
                    if(Math.abs(this.current-i)==3){
                        arr.push('...')
                    }
                }else{
                    arr.push(i)
                }
            }
            return arr
        }
    }
}
</script>
<style scoped lang="less">
.pageBox{
    display: flex;
    li{
        cursor: pointer;
    }
    .active{
        color:royalblue;
        border: royalblue 1px solid;
    }
    .disabled{
        color: rgb(214, 209, 209);
        border: 1px solid rgb(214, 209, 209);;
    }
}
</style>