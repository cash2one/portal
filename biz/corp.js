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

var _sql = 'SELECT a.*, b.USER_NAME, c.TYPE_NAME CORP_TYPE_NAME FROM g_customer_corp a, g_customer b, g_customer_corp_type c WHERE a.CUSTOMER_ID=b.id AND a.CORP_TYPE_ID=c.id ORDER BY a.CREATE_TIME DESC';

/**
 *
 * @params
 * @return
 */
exports.findAll = function(cb){
	var sql = _sql;
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
exports.getById = function(id, cb){
	var sql = 'SELECT a.*, b.USER_NAME, b.REAL_NAME FROM g_customer_corp a, g_customer b WHERE a.CUSTOMER_ID=b.id AND a.id=?';
	mysql.query(sql, [id], function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0]: null);
	});
};

/**
 *
 * @params
 * @return
 */
exports.getByName = function(name, cb){
	mysql_util.find(null, 'g_customer_corp', [['CORP_NAME_EN', '=', name]], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0] : null);
	});
};

/**
 *
 * @params
 * @return
 */
exports.saveNew = function(newInfo, cb){
	// format
	newInfo.CORP_NAME_EN = newInfo.CORP_NAME_EN || '';
	newInfo.CORP_NAME_EN = newInfo.CORP_NAME_EN.trim();
	if('' === newInfo.CORP_NAME_EN) return cb(null, ['企业英文名称不能为空', 'CORP_NAME_EN']);
	// TODO
	this.getByName(newInfo.CORP_NAME_EN, function (err, doc){
		if(err) return cb(err);
		if(!!doc) return cb(null, ['企业英文名称已经存在', 'CORP_NAME_EN']);
		// CREATE
		var sql = 'INSERT INTO g_customer_corp (id, CUSTOMER_ID, CORP_NAME_CH, CORP_NAME_EN, INTRO, CORP_TYPE_ID, CREATE_TIME, STATUS) values (?, ?, ?, ?, ?, ?, ?, ?)';
		var postData = [
			util.genObjectId(),
			newInfo.CUSTOMER_ID,
			newInfo.CORP_NAME_CH,
			newInfo.CORP_NAME_EN.toLowerCase(),
			newInfo.INTRO,
			newInfo.CORP_TYPE_ID,
			new Date(),
			newInfo.STATUS || 1
		];
		mysql.query(sql, postData, function (err, status){
			if(err) return cb(err);
			cb(null, null, status);
		});
	});
};

/**
 *
 * @params
 * @return
 */
exports.editInfo = function(newInfo, cb){
	var sql = 'UPDATE g_customer_corp set CORP_NAME_EN=?, CORP_NAME_CH=?, INTRO=?, STATUS=? WHERE id=?';
	var postData = [
		newInfo.CORP_NAME_EN,
		newInfo.CORP_NAME_CH,
		newInfo.INTRO,
		newInfo.STATUS || 1,
		newInfo.id
	];
	mysql.query(sql, postData, function (err, status){
		if(err) return cb(err);
		cb(null, status);
	});
};