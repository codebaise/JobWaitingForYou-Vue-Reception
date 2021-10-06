<template>
  <!-- 顶端框体 -->
  <div class="company-banner" style="">
    <div class="inner home-inner">
      <!-- 公司基本信息 -->
      <div>
        <div class="company-stat">
       <span><a><b>{{ companyDetailInfo.positionCount }}</b>在招职位</a></span>
          <em class="vline"></em><span><b>{{ companyDetailInfo.hrCount }}</b>位BOSS</span>
        </div>

        <div class="info-primary">
          <img
            src="@/assets/logo-white.jpg"
            alt="BaseLogo" class="fl"
          >
          <div class="info">
            <h1 class="name">{{ companyDetailInfo.companyName }}<i class="icon-brand"></i></h1>
            <p>{{ companyDetailInfo.scale }}人<em class="dolt"></em>
              <a href="javascript:void(0)"
                 title="互联网行业招聘信息" class="industry-link"
              >{{ companyDetailInfo.domain }}</a></p>
          </div>
        </div>
      </div>
      <div class="company-tab">
        <a class="cur">公司简介</a>
        <a @click.prevent="toPositionList" href="javascript:void(0)" class="">招聘职位({{ companyDetailInfo.positionCount }})</a>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: {
    companyDetailInfo: {}
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
