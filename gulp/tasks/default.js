const gulp        = require('gulp');
const runSequence = require('run-sequence');
const config      = require('../config');

gulp.task('default', function () {
  runSequence('build:dev', 'watch', 'server');
});