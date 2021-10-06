<template>
  <div class="job-detail">
    <div class="detail-content">
      <job-sec :companyDetailInfo="companyDetailInfo"></job-sec>
      <company-products></company-products>
      <company-business :companyDetailInfo="companyDetailInfo"></company-business>
      <job-list :companyPositions="companyPositions"></job-list>
    </div>
  </div>
</template>

<script>
import JobSec from '@/views/CompanyDetail/JobDetailJobSec'
import JobList from '@/views/CompanyDetail/JobDetailJobList'
import CompanyBusiness from '@/views/CompanyDetail/JobDetailCompanyBusiness'
import CompanyProducts from '@/views/CompanyDetail/JobDetailCompanyProducts'
export default {
  name: 'CompanyInfo',
  components: {
    JobSec, JobList, CompanyBusiness, CompanyProducts
  },
  props: {
    companyDetailInfo: Object,
    companyPositions: Array
  }
}
</script>

<style scoped>

</style>
