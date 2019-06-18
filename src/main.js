
import Vue from 'vue'
import App from './App'
import router from './router'

import "@/common/css/index.scss"
import 'lib-flexible/flexible.js'

// 引入core.config.js
import core from "@/core/core.config"
Vue.use(core);
import 'mint-ui/lib/style.css'

//引入vuex数据仓库
import store from "@/core/store/index"
import 'font-awesome/css/font-awesome.css'
Vue.config.productionTip = false
import 'font-awesome/css/font-awesome.css'
/* eslint-disable no-new */

//引入图片懒加载
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload, {
  loading: require('@/assets/laz.jpg')
})
//引入动态title
Vue.use(require('vue-wechat-title'));
 

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
