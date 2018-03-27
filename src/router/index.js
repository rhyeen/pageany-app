import Vue from 'vue'
import Router from 'vue-router'
import PgReadView from '@/components/PgReadView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/page/:pageId',
      name: 'readView',
      component: PgReadView
    }
  ]
})
