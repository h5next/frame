require('es6-promise').polyfill();

var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
	cssmin = require('gulp-cssmin'),
	rename = require('gulp-rename'),
	processors = [
		require('postcss-import'),
		require('postcss-mixins'),
		require('postcss-simple-vars'),
		require('postcss-nested')
	];


gulp.task('css', function(){
	return gulp.src('src/css/h5next.css')
	.pipe(
		postcss(processors)
	)
	.pipe(gulp.dest('dist/styles/'))
})

gulp.task('css-min', function() {
	return gulp.src('dist/styles/h5next.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('dist/styles/'))
})
