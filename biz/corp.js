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

var _sql = 'SELECT a.*, b.USER_NAME FROM g_customer_corp a, g_customer b WHERE a.CUSTOMER_ID=b.id';

/**
 *
 * @params
 * @return
 */
exports.findAll = function(corp_type, cb){
	var sql = _sql +' AND a.CORP_TYPE_ID=?';
	sql += ' ORDER BY a.CREATE_TIME DESC';
	mysql.query(sql, [corp_type], function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};

/**
 *
 * @params
 * @return
 */
exports.getById = function(id, cb){
	mysql_util.find(null, 'g_customer_corp', [['id', '=', id]], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0]: null);
	});
};

/**
 *
 * @params
 * @return
 */
exports.saveNew = function(newInfo, cb){
	var sql = 'INSERT INTO g_customer_corp (id, CUSTOMER_ID, CORP_NAME, INTRO, CORP_TYPE_ID, CREATE_TIME, STATUS) values (?, ?, ?, ?, ?, ?, ?)';
	var postData = [
		util.genObjectId(),
		newInfo.CUSTOMER_ID,
		newInfo.CORP_NAME,
		newInfo.INTRO,
		'564d33564e7d4a6005b371b0',
		new Date(),
		newInfo.STATUS || 1
	];
	mysql.query(sql, postData, function (err, status){
		if(err) return cb(err);
		cb(null, status);
	});
};

/**
 *
 * @params
 * @return
 */
exports.editInfo = function(newInfo, cb){
	var sql = 'UPDATE g_customer_corp set CORP_NAME=?, INTRO=?, STATUS=? WHERE id=?';
	var postData = [
		newInfo.CORP_NAME,
		newInfo.INTRO,
		newInfo.STATUS || 1,
		newInfo.id
	];
	mysql.query(sql, postData, function (err, status){
		if(err) return cb(err);
		cb(null, status);
	});
};