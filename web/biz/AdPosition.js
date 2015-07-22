/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var mysqlUtil = require("../lib/mysqlUtil");

exports.getByZoneAndPage = function(zone_id, page_id, cb){
	mysqlUtil.query('SELECT * FROM w_ad_position WHERE ZONE_ID=? AND PID=?', [zone_id, page_id], function (err, rows, fields){
		if(err) return next(err);
		cb(err, rows);
	});
};