<template lang="">
  <div class="apis">
    <h4>vue api</h4>
    <h5>$set</h5>
    <input type="text" v-model="value">
    <button @click="add">add</button>
    <div>
      {{arr.name}}--{{arr.age|doller}}
    </div>
    <h4>ref</h4>
    <input type="text" ref="inp">
    <div>
      <messages ref="messages">添加成功!</messages>
      <el-button @click="msgAdd">添加</el-button>
    </div>

    <div id="demo">
      <button v-on:click="show = !show">
        Toggle
      </button>
      <transition name="fade">
        <p v-if="show">hello</p>
      </transition>
    </div>

  </div>
</template>
<script>
  import Messages from './Messages'
  export default {
    filters: {
      doller(val) {
        return "￥" + val
      }
    },
    data() {
      return {
        value: "",
        arr: {
          name: 1
        },
        show: true
      }
    },
    mounted() {
      this.$refs.inp.focus()
    },
    components: {
      Messages
    },
    methods: {
      add() {
        // this.arr.age=this.value//页面无法改变
        // this.$set(this.arr,'age',this.value)
      },
      msgAdd() {
        this.$refs.messages.toggle()
      }
    },
    watch: {
      value: {
        handler: function (newValue) {
          this.arr.age = newValue
        },
        deep: true
      }
    },
  }
</script>
<style lang="scss">
  .apis {
    background: #e2e2e2;
  }
</style>