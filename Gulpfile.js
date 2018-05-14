const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const a11y = require('gulp-a11y');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');
const rename = require('gulp-rename');


gulp.task('styles', function() {
    gulp.src('assets/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

gulp.task('css', function(){
    gulp.src('assets/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./css/'))
});
 
gulp.task('accessibility', function () {
  return gulp.src('./**/*.html')
    .pipe(a11y())
    .pipe(a11y.reporter());
});

//Watch task
gulp.task('default', function() {
    gulp.watch('assets/styles/**/*.scss', ['css']);
});