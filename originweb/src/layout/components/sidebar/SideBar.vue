<template>
  <div class="sideBar">
    <el-menu :default-active="activeMenu" background-color="#686161" router text-color="#b5b6bd"
      active-text-color="rgb(79, 148, 212)" mode="vertical" :collapse-transition="false" :collapse="opened">
      <sidebar-item v-for="item in routes" :key="item.path" :item="item" :basePath="item.path">
      </sidebar-item>
      <el-menu-item>
        <template slot="title">
          <div @click="toGitee">
            <i class="el-icon-link"></i>
            <span>项目链接</span>
          </div>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  import SidebarItem from './SidebarItem'
  import {
    mapGetters
  } from 'vuex'
  export default {
    components: {
      SidebarItem
    },
    computed: {
      activeMenu() {
        return this.$route.path
      },
      ...mapGetters(['routes', 'opened'])
    },
    methods: {
      toGitee() {
        window.open("https://gitee.com/originks/origin-web.git")
      }
    },
  }
</script>

<style lang="scss">
  .sideBar {
    width: 200px;
    height: calc(100% - 50px);
    position: fixed;
  }

  .el-menu {
    height: 100%;
    width: 100%;
  }

  /* 
  .el-scrollbar {
    height: 100%;

    .el-scrollbar__wrap {
      overflow-x: hidden !important;
    }
  } */
</style>