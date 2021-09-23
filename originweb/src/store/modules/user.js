import router from "@/router"
import { login,getInfo} from "@/api/login"
import {
  Message
} from 'element-ui'

const state = {
  token: localStorage.getItem('token') ? localStorage.getItem('token') : '',
  roles: [],
  userName:'admin',
  introduce: '',
  
}

const mutations = {
  SET_TOKEN(state, val) {
    state.token = val
    localStorage.setItem('token', val)
  },
  SET_ROLES(state, payload) {
    state.roles=payload
  },
  SET_NAME(state, payload) {
    state.userName=payload
  },
  SET_INTRODUCE(state, payload) {
    state.introduce=payload
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
  },
  
  _getInfo({ commit }) {
    return new Promise((resolve, reject) => {
      getInfo().then((res) => {
        if (res.code === 0) {
          const { name, roles, introduce } = res.data
          commit('SET_ROLES',roles)
          commit('SET_NAME','admin')
          commit('SET_INTRODUCE',introduce)
        } else {
          Message.error(res.msg)
        }
        resolve(res.data)
      }).catch(error=>reject(error))
    })
  }
}
export default {
  namespaced: true,
  actions,
  mutations,
  state
}