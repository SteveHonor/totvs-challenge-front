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

import VSelectize from 'bootstrap-select/dist/js/bootstrap-select.min.js'
Vue.component('v-selectize', VSelectize)
$.fn.selectpicker.Constructor.BootstrapVersion = '4';

import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/locale/pt-br';
Vue.use(DatePicker)

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

import VueFilter from 'vue-filter'
Vue.use(VueFilter)

import Vue2Filters from 'vue2-filters'
Vue.use(Vue2Filters)

const moment = require('moment')
require('moment/locale/pt-br')

import BootstrapVueTreeview from 'bootstrap-vue-treeview'
Vue.use(BootstrapVueTreeview)

Vue.use(require('vue-moment'), {
  moment
})

import Money from 'v-money'
Vue.use(Money)

import Notifications from 'vue-notification'
Vue.use(Notifications)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
