const webpack = require('webpack');
const path = require('path');
const util = require('gulp-util');
const config = require('./gulp/config');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

function createConfig(env) {
  let webpackConfig;

  if (env === undefined) {
    env = process.env.NODE_ENV;
  }


  webpackConfig = {
    mode: env,
    context: path.join(__dirname, config.src.js),
    entry: {
      // TODO: if needed
      // vendor: ['jquery'],
      app: './app.js',
    },
    output: {
      path: path.join(__dirname, config.dest.js),
      filename: '[name].js',
      publicPath: 'js/',
    },
    devtool: env !== 'production' ? '#cheap-module-eval-source-map' : false,
    // TODO: if needed
    optimization: {
      // splitChunks: {
      //   cacheGroups: {
      //     vendor: {
      //       test: /node_modules/,
      //       name: "vendor",
      //       chunks: "initial",
      //       enforce: true
      //     }
      //   }
      // }
    },
    plugins: [
      // TODO: if needed
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        analyzerPort: 4000,
        openAnalyzer: false,
      })
    ],
    resolve: {
      extensions: ['.js']
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'babel-loader',
          exclude: [
            path.resolve(__dirname, 'node_modules'),
          ],
        }],
    },
  };

  // if (isProduction) {
  //   webpackConfig.plugins.push(
  //     new webpack.LoaderOptionsPlugin({
  //       minimize: true,
  //     }),
  //     new webpack.optimize.UglifyJsPlugin({
  //       compress: {
  //         warnings: false,
  //       },
  //     })
  //   );
  // }

  return webpackConfig;
}

module.exports = createConfig();
module.exports.createConfig = createConfig;
