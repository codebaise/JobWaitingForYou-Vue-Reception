<template>
  <div class="sign-form sign-register" style="display: block;">
    <!-- 左侧显示的内容 -->
    <div class="sign-slide-box">
      <a class="logo" href="/">
        <img src="@/assets/logo.png">
      </a>
      <ul :class="{'geek-slide':true, hide: registerIdentity === 1 }">
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
      <ul :class="{'boss-slide':true, hide: registerIdentity === 0 }">
        <li>
          <i class="icon"></i>
          <span>招聘效果好</span>
          <span>与职场牛人在线开聊</span>
        </li>
        <li>
          <i class="icon"></i>
          <span>更多在线牛人</span>
          <span>入职速度快</span>
        </li>
        <li>
          <i class="icon"></i>
          <span>人才匹配度高</span>
          <span>获取更精准的牛人</span>
        </li>
      </ul>
    </div>
    <div class="sign-content">
      <div class="inner-box">
        <form action="https://signup.zhipin.com/wapi/zppassport/login/phoneV2" method="post">
          <div class="purpose-row">
            <span @click="switchRegisterIdentity(0)" :class="{cur: registerIdentity === 0 }">我要找工作</span>
            <span @click="switchRegisterIdentity(1)" :class="{cur: registerIdentity === 1 }">我要招聘</span>
          </div>

          <h4></h4>
          <div class="tip-error tip-error-form"></div>
          <!-- email input -->
          <div class="form-row row-select">
                <span class="ipt-wrap"><i class="icon-sign-phone"><svg-icon icon-class="email"/></i>
                  <input v-model.trim="email"
                         type="tel"
                         class="ipt ipt-phone required"
                         placeholder="邮箱"
                         name="phone"
                ></span>
            <div class="tip-error"></div>
          </div>

          <div class="form-row">
                <span class="ipt-wrap"><i class="icon-sign-pwd"><svg-icon icon-class="password"/></i><input v-model.trim="password" type="password" class="ipt ipt-pwd required"
                                                                           placeholder="密码"
                                                                           name="password"
                ></span>
            <div class="tip-error"></div>
          </div>
          <div class="form-row">
                  <span class="ipt-wrap"><i class="icon-sign-sms"><svg-icon icon-class="verify-code"/></i>
                    <input v-model.trim="verifyCode" type="text" class="ipt ipt-sms required" ka="signup-sms" placeholder="邮箱验证码" name="phoneCode" maxlength="6"
                  />
                    <button  @click.prevent="getMailCode" type="button" class="btn btn-sms">
                     {{ countDown === 0 ? '发送验证码' : ('已发送' + countDown) }}
                    </button>
                  </span>
            <div class="tip-error"></div>
          </div>
          <div class="form-btn">
            <button @click.prevent="toRegister" type="submit" class="btn">注册</button>
          </div>
          <div class="text-tip">
            <div class="tip-error"></div>
            <a @click="toFillLogin" href="javascript:void(0)" class="link-signin">直接登录</a>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { register, getVerifyCode } from '@/api/user'

export default {
  name: 'Register',
  data() {
    return {
      // registerIdentityList: ["seeker", "hr"],
      registerIdentity: 0, // 0 seeker 1 hr
      email: '',
      password: '',
      verifyCode: '',
      countDown: 0
    }
  },
  methods: {
    toFillLogin() {
      this.$emit('fillLogin')
    },
    switchRegisterIdentity(identity) {
      this.registerIdentity = identity
    },
    toRegister() {
      let data = {
        email: this.email,
        password: this.password,
        registerType: this.registerIdentity,
        verifyCode: this.verifyCode
      }
      register(data).then(response => {
        // console.log(response)
        this.toFillLogin()
        this.$message({
          message: '注册成功',
          type: 'success'
        })
      })
    },
    getMailCode() {
      let data = { email: this.email }
      getVerifyCode(data).then(response => {
        this.countDown = 60
        let sh = setInterval(() => {
          --this.countDown
          // console.log(this.countDown)
          if (this.countDown <= 0) {
            clearInterval(sh)
          }
        }, 1000)
      })

    }
  }
}
</script>

<style scoped>
button.btn.btn-sms {
  background: #fff;
}
</style>
