<template>
  <div id="main" class="inner home-inner">
    <div class="job-box">
      <div class="job-list">
        <ul>
          <li v-for="(item, i) in positions" :key="i">
            <div class="job-primary" @click="toPositinDetail(item.positionId)">
              <div class="info-primary">
                <div class="primary-wrapper">
                  <div class="primary-box">
                    <div class="job-title">
                      <span class="job-name">
                        <a href="javascript:void(0)">{{item.positionName}}</a></span>
                      <span class="job-area-wrapper">
                                                        <span class="job-area">{{item.workCity}}</span>
                                                    </span>
                      <span class="job-pub-time"></span>
                    </div>

                    <div class="job-limit clearfix">
                      <span class="red">{{item.minSalary}}K</span>
                      <p>{{ item.minExperience | minExperienceFilter}}<em class="vline"></em>{{item.minEducation | minEducationFilter}}</p>
                      <div class="info-publis">
                        <h3 class="name">
                        <img class="icon-chat" src="@/assets/logo.png">{{item.hrName}}<em class="vline"></em>{{item.hrPosition}}</h3>
                      </div>
                      <button @click.stop="deliverPosition(item.positionId)" class="btn btn-startchat" href="javascript:void(0)">
                        <img style="margin-right: 3px" class="icon-chat icon-chat-hover" src="@/assets/logo.png" alt="personImg">
                        <span>投递申请</span>
                      </button>
                    </div>
                    <div class="info-detail" style="top: 0px;"></div>
                  </div>
                </div>
                <div class="info-company">
                  <div class="company-text">
                    <h3 class="name"><a href="javascript:void(0)">{{item.companyName}}</a></h3>
                    <p><a href="javascript:void(0)" class="false-link">{{item.companyDomain}}</a><em class="vline"></em>{{ item.companyScale + '人' }}</p>
                  </div>
                  <a href="javascript:void(0)"><img class="company-logo" src="@/assets/logo-white.jpg" alt=""></a>
                </div>
              </div>
              <div class="info-append clearfix">
                <div class="tags">
                  <span class="tag-item">技术栈</span>
                </div>
                <div class="info-desc">公司优势</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { deliverPosition } from '@/api/seeker'

export default {
  name: 'PositionList',
  props: {
    positions: Array
  },
  methods: {
    toPositinDetail(positionId){
      this.$router.push({
        path: `/position/${positionId}`
      })
    },
    deliverPosition(positionId) {
      deliverPosition(positionId).then(response => {
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
