import Vue from 'vue'
import VueRouter from 'vue-router'

import Defaulting from '@/modules/financial/views/defaulting/List'

Vue.use(VueRouter)

export default [
  {
    path: '/financial',
    name: 'Financeiro',
    component: {
      render: (children) => children('router-view')
    },
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: 'defaulting',
        name: 'Clientes Inadimplentes',
        component: Defaulting
      }
    ]
  }
]
