const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

// Globally expose config objects
global.PATH_CONFIG = require('./gulp-config/path-config');

// Require all tasks configuration
require('./gulp-config/tasks-config')(gulp, plugins);
