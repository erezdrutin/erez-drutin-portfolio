const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function () {
  // this is to add licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Material Kit React - v1.10.0
=========================================================

* Product Page: https://github.com/erezdrutin/erez-drutin-portfolio
* Copyright 2021 Erez Drutin (https://github.com/erezdrutin/erez-drutin-portfolio)

* Coded by Erez Drutin

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Erez Drutin licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Erez Drutin Portfolio - v1.10.0
=========================================================

* Product Page:https://github.com/erezdrutin/erez-drutin-portfolio
* Copyright 2021 Erez Drutin (https://github.com/erezdrutin/erez-drutin-portfolio)

* Coded by Erez Drutin

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to add Erez Drutin licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Material Kit React - v1.10.0
=========================================================

* Product Page: https://github.com/erezdrutin/erez-drutin-portfolio
* Copyright 2021 Erez Drutin (https://github.com/erezdrutin/erez-drutin-portfolio)

* Coded by Erez Drutin

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
