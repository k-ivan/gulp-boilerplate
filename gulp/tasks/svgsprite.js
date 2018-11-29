module.exports = function(gulp, $, config) {
  return function() {
    return gulp
    .src(`${config.src.iconsSvg}/*.svg`)
    .pipe($.plumber())
    .pipe($.svgmin({
      js2svg: {
        pretty: true
      },
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
            // attrs: ['(class|xmlns|style|data([a-z\-])+)', 'svg:(width|height)']
            attrs: ['(class|xmlns|style|data([a-z\-])+)']
          }
        }
      ]
    }))
    .pipe($.rename(function (path) {
      path.basename = path.basename.toLowerCase().replace(/(\s|_)+/g, '-');
      return path;
    }))
    .pipe($.svgSprites({
      mode: "symbols",
      // selector: "%f",
      svg: {
        symbols: 'symbol.svg'
      },
      preview: config.production ? false : { symbols: 'demo_sprite.html' }
    }
    ))
    // .pipe(svgStore({inlineSvg: true}))
    .pipe(gulp.dest(config.dest.icons));
  }
}