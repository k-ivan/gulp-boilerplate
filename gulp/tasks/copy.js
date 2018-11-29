module.exports = function(gulp, $, config) {
  const files = [
    `${config.src.fonts}/*.{woff,woff2}`,
    `${config.src.img}/**/*.{jpg,png,jpeg,svg,gif,ico,webp}`,
    `${config.src.media}/**/*.{mp4,mp3}`
  ];

  return function() {
    return gulp.src(files, {
      base: config.src.root
    })
      .pipe($.newer(config.dest.root))
      .pipe(gulp.dest(config.dest.root));
  }
}
