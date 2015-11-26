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

var CORP_TYPE_ID = '564d33564e7d4a6005b371b0';

var _sql = 'SELECT * FROM (SELECT a.*, b.USER_NAME FROM g_customer_corp a, g_customer b WHERE a.CUSTOMER_ID=b.id AND CORP_TYPE_ID=?) g_customer_corp LEFT JOIN g_customer_corp_house ON (g_customer_corp.id=g_customer_corp_house.PID) ORDER BY g_customer_corp.CREATE_TIME DESC';

/**
 *
 * @params
 * @return
 */
exports.findAll = function(cb){
	var sql = _sql;
	mysql.query(sql, [CORP_TYPE_ID], function (err, docs){
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
	var sql = 'SELECT * FROM (SELECT * FROM g_customer_corp WHERE CORP_TYPE_ID=? AND id=?) g_customer_corp LEFT JOIN g_customer_corp_house ON (g_customer_corp.id=g_customer_corp_house.PID)';
	mysql.query(sql, [CORP_TYPE_ID, id], function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0]: null);
	});
};