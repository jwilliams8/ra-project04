/*
 * EJA: updated gulpfile.babel.js to support SASS, watch
 *
 * broswerify adds module support (linking of external files)
 * babelify is an add-on to browserify
 * to specifically add the es6 import command (comparable to Requre)
 * babelify uses babel to transpile the ES6 code to ES5 code
 *
 * https://babeljs.io/
 * http://browserify.org/
 * https://github.com/babel/babelify
 * https://www.npmjs.com/package/babelify
 * */

import gulp from "gulp";
import sass from 'gulp-sass';
import browserify from "browserify";
import browserSync from 'browser-sync';
import cleanCss from 'gulp-clean-css';
import rename from 'gulp-rename';

gulp.task("sass", function(){
    return gulp.src(['./assets/css/main.scss'])
    .pipe(sass())
    .pipe(rename("styles.min.css"))
    .pipe(cleanCss())
    .pipe(gulp.dest("./dist/assets/css"))
});

gulp.task('watch',['browserSync'], function() {
    gulp.watch('./assets/css/*.scss', ['sass']);
    gulp.watch('./*.html', ['indexHTMLTask']);
    gulp.watch('./dist/**/**/*.*', browserSync.reload);
});

gulp.task('browserSync', function(){
    console.log('gulp: browserSyncFn() - initializing browserSync');
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    });
});

let indexHTMLFn = () => {
    gulp.src('./index.html').pipe(gulp.dest('./dist'));
};

browserSync.create();

