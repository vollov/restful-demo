'use strict';

///////////////// blog objects ///////////////////////

//clientApp.controller('BlogCtrl', function ($scope, Blog) {
//	$scope.blogs = Blog.query();
//});
//
//clientApp.controller('BlogDetailCtrl', function ($scope, $routeParams, Blog) {
//	console.log('getting id=%j',$routeParams._id);
//	//$scope.oid = $routeParams.oid;
//	$scope.blog = Blog.get({
//		id : $routeParams.id
//	});
//});

clientApp.controller('BlogCtrl', function ($scope) {
	console.log('blogs init');
	$scope.blogs = [{'id':1,'title':'blog title 1','content': "We've had as much fun",'date': new Date('2013/8/11')},
	                 {'id':2,'title':'blog title 2','content': "We've drafted your friends to help you.",'date': new Date('2013/10/21')},
	                 {'id':3,'title':'blog title 3','content': "Today we're rolling out a reimagined pages.github.com.",'date': new Date('2013/6/23')},
	                 {'id':4,'title':'blog title 4','content': "Starting today, diffs on prose documents are soft-wrapped./n Before",'date': new Date('2013/11/11')}];
	console.log('blogs='+ $scope.blogs);
});