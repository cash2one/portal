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

/**
 *
 * @params
 * @return
 */
exports.saveNew = function(newInfo, cb){
	var sql = 'INSERT INTO g_house_project (id, CORP_ID, PROJECT_NAME, PROJECT_DESC, PRICE, GRADE, ZONE_ID, ABODE_TIME, IMG_1, IMG_2, IMG_3, TEL_1, TEL_2, TEL_3, HOUSE_TYPE_ID, LAT, LNG, HOUSE_STYLE, PLAN_SALE_TIME, SALE_STATUS_ID, ADDR, CREATE_TIME, STATUS) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
	var postData = [
		util.genObjectId(),
		newInfo.CORP_ID,
		newInfo.PROJECT_NAME,
		newInfo.PROJECT_DESC,
		newInfo.PRICE,
		newInfo.GRADE,
		newInfo.ZONE_ID,
		newInfo.ABODE_TIME,
		newInfo.IMG_1,
		newInfo.IMG_2,
		newInfo.IMG_3,
		newInfo.TEL_1,
		newInfo.TEL_2,
		newInfo.TEL_3,
		newInfo.HOUSE_TYPE_ID,
		newInfo.LAT,
		newInfo.LNG,
		newInfo.HOUSE_STYLE,
		newInfo.PLAN_SALE_TIME,
		newInfo.SALE_STATUS_ID,
		newInfo.ADDR,
		new Date(),
		newInfo.STATUS || 1
	];
	mysql.query(sql, postData, function (err, status){
		if(err) return cb(err);
		cb(null, status);
	});
};