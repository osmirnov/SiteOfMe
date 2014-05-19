var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css')

gulp.task('styles', function () {
	return gulp.src(['./assets/scss/styles.scss'])
    	.pipe(sass({
			errLogToConsole: true,
			includePaths : ['./bower_components']
		}))
		.pipe(minifyCss({ keepBreaks:true }))
    	.pipe(gulp.dest('./public/css'));
});

gulp.task('watch', function () {
	gulp.watch('./assets/scss/*.scss', ['styles']);
});

gulp.task('default', ['styles', 'watch']);