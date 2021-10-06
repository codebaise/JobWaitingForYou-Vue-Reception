import request from '@/utils/request'

export function getGlobalMessage(params){
  return request({
    url: `/message`,
    method: 'get',
    params
  })
}

export function getRemindMessage(params){
  return request({
    url: `/message/remind`,
    method: 'get',
    params
  })
}
export function getRemindMessageCount(){
  return request({
    url: `/message/remind/count`,
    method: 'get',
  })
}

