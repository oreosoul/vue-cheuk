import Vue from 'vue'
import Router from 'vue-router'
import Drag from '@/components/route/components/drag'
import Index from '@/components/route/components/index'

Vue.use(Router)

const COMPONENTS = {
  path: '/components',
  name: 'Components',
  component: Index,
  children: [
  {
    path: 'drag',
    name: 'Drag',
    component: Drag,
  }],
}
export default COMPONENTS
