<template>
  <div class="wrapper">
    <div data-v-1c9150a9="" class="container">
      <div data-v-1c9150a9="" class="space-left">
        <div data-v-7d37e619="" data-v-1c9150a9="" class="side-bar">
          <div data-v-7d37e619="" class="title">
            <div data-v-7d37e619="" class="icon"></div>
            <div data-v-7d37e619="">
              消息中心
            </div>
          </div>
          <ul data-v-7d37e619="" class="list">
            <li data-v-7d37e619="" :class="{item:true, active: $route.path.includes('global')}">
              <router-link to='/notify/globalNotify'>
                <a data-v-7d37e619="" href="javascript:void(0)" class="" title="系统通知">系统通知</a>
              </router-link>
            </li>
            <li data-v-7d37e619="" :class="{item:true, active: $route.path.includes('remind')}">
              <router-link to='/notify/remindNotify'>
                <a data-v-7d37e619="" href="javascript:void(0)" class="" title="我的消息">我的消息
                  <span v-show="notReadMessageCount !==0" data-v-7d37e619="" class="notify notify-number">{{notReadMessageCount}}</span>
                </a></router-link>
            </li>
          </ul>
          <!---->
        </div>
      </div>
      <div class="father allWidth" style="overflow: auto;">
        <router-view />
      </div>

    </div>
  </div>
</template>

<script>
import { getRemindMessageCount } from '@/api/notify'

export default {
  name: 'index',
  data() {
    return {
      notReadMessageCount: 0
    }
  },
  created() {
    this.getRemindMessageCount()
  },
  methods: {
    getRemindMessageCount() {
      getRemindMessageCount().then(response => {
        this.notReadMessageCount = response.data.notReadMessageCount
      })
    }
  }
}
</script>

<style scoped src="./static/notify.css"></style>
<style scoped>
.allWidth {
  width: 100%;
}
</style>
