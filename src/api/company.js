import request from '@/utils/request'


export function getCompanyDetailInfo(companyId) {
  return request({
    url: `/company/${companyId}`,
    method: 'get',
  })
}

export function getCompanyBitsHrs(companyId) {
  return request({
    url: `/company/${companyId}/hrs`,
    method: 'get',
  })
}

export function getCompanyPosition(companyId, params) {
  return request({
    url: `/company/${companyId}/positions`,
    method: 'get',
    params
  })
}

export function getCompanys(params) {
  return request({
    url: `/companys`,
    method: 'get',
    params
  })
}

export function getCompanyDetailInfoByPositionId(positionId) {
  return request({
    url: `/company/position/${positionId}`,
    method: 'get',
  })
}
