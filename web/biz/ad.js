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
 * 通过页面id获取该页面的全部广告信息
 *
 * @param
 * @return
 */
exports.findAdsByPage = function(page_id, zone_id, cb){
	var sql = 'SELECT * FROM w_ad WHERE STATUS=1 AND (NOW() BETWEEN START_TIME and END_TIME) AND ZONE_ID=? AND PAGE_POSITION_ID in (SELECT id FROM w_page_position WHERE PAGE_ID=?) ORDER BY SORT ASC';
	mysql.query(sql, [zone_id, page_id], function (err, docs){
		if(err) return cb(err);
		cb(null, docs);
	});
};