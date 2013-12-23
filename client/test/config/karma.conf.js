'use strict';

module.exports = function(config) {
	config.set({
		basePath : '../..',

		files : [ 'vendor/jquery/jquery.min.js',
				'vendor/angular/angular.min.js',
				'vendor/angular/angular-resource.min.js',
				'vendor/angular/angular-cookies.min.js',
				'vendor/angular/angular-mocks.js', 
				'src/app/js/**/*.js',
				'test/unit/controllers/blogSpec.js',
		],

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
