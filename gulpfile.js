var gulp = require("gulp");
var sass = require("gulp-sass");
var notify = require("gulp-notify");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");
var browserify = require("browserify");
var watchify = require("watchify");
var babelify = require("babelify");
var vueify = require("vueify");
var source = require("vinyl-source-stream");
var buffer = require("vinyl-buffer");
var bourbon = require("node-bourbon");
var assign = require("lodash/assign");

vueify.compiler.applyConfig({
  sass: {
    includePaths: bourbon.includePaths,
  }
});

var browserifyArgs = {
  debug: true,
  entries: "./src/js/app.js",
  transform: [
    ["babelify", {
      extensions: [".js"]
    }],
    "vueify"
  ],
  plugin: [
    ["vueify-extract-css", {
      out: "./src/sass/_components.scss"
    }]
  ]
}

var watchifyArgs = assign(watchify.args, browserifyArgs);
var bundler = watchify(browserify(watchifyArgs));

function scripts(){
  console.log("Bundling started...");
  console.time("Bundling finished");
  return bundler
    .bundle()
    .on("end", function(){ console.timeEnd("Bundling finished") })
    .pipe(source("app.bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write("../../maps"))
    .pipe(gulp.dest("./dist/js"));
}

bundler.on("update", scripts);
gulp.task("js", scripts);

gulp.task("sass", function(){
  gulp.src("src/sass/app.scss")
    .pipe(sass({
      includePaths: bourbon.includePaths,
      quiet: true
    }).on("error", notify.onError(function (error) {
        return "Build Failed: " + error.message;
    })))
    .pipe(gulp.dest("./dist/css"));
});


gulp.task("watch", function(){
  gulp.watch(["src/sass/**/*.scss"], ["sass"]);
});

gulp.task("default", [
  "js",
  "sass",
  "watch"
]);
