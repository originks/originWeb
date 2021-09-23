import axios from "axios"
import {
  Loading
} from "element-ui"
import Qs from 'qs'
import Vue from "vue"
import store from '@/store'

const $axios = axios.create({
  timeout: 30000,
  baseURL: process.env.VUE_APP_BASE_API
})

Vue.prototype.$http = axios

// 添加请求和响应过程中的界面状态
let loading = null;

// 请求拦截器
$axios.interceptors.request.use(function (config) {
  loading = Loading.service({
    text: '拼命加载中...'
  })
  // const token = store.getters.token
  // if (token) {
  //   config.headers.Authorization = token // 请求头部添加token
  // }
  return config
})

// 响应拦截器
$axios.interceptors.response.use(function (response) {
  if (loading) {
    loading.close();
  }
  return response.data
})

export default {
  post(url, data) {
    return $axios({
      method: "post",
      url,
      data: Qs.stringify(data),
    })
  },
  get(url, params) {
    return $axios({
      method: 'get',
      url,
      params
    })
  }
}