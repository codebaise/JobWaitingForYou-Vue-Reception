<template>
  <div id="lg_header">
    <!--C端头部黑色导航-->
    <div id="lg_tbar" class="normal-tbar">

      <div class="inner">

        <div class="lg_tbar_l">
          <ul class="lg_tbar_tabs">
            <li>
              <a @click.prevent="toIndex" href="javascript:void(0)">首页</a>
            </li>
<!--          选中样式   class="tab-active"-->
            <li>
              <a @click.prevent="toCompanys" href="javascript:void(0)">公司</a>
            </li>
            <li>
              <a @click="toPositions" href="javascript:void(0)">职位
              </a>
            </li>
          </ul>
        </div>

        <div class="lg_tbar_r">
          <ul v-if="token === undefined" class="passport">
            <li>
              <a @click.prevent="toSignup('login')" class="login">登录</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a @click.prevent="toSignup('register')" class="register">注册</a>
            </li>
          </ul>
          <ul  v-if="token !== undefined" class="passport">
            <li>
              <a @click.prevent="toAccountHome()" class="login">个人中心</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a @click.prevent="toNotify()">消息中心</a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a @click.prevent="logout()" class="register">登出</a>
            </li>
          </ul>
        </div>
      </div>
      <div id="loginNavSlider"></div>
    </div>

    <!--end #lg_tbar-->

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'index',
  computed: {
    ...mapGetters([
      'token',
      'homeLink',
      'userType'
    ])
  },
  methods: {
    toSignup(type) {
      this.$router.push({ path: '/signup', query: { type } })
    },
    toAccountHome() {
      console.log(this.homeLink)
      if (this.userType === 0)
        this.$router.push(this.homeLink)
      else if (this.userType === 1) {
        window.location.href = this.homeLink + "#/?to=/account/detailInfo"
      }
    },
    logout() {
      this.$store.dispatch("user/logout")
      this.$router.replace("/signup")
    },
    toIndex() {
      this.$router.push("/")
    },
    toCompanys() {
      this.$router.push({path: '/companys'})
    },
    toPositions() {
      this.$router.push({path:'/positions'})
    },
    toNotify() {
      this.$router.push({path:'/notify'})
    }
  }
}
</script>
<style scoped src="./statis/header.css">
</style>
