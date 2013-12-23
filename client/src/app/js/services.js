'use strict';

var httpRoot = 'http://api.vollov.ca';

/**
 * Blog data service, with list function as public API.
 */

clientApp.factory('Blog', function($resource) {
	return $resource(httpRoot + '/api/blog/:oid', {oid: '@oid'});
});
