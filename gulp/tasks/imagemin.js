module.exports = function(gulp, $, config) {
  return function() {
    return gulp
      .src(`${config.dest.img}/*.{jpg,jpeg,png,gif,svg}`)
      .pipe($.plumber())
      .pipe($.imagemin([
        $.imagemin.gifsicle({ interlaced: true }),
        $.imagemin.mozjpeg({ quality: 75, progressive: true }),
        $.imagemin.optipng({ optimizationLevel: 5 }),
        $.imagemin.svgo({
          plugins: [
            { removeDoctype: true },
            { removeDesc: true },
            {
              cleanupIDs: {
                remove: true
              }
            },
            { mergePaths: false },
            { removeStyleElement: true },
            { cleanupNumericValues: { floatPrecision: 2 } },
            { removeTitle: true },
            { collapseGroups: true },
            {
              removeAttrs: {
                attrs: ['(class|style|data([a-z\-])+)']
              }
            }
          ]
        })
      ]))
      .pipe(gulp.dest(config.dest.img));
  }
}
