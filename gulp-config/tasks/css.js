module.exports = function (gulp, plugins, path_src, path_dest) {

    let onError = function(err) {
        plugins.notify.onError({
            title: "Error in " + err.plugin,
            message: err.message
        })(err);
        // this.emit('end');
    };

    gulp.src(path_src)
        .pipe(plugins.plumber({ errorHandler: onError }))
        .pipe(plugins.sass())
        .pipe(gulp.dest(path_dest))
        .pipe(plugins.notify( 'Готово!' ) );
};