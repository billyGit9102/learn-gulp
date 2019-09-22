const {watchJs}= require('./gulp/watchJs');

function watchSrc() {
  console.log("watching src");
  watchJs();
}
function defaultTask(cb) {
  //command:gulp
  console.log("starting gulp, just for test only")
  cb();
}
exports.default = defaultTask;
exports.gw=watchSrc;
