<template>
  <div class="wrapper">
    <m-header></m-header>
    <transition enter-active-class="animated bounceInLeft" leave-active-class="animated bounceOutRight">
      <notificat-bar v-show="msgIsShow"></notificat-bar>
    </transition>
    <div class="wrapper_con">
      <side-bar></side-bar>
      <page-main></page-main>
    </div>

  </div>
</template>
<script>
  import {
    mapGetters
  } from "vuex"

  import MHeader from "./components/header/Header"
  import SideBar from "./components/sidebar/SideBar"
  import PageMain from "./components/pageMain/PageMain"

  import NotificatBar from "components/commen/layout/NotificatBar"

  export default {
    components: {
      MHeader,
      NotificatBar,
      SideBar,
      PageMain,
    },
    computed: {
      ...mapGetters(["msgIsShow"])
    },
  }
</script>
<style>
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .wrapper_con {
    width: 100%;
    height: calc(100% - 50px);
    padding-top: 50px;
  }
</style>