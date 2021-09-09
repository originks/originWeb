<template lang="">
  <div>
    <template>
      <el-menu-item :index='basePath'>
        <i :class="item.children[0].meta.icon?item.children[0].meta.icon:''"></i>
        <span slot="title">{{item.children[0].meta.title}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>
  export default {
    props: {
      item: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: ''
      }
    }
  }
</script>
<style lang="">

</style>