import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Layout from "@/layout/Layout"
const OriginTab = () => import('views/origintab/OriginTab')
const Test = () => import('views/test/Test')


export const routes = [{
  path: '/',
  component: Layout,
  name: "Home",
  redirect: 'origintab',
  children: [{
    path: "origintab",
    component: OriginTab,
    name: "Origintab",
    meta: {
      title: "首页",
      icon: "el-icon-s-data"
    }
  }]
},{
  path: '/test',
  component: Layout,
  name: "Home",
  redirect: '/test/main',
  children: [ {
    path: "main",
    component: Test,
    meta: {
      title: "更多",
      icon: "el-icon-circle-plus-outline"
    }
  }]
}]

const router = new VueRouter({
  routes
})

export default router