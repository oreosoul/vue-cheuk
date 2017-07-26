import Vue from 'vue'
import Router from 'vue-router'
import Drag from '@/components/route/components/drag'
import VueDrag from '@/components/route/components/vuedrag'
import Index from '@/components/route/components/index'

Vue.use(Router)

const COMPONENTS = {
  path: '/components',
  name: 'Components',
  component: Index,
  children: [
    {
      path: '',
      name: 'DomDrag',
      alias: 'drag',
      component: Drag,
    },
    {
      path: 'vuedrag',
      name: 'VueDrag',
      component: VueDrag,
    },
  ],
}
export default COMPONENTS
