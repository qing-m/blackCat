const path = require('path')
const env = process.env.VUE_APP_ENV
let BASE_URL = ''

switch (env) {
  case 'production':
    console.log(env)
    BASE_URL = '/black-cat/'
    break
  case 'test':
    console.log(env)
    BASE_URL = '/black-cat/'
    break
  default:
    console.log(env)
    BASE_URL = '/'
}

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: BASE_URL,
  outputDir: 'black-cat',
  chainWebpack(config) {
    config.resolve.alias
      .set('components', resolve('src/components'))
      .set('views', resolve('src/views'))
      .set('common', resolve('src/common'))
      .set('api', resolve('src/api'))
      .set('router', resolve('src/routers'))
  }
}
