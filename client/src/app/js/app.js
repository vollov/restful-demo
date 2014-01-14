'use strict';

var clientApp = angular.module('appModule', [ 'ngRoute','ngResource', 'ngCookies']);

clientApp.config(function($routeProvider, $locationProvider) {
	
	$routeProvider.when('/', {
		controller : 'BlogCtrl',
		templateUrl : 'views/public/home.html'
	}).when('/blog', {
		controller : 'BlogCtrl',
		templateUrl : 'views/public/list.html'
	}).when('/blog/:id', {
		templateUrl : 'views/public/blog.html'
	}).when('/about', {
		templateUrl : 'views/public/about.html'
	}).when('/500', {
		templateUrl : 'views/public/500.html'
	}).otherwise({
		redirectTo : '/'
	});
	
	$locationProvider.html5Mode(true);
});

