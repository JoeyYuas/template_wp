var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Sassの読み込み先とCssの保存先を指定
gulp.task('sass', (done) => {
  gulp
    .src(["scss/*.scss", "scss/**/*.scss"])
    .pipe(sass({ outputStyle: 'expanded' }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest('../template/'));
  done();
});

//自動監視のタスクを作成(sass-watchと名付ける)
gulp.task('task-watch', gulp.series('sass', (cb) => {
  var watcher_scss = gulp.watch(
    ["scss/*.scss", "scss/**/*.scss"], gulp.task('sass')
  );
  watcher_scss.on('change', function (event) {
  });
  cb();
}));

// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', gulp.series(['task-watch']));
