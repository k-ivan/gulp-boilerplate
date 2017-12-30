const gulp     = require('gulp');
const plumber  = require('gulp-plumber');
const imagemin = require('gulp-imagemin');
const config   = require('../config');

gulp.task('imagemin', function () {
  return gulp
    .src(`${config.dest.img}/*.{jpg,jpeg,png,gif}`)
    .pipe(plumber())
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.jpegtran({ progressive: true }),
      imagemin.optipng({ optimizationLevel: 3 })
    ]))
    .pipe(gulp.dest(config.dest.img));
});
