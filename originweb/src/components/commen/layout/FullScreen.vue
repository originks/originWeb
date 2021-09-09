<template lang="">
  <div>
    <i class="el-icon-full-screen iconFont" @click="toggleFull"></i>
  </div>
</template>
<script>
  import screenfull from "screenfull"
  export default {
    methods: {
      toggleFull() {
        if (!screenfull.enabled) {
          // 如果不允许进入全屏，发出不允许提示
          this.$message({
            message: "暂不不支持全屏 ",
            type: "warning"
          });
          return false;
        }
        screenfull.toggle();
        this.$message({
          message: "全屏切换",
          type: "success"
        });
      }
    },
  }
</script>
<style lang="">

</style>