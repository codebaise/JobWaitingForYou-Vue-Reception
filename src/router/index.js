import Vue from 'vue'
import Router from 'vue-router'
import fa from 'element-ui/src/locale/lang/fa'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/',
    component: () => import("@/views/Index/index"),
    meta: { overFlow: true }
  },
  {
    path: '/signup',
    component: () => import('@/views/signUp/index'),
    meta: { mustBeLogged: false, hiddenHeader: true, hiddenFooter: true }
  },

  {
    path: "/account/home",
    component: () => import("@/views/AccountHome/index"),
    meta: { mustBeLogged: true, mustFillInfo: false, entryIdentity: 'hr' }
  },
  // company
  {
    path: "/companys",
    component: () => import("@/views/Companys/index")
  },
  {
    path: "/company/:companyId/detail",
    component: () => import("@/views/CompanyDetail/index"),
    props: true
  },
  {
    path: "/company/:companyId/positions",
    component: ()=> import("@/views/CompanyPositions/index"),
    props: true
  },
 // position
  {
    path: "/positions",
    component: () => import("@/views/Positions/index")
  },
  {
    path: "/position/:positionId",
    component: () => import("@/views/PositionDetail/index")
  },
  {
    path: "/notify",
    redirect: "/notify/remindNotify",
    component: () => import("@/views/Notify/index"),
    meta: { hiddenFooter: true },
    children: [
      {
        path: "/notify/globalNotify",
        component: () => import("@/views/Notify/GlobalNotify"),
        meta: { hiddenFooter: true }
      },
      {
        path: "/notify/remindNotify",
        component: () => import("@/views/Notify/RemindNotify"),
        meta: { hiddenFooter: true }
      }
    ],

  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
    meta: {hiddenHeader: true, hiddenFooter: true}
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404'}
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
