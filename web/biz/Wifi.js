/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var mysqlUtil = require("../lib/mysqlUtil");

/**
 * 通过 wifi mac 获取唯一记录
 *
 * @param {String} mac
 * @return
 */
exports.getByMac = function(mac, cb){
	mysqlUtil.query('SELECT * FROM w_wifi WHERE WIFI_MAC=?', [mac], function (err, rows, fields){
		if(err) return cb(err);

		if(!mysqlUtil.checkOnly(rows))
			return cb(null, null);

		cb(null, rows[0]);
	});
};