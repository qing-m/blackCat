const path = require('path')
const env = process.env.VUE_APP_ENV
let BASE_URL = ''

switch (env) {
  case 'production':
    BASE_URL = '/admin-blog/'
    break
  case 'test':
    BASE_URL = '/admin-blog/'
    break
  default:
    BASE_URL = '/'
}

function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  publicPath: BASE_URL,
  outputDir: 'admin-blog',
  css: {
    loaderOptions: {
      stylus: {
        data: '@import \'~@/stylus/variable.styl\'',
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('routers', resolve('src/routers'))
      .set('images', resolve('src/images'))
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
