// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

/* 引入cookie */
import cookie from 'vue-cookie'

/* 引入 mint-ui */
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(cookie)
Vue.use(MintUI)

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
