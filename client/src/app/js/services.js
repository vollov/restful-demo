'use strict';

var httpRoot = 'http://localhost:3003';

/**
 * Blog data service, with list function as public API.
 */

clientApp.factory('Blog', function($resource) {
	return $resource(httpRoot + '/api/blog/:id');
});
