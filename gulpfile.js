/* gulp.task(crear tareas);
gulp.src(la ruta de donde se encuentran los archivos);
gulp.dest(la ruta de donde se guardaran los archivos);
gulp.watch(supervisa un directorio constantemente y ejecutar tareas cuando suceda alguna acción); */

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function buildSass() {
  return gulp.src('./scss/styles.scss')
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(gulp.dest('./css'))
});

gulp.task('imagemin', function () {
  return gulp.src('./images/*')
      .pipe(imagemin({
          progressive: true,
          svgoPlugins: [{removeViewBox: false}],
          use: [pngquant()]
      }))
      .pipe(gulp.dest('./images'));
});