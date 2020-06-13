'use strict';

const settings = require('../settings');
const {
  task,
  src,
  dest
} = require('gulp');
const gulpIf = require('gulp-if');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');
const terser = require('gulp-terser');

const isDev = !process.env.NODE_ENV;

// Минификация JS файлов
task('scripts', function () {
  return src(`${settings.paths.src.scripts}**/*.js`)
    .pipe(gulpIf(isDev, sourcemaps.init()))
    .pipe(concat('index.js'))
    .pipe(terser())
    .pipe(gulpIf(isDev, sourcemaps.write()))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(dest(settings.paths.dest.scripts));
});
