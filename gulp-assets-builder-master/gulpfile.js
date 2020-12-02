/**
 * @file Example configuration for assets-builder, based on gulp-task-maker
 * Guide: https://github.com/fvsch/gulp-task-maker
 */
const gtm = require("gulp-task-maker");

function onError(err) {
  console.log(err);
}

gtm.add("./tasks/sass", {
  src: "./src/scss/*.scss",
  watch: true,
  dest: "./dist/css/",
  concat: "main.css",
  autoprefixer: { flexbox: "no-2009", grid: false },
});

gtm.add("./tasks/minjs", {
  src: [
    // install dependencies with npm and import from node_modules:
    //"node_modules/some-lib/dist/some-lib.js",
    "./src/js/*.js"
  ],
  watch: true,
  dest: "./dist/js/",
  concat: "main.js",
  minify: true
});

gtm.add("./tasks/svgsymbols", {
  src: "./src/svg/*.svg",
  watch: true,
  dest: "./dist/svg/",
  sprite: "icons.svg",
  demo: true, // also create a HTML list of icons
  id: "icon-%f", // id pattern for symbols ("%f" is the cleaned up file name)
  svgAttrs: {}, // add XML attributes to the root <svg> element
});
