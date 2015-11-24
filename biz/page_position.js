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
 * 获取广告位（通过页ID查找）
 *
 * @param
 * @return
 */
exports.findPositionsByPage = function(page_id, cb){
	mysql_util.find(null, 'g_page_position', [['PAGE_ID', '=', page_id]], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};

/**
 * 获取扩展数据
 *
 * @param
 * @return
 */
exports.findPositionExtsByPage = function(page_id, cb){
	var sql = 'SELECT * FROM g_page_position_ext WHERE PID in (SELECT id FROM g_page_position WHERE PAGE_ID=?)';
	mysql.query(sql, [page_id], function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};