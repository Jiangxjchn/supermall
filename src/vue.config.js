module.exports = {
  configureWebpack:{
    resolve:{
      alias: {
        //路径别名
        '@':'src',
        'common':'@/common',
        'components':'@/components',
        'network': '@/network',
        'assets':'@/assets',
        'views':'@/views',
      }
    }
  }
};