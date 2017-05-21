let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let watch = require('gulp-watch');

gulp.task('default', function() {
  // place code for your default task here
});

// Watch CSS
gulp.task('watch', function() {
    gulp.watch('./src/*.scss', ['sass']);
});

gulp.task("sass", function(){
    return gulp.src(['./src/main.scss'])
    .pipe(sass())
    .pipe(rename("styles.css"))
    .pipe(gulp.dest("./src/"))
});
