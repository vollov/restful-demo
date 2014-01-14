'use strict';

module.exports = function(config) {
	config.set({
		basePath : '../..',

		files : [ 'src/app/lib/jquery/jquery-1.10.2.js',
				'src/app/lib/angular/angular.js',
				'src/app/lib/angular/angular-*.js',
				'src/app/lib/underscore/underscore.min.js',
				'vendor/angular/angular-mocks.js', 'src/app/js/**/*.js',
				'test/unit/controllers/blogSpec.js', ],

		autoWatch : true,
		frameworks : [ 'jasmine' ],
		// browsers : ['Chrome'],
		browsers : [ 'Firefox' ],
		plugins : [ 'karma-junit-reporter', 'karma-chrome-launcher',
				'karma-firefox-launcher', 'karma-jasmine' ],

		junitReporter : {
			outputFile : 'test_out/unit.xml',
			suite : 'unit'
		}
	});
};
