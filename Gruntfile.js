module.exports = function( grunt ) {
	'use strict';

	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON( 'package.json' ),
		version : grunt.file.readJSON( 'package.json' ).version,
		banner : '/*!\n' +
				' * <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
				' * Copyright <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' +
				' */\n',
		dir : {
			docs : 'docs',
			dist : 'dist',
			src : 'src',
			vendor : 'vendor'
		}
	});

	// Load tasks
	grunt.loadTasks( 'tasks' );

	// Default task(s)
	grunt.registerTask( 'build', [
		'clean',
		'sass'
	]);
	grunt.registerTask( 'serve', [
		'jekyll',
		'connect',
		'browserSync',
		'watch'
	]);
	grunt.registerTask( 'dev', [
		'build',
		'copy',
		'serve'
	]);
	grunt.registerTask( 'deploy', [
		'build',
		'copy',
		'autoprefixer',
		'cssmin'
	]);
	grunt.registerTask( 'default', [ 'dev' ]);
};
