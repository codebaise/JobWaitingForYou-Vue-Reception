<template>
  <div class="job-sec recruiter-list">
    <h3>{{ companyDetailInfo.simpleName }}招聘Boss</h3>
    <ul>
      <li v-for="item in companyHrs" :key="item.hrName">
        <div class="figure">
          <img src="@/assets/logo-white.jpg" alt="">
        </div>
        <div class="text">
          <div class="name">
            <div class="company-full-name"><span>{{ companyDetailInfo.companyName }}</span></div>
            <!--                        埋坑-->
            <a  @click.prevent="toPositionList" href="javascript:void(0)">
              {{ item.hrName }}<em class="vline"></em>{{ item.curPosition }}
            </a>
          </div>
          <p class="gray">正在招聘 {{ item.positionCount }} 个职位</p>
        </div>
      </li>
    </ul>
    <div class="view-more"><a @click.prevent="toPositionList" href="javascript:void(0)"><i class="more">查看所有Boss的在招职位</i></a></div>
  </div>
</template>

<script>
export default {
  name: 'CompanySiderHrList',
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
