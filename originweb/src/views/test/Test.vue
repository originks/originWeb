<template>
  <div class="test">
    <h2>测试</h2>
    <child1 msg="give it to son" ref="dad" />
    <button @click="showRefs">refs使用</button>
    <!-- 必会的api -->
    <apis></apis>
    <!-- form表单 -->
    <forms class="forms"></forms>
  </div>
</template>
<script>
  import child1 from './components/child1'
  import Forms from './form'
  import Apis from './apis'
  export default {
    data() {
      return {
        name: 'James'
      }
    },
    render(h) {
      return h(
        'h3', this.name
      )
    },
    components: {
      child1,
      Forms,
      Apis
    },
    methods: {
      showRefs() {
        alert(this.$refs.dad.name)
      }
    },
  }
</script>
<style lang="scss" scoped>
  .test>div {
    border-top: 2px solid black;
    margin-top: 10px;
  }

  .forms {
    border: 2px solid rgb(0, 132, 255) !important;
    border-radius: 10px;
    padding: 10px;
  }
</style>