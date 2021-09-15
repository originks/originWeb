<template lang="">
  <div class="login">
    <div class="loginBox">
      <h2 class="loginH2"><strong>Go To Mars</strong></h2>
      <div class="loginCon">
        <div class="titleDiv">
          <h3>Take Off Just Now</h3>
          <p>Enter your username and password to log on:</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {

  }
</script>
<style lang="scss">
  .login {
    height: 100%;
    width: 100%;
    background: url(~@/assets/pageBg/loginBg.jpg);
    background-size: 100% 100%;
    overflow: hidden;
  }

  .loginBox {
    height: 455px;
    width: 550px;
    margin: 0px auto;
    position: relative;
    top: 50%;
    margin-top: -287px;
  }

  .loginH2 {
    font-size: 38px;
    color: #fff;
    text-align: center;
  }

  .loginCon {
    margin-top: 30px;
    background-color: #FFF;
    border-radius: 4px;
  }
  .titleDiv{
    padding: 0 28px;
  }
</style>