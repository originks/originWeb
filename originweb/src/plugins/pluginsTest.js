import Vue from 'vue'
const myTestPlugin = {
  install: function (Vue, options) {
    Vue.component('pluginsComponent', {
      template: `<span>{{message}}</span>`,
      data() {
        return {
          message: '插件测试'
        }
      },
    })
  }
}

Vue.use(myTestPlugin)