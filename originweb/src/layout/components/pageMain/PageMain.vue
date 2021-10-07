<template lang="">
  <div class="pageMain">
    <transition name="fade-page" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss">
  .pageMain {
    height: 100%;
    margin-left: 200px;

    &>div {
      padding: 36px 30px;
      background:#f0f3f4
    }
  }
</style>