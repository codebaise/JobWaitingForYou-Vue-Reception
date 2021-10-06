<template>
  <div class="sign-form sign-pwd" style="display: block;">
    <div class="sign-slide-box">
      <a class="logo" href="/">
        <img src="@/assets/logo.png">
      </a>
      <ul>
        <li>
          <i class="icon"></i>
          <span>沟通</span>
          <span>在线职位及时沟通</span>
        </li>
        <li>
          <i class="icon"></i>
          <span>任性选</span>
          <span>各大行业职位任你选</span>
        </li>
      </ul>
    </div>
    <div class="sign-content">
      <div class="inner-box" style="padding-top: 130px;">
        <form action="/login" method="post">
          <div class="tip-error tip-error-form"></div>
          <div class="form-row row-select">
                <span class="ipt-wrap"><i class="icon-sign-phone"><svg-icon icon-class="email"/></i><input v-model="loginForm.username" type="tel" class="ipt ipt-phone required"
                                                                                                           ka="signin-account" placeholder="邮箱" name="account" /></span>
            <div class="dropdown-menu">
            </div>
            <div class="tip-error"></div>
          </div>
          <div class="form-row">
                <span class="ipt-wrap"><i class="icon-sign-sms"><svg-icon icon-class="password"/></i><input v-model="loginForm.password" type="password" class="ipt ipt-pwd required"
                                                                                                            placeholder="密码" name="password" /></span>
            <div class="tip-error"></div>
          </div>

          <div class="form-btn">
            <button @click.prevent="toLogin" type="submit" class="btn">登录</button>
          </div>
          <div class="text-tip">
            <div class="tip-error"></div>
            <a @click="toFillRegister" href="javascript:void(0);" class="link-signin">免费注册</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
      }
    }
  },
  methods: {
    toFillRegister() {
      this.$emit("fillRegister")
    },
    toLogin(){
      this.$store.dispatch('user/login', this.loginForm).then(() => {
        this.$message({
          message: "Login success",
          type: 'success'
        })
        // if (data.info.userType === 0){
        this.$router.replace("/")
        // }
        // this.$router.push({ path: this.redirect || '/' })
        // this.loading = false
      }).catch(() => {
        // this.loading = false
      })
    }
  }
}
</script>

<style scoped>
/*.sign-slide-box .logo img {*/
/*  width: 120px;*/
/*  height: 120px;*/
/*}*/
</style>
