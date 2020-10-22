import Vue from 'vue'
import router from '@/router/index.js'
import App from './App.vue'
import './assets/alibaba-icon/iconfont.css'
import echarts from 'echarts'


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
