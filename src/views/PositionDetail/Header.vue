<template>
  <div class="job-banner">
    <div class="inner home-inner">
      <div class="job-primary detail-box">

        <div class="info-primary">
          <div class="job-status"><span>招聘中</span></div>
          <div class="name">
            <h1 title="职位名称">{{detailInfo.positionName}}</h1>
            <span class="salary">{{detailInfo.minSalary + 'k+'}}</span>
          </div>
          <p><a class="text-city" href="javascript:void(0)">{{detailInfo.workCity}}</a><em class="dolt">

          </em>{{detailInfo.minExperience | minExperienceFilter }}<em class="dolt"></em>{{detailInfo.minEducation | minEducationFilter }}</p>
          <div class="tag-container">
            <div class="job-tags">
              <span>公司福利</span>
            </div>
          </div>
        </div>
        <div class="job-op">
          <div class="btn-container">
            <!-- 未登录 -->
            <a @click="deliverPosition" class="btn btn-startchat" href="javascript:;" >投递申请</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { deliverPosition } from '@/api/seeker'

export default {
  name: 'Header',
  props: {
    detailInfo: Object
  },
  methods: {
    deliverPosition() {
      deliverPosition( this.detailInfo.positionId).then(response => {
        this.$message({
          message: '投递成功',
          type: 'success'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
