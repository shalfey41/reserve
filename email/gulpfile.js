const gulp = require('gulp');
const inlineCss = require('gulp-inline-css');
const less = require('gulp-less');

gulp.task('less', function () {
  gulp.src('./dev/less/style.less')
    .pipe(less())
    .pipe(gulp.dest('./dev/css/'));
});

gulp.task('inline', function() {
  gulp.src('./dev/*.html')
    .pipe(inlineCss())
    .pipe(gulp.dest('./public'));
});

gulp.task('default', ['less', 'inline'], function() {
  gulp.watch(['./dev/less/**/*.less', './dev/css/style.css', './dev/*.html'], ['less', 'inline']);
});
