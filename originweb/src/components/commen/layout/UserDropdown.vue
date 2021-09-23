<template lang="">
  <div>
    <el-dropdown class="userDd">
      <div class="userDrop">
        <span class="userDrop_text">{{userName}}<i class="el-icon-caret-bottom"></i></span>
        <img src="~assets/img/ironman.jpg" alt="用户名">
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>
          <router-link to="/"><i class="el-icon-s-home"></i>首页</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <router-link to="/"><i class="el-icon-s-custom"></i>我的主页</router-link>
        </el-dropdown-item>
        <el-dropdown-item>
          <a @click="_loginOut"><i class="el-icon-switch-button"></i>登出</a>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['userName'])
    },
    methods:{
      _loginOut(){
        this.$store.dispatch('user/loginOut')
      }
    }
  }
</script>
<style lang="scss">
  .userDrop {
    height: 50px;

    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      vertical-align: middle;
    }
  }

  .userDrop_text {
    margin-right: 8px;

    i {
      margin-left: 2px;
    }
  }
</style>