'use strict';

const dirs = {
  src: './source/',
  dest: './build/'
};

module.exports = {
  paths: {
    src: {
      root: dirs.src,
      styles: dirs.src + 'styles/',
      scripts: dirs.src + 'js/',
      images: {
        all: dirs.src + 'img/',
        icons: dirs.src + 'img/icons/',
        content: dirs.src + 'img/content/',
        background: dirs.src + 'img/backgounds'
      },
      fonts: dirs.src + 'fonts/'
    },
    dest: {
      root: dirs.dest,
      styles: dirs.dest + 'css/',
      scripts: dirs.dest + 'js/',
      images: {
        all: dirs.dest + 'img/',
        content: dirs.dest + 'img/content/'
      },
      fonts: dirs.dest + 'fonts/'
    },
    dist: './dist'
  }
};
