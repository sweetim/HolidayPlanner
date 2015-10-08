'use strict';

let gulp = require('gulp');
let plugin = require('gulp-load-plugins')();

const PATH = {
    root: './src',
    index: './src/index.html',
    html: [
        './src/index.html',
        './src/**/*.html'
    ],
    js: [
        './src/js/*.js',
        './src/js/**/*.js'
    ],
    css: [
        './src/css/*.css'
    ],
    get all() {
        return this.html.concat(this.js, this.css);
    }
};

gulp.task('webserver', () => {
    return gulp.src(PATH.root)
        .pipe(plugin.webserver({
            livereload: true,
            open: true
        }));
});

gulp.task('livereload', () => {
    return gulp.src(PATH.all)
        .pipe(plugin.livereload({
            start: true,
            quiet: true
        }));
});

gulp.task('watch', () => {
    plugin.livereload.listen();
    gulp.watch(PATH.all, ['livereload']);
});

gulp.task('default', ['webserver', 'watch']);
