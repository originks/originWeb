<template lang="">
  <div class="header">
    <div class="header_1">
      <a href="javascript:;" class="logeLink"><img src="./ironman.jpg" alt="">ORIGIN WEB</a>
    </div>
    <div class="header_r">
      <div class="headr_d1">
        <side-collapse></side-collapse>
      </div>
    </div>
  </div>
</template>
<script>
  import SideCollapse from 'components/commen/layout/SideCollapse'
  export default {
    components: {
      SideCollapse,
    }
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

  .header_1 {
    width: 200px;
    height: 100%;
    float: left;
    overflow: hidden;
    background-color: rgb(84, 163, 177);
    /* 使得设置的border向内部,使得width,height由padding,border,内容共同组成 */
    box-sizing: border-box;
    border-bottom: 1px solid rgb(104, 97, 97);
  }

  .logeLink {
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

  .logeLink img {
    position: relative;
    top: -3px;
    vertical-align: middle;
    line-height: 50px;
    border-radius: 50%;
    height: 30px;
    width: 30px;
    margin-right: 8px;
  }
</style>