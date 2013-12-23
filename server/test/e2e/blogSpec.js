'use strict';

var request = require('supertest')
	, should = require('should')
	, app = require('../../src/server').app;

describe('Test blog api/n', function() {

	var url_blog_list = '/api/blog';
	
	describe('Test get a list of blog: GET->' + url_blog_list, function() {
		
		it('should return 4 blogs for url /api/blog', function(done) {
			request(app)
			.get(url_blog_list)
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err,res){
				should.not.exist(err);
				res.body.should.have.lengthOf(4);
				res.body[0].should.have.property('title', 'blog title 4 Soft-wrapping on prose diffs');
				if (err){
					return done(err);
				}
				done();
			});
		});
	});
	
	describe('Test get a blog by id: GET->' + url_blog_list, function() {
		
		it('should return blog by id /api/blog/52b0a073e739b6084eaf047c', function(done) {
			request(app)
			.get(url_blog_list + "/52b0a073e739b6084eaf047c")
			.expect('Content-Type', /json/)
			.expect(200)
			.end(function(err,res){
				should.not.exist(err);
				res.body.should.have.property('title', 'blog title 1 Starred by GitHub staff');
				if (err){
					return done(err);
				}
				done();
			});
		});
	});
});
