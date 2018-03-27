import PageFormatService from '@/common/page-format.service.js'

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
          console.log(JSON.stringify(pageFormat))
          commit('setPageFormat', pageFormat)
        })
    }
  }
}
