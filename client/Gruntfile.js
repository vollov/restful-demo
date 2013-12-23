'use strict';

module.exports = function(grunt) {

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	// Project configuration.
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify: {
			my_target: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['src/app/js/*.js']
				}
			}
		},
		watch : {
			files : '<config:lint.files>',
			tasks : 'default timestamp'
		},
		jshint : {
			files : [ 'Gruntfile.js', 'src/server.js', 'src/lib/*.js',
					'test/**/*.js' ],
			options : {
				laxcomma : true,
				curly : true,
				eqeqeq : true,
				immed : true,
				latedef : true,
				newcap : true,
				noarg : true,
				sub : true,
				undef : true,
				boss : true,
				eqnull : true,
				globalstrict: true,
				globals : {
					inject : false,
					require : false,
					__dirname : false,
					console : false,
					module : false,
					exports : false,
					it : false,
					xit : false,
					describe : false,
					xdescribe : false,
					beforeEach : false,
					afterEach : false,
					expect : false,
					spyOn : false
				}
			}
		}
	});

	// Default task(s).
	grunt.registerTask('default', [ 'logging','jshint','uglify' ]);
	
	grunt.registerTask('timestamp', function() {
		grunt.log.subhead(Date());
	});

	grunt.registerTask('supervise', function() {
		this.async();
		require('supervisor').run([ 'server.js' ]);
	});

	// A very basic default task.
	grunt.registerTask('logging', 'Log some stuff.', function() {
		grunt.log.write('Logging some stuff...').ok();
	});
};