/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	md5 = util.md5,
	mysql_util = util.mysql_util,
	mysql = util.mysql;

var exports = module.exports;

/**
 *
 * @param
 * @return
 */
exports.getById = function(id, cb){
	mysql_util.getById(null, 's_role', id, function (err, doc){
		if(err) return cb(err);
		cb(null, doc);
	});
};

/**
 *
 * @params
 * @return
 */
exports.findAll = function(name, cb){
	name = !!name ? '%'+ name +'%' : '%%';
	mysql_util.find(null, 's_role', [['ROLE_NAME', 'like', name]], [['CREATE_TIME', 'DESC']], null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};