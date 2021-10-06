<template>
  <div class="job-box">
    <div class="inner home-inner">
      <div class="job-sider">
        <div class="sider-company">
          <p class="title">公司基本信息</p>
          <div class="company-info">
            <a @click="toCompanyPosition" href="javascript:void(0)" title=""><img src="@/assets/logo-white.jpg" alt="logo"></a>
            <a @click="toCompanyPosition" href="javascript:void(0)" title="招聘">{{companyInfo.companyName}}</a>
          </div>
          <p><i class="icon-stage"></i>上市信息</p>
          <p><i class="icon-scale"></i>{{companyInfo.scale + '人'}}</p>
          <p><i class="icon-industry"></i><a href="javascript:void(0)">{{companyInfo.domain}}</a></p>
        </div>
      </div>
      <div class="job-detail">
        <div class="detail-op">
          <div class="detail-figure">
            <img src="@/assets/logo-white.jpg" lt="">
          </div>
          <h2 class="name">{{detailInfo.hrName}}<i class="icon-vip"></i>
          </h2>
          <p class="gray">{{detailInfo.hrPosition}}</p>
        </div>
        <div class="detail-content">
          <div class="job-sec">
            <h3>职位描述</h3>
            <div class="text">
              <div v-html="detailInfo.description"></div>
            </div>
          </div>
          <div class="job-sec company-info">
            <h3>公司介绍</h3>
            <div class="text">
              {{companyInfo.description}}
            </div>
            <a @click="toCompanyDetail" href="javascript:void(0)" class="look-all"><span></span>查看全部</a>
          </div>

          <div class="job-sec">
            <h3>工商信息</h3>
            <div class="name">{{companyInfo.companyName}}</div>
            <div class="level-list">
              <li><span>法定代表人：</span>法定代表人</li>
              <li><span>注册资金：</span>注册资金</li>
              <li class="res-time"><span>成立日期：    </span>成立日期</li>
              <li class="company-type"><span>企业类型：   </span>企业类型</li>
              <li class="manage-state"><span>经营状态：    </span>经营状态</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Context',
  props: {
    detailInfo: Object,
    companyInfo: Object
  },
  methods: {
    toCompanyDetail() {
      this.$router.push( {path: `/company/${this.companyInfo.companyId}/detail`})
    },
    toCompanyPosition() {
      this.$router.push({path: `/company/${this.companyInfo.companyId}/positions`})
    }
  }
}
</script>

<style scoped>

</style>
