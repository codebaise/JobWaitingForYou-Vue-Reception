<template>
  <div style="height: 95%">
    <!--快捷导航模块-->

    <div class="banner">
      <!--版心-->
      <div class="w">
        <div class="">
        </div>
        <div class="course">
          <a href="#" class="work">我要招人</a>
          <a href="#" class="work">我要找工作</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'index',
  computed: {
    ...mapGetters([
      'name',
      'token',
      'homeLink',
      'userType'
    ])
  },
  created() {
    console.log("token", this.token)
  },
  methods: {

  }
}
</script>

<style scoped src="./static/base.css"></style>
<style scoped src="./static/common.css"></style>
<style scoped>
 html {
   overflow: hidden;
 }
</style>
