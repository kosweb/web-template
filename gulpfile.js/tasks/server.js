'use strict';

const settings = require('../settings');
const {
  task
} = require('gulp');
const browserSync = require('browser-sync').create('Local Server');

// Локальный сервер
task('server', function (done) {
  browserSync.init({
    server: settings.paths.dest.root,
    cors: true,
    reloadOnRestart: true,
    ghostMode: false,
		open: true,
		port: 6969,
		ui: {
			port: 6963
		},
  });

  done();
});
