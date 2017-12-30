const gulp   = require('gulp');
const util   = require('gulp-util');
const config = require('../config');
const del    = require('del');

gulp.task('clean', function () {
  return del([config.dest.root])
    .then(function (paths) {
      if (paths.length) console.log(`${paths} - cleared`);
    });
});