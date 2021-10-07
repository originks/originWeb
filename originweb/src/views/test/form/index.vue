<template lang="">
  <div>
    <h4>数据校验表单</h4>
    <k-form :rules="rules" :data="userInfo" ref="loginForm">
      <k-form-item label="用户名:" prop="username">
        <k-input FormItem v-model="userInfo.username" placeholder="请输入用户名"></k-input>
      </k-form-item>
      <k-form-item label="密码:" prop="password">
        <k-input type="password" placeholder="请输入密码" v-model="userInfo.password"></k-input>
      </k-form-item>
      <k-form-item>
        <el-button @click="login">提交</el-button>
      </k-form-item>
    </k-form>
  </div>
</template>
<script>
  import KForm from './components/KForm'
  import KFormItem from './components/KFormItem'
  import KInput from './components/KInput'
  export default {
    components: {
      KForm,
      KFormItem,
      KInput
    },
    methods: {
      login() {
        this.$refs["loginForm"].validate((res) => {
          if (res) {
            alert('success')
          } else {
            alert('fail')
          }
        })
      }
    },
    data() {
      return {
        show: false,
        userInfo: {
          username: "james",
          password: ''
        },
        rules: {
          username: [{
            required: true,
            message: "请输入用户名称"
          }],
          password: [{
            required: true,
            message: "请输入密码"
          }]
        }
      }
    },
  }
</script>
<style lang="scss" scoped>
  .k-form {
    border: 1px solid black;
  }
</style>