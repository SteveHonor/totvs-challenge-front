import Vue from 'vue'

export default {
  state: {
    defaultings: [],
    order: {
      field: 'name',
      sort: '-'
    },
  },
  mutations: {
    'GET_DEFAULTINGS'(state, data) {
      state.defaultings = data
    },

    'ORDER'(state, data) {
      state.order = {
        field: data,
        sort: state.order.sort == '-' ? '' : '-'
      }
    }
  },
  actions: {
    getDefaultings({ commit, rootState, state }) {
      Vue.axios.secured.get("/defaultings", {
        params: {
          page: rootState.paginator.page,
          per_page: rootState.paginator.per_page,
          search: rootState.search,
          order: `${state.order.sort}${state.order.field}`,
        }
      }).then(response => {
        commit('GET_DEFAULTINGS', response.data.defaultings.docs)

        commit('PAGINATOR', {
          total: Math.ceil(response.data.defaultings.total / rootState.paginator.per_page)
        })
      });
    },

    order({ commit }, data) {
      commit('ORDER', data)
    }
  },
  getters: {
    defaultings(state) {
      return state.defaultings
    },

    order(state) {
      return state.order
    }
  }
}
