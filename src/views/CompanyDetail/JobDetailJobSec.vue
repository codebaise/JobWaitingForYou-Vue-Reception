<template>
  <div class="job-sec">
    <h3>{{ companyDetailInfo.simpleName }}简介</h3>
    <div class="text fold-text">
      公司简介内容<a
      href="javascript:;" class="more-view" ka="company-intro-more"
      style="display: none;"
    >展开<i class="fz fz-slidedown"></i></a></div>
  </div>
</template>

<script>
export default {
  name: 'CompanySiderJobSec',
  props: {
    companyDetailInfo: Object
  }

}
</script>

<style scoped>

</style>
