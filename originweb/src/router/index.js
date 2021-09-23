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
const BaseTable = () => import('views/table/commonTable')
const complexTable = () => import('views/table/complexTable')


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
  }, {
  path: '/table',
  component: Layout,
  name: 'Table',
  redirect:'/table/base-table',
  meta: {
    title: 'Table',
    icon:'el-icon-table iconfont'
  },
  children: [{
    path: 'base-table',
    name: 'BaseTable',
    component: BaseTable,
    meta: {
      title:'普通表格'
    }
  },{
    path: 'complex-table',
    name: 'complexTable',
    component: complexTable,
    meta: {
      title:'复杂表格'
    }
  }]
}]

const router = new VueRouter({
  routes: currencyRoutes,
  mode:'history'
})


// 导航守卫
router.beforeEach(async (to, from, next) => {
  debugger
  document.title = getTitle(to.meta.title)
  if (to.path === '/login') {
    next()
  } else {
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
      console.log('to:',to);
      next({
        path: '/login',
        query: {
          redirect:to.fullPath//保存此次参数，登录后，直接跳转到此界面
        }
      })
    }
  
  }
})

export default router