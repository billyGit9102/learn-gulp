const { src, dest,watch } = require('gulp');
var fileinclude = require('gulp-file-include');

function defaultTask(cb) {
    // place code for your default task here
    cb();
}
function compileHtml(cb) {
    // place code for your default task here
    console.log("start watchHtml")
    src(['./src/html/index.html'])
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file'
    }))
    .pipe(dest('./'));

     cb();
}
function watchSrc(){
  watch(['./src/html/**/*.html'], compileHtml)
}
exports.default = defaultTask;
exports.watchSrc=watchSrc;
exports.compileHtml=compileHtml;