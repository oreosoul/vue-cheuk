import Vuex from 'vuex'
import Vue from 'vue'
//模块引入
import * as types from './mutation-types'

Vue.use(Vuex)

const state = {
  theme: 'default',
  users: [
      {name:'cheuk'},
      {name:'duke'},
      {name:'kent'},
      {name:'cam'}
  ],
}
const mutations = {
  CHANGE_THEME (state,themeName) {
    state.theme = themeName
  },
  ADD_USER (state,user) {
    state.users.push(user)
  }
}
const getters =  {
  getUsers: (state) => state.users,
  getTheme: (state) => state.theme,
}
const actions = {
  changeTheme: ({commit},themeName = 'default') => {
    commit(types.CHANGE_THEME,themeName)
  },
  addUser: ({commit},user={}) => {
    commit(types.ADD_USER,user)
  },
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules: {}
})

export default store
