import request from '@/utils/request'

export function getPositions(params) {
  return request({
    url: `/positions`,
    method: 'get',
    params
  })
}

export function getPositionDetailInfo(positionId) {
  return request({
    url: `/position/${positionId}`,
    method: 'get'
  })
}
