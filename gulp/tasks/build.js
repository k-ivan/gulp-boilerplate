const gulp        = require('gulp');
const runSequence = require('run-sequence');
const config      = require('../config');

function build(cb) {
    runSequence(
        'clean',
        'sprite:svg',
        'sass',
        'webpack',
        'html',
        'copy',
        // 'imagemin',
        cb
    );
}

gulp.task('build', function(cb) {
    config.setEnv('production');
    config.logEnv();
    build(cb);
});

gulp.task('build:dev', function(cb) {
    config.setEnv('development');
    config.logEnv();
    build(cb);
});
