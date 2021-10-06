<template>
  <div  class="page-sign page-sign-login">
    <div id="wrap">
      <div class="sign-wrap sign-wrap-v2" style="display: block">
        <Login v-show="this.fillStatus === 'login'" @fillRegister="fillRegister"></Login>
        <Register v-show="this.fillStatus === 'register'" @fillLogin="fillLogin"></Register>
        <register-to-develop></register-to-develop>
      </div>
    </div>
  </div>

</template>

<script>
import Login from '@/views/signUp/Login'
import Register from '@/views/signUp/Register'
import RegisterToDevelop from '@/views/signUp/RegisterToDevelop'
export default {
  components: {
    Login, Register, RegisterToDevelop
  },
  created() {
    let type = this.$route.query.type
    if ( type === undefined || this.allType.indexOf(type) === -1 ) {
      this.fillStatus = this.allType[0]
    } else {
      this.fillStatus = type
    }
  },
  data() {
    return {
      allType: ["login", "register"],
      fillStatus: "login"
    }
  },
  methods: {
    fillLogin(){
      this.fillStatus = this.allType[0]
    },
    fillRegister() {
      this.fillStatus = this.allType[1]
    }
  }
}
</script>

<style scoped>
.page-sign {
  height: 100%;
}

.page-sign-login {

  background: rgba(255, 255, 255, 0.5) url(./back5.png) no-repeat;
  background-size: 100% 100%;
}
>>> .sign-form .text-tip a, >>> .sign-form .btn-sms{
  color: rgb(72,142,182);
}
>>> .btn {
  background: rgb(72,142,182)
}

 /deep/ .text-tip a {
    float: none !important;
  }
</style>
