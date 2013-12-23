'use strict';

var assert = require('assert')
	, should = require('should')
	, db = require('../../src/lib/db');

describe('Test mongojs wrapper -- db module', function() {
	
	describe('Test find function', function() {
		// console.log('Start test find function...');
		it('should find 4 blogs in test db', function(done) {
			db.find('blog', {projection:{'title' : 1,  'content':1}, limit: 10},function(err, blogs) {
				should.not.exist(err);
				console.log('return ' + blogs.length + ' blogs.');
				blogs.should.have.lengthOf(4);
				done();
			});
		});
	});
	
	describe('Test findOne function', function() {
		it('should be able to find blog by id', function(done) {
			db.findOne('blog', {_id: db.objectId('52b0a073e739b6084eaf047c')}, {'title':1}, function(err, blog) {
				should.not.exist(err);
				should.exist(blog);
				//
				//blog.should.have.property();
				done();
			});
		});
	});
});
