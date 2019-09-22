const { src, dest,watch } = require('gulp');
var fileinclude = require('gulp-file-include');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}
function c(cb) {
    // place code for your default task here
    console.log("start c")
    src(['./src/html/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./'));

     cb();
}
exports.default = defaultTask;
exports.c=c;