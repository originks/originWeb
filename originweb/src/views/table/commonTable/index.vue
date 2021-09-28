<template>
  <div class="className">
    <el-card>
      <div slot="header">
        <span>基础表格</span>
      </div>
      <el-table :data="tableData" border style="width: 100%;">
        <el-table-column prop='data' label='Data'></el-table-column>
        <el-table-column prop='name' label='Name'></el-table-column>
        <el-table-column prop='address' label='Address'></el-table-column>
      </el-table>
    </el-card>
    <el-card class="mttop30">
      <div slot="header">
        <span>带分页表格</span>
      </div>
      <el-table :data="tablePage" border stripe>
        <el-table-column prop="num" label="序号" width="120"></el-table-column>
        <el-table-column prop="id" label="ID#"></el-table-column>
        <el-table-column prop="name" label="产品名称"></el-table-column>
        <el-table-column prop="price" label="价格"></el-table-column>
        <el-table-column prop="quantity" label="数量"></el-table-column>
        <el-table-column prop="status" label="状态">
          <template slot-scope="scope">
            <el-tag :type="scope.row.status|tagClass">
              {{scope.row.status|statusText}}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination layout="total,sizes,prev,pager,next" background :total="total" :page-sizes="pageSizes"
        :page-size="pageSize" class="pagesContent" :current-page="currentPage" @size-change="handleSize"
        @current-change="handlePage">
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
  import {
    getPageTab1
  } from '@/api/table'

  export default {
    data() {
      return {
        tableData: [{
          data: '2021-9-26',
          name: 'James',
          address: 'Lakers'
        }, {
          data: '2021-9-27',
          name: 'Carry',
          address: 'Gloders'
        }, {
          data: '2021-9-28',
          name: 'KD',
          address: 'NETS'
        }],
        tablePage: [],
        total: 0,
        pageSizes: [10, 20, 30, 40],
        pageSize: 10,
        currentPage: 1
      }
    },
    created() {
      this._getPageTab1(1, 10)
    },
    filters:{
      tagClass(val){
        if(val==undefined){
          return
        }
        if(val==0){
          return 'success'
        }else if(val==1){
          return 'waning'
        }else{
          return 'danger'
        }
      },
      statusText(val){
        if(val==undefined){
          return
        }
        if(val==0){
          return '已完成'
        }else if(val==1){
          return '进行中'
        }else{
          return '已取消'
        }
      }
    },
    methods: {
      _getPageTab1(current, size) {
        getPageTab1({
          currentPage: current,
          pageSize: size
        }).then((res) => {
          this.tablePage = res.data.tableList
          this.total = res.data.total
        })
      },
      handleSize(val) {
        this.pageSize = val
        this._getPageTab1(this.currentPage, val)
      },
      handlePage(val) {
        this.currentPage = val
        this._getPageTab1(val, this.pageSize)
      }
    },
  }
</script>
<style lang="scss">
  .mttop30 {
    margin-top: 30px;
  }

  .pagesContent {
    float: right;
    margin-top: 30px;
  }
</style>