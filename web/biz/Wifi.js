/*!
 * zswhcb-portal
 * Copyright(c) 2015 zswhcb-portal <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	mysql = util.mysql;

/**
 * 通过 wifi mac 获取唯一记录
 *
 * @param {String} mac
 * @return
 */
exports.getByMac = function(mac, cb){
	mysql.query('SELECT * FROM w_wifi WHERE WIFI_MAC=?', [mac], function (err, rows, fields){
		if(err) return cb(err);

		if(!mysql.checkOnly(rows))
			return cb(null, null);

		cb(null, rows[0]);
	});
};