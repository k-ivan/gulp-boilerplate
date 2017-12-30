const gulp   = require('gulp');
const config = require('../config');

gulp.task('watch', [
  'copy:watch',
  'sprite:svg:watch',
  'html:watch',
  'sass:watch',
  'webpack:watch'
]);
