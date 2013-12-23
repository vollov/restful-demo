'use strict';

var clientControllers = angular.module('clientControllers', []);

///////////////// blog objects ///////////////////////

clientControllers.controller('BlogCtrl', function ($scope, Blog) {
	$scope.blogs = Blog.query();
});

clientControllers.controller('BlogDetailCtrl', function ($scope, $routeParams, Blog) {
	$scope.blog = Blog.get({
		id : $routeParams.id
	});
});

