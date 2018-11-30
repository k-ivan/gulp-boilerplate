const webpackConfig = require('../../webpack.config').createConfig;
const webpackStream = require('webpack-stream');
const named = require('vinyl-named');

module.exports = function(gulp, $, config) {
  return function (callback) {
    return gulp.src(`${config.src.js}/*.js`)
      .pipe($.plumber())
      .pipe(named())
      .pipe(
        webpackStream(webpackConfig(config.env))
      )
      .pipe(gulp.dest(config.dest.js))
  }
}
