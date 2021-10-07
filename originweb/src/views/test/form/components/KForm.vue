<template lang="">
  <div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    provide() {
      return {
        form: this
      }
    },
    props: {
      rules: {
        type: Object,
        default: ''
      },
      data: {
        type: Object,
        required: true
      }
    },
    methods: {
      validate(cb) {
        let tasks = this.$children
        .filter(item => item.prop)
        .map(item =>item.validate())
        Promise.all(tasks).then(() => cb(true)).catch(() => {
          cb(false)
        })
      }
    },
  }
</script>
<style lang="">

</style>