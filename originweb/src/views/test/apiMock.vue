<template lang="">
  <div>
    <li v-for="item in players">{{item}}</li>
  </div>
</template>
<script>
  import {
    getMockTestPlay
  } from '@/api/origintab.js'
  import axios from 'axios'
  export default {
    data() {
      return {
        players: []
      }
    },
    created() {
      // getMockTestPlay().then((res)=>{
      //   console.log(res);
      // })
      axios.get('/players').then((res)=>console.log(res))
    },
  }
</script>
<style lang="">

</style>