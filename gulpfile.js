import gulp from "gulp";
import plumber from "gulp-plumber";
import postcss from "gulp-postcss";
import less from "gulp-less";
import autopefixer from "autoprefixer";
import browser from "browser-sync";

export const styles = () => {
  return gulp
    .src("source/less/style.less", { sourcemaps: true })
    .pipe(plumber())
    .pipe(less())
    .pipe(postcss([autopefixer()]))
    .pipe(gulp.dest("./source/css/style.css", { sourcemaps: true }))
    .pipe(browser.stream());
};

const server = (done) => {
  browser.init({
    server: {
      baseDir: "source",
    },
    cors: true,
    notify: false,
    ui: false,
  });
  done();
};

const watcher = () => {
  gulp.watch("source/less/**/*.less", gulp.series(styles));
  gulp.watch("source/*.html").on("change", browser.reload);
};

export default gulp.series(styles, server, watcher);
