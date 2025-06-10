import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue'
import contactUs from '@/components/contactUs.vue'
import services from '@/components/services.vue'
import singlePage from '@/components/singlePage.vue'
import aboutUs from '@/components/aboutUs.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/contactUs',
      name: 'contactUs',
      component: contactUs
    },
    {
      path: '/services',
      name: 'services',
      component: services
    },
    {
      path: '/singlePage',
      name: 'singlePage',
      component: singlePage
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
   
  ]
})
