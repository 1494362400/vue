import Vue from 'vue'
import Router from 'vue-router'

import home from '../view/Home/home.vue'
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
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: 'home',
      component: home
    },
    {
      path: "/cate",
      name: 'cate',
      component: cate
    },
    {
      path: "/find",
      name: 'find',
      component: find
    },
    {
      path: "/car",
      name: 'car',
      component: car
    },
    {
      path: "/person",
      name: 'person',
      component: person
    },
    {
      path: "/cate/newShop",
      name: '上新馆',
      component: newshop
    },
    {
      path: "/cate/beauty",
      name: '美妆馆',
      component: beauty
    },
    {
      path: "/find/communicate",
      name: '交流圈',
      component: communicate
    },
    {
      path: "/find/inspiration",
      name: '灵感',
      component: inspiration
    },
    {
      path: "/find/joint",
      name: '联名',
      component: joint
    },
    {
      path: "/find/designer",
      name: '设计师',
      component: designer
    },
    {
      path:"/person/all",
      name:'全部',
      component:all
    },
    {
      path:"/person/confirm",
      name:'确认订单',
      component:confirm
    },
    {
      path:"/shopMessage",
      name:'商品详情页',
      component:shopMessage
    }
  ]

})