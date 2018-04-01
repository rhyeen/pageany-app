import PageService from '@/common/page.service'

export default {
  state: {
    page: {}
  },
  mutations: {
    setPage (state, page) {
      state.page = page
    }
  },
  actions: {
    getPage ({ commit }, pageId) {
      return PageService.get(pageId, true)
        .then((page) => {
          commit('setPage', page)
        })
    }
  },
  getters: {
    page (state) {
      return state.page
    }
  }
}
