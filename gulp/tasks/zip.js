module.exports = function(gulp, $, config) {
  return function () {
    return gulp.src(`${config.dest.root}/**/*`)
      .pipe($.zip('app.zip'))
      .pipe(gulp.dest(config.dest.root))
  }
}
