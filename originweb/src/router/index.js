import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from "@/layout/Layout"


const routes = [{
  path: '/',
  redirect: 'home'
}, {
  path: '/home',
  component: Layout
}]

const router = new VueRouter({
  routes
})

export default router