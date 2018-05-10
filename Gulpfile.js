var gulp = require('gulp');
var sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


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

//Watch task
gulp.task('default', function() {
    gulp.watch('assets/styles/**/*.scss', ['styles']);
    gulp.watch('./css/*.css', ['autoprefixer']);
});