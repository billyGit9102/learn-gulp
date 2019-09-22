const { src, dest,watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");

watch(['./src/**/*.scss'], function(cb) {
    // body omitted
    console.log("watching")
    return src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))    
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./dist/css'));
});

function defaultTask(cb) {
    // place code for your default task here
    console.log("start")
    cb();
}
exports.default = defaultTask