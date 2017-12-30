const gulp   = require('gulp');
const newer = require('gulp-newer');
const config = require('../config.js');

gulp.task('copy:fonts', function () {
  return gulp
    .src(`${config.src.fonts}/*.{ttf,eot,woff,woff2}`)
    .pipe(newer(config.dest.fonts))
    .pipe(gulp.dest(config.dest.fonts));
});

gulp.task('copy:vendor', function () {
  return gulp.src(`${config.src.vendor}/**/*`)
    .pipe(newer(config.dest.vendor))
    .pipe(gulp.dest(config.dest.vendor));
});

gulp.task('copy:img', function () {
  return gulp.src(`${config.src.img}/**/*.{jpg,png,jpeg,svg,gif}`)
    .pipe(newer(config.dest.img))
    .pipe(gulp.dest(config.dest.img));
});

gulp.task('copy', [
  'copy:img',
  'copy:fonts',
  'copy:vendor'
]);

gulp.task('copy:watch', function () {
  gulp.watch(`${config.src.root}/**/*`, ['copy']);
  // not working
  // gulp.watch([`${config.src.img}/**/*`, `${config.src.fonts}/**/*`], ['copy']);
});
