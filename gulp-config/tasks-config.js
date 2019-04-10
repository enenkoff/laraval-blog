module.exports = function (gulp, plugins) {

    function getTask(task, path_src, path_dest) {
        return require('./tasks/' + task)(gulp, plugins, path_src, path_dest);
    };


/* css:compile ------------------------------------- */

    gulp.task('css:build', () => {
        return getTask('css-build', PATH_CONFIG.src.sass, PATH_CONFIG.build.css);
    });




/* html:compile ------------------------------------- */

    gulp.task('html:build', gulp.series('svg:inject', () => {
        return getTask('html-build', PATH_CONFIG.src.html_pages, PATH_CONFIG.build.html);
    }));




/* svg:compile --------------------------------------*/

    // svg sprite build

    gulp.task('svg:sprite', () => {
        return getTask('svg-sprite', PATH_CONFIG.src.svg_sprite, PATH_CONFIG.src.svg)
    });

    // svg copy all files to build

    gulp.task('svg:copy', () => {
        return getTask('copy', PATH_CONFIG.src.svg_files, PATH_CONFIG.build.svg);
    });

    // svg inject to html template

    gulp.task('svg:inject', gulp.series('svg:sprite', () => {
        return getTask('svg-inject', PATH_CONFIG.src.svg, PATH_CONFIG.src.html_templates)
    }));

    // svg build sprite and copy all files to build

    gulp.task('svg:build', gulp.series('svg:sprite', 'svg:inject', 'svg:copy', (done) => {
        done();
    }));




/* img:compile --------------------------------------*/

    gulp.task('img:optimize', () => {
        return getTask('img-optimize', PATH_CONFIG.src.img, PATH_CONFIG.build.img)
    });




/* media:copy --------------------------------------*/

    gulp.task('media:copy', () => {
        return getTask('copy', PATH_CONFIG.src.media, PATH_CONFIG.build.media);
    });




/* fonts:copy --------------------------------------*/

    gulp.task('fonts:copy', () => {
        return getTask('copy', PATH_CONFIG.src.fonts, PATH_CONFIG.build.fonts);
    });




/* watchers --------------------------------------*/

    gulp.task('watch:css', gulp.series('css:build', function() {
        gulp.watch(
            PATH_CONFIG.watch.style,
            gulp.series('css:build')
        );
    }));

};