// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import store from './store'

import locale from 'iview/dist/locale/en-US';

import 'boxicons/css/boxicons.css'


import { library } from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {fab} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
library.add(far)
library.add(fab)


Vue.component('font-awesome-icon', FontAwesomeIcon)
// library.add(faHatWizard)


Vue.mixin({ 
  computed: {
    // ...mapGetters({
    //   authUser:'getAuthUser',
    //   apiUrl:'getApiUrl',
    // }),
  },
  
  methods: {
      i(msg, i = 'Hey!') {
          this.$Notice.info({
              title: i,
              desc: msg
          });
      },
      s(msg, i = 'Great!') {
          this.$Notice.success({
              title: i,
              desc: msg
          });
      },
      w(msg, i = 'Hi!') {
          this.$Notice.warning({
              title: i,
              desc: msg
          });
      },
      e(msg, i = 'Oops!') {
          this.$Notice.error({
              title: i,
              desc: msg,

          });
      },
      swr() {
          this.$Notice.error({
              title: 'Oops',
              desc: 'Something went wrong, please try again later'
          });
      },
      
      async callApi(method, url, dataObj) {
        try {
          let data = await this.$axios({
            config: {
              withCredentials: false,
  
            },
            method: method,
            url: url,
            data: dataObj,
  
          })
          return data
        } catch (e) {
          let res = e.response
          if (res.status == 403) {
            window.location = '/login'
          } else if (res.status == 422 || res.status == 400) {
            this.validationError(res)
  
          } else if (res.status == 404 || res.status == 401) {
            if(res.data.message) this.i(res.data.message)
            if(res.data.msg) this.i(res.data.msg)
          } else {
            this.swr()
          }
          return e.response
        }
      },
      showVError(data) {
        for (let e of data) {
          this.i(e.message)
        }
      },
      validationError(res) {
        for (let e of res.data.errors) {
          this.i(e.message)
        }
      },


  }
})

Vue.use(iView, { locale });



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})