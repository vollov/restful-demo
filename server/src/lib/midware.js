'use strict';

module.exports = {
	/**
	 * Add Access-Control-Allow-Headers in HTTP response
	 */
	header : function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With');
		res.header('Access-Control-Allow-Methods', 'GET, POST, HEAD, OPTIONS');
		next();
	}
};
