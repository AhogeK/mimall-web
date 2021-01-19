module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  lintOnSave: true,
  productionSourceMap: false
}
