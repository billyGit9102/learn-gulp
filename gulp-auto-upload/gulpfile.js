const { src, dest,watch, series } = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require("autoprefixer");
const postcss = require("gulp-postcss");
var sftp = require('gulp-sftp-up4');

function uploadCss(cb) {

    src('./resources/css/styles.css')
    .pipe(sftp({
        host: 'bf2c.info', // FTP主机地址
        auth: 'FTPServer1', // 下一步创建的 .ftppass 文件里面对应的授权方式
        remotePath: '/home/zg9qs1krcwhw/public_html/sp/project/ci-doing-timer-v4/', // FTP需要上传的位置
    }));
    
    cb();
}

function scss() {
    // body omitted
    console.log("watching scss")
    return src('./resources/css/styles.scss')
    .pipe(sass().on('error', sass.logError))    
    .pipe(postcss([autoprefixer()]))
    .pipe(dest('./resources/css'));
}


function watchSrc(cb) {
    console.log("watching src");
    //watch(['./resources/css/*.scss'], scss);
    watch(['./resources/css/*.scss'], series(scss,uploadCss));
}


function defaultTask(cb) {
    // place code for your default task here
    console.log("start")
    cb();
}
exports.default = defaultTask;
exports.watchSrc=watchSrc;