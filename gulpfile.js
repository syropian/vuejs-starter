var gulp = require("gulp");
var elixir = require("laravel-elixir");
var vueify = require('laravel-elixir-vueify');

elixir(function(mix) {
    mix
    .browserify("./src/js/app.js", "./dist/js/app.bundle.js")
    .sass("./src/sass/app.scss", null, { includePaths: require("node-bourbon").includePaths, quiet: true});
});
