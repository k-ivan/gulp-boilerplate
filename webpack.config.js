const webpack = require('webpack');
const path = require('path');
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
    /**
     * TODO:
     * by default, the source files are processed by the galp plugin vinyl-named, inside the task
     * if you need to use the entry point in the webpack config, you need to uncomment the lines below
     */
    // entry: {
    //   // TODO: if needed
    //   // vendor: ['jquery'],
    //   app: './app.js',
    // },
    output: {
      path: path.join(__dirname, config.dest.js),
      filename: '[name].js',
      publicPath: 'js/',
    },
    devtool: env === 'development' ? '#cheap-module-eval-source-map' : false,
    // TODO: if needed
    // optimization: {
    //   splitChunks: {
    //     cacheGroups: {
    //       vendor: {
    //         test: /node_modules/,
    //         name: "vendor",
    //         chunks: "initial",
    //         enforce: true
    //       }
    //     }
    //   }
    // },
    plugins: [
      // TODO: if needed
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
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

  if (env === 'production') {
    webpackConfig.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: path.join(__dirname, `${config.dest.html}/report.html`)
      })
    )
  }

  return webpackConfig;
}

module.exports = createConfig();
module.exports.createConfig = createConfig;
