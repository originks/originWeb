import axios from "axios"
import Qs from 'qs'

const $axios = axios.create({
  timeout: 30000,
  baseURL: process.env.VUE_APP_BASE_API
})

Vue.prototype.$http = axios

export default {
  post(url, data) {
    return $axios({
      method: "post",
      url,
      data: Qs.stringify(data),
    })
  }
}