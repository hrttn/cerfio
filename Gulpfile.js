const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const a11y = require('gulp-a11y');


gulp.task('styles', function() {
    gulp.src('assets/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

gulp.task('autoprefixer', () =>
	gulp.src('./css/*.css')
		.pipe(autoprefixer({
			browsers: ['last 5 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./css/'))
);

 
gulp.task('accessibility', function () {
  return gulp.src('./**/*.html')
    .pipe(a11y())
    .pipe(a11y.reporter());
});

//Watch task
gulp.task('default', function() {
    gulp.watch('assets/styles/**/*.scss', ['styles']);
    gulp.watch('./css/*.css', ['autoprefixer']);
});