<template lang="">
  <div class="kFormItem">
    <label v-if="$attrs.label">{{$attrs.label}}</label>
    <slot></slot>
    <!-- 校验信息 -->
    <p class="infoWarning" v-if="error">WARN:{{error}}</p>
  </div>
</template>
<script>
  import Schema from 'async-validator'
  export default {
    inheritAttrs: false,
    data() {
      return {
        error: ''
      }
    },
    props: {
      prop: {
        type: String,
      }
    },
    inject: ['form'],
    mounted() {
      // 打开界面就显示校验提示
      if(this.prop!=undefined){
        this.validate();
      }
      this.$on('validate', ()=>{
        this.validate();
      })
    },
    methods: {
      validate() {
        const rules = this.form.rules[this.prop]
        const value = this.form.data[this.prop]
        const desc = {
          [this.prop]: rules
        }
        const schema = new Schema(desc)
        return schema.validate({
          [this.prop]: value
        }, errors => {
          if (errors) {
            this.error = errors[0].message
          }else{
            this.error=""
          }
        })
      }
    },
  }
</script>
<style lang="scss" scoped>
  .kFormItem{
    margin: 5px 0px;
  }
  .infoWarning{
    display: inline-block;
    margin: 0px 5px;
    border-radius: 10px 10px;
    border: 2px solid rgb(201, 86, 86);
    height: 20px;
    line-height: 20px;
    width: 150px;
    padding-left: 5px;
    font-size: 10px;
  }
  label{
    width: 80px;
    display: inline-block;
  }
</style>