<template>
  <div class="company-sider">
    <manager-list></manager-list>
    <sider-hr-list
      :companyDetailInfo="companyDetailInfo"
      :company-hrs="companyHrs"
      @toPositionList="toPositionList"
    >
    </sider-hr-list>
    <!-- <div class="update-time">更新时间:2021-03-10</div>-->
  </div>
</template>

<script>
import ManagerList from '@/views/CompanyDetail/CompanySiderManagerList'
import SiderHrList from '@/views/CompanyDetail/CompanySiderHrList'
export default {
  name: 'CompanySider',
  components:{
    ManagerList, SiderHrList
  },
  props: {
    companyDetailInfo: Object,
    companyHrs: Array
  },
  methods: {
    toPositionList() {
      this.$emit("toPositionList")
    }
  }
}
</script>

<style scoped>

</style>
