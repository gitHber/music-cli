import 'babel-polyfill'
import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store'
// import fastclick from 'fastclick'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

// fastclick.attach(document.body)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.use(VueLazyLoad, {
  loading: require('common/image/default.png')
})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
// new Vue({
//   components: { App },
//   router,
//   store,
//   template: '<App/>'
// }).$mount('#app')
