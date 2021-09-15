import router from "@/router"
import { login} from "@/api/login"
import {
  Message
} from 'element-ui'

const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('item') : ''
}

const mutations = {
  SET_TOKEN(state, val) {
    state.token = val
    localStorage.setItem('token', val)
  }
}

const actions = {
  _login({
    commit
  }, formDatas) {
    return new Promise((resolve, reject) => {
      login(formDatas).then(res => {
        if (res.code == 0) {
          Message.success(res.data.msg)
          commit('SET_TOKEN', res.data.token)
        } else {
          Message.error(res.data.msg)
        }
        resolve(res)
      })
      
    })
  }
}
export default {
  namespaced: true,
  actions,
  mutations,
  state
}