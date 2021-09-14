<template lang="">
  <div class="LineCharts" ref="myCharts" :style="{width:width,height:height}">

  </div>
</template>
<script>
  import echarts from 'echarts'
  import resize from '@/mixins/resize'
  require('echarts/theme/macarons')
  export default {
    mixins: [resize],
    data() {
      return {
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
    watch: {
      lineChartData: {
        deep: true,
        handler(val) {
          this._setOption(val.inPrice, val.outPrice)
        }
      }
    },
    mounted() {
      this.$nextTick().then(() => {
        this.initEcharts()
      })
    },
    methods: {
      initEcharts() {
        this.mychart = echarts.init(this.$refs.myCharts, 'macarons')
        if (Object.keys(this.lineChartData).length > 0) {
          this._setOption(this.lineChartData.inPrice, this.linceChartData.outPrice)
        }
      },
      _setOption(inprice = [], outprice = []) {
        this.mychart.setOption({
          title: {
            text: "Statistices",
            left: "16"
          },
          tooltip: {

          },
          legend: {
            data: ['收入', '支出']
          },
          grid: {
            left: '20',
            right: '20',
            bottom: '3',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月']
          }],
          yAxis: [{
            type: 'value'
          }],
          series: [{
              name: '收入',
              type: 'line',
              // areaStyle: {
              //   color: '#f4516c',
              //   opacity: 0.3
              // },
              itemStyle: {
                color: '#f4516c'
              },
              lineStyle: {
                color: '#f4516c'
              },
              smooth: true,
              data: inprice,
              animationDuration: 2800,
              animationEasing: 'quadraticOut'
            },
            {
              name: '支出',
              type: 'line',
              // areaStyle: {
              //   color: '#55a8fd',
              //   opacity: 0.3
              // },
              itemStyle: {
                color: '#55a8fd'
              },
              lineStyle: {
                color: '#55a8fd'
              },
              smooth: true,
              data: outprice,
              animationDuration: 2800,
              animationEasing: 'quadraticOut'
            }
          ]
        })
      }
    },
  }
</script>
<style lang="">

</style>