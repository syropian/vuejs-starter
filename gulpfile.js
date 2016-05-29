var gulp = require("gulp");
var elixir = require("laravel-elixir");
var vueify = require('laravel-elixir-vueify');
var Server = require("karma").Server;

elixir(function(mix) {
    mix
    .browserify("./src/js/app.js", "./dist/js/app.bundle.js")
    .sass("./src/sass/app.scss", null, { includePaths: require("node-bourbon").includePaths, quiet: true});
});

gulp.task("test", function (done) {
  return new Server({
    configFile: __dirname + "/karma.conf.js",
    singleRun: true
  }, done).start();
});

gulp.task("tdd", function (done) {
  return new Server({
    configFile: __dirname + "/karma.conf.js",
  }, done).start();
});
