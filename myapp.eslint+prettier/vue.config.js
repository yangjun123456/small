// 配置文档 https://cli.vuejs.org/zh/config/#vue-config-js
// 默认loader https://github.com/vuejs/vue-cli/blob/dev/packages/%40vue/cli-service/lib/config/base.js
module.exports = {
  publicPath: './', // 打包项目起始路径设置为相对路径
  css: {
    sourceMap: true // 开启 CSS source maps
  },
  outputDir: 'dist', // 打包输出路径
  filenameHashing: true, // 文件名hash
  pages: {
    // pages 里配置的路径和文件名在你的文档目录必须存在 否则启动服务会报错
    index: {
      // 除了 entry 之外都是可选的
      entry: 'src/main.ts', // page 的入口,每个“page”应该有一个对应的 JavaScript 入口文件
      template: 'public/index.html', // 模板来源
      filename: 'index.html', // 在 dist/index.html 的输出
      title: 'test' // 当使用 title 选项时,在 template 中使用：<title><%= htmlWebpackPlugin.options.title %></title>
    }
  },
  chainWebpack: config => {
    // 修改默认字体loader 添加ttc
    config.module.rule('fonts').test(/\.(woff2?|eot|ttf|otf|ttc)(\?.*)?$/i);
  },
  // 开发环境server配置
  devServer: {
    // 本地代理，替换/proxy开头的接口 对应开发环境请求URL的"/proxy"路径
    proxy: {
      '/proxy': {
        target: 'http://ai-dps-test.lenovo.com/',
        changeOrigin: true,
        pathRewrite: {
          '^/proxy': '/'
        }
      }
    }
  }
};
