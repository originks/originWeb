<template lang="">
  <div class="homeBox">
    <component :is=componentOn></component>
  </div>
</template>
<script>
  import adminComponent from "./admin/Admin";
  import userComponent from "./user/User";
  import {
    mapGetters
  } from "vuex"
  export default {
    computed: {
      ...mapGetters(['userName']),
      componentOn() {
        if (this.userName == "admin") {
          return adminComponent
        } else {
          return userComponent
        }
      }
    },
    components: {
      adminComponent,
      userComponent
    }
  }
</script>
<style lang="scss">
  .homeBox{
    padding: 36px 30px;
    background: #f0f3f4;
  }
</style>