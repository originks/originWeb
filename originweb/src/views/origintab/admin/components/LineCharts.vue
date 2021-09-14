<template lang="">
  <div class="LineCharts" ref="myCharts">

  </div>
</template>
<script>
  import echarts from 'echarts'

  export default {
    data() {
      return{
        mychart: null
      }
    },
    props: {
      width: {
        type: String,
        default: '100%'
      },
      height: {
        type: String,
        default: '350px'
      },
      lineChartData: {
        type: Object,
        required: true
      }
    },
    mounted() {

    },
    methods: {
      initEcharts() {
        this.mychart = echarts.init(this.$refs.myCharts)
      }
    },
  }
</script>
<style lang="">

</style>