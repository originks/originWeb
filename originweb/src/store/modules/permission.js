// 引入router，用于菜单栏
import { currencyRoutes } from "@/router"

const state = {
  routes: [],
  addRoutes:[]
}

const mutations = {
  SET_ROUTES(state, payload) {
    state.routes=[...currencyRoutes]
  }
}

const actions = {
  getAsyncRoutes({ commit }, roles) {
    commit('SET_ROUTES');
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}