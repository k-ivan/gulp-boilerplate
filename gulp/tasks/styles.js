module.exports = function(gulp, $, config) {
  return function styles() {
    return gulp
      .src(`${config.src.sass}/*.{sass,scss}`)
      .pipe($.plumber())
      .pipe($.if(!config.production, $.sourcemaps.init()))
      .pipe($.sass({
        // outputStyle: config.production ? 'compressed' : 'expanded', // nested, expanded, compact, compressed
        outputStyle: 'expanded',
        precision: 5
      }).on('error', $.sass.logError))
      .pipe($.autoprefixer())
      .pipe($.if(config.production, $.groupCssMediaQueries()))
      .pipe($.if(config.production, $.csso()))
      .pipe($.if(!config.production, $.sourcemaps.write('./')))
      .pipe(gulp.dest(config.dest.css));
  }
}
