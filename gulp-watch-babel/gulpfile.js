const { src, dest,watch } = require('gulp');
const babel = require('gulp-babel');

watch(['src/*.js'], function(cb) {
  console.log("js watching");
  // body omitted
  return src('src/*.js')
  .pipe(babel())
  .pipe(dest('output/'));

});


exports.default = function(cb) {
  cb();
}