const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');
const minifyCSS = require('gulp-minify-css');

gulp.task('css', function(){
    return gulp.src('assets/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9'))
        .pipe(minifyCSS())
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./css/'))
});

//Watch task
gulp.task('default', function() {
    gulp.watch('assets/styles/**/*.scss', gulp.series('css'));
});