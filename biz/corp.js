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