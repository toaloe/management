import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import Login from '@/pages/login/Login'

import { registerLayout } from 'echarts/lib/echarts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/pages/home/Home')

    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/pages/login/Login')
    }
  ]
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }
})

// export const constantRouterMap = [
//   {path: '/login', component: () => import('@/pages/login/Login'), hidden: true},
//   {
//     path: '',
//     component: Layout,
//     redirect: '/home',
//     children: [{
//       path: '/',
//       name: 'Home',
//       component: () => import('@/pages/home/Home'),
//       meta: {title: '首页', icon: 'Home'}
//     }]
//   }
// ]

// export default new Router({
//   // mode: 'history', //后端支持可开
//   scrollBehavior: () => ({y: 0}),
//   routes: constantRouterMap
// })
