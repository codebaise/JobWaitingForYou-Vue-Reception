import Vue from 'vue'
import fa from 'element-ui/src/locale/lang/fa'

Vue.filter("minExperienceFilter", minExperience =>{
  const experienceRule = {
    0: '1年以内',
    1: '1-3年',
    2: '3-5年',
    3: '5-10年',
    4: '10年以上'
  }
  return experienceRule[minExperience]
})

Vue.filter("minEducationFilter", education => {
  const educationRule = {
    0: '不限',
    1: '初中及以下',
    2: '中专/中技',
    3: '高中',
    4: '大专',
    5: '本科',
    6: '硕士',
    7: '博士'
  }
  return educationRule[education]
})

Vue.filter("userIdentityFilter", userIdentity => {
  const userIdentityMap = {
    0: '应届生',
    1: '职场人士'
  }
  return userIdentityMap[userIdentity]
})

Vue.filter("currentStatusFilter", (curStatus, userIdentity) => {
  if (userIdentity === 0)
    return "应届生"
  const curStatusMap = {
    0: '离职找工作',
    1: '在职找工作',
    2: '在职看机会',
    3: '暂时不找工作'
  }
  return curStatusMap[curStatus]
})

Vue.filter("needEmpty", str => {

})

Vue.filter("notIsEmpty", str => {

})
