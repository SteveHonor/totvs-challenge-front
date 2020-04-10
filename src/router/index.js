import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store'

import NotFound from '../views/NotFound.vue'

// Signin Components
import Signin from '@/views/auth/Signin'
import ForgotPassword from '@/views/auth/ForgotPassword'
import AuthConfirmation from '@/views/auth/Confirmation'

import Financial from '@/modules/financial/router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: "active",
  scrollBehavior: () => ({
    x: 0,
    y: 0
  }),
  routes: [
    ...Financial,
    {
      path: '*',
      redirect: '/pagina-nao-encontrada',
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/pagina-nao-encontrada',
      component: NotFound,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: '/',
      name: 'signin',
      component: Signin,
      meta: {
        requiresAuth: false
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  Store.dispatch('paginator', {
    page: 1
  })

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (Store.getters.signedIn) {
      next()
      return
    }
    next('/signin')
  } else {
    next()
  }
})

export default router
