module.exports = function(config) {
  config.set({
    frameworks: ["browserify", "jasmine"],
    files: [
      "tests/support/*.js",
      "tests/**/*.spec.js"
    ],
    preprocessors: {
      "tests/**/*.spec.js": ["browserify"]
    },
    browsers: ["PhantomJS"],
    reporters: ["spec"],
    browserify: {
      transform: [["babelify", {presets: ["es2015"]}], "vueify"]
    }
  });
}
