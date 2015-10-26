/*!
 * hnzswh-dolalive
 * Copyright(c) 2015 hnzswh-dolalive <3203317@qq.com>
 * MIT Licensed
 */
'use strict';

var util = require('speedt-utils'),
	mysql_util = util.mysql_util,
	mysql = util.mysql;

var exports = module.exports;

/**
 * 通过 wifi mac 获取唯一记录
 *
 * @param
 * @return
 */
exports.findDefOpenSite = function(mac, cb){
	mysql_util.find(null, 'w_wifi', [['WIFI_MAC', '=', mac]], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, mysql.checkOnly(docs) ? docs[0] : null);
	});
};