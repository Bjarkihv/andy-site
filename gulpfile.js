"use strict";

// dependencies
const gulp = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const changed = require("gulp-changed");

var SCSS_SRC = "./src/assets/scss/**/*.scss";
var SCSS_DEST = "./src/assets/css";

// Compile SCSS
gulp.task("compile_scss", function() {
  gulp
    .src(SCSS_SRC)
    .pipe(sass().on("error", sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
});

// sjá breytingar í SCSSinu
gulp.task("watch_scss", function() {
  gulp.watch(SCSS_SRC, gulp.parallel("compile_scss"));
});

// Keyra tasks
gulp.task("default", gulp.series("watch_scss"));
