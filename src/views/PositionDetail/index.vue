<template>
  <div class="page-white">
    <Header :detailInfo="positionDetailInfo"></Header>
    <Context
      :detailInfo="positionDetailInfo"
      :companyInfo="companyInfo"></Context>
  </div>
</template>

<script>
import Header from '@/views/PositionDetail/Header'
import Context from '@/views/PositionDetail/Context'
import { getPositionDetailInfo } from '@/api/position'
import { getCompanyDetailInfoByPositionId } from '@/api/company'

export default {
  name: 'index',
  components: {
    Header, Context
  },
  data() {
    return {
      positionId: "",
      positionDetailInfo: {},
      companyInfo: {}
    }
  },
  created() {
    this.positionId = this.$route.params.positionId
    this.fetch()
  },
  methods: {
    fetch() {
      this.getPositionDetailInfo()
    },
    async getPositionDetailInfo() {
      let responsePosition = await getPositionDetailInfo(this.positionId)
      this.positionDetailInfo = responsePosition.data.detailInfo
      let responseCompany = await getCompanyDetailInfoByPositionId(this.positionId)
      this.companyInfo = responseCompany.data.detailInfo
    }
  }
}
</script>

<style scoped>

</style>
