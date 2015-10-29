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
	var sql = 'SELECT a.*, b.TYPE_NAME HOUSE_TYPE_NAME, c.ZONE_NAME FROM h_house_project a, h_house_type b, w_zone c WHERE a.ZONE_ID=c.id AND a.HOUSE_TYPE_ID=b.id ORDER BY a.CREATE_TIME DESC';
	mysql.query(sql, null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};