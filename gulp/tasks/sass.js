const gulp         = require('gulp');
const sass         = require('gulp-sass');
const plumber      = require('gulp-plumber');
const _if          = require('gulp-if');
const sourcemaps   = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const config       = require('../config');

gulp.task('sass', function () {
  return gulp
    .src(`${config.src.sass}/*.{sass,scss}`)
    .pipe(plumber())
    .pipe(_if(!config.production, sourcemaps.init()))
    .pipe(sass({
      outputStyle: config.production ? 'compressed' : 'expanded', // nested, expanded, compact, compressed
      precision: 5
    }).on('error', sass.logError))
    .pipe(autoprefixer({ browsers: ['last 3 versions'] }))
    // .pipe(sourcemaps.write('./'))
    .pipe(_if(!config.production, sourcemaps.write('./')))
    .pipe(gulp.dest(config.dest.css));
});

gulp.task('sass:watch', function () {
  gulp.watch(`${config.src.sass}/**/*.{sass,scss}`, ['sass']);
});
