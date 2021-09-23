<template>
  <div class="login">
    <div class="loginBox">
      <h2 class="loginH2"><strong>Go To Mars</strong></h2>
      <div class="loginCon">
        <div class="titleDiv">
          <h3>Take Off Just Now</h3>
          <p>Enter your username and password to log on:</p>
          <i class="el-icon-key"></i>
        </div>
        <el-form ref="loginForm" :rules='rules' :model="ruleForm">
          <el-form-item prop="user">
            <el-input v-model='ruleForm.user' placeholder="请输入账户" prefix-icon="el-icon-user"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input show-password v-model="ruleForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock">
            </el-input>
          </el-form-item>
          <el-button type="primary" @click="loginYz('loginForm')" class="loginBtn">登录</el-button>
        </el-form>
      </div>

    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        ruleForm: {
          user: 'admin',
          password: '123456'
        },
        rules: {
          user: [{
              required: true,
              message: '请输入用户名',
              trigger: 'blur'
            },
            {
              min: 3,
              max: 15,
              message: '长度在3到5个字符',
              trigger: 'blur'
            }
          ],
          password: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          }]
        }
      }
    },
    methods: {
      loginYz(form) {
        this.$refs[form].validate(valid => {
          if (valid) {
            this.$store.dispatch('user/_login', this.ruleForm)
              .then(res => {
                if (res.data.success) {
                  this.$router.push(this.$route.query.redirect)
                  // this.$router.push('/')
                }
              })
              
          } else {
            return
          }
        })

      }
    },
  }
</script>
<style scoped lang="scss">
  .login {
    height: 100%;
    width: 100%;
    background: url(~@/assets/pageBg/loginBg.jpg);
    background-size: 100% 100%;
    overflow: hidden;
  }

  .loginBox {
    height: 455px;
    width: 550px;
    margin: 0px auto;
    position: relative;
    top: 50%;
    margin-top: -287px;
  }

  .loginH2 {
    font-size: 38px;
    color: #fff;
    text-align: center;
  }

  .loginCon {
    margin-top: 30px;
    background-color: #FFF;
    border-radius: 4px;
  }

  .titleDiv {
    padding: 0 28px;
    height: 120px;
    position: relative;

    h3 {
      padding-top: 22px;
      color: #555;
      font-weight: initial;
      font-size: 22px;
    }

    p {
      font-size: 15px;
      color: #888;
    }

    i {
      position: absolute;
      font-size: 65px;
      top: 29px;
      right: 27px;
      color: #ddd;
    }
  }

  .el-form {
    padding: 25px 25px 30px 25px;
    background-color: #eee;
    border-radius: 0 0 4px 4px;
  }

  .loginBtn {
    width: 100%;
  }
</style>