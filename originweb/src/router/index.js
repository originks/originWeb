import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

Vue.use(VueRouter)

import Layout from "@/layout/Layout"
import getTitle from '@/utils/getTitle'
import {
  Message
} from 'element-ui'
const OriginTab = () => import('views/origintab/OriginTab')
const Test = () => import('views/test/Test')
const Login = () => import('views/login/Login')


export const currencyRoutes = [{
  path: '/login',
  name: 'Login',
  component: Login,
  meta: {
    title: '登录页'
  },
  hidden: true
}, {
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
}, {
  path: '/test',
  component: Layout,
  name: "Home",
  redirect: '/test/main',
  children: [{
    path: "main",
    component: Test,
    meta: {
      title: "更多",
      icon: "el-icon-circle-plus-outline"
    }
  }]
  }]

const router = new VueRouter({
  routes: currencyRoutes,
  mode:'history'
})


// 导航守卫
router.beforeEach(async (to, from, next) => {
  document.title = getTitle(to.meta.title)
  if (to.path === '/login') {
    next()
  } else {
    debugger
    if (store.getters.token) {
      const hasRoles = store.getters.roles.length > 0
      if (hasRoles) {
        next()
      } else {
        try {
          const { roles } = await store.dispatch('user/_getInfo')
          const addRoutes = await store.dispatch('permission/getAsyncRoutes', roles)
          // next()
          next({ ...to, replace: true })
          
        }catch (error) {
          Message.error(error)
        }
      }
    } else {
      next({
        path: '/login',
        query: {
          redirect:to.fullPath
        }
      })
    }
  
  }
})

export default router