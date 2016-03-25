var gulp = require("gulp");
var browserify = require("browserify");
var babelify = require("babelify");
var vueify = require("vueify");
var watchify = require("watchify");
var source = require("vinyl-source-stream");
var bourbon = require("node-bourbon");
var sass = require("gulp-sass");
var notify = require("gulp-notify");

vueify.compiler.applyConfig({
  sass: {
    includePaths: bourbon.includePaths,
  }
});

function scripts(watch){
  var bundler, rebundle;
  bundler = browserify({
    basedir: __dirname,
    debug: false,
    entries: "./src/js/app.js",
    cache: {},
    packageCache: {},
    fullPaths: watch
  });
  if(watch){
    bundler = watchify(bundler, {
      poll: true,
      ignoreWatch: ["**/node_modules/**"]
    });
  }
  bundler.transform(babelify.configure({
    extensions: [".js"]
  }));
  bundler.transform(vueify);

  rebundle = function() {
    var stream = bundler.bundle();
    stream.on("error", function(err){
      console.log(err.message);
      this.emit("end");
    });
    stream.pipe(source("app.bundle.js")).pipe( gulp.dest("./dist/js") );
  };
  bundler.on("log", function(data) {
    console.log("Script bundling succeeded: " + data);
});
  bundler.on("update", rebundle);
  return rebundle();
}
gulp.task("scripts", function () {
  return scripts(false);
});

gulp.task("sass", function(){
  gulp.src("src/sass/app.scss")
    .pipe(sass({
      includePaths: bourbon.includePaths,
      quiet: true
    }).on("error", notify.onError(function (error) {
        return "Build Failed: " + error.message;
    })))
    .pipe(gulp.dest("./public/css"));
});


gulp.task("watch", function(){
  scripts(true);
  gulp.watch(["src/sass/**/*.scss"], ["sass"]);
});

gulp.task("default", [
  "scripts",
  "sass",
  "watch"
]);
