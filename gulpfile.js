var del = require('del');

var gulp = require('gulp');

var rsync = require('gulp-rsync');
var serve = require('gulp-serve');
var shell = require('gulp-shell');

var vinylPaths = require('vinyl-paths');
var moment = require('moment');

var config = {
	rsync: {
		destination: '/home/mgerton/preview.mattgerton.com',
		hostname: 'mattgerton.com',
		username: 'mgerton',
		root: 'src',	// TODO: change to `dist` when the build task is fixed
		incremental: true,
		progress: true,
		relative: true,
		emptyDirectories: true,
		recursive: true,
		clean: true,
		exclude: [],
		include: []
	}
};

/**
 * Callback function used to execute the rsync commands. This method forces Gulp
 * execute the callback after the build tasks has completed, as opposed to in
 * parallel if they were just defined inside of the array.
 */
function serverSync() {
	return gulp.src('dist')
		.pipe(rsync(config.rsync));
}

/*gulp.task('clean:dist', function () {
	return gulp.src('dist/*')
		.pipe(gulp.dest('dist'))
		.pipe(vinylPaths(del));
});*/

gulp.task('serve', serve({
	root: ['src'],
	port: 3333
}));

// Build tasks
// gulp.task('build', ['clean:dist'], shell.task('node scripts/manualExport.js'));
// gulp.task('build:classy:html', ['clean:dist'], shell.task('resume export dist/index -t classy --format html'));
// gulp.task('build:classy:pdf', ['clean:dist'], shell.task('resume export dist/' + pdfFilename() + ' -t classy --format pdf'));

// Deploy tasks
// gulp.task('deploy:classy', ['build:classy:html'], serverSync);
// gulp.task('deploy', ['build'], serverSync);

// gulp.task('default', ['build', 'deploy']);
