var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function () {
    connect.server({
        livereload: true,
        // host: gulp.dev,
        host: '10.0.1.24',
        port: 2333,
    });
});

gulp.task('scripts', function () {
    gulp.src([index.html])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(paths.dist_js)) //输出到指定文件夹
        .pipe(connect.reload()) //自动刷新
        .pipe(notify({
            message: 'Scripts is OK'
        })) //提醒任务完成

});

gulp.task('default', ['webserver']);