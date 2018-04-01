import PageFormatService from '@/common/page-format.service'

export default {
  state: {
    pageFormat: {}
  },
  mutations: {
    setPageFormat (state, pageFormat) {
      state.pageFormat = pageFormat
    }
  },
  actions: {
    getPageFormat ({ commit }, pageId) {
      return PageFormatService.get(pageId, true)
        .then((pageFormat) => {
          commit('setPageFormat', pageFormat)
        })
    }
  },
  getters: {
    pageFormat (state) {
      return state.pageFormat
    }
  }
}
