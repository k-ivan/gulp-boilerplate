module.exports = function(gulp, $, config) {
  return function() {
    return gulp.src(`${config.dest.root}/**/*`)
      .pipe($.ghPages());
  }
}
