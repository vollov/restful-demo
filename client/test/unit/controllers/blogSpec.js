'use strict';

describe(
		'Blog related controllers\n',
		function() {
			var resourceRoot = 'http://localhost:3003';
			var blogs = [
					{
						"oid" : "52b0a073e739b6084eaf047f",
						"title" : "blog title 4 Soft-wrapping on prose diffs",
						"content" : "Starting today, diffs on prose documents are soft-wrapped./n Before",
						"date" : "2013-11-11T05:00:00.000Z"
					},
					{
						"oid" : "52b0a073e739b6084eaf047d",
						"title" : "blog title 2 More Explore Features",
						"content" : "We've drafted your friends to help you find even more interesting projects with a new module on GitHub Explore. You'll now see stars from people you follow on the explore landing page, the mobile version, and the explore newsletter.",
						"date" : "2013-10-21T04:00:00.000Z"
					},
					{
						"oid" : "52b0a073e739b6084eaf047c",
						"title" : "blog title 1 Starred by GitHub staff",
						"content" : "We've had as much fun using the new GitHub Explore as we've had building it. We're sharing the repositories we've discovered in the new Starred by GitHub staff section.",
						"date" : "2013-08-11T04:00:00.000Z"
					},
					{
						"oid" : "52b0a073e739b6084eaf047e",
						"title" : "blog title 3 GitHub Pages just got easier",
						"content" : "Today we're rolling out a reimagined pages.github.com, focused on helping you quickly and easily publish your first GitHub Pages site.",
						"date" : "2013-06-23T04:00:00.000Z"
					} ];
			
			
			describe('BlogCtrl', function() {
				var scope, ctrl, $httpBackend;
				
				beforeEach(module('appModule'));
				beforeEach(inject(function(_$httpBackend_, $rootScope, $scope, $controller) {
					$httpBackend = _$httpBackend_;
					$httpBackend.expectGET(resourceRoot + '/api/blog?').respond(blogs);
					scope = $rootScope.$new();
					ctrl = $controller('BlogCtrl', {
						$scope : scope
					});
					console.log('hello');
				}));

				it('blogs model should have 4 blogs', function() {
					expect(scope.blogs).toBeUndefined();
					$httpBackend.flush();
					expect(scope.blogs.length).toBe(4);
					expect(scope.blogs[1].title).toBe('blog title 2 More Explore Features');
				});
			});
		});