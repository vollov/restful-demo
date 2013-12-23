'use strict';

var clientServices = angular.module('clientServices', []);

var httpRoot = 'http://localhost\\:3003';

/**
 * Blog data service, with list function as public API.
 */

clientServices.factory('Blog', function($resource) {
	return $resource(httpRoot + '/api/blog/:id', {id: '@id'});
});
