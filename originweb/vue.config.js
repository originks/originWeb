module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'src': '@',
        'assets': '@/assets',
        'components': '@/components',
        'views': '@/views',
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    devtool: 'source-map'
  },
  devServer: {
    before(app) {//模拟接口
      app.get('/players', (req, res) => {
        setTimeout(() => {
          res.json({data:[{
            name: 'james'
          }, {
            name: 'carry'
          }]})
        }, 1000);
      })
    }
  }
}