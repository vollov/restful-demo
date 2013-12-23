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
});
