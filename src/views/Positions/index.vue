<template>
  <div class="search-job-list-wrap">
    <Header></Header>
    <position-list :positions="positionPageInfo.positionsVos"></position-list>
  </div>
</template>

<script>
import Header from '@/views/Positions/Header'
import PositionList from '@/views/Positions/PositionList'
import { getPositions } from '@/api/position'

export default {
  name: 'index',
  components: {
    PositionList, Header
  },
  data() {
    return {
      positionPageInfo: {}
    }
  },
  created() {
    this.fetch()
  },
  methods: {
    fetch() {
      this.getPositions(1)
    },
    async getPositions(page) {
      let response = await getPositions({ page })
      this.positionPageInfo = response.data.pageInfo
    }
  }
}
</script>

<style scoped>

</style>
