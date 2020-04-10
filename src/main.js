import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './filters'

import VueAxios from 'vue-axios'
import {
  securedAxiosInstance,
  plainAxiosInstance
} from './backend/axios'

Vue.use(VueAxios, {
  secured: securedAxiosInstance,
  plain: plainAxiosInstance
})

Vue.config.productionTip = false

import 'bootstrap'
import './assets/scss/index.scss'

import $ from 'jquery'
window.$ = window.jQuery = $

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

const moment = require('moment')
require('moment/locale/pt-br')

Vue.use(require('vue-moment'), {
  moment
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
