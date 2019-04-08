module.exports = function () {
    return (function () {
        gulp.task('css', getTask('css'));
    }());
};