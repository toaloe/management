<template>
  <div>
    <el-card class="login-form-layout">
      <el-form autoComplete="on"
                :model="loginForm"
                :rules="loginRules"
                ref="loginForm"
                label-position="left">
      <div style="text-align: center">
        <svg-icon icon-class="login-mall" style="width: 56px; height: 560x; color: #409EFF"></svg-icon>
      </div>
      <h2 class="login-title color-main">aloe-admin</h2>
        <el-form-item prop="username">
          <el-input name="username"
                    type="text"
                    v-model="loginForm.username"
                    autoComplete="on"
                    placeholder="请输入用户名">
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input name="password"
                    :type="pwdType"
                    @keyup.enter.native="handleLogin"
                    v-model="loginForm.password"
                    autoComplete="on"
                    placeholder="请输入密码">
            <span slot="prefix">
              <svg-icon icon-class="password" class="color-main"></svg-icon>
            </span>
            <span slot="suffix" @click="showPwd">
              <svg-icon icon-class="eye" class="color-main"></svg-icon>
            </span>
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px; text-align: center">
          <el-button style="width: 45%" type="primary" :loading="loading" @click.native.prevent="handleLogin">
            登录
          </el-button>
          <el-button style="width: 45%" type="primary" @click.native.prevent="handleTry">
            获取体验账号
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import {isvalidUsername} from '@/utils/validate'
import {setSupport, getSupport, setCookies, getCookies} from '@/utils/support'
import login_center_bg from '@/assets/images/login_center_bg.png'
export default {
  name: 'login',
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!isvalidUsername(value)) {
        callback(new Error('请输入正确的用户名'))
      } else {
        callback()
      }
    }
    const validdatePass = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('密码不得小于3位'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: ''
      },
      loginRules: {
        username: [{required: true, trigger: 'blur', validator: validateUsername}],
        password: [{required: true, trigger: 'blur', validator: validatePass}]
      },
      pwdType: 'password',
      loading: false,
      login_center_bg,
      dialogVisible: false,
      supportDialogVisible: false
    }
  },
  created() {
    this.loginForm.username = getCookie("username")
    this.loginForm.password = getCookie("password")
    if(this.loginForm.username === undefined || this.loginForm.username == null || this.loginForm.username === ''){
      this.loginForm.username = 'admin'
    }
    if(this.loginForm.password === undefined || this.loginForm.password == null || this.loginForm.password === ''){
      this.loginForm.password = ''
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if(valid) {
          this.loading = true
          this.$store.dispatch('login',this.loginForm).then(() => {
            this.loading = false
            setCookie("username", this.loginForm.username, 15)
            setCookie("password", this.loginForm.password, 15)
            this.$router.push({path: '/'})
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('参数验证不合法！')
          return false
        }
      })
    },
    showPwd() {
      if(this.pwdType === 'password') {
        this.pwdType = ''
      } else {
        this.pwdType = 'password'
      }
    },
    handleTry() {
      this,dialogVisible = true
    }

  }
}
</script>

<style lang="stylus" scoped>
.login-form-layout
  position: absolute
  left: 0
  right: 0
  width: 360px
  margin: 140px auto
  border-top: 10px solid #409EFF
  .login-title
    text-align: center
</style>
