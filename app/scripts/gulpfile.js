var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('../stylesheets/sass/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('../stylesheets/css'));
});

gulp.task('watch', ['sass'], function() {
    gulp.watch('../stylesheets/sass/**/*.scss', ['sass']);
});