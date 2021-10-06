import request from '@/utils/request'
import da from 'element-ui/src/locale/lang/da'

export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}

export function getVerifyCode(data) {
  return request({
    url: '/mail/verifyCode',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get',
  })
}

export function logout() {
  return request({
    url: '/mail/verifyCode',
    method: 'post'
  })
}


