module.exports = function (gulp, plugins, path_src, path_dest) {

    gulp.src(path_src + 'sprite-svg.html')
        .pipe(plugins.injectSvg({
            base: path_src
        }))
        .pipe(gulp.dest(path_dest));
};