'use strict';

var db = require('../lib/db.js')
	, mongojs = require('mongojs');

module.exports = function(app) {
	
	/**
	 * Spec 1.1 get the most recent 20 blogs with GET
	 */
	app.get('/api/blog', function(req, res) {
		// order by 'date' with descendant. 
		var sort = [['date', -1]];		
		db.find('blog',{sort:sort,limit:20}, function(err, blogs) {
			if (!err) {
				return res.send(blogs);
			} else {
				return console.log(err);
			}
		});
	});

	/**
	 * Spec 1.2 get the blog by object id with GET
	 */
	app.get('/api/blog/:id', function(req, res){
		var id = req.params.id;
		db.findOne('blog', {'_id': mongojs.ObjectId(id)}, {}, function(err, blog){
			if (!err) {
				return res.send(blog);
			} else {
				return console.log(err);
			}
		});
	});
};
