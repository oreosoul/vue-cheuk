import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/route/Hello'
import Components from './components'
import Test2 from './test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      alias: '/hello',
      component: Hello
    },
    Components,
    Test2,
  ]
})
