module.exports = function(gulp, $, config) {
  return function html() {
    return gulp.src(`${config.src.html}/*.html`)
      .pipe($.plumber())
      .pipe($.nunjucksRender({
        path: [config.src.html, config.dest.html]
      }))
      .pipe($.prettify({
        indent_size: 2,
        wrap_attributes: 'auto', // 'force'
        preserve_newlines: false,
        unformatted: ['pre', 'code'],
        end_with_newline: true
      }))
      .pipe(gulp.dest(config.dest.root));
  }
}
