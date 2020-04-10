import Vue from 'vue'

var filters = {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()

    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  firtLast: function (value) {
    if (!value) return ''
    value = value.toString()

    return value.split(/(\s).+\s/).join('')
  }
}

Vue.filter('capitalize', filters.capitalize)
Vue.filter('firtLast', filters.firtLast)
