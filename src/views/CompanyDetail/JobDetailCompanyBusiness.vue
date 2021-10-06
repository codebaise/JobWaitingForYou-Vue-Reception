<template>
  <div class="job-sec company-business">
    <h3>工商信息</h3>
    <h4>{{ companyDetailInfo.companyName }}</h4>
    <div class="business-detail" style="height: 46px;">
      <label><span>展开</span><i class="fz fz-slidedown"></i></label>
      <ul>
        <li><span class="t">法定代表人：</span>Name</li>
        <li><span class="t">注册资本：</span>registered capital</li>
        <li><span class="t">成立日期：</span>1970-01-01</li>
        <li class="col-auto"><span class="t">企业类型：</span>Type</li>
        <li class="col-auto"><span class="t">经营状态：</span></li>
        <li class="col-auto"><span class="t">注册地址：</span></li>
        <li class="col-auto"><span class="t">统一社会信用代码：</span></li>
        <li class="col-auto"><span class="t">经营范围：</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanySiderCompanyBusiness',
  props: {
    companyDetailInfo: Object
  }
}
</script>

<style scoped>

</style>
