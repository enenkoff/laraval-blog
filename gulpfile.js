const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();

// Globally expose config objects
global.PATH_CONFIG = require('./gulp-config/path-config');
// global.TASK_CONFIG = require('./gulp-config/tasks-config');


function getTask(task) {
    return require('./gulp-config/tasks/' + task)(gulp, plugins);
}

require('./gulp-config/tasks-config');

// Require all tasks in gulpfile.js/tasks, including subfolders
// requireDir('./tasks', { recurse: true });

// Initialize any additional user-provided tasks
// TASK_CONFIG.additionalTasks.initialize(gulp, PATH_CONFIG, TASK_CONFIG);