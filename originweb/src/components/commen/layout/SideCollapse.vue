<template lang="">
  <div class="sideCollapse">
    <i :class="{ 'el-icon-s-unfold': opened, 'el-icon-s-fold': !opened }" @click="taggleOpen"></i>
  </div>
</template>
<script>
  import {
    mapGetters
  } from 'vuex'
  export default {
    computed: {
      ...mapGetters(['opened'])
    },
    methods: {
      taggleOpen() {
        this.$store.commit('SET_OPENED', !this.opened)
      }
    },
  }
</script>
<style lang="scss">
  .sideCollapse i {
    font-size: 18px;
    color: #363F44;
    cursor: pointer;
  }
</style>