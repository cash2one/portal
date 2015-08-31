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
	mysql_util.find(null, 'w_page_position', [['PAGE_ID', '=', page_id]], null, null, function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};