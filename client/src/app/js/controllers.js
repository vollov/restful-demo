'use strict';

///////////////// blog objects ///////////////////////

clientApp.controller('BlogCtrl', function ($scope, Blog) {
	$scope.blogs = Blog.query();
});

clientApp.controller('BlogDetailCtrl', function ($scope, $routeParams, Blog) {
	$scope.oid = $routeParams.oid;
//	$scope.blog = Blog.get({
//		id : $routeParams.id
//	});
});

