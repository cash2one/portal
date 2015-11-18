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

var _sql = 'SELECT a.*, b.TYPE_NAME HOUSE_TYPE_NAME, c.ZONE_NAME, d.STATUS_NAME, e.INTRO, e.CORP_NAME '+
			'FROM g_house_project a, g_house_type b, w_zone c, g_house_project_sale_status d, g_customer_corp e '+
			'WHERE a.CORP_ID=e.id AND a.ZONE_ID=c.id AND a.HOUSE_TYPE_ID=b.id AND a.SALE_STATUS_ID=d.id';

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
exports.getById = function(id, cb){
	var sql = _sql +' AND a.id=?';
	mysql.query(sql, [id], function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0]: null);
	});
};