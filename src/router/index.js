import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  // 测试页面
  {
    path: '/test',
    component: Layout,
    redirect: '/test/index',
    hidden: false,
    children: [
      {
        path: 'index',
        component: () => import('@/views/test/index'),
        name: 'TestIndex',
        meta: { title: '测试页面', icon: 'skill', noCache: true }
      }
    ]
  },
  // 楼盘信息
  {
    path: '/loupan',
    component: Layout,
    redirect: '/loupan/index',
    hidden: false,
    children: [
      {
        path: ':LoupanIndex',
        component: () => import('@/views/loupan/index'),
        name: 'LoupanIndex',
        meta: { title: '楼盘信息', icon: 'skill', noCache: true }
      }
    ]
  },
  // 房源信息
  {
    path: '/fangyuan',
    component: Layout,
    redirect: '/fangyaun/index',
    hidden: false,
    children: [
      {
        path: ':FangyuanIndex',
        component: () => import('@/views/fangyuan/index'),
        name: 'FangyuanIndex',
        meta: { title: '房源', icon: 'skill', noCache: true }
      }
    ]
  },
  // 我的置业顾问
  {
    path: '/myAdviser',
    component: Layout,
    redirect: '/myAdviser/index',
    hidden: false,
    children: [
      {
        path: 'myAdviser',
        component: () => import('@/views/myAdviser/index'),
        name: 'MyAdviserIndex',
        meta: { title: '我的顾问', icon: 'skill', noCache: true }
      }
    ]
  },
  // 我的收藏
  {
    path: '/myCollection',
    component: Layout,
    redirect: '/myCollection/index',
    hidden: false,
    children: [
      {
        path: 'myCollection',
        component: () => import('@/views/myCollection/index'),
        name: 'MyCollectionIndex',
        meta: { title: '我的收藏', icon: 'drag', noCache: true }
      }
    ]
  },
  // 预约记录
  {
    path: '/yuyueRecord',
    component: Layout,
    redirect: '/yuyueRecord/index',
    hidden: false,
    children: [
      {
        path: 'yuyueRecord',
        component: () => import('@/views/yuyueRecord/index'),
        name: 'YuyueRecordIndex',
        meta: { title: '我的预约记录', icon: 'drag', noCache: true }
      }
    ]
  },
  // 预约记录
  {
    path: '/xuanfangRecord',
    component: Layout,
    redirect: '/xuanfangRecord/index',
    hidden: false,
    children: [
      {
        path: 'xuanfangRecord',
        component: () => import('@/views/xuanfangRecord/index'),
        name: 'XuanfangRecordIndex',
        meta: { title: '我的选房记录', icon: 'drag', noCache: true }
      }
    ]
  },

  {
    path: '/error',
    component: Layout,
    hidden: true,
    redirect: 'noRedirect',
    name: 'ErrorPages',
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: { title: '401', noCache: true }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: { title: '404', noCache: true }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
