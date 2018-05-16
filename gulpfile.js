const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-clean-css');
const minifyJS = require('gulp-minify');

// CSS Fixing
gulp.task('fixMyCSS', () => {
  gulp.src('styles.css').pipe(autoprefixer()).pipe(minifyCSS()).pipe(gulp.dest('build'));
});

gulp.task('automatedCSSFixing', () => {
  gulp.watch('styles.css', ['fixMyCSS']);
});

// JS Fixing
gulp.task('fixingMyJS', () => {
  gulp.src('app.js').pipe(minifyJS()).pipe(gulp.dest('build'));
});

gulp.task('automatedJSFixing', () => {
  gulp.src('app.js', ['fixingMyJS']);
});

// Default task
gulp.task('default', ['automatedJSFixing', 'automatedCSSFixing']);
