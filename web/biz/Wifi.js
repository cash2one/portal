/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var mysqlUtil = require("../lib/mysqlUtil");

exports.getByMac = function(mac, cb){
	mysqlUtil.query('SELECT * FROM w_wifi WHERE WIFI_MAC=?', [mac], function (err, rows, fields){
		if(err) return next(err);

		if(!mysqlUtil.checkOnly(rows))
			return cb(err, null);

		cb(err, rows[0]);
	});
};