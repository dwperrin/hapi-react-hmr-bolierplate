import Webpack from 'webpack'
import WebpackPlugin from 'hapi-webpack-plugin'
import WebpackConfig from '../../../webpack.config.dev.js'

exports.register = function (server, options, next) {

  const compiler = Webpack(WebpackConfig)

  const assets = {
    publicPath: WebpackConfig.output.publicPath,
    noInfo: true,
    quiet: false
  }

  const hot = {
    overlay: true,
    reload: true,
    noInfo: true,
    quiet: false
  }

  server.register({
    register: WebpackPlugin,
    options: { compiler, assets, hot }
  })

  next()
}

exports.register.attributes = {
  name: 'webpack-middleware'
}
