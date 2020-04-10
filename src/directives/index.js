import Vue from 'vue'

Vue.directive('capitalize', {
  update (el) {
    el.value = el.value.replace(/(?:^|\s)\S/g, (a) => { return a.toUpperCase() })
  }
})

Vue.directive('downcase', {
  update (el) {
    el.value = el.value.toLowerCase()
  }
})
