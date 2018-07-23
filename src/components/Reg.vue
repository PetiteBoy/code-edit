<template>
    <div class="login-page">
        <div class="title">用户注册</div>
        <div class="row">
            <el-input v-model="loginData.username" placeholder="请输入你的用户名"></el-input>
        </div>
        <div class="row">
            <el-input v-model="loginData.password" placeholder="请输入你的密码" type="password"></el-input>
        </div>
        <div class="row">
            <el-button type="primary" @click="reg()">注册</el-button>
            <el-button type="primary" @click="login()">前往登录</el-button>
        </div>
    </div>
</template>
<script>
import editCodeService from '../service/editService.js'
export default {
  name: 'login',
  data() {
    return {
      loginData: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    reg() {
      if (this.loginData.username && this.loginData.password) {
        editCodeService
          .userLogin(this.loginData)
          .then(res => {
            let result = res.data
            if (result.code === '0000') {
              this.$message({
                message: '注册成功',
                type: 'success'
              })
            } else {
              this.$message({
                message: '服务异常',
                type: 'warning'
              })
            }
          })
          .catch(err => {
            this.$message({
              message: '服务异常',
              type: 'warning'
            })
            throw err
          })
      } else {
        this.$message({
          message: '请输入用户名密码',
          type: 'warning'
        })
      }
    },
    login() {
      this.$router.push('/login')
    }
  }
}
</script>
<style>
.login-page {
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
}
.login-page .title {
  font-size: 20px;
  line-height: 30px;
  text-align: center;
}
.login-page .row {
  margin-top: 10px;
  text-align: center;
}
</style>

