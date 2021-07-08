import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

import router from './router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
