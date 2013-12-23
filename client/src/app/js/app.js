'use strict';

var clientApp = angular.module('appModule', ['ngResource', 'ngCookies', 'clientServices', 'clientControllers' ]);

clientApp.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/', {
		controller : 'BlogCtrl',
		templateUrl : 'views/public/home.html'
	}).when('/about', {
		templateUrl : 'views/public/about.html'
	}).when('/blog/:id', {
		controller : 'BlogDetailCtrl',
		templateUrl : 'views/public/blog.html'
	}).when('/500', {
		templateUrl : 'views/public/500.html'
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);
});

