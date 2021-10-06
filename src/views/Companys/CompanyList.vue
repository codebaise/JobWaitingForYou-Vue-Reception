<template>
  <div class="company-tab-box company-list">
    <ul>
      <li v-for="(item, i) in companysPageInfo.companysVos" :key="i">
        <div class="sub-li">
          <a @click="toCompanyDetail(item.companyId)" href="javascript:void(0)" class="company-info">
            <img src="@/assets/logo-white.jpg" alt="">
            <div class="conpany-text">
              <h4>{{ item.companyName }}</h4>
              <p>{{ item.scale }}<span class="vline"></span>{{item.domain}}</p>
            </div>
          </a>
          <a @click="toPositionDetail(item.positionId)" href="javascript:void(0)" class="about-info">
            <p>热招 <u class="h">{{item.positionName}}</u> {{item.minSalary + 'k+'}}</p>
          </a>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCompanys } from '@/api/company'

export default {
  name: 'CompanyList',
  data() {
    return {
      companysPageInfo: {}
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.getCompanys(1)
    },
    async getCompanys(page) {
      let response = await getCompanys({page})
      this.companysPageInfo = response.data.pageInfo
    },
    toCompanyDetail(companyId) {
      console.log("companyId", companyId)
      this.$router.push({path: `/company/${companyId}/detail`})
    },
    toPositionDetail(positionId) {
      console.log(positionId)
      // this.$router.push({path: })
    }
  }
}
</script>

<style scoped src="./static/companyList.css"></style>
<style scoped>
h1, h2, h3, h4, h5, h6{
  font-weight: 400
}
</style>
