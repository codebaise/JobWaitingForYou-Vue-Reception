<template>
  <div class="page-white">
    <div id="wrap" style="width: 100%">
      <div id="main" class="company-new">
        <banner @toPositionList="toPositionList" :companyDetailInfo="companyDetailInfo"></banner>
        <div class="job-box">
          <div class="inner home-inner">
            <job-detail
              :companyDetailInfo="companyDetailInfo"
              :companyPositions="companyPositions"
            ></job-detail>
            <company-sider
              :companyDetailInfo="companyDetailInfo"
              :companyHrs="companyHrs"
              @toPositionList="toPositionList"
            ></company-sider>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCompanyDetailInfo, getCompanyBitsHrs, getCompanyPosition } from '@/api/company'
import Banner from '@/views/CompanyDetail/Banner'
import JobDetail from '@/views/CompanyDetail/JobDetail'
import CompanySider from '@/views/CompanyDetail/CompanySider'
export default {
  name: 'index',
  components: {
    Banner, JobDetail, CompanySider
  },
  data() {
    return {
      companyDetailInfo: {},
      companyHrs: [],
      companyPositions: [],
      companyId: 1
    }
  },
  created() {
    this.companyId = this.$route.params.companyId
    this.fetchData()
  },
  methods: {
    async fetchData() {
      let responseCompanyDetailInfo = await getCompanyDetailInfo(this.companyId)
      this.companyDetailInfo = responseCompanyDetailInfo.data.detailInfo
      let responseCompanyHr = await getCompanyBitsHrs(this.companyId)
      this.companyHrs = responseCompanyHr.data.items
      let responsePosition = await getCompanyPosition(this.companyId, {limit:true})
      this.companyPositions = responsePosition.data.pageInfo.positionHrVos
    },
    toPositionList() {
      this.$router.push({path: `/company/${this.companyId}/positions`})
    }
  },
}
</script>

<style scoped>
</style>
