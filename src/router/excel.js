import Vue from 'vue'
import Router from 'vue-router'
import Export from '@/components/route/excel/export'
import ExportSelected from '@/components/route/excel/exportSelected'
import Index from '@/components/route/components/index'

Vue.use(Router)

const COMPONENTS = {
  path: '/excel',
  name: 'Excel',
  component: Index,
  children: [
    {
      path: '',
      name: '导出 Excel',
      alias: 'export',
      component: Export,
    },
    {
      path: 'exportSelected',
      name: '导出选择 Excel',
      component: ExportSelected,
    },
  ],
}
export default COMPONENTS