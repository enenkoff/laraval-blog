module.exports = function (gulp, plugins) {

    function getTask(task, path_src, path_dest) {
        return require('./tasks/' + task)(gulp, plugins, path_src, path_dest);
    };

    gulp.task('css', done => {
        getTask('css', PATH_CONFIG.src.sass, PATH_CONFIG.build.css);
        done();
    });

    gulp.task('watch_css', gulp.series('css', function() {
        gulp.watch(
            PATH_CONFIG.watch.style,
            gulp.series('css')
        );
    }));

};