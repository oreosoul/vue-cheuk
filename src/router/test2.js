import Vue from 'vue'
import Router from 'vue-router'
import Drag from '@/components/route/components/drag'
import Index from '@/components/route/test2/index'

Vue.use(Router)

const TEST2 = {
  path: '/test2',
  name: 'Test2',
  component: Index,
}
export default TEST2