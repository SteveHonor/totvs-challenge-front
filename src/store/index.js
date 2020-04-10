import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import financial from '@/modules/financial/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signedIn: false,
    token: null,
    search: '',
    account: {},
    paginator: {
      per_page: 10,
      page: 1,
      total: 0
    }
  },
  mutations: {
    'LOGIN_USER'(state, data) {
      state.account = data
      state.signedIn = true
    },

    'LOGOUT_USER'(state) {
      state.signedIn = false
      state.token = null
    },

    'TOKEN'(state, token) {
      state.token = token
    },

    'ACCOUNT'(state, data) {
      state.account = data
    },

    'PAGINATOR'(state, data) {
      state.paginator = {
        ...state.paginator,
        ...data
      }
    },

    'SEARCH'(state, data) {
      state.search = data
    }
  },
  actions: {
    login({ commit }, data) {
      commit('LOGIN_USER', data)
    },

    logout({ commit }) {
      commit('LOGOUT_USER')
    },

    token({ commit }, token) {
      commit('TOKEN', token)
    },

    paginator({ commit }, data) {
      commit('PAGINATOR', data)
    },

    search({ commit }, data) {
      commit('SEARCH', data)
    }
  },
  getters: {
    token(state) {
      return state.token
    },

    account(state) {
      return state.account
    },

    signedIn(state) {
      return state.signedIn
    },

    paginator(state) {
      return state.paginator
    },

    search(state) {
      return state.search
    },

    extract(state) {
      return state.extract
    }
  },
  modules: {
    financial
  },
  plugins: [createPersistedState()]
})
