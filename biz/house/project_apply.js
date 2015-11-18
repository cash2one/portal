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

var _sql = '';

/**
 *
 * @params
 * @return
 */
exports.findAll = function(name, cb){
	var sql = _sql +' ORDER BY a.CREATE_TIME DESC';
	mysql.query(sql, null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};

/**
 *
 * @params
 * @return
 */
exports.saveNew = function(newInfo, cb){
	var sql = 'INSERT INTO g_house_project_apply (id, PROJECT_ID, MOBILE, REALNAME, CREATE_TIME) values (?, ?, ?, ?, ?)';
	mysql.query(sql, [util.genObjectId(), newInfo.PROJECT_ID, newInfo.MOBILE, newInfo.REALNAME, new Date()], function (err, status){
		if(err) return cb(err);
		cb(null, null, null, status.changedRows);
	});
};