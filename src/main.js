// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import axios from '@/config/axios'
import VueAxios from 'vue-axios'
import router from './router'
import './element-ui'
import KalixBase from 'kalix-base'
import ArtDict from '@/views/art/artdict/artdict'
import Candidate from '@/views/art/candidate/candidate'

Vue.config.productionTip = false

Vue.use(VueAxios, axios)

Vue.use(KalixBase)

Vue.component('artartdict', ArtDict)
Vue.component('artcandidate', Candidate)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
