var gulp = require('gulp');

var sass = require('gulp-sass');

gulp.task('sass', function(){
  console.log('Compile css');
  return gulp.src('./sass/*.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('./css/main.css'))
});

var imageResize = require('gulp-image-resize');
 
gulp.task('resize', function () {
  gulp.src('./assets/chapters/6/photos/*.jpg')
    .pipe(imageResize({
      width : 500,
      crop : false
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
  gulp.watch('./sass/*.scss', ['sass']); 
})