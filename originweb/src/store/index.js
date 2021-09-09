import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入router，用于菜单栏
import {
  routes
} from "@/router"

export default new Vuex.Store({
  state: {
    opened: sessionStorage.getItem('open') ? sessionStorage.getItem('open') : "false",
    msgIsShow: false,
    userName: "admin",
    routes: routes,
  },
  getters: {
    opened: state => {
      if (state.opened == "true") {
        return true
      } else {
        return false
      }
    },
    msgIsShow: state => state.msgIsShow,
    userName: state => state.userName,
    routes: state => state.routes,
  },
  mutations: {
    SET_OPENED(state, payload) {
      state.opened = String(payload);
      sessionStorage.setItem('open', payload);
    },
    SET_MSGISOPEN(state) {
      state.msgIsShow = !state.msgIsShow
    },
    SET_MSGISOPEN(state) {
      state.msgIsShow = !state.msgIsShow
    }
  },
  actions: {},
  modules: {}
})