<template>
  <section class="shortcut">
    <div class="w">
      <div class="fl">
        <ul>
          <li>职等你来</li>
          <li class="arrow-icon">
            <a href="#">职位 </a>
          </li>
          <li><a href="#">公司</a></li>
          <li><a href="#">校园</a></li>
        </ul>
      </div>
      <div class="fr">
        <ul v-if="token === undefined">
          <li>
            <a @click.prevent="toSignup('login')" href="javascript:void(0)">一键登录 &nbsp;</a>
          </li>
          <li><a @click.prevent="toSignup('register')" href="javascript:void(0)" class="style_green">免费注册</a>

          </li>
        </ul>
        <ul v-if="token !== undefined">
          <li>
            <a @click.prevent="toAccountHome()" href="javascript:void(0)">个人中心 &nbsp;</a>
          </li>
          <li><a @click.prevent="logout()" class="style_green">退出登录</a>
          </li>
        </ul>

      </div>

    </div>

  </section>
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
    }
  }
}
</script>

<style scoped>
/*快捷导航模块*/
.shortcut {
  height: 6%;
  line-height: 40px;
  background-color: rgba(1, 3, 13, 0.81);
}

.shortcut ul li {
  float: left;
}


.fl {
  padding-top: 3px;
  float: left;
}

.fr {
  padding-top: 3px;
  float: right;
}

.fl ul li {
  float: left;
  margin: 0 15px;
  font-size: 21px;
  color: white;
}

.fl ul li a {
  display: block;
  height: 40px;
  padding: 0 10px;
  font-size: 18px;
  line-height: 40px;
  color: white;
}

.fl ul li a:hover {
  border-bottom: 2px solid darkturquoise;
  color: darkturquoise;
}

.fr ul li {
  float: left;
  margin: 0 15px;
  font-size: 21px;
  color: white;
}

.fr ul li a {
  display: block;
  height: 40px;
  padding: 0 10px;
  font-size: 18px;
  line-height: 40px;
  color: white;
}

.fr ul li a:hover {
  border-bottom: 2px solid darkturquoise;
  color: darkturquoise;

}
</style>
