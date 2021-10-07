<template lang="">
  <div class="kInput">
    <input  @input="onInput" v-bind="$attrs">
  </div>
</template>
<script>
  export default {
    inheritAttrs:false,
    // props: {
    //   value: {
    //     type: String,
    //     default: ''
    //   }
    // },
    // 因为使用了$attrs所以可以不用props
    methods: {
      onInput(e) {
        this.$emit('input', e.target.value)
        this.$parent.$emit('validate')
      }
    },
  }
</script>
<style lang="scss" scoped>
  input{
    width: 200px;
    height: 30px;
    line-height: 30px;
    border-radius: 5px;
    border: 2px solid rgb(0, 162, 255);
    padding-left: 5px;
}
.kInput{
  display: inline-block;
}
</style>