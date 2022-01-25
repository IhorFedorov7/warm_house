"use strict";

const gulp = require("gulp");
const webpack = require("webpack-stream");
const browsersync = require("browser-sync");
const sass = require('gulp-sass')(require('sass'));;
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const postcss = require("gulp-postcss");
const minify = require('gulp-minify');

// const prod = "/Applications/MAMP/htdocs/test"; // Ссылка на вашу папку на локальном сервере
const prod = "./prod";

gulp.task("copy-html", () => {
  return gulp.src("./index.html")
    .pipe(gulp.dest(prod))
    .pipe(browsersync.stream());
});

gulp.task("build-sass", () => {
  return gulp.src("./src/style/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(prod))
    .pipe(browsersync.stream());
});

gulp.task("build-js", () => {
  return gulp.src("./src/js/index.js")
  .pipe(webpack({
    mode: 'development',
    output: {
      filename: 'script.js'
    },
    watch: false,
    devtool: "source-map",
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /(node_modules|bower_components)/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', {
                debug: true,
                corejs: 3,
                useBuiltIns: "usage"
              }]]
            }
          }
        }
      ]
    }
  }))
  .pipe(minify())
  .pipe(gulp.dest(prod))
  .on("end", browsersync.reload);
});

gulp.task("watch", () => {
  browsersync.init({
		server: "./prod/",
		port: 4000,
		notify: true
  });
    
  gulp.watch("./index.html", gulp.parallel("copy-html"));
  gulp.watch("./src/js/**/*.js", gulp.parallel("build-js"));
  gulp.watch("./src/style/*.scss", gulp.parallel("build-sass"));
});

gulp.task("build", gulp.parallel("copy-html", "build-js", "build-sass"));

gulp.task("prod", () => {
  gulp.src("./src/style/style.scss")
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest(prod));

  return gulp.src("./src/js/index.js")
    .pipe(webpack({
      mode: 'production',
      output: {
        filename: 'script.js'
      },
      module: {
        rules: [
          {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [['@babel/preset-env', {
                  corejs: 3,
                  useBuiltIns: "usage"
                }]]
              }
            }
          }
        ]
      }
    }))
    .pipe(gulp.dest(prod));
});



gulp.task("default", gulp.parallel("watch", "build"));