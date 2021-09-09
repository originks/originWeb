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
<style>
  .pageMain{
    /* height: 100%; */
    margin-left: 200px;
  }
</style>