<template lang="">
  <div class="origintab">
    <!-- cardList -->
    <el-row class="infoCards">
      <el-col :span=6>
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to class="cardItem_p0 color-green1" :startVal="startVal" :endVal="vistors" :duration="2000">
            </count-to>
            <p class="cardItem_p1">Total Visitors</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user color-green1"></i>
          </div>
        </div>
      </el-col>
      <el-col :span=6>
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to class="cardItem_p0 color-blue" :startVal="startVal" :endVal="message" :duration="2000">
            </count-to>
            <p class="cardItem_p1">Message</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-s-comment color-blue"></i>
          </div>
        </div>
      </el-col>
      <el-col :span=6>
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to class="cardItem_p0 color-red" :startVal="startVal" :endVal="order" :duration="2000">
            </count-to>
            <p class="cardItem_p1">Total Order Placeed</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user color-red"></i>
          </div>
        </div>
      </el-col>
      <el-col :span=6>
        <div class="cardItem">
          <div class="cardItem_txt">
            <count-to class="cardItem_p0 color-green2" :startVal="startVal" :endVal="profit" :duration="2000">
            </count-to>
            <p class="cardItem_p1">Total Profit</p>
          </div>
          <div class="cardItem_icon">
            <i class="el-icon-user color-green2"></i>
          </div>
        </div>
      </el-col>

    </el-row>
    <!-- cardList end -->

  </div>
</template>
<script>
  import CountTo from 'vue-count-to'
  export default {
    data() {
      return {
        startVal: 0,
        vistors: 0,
        message: 0,
        order: 0,
        profit: 0,
        tableData: [],
        lineChartData: {},
        barData: {}
      }
    },
    created() {
      this._getAllData()
    },
    components: {
      CountTo
    },
    methods: {
      _getAllData() {
        console.log(1);
      }
    },
  }
</script>
<style lang="scss">
  .infoCards .el-col {
    padding: 0 20px;
  }

  .cardItem {
    background-color: #FFF;
    height: 108px;
    color: #666;
    box-shadow: 0 0 10px #e2e2e2;
  }

  .cardItem_txt {
    float: left;
    margin: 26px 0 0 20px;
  }

  .cardItem_p0 {
    font-weight: bold;
    font-size: 20px;
  }

  .cardItem_p1 {
    font-size: 16px;
  }

  .color-green1 {
    color: #40c9c6 !important;
  }

  .color-blue {
    color: #36a3F7 !important;
  }

  .color-red {
    color: #f4516c !important;
  }

  .color-green2 {
    color: #34bfa3 !important;
  }

  .cardItem_icon {
    float: right;
    margin: 24px 20px 0px 0px;

    i {
      font-size: 55px;
    }
  }
</style>