import Vue from 'vue'
import App from './App.vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

import router from './router'
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
