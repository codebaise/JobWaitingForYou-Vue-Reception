<template>
  <div id="content-container">
    <div id="company_list_container" class="company-search home-site company-hot-job">
      <select-header></select-header>
      <company-list></company-list>
    </div>
  </div>

</template>

<script>
import SelectHeader from '@/views/Companys/SelectHeader'
import CompanyList from '@/views/Companys/CompanyList'
export default {
  name: 'index',
  components: {
    SelectHeader, CompanyList
  }
}
</script>

<style scoped>
#content-container {
  width: 1200px;
  margin: 0 auto
}

#company_list_container {
  padding-bottom: 100px
}

#company_list_container .content_left {
  width: 960px;
  float: left
}

#company_list_container .content_right {
  width: 210px;
  float: right;
  padding-top: 35px;
  overflow: hidden;
  display: none
}

#company_list_container:after {
  content: '';
  clear: both;
  display: block
}
</style>
<style scoped>
#content-container{
  line-height: normal;
  min-height: 800px;
}
</style>
