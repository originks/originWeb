<template lang="">
  <div v-if='!item.hidden'>
    <template v-if="hasOnlyChild(item)">
      <el-menu-item :index='basePath'>
        <i :class="item.children[0].meta.icon?item.children[0].meta.icon:''"></i>
        <span slot="title">{{item.children[0].meta.title}}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else >
      <template slot="title">
        <i :class="item.meta.icon?item.meta.icon:''"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <el-menu-item v-for="childItem in item.children" :index="resolvePath(childItem)">
        {{childItem.meta.title}}
      </el-menu-item>
    </el-submenu>
  </div>
</template>
<script>
  export default {
    computed:{
      resolvePath(){
        return function(childItem){
          return this.basePath+'/'+childItem.path
        }
      }
    },
    props: {
      item: {
        type: Object,
        required: true
      },
      basePath: {
        type: String,
        default: ''
      }
    },
    methods: {
      hasOnlyChild(item) {
        if (item.children.length <= 1) {
          return true
        }
        return false
      }
    },
  }
</script>
<style lang="">

</style>