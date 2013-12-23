'use strict';

var mongojs = require('mongojs')
	, _und = require('underscore')
	, ObjectID = require('mongodb').ObjectID
	, db = mongojs('localhost/nblog');
	//, db = mongojs('dustin:Fgbhu89o@ds039487.mongolab.com:39487/nblog');

module.exports = {
	
	filterId : function(collections) {
		return _und.map(collections, function(item,key){
			item['oid'] = item['_id'];
			delete item['_id'];
			return item;
		});
	},
	objectId : function(id) {
		return new ObjectID(id);
	},
	/**
	 * quest = {query:{},projection:{},sort:{},limit: 100 }
	 */
	find : function(collection, quest, callback) {
		var query, projection, limit, sort;
		if(!('query' in quest)){
			query = {};
		} else {
			query = quest['query'];
		}
		if(!('projection' in quest)){
			projection = {};
		} else {
			projection = quest['projection'];
		}
		
		if(!('sort' in quest)){
			sort = {};
		} else {
			sort = quest['sort'];
		}
		
		if(!('limit' in quest)){
			db.collection(collection).find(query, projection).sort(sort).toArray(callback);
		} else {
			limit = quest['limit'];
			db.collection(collection).find(query, projection).sort(sort).limit(limit).toArray(callback);
		}
	},
	// callback:function(err, doc) {...};
	findOne : function(collection, query, projection, callback) {
		var cursor = db.collection(collection).findOne(query, projection, callback);
	},
	// db.mycollection.save({created:'just now'})
	save : function(collection, body, callback) {
		db.collection(collection).save(body, callback);
	},
	// db.mycollection.update({name:'mathias'}, {$inc:{level:1}}, {multi:true},
	// function() {});
	update : function(collection, query, body, options, callback) {
		db.collection(collection).update(query, body, options, callback);
	},
	
	/**
	 * collection.findAndModify(criteria, sort, update[, options, callback])
	 * options: remove - if set to true (default is false), removes the record
	 * from the collection. Callback function still gets the object but it
	 * doesn't exist in the collection any more. new - if set to true, callback
	 * function returns the modified record. Default is false (original record
	 * is returned) upsert - if set to true and no record matched to the query,
	 * replacement object is inserted as a new record
	 */
	findAndModify : function(collection, query, update, callback) {
		db.collection(collection).findAndModify({
			query: query,
			update: update,
			new: true,
		}, callback);
	},
	
	remove : function(collection, query, callback) {
		db.collection(collection).remove(query, callback);
	}
};
