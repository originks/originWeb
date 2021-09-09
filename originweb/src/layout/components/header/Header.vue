<template lang="">
  <div class="header">
    <div class="header_l">
      <a href="javascript:;" class="logoLink"><img src="./ironman.jpg" alt="">ORIGIN WEB</a>
    </div>
    <div class="header_r">
      <div class="headr_d1">
        <side-collapse class="sidecoll"></side-collapse>
        <bread-crumb class="bread"></bread-crumb>
      </div>
      <div class="headr_d2">
        <ul class="headrUl">
          <li>
            <el-badge is-dot @click.native="toggleMsgShow">
              <i class="el-icon-message-solid iconFont"></i>
            </el-badge>
          </li>
          <li>
            <full-screen></full-screen>
          </li>
          <li>
            <user-dropdown></user-dropdown>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import SideCollapse from 'components/commen/layout/SideCollapse'
  import BreadCrumb from 'components/commen/layout/BreadCrumb'
  import FullScreen from 'components/commen/layout/FullScreen'
  import UserDropdown from 'components/commen/layout/UserDropdown'
  export default {
    components: {
      SideCollapse,
      BreadCrumb,
      FullScreen,
      UserDropdown
    },
    methods: {
      toggleMsgShow() {
        this.$store.commit('SET_MSGISOPEN')
      }
    },
  }
</script>
<style lang="scss">
  .header {
    height: 50px;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 999;
    width: 100%;
  }

  .header_l {
    width: 200px;
    height: 100%;
    float: left;
    overflow: hidden;
    background-color: #686161;
    /* 使得设置的border向内部,使得width,height由padding,border,内容共同组成 */
    box-sizing: border-box;
    border-bottom: 1px solid rgb(104, 97, 97);
  }

  .logoLink {
    display: inline-block;
    font-size: 15px;
    margin-left: 18px;
    color: #fff !important;
    font-weight: bold;
    text-decoration: none;
    display: inline-block;
    height: 100%;
    line-height: 50px;
  }

  .logoLink img {
    position: relative;
    top: -3px;
    vertical-align: middle;
    line-height: 50px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin-right: 8px;
  }



  /* 头部右侧 */
  .header_r {
    height: 100%;
    margin-left: 200px;
    background-color: white;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
    transition: all 0.3;
  }

  .headr_d1 {
    float: left;
    margin-left: 16px;
    height: 100%;
  }

  .sidecoll {
    float: left;
    margin-top: 16px;
  }

  /* 面包屑bread */
  .bread {
    float: left;
    margin: 18px 0 0 20px;
  }

  /* 头部右边 */
  .headr_d2 {
    float: right;
    height: 100%;

    .headrUl {
      height: 100%;

      li {
        float: left;
        height: 100%;
        padding: 0 10px;
        cursor: pointer;
        line-height: 50px;

        .iconFont {
          font-size: 18px;
          height: 50px;
          line-height: 50px;
          vertical-align: initial;
        }

        .el-badge__content.is-fixed.is-dot {
          right: 9px;
          top: 16px;
        }

        &:hover {
          background-color: #f6f8f8;
        }
        &:last-child {
        padding: 0 20px 0 10px;
      }
      }


    }
  }
</style>