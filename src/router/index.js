import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/route/Hello'
import Components from '@/components/route/components'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/components',
      name: 'Components',
      component: Components
    }
  ]
})
