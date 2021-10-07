<template lang="">
  <div class="img404">
    <router-link to="/">
      <el-button>返回首页</el-button>
    </router-link>
  </div>
</template>
<script>
  export default {

  }
</script>
<style scoped>
  .img404 {
    position: relative;
    padding: 0;
    width: 100%;
    height: 100%;
    background: url('~assets/img/404.jpg') no-repeat center;
  }
  .router-link-active{
    position: absolute;
    top: 68%;
    left: calc(50% - 180px);
  }
  .el-button{
    width: 300px;
    height: 100px;
    color: aliceblue;
    background-color:rgb(122, 112, 112);
    border-radius:50px 50px;
    border:2px solid rgb(187, 180, 180);
  }
</style>