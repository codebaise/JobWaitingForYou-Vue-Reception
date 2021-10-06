<template>
  <div class="wrapper">
    <div data-v-1c9150a9="" class="container">
      <div class="father" style="overflow: auto">
        <div data-v-1c9150a9="" class="space-right">
          <div data-v-1c9150a9="" class="space-right-top">
            <div data-v-1c9150a9="" class="title">
              <div data-v-1c9150a9="">
                <span data-v-1c9150a9="">系统通知</span></div>
            </div>
          </div>
          <div data-v-1c9150a9="" data-no-clip="" class="space-right-bottom ps ps--active-y">
            <div data-v-1c9150a9="" class="router-view" style="">
              <!---->
              <div data-v-77c58d16="" data-v-1c9150a9="" class="system">
                <div data-v-77c58d16="">
                  <div>
                    <div v-for="item in pageInfo.records" data-v-fb77dc7a="" data-v-196262e8="" data-v-77c58d16="" class="card system-item">
                      <div data-v-196262e8="" data-v-fb77dc7a="" class="top">
                        <span data-v-196262e8="" data-v-fb77dc7a="" class="title">{{ item.title }}</span>
                        <span data-v-0bc25b4d="" data-v-196262e8="" class="time" data-v-fb77dc7a="">{{ item.createTime }}</span></div>
                      <div data-v-196262e8="" data-v-fb77dc7a="" class="bottom">
                      <span data-v-e5050176="" data-v-196262e8="" class="text" data-v-fb77dc7a="">
                        <span data-v-e5050176="">{{ item.content }}</span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getGlobalMessage} from '@/api/notify'

export default {
  name: 'GlobalNotify',
  data() {
    return {
      pageInfo: {},
      hideOnSinglePage: true
    }
  },
  created() {
    this.fetchData(1)
  },
  methods: {
    fetchData(page) {
      getGlobalMessage({ page }).then((response) => {
        this.pageInfo = response.data.items
      })
    },
    handleCurrentChange(val) {
      this.fetchData(val)
    },
  }
}
</script>

<style scoped src="./static/notify.css"></style>
<style scoped>
.father {
  width: 100%;
}
</style>
