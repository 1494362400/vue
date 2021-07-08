import Vue from 'vue'
import Router from 'vue-router'

import home from '../view/Home/home.vue'
import cate from '../view/Cate/cate.vue'
import find from '../view/Find/find.vue'
import car from '../view/Car/car.vue'
import person from '../view/Person/person.vue'
import newshop from '../view/NewShop/newshop.vue'
import publish from '../view/Publish/publish.vue'
import beauty from '../view/Beauty/beauty.vue'
import four from '../view/Four/four.vue'
import atmosphere from '../view/Atmosphere/atmosphere.vue'
import jewelry from '../view/Jewelry/jewelry.vue'
import bronze from '../view/Bronze/bronze.vue'
import ceramic from '../view/Ceramic/ceramic.vue'
import silk from '../view/Silk/silk.vue'
import household from '../view/Household/household.vue'
import communicate from '../view/Find/communicate.vue'
import inspiration from '../view/Find/inspiration.vue'
import joint from '../view/Find/joint.vue'
import designer from '../view/Find/designer.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/home",
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
      path: "/cate/publish",
      name: '出版馆',
      component: publish
    },
    {
      path: "/cate/beauty",
      name: '美妆馆',
      component: beauty
    },
    {
      path: "/cate/four",
      name: '文房馆',
      component: four
    },
    {
      path: "/cate/atmosphere",
      name: '香氛馆',
      component: atmosphere
    },
    {
      path: "/cate/jewelry",
      name: '首饰馆',
      component: jewelry
    },
    {
      path: "/cate/bronze",
      name: '铜器馆',
      component: bronze
    },
    {
      path: "/cate/ceramic",
      name: '陶瓷馆',
      component: ceramic
    },
    {
      path: "/cate/silk",
      name: '丝绸馆',
      component: silk
    },
    {
      path: "/cate/household",
      name: '家居馆',
      component: household
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
    }
  ]

})