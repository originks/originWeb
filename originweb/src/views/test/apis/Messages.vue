<template lang="">
  <transition enter-active-class="animated bounceInDown" leave-active-class="animated bounceOutDown">
    <div class="messages" v-if='show'>
      <slot></slot>
      <i class="el-icon-error" @click="closeBox"></i>
    </div>
  </transition>
</template>
<script>
  export default {
    data() {
      return {
        show: false
      }
    },
    methods: {
      toggle() {
        this.show = !this.show
      },
      closeBox() {
        this.show = false
      }
    },
  }
</script>
<style lang="scss" scoped>
  .messages {
    background-color: aquamarine;
    width: 300px;
    height: 50px;
    line-height: 50px;
    font-family: system-ui;
    padding-left: 10px;
    border-radius: 10px;

    i {
      padding-top: 10px;
      float: right;
      font-size: 30px;
    }
  }

  .fade-enter-active {
    animation: bounce-in .5s;
  }

  .fade-leave-active {
    animation: bounce-in 3s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(2);
    }

    100% {
      transform: scale(1);
    }
  }
</style>