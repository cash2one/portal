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
 * @params
 * @return
 */
exports.findAll = function(name, cb){
	name = !!name ? '%'+ name +'%' : '%%';
	mysql_util.find(null, 'h_house_project', [['PROJECT_NAME', 'like', name]], [['CREATE_TIME', 'DESC']], null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};