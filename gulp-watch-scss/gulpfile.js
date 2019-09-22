const { src, dest,watch } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");



function scss() {
    // body omitted
    console.log("watching scss")
    return src('./src/scss/*.scss')
    .pipe(sass().on('error', sass.logError))    
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./dist/css'));
}


function watchSrc(cb) {
    console.log("watching src");
    watch(['./src/scss/*.scss'], scss);
}


function defaultTask(cb) {
    // place code for your default task here
    console.log("start")
    cb();
}
exports.default = defaultTask;
exports.watchSrc=watchSrc;