import {
  addSeekerExperience, addSeekerSchool, dropSeekerSchool,
  getSeekerDetailInfo,
  getSeekerExperiences,
  getSeekerSchools,
  putAdvantage, putExpect,
  putSeekerDetailInfo
} from '@/api/seeker'
import { parseTime } from '@/utils'

export default {
  methods: {
    async fetch() {
      let responseSeeker = await getSeekerDetailInfo()
      this.seeker = responseSeeker.data.seeker
      // 如果还没有设置名字, 则直接显示编辑区
      if (this.seeker.name === undefined)
        this.showEditSelfInfo = true
      this.initSeekerInfo()
      this.initSeekerExpect()
      let responseExperience = await getSeekerExperiences()
      this.experiences = responseExperience.data.experiences

      let responseSchool = await getSeekerSchools()
      this.schools = responseSchool.data.schools
    },
    async putSeekerDetailInfo() {
      if(this.editSeeker.userIdentity === 0)
        this.editSeeker.currentStatus = 0
      let response = await putSeekerDetailInfo(this.editSeeker)
      this.$router.go(0)
    },
    async putAdvantage() {
      let data = {
        advantage: this.advantage
      }
      console.log(this.seeker.advantage)
      await putAdvantage(data)
      this.$router.go(0)
    },
    async putExpect(){
      await putExpect(this.editExpectWork)
      this.$router.go(0)
    },
    async addExperience(){
      this.workExperience.startTime = parseTime(this.workExperience.startTime)
      this.workExperience.endTime = parseTime(this.workExperience.endTime)
      await addSeekerExperience(this.workExperience)
      this.$router.go(0)
    },
    async addSchool() {
      this.editSchool.startTime = parseTime(this.editSchool.startTime)
      this.editSchool.endTime = parseTime(this.editSchool.endTime)
      await addSeekerSchool(this.editSchool)
      this.$router.go(0)
    },
    async dropSchool(schoolId){
      await dropSeekerSchool(schoolId)
      this.$router.go(0)
    },
    isEmpty(str) {
      return str === undefined || str === '' || str === ""
    },
    notEmpty(str) {
      return !this.isEmpty(str)
    },
    initSeekerInfo() {
      this.editSeeker.name = this.seeker.name
      this.editSeeker.userIdentity = this.seeker.userIdentity
      this.editSeeker.currentStatus = this.seeker.currentStatus
      this.advantage = this.seeker.advantage
    },
    initSeekerExpect() {
      this.editExpectWork.expectPosition = this.seeker.expectPosition
      this.editExpectWork.expectCity = this.seeker.expectCity
      this.editExpectWork.minExpectSalary = this.seeker.minExpectSalary
    },
    formatYearBetween(start, end) {
      let endTime = new Date(end)
      let startTime = new Date(start)
      let retStr = "" + startTime.getFullYear() + "-" + endTime.getFullYear()
      return retStr
    }
  }
}
