<template lang="">
  <div>
    <i :class="{ 'el-icon-s-unfold': opened, 'el-icon-s-fold': !opened }" @click="taggleOpen"></i>
    侧边栏

  </div>
</template>
<script>
  export default {
    data() {
      return {
        opened: true
      }
    },
    methods: {
      taggleOpen() {
        this.opened=!this.opened
      }
    },
  }
</script>
<style lang="">

</style>