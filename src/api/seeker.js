import request from '@/utils/request'

export function getSeekerDetailInfo() {
  return request({
    url: `/seeker`,
    method: 'get'
  })
}

export function putSeekerDetailInfo(data) {
  return request({
    url: `/seeker`,
    method: 'post',
    data
  })
}

export function putAdvantage(data) {
  return request({
    url: `/seeker/advantage`,
    method: 'post',
    data
  })
}

export function putExpect(data) {
  return request({
    url: `/seeker/expect`,
    method: 'post',
    data
  })
}

//School

export function getSeekerSchools() {
  return request({
    url: `/seeker/school`,
    method: 'get'
  })
}

export function addSeekerSchool(data) {
  return request({
    url: `/seeker/school`,
    method: 'post',
    data
  })
}

export function dropSeekerSchool(schoolId) {
  return request({
    url: `/seeker/school/${schoolId}`,
    method: 'delete',
  })
}


export function updateSeekerSchool(schoolId, data) {
  return request({
    url: `/seeker/school/${schoolId}`,
    method: 'put',
    data
  })
}

// experience
export function getSeekerExperiences() {
  return request({
    url: `/seeker/experiences`,
    method: 'get'
  })
}

export function addSeekerExperience(data) {
  return request({
    url: `/seeker/experience`,
    method: 'post',
    data
  })
}

export function updateSeekerExperience(experienceId, data) {
  return request({
    url: `/seeker/experience/${experienceId}`,
    method: 'put',
    data
  })
}

// other
export function deliverPosition(positionId) {
  return request({
    url: `/seeker/deliver/${positionId}`,
    method: 'post',
  })
}




