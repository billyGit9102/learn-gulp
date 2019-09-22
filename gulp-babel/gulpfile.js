const { src, dest,watch } = require('gulp');
const babel = require('gulp-babel');

watch(['input/*.js', '!input/something.js'], function(cb) {
  // body omitted
  return src('src/*.js')
  .pipe(babel())
  .pipe(dest('output/'));

  //cb();
});


exports.default = function() {
 
}