import router from './router'
import store from './store'
import { Message } from 'element-ui'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { setToken, getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'
import el from 'element-ui/src/locale/lang/el'

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login'] // no redirect whitelist

function judgeCanTo(to) {
  // 必须填写信息 且信息完善度不为2 则不允许进行跳转
  return !(to.meta.mustFillInfo === true && store.getters.fillLevel !== 2);

}

function getNextLink(){
  let link = "/signup"
  // seeker
  if (store.getters.userType === 0){
    link = "/account/home"
  } else if (store.getters.userType === 1){
    // hr
    // 0 说明什么都没填写
    if (store.getters.fillLevel === 0)
      link = store.getters.homeLink + "?token=" + getToken() + "&to=" + "/account"

  }
  return link
}

// 路由跳转钩子
// 到时候判断是否需要登录, meta中
router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()
  // console.log("???")

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasToken = getToken()

  if (hasToken) {
    if (to.path === '/signup') {
      // if is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done() // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
    } else {
      // 判断是否有用户信息
      const hasRoles = store.getters.roles && store.getters.roles.length > 0
      if (hasRoles) {
        if (to.meta.mustBeLogged === true && !judgeCanTo(to)){
          // 判断是否必须填写好信息
            let link = getNextLink()
            // 判断是否有http开头, 来判断使用的跳转方式
            if (link.indexOf("http") === -1)
              next(link)
            else
              window.location.href = link
        } else
          next()
      } else {
        try {
          // get user info
          // 成功拉取到用户信息后, 进行相应连接的跳转
          // 跳转时还是会来这里, 进行验证是否可以跳转
          await store.dispatch('user/getInfo')
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          Message.error(error || 'Has Error')
          next(`/signup?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
   // 没有token时 判断该页面是否必须登录, 如果是则跳转到首页
    // 是否需要完整的填写信息, 这里不进行判断, 因为必须登录才能填写信息
  if (to.meta.mustBeLogged && to.meta.mustBeLogged === true){
    next(`/signup?redirect=${to.path}`)
    NProgress.done()
  } else {
    next()
  }


    // if (whiteList.indexOf(to.path) !== -1) {
    //   // in the free login whitelist, go directly
    //   next()
    // } else {
    //   // other pages that do not have permission to access are redirected to the login page.
    //   next(`/login?redirect=${to.path}`)
    //   NProgress.done()
    // }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
