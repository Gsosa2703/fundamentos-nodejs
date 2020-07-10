const gulp = require('gulp');
const server = require('gulp-server-livereload')

gulp.task('build', (callback)=> {
console.log('contruyendo el sitio')
setTimeout(() => {
    callback()
}, 1200);

})

gulp.task('server', (callback)=> {
gulp.src('www')
.pipe(server({
    livereload: true,
    open:true
}))
})

gulp.task('default', gulp.series('build', 'server'));
