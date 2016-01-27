var gulp = require('gulp');
var serve = require('gulp-serve');

var argv = require('yargs')
  .default('port', 3333)
  .alias('p', 'port')
  .argv;

gulp.task('serve', serve({
  root: ['src'],
  port: argv.port
}));
