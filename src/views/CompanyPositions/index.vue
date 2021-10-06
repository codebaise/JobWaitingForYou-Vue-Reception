<template>
    <div id="wrap" style="width: 100%">
      <div id="main" class="company-new">
        <banner
          :companyDetailInfo="companyDetailInfo"
          @toCompanyDetail="toCompanyDetail"
        ></banner>
        <job-list
          :companyPositions="companyPositions"></job-list>
      </div>
    </div>
</template>

<script>
import { getCompanyDetailInfo, getCompanyBitsHrs, getCompanyPosition } from '@/api/company'
import Banner from '@/views/CompanyPositions/Banner'
import JobList from '@/views/CompanyPositions/JobList'
export default {
  name: 'index',
  components: {
    Banner, JobList
  },
  data() {
    return {
      companyDetailInfo: {},
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
      let responsePosition = await getCompanyPosition(this.companyId)
      this.companyPositions = responsePosition.data.pageInfo.positionHrVos
    },
    toCompanyDetail() {
      this.$router.push({path: `/company/${this.companyId}/detail`})
    }
  }
}
</script>

<style scoped>
body {
  background: #f6f6f8;
}
</style>
