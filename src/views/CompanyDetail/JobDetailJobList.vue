<template>


  <div class="job-sec company-job company-desc">
    <h3>在招职位</h3>
    <div class="job-list">
      <ul>
        <li v-for="(item, i) in companyPositions" :key="i">
          <div data-lid="9icNgI85heN.search.4" data-jid="52a7f6d72ca7e9ac1nV43ty7EFJV" ka="comp_desc_joblist_1">
            <div class="job-primary">
              <div class="info-primary">
                <h3 class="name">
                  <div class="title-box">
                    <!--                                  跳转到 相应的职位详情 -->
                    <a href="javascript:void(0)" class="job-title" title="用户运营">{{ item.positionName }}</a>
                    <span class="job-area">[{{ item.workCity }}]</span>
                    <span class="job-pub-time"></span>
                  </div>
                  <div class="info-detail"></div>
                </h3>
                <p>
                  <span class="red">12-13K</span>
                  1-3年<em class="vline"></em>大专
                </p>
              </div>
              <div class="info-publis">
                  <span class="name">
                      <img src="@/assets/logo-white.jpg">
                      {{ item.hrName }}<em class="vline"></em>{{ item.hrPosition }}
                  </span>
              </div>
            </div>
          </div>
          <div class="startchat-box">
            <a @click="deliverPosition(item.positionId)" href="javascript:void(0)" class="btn btn-startchat">投递申请</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { deliverPosition } from '@/api/seeker'

export default {
  name: 'CompanySiderJobList',
  props: {
    companyPositions: Array
  },
  methods: {
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
