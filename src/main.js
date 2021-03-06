import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from './vuex/store'

Vue.config.productionTip = false
Vue.use(Element)

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store,
})
