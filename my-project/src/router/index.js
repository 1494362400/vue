import Vue from 'vue'
import Router from 'vue-router'

import start from '../view/Start/start.vue'
import flash from '../view/Flash/flash.vue'
import login from '../view/Login/login.vue'
import home from '../view/Home/home.vue'
import newProduct from '../view/Home/newShop.vue'
import cate from '../view/Cate/cate.vue'
import find from '../view/Find/find.vue'
import car from '../view/Car/car.vue'
import person from '../view/Person/person.vue'
import newshop from '../view/NewShop/newshop.vue'
import beauty from '../view/Beauty/beauty.vue'
import communicate from '../view/Find/communicate.vue'
import inspiration from '../view/Find/inspiration.vue'
import joint from '../view/Find/joint.vue'
import designer from '../view/Find/designer.vue'
import all from '../view/Person/allOrder.vue'
import confirm from '../view/Person/confirmOrder.vue'
import shopMessage from '../view/Shop/shopMessage.vue'
import carType from '../view/Car/carType.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: 'start',
      component: start,
      meta:{
        keepAlive:false
      }
    },
    {
      path: "/flash",
      name: 'flash',
      component: flash,
      meta:{
        keepAlive:false
      }
    },
    {
      path: "/login",
      name: 'login',
      component: login,
      meta:{
        keepAlive:false
      }
    },
    {
      path: "/home",
      name: 'home',
      component: home,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/home/newProduct",
      name: 'newProduct',
      component: newProduct,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/cate",
      name: 'cate',
      component: cate,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/find",
      name: 'find',
      component: find,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/car",
      name: 'car',
      component: car,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/person",
      name: 'person',
      component: person,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/cate/newShop",
      name: '上新馆',
      component: newshop,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/cate/beauty",
      name: '美妆馆',
      component: beauty,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/find/communicate",
      name: '交流圈',
      component: communicate,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/find/inspiration",
      name: '灵感',
      component: inspiration,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/find/joint",
      name: '联名',
      component: joint,
      meta:{
        keepAlive:true
      }
    },
    {
      path: "/find/designer",
      name: '设计师',
      component: designer,
      meta:{
        keepAlive:true
      }
    },
    {
      path:"/person/all",
      name:'全部',
      component:all,
      meta:{
        keepAlive:true
      }
    },
    {
      path:"/person/confirm",
      name:'确认订单',
      component:confirm,
      meta:{
        keepAlive:true
      }
    },
    {
      path:"/home/shopMessage",
      name:'商品详情页',
      component:shopMessage,
      meta:{
        keepAlive:false
      }
    },
    {
      path:"/car/carType",
      name:'商品详情页',
      component:carType,
      meta:{
        keepAlive:false
      }
    }
  ]

})