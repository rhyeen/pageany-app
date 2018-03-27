import Vue from 'vue'
import Vuex from 'vuex'

import page from './page.module'
import pageFormat from './page-format.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    page,
    pageFormat
  }
})
